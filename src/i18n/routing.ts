import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

// 唯一真相源：站点支持的最终语言集合。
// 新增/移除语言时必须同步 request.ts、language-switcher.tsx 与 src/locales/*.json。
export const locales = ["en", "de", "fr", "es"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
