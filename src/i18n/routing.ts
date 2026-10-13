import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

// 唯一真相源：站点支持的最终语言集合。
// 新增/移除语言时必须同步 request.ts、language-switcher.tsx 与 src/locales/*.json。
export const locales = ["en", "de", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  // siteConfig.defaultLocale 为 string；此处收窄为 Locale 联合类型，保证与 locales 集合一致
  defaultLocale: siteConfig.defaultLocale as Locale,
  localePrefix: "always",
  localeDetection: false,
});
