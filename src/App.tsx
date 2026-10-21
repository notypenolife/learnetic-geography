export default function App() {
  return (
    <main className="lesson-shell">
      <iframe
        className="lesson-frame"
        src={`${import.meta.env.BASE_URL}terrain-altitude.html`}
        title="海拔与相对高度 · 互动地形课件"
        allow="fullscreen"
        allowFullScreen
      />
    </main>
  );
}
