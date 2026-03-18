"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import siteConfig from "@/data/siteConfig";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isBuilderRoute = pathname === "/build-your-chatbot";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav
            className={`navbar${scrolled ? " scrolled" : ""}${isBuilderRoute ? " is-builder-route" : ""}`}
            id="navbar"
        >
            <div className="container nav-container">
                <Link href="/" className="logo" aria-label="Vyarah home" onClick={handleLinkClick}>
                    <Image
                        src="/logo.png"
                        alt="Vyarah"
                        width={36}
                        height={36}
                        className="logo-img"
                        priority
                    />
                    <span className="logo-text">
                        Vya<span className="logo-highlight">rah</span>
                    </span>
                </Link>
                <ul className={`nav-links${menuOpen ? " active" : ""}`} id="navLinks">
                    {siteConfig.nav.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} onClick={handleLinkClick}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="nav-links-cta-mobile">
                        <Link
                            href="/#contact"
                            className="btn btn-dark btn-block"
                            onClick={handleLinkClick}
                        >
                            Start Free Strategy Call
                        </Link>
                    </li>
                </ul>
                <Link href="/#contact" className="btn btn-dark nav-cta">
                    Start Free Strategy Call
                </Link>
                <button
                    type="button"
                    className={`hamburger${menuOpen ? " active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    aria-controls="navLinks"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
