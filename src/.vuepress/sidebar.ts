import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "优质面试题/",
    //   children: "structure",
    // },
    "intro",
    "slides",
  ],
  "/优质面试题/": [
    {
      text: "优质面试题",
      icon: "laptop-code",
      prefix: "",
      link: "",
      children: "structure",
    },
  ],
  "/基础入门/": [
    {
      text: "基础入门",
      icon: "laptop-code",
      prefix: "",
      link: "",
      children: "structure",
    },
  ],
});
