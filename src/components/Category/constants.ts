export const CATEGORIES = [
  'All',
  'Technology',
  'Design',
  'Neuroscience',
  'Programming',
  'Research',
  'Projects'
] as const;

export type Category = typeof CATEGORIES[number];

export const COLOR_SET: { [key: string]: string } = {
  0: "rgb(186 230 253)",
  1: "rgb(254 205 211)",
  2: "rgb(245 208 254)",
  3: "rgb(221 214 254)",
  4: "rgb(191 219 254)",
  5: "rgb(204 251 241)",
  6: "rgb(187 247 208)",
  7: "rgb(254 249 195)",
  8: "rgb(186 230 253)",
  9: "rgb(254 202 202)",
  A: "rgb(231 229 228)",
  B: "rgb(226 232 240)",
  C: "rgb(252 231 243)",
  D: "rgb(233 213 255)",
  E: "rgb(199 210 254)",
  F: "rgb(209 250 229)",
};
