# fresh-cuts

Fresh Cuts is a website for a barbershop in Ikeja, Lagos. Its owner is Mr Tunde. Fresh Cuts is a sample business made
up for the Zero to Hired course. The address, the phone number and the prices are made up too.

This branch, `end-of-sprint-7`, is the Fresh Cuts project as it is at the end of Sprint 7.

## You are starting at Sprint 8

Use this copy if you start the course at Sprint 8 and you do not have your own Fresh Cuts project from Sprint 7.

### What this copy contains

- Everything from Sprint 6: one header on every page, `/services` with `?category=`, `/services/[id]`, the 404 page, `/book` and `/book/thanks`, the shop's list at `/bookings`, and My visit at `/visit`.
- The services and the bookings kept in a Postgres database with Drizzle, not in the server's memory.
- `src/env.js`, which declares `DATABASE_URL`, and `.env.example`, an example of the `.env` file. Your real `.env` is never committed to Git.
- The schema, `src/lib/server/db/schema.js`: the `services` and `bookings` tables. `bookings.service_id` is a foreign key to `services`.
- `src/lib/server/db/index.js` (the `db`; in dev it prints the SQL of every query in the terminal) and `drizzle.config.js`.
- Queries with `eq`, an `innerJoin` on `/bookings`, and insert, update (cancel) and delete.
- `src/lib/server/db/seed.js`, which adds the eight services to an empty database (`npm run db:seed`).
- The practice pages from Sprint 2: `/prices` and `/about`.

Anyone can open `/bookings` and cancel any booking. Sprint 8 asks why that is a problem, and adds accounts for the barbers. In Lesson 8.3 you make a new, empty database for that.

### Start

You need Node 22.17 or newer and a free Neon database (neon.tech). Sprint 7 shows how to make one.

```
git clone --branch end-of-sprint-7 https://github.com/wilsonowilson/fresh-cuts-starter.git fresh-cuts
cd fresh-cuts
npm install
cp .env.example .env
npm run db:push
npm run db:seed
npm run dev
```

Before `npm run db:push`, open `.env` and put your own Neon connection string after `DATABASE_URL=` (see below). `npm run db:push` shows the SQL for two tables, then asks a question: press the down arrow once to choose "Yes, I want to execute all statements", then press Enter. `npm run db:seed` prints `Added 8 services.` Run it only once.

Then open `http://localhost:5173` in Chrome. Send a booking request at `/book`, and see it at `/bookings`. Restart the dev server: this time, the booking is still there. To stop the dev server, click in the terminal and press Ctrl+C.

### The values in `.env`

| Name | What to put | Example (not a real one) |
|---|---|---|
| `DATABASE_URL` | Your Neon connection string: in Neon, click Connect, show the password, and copy it. | `postgresql://user:password@host.neon.tech/neondb?sslmode=require` |

The app needs `DATABASE_URL` even for `npm run build`. On Netlify, add it under the site's environment variables.

Then open **Lesson 8.1, "Who is this?" (or Lesson 8.2, "Staying logged in", if 8.1 is not open yet)** in the course.

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
3. On Netlify, add the repository as a new project. Before the first deploy, add `DATABASE_URL` in the site's environment variables.

## What is inside

| File or folder | What it does |
|---|---|
| `.env.example` | An example of `.env`. Copy it to `.env` and put your own value in it. |
| `src/env.js` | The list of environment variables the app needs: `DATABASE_URL`. |
| `drizzle.config.js` | Where the schema is, and which database `drizzle-kit push` sends it to. |
| `src/lib/server/db/schema.js` | The tables: `services` and `bookings`. |
| `src/lib/server/db/index.js` | The `db` that every server file uses. |
| `src/lib/server/db/seed.js` | Adds the eight services, once. |
| `src/routes/` | The pages. Each `+page.server.js` reads or changes the database. |
| `package.json` | The commands: `dev`, `build`, `db:push`, `db:seed`, `db:studio`. |

Pages: `/`, `/services`, `/services?category=beard`, `/services/2`, `/visit`, `/book`, `/book/thanks`, `/bookings`, `/prices`, `/about`.
