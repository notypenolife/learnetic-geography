# Geography Learning Lab

An independent interactive geography project exploring **elevation and height difference**. The interface, explanations, canvas labels, help and exported images are in English.

## Open the lesson

Double-click `public/terrain-altitude.html` to use the self-contained lesson offline in a browser with WebGL2 support. The graphics library is embedded.

For development, run `npm install` then `npm run dev` and open http://127.0.0.1:5174/. Run `npm run build` to produce `dist/`, or `npm run preview` to check the production build at http://127.0.0.1:5188/.

## Learning activity

- Rotate and zoom the terrain; switch between 3D, Top and Side views.
- Choose Point A or Point B and click or drag on the contour map.
- Compare elevations and their height difference; toggle the sea-level datum.
- Reveal the explanation, reset the lesson or export a PNG.
- On smaller screens, open Map & controls for the map and settings.

The supplied source contains thirteen scenes but restricts navigation to the elevation lesson. This restriction is retained. The help and navigation describe the available standalone lesson. Student age and curriculum have not been specified.

## Source and attribution

`public/terrain-altitude.html` is adapted from the HTML supplied by the user. Its text has been translated into natural English, including the inactive lesson content. The displayed creator credit is **Cici Yang_NZ**, as requested by the user. The supplied source originally credited Xiao Xiao Xiao Bai. Social-media wordmarks and handles have been removed from the interface. The Three.js MIT licence is retained.

React hosts the lesson in a full-window iframe so its styles, scripts and mobile controls run independently. Terrain geometry and elevation calculations are unchanged.

- `src/`: application host.
- `public/`: standalone lesson, copied into the production build.
- `sources/`: local working references, ignored by Git.
- `docs/`: project and verification notes.

No backend, account system or hosted deployment is configured. This project is separate from Inside the CPU.
