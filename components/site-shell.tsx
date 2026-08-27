import Link from "next/link";

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">H</span><span>Hoi An Local Days</span></Link><nav aria-label="Main navigation"><Link href="/things-to-do-in-hoi-an">Experiences</Link><Link href="/cooking-classes-hoi-an">Local picks</Link><Link href="/#guides">Guides</Link></nav><Link className="header-cta" href="/#plan">Plan my day</Link></header>;
}

export function Footer() {
  return <footer className="site-footer"><div><Link className="brand" href="/"><span className="brand-mark">H</span><span>Hoi An Local Days</span></Link><p>Local, curated and trustworthy experiences in Hoi An.</p></div><div><strong>Discover</strong><Link href="/things-to-do-in-hoi-an">Things to do</Link><Link href="/cooking-classes-hoi-an">Cooking classes</Link><Link href="/day-trips-from-hoi-an">Day trips</Link></div><div><strong>Plan</strong><Link href="/hoi-an-with-kids">With kids</Link><Link href="/where-to-stay-hoi-an">Where to stay</Link><Link href="/hoi-an-airport-transfer">Airport transfer</Link></div><div><strong>About</strong><Link href="/affiliate-disclosure">Affiliate disclosure</Link><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms</Link></div><p className="copyright">© 2026 Hoi An Local Days</p></footer>;
}
