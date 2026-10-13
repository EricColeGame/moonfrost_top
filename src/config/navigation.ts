// 导航配置：分类 slug 与 content/<locale>/ 下的文章子目录名一一对应，
// 也是 content.ts 的 GROUP_TITLES / GROUP_ORDER key 以及 en.json nav 的键。
// key 是翻译键（next-intl），path 是 URL，二者不可合并。
export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "crypto", path: "/crypto", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

// CONTENT_TYPES 由 NAVIGATION_CONFIG 派生，供 content.ts / 路由页面消费。
export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
