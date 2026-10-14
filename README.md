# fresh-cuts

The Zero to Hired Sprint 2 starter: the first page of a website for Fresh Cuts, a barbershop in Ikeja, Lagos.
Fresh Cuts is a sample business made up for the course. The address and the phone number are made up too.

## Start

You need Node 22.17 or newer.

```
git clone https://github.com/wilsonowilson/fresh-cuts-starter.git fresh-cuts
cd fresh-cuts
npm install
npm run dev
```

Then open `http://localhost:5173` in Chrome. To stop the dev server, click in the terminal and press Ctrl+C.

## What is inside

| File or folder | What it does |
|---|---|
| `src/routes/+page.svelte` | The home page. You change it in Lesson 2.1. |
| `src/routes/+layout.svelte` and `layout.css` | They add the Tailwind styles to every page. Leave them for now. |
| `src/lib/` | Your own components go here, from Lesson 2.4. |
| `package.json` | The list of packages the project needs, and the commands `npm run dev` and `npm run build`. |
| `vite.config.js` | The settings for Svelte, Tailwind and Netlify. You do not need to change it. |

## Which lessons use it

Sprint 2 builds the Fresh Cuts homepage in this project, from Lesson 2.1 ("Get a real project running") to
Lesson 2.10, where you put it online. The Sprint 2 check asks you to clone it again into a new folder.

## Put it live

Push to your own GitHub repository, then add it as a new project on Netlify. The Netlify adapter is
already set up in `vite.config.js`, so no settings are needed.
