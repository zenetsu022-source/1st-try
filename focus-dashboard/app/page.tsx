import FocusCityDemo from "@/components/demo";

export default function Page() {
  return (
    <main className="min-h-screen px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <a className="brand flex items-center gap-3" href="https://github.com/zenetsu022-source">
            <span className="brand-mark">K.</span>
            <span>KAUSHIK / LAB</span>
          </a>
          <span className="eyebrow rounded-full border border-amber-200/20 px-3 py-2">INTERACTIVE EXPERIMENT 001</span>
        </div>
        <section className="mb-11">
          <p className="eyebrow mb-4">FOCUS, MADE VISIBLE</p>
          <h1 className="hero-title text-5xl leading-tight font-bold tracking-tight sm:text-7xl">Build a better <span>rhythm.</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg">
            One focused day becomes one block. Stack enough days together and your efforts become a skyline.
            Rotate the city, explore the calendar, or switch to a classic heatmap.
          </p>
        </section>
        <section className="app-frame relative rounded-2xl p-3 shadow-2xl sm:p-7" aria-label="Focus City dashboard">
          <div className="mb-2 flex items-center justify-between gap-2 px-2 pt-3 sm:px-4">
            <span className="eyebrow">YOUR PROGRESS / VISUALIZED</span>
            <span className="live-indicator text-xs">DEMO DATA</span>
          </div>
          <FocusCityDemo />
        </section>
        <div className="mt-8 grid gap-5 text-sm text-stone-400 sm:grid-cols-2">
          <p><strong className="text-amber-200">3D / 2D</strong> — Drag the skyline to change the viewing angle or toggle to a traditional heatmap.</p>
          <p><strong className="text-amber-200">81 DAYS</strong> — This example uses fixed fictional focus sessions supplied with the component, not personal or GitHub activity.</p>
        </div>
        <footer className="mt-20 flex flex-wrap justify-between gap-3 border-t border-stone-700/50 pt-6 text-xs text-stone-500">
          <span>DESIGNED TO MAKE SMALL WINS VISIBLE.</span>
          <a className="hover:text-amber-200" href="https://github.com/zenetsu022-source/1st-try/tree/main/focus-dashboard">VIEW SOURCE ON GITHUB ↗</a>
        </footer>
      </div>
    </main>
  );
}
