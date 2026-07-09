# Reviewly MCP, macOS Screenshots, and SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the static Reviewly homepage to market MCP support, display new macOS screenshots, and improve search/social metadata.

**Architecture:** Keep the current static site architecture: `index.html` for content/metadata, `styles.css` for presentation, copied image assets under `assets/macOS/`, and simple static validation in a Node script. Avoid changing unrelated Jekyll includes unless the homepage proves to be generated from them.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node.js built-in `assert` and `fs` modules for regression checks.

## Global Constraints

- Use the approved MCP copy: "Reviewly includes an MCP server for AI agents and developer tools to query app review insights."
- Keep the App Store URL as `https://apps.apple.com/app/id6748536230`.
- Use canonical production URL `https://reviewly.karmaacademy.com.au/`.
- Preserve existing user-owned dirty worktree changes.
- Do not introduce package dependencies.
- New screenshot files live under `assets/macOS/`.

---

### Task 1: Static Regression Test

**Files:**
- Create: `tests/homepage-content.test.mjs`

**Interfaces:**
- Consumes: `index.html`
- Produces: `node tests/homepage-content.test.mjs` verification command

- [ ] **Step 1: Write the failing test**

Create a Node script that reads `index.html` and asserts that MCP copy, macOS screenshot paths, canonical metadata, Open Graph/Twitter metadata, JSON-LD, and image alt text exist.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/homepage-content.test.mjs`

Expected: FAIL because the current homepage does not yet include the MCP section, new screenshot paths, or complete SEO metadata.

### Task 2: Assets and Homepage Content

**Files:**
- Create: `assets/macOS/01-reviewly-developers-2560x1600.png`
- Create: `assets/macOS/02-reviewly-apps-2560x1600.png`
- Create: `assets/macOS/03-reviewly-mcp-server-2560x1600.png`
- Modify: `index.html`
- Modify: `styles.css`

**Interfaces:**
- Consumes: source screenshot files from the app repo final folder
- Produces: public homepage sections and image references

- [ ] **Step 1: Copy screenshots**

Copy the three approved macOS screenshots into `assets/macOS/`.

- [ ] **Step 2: Update homepage content**

Patch `index.html` to update SEO tags, hero copy, navigation, feature cards, MCP section, macOS showcase, pricing feature list, FAQ, CTA, footer year, and JSON-LD.

- [ ] **Step 3: Update homepage styles**

Patch `styles.css` with focused styles for MCP content and macOS screenshot cards using existing variables and spacing patterns.

### Task 3: Crawl Discovery Files

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

**Interfaces:**
- Consumes: canonical production URL
- Produces: crawl hints for search engines

- [ ] **Step 1: Add crawl files**

Add a permissive `robots.txt` and single-page `sitemap.xml` pointing to the homepage.

### Task 4: Verification

**Files:**
- Read: `index.html`
- Read: `styles.css`
- Read: `tests/homepage-content.test.mjs`

**Interfaces:**
- Consumes: updated static files
- Produces: evidence that the homepage content and metadata are present

- [ ] **Step 1: Run static regression test**

Run: `node tests/homepage-content.test.mjs`

Expected: PASS with all assertions complete.

- [ ] **Step 2: Run local site**

Run a local static server from the repo root and open/inspect the page in Chrome or browser tooling.

- [ ] **Step 3: Inspect rendered page**

Check desktop and mobile widths for missing images, broken layout, text overlap, and console errors.
