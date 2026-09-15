import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('Serenity Spa landing includes an accessible booking path and core offer', async () => {
  const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
  assert.match(page, /Serenity Spa/);
  assert.match(page, /Book your ritual/);
  assert.match(page, /href="#booking"/);
  assert.match(page, /aria-label="Book an appointment"/);
});
