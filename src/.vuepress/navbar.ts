import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "基础-进阶",
    icon: "safe",
    prefix: "/基础-进阶/",
    children: [
      {
        text: "基础",
        icon: "activity",
        link: "基础",
      },
      {
        text: "进阶",
        icon: "update",
        link: "进阶",
      },
    ],
  },
  {
    text: "大前端",
    icon: "back-stage",
    prefix: "/大前端/",
    children: [
      {
        text: "开发工具",
        icon: "tool",
        link: "开发工具",
      },
      {
        text: "开发规范",
        icon: "markdown",
        link: "开发规范",
      },
      {
        text: "npm",
        icon: "npm",
        link: "npm",
      },
      {
        text: "Vue3",
        icon: "vue",
        link: "Vue3",
      },
      {
        text: "方案落地",
        icon: "vue",
        link: "方案落地",
      },
      {
        text: "数据埋点",
        icon: "vue",
        link: "数据埋点",
      },
      {
        text: "微前端",
        icon: "vue",
        link: "微前端",
      },
      {
        text: "Template基础模板",
        icon: "vue",
        link: "Template基础模板",
      },
      {
        text: "开发环境",
        icon: "vue",
        link: "开发环境",
      },
      {
        text: "扩展",
        icon: "workingDirectory",
        link: "扩展",
      },
    ],
  },
  {
    text: "后端开发",
    icon: "mysql",
    prefix: "/后端开发/",
    children: [
      {
        text: "mongoose",
        icon: "module",
        link: "mongoose",
      },
    ],
  },
  {
    text: "前端面试题",
    icon: "blog",
    prefix: "/前端面试题/",
    children: [
      {
        text: "基础面试题",
        icon: "relation",
        link: "基础面试题",
      },
      {
        text: "分类面试题",
        icon: "plugin",
        link: "分类面试题",
      },
      {
        text: "核心面试题",
        icon: "file",
        link: "核心面试题",
      },
      {
        text: "2025前端最新面试题",
        icon: "free",
        link: "2025前端最新面试题",
      },
    ],
  },
  {
    text: "闲时小记",
    icon: "launch",
    link: "/闲时小记/",
  },
  {
    text: "经验实践",
    icon: "json",
    link: "/经验实践/",
  },
  {
    text: "V 1.2.0",
    // icon: "loop",
    children: [
      {
        text: "我的公众号",
        icon: "wechat",
        link: "基础面试题",
      },
      {
        text: "更新日志",
        icon: "diagram",
        link: "https://github.com/DaMaiCoding/DaMaiCoding-Note",
      },
    ],
  },
]);
