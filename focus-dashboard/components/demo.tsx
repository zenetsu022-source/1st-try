"use client";

import * as React from "react";
import { FocusCity, type FocusDay } from "@/components/ui/focus-city";

/** Fixed, deterministic demo data. Replace with your own session history. */
export const demoDays: FocusDay[] = Array.from({ length: 81 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 6, 20 + index));
  const weekend = date.getUTCDay() === 0 || date.getUTCDay() === 6;
  const resting = index % 17 === 5 || index % 23 === 10 || (weekend && index % 3 === 0);
  let seed = Math.imul(index + 17, 0x45d9f3b);
  seed = Math.imul(seed ^ (seed >>> 16), 0x45d9f3b);
  seed = (seed ^ (seed >>> 16)) >>> 0;
  const total = resting ? 0 : weekend ? 35 + seed % 83 : 75 + seed % 165;
  const first = Math.round(total * .49), second = Math.round(total * .31);
  return {
    date: date.toISOString().slice(0, 10),
    sessions: total ? [
      { id: `${index}-build`, title: "Component development", minutes: first, startedAt: "09:00" },
      { id: `${index}-design`, title: "Design system", minutes: second, startedAt: "11:15" },
      { id: `${index}-research`, title: "Research & planning", minutes: total - first - second, startedAt: "14:00" },
    ] : [],
  };
});

export default function Default() {
  return (
    <div style={{ width: "100%", padding: "24px 0" }}>
      <FocusCity days={demoDays} endDate="2026-10-08" />
      <p style={{ margin: "12px 0 0", textAlign: "center", fontFamily: "system-ui, sans-serif", fontSize: 11, color: "light-dark(#777, #999)" }}>Sample activity · July–October 2026</p>
    </div>
  );
}
