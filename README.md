# fresh-cuts

Fresh Cuts is a website for a barbershop in Ikeja, Lagos. Its owner is Mr Tunde. Fresh Cuts is a sample business made
up for the Zero to Hired course. The address, the phone number and the prices are made up too.

This branch, `end-of-sprint-8`, is the Fresh Cuts project as it is at the end of Sprint 8.

## You are starting at Sprint 10 or 13

Use this copy if you start the course at Sprint 10 or later and you do not have your own Fresh Cuts project from Sprint 8. Lesson 10.12, "Keep the cart after a refresh", works in it. Sprint 13's launch lessons practise on a site of yours on Netlify: this copy, put online, works for that.

### What this copy contains

- Everything from Sprints 6 and 7: one header on every page, `/services` with `?category=`, `/services/[id]`, the 404 page, `/book` and `/book/thanks`, My visit at `/visit` (`src/lib/cart.svelte.js`), and the services and bookings in Postgres with Drizzle.
- Barber accounts with Better Auth: `/signup`, `/login`, and a Log out button in the header (`src/lib/server/auth.js`; Better Auth's tables in `src/lib/server/db/auth.schema.js`).
- `src/hooks.server.js`, which puts the logged-in barber in `locals.user`.
- `/dashboard`, a protected page: each barber sees and changes only their own bookings. Nobody logged in gives 401; another barber's booking gives 403. The shop's open list at `/bookings` is gone.
- The booking form asks which barber the booking is for.
- A password reset by email: `/forgot-password` and `/reset-password` (`src/lib/server/email.js`). With no Resend key, the email is printed in the terminal.
- A test: `src/lib/prices.test.js` tests `orderTotal`. Run it with `npm test`.
- `.npmrc` with `legacy-peer-deps=true`, so that `npm install` installs Better Auth with SvelteKit 3.
- The practice pages from Sprint 2: `/prices` and `/about`.

Use a new, empty Neon database for this copy, not your Sprint 7 one: every booking now needs a barber, so old bookings cannot stay.

### Start

You need Node 22.17 or newer and a free Neon database (neon.tech), new and empty.

```
git clone --branch end-of-sprint-8 https://github.com/wilsonowilson/fresh-cuts-starter.git fresh-cuts
cd fresh-cuts
npm install
cp .env.example .env
npx auth secret
npm run db:push
npm run db:seed
npm run dev
```

Before `npm run db:push`, open `.env` and put in your own values (see below). `npx auth secret` prints a `BETTER_AUTH_SECRET=…` line: copy its value into `.env`. `npm run db:push` shows the SQL for six tables, then asks a question: press the down arrow once to choose "Yes, I want to execute all statements", then press Enter. `npm run db:seed` prints `Added 8 services.` Run it only once.

Then open `http://localhost:5173/signup` in Chrome and make a barber account, for example Tunde Ade, `tunde@freshcuts.ng` (a made-up address). Book at `/book` for that barber, then open `/dashboard`. `npm test` runs the test: 2 tests pass. To stop the dev server, click in the terminal and press Ctrl+C.

### The values in `.env`

| Name | What to put | Example (not a real one) |
|---|---|---|
| `DATABASE_URL` | Your new Neon database's connection string: in Neon, click Connect, show the password, and copy it. | `postgresql://user:password@host.neon.tech/neondb?sslmode=require` |
| `ORIGIN` | The address of your site. | `http://localhost:5173` (on Netlify: your site's address) |
| `BETTER_AUTH_SECRET` | The value that `npx auth secret` prints: 64 letters and digits. | (make your own; never share it) |
| `RESEND_API_KEY` | Leave it empty while you learn. The reset email is then printed in the terminal. | (empty) |

The app needs every one of these names, even for `npm run build` (`RESEND_API_KEY` may be empty). On Netlify, add them under the site's environment variables, with a different `BETTER_AUTH_SECRET`.

Then open **Lesson 10.12, "Keep the cart after a refresh" (or the first lesson of the sprint you start)** in the course.

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
3. On Netlify, add the repository as a new project. Before the first deploy, add `DATABASE_URL`, `ORIGIN`, `BETTER_AUTH_SECRET` and `RESEND_API_KEY` in the site's environment variables.

## What is inside

| File or folder | What it does |
|---|---|
| `.env.example` | An example of `.env`, with the four names. Copy it to `.env` and put your own values in it. |
| `src/env.js` | The list of environment variables the app needs. |
| `src/hooks.server.js` | Puts the logged-in barber in `locals.user`, for every request. |
| `src/lib/server/auth.js` | Better Auth: accounts, sessions and the reset email. |
| `src/lib/server/db/schema.js`, `auth.schema.js` | The tables: `services` and `bookings` (each with a `user_id`), and Better Auth's four tables. |
| `src/lib/server/email.js` | Sends an email with Resend, or prints it in the terminal. |
| `src/routes/dashboard/` | The barber's own bookings, with cancel and delete. |
| `src/routes/signup/`, `login/`, `logout/`, `forgot-password/`, `reset-password/` | The account pages. |
| `src/lib/prices.test.js` | The test for `orderTotal`. |
| `package.json` | The commands: `dev`, `build`, `test`, `db:push`, `db:seed`, `db:studio`, `auth:schema`. |

Pages: `/`, `/services`, `/services?category=beard`, `/services/2`, `/visit`, `/book`, `/book/thanks`, `/signup`, `/login`, `/forgot-password`, `/reset-password`, `/dashboard`, `/prices`, `/about`.
