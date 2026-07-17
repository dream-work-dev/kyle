import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);

test("exports every public route as static HTML", async () => {
  await Promise.all([
    access(new URL("index.html", output)),
    access(new URL("about/index.html", output)),
    access(new URL("experience/index.html", output)),
    access(new URL("og.png", output)),
    access(new URL(".nojekyll", output)),
  ]);
});

test("the exported home page contains portfolio content", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");
  assert.match(html, /Kyle Keller/);
  assert.match(html, /complex systems/);
  assert.doesNotMatch(html, /Codex is working|site is taking shape/);
});
