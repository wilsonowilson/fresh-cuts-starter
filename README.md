# fresh-cuts

Fresh Cuts is a website for a barbershop in Ikeja, Lagos. Its owner is Mr Tunde. Fresh Cuts is a sample business made
up for the Zero to Hired course. The address, the phone number and the prices are made up too.

This branch, `end-of-sprint-3`, is the Fresh Cuts project as it is at the end of Sprint 3.

## You are starting at Sprint 5

Use this copy if you start the course at Sprint 5 and you do not have your own Fresh Cuts project from Sprint 3.
(Sprint 4 does not use Fresh Cuts: it gives you the weather starter in Lesson 4.9.)

### What this copy contains

- The Fresh Cuts homepage at `/`, built from four components in `src/lib`: `Header.svelte`, `ServiceCard.svelte`,
  `TipCalculator.svelte` and `Footer.svelte`.
- The list of eight services, in its own content file, `src/lib/content.js` (Lesson 3.5). The home page imports it
  with `import { services } from '#lib/content.js';` and draws one card for each service with `{#each}`.
- A Book button on every card. Each tap adds 1 to "Bookings made" (a `$state` value).
- A tip calculator that reads what you type (`bind:value`).
- A phone-first layout: one column of cards on a phone, three on a laptop.
- Two small practice pages from Sprint 2: `/prices` and `/about`.
- The Netlify adapter, already set up in `vite.config.js`.

There is no booking page yet. Sprint 5 adds it: a form at `/book`, checked on the server.

### Start

You need Node 22.17 or newer. You do not need a `.env` file or any account for this copy.

```
git clone --branch end-of-sprint-3 https://github.com/wilsonowilson/fresh-cuts-starter.git fresh-cuts
cd fresh-cuts
npm install
npm run dev
```

Open `http://localhost:5173` in Chrome. You see the Fresh Cuts homepage with eight service cards. To stop the dev
server, click in the terminal and press Ctrl+C.

Then open **Lesson 5.0, "Read a SvelteKit project: the map"**, in the course.

### Put it on GitHub and Netlify

The later lessons push your changes to GitHub, and Netlify puts the site online. This copy came from the course's
repository, so first point it at a repository of your own:

1. On GitHub, make a new empty repository named `fresh-cuts`.
2. In the `fresh-cuts` folder, run these three commands. Put your own address in the second one.

   ```
   git branch -m main
   git remote set-url origin https://github.com/your-name/fresh-cuts.git
   git push -u origin main
   ```
3. On Netlify, add the repository as a new project. No settings are needed.

## What is inside

| File or folder | What it does |
|---|---|
| `src/routes/+page.svelte` | The home page. It holds the "Bookings made" count. |
| `src/lib/content.js` | The content file: the list of services, with `export`. |
| `src/routes/prices/+page.svelte`, `src/routes/about/+page.svelte` | The practice pages at `/prices` and `/about`. |
| `src/lib/` | The four components (`Header`, `ServiceCard`, `TipCalculator`, `Footer`) and `content.js`. |
| `src/routes/+layout.svelte` and `layout.css` | They add the Tailwind styles to every page. Leave them for now. |
| `package.json` | The list of packages the project needs, and the commands `npm run dev` and `npm run build`. |
| `vite.config.js` | The settings for Svelte, Tailwind and Netlify. You do not need to change it. |
