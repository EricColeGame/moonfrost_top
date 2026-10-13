export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Moonfrost Wiki",
  shortName: "Moonfrost",
  logoText: "M",
  tagline: "Cozy Fantasy Farming Guides, Crafting & Characters",
  description: "Moonfrost Wiki provides farming guides, crafting tips, character information, item databases, and everything players need for this cozy fantasy life simulation adventure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://moonfrost.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://moonfrost.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2561630/Moonfrost/",
  heroVideoId: "oSWarPKgHHM", // Moonfrost - Official Gameplay Trailer (gameplay/showcase)
  social: {
    discord: "",
    youtube: "https://www.youtube.com/@moonfrostgame",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
