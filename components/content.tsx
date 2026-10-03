import type { ReactNode } from "react";

export const publications =
  "https://ui.adsabs.harvard.edu/search/q=orcid%3A0000-0001-6905-1859&sort=date+desc";

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
  href?: string;
  contain?: boolean;
  description: ReactNode;
};

export const technical: PortfolioItem[] = [
  {
    title: "Roman Data",
    category: "Data systems",
    image: "roman_deep",
    alt: "Simulated deep-field view of galaxies from the Roman Space Telescope",
    href: "https://hubblesite.org/contents/media/images/2021/03/4797-Image",
    description: <>I work with the Data Management System in the Roman Science Operations Center to help define the Wide Field Instrument data format and coordinate example/test data for development and scientific validation of the data pipeline. The Data Management Division at STScI develops the software, reusing as much of the James Webb pipeline as possible. My focus is on the important differences between Webb and Roman that require changes to the pipeline and reference files.</>,
  },
  {
    title: "Roman Coordinate Systems",
    category: "Instrument geometry",
    image: "roman",
    alt: "Illustration of the Nancy Grace Roman Space Telescope",
    href: "https://www.stsci.edu/roman",
    description: <>The Science Instrument Aperture File (SIAF) is used by ground systems for guide star tracking and for populating science-file metadata during calibration. I lead the development and delivery of the Roman SIAF, including decisions about user-facing coordinate systems and their transformations to sky- and observatory-based frames.</>,
  },
  {
    title: "HST/ACS Reference Files",
    category: "Python · MySQL · Flask",
    image: "acs_logo_transparent",
    alt: "Advanced Camera for Surveys instrument logo",
    href: "https://www.stsci.edu/hst/instrumentation/acs",
    contain: true,
    description: <>I spearheaded a modernized pipeline for creating HST/ACS reference files, including the dark, bias, and sink pixel files used by the science calibration pipeline. Built with Python 3 and a MySQL database server, it includes a Flask-powered dashboard for generating diagnostic reports.</>,
  },
  {
    title: "ACS Polarimetry",
    category: "Calibration · Analysis",
    image: "v838mon",
    alt: "Hubble image of the light echo surrounding the star V838 Monocerotis",
    href: "https://hubblesite.org/contents/media/images/2004/10/1491-Image.html",
    description: <>I recalibrated the ACS/WFC polarizing filters and corrected inconsistencies in the documentation. I developed code in the <a href="https://github.com/spacetelescope/acstools">ACS Tools</a> Python package to simplify calculating polarization properties from ACS photometry. With Dean Hines, I co-led an investigation into using ACS as a spectropolarimeter.</>,
  },
  {
    title: "ACS/WFC Calibration Projects",
    category: "Detector characterization",
    image: "gain_flat",
    alt: "Calibration plot showing the ACS Wide Field Channel gain",
    href: "https://www.stsci.edu/hst/instrumentation/acs",
    contain: true,
    description: <>My calibration work supports many aspects of the ACS Wide Field Channel CCDs: leading development of an absolute gain monitor program that now runs annually, investigating detector read noise history and anomalies, and advising on the efficacy of the monthly CCD annealing program.</>,
  },
  {
    title: "Hubble Help Desk & Documentation",
    category: "Science communication",
    image: "hubble",
    alt: "The Hubble Space Telescope in orbit above Earth",
    href: "https://www.stsci.edu/hst",
    description: <>As Hubble Help Desk Lead during the transition to ServiceNow, I organized general staffing and coordinated with instrument help desks and my James Webb counterpart. I helped modernize Hubble documentation in <a href="https://hst-docs.stsci.edu">HDox</a>, updated the HST and ACS Data Handbooks to remove outdated information such as IRAF, organized Jupyter notebooks for ACS calibration and analysis, and assisted with AstroDrizzle notebooks.</>,
  },
];

export const science: PortfolioItem[] = [
  {
    title: "Active Galactic Nuclei",
    category: "01 / Black holes",
    image: "ngc5548",
    alt: "The active galaxy NGC 5548, observed by Hubble",
    href: "https://esahubble.org/images/heic1413a/",
    description: <>Supermassive black holes at the centers of galaxies are the Universe&apos;s most powerful persistent energy sources. Multi-wavelength observations let us untangle their mysteries. As an undergraduate, I examined optical SDSS AGN variability and its relationship with black hole mass derived from SDSS spectroscopy. My Ph.D. thesis identified AGN candidates in the Coma Cluster using X-ray, optical, infrared, and radio selection criteria.</>,
  },
  {
    title: "Environmental Galaxy Evolution",
    category: "02 / Galaxies & their environments",
    image: "stephans_quintet",
    alt: "Interacting galaxies in Stephan’s Quintet, photographed by Hubble",
    href: "https://hubblesite.org/contents/media/images/2009/25/2575-Image.html",
    description: <>Galactic cannibalism, major mergers, and ram pressure stripping in cluster halos shape galaxy evolution over cosmic time. Understanding these processes reveals the past and future of galaxies. In my Ph.D., I examined diffuse X-ray emission around and between galaxies in compact groups. As a postdoc, I generated photometric catalogs for the ESO Distant Cluster Survey (EDisCS) using multiple ground-based observatories.</>,
  },
  {
    title: "X-ray Binaries",
    category: "03 / Stellar populations",
    image: "ic10x1",
    alt: "Composite view of the galaxy IC 10 and its X-ray source",
    href: "https://www.cfa.harvard.edu/news/massive-black-hole-smashes-record",
    description: <>These systems pair a star with a compact object. Their populations correlate with galaxy stellar mass (low-mass binaries) and star formation rate (high-mass binaries). During my master&apos;s work, I studied nearby face-on spiral galaxies with Chandra ACIS and Hubble ACS, searching for probable optical counterparts to X-ray point sources. This helped separate low- and high-mass populations for more accurate analyses of these scaling relationships in other galaxies.</>,
  },
];

export const personal: PortfolioItem[] = [
  {
    title: "The Great Catsby",
    category: "My favorite companion",
    image: "catsby1",
    alt: "Catsby, an orange cat, relaxing at home",
    description: <>I found this little fluffball in 2015 at the <a href="https://lawrencehumane.org/">Lawrence Humane Society</a> in Kansas. She was about a year old and in rough shape. The shelter named her The Great Catsby; I kept the name, but we call her Catsby. We&apos;ve been best friends ever since, and she loves everyone she meets.</>,
  },
  {
    title: "Gardening",
    category: "A little closer to Earth",
    image: "plants1",
    alt: "A garden container planted with snapdragons, bacopa, and heuchera",
    description: <>Since buying my first home, I&apos;ve loved learning about different plants and trying to grow them. Some are fussy, some are easy, and they all have interesting temperaments. This container from spring 2021 features snapdragons, bacopa, and heuchera—which was starting to take over!</>,
  },
  {
    title: "Gaming",
    category: "Exploring other worlds",
    image: "ffxiv",
    alt: "A scene from the role-playing game Final Fantasy XIV",
    description: <>I&apos;m an avid video gamer and occasionally stream on Twitch. I mostly play role-playing games such as Final Fantasy XIV, Subnautica, and Divinity Original Sin, with the occasional 4X game like Civilization mixed in.</>,
  },
];
