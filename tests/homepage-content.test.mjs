import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');

const requiredSnippets = [
  '<title>Reviewly - AI App Review Analysis with MCP for iOS, iPadOS and macOS</title>',
  '<link rel="canonical" href="https://reviewly.karmaacademy.com.au/">',
  '<meta property="og:title" content="Reviewly - AI App Review Analysis with MCP">',
  '<meta name="twitter:card" content="summary_large_image">',
  'Reviewly includes an MCP server for AI agents and developer tools to query app review insights.',
  'id="mcp"',
  'assets/macOS/01-reviewly-developers-2560x1600.png',
  'assets/macOS/02-reviewly-apps-2560x1600.png',
  'assets/macOS/03-reviewly-mcp-server-2560x1600.png',
  'Reviewly MCP server showing app review intelligence tools for AI agents',
  '"@type": "SoftwareApplication"',
  '"featureList"',
];

for (const snippet of requiredSnippets) {
  assert.ok(html.includes(snippet), `Missing required homepage snippet: ${snippet}`);
}

const descriptionMatch = html.match(/<meta name="description" content="([^"]+)">/);
assert.ok(descriptionMatch, 'Missing meta description');
assert.ok(
  descriptionMatch[1].length >= 120 && descriptionMatch[1].length <= 170,
  `Meta description should be 120-170 characters, got ${descriptionMatch[1].length}`,
);

const h1Count = (html.match(/<h1\b/g) || []).length;
assert.equal(h1Count, 1, `Expected exactly one H1, found ${h1Count}`);

const imageAssets = [
  'assets/macOS/01-reviewly-developers-2560x1600.png',
  'assets/macOS/02-reviewly-apps-2560x1600.png',
  'assets/macOS/03-reviewly-mcp-server-2560x1600.png',
];

for (const asset of imageAssets) {
  assert.ok(existsSync(resolve(root, asset)), `Missing copied image asset: ${asset}`);
}

console.log('Homepage content and SEO checks passed.');
