# fresh-cuts

Fresh Cuts is a website for a barbershop in Ikeja, Lagos. Its owner is Mr Tunde. Fresh Cuts is a sample business made
up for the Zero to Hired course. The address, the phone number and the prices are made up too.

This branch, `end-of-sprint-5`, is the Fresh Cuts project as it is at the end of Sprint 5.

## You are starting at Sprint 6

Use this copy if you start the course at Sprint 6 and you do not have your own Fresh Cuts project from Sprint 5.

### What this copy contains

- Everything from Sprints 2 and 3: the homepage built from `Header`, `ServiceCard`, `TipCalculator` and `Footer` in `src/lib`, and the list of services in the content file, `src/lib/content.js` (each service now has an `id`; the file also exports `days`).
- A booking page at `/book`, linked from the homepage with "Send a booking request".
- `src/routes/book/+page.server.js`, which runs only on the server: `load` sends the services and the days to the page, and the form action (`actions.default`) reads the form with `request.formData()`.
- Validation on the server: each empty field gets an error, and `fail(400, { values, errors })` sends them back. The page shows each error under its field and puts the typed values back.
- The bookings list, `const bookings = [];`, at the top of the server file. It is kept in the server's memory, so it is lost when the server restarts (Lesson 5.6).
- The practice pages from Sprint 2: `/prices` and `/about`.
- The Netlify adapter, already set up in `vite.config.js`.

The header and the footer are inside the homepage, and `/book` has neither: Lesson 6.1 moves them into the layout, `src/routes/+layout.svelte`, which is still as `sv create` made it. There is no `src/lib/server/` folder yet.

### Start

You need Node 22.17 or newer. You do not need a `.env` file or any account for this copy.

```
git clone --branch end-of-sprint-5 https://github.com/wilsonowilson/fresh-cuts-starter.git fresh-cuts
cd fresh-cuts
npm install
npm run dev
```

Open `http://localhost:5173` in Chrome. You see the Fresh Cuts homepage. Tap "Send a booking request" to open the form at `/book`. Send it empty: an error shows under each field. To stop the dev server, click in the terminal and press Ctrl+C.

Then open **Lesson 6.1, "One header on every page"** in the course.

### Put it on GitHub and Netlify

The lessons push your changes to GitHub, and Netlify puts the site online. This copy came from the course's
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
| `src/routes/+page.svelte` | The home page. |
| `src/routes/book/+page.svelte` | The booking form. |
| `src/routes/book/+page.server.js` | The server file of the booking page: `load`, the form action, the checks and the bookings list. |
| `src/lib/content.js` | The content file: `services` and `days`. |
| `src/lib/` | The four components: `Header`, `ServiceCard`, `TipCalculator` and `Footer`. |
| `src/routes/prices/`, `src/routes/about/` | The practice pages from Sprint 2. |
| `src/routes/+layout.svelte` and `layout.css` | They add the Tailwind styles to every page. Lesson 6.1 changes the layout. |
| `vite.config.js` | The settings for Svelte, Tailwind and Netlify. |
