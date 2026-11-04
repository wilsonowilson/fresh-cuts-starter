# fresh-cuts

Fresh Cuts is a website for a barbershop in Ikeja, Lagos. Its owner is Mr Tunde. Fresh Cuts is a sample business made
up for the Zero to Hired course. The address, the phone number and the prices are made up too.

This branch, `end-of-sprint-6`, is the Fresh Cuts project as it is at the end of Sprint 6.

## You are starting at Sprint 7

Use this copy if you start the course at Sprint 7 and you do not have your own Fresh Cuts project from Sprint 6.

### What this copy contains

- One header and one footer on every page, in the layout, `src/routes/+layout.svelte` (`{@render children()}` draws the page between them).
- A page of all the services at `/services`, with a filter in the address: `/services?category=beard`.
- A page for each service at `/services/[id]`, such as `/services/2`. An id that does not exist gives a 404 page, from `src/routes/+error.svelte`.
- The booking form at `/book`. After a good request, `redirect(303, '/book/thanks')` opens the thanks page. The form uses `use:enhance`, so the page does not reload.
- The shop's list of booking requests at `/bookings`, with a Cancel button on each (a named action, `?/cancel`). Anyone can open this page: Sprint 8 fixes that.
- The bookings list in `src/lib/server/bookings.js`. It is still kept in the server's memory, so it is lost when the server restarts. Sprint 7 moves it into a database.
- "My visit" at `/visit`: shared state in `src/lib/cart.svelte.js`, and the total from `orderTotal` in `src/lib/prices.js` (`$derived`).
- A title and a description on every page (`<svelte:head>`).
- The practice pages from Sprint 2: `/prices` and `/about`.
- The Netlify adapter, already set up in `vite.config.js`.

There is no database yet. In Sprint 7 you make a free Neon database and keep the services and the bookings in it with Drizzle. The lessons show you each step, including the `.env` file.

### Start

You need Node 22.17 or newer. You do not need a `.env` file or any account to run this copy.

```
git clone --branch end-of-sprint-6 https://github.com/wilsonowilson/fresh-cuts-starter.git fresh-cuts
cd fresh-cuts
npm install
npm run dev
```

Open `http://localhost:5173` in Chrome. Open `/services`, then a service, then send a booking request at `/book`. Your request shows at `/bookings`. Restart the dev server, and it is gone: that is where Sprint 7 starts. To stop the dev server, click in the terminal and press Ctrl+C.

Then open **Lesson 7.1, "Where the bookings should have been"** in the course.

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
| `src/routes/+layout.svelte` | The layout: the header and the footer around every page. |
| `src/routes/+page.svelte` | The home page: the popular services. |
| `src/routes/services/` | The services page (with `?category=`) and `[id]/`, the page for each service. |
| `src/routes/book/` | The booking form, its server file (`redirect` after a good request) and `thanks/`. |
| `src/routes/bookings/` | The shop's list of requests, with the `cancel` action. |
| `src/routes/visit/+page.svelte` | My visit. |
| `src/routes/+error.svelte` | The error page, such as 404. |
| `src/lib/content.js` | The content file: `services` (each with `category` and `description`), `categories` and `days`. |
| `src/lib/server/bookings.js` | The bookings list, in the server's memory. |
| `src/lib/cart.svelte.js`, `src/lib/prices.js` | The visit's shared state, and `orderTotal`. |
| `src/lib/` | The components: `Header`, `ServiceCard`, `TipCalculator` and `Footer`. |
| `src/routes/prices/`, `src/routes/about/` | The practice pages from Sprint 2. |

Pages: `/`, `/services`, `/services?category=beard`, `/services/2`, `/visit`, `/book`, `/book/thanks`, `/bookings`, `/prices`, `/about`.
