import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/", 
  lang: "zh-CN",
  title: "中山大学本科生自救指南(电通版)",
  description: "中山大学电子与通信工程学院（SECE）课程攻略、生存指南与资源汇总",

head: [
  // 标准 favicon（搜索引擎 & 地址栏）
  ["link", { rel: "icon", href: "/favicon.ico" }],
  ["meta", { name: "keywords", content: "中山大学, SECE, 电通院, 课程攻略, 选课指南, 考研" }],
],


  bundler: viteBundler(),
  
  theme, // 引用 theme.ts

  shouldPrefetch: false,
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
});