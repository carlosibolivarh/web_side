# CLAUDE.md

Project guidance for Claude Code (and humans) working in this folder.

## What this is

A small, **static personal academic website** for **Carlos Bolivar** (Ph.D. candidate in
Economics, University of Minnesota; Research Analyst, Federal Reserve Bank of Minneapolis).
It is a hand-built, dependency-free re-creation of the live site
[carlosbolivar.info](https://carlosbolivar.info/) (the original is built with the
Hostinger/Zyro website builder; this version is plain HTML/CSS so it can be edited and
hosted anywhere).

There is **no build step, no framework, no package manager**. The site is four `.html`
files plus one stylesheet and one tiny script. To view it, just open `index.html` in a
browser. To publish, drop the whole folder on any static host (GitHub Pages, Netlify,
Cloudflare Pages, etc.).

## Folder structure

```
Web_site/
├─ index.html             Home — photo + "Latest" papers, bio/advisors, links, contact footer
├─ research.html          Research — the 8 working papers (figure + abstract + Draft/Slides links)
├─ about-cv.html          About CV — full CV (education, experience, papers, references) + Download CV
├─ contacts.html          Contacts — email / phone / address cards
├─ styles.css             ALL styling for every page (single shared stylesheet)
├─ script.js              Only the mobile nav (hamburger) toggle
│
├─ img/                   All web assets used by the pages
│   ├─ logo.png             nav wordmark (gray "CARLOS" + black "BOLIVAR")
│   ├─ logo-white.png       white-"CARLOS" variant (for dark backgrounds; currently unused)
│   ├─ photo.jpg            optimized headshot used on Home (~30 KB, cropped square)
│   ├─ Foto_12_21.jpeg      original full-res headshot (source for photo.jpg; ~11 MB, not served)
│   ├─ fig-*.png/.jpg       one figure per paper (see mapping below)
│   └─ CV_Carlos_Bolivar.pdf the CV linked from About-CV
│
├─ Working_papers_drafts/  Source PDFs of the paper DRAFTS (linked as "Draft" on Research)
├─ Working_papers_slides/  Source PDFs of SLIDES / posters (linked as "Slides"/"Poster")
│
├─ Foto_12_21.jpeg         Carlos's original photo (kept at root as the master copy)
└─ CV- Carlos Bolivar - Final.pdf  original CV (master copy at root)
```

The pages link **drafts/slides directly from the `Working_papers_drafts/` and
`Working_papers_slides/` folders** (not from `img/`). This is intentional: replacing a PDF
in those folders (same filename) automatically updates the site — no other edits needed.

## The 8 papers (order, figure, links)

Order on Research = order in `about-cv.html` Working Papers list. Keep them in sync.

| # | Title | Figure (img/) | Draft (Working_papers_drafts/) | Slides/Poster |
|---|-------|---------------|--------------------------------|---------------|
| 1 | The Micro Effects of Aggregate Shocks in Endogenous Trade Networks | fig-trade.png | Trade_Comovement_draft.pdf | — |
| 2 | Take the Short Route in Confidence Crises | fig-confidence.png | Quantitative_Self_fulfilling_Crises.pdf | Take_the_Short_Route_slides.pdf |
| 3 | Debt Sustainability, Confidence Risk and International Reserves | fig-reserves.png | Calvo_and_reserves.pdf | Reserves_poster_2024_MFR.pdf |
| 4 | The Political Economy of Credit Booms and Macroprudential Regulation | fig-macropru.png | political_economy_macropru.pdf | Macroprudential_slides_BSE_2024.pdf |
| 5 | Sovereign Debt, Currency Composition, and Financial Repression | fig-currency.png | Debt_Currency_Composition.pdf | — |
| 6 | Domestic Debt and Self-Fulfilling Crises | fig-domestic-debt.png | Draft_Multiple_Equilibria.pdf | Domestic_Debt_slides.pdf |
| 7 | Natural Disasters, Adaptation, and Default Risk | fig-disasters.jpg | Natural_Disasters_Adaptation_Default.pdf | — |
| 8 | Sovereign Debt Crises and Monetary Policy | fig-monetary.jpg | (draft on request — mailto) | Monetary_Policy_slides.pdf |

