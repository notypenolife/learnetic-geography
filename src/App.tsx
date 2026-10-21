export default function App() {
  return (
    <main className="lesson-shell">
      <iframe
        className="lesson-frame"
        src={`${import.meta.env.BASE_URL}terrain-altitude.html`}
        title="Elevation and height difference — interactive terrain lesson"
        allow="fullscreen"
        allowFullScreen
      />
    </main>
  );
}
