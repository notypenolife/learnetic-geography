# English resource verification

Verified on 21 October 2026 after the English translation.

- Translated 322 distinct script strings plus static HTML, accessibility labels, help and host metadata. Canvas and PNG export text are included.
- Replaced Chinese social-media wordmark images with English text, retaining the creator as Xiao Xiao Xiao Bai and the Three.js MIT licence.
- A scan of the lesson and host, including decoded Unicode escapes, found no remaining Chinese characters.
- Both inline scripts passed syntax checks. The TypeScript/Vite production build passed.
- Desktop viewport 1440 × 900: English terrain view, contour map, controls and labels rendered. Moving A changed its elevation from 152.5 m to 388.4 m and the height difference from 589.8 m to 353.9 m. Reset restored the original values.
- The explanation, classroom tools, help and About dialog displayed English text. The help describes the available standalone lesson.
- Export produced a loaded 1920 × 800 PNG with English title, map caption, elevation label and explanatory notes, checked visually in its preview dialog.
- Phone viewport 390 × 844: English labels fit; the map drawer opened and closed. Body width and scroll width both measured 390 px. These are browser viewport checks, not physical-device touch tests.
- No browser console errors were captured.

The chapter-0 restriction, terrain model and height calculations remain unchanged. Fullscreen and physical touch gestures were not separately exercised for this text-only update.