- The paper **figures** (`fig-*.png`) are cropped out of the draft PDFs with `pdftoppm`
  (see "Regenerating a paper figure" below). The abstracts on Research are the **actual
  abstracts from these PDFs** — re-read the PDF and update the abstract if the draft changes.
- On each paper the link order is **Draft first, then Slides/Poster**.

## Conventions

- **Edit content directly in the `.html` files.** Header (navbar) and footer are duplicated
  in each page — if you change one, change all four to match.
- **All styling lives in `styles.css`.** Key CSS variables in `:root`:
  - `--blue #1C4E87` (hero/CV header band), `--bright #176BE0` (footer + accents),
    `--link #0a3d8f` (darker blue for text links), `--ink #0D131A` (text), `--gray`,
    `--light #eceff3`, `--border`.
- **Fonts** load from Google Fonts: Nunito / Nunito Sans (headings/body), Inter (buttons),
  **Montserrat** (the `.brand` class — used to render "Carlos Bolivar" so it echoes the
  logo wordmark). The site therefore needs internet for fonts; everything else works offline.
- **Nav** is Home · Research · About CV (the Contacts tab was intentionally removed; the
  `contacts.html` page still exists but is unlinked).
- **Social links:** LinkedIn, Google Scholar, Bluesky. (Facebook/Instagram were removed.)
- Home is a single centered column: a top row (photo left + "Latest" right), then the
  bio/advisors/links full-width below, then the shared blue contact footer.

## Key external links (verified against the live site — keep correct)

- Advisors: Manuel Amador `manuelamador.me` · Tim Kehoe `users.econ.umn.edu/~tkehoe` ·
  Javier Bianchi `javierbianchi.com` · Marco Bassetto `m-bassetto.github.io`
- Co-authors: Cesar Sosa-Padilla `sosapadilla.github.io` · Leonardo Barreto
  `leonardo-barreto.com` · Teresa Balestrini `teresabalestrini.com`
- Google Scholar: `scholar.google.com/citations?user=yZEQSfkAAAAJ`
- Email `boliv005@umn.edu` · Phone `+1 2023447311`

## Common tasks

- **View / verify the site:** open `index.html`. For a visual check during edits, render a
  page headless and screenshot it (Chrome is at
  `C:\Program Files\Google\Chrome\Application\chrome.exe`):
  `chrome --headless=new --window-size=1440,1000 --screenshot=out.png "file:///.../index.html"`
  Note: Chrome cannot write the screenshot into this Dropbox folder (access denied) — write
  it to `%TEMP%` and read it from there.
- **Update an abstract / draft:** drop the new PDF into `Working_papers_drafts/` (same
  filename) and re-read it to refresh the abstract text in `research.html`.
- **Regenerating a paper figure:** crop it from the PDF, e.g.
  `pdftoppm -png -f <page> -l <page> -r 200 -x <x> -y <y> -W <w> -H <h> input.pdf out`
  then save into `img/fig-*.png`.
- **Optimizing the photo:** `img/photo.jpg` is a resized/cropped copy of
  `img/Foto_12_21.jpeg` made with PowerShell `System.Drawing` (square crop ~0.82×width
  focused near the top for the face, scaled to ~520 px, JPEG quality 82). Re-run that if the
  source photo changes. The circular crop is positioned with `.profile-photo`
  `object-position`.

## Gotchas

- Browsers **cache** local files aggressively — after editing, hard-refresh with **Ctrl+F5**.
- This folder is inside **Dropbox**; expect occasional sync locks. Some tools (notably
  Chrome's `--screenshot`) fail to write here — use `%TEMP%` and copy back.
- Keep the **Research page order** and the **About-CV Working Papers list** in the same order.
- When changing the navbar or footer, apply the change to **all four** HTML files.
