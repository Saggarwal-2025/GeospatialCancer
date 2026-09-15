# Texas Geospatial Cancer Data Advocacy Project

A React site built with Vite and React Router: Home, Departments, Team, and Contact.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Pages

- **Home** (`/`) hero, the four "Who We Are / What We Do / Why This Matters / Our Advocacy
  Role" cards, and the embedded Texas Cancer Compass map. Edit `src/pages/Home.jsx`.
- **Departments** (`/departments`) the four departments and what each one does. Edit
  `src/pages/Departments.jsx`.
- **Team** (`/officers`) officer grid with photo, role, and name. Edit
  `src/pages/Officers.jsx`.
- **Contact** (`/contact`) contact details plus the embedded volunteer sign-up form. Edit
  `src/pages/Contact.jsx`.

## What still needs filling in

| What | Where |
| --- | --- |
| LinkedIn, X and GitHub profile links (still `#`) | `socials` array in `src/components/Footer.jsx` |
| Hero background photo, if you want something other than the current one | replace `src/assets/backdrop.jpg` |

The three hero statistics (254 counties, 30+ researchers, 4 departments) live in the `stats`
array in `src/pages/Home.jsx`. Confirm them before publishing.

The pre-crop original headshots are kept in `src/assets/` (`alan-cr.jpg`, `allison.png`, and so
on). Nothing imports them - the site uses the 4:5 crops in `src/assets/team/`. They are safe to
delete if you want a smaller deployment payload.

## Volunteer form

The link originally provided was the owner-only `/edit` URL, so this uses the public
`https://docs.google.com/forms/d/.../viewform?embedded=true` version instead. If the embed
shows an access error, open the form's *Send* dialog in Google Forms and confirm it is shared
as "Anyone with the link."

## Structure

```
server.js           # production server for GoDaddy Node.js Hosting (serves dist/, SPA fallback)
.npmrc              # pins installs to the public npm registry
index.html          # Vite entry document
vite.config.js
src/
  components/
    Navbar.jsx      # sticky nav + mobile menu
    Footer.jsx
    Logo.jsx        # inline SVG mark
    Icons.jsx       # inline SVG icon set
  pages/
    Home.jsx        # hero + about cards + map embed + CTA
    Departments.jsx # the four departments
    Officers.jsx    # officer grid
    Contact.jsx     # contact details + volunteer form
  assets/
    team/           # officer headshots, cropped to 4:5
  App.jsx           # routes and scroll handling
  index.css         # design tokens and all component styles
  main.jsx          # entry point (BrowserRouter)
```

## Deploy

**GoDaddy Node.js Hosting.** The platform installs production dependencies, runs
`npm run build`, then `npm start`. `npm start` runs `server.js`, which serves `dist/` through
Express and falls back to `index.html` so React Router handles `/departments`, `/officers` and
`/contact` on a hard refresh. It listens on `process.env.PORT`.

Because the platform's install omits `devDependencies`, `vite` and `@vitejs/plugin-react` are
listed under `dependencies` - moving them back would break the build on the host.

Deploy the repository root; never upload `node_modules` or `dist` (both are gitignored - the
platform builds them). To check the project against the platform contract:

```bash
node .agents/skills/godaddy-nodejs-hosting/scripts/validate-paas.mjs .
```

**Netlify.** `netlify.toml` sets the build command, the publish directory, and the SPA
rewrite. Connect the repo and Netlify reads all three - no settings to fill in by hand.

**Vercel.** `vercel.json` rewrites every path to `index.html`. Same job, different host.

All three configs coexist; each host reads only its own and ignores the others.

## Colors

Defined as custom properties at the top of `src/index.css`: maroon `#4f1b1f`, paper `#edf0f0`,
with blue `#1c5d8d`, teal `#49b5a8`, and mint `#a9ddd4` as data accents.
