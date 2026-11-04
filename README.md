# portfolio

A portfolio page for Zero to Hired, as the lessons build it in Sprint 1 (Lessons 1.13 to 1.19): one `index.html`
with your three lines for owners, your photo, a link to your CV, the page's JavaScript and the Tailwind look. Every
name, address and picture in it is a placeholder: you put in your own.

This branch, `portfolio-end-of-sprint-1`, lives in the course's `fresh-cuts-starter` repository only so that it is
one `git clone`. It has nothing to do with Fresh Cuts.

## You are starting at Sprint 4 or 11

Use this copy if you start the course at Sprint 4 or later and you do not have your own portfolio site from the
earlier course. Lesson 4.10 puts your Sprint 4 app into your portfolio. Lesson 11.3 makes it a sales page for owners.
If you already have a portfolio online, keep yours: you do not need this copy.

### What this copy contains

- `index.html`: your name as the big heading; three lines for an owner (what you do, your proof, how to reach you),
  with the proof address and your email as links; your photo; a link to your CV; a short paragraph and a list.
- The Tailwind line in `<head>`, and Tailwind classes for size, colour and space (Lesson 1.16).
- A `<script>` at the end of `<body>` that writes three messages in Chrome's console (Lesson 1.15).
- `images/me.jpg`: a grey placeholder. Put your own photo in its place, with the same name.
- `cv.pdf`: a placeholder. Put your own CV in its place, as a PDF with the same name. Take out your home address, your
  birthday and your school ID number first.

This page needs no `npm install` and no `.env` file: it is plain HTML.

### Start

You need Git, VS Code and Chrome (Lesson 1.13). In a terminal, go to your `Documents` folder, then:

```
git clone --branch portfolio-end-of-sprint-1 https://github.com/wilsonowilson/fresh-cuts-starter.git portfolio
cd portfolio
```

Open the `portfolio` folder in VS Code (File, then Open Folder). Open `index.html` in Chrome: double-click it in
File Explorer (Mac: Finder). Open Chrome's console (Ctrl+Shift+J; Mac: Cmd+Option+J): you see three messages.

### Make it yours

1. In `index.html`, replace every `Your Name` with your own name (there are four: the title, the heading, the photo's
   `alt` and `myName`).
2. Replace the three lines under the heading with your own three lines. Make the proof link your own page's address,
   and keep the words `Practice project`. Put your own email in place of `you@example.com`, in both places.
3. Replace the paragraph and the list with your own words.
4. Replace `images/me.jpg` with your own photo, and `cv.pdf` with your own CV. Keep the two names exactly.
5. Save, refresh Chrome, and click all three links.
6. Save this version with Git: `git add .` and then `git commit -m "Put in my own name, photo and CV"`.

### Put it online

1. On GitHub, make a new empty repository named `portfolio`.
2. In the `portfolio` folder, run these three commands. Put your own address in the second one.

   ```
   git branch -m main
   git remote set-url origin https://github.com/your-name/portfolio.git
   git push -u origin main
   ```
3. On Netlify, add the repository as a new project (Lesson 1.19). No settings are needed. Open the address Netlify
   gives you on your phone.

Then open the first lesson of your sprint in the course: **Lesson 4.0, "How your phone gets the weather"**, or, for
Sprint 11, **Lesson 11.1, "Which businesses to choose, and which to avoid"**.

## What is inside

| File or folder | What it does |
|---|---|
| `index.html` | The whole page: HTML, the Tailwind line, the classes and the script |
| `images/me.jpg` | Your photo (a placeholder until you replace it) |
| `cv.pdf` | Your CV (a placeholder until you replace it) |
