"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const liveNavigation = [
  { href: "/#cooking", label: "Services" },
  { href: "/cooking-classes-hoi-an", label: "Cooking Classes" },
  { href: "/transfer", label: "Private Cars" },
  { href: "/things-to-do-in-hoi-an", label: "Travel Guides" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return <header className="site-header"><Link className="brand" href="/" onClick={closeMenu}><span className="brand-mark">H</span><span>Hoi An Local Days</span></Link><nav className="desktop-navigation" aria-label="Main navigation">{liveNavigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div className="header-actions"><Link className="header-cta" href="/transfer" onClick={closeMenu}>Request a Car</Link><button ref={menuButton} className="menu-trigger" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((current) => !current)}><span aria-hidden="true"/><span aria-hidden="true"/><span aria-hidden="true"/></button></div><nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>{liveNavigation.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu}>{item.label}</Link>)}</nav></header>;
}

export function Footer() {
  return <footer className="site-footer"><div><Link className="brand" href="/"><span className="brand-mark">H</span><span>Hoi An Local Days</span></Link><p>Handpicked experiences. Local support.</p></div><div><strong>Services</strong><Link href="/#cooking">Tra Que Garden</Link><Link href="/transfer">Private cars</Link><Link href="/cooking-classes-hoi-an">Cooking classes</Link></div><div><strong>Plan</strong><Link href="/things-to-do-in-hoi-an">Things to do</Link><Link href="/3-days-in-hoi-an">3-day itinerary</Link><Link href="/hoi-an-with-kids">With kids</Link></div><div><strong>About</strong><Link href="/editorial-methodology">Editorial methodology</Link><Link href="/affiliate-disclosure">Affiliate disclosure</Link><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms</Link></div><p className="copyright">© 2026 Hoi An Local Days</p></footer>;
}
