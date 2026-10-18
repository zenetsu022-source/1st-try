# Focus City

A responsive, accessible **3D isometric focus calendar** with a 2D heatmap, date picker, day details, and session history. Built with **Next.js, TypeScript, Tailwind CSS v4, shadcn-compatible project paths, and lucide-react**.

This is a separate app nested inside the portfolio repository. The original static portfolio at the repository root remains untouched.

## Run it locally

Install Node.js 20 or newer, then run:

```bash
cd focus-dashboard
npm install
npm run dev
```

Open http://localhost:3000 in your browser. To type-check after installing dependencies, run `npm run typecheck`.

## Project map

- `components/ui/focus-city.tsx` — full Focus City component from the supplied code
- `components/demo.tsx` — supplied deterministic example data and renderer
- `app/page.tsx` — standalone landing page and integration
- `app/globals.css` — Tailwind v4 styles and custom dark/bronze design
- `components.json` — shadcn/ui-compatible configuration
- `tsconfig.json` — TypeScript and `@/*` alias

## How to use real data

Replace `demoDays` in `components/demo.tsx` with an array of `FocusDay` objects:

```ts
[{ date: "2026-10-18", sessions: [
  { id: "coding", title: "Coding", minutes: 90, startedAt: "09:00" }
]}]
```

**Important:** The demo values are **fictional study/focus sessions**, not imported from your GitHub contribution activity. Connect a real activity source separately if you want a live chart.

## GitHub profile note

GitHub README files cannot execute React components. To feature Focus City on a GitHub profile, deploy this Next.js app and link it from your profile README. The user-profile README itself requires a **public repository named exactly `zenetsu022-source`** on the same account, containing a root-level `README.md`.

No existing repositories or project code were deleted.
