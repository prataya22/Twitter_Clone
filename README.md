# 𝕏 Twitter/X UI Clone

A pixel-faithful, static front-end clone of the **X (formerly Twitter)** home feed — built with pure **HTML**, **Tailwind CSS v3**, and vanilla **JavaScript**.

![X Clone Preview](https://abs.twimg.com/favicons/twitter-pip.3.ico)

---

## ✨ Features

- **3-column responsive layout** — Left sidebar, center feed, right panel
- **Independent column scrolling** — Only the feed scrolls; sidebar & right panel stay fixed (exactly like X)
- **Sticky "For you / Following" tab bar** with animated blue underline indicator
- **Compose post box** — Disabled Post button that activates on input, media/GIF/emoji/schedule action icons
- **Post cards** — Rounded avatars, verified badges, `more_horiz` menu, colored action button hover states
  - 💬 Reply → blue  
  - 🔁 Repost → green  
  - ❤️ Like → pink  
  - 📊 Views → blue  
- **Right panel** — Search bar (highlights blue on focus), What's Happening trends, Who to Follow with Follow buttons
- **Responsive sidebar** — Collapses to icon-only on smaller screens, expands with labels on `xl+`
- **Inter font** + **Material Symbols Outlined** icons

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure & semantic markup |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling |
| Vanilla JavaScript | Tab switching, compose interactivity |
| [Google Inter Font](https://fonts.google.com/specimen/Inter) | Typography |
| [Material Symbols Outlined](https://fonts.google.com/icons) | Icons |

---

## 📁 Project Structure

```
Twitter_Clone/
├── index.html          # Main HTML — complete UI
├── tailwind.config.js  # Custom X/Twitter color tokens
├── package.json        # npm scripts (Tailwind build)
├── css/
│   ├── input.css       # Tailwind directives + custom @layer components
│   └── output.css      # Generated CSS (do not edit manually)
└── README.md
```

---

## 🎨 Custom Color Tokens

Defined in `tailwind.config.js` and available as Tailwind utilities:

| Token | Value | Usage |
|---|---|---|
| `x-blue` | `#1d9bf0` | Accent — links, active states, CTAs |
| `x-blue-hover` | `#1a8cd8` | Hover state for blue buttons |
| `x-bg` | `#000000` | Page background |
| `x-surface` | `#16181c` | Cards, panels |
| `x-border` | `#2f3336` | Dividers, borders |
| `x-text` | `#e7e9ea` | Primary text |
| `x-muted` | `#536471` | Secondary / placeholder text |
| `x-green` | `#00ba7c` | Repost hover color |
| `x-pink` | `#f91880` | Like hover color |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)

### Install dependencies

```bash
npm install
```

### Build CSS (one-time)

```bash
npx tailwindcss -i ./css/input.css -o ./css/output.css
```

### Watch mode (auto-rebuild on file changes)

```bash
npm run build
```

> This runs: `npx tailwindcss -i ./css/input.css -o ./css/output.css --watch`

### Preview

Open `index.html` in your browser — or use a live server extension (e.g. VS Code **Live Server**).

---

## 📐 Layout Architecture

```
<body> [h-screen overflow-hidden]
└── <div> [flex h-screen max-w-1265px]
    ├── <aside> LEFT SIDEBAR  [h-screen overflow-y-auto, w-72px → xl:275px]
    │   ├── X Logo
    │   ├── Nav items (icon-only < xl, icon+label ≥ xl)
    │   ├── Post button (icon < xl, full-width ≥ xl)
    │   └── User profile card
    │
    ├── <main> CENTER FEED  [flex-1 h-screen overflow-y-auto max-w-600px]
    │   ├── Sticky tab header (For you / Following)
    │   ├── Compose post box
    │   └── Post articles (5 sample posts)
    │
    └── <aside> RIGHT PANEL  [h-screen overflow-y-auto w-350px, hidden < lg]
        ├── Search bar
        ├── What's happening (trending)
        ├── Who to follow
        └── Footer terms
```

---

## 🧩 Custom CSS Components (`css/input.css`)

| Class | Description |
|---|---|
| `.tab-indicator::after` | Blue 4px pill underline on active tab |
| `.compose-input` | Custom caret color + placeholder styling |
| `.search-input` | Focus border highlight + placeholder color |
| `.btn-reply:hover` | Blue bg + text on hover |
| `.btn-retweet:hover` | Green bg + text on hover |
| `.btn-like:hover` | Pink bg + text on hover |
| `.btn-views:hover` | Blue bg + text on hover |
| `.btn-bookmark:hover` | Blue bg + text on hover |
| `.btn-share:hover` | Blue bg + text on hover |

---

## 📝 Notes

- This is a **static UI clone** — no backend, no authentication, no real data.
- All post content is placeholder/sample data.
- Avatars use inline SVG data URIs to avoid external image dependencies.
- The project intentionally avoids JavaScript frameworks to keep the bundle minimal and simple.

---

## 📄 License

This project is for **educational purposes only**.  
X, Twitter, and all related trademarks are property of **X Corp.**
