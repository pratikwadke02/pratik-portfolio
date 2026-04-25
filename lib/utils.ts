import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge about our custom font-size utilities so it doesn't
// confuse them with custom text colors (text-fg, text-accent, etc.).
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: ["hero", "display-xl", "display-lg", "display-md", "body-lg", "body-sm"],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatDateRange(start: string, end: string | null): string {
  const formatOne = (iso: string) => {
    const [y, m] = iso.split("-");
    const month = MONTHS[Number.parseInt(m, 10) - 1] ?? "";
    return `${month} ${y}`;
  };
  return `${formatOne(start)} — ${end ? formatOne(end) : "Present"}`;
}

export function yearRangeShort(start: string, end: string | null): string {
  const startYear = start.split("-")[0];
  const endYear = end ? end.split("-")[0] : "Now";
  return startYear === endYear ? startYear : `${startYear} – ${endYear}`;
}

export async function copyToClipboard(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}
