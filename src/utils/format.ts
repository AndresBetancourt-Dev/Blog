const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const parseYearMonth = (value: string) => {
  const [year, month] = value.split("-").map(Number);
  return new Date(Date.UTC(year, (month || 1) - 1, 1));
};

export const formatYearMonth = (value?: string) =>
  value ? monthFormatter.format(parseYearMonth(value)) : "Present";

/** LinkedIn-style inclusive duration, e.g. "2 yrs 10 mos". */
export const formatDuration = (
  start: string,
  end?: string,
  now = new Date(),
) => {
  const from = parseYearMonth(start);
  const to = end
    ? parseYearMonth(end)
    : new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const totalMonths =
    (to.getUTCFullYear() - from.getUTCFullYear()) * 12 +
    (to.getUTCMonth() - from.getUTCMonth()) +
    1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
};

/** Joins class names, skipping falsy values. */
export const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

/** Picks black or white text for a solid background color (WCAG luminance). */
export const readableTextOn = (hex: string) => {
  const value = hex.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;
  const [r, g, b] = [0, 2, 4].map((offset) => {
    const channel = parseInt(full.slice(offset, offset + 2), 16) / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.4 ? "#0b0b12" : "#ffffff";
};
