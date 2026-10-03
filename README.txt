Tyler Desjardins — professional portfolio
=======================================

Next.js App Router, React, TypeScript, and Tailwind CSS. The site exports
static HTML for https://tddesjardins.github.io; it requires no backend.

Local development (Node.js 22 or newer)
--------------------------------------
  npm ci
  npm run dev

Open http://localhost:3000.

Validation and production preview
---------------------------------
  npm run lint
  npm run build
  python3 -m http.server 3000 --directory out

The build checks TypeScript and generates the deployable site in out/.
Preview out/ with a static server, not npm start (which requires a Next.js
server and does not support static exports). There was no existing test
suite; browser checks cover section navigation, mobile menu, card counts,
image loading, CV availability, and reduced-motion behavior.

Editing content
---------------
Project, science, and personal cards: components/content.tsx
Introduction, section descriptions, and footer: app/page.tsx
Shared navigation: components/links.ts
Colors, typography, and responsive styling: app/globals.css
SEO metadata: app/layout.tsx
CV: public/cv_public.pdf
Images: public/images/

The original image and CV URLs remain available. Cards use pre-optimized
WebP assets; when replacing an image, also update its WebP version and alt
text. Next Image uses unoptimized mode because GitHub Pages has no image
optimization server. Below-the-fold images are lazy-loaded. Typography
uses system fonts, with no external font requests.

Deployment
----------
In repository Settings > Pages, choose "GitHub Actions" as the source.
The workflow in .github/workflows/pages.yml lints and builds pull requests,
and deploys pushes to main (or manual runs on main) to GitHub Pages.
Only the deployment job receives Pages write and OIDC permissions.
The user-site domain serves from /, so no basePath is required.

Accessibility
-------------
Keyboard navigation, visible focus styles, a skip link, descriptive image
alt text, semantic landmarks, and a labeled mobile menu are included.
Content is statically rendered; scroll reveals never hide it without
JavaScript. Reduced-motion preferences disable animations and smooth scroll.

Dependency audit note
---------------------
The current ESLint/Next lint configuration depends transitively on braces
3.0.3, affected by GHSA-vfj7-8cjw-p6xm with no published patched version.
This is a development-only glob-pattern parser, not part of the deployed
static website. Do not pass untrusted glob patterns to lint tooling;
monitor upstream updates. npm audit --omit=dev checks runtime dependencies.

Legacy template
---------------
The unused assets/ directory and LICENSE.txt remain from the previous
HTML5 UP Prologue template. They are not imported by the new application.
