"use client";

import { useEffect, useState } from "react";
import { navigation } from "./links";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    for (const item of navigation) {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="shell flex flex-wrap items-center justify-between gap-x-4 py-4">
        <a href="#top" className="wordmark" aria-label="Tyler Desjardins, intro">
          td<span className="text-accent">.</span>
        </a>
        <button
          type="button"
          className="menu-toggle md:hidden"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={open ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`${open ? "flex" : "hidden"} w-full flex-col gap-1 pt-4 md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:pt-0`}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
            }
          }}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={active === item.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="mailto:desjard@stsci.edu">Get in touch <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
