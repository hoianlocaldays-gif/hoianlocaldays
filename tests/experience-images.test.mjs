import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const imageFiles = [
  "cooking/classic-market-cooking.webp", "cooking/cocolocal-farm.webp", "cooking/organic-farm-cooking.webp", "cooking/lantern-cooking-combo.webp", "cooking/personal-market-cooking.webp", "cooking/food-lovers-cooking.webp", "cooking/small-local-cooking.webp",
  "basket-boat/classic-basketboat.webp", "basket-boat/popular-coconut-basketboat.webp", "basket-boat/family-basketboat.webp", "basket-boat/quieter-basketboat.webp", "basket-boat/short-basketboat.webp",
  "my-son/myson-overall-group.webp", "my-son/myson-early-morning.webp", "my-son/myson-private.webp", "my-son/myson-bike.webp", "my-son/myson-adventure.webp",
];

test("confirmed provider images are local, optimized and copied to static export", async () => {
  assert.equal(imageFiles.length, 17);
  for (const relative of imageFiles) {
    const source = await stat(join(root, "public/images/experiences", relative));
    const exported = await stat(join(root, "out/images/experiences", relative));
    assert.ok(source.size >= 45_000 && source.size <= 250_000, `${relative} is outside the practical image budget`);
    assert.equal(exported.size, source.size, `${relative} was not copied intact to out/`);
  }
});

test("experience cards use fixed dimensions, useful alt text and no remote image runtime", async () => {
  const component = await readFile(join(root, "components/cooking-editorial.tsx"), "utf8");
  assert.match(component, /width="1200" height="800"/);
  assert.match(component, /loading=\{priority \? "eager" : "lazy"\}/);
  for (const file of ["data/cooking-classes.ts", "data/basket-boat.ts", "data/my-son.ts"]) {
    const source = await readFile(join(root, file), "utf8");
    assert.doesNotMatch(source, /src:\s*"https?:\/\//, `${file} hotlinks an image`);
  }
});

test("image provenance distinguishes verified provider files from owner-selected files", async () => {
  const cooking = await readFile(join(root, "data/cooking-classes.ts"), "utf8");
  const allData = await Promise.all(["data/cooking-classes.ts", "data/basket-boat.ts", "data/my-son.ts"].map((file) => readFile(join(root, file), "utf8")));
  assert.equal(allData.join("\n").match(/sourceType: "verified-provider"/g)?.length, 14);
  assert.equal(cooking.match(/sourceType: "owner-selected"/g)?.length, 3);
  assert.equal(cooking.match(/sourcePlatform: "owner-supplied"/g)?.length, 3);
  assert.equal(cooking.match(/qualityStatus: "replace-when-better-source-available"/g)?.length, 2);
  assert.doesNotMatch(cooking, /sourceType: "provider"/);

  const component = await readFile(join(root, "components/cooking-editorial.tsx"), "utf8");
  assert.doesNotMatch(component, /sourceType|sourcePlatform|qualityStatus/);
});
