const e=JSON.parse('{"key":"v-3eb33a93","path":"/%E4%BC%98%E8%B4%A8%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%9F%BA%E6%9C%AC%E9%9D%A2%E8%AF%95%E9%A2%98/%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"构建工具的使用","lang":"zh-CN","frontmatter":{"description":"构建工具的使用 1. 描述下你对 webpack 的理解? 解决了什么问题? 理解：webpack 是一款静态模块打包工具 解决了什么问题 解决浏览器兼容性问题 (编译代码能力) - 如 ES5 转 ES6 解决浏览器频繁请求文件的问题 (模块整合能力) - 如 将很多 JS 文件整合成一个 Bundle.js 使项目维护性增强, 支持不同种类的前端模块类型, 统一的模块化方案, 所有资源文件的加载都可以通过代码控制 - 如 .css、.scss 都可以整合成一个 .css, 而 .ts、.js 可以整合成一个 Bundle.js","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Lin-Note-v3/%E4%BC%98%E8%B4%A8%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%9F%BA%E6%9C%AC%E9%9D%A2%E8%AF%95%E9%A2%98/%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"构建工具的使用"}],["meta",{"property":"og:description","content":"构建工具的使用 1. 描述下你对 webpack 的理解? 解决了什么问题? 理解：webpack 是一款静态模块打包工具 解决了什么问题 解决浏览器兼容性问题 (编译代码能力) - 如 ES5 转 ES6 解决浏览器频繁请求文件的问题 (模块整合能力) - 如 将很多 JS 文件整合成一个 Bundle.js 使项目维护性增强, 支持不同种类的前端模块类型, 统一的模块化方案, 所有资源文件的加载都可以通过代码控制 - 如 .css、.scss 都可以整合成一个 .css, 而 .ts、.js 可以整合成一个 Bundle.js"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/Lin-Note-v3/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-14T10:55:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"构建工具的使用"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2023-06-14T10:55:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"构建工具的使用\\",\\"image\\":[\\"https://mister-hope.github.io/Lin-Note-v3/\\"],\\"dateModified\\":\\"2023-06-14T10:55:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"1. 描述下你对 webpack 的理解? 解决了什么问题?","slug":"_1-描述下你对-webpack-的理解-解决了什么问题","link":"#_1-描述下你对-webpack-的理解-解决了什么问题","children":[]},{"level":2,"title":"2. 说一说 webpack 的构建流程","slug":"_2-说一说-webpack-的构建流程","link":"#_2-说一说-webpack-的构建流程","children":[]},{"level":2,"title":"3. 说说 webpack 中常见的 Loader? 解决了什么问题?","slug":"_3-说说-webpack-中常见的-loader-解决了什么问题","link":"#_3-说说-webpack-中常见的-loader-解决了什么问题","children":[]},{"level":2,"title":"4. 说说 webpack 中常见的 Plugin? 解决了什么问题?","slug":"_4-说说-webpack-中常见的-plugin-解决了什么问题","link":"#_4-说说-webpack-中常见的-plugin-解决了什么问题","children":[]},{"level":2,"title":"5. 说说 Loader 和 Plugin 的区别? 编写 Loader, Plugin 的思路?","slug":"_5-说说-loader-和-plugin-的区别-编写-loader-plugin-的思路","link":"#_5-说说-loader-和-plugin-的区别-编写-loader-plugin-的思路","children":[]},{"level":2,"title":"6. 热更新是什么? webpack 的热更新是如何做到的? 原理是什么?","slug":"_6-热更新是什么-webpack-的热更新是如何做到的-原理是什么","link":"#_6-热更新是什么-webpack-的热更新是如何做到的-原理是什么","children":[]},{"level":2,"title":"7. 说说 webpack proxy 工作原理? 为什么能解决跨域问题?","slug":"_7-说说-webpack-proxy-工作原理-为什么能解决跨域问题","link":"#_7-说说-webpack-proxy-工作原理-为什么能解决跨域问题","children":[]},{"level":2,"title":"8. 说说如何借助 webpack 来优化前端性能?","slug":"_8-说说如何借助-webpack-来优化前端性能","link":"#_8-说说如何借助-webpack-来优化前端性能","children":[]},{"level":2,"title":"9. 如何提高 webpack 的构建速度?","slug":"_9-如何提高-webpack-的构建速度","link":"#_9-如何提高-webpack-的构建速度","children":[]},{"level":2,"title":"10. 前端打包工具有哪些?","slug":"_10-前端打包工具有哪些","link":"#_10-前端打包工具有哪些","children":[]},{"level":2,"title":"11. Rollup vs Webpack","slug":"_11-rollup-vs-webpack","link":"#_11-rollup-vs-webpack","children":[]},{"level":2,"title":"12. Rollup 常用插件","slug":"_12-rollup-常用插件","link":"#_12-rollup-常用插件","children":[]},{"level":2,"title":"13. Rollup 中用 babel 与 typescript 打包有什么区别?","slug":"_13-rollup-中用-babel-与-typescript-打包有什么区别","link":"#_13-rollup-中用-babel-与-typescript-打包有什么区别","children":[]}],"git":{"createdTime":1686740115000,"updatedTime":1686740115000,"contributors":[{"name":"linzeqin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":4.86,"words":1457},"filePathRelative":"优质面试题/基本面试题/构建工具的使用.md","localizedDate":"2023年6月14日","excerpt":"<h1> 构建工具的使用</h1>\\n<h2> 1. 描述下你对 webpack 的理解? 解决了什么问题?</h2>\\n<p><strong>理解</strong>：webpack 是一款静态模块打包工具</p>\\n<p><strong>解决了什么问题</strong></p>\\n<ul>\\n<li>解决浏览器兼容性问题 (编译代码能力) - 如 ES5 转 ES6</li>\\n<li>解决浏览器频繁请求文件的问题 (模块整合能力) - 如 将很多 JS 文件整合成一个 Bundle.js</li>\\n<li>使项目维护性增强, 支持不同种类的前端模块类型, 统一的模块化方案, 所有资源文件的加载都可以通过代码控制 - 如 .css、.scss 都可以整合成一个 .css, 而 .ts、.js 可以整合成一个 Bundle.js</li>\\n</ul>","autoDesc":true}');export{e as data};
