export type ExperienceImage = {
  src: string;
  alt: string;
  sourcePlatform?: "viator" | "getyourguide" | "hal-original" | "owner-supplied";
  sourceProductId?: string;
  sourcePage?: string;
  sourceType: "verified-provider" | "owner-selected" | "hal-original";
  downloadedAt?: string;
  qualityStatus?: "good" | "replace-when-better-source-available";
};
