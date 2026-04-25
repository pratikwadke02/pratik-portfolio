import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { rootMetadata } from "@/lib/metadata";
import { buildPersonJsonLd } from "@/lib/jsonld";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { CommandPaletteProvider } from "@/components/providers/CommandPaletteProvider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
  preload: false,
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Dark-first by design: respect explicit user choice, otherwise default dark.
const THEME_INIT = `(function(){try{
  var k='pratik-portfolio-theme';
  var s=localStorage.getItem(k);
  var t = s || 'dark';
  if(t==='dark') document.documentElement.classList.add('dark');
}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // Escape `<` so a future content string containing "</script>" can't
            // break out of this inline JSON block.
            __html: JSON.stringify(buildPersonJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="bg-bg text-fg font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <MotionProvider>
            <CommandPaletteProvider>{children}</CommandPaletteProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
