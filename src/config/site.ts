export const siteConfig = {
  name: "Благост",
  phone: "+359 888 000 000",
  email: "office@blagost.bg",
  address: "гр. София, бул. Витоша 100",
  url: "https://blagost-building.vercel.app",
  links: {
    facebook: "https://facebook.com/blagost",
    instagram: "https://instagram.com/blagost",
  },
} as const;

export type SiteConfig = typeof siteConfig;
