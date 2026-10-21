# Geography Learning Lab

A separate local project for a new interactive geography resource. This starter is independent of Inside the CPU. The topic, student level and curriculum have not been selected yet. The current page is a setup screen, not a completed learning activity.

## Run locally

Requires Node.js 24 and npm. In this folder:

```powershell
npm install
npm run dev
```

Open http://127.0.0.1:5174/ on this computer. This port is separate from the CPU project's preview. For a production check, run `npm run build`, then `npm run preview` at http://127.0.0.1:5188/.

## Foundation

- React and TypeScript for the interface and learning logic.
- Vite for local development and production builds.
- Plain CSS for the initial accessible, responsive page.
- Git tracks source changes. Dependencies are pinned and recorded in the lockfile.

Maps, 3D libraries, quizzes and progress storage can be added when the first activity is specified. There is no backend, account system, paid API or public deployment in this setup.

## Project folders

- `src/`: application code and styles.
- `sources/`: local curriculum documents and teaching references. Source files stay out of Git by default.
- `docs/`: the project brief and design decisions.

Next decisions: learning topic, student age or course, curriculum reference, and the first interactive task.
