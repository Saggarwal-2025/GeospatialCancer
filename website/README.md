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
- **Team** (`/officers`) officer grid with photo, role, name, and bio. Edit
  `src/pages/Officers.jsx`.
- **Contact** (`/contact`) contact details plus the embedded volunteer sign-up form. Edit
  `src/pages/Contact.jsx`.

## What still needs filling in

Everything outstanding is marked with a `PLACEHOLDER` comment in the source, and shows on the
page as a dashed box or bracketed text like `[ contact email - add here ]`.

| What | Where |
| --- | --- |
| Texas Cancer Compass URL | `COMPASS_URL` in `src/config.js` (wires up the embedded map, the nav button, and the footer link) |
| Officer headshots | `src/pages/Officers.jsx`, see the comment above the `officers` array |
| Officer bios | `src/pages/Officers.jsx` |
| Contact email, location, socials, data-request address | `details` array in `src/pages/Contact.jsx` |
| Hero background photo | replace `src/assets/backdrop.jpg` |
| Social profile links | `socials` array in `src/components/Footer.jsx` |

The three hero statistics (254 counties, 30+ researchers, 4 departments) live in the `stats`
array in `src/pages/Home.jsx`. Confirm them before publishing.

## Volunteer form

The link originally provided was the owner-only `/edit` URL, so this uses the public
`https://docs.google.com/forms/d/.../viewform?embedded=true` version instead. If the embed
shows an access error, open the form's *Send* dialog in Google Forms and confirm it is shared
as "Anyone with the link."

## Structure

```
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
  App.jsx           # routes and scroll handling
  index.css         # design tokens and all component styles
  main.jsx          # entry point (BrowserRouter)
```

## Colors

Defined as custom properties at the top of `src/index.css`: maroon `#4f1b1f`, paper `#edf0f0`,
with blue `#1c5d8d`, teal `#49b5a8`, and mint `#a9ddd4` as data accents.
