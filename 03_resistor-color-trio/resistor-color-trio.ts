const COLORS: Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

const UNITS = ["ohms", "kiloohms", "megaohms", "gigaohms"];

export function decodedResistorValue(colors: string[]): string {
  const initialValue =
    (COLORS[colors[0]] * 10 + COLORS[colors[1]]) * 10 ** COLORS[colors[2]];
  const thousandsReducer = Math.floor(Math.log10(initialValue) / 3);
  const value = initialValue / 10 ** (3 * thousandsReducer) || 0;
  return `${value} ${UNITS[thousandsReducer] || UNITS[0]}`;
}
