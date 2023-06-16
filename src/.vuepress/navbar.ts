import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "面试题",
    icon: "pen-to-square",
    prefix: "/优质面试题/",
    children: [
      {
        text: "基本面试题",
        icon: "book",
        link: "基本面试题",
      },
      {
        text: "分类面试题",
        icon: "book",
        link: "分类面试题",
      },
    ],
  },
  {
    text: "基础入门",
    icon: "book",
    link: "/基础入门/",
  },
]);
