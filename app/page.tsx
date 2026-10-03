import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { navigation } from "@/components/links";
import { Reveal } from "@/components/reveal";
import { PortfolioCard } from "@/components/portfolio-card";
import { personal, publications, science, technical } from "@/components/content";
import { Arrow } from "@/components/icon";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <section id="top" className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow flex items-center gap-3"><span className="status-dot" /> Scientist. Astronomer. Builder.</p>
            <h1>Tyler<br />Desjardins<span className="text-accent">.</span></h1>
            <p className="hero-role">Senior Staff Scientist <span aria-hidden="true">/</span><br className="sm:hidden" /> Roman Space Telescope</p>
            <p className="hero-description">
              I&apos;m a Ph.D. scientist and member of the technical staff at the{" "}
              <a href="https://www.stsci.edu">Space Telescope Science Institute</a>,
              working in the Science Operations Center for NASA&apos;s upcoming{" "}
              <a href="https://roman.gsfc.nasa.gov/">Nancy Grace Roman Space Telescope</a> flagship mission.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="button button-primary" href={publications}>ADS Publications <Arrow className="-rotate-45" /></a>
              <a className="button button-secondary" href="/cv_public.pdf">View CV <Arrow className="-rotate-45" /></a>
              <a className="button button-text" href="mailto:desjard@stsci.edu">E-mail <Arrow className="-rotate-45" /></a>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/images/roman_deep.webp" alt="A simulated Roman deep field filled with distant galaxies" fill sizes="(max-width: 767px) 100vw, 45vw" preload className="object-cover" />
            <div className="hero-image-shade" />
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <span className="hero-image-label">A wider view of our universe</span>
            <div className="profile-note">
              <Image src="/images/headshot_web.png" alt="Tyler Desjardins" width={64} height={64} className="rounded-full" />
              <div><p className="font-semibold">Exploration, through science.</p><p className="text-sm text-muted">Based in Baltimore, Maryland</p></div>
            </div>
          </div>
          <a href="#technical" className="hero-scroll"><span className="scroll-line" aria-hidden="true" /> Discover my work <Arrow className="rotate-90" /></a>
        </section>

        <section id="technical" className="section section-light">
          <div className="shell">
            <header className="section-heading" data-reveal>
              <div><p className="eyebrow">01 / Engineering discovery</p><h2>Technical work<span className="text-accent">.</span></h2></div>
              <p>I work full-time on the Roman Space Telescope in the Instruments Division at STScI. Previously, I worked on the Advanced Camera for Surveys (ACS) on the Hubble Space Telescope.</p>
            </header>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {technical.map((item) => <PortfolioCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>

        <section id="science" className="section section-dark">
          <div className="shell">
            <header className="section-heading" data-reveal>
              <div><p className="eyebrow">02 / Asking bigger questions</p><h2>Science interests<span className="text-accent">.</span></h2></div>
              <p>My research centers on extragalactic observational astronomy, using X-ray imaging spectroscopy and optical imaging to better understand the universe.</p>
            </header>
            <p className="science-background" data-reveal>I have extensive experience with Hubble&apos;s ACS and Wide Field Planetary Camera 2 (WFPC2), Chandra&apos;s Advanced CCD Imaging Spectrometer (ACIS), and several ground-based observing facilities.</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {science.map((item) => <PortfolioCard key={item.title} item={item} dark />)}
            </div>
            <div className="science-links" data-reveal>
              <p>Explore the research behind the work.</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <a href={publications}>All publications on NASA ADS <Arrow className="-rotate-45" /></a>
                <a href="https://ir.lib.uwo.ca/etd/2283/">Ph.D. thesis · Western Ontario <Arrow className="-rotate-45" /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="personal" className="section">
          <div className="shell">
            <header className="section-heading" data-reveal>
              <div><p className="eyebrow">03 / Beyond the telescope</p><h2>A little more human<span className="text-accent">.</span></h2></div>
              <p>Originally from central Florida, I&apos;ve lived along the U.S. east coast, in Ontario, Canada for my Ph.D., and in Lawrence, Kansas as a postdoc.</p>
            </header>
            <p className="personal-background" data-reveal>In 2017, Catsby and I headed east to Baltimore, Maryland. We settled in the northeast corner of the city, where pandemic isolation sparked my gardening hobby: growing plants from seed, planting containers, setting up irrigation, and planning future landscaping.</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {personal.map((item) => <PortfolioCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="footer-top">
            <div><p className="eyebrow">Let&apos;s connect</p><h2>Good science starts<br />with a conversation.</h2></div>
            <a className="button button-primary" href="mailto:desjard@stsci.edu">desjard@stsci.edu <Arrow className="-rotate-45" /></a>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Tyler D. Desjardins</p>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
              {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            </nav>
            <a href="https://www.github.com/tddesjardins" className="inline-flex items-center gap-2">GitHub <Arrow className="-rotate-45" /></a>
          </div>
        </div>
      </footer>
      <Reveal />
    </>
  );
}
