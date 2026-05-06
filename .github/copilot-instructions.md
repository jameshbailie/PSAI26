This repo is a website for the workshop "Principled Statistics in the Age of AI" on June 5, 2026 at Chalmers University, Gothenburg, Sweden.

The website should be made in Quarto in RStudio. The main page should have a hero banner with the image "IMG_20221016_164411.jpg". Choose an appropriate Quarto theme and template (perhaps). Note that there will be no main image for the website, so choose the template appropriately.

The website will be hosted on GitHub Pages. So any software used should be compatible with GitHub Pages. Additionally, there is no need to set up anything server-related, since this is all automatically handled by GitHub Pges.

The theme is "Principled statistics in the age of AI". We will have a keynote speaker: Xiao-Li Meng (Harvard University). 

There are four other speakers confirmed: Cory McCartan (Penn State -- https://corymccartan.com/ ), Joshua Bon (University of Adelaide -- https://bonstats.github.io/ ), Fredrik Johansson (Chalmers University, https://www.fredjo.com/ ) and Ashkan Panahi (Chalmers University, https://www.chalmers.se/en/persons/ashkanp/ ).


The website needs to detail:
- Welcome
- Conference idea (theme + description)
- Registration section (exact details TBD)
- Program/schedule
- Talk details (talk titles, abstracts, speaker bios)

More information on the workshop:
A one-day workshop, “Principled Statistics in the Age of AI,” as part of Professor Xiao-Li Meng’s visit to Chalmers as a 2026 Jubilee Professor. We’re aiming for 40–50 participants to keep the format intimate and discussion-rich.

The program will feature Xiao-Li alongside a small number of invited international speakers and select local presenters. 

The workshop is on 5 June in Gothenburg.

Here is the workshop schedule:
## Workshop: Principled Statistics in the Age of AI  
**Date:** Friday, 5 June 2026  
**Location:** A Working Lab, Chalmers University (Sven Hultins Plats 5, 412 58 Göteborg, https://maps.app.goo.gl/cAtvh8gAfhBUyqvb7 )

| Time            | Session                              | Details |
|-----------------|--------------------------------------|---------|
| 09:00 – 09:30   | Welcome & Opening Remarks            | |
| 09:30 – 09:35   | Transition                           | |
| 09:35 – 10:20   | Talk 1 (Title TBD)                              | Ashkan Panahi |
| 10:20 – 10:50   | Morning Fika                       | Extended break for discussion |
| 10:50 – 11:35   | Talk 2 (Title TBD)                               | Joshua Bon |
| 11:35 – 11:40   | Transition                           | |
| 11:40 – 12:25   | Talk 3 (Title TBD)                               | Fredrik Johansson |
| 12:25 – 13:25   | Lunch                            |  |
| 13:25 – 14:10   | Talk 4 (Title TBD)                               | Cory McCartan |
| 14:10 – 14:40   | Afternoon Fika                     | Mid-afternoon discussion break |
| 14:40 – 15:55   | Keynote Address (Title TBD)                  | Xiao-Li Meng |
| 15:55 – 16:00   | Closing Remarks                      |  |


Conference organisers:
Adel Daoud
James Bailie
As part of the AI & GLOBAL DEVELOPMENT LAB
https://aidevlab.org/

Registration page:
Registration is free but required, as capacity is limited.
To help us manage attendance, registrations will be confirmed by email.
If you later find that you cannot attend, we would greatly appreciate advance notice so that we can offer your place to someone on the waitlist.

---

## Copilot-focused: Quarto build & preview
- Build full site: `quarto render` (builds all pages).
- Local dev preview: `quarto preview` (serves and rebuilds on change). Use `quarto preview --no-browser` in CI containers.
- Render a single page: `quarto render path/to/page.qmd`.
- Validate site: `quarto check` (detects common issues).
- Execute embedded code when rendering: `quarto render --execute`.

## Project layout & conventions (Quarto)
- Site config: `_quarto.yml` at repo root controls site metadata, theme, and format.
- Main pages: `index.qmd`, `about.qmd`, `program.qmd`, `talks/*.qmd` (create `talks/` for individual talk pages).
- Images/resources: place images in `images/` and reference them in front-matter, e.g. `image: images/IMG_20221016_164411.jpg`.
- Speaker data: keep structured data in `_data/speakers.yml` or `data/speakers.csv` and reference from QMD pages to avoid duplicated content.
- Use front-matter fields for consistent metadata: `title`, `date`, `author`, `image`, `abstract`, `affiliation`.

## How Copilot should behave for this site
- When asked to add or update content, modify both the appropriate `.qmd` page(s) and the `_data` entries (if present), then run `quarto render` or `quarto preview` locally to validate formatting and link references.
- When adding images, ensure they are placed under `images/` and referenced with relative paths in front-matter.
- When changing site metadata (theme, navbar, site-title), update `_quarto.yml` and include a short note in the PR description about the change.
- If unsure about which Quarto theme/template to use, add options as proposals (e.g., `cosmo`, `flatly`, `academic`) and ask for selection.

---

(End of Copilot-specific guidance)
