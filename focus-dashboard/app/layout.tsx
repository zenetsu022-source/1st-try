import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focus City | Kaushik's Lab",
  description: "An interactive 3D focus tracker with a heatmap, session calendar, and progress visualization.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body>{children}</body></html>;
}
