# Reviewly MCP, macOS Screenshots, and SEO Design

## Goal

Update the Reviewly marketing site so the homepage clearly markets MCP support, shows the newest macOS screenshots, and exposes stronger search/social metadata for Google and link previews.

## Current Context

The live homepage is a static `index.html` file with shared styling in `styles.css` and behavior in `script.js`. The repo also contains older Jekyll include/config files, but the current visible marketing surface is the standalone homepage. Existing sections cover app review analysis, business use cases, personal developer use cases, iPad/Mac support, pricing, FAQs, CTA, and footer.

The new source screenshots are:

- `/Users/karma/Developer/Personal/KarmaAcademyApps/Reviewly/AppStoreScreenshots/macOS/final/01-reviewly-developers-2560x1600.png`
- `/Users/karma/Developer/Personal/KarmaAcademyApps/Reviewly/AppStoreScreenshots/macOS/final/02-reviewly-apps-2560x1600.png`
- `/Users/karma/Developer/Personal/KarmaAcademyApps/Reviewly/AppStoreScreenshots/macOS/final/03-reviewly-mcp-server-2560x1600.png`

Each screenshot is 2560 by 1600.

## Approved Direction

Use the approved MCP positioning:

> Reviewly includes an MCP server for AI agents and developer tools to query app review insights.

## Content Design

The homepage will keep the existing page structure and visual language. MCP will be added without making a separate technical documentation page.

- Hero copy will mention developers, businesses, and AI workflows.
- Navigation will include a direct `MCP` anchor.
- Platform badges will include `MCP`.
- The feature grid will add an MCP-focused card.
- A dedicated MCP section will explain agent/tool workflows and show the MCP server screenshot.
- The large-screen section will become a macOS/iPad showcase with the three new macOS screenshots first, followed by existing iPad imagery.
- FAQ will include one MCP question and answer.
- Pricing feature list will mention MCP server workflows.

## SEO Design

The static homepage will include:

- Focused title: `Reviewly - AI App Review Analysis with MCP for iOS, iPadOS and macOS`
- Meta description mentioning AI app review analysis, competitor research, App Store sentiment, opportunity discovery, and MCP.
- Canonical URL: `https://reviewly.karmaacademy.com.au/`
- Open Graph title, description, type, URL, image, and image dimensions.
- Twitter card metadata.
- JSON-LD `SoftwareApplication` schema with platform, operating system, app category, App Store offer, and feature list.
- Descriptive alt text for the new macOS screenshots.
- `robots.txt` and `sitemap.xml` for crawl discovery.

## Testing

Because the repo has no existing package manifest or test runner, add a Node-based static regression test at `tests/homepage-content.test.mjs`. It will read `index.html` and verify MCP copy, new image references, SEO metadata, JSON-LD, and accessibility-oriented image alt text.

Manual verification will run a local static server and inspect the page in Chrome or the in-app browser if available.
