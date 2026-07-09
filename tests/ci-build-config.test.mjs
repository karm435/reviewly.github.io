import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const workflowPath = resolve(root, '.github/workflows/jekyll.yml');
const workflow = readFileSync(workflowPath, 'utf8');

assert.match(workflow, /name:\s*Deploy static site to Pages/, 'Workflow should describe a static site deployment.');
assert.doesNotMatch(workflow, /ruby\/setup-ruby/, 'Static HTML deployment should not set up Ruby.');
assert.doesNotMatch(workflow, /bundle\s+exec\s+jekyll\s+build/, 'Static HTML deployment should not run Jekyll.');
assert.doesNotMatch(workflow, /bundler-cache/, 'Static HTML deployment should not use Bundler caching.');

assert.match(workflow, /name:\s*Prepare static site artifact/, 'Workflow should prepare an explicit static artifact directory.');
assert.match(workflow, /mkdir -p _site/, 'Workflow should create _site for the Pages artifact.');
assert.match(workflow, /touch _site\/\.nojekyll/, 'Workflow should mark the artifact as a static site.');
assert.match(workflow, /cp -R assets _site\//, 'Workflow should copy site assets into _site.');
assert.match(workflow, /cp -R images _site\//, 'Workflow should copy image assets into _site.');
assert.match(workflow, /find _site -name \.DS_Store -delete/, 'Workflow should remove local macOS metadata files from the artifact.');
assert.match(workflow, /path:\s*_site/, 'Workflow should upload _site as the Pages artifact.');

console.log('Static Pages workflow checks passed.');
