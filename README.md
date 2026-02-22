# The Liturgical Year

**A complete, interactive journey through the sacred seasons of the Catholic Church — with daily Mass readings, Ignatian contemplation, and masterwork paintings.**

Live at [sandwichtodd.com](https://sandwichtodd.com)

---

## Overview

This project is a single-developer devotional web application covering the entire Catholic liturgical year from Lent 2026 through Ordinary Time I 2027. Each season is a self-contained, single-page HTML application featuring:

- **Full daily Mass readings** (NABRE) extracted from USCCB lectionary PDFs
- **Ignatian contemplation** for every day — Composition of Place, Engage Your Senses, Reflection Questions, and Colloquy
- **Unique daily meditations** with Scripture quotes, saint quotes, and reflective prompts
- **Masterwork hero paintings** from the great tradition of Western sacred art
- **Responsive design** optimized for desktop, tablet, and mobile
- **Date-aware navigation** that automatically opens to today's readings
- **EmailOctopus integration** for daily email delivery of readings

The entire site is static HTML/CSS/JS — no server, no database, no build step. Every season is a single HTML file plus one or two images, deployable anywhere.

---

## The Seasons

| Season | Dates | Days | Hero Painting | Path |
|--------|-------|------|---------------|------|
| **Lent** | Feb 18 – Apr 4, 2026 | 46 | Ivan Kramskoy, *Christ in the Desert* (1872) · Tretyakov Gallery | `/lent/` |
| **Easter** | Apr 5 – May 24, 2026 | 50 | Jean II Restout, *Pentecost* (1732) · Musée du Louvre | `/easter/` |
| **Ordinary Time II** | May 25 – Nov 28, 2026 | 188 | Raphael, *The Transfiguration* (c. 1516–1520) · Pinacoteca Vaticana | `/ordinary-time/` |
| **Advent** | Nov 29 – Dec 24, 2026 | 26 | Leonardo da Vinci, *Annunciation* (c. 1472–1475) · Uffizi Gallery | `/advent/` |
| **Christmas** | Dec 25, 2026 – Jan 10, 2027 | 17 | Gerard van Honthorst, *Adoration of the Shepherds* (1622) · Uffizi Gallery | `/christmas/` |
| **Ordinary Time I** | Jan 11 – Feb 9, 2027 | 30 | Paolo Veronese, *The Wedding at Cana* (1563) · Musée du Louvre | `/ordinary-time-i/` |

**Total: 357 days of daily content across 6 seasons.**

---

## Landing Page

The root `index.html` is a cathedral-inspired landing page featuring Michelangelo's *Pietà* as the hero image. It includes:

- A liturgical rose window with season navigation
- Season cards with liturgical colors and status indicators
- A "You Are Here" smart link that detects the current season and navigates accordingly
- Full-card click handlers for direct season access
- Responsive Gothic typography using Cinzel and Cormorant Garamond

---

## Architecture

### Single-File Design

Each season is a **single HTML file** containing all CSS, JavaScript, and reading data inline. This was a deliberate choice for simplicity, portability, and zero-dependency deployment. The largest file (Ordinary Time II) is ~660 KB — still smaller than most web framework bundles.

### Data Pipeline

1. **PDF extraction** — USCCB daily Mass reading PDFs were parsed using Python (`pdfplumber`) with custom regex to separate First Reading, Responsorial Psalm (with response and stanzas), Second Reading (Sundays/Solemnities), and Gospel
2. **JSON intermediate** — Parsed readings stored as structured JSON with normalized keys (`month-day` format)
3. **JavaScript embedding** — JSON transformed into a `const READINGS = {...}` object embedded in each HTML file
4. **Ignatian generation** — Contemplations written for each day's Gospel passage, stored as a parallel `const IGNATIAN = {...}` object
5. **Meditation generation** — Unique daily meditation quotes stored as `const MEDITATIONS = {...}` with quote, author, context, and reflection prompt

### Shared Template

Seasons built after the initial Lent/Easter pair share a common template structure:

- **100vh hero section** with masterwork painting, radial gradient overlay, noise texture, scroll indicator, and painting credit
- **Sticky navigation bar** with prev/next buttons, date dropdown, day name display, and Holy See emblem link
- **Sectioned content** — Readings → Ignatian Contemplation → Meditation → Prayer → Email Signup
- **Progress bar** tracking journey through the season (e.g., "Baptism → Lent" for OT1)
- **Section labels** with scroll-triggered reveal animations
- **Date navigator** separate from content navigation

### Liturgical Color Scheme

Each season uses a distinct CSS color palette:

| Season | Primary | Accent | Liturgical Color |
|--------|---------|--------|-----------------|
| Lent | Burgundy (#5c1a1a) | Gold (#c9a84c) | Purple/Violet |
| Easter | Royal Blue (#1a2040) | Gold (#c9a84c) | White/Gold |
| Ordinary Time | Forest Green (#1a2e1a) | Gold (#c9a84c) | Green |
| Advent | Deep Purple (#1a0a2e) | Gold (#c9a84c) | Purple/Violet |
| Christmas | Deep Red (#5c1a1a) | Gold (#c9a84c) | White/Gold |

---

## Features by Season

### Lent (the original)
- 14 Stations of the Cross with modal overlays
- Ignatian contemplation for all 46 days
- Table-based email-ready layout (optimized for EmailOctopus delivery)
- Kramskoy's *Christ in the Desert* — the most austere hero of the collection

### Easter
- Alleluia banner (suppressed during Lent, restored at Easter)
- 50 days of Resurrection readings through Pentecost
- Restout's *Pentecost* — tongues of fire above the apostles and Mary

### Ordinary Time II (the longest)
- 188 consecutive days — the backbone of the liturgical year
- Chi-Rho (☧) symbol in navigation
- Raphael's *Transfiguration* — arguably the greatest painting in the Western tradition
- Covers Weeks 8–34 of Ordinary Time

### Advent
- Purple/violet color scheme with rose accent for Gaudete Sunday
- 26 days of preparation from First Sunday of Advent through Christmas Eve
- Leonardo's *Annunciation* — Gabriel visiting Mary in her garden
- O Antiphon references in final week contemplations

### Christmas
- Deep red and gold palette
- 17 days from the Nativity through the Baptism of the Lord
- Star (⭐) symbol in navigation
- Van Honthorst's *Adoration of the Shepherds* — the Christ child as sole light source

### Ordinary Time I
- 30 days bridging Christmas to Lent (Baptism of the Lord through the day before Ash Wednesday)
- Chi-Rho (☧) symbol in navigation
- Veronese's *Wedding at Cana* — Jesus' first miracle, festive and warm
- Covers the beginning of Jesus' public ministry in Mark

---

## Folder Structure

```
/                           Landing page (index.html + pieta.jpg)
├── /lent/                  Lenten Journey (index.html + kramskoy.jpg + holysee.png)
├── /easter/                Easter Journey (index.html + restout.jpg + holysee.png)
├── /ordinary-time/         Ordinary Time II (index.html + transfiguration.jpg + holysee.png)
├── /advent/                Advent Journey (index.html + annunciation.jpg + holysee.png)
├── /christmas/             Christmas Journey (index.html + shepherds.jpg + holysee.png)
├── /ordinary-time-i/       Ordinary Time I (index.html + cana.jpg + holysee.png)
└── README.md
```

Each season folder contains:
- `index.html` — The complete single-page application
- One hero painting image (`.jpg`)
- `holysee.png` — Holy See emblem for the navigation bar link to vatican.va

---

## Typography

All seasons use the same font stack loaded from Google Fonts:

- **Cinzel** — Headings, navigation, labels, section titles (inscriptional Roman capitals)
- **Cormorant Garamond** — Scripture references, subtitles, meditation quotes (elegant serif)
- **Crimson Text** — Body text, readings, contemplation content (highly readable serif)

---

## Email Integration

Each season includes an EmailOctopus subscription form for automated daily delivery of readings. The integration uses a simple `fetch()` POST to the EmailOctopus campaign endpoint — no SDK, no dependencies.

---

## Readings Source

All readings are from the **New American Bible, Revised Edition (NABRE)**, the translation used in the United States Catholic lectionary. Readings were extracted from PDF downloads of the USCCB daily readings pages and parsed programmatically.

Each day's readings include:
- **First Reading** (Old Testament or Acts during Easter)
- **Responsorial Psalm** with antiphon response (℟) repeated after each stanza
- **Second Reading** (Epistles — Sundays and Solemnities only)
- **Gospel** (displayed in a distinctive dark block with gold accents)

---

## Ignatian Contemplation

Every day across all six seasons includes a structured Ignatian contemplation based on the day's Gospel reading, following the method of St. Ignatius of Loyola:

1. **Composition of Place** — Imagine the scene in vivid detail
2. **Engage Your Senses** — What do you see, hear, smell, taste, feel?
3. **Reflection Questions** — Three questions arising from the text
4. **Colloquy** — A direct, personal conversation with Jesus

These contemplations are styled in a distinctive dark purple/indigo block with an IHS medallion, visually set apart from the readings.

---

## Daily Meditations

Each day features a unique meditation with:
- A Scripture quote or saint quote relevant to the day's readings or feast
- Author attribution
- Source context
- A reflective prompt connecting the quote to daily life

Meditations draw from the Gospels, Church Fathers, saints of the day, and spiritual writers across the tradition.

---

## Hero Paintings

All hero images are **public domain masterworks** from major European museums. They were chosen for:

- **Theological resonance** with the season's themes
- **Visual drama** suitable for a full-viewport hero with dark gradient overlay
- **Warm color palette** compatible with the gold accent system
- **Art historical significance** — each painting is a recognized masterpiece

---

## Technical Notes

- **No build tools** — No npm, no webpack, no React. Pure HTML/CSS/JS.
- **No server required** — Deploys to any static host (GitHub Pages, Netlify, S3, etc.)
- **No external API calls at runtime** — All reading data is embedded in the HTML
- **Font loading** — Google Fonts with `preconnect` for performance
- **Animations** — CSS `@keyframes` for hero fade-down, scroll-triggered reveals via `IntersectionObserver`
- **Date detection** — `new Date()` comparison against season start/end constants to auto-navigate to today
- **Responsive** — Flexbox layout with `clamp()` typography and media queries for mobile

---

## Development History

This project was built over the course of the 2025–2026 liturgical year:

1. **Lent 2026** — The original Lenten Journey site, with 14 Stations of the Cross and full readings
2. **Easter 2026** — Extended the concept to the 50-day Easter season
3. **Landing page** — Cathedral-inspired hub connecting all seasons
4. **Ordinary Time II** — The marathon: 188 days of readings and contemplations
5. **Advent 2026** — Rebuilt from the OT2 template with purple palette
6. **Christmas 2026–27** — 17 days from Nativity to Baptism of the Lord
7. **Ordinary Time I 2027** — The final season, completing the full cycle

---

## License

Reading texts are from the NABRE, © USCCB. Used for personal devotional purposes.

All hero paintings are in the public domain.

Site design, contemplations, meditations, and code © 2026 sandwichtodd.com.
