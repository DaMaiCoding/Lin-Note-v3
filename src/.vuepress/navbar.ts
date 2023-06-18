import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "基础-进阶",
    icon: "book",
    prefix: "/基础-进阶/",
    children: [
      {
        text: "基础",
        icon: "book",
        link: "基础",
      },
      {
        text: "进阶",
        icon: "book",
        link: "进阶",
      },
    ],
  },
  {
    text: "大前端",
    icon: "book",
    prefix: "/大前端/",
    children: [
      {
        text: "开发工具",
        icon: "book",
        link: "开发工具",
      },
      {
        text: "开发规范",
        icon: "book",
        link: "开发规范",
      },
      {
        text: "npm",
        icon: "book",
        link: "npm",
      },
      {
        text: "Vue3",
        icon: "book",
        link: "Vue3",
      },
      {
        text: "扩展",
        icon: "book",
        link: "扩展",
      },
    ],
  },
  {
    text: "后端开发",
    icon: "book",
    prefix: "/后端开发/",
    children: [
      {
        text: "mongoose",
        icon: "book",
        link: "mongoose",
      },
    ],
  },
  {
    text: "前端面试题",
    icon: "pen-to-square",
    prefix: "/前端面试题/",
    children: [
      {
        text: "基础面试题",
        icon: "book",
        link: "基础面试题",
      },
      {
        text: "分类面试题",
        icon: "book",
        link: "分类面试题",
      },
    ],
  },
  {
    text: "闲时小记",
    icon: "pen-to-square",
    link: "/闲时小记/",
  },
  {
    text: "经验实践",
    icon: "pen-to-square",
    link: "/经验实践/",
  },
]);
