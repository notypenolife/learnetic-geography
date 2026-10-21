# Integration verification

Verified on 21 October 2026.

- Imported HTML: 733,099 UTF-8 bytes. SHA-256: `093a8fc84ecb646881fcd1dda18ae795dc1af89e9771bb9f3f0b4ac81a1b7a8f`.
- Both inline scripts parsed successfully; production TypeScript/Vite build passed.
- Host and lesson HTTP responses: 200. Build copy matches source hash.
- Desktop viewport 1440 × 900: terrain and contour map render; A moved from 152.5 m to 388.4 m and relative height updated from 589.8 m to 353.9 m.
- B moved to the same map location as A: both displayed 388.4 m, relative height 0.0 m.
- Top view, reset and explanation controls worked. Reset restored initial A/B elevations.
- PNG export rendered a loaded 1920 × 800 image in its preview dialog.
- Tablet-sized viewport 768 × 1024: map drawer opened/closed, its content remained scrollable (572 px viewport, 1189 px content). This is browser viewport QA, not a physical tablet touch test.
- No browser console errors captured during these checks.

The original source remains unchanged, including its thirteen-scene wording even though navigation is restricted to chapter 0. Fullscreen, physical touch gestures and direct file:// opening were not separately exercised.
