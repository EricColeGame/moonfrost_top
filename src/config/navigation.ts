// 导航配置已清空，等待后续阶段按新游戏内容重建。
// CONTENT_TYPES 由 NAVIGATION_CONFIG 派生，供 content.ts / 路由页面消费。
export const NAVIGATION_CONFIG: {
  key: string;
  path: string;
  isContentType: boolean;
}[] = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
