import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Lin-Note-v3/",

  lang: "zh-CN",
  title: "Lin-Note",
  description: "Lin-Note 的个人博客",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
