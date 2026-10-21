# LEARNETIC branding

Applied 21 October 2026 from the user-supplied `logo.png` brand guidelines.

The wordmark uses Plus Jakarta Sans with wide tracking and a lavender-to-apricot gradient. The tagline is “Lighting young minds together”. The visible creator is Cici Yang_NZ; the footer follows the supplied © 2026 credit. The reference sheet is not embedded as a page-sized logo.

| Colour | Hex |
| --- | --- |
| Deep Night | `#0F1020` |
| Indigo | `#242547` |
| Purple | `#7F6EF6` |
| Lavender | `#C9A4F4` |
| Apricot | `#F6C08B` |
| Soft Lilac | `#EDE6FF` |
| Warm Beige | `#FFF7ED` |
| Cloud | `#F5F5F8` |
| Slate | `#8C8FA3` |
| Charcoal | `#2B2D3A` |

The lesson uses navy surfaces, subtle purple illumination, translucent panels and rounded controls. The terrain elevation ramp runs from Indigo through Purple and Lavender to Apricot and Warm Beige; its legend uses the same ramp. The contour map uses a pale tint of these colours with darker contour lines and point markers for readability. Canvas colour values are converted from linear RGB to sRGB before rasterisation.

Plus Jakarta Sans is used for headings, metric values and the wordmark. Inter is used for interface text and canvas labels. Both variable fonts are embedded as data URLs in the standalone HTML; there is no runtime font request. Sources:

- [Plus Jakarta Sans in the official Google Fonts repository](https://github.com/google/fonts/tree/main/ofl/plusjakartasans)
- [Inter in the official Google Fonts repository](https://github.com/google/fonts/tree/main/ofl/inter)

Each font's SIL Open Font License is embedded in the HTML and supplied separately in `public/licenses/`. The original Three.js MIT licence is retained.

All visual changes are in `public/terrain-altitude.html`, including the final `learnetic-brand` style block, terrain palette, lighting, map and PNG export. The host theme and title are in `src/styles.css` and `index.html`. The English translation and restriction to the single elevation lesson remain in place. The terrain model, coordinates and height calculations have not changed. Point labels avoid the introduction at constrained sizes, and PNG export waits for the fonts to load.
