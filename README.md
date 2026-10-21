# Geography Learning Lab

An independent local project running the supplied Chinese lesson **海拔与相对高度** (altitude and relative height).

## Open the lesson

Double-click `public/terrain-altitude.html` to use the self-contained lesson offline in a browser with WebGL2 support. Its graphics library and images are embedded.

For development, run `npm install` then `npm run dev` and open http://127.0.0.1:5174/. Run `npm run build` to produce `dist/`, or `npm run preview` to check the production build at http://127.0.0.1:5188/.

## Learning activity

- Rotate and zoom the terrain; switch between 3D, top and side views.
- Select observation point A or B and click or drag on the contour map.
- Compare both elevations and their relative height; toggle the 0 m datum.
- Reveal the explanation, reset the lesson, or export a PNG.
- On touch screens, open “地图与操作” for the map and controls.

The supplied file contains thirteen scenes but deliberately restricts navigation to the altitude lesson. That restriction, the original Chinese content and creator credits are retained. The age group and curriculum have not been specified.

## Source and attribution

`public/terrain-altitude.html` is the complete HTML supplied by the user, preserved unchanged. It credits **小小小白** and embeds the Three.js MIT licence. React hosts this document in a full-window iframe so its existing styles, scripts and mobile adapter can run independently.

- `src/`: the lightweight application host.
- `public/`: the supplied lesson, copied into the production build.
- `sources/`: local teaching references, ignored by Git by default.
- `docs/`: project notes.

No backend, account system or hosted deployment is configured. This project is separate from Inside the CPU.
