const e=JSON.parse('{"key":"v-6ee10115","path":"/%E4%BC%98%E8%B4%A8%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%9F%BA%E6%9C%AC%E9%9D%A2%E8%AF%95%E9%A2%98/css-%E6%A0%B7%E5%BC%8F%E4%B8%8E%E5%B8%83%E5%B1%80.html","title":"css-样式与布局","lang":"zh-CN","frontmatter":{"description":"css-样式与布局 1. 1px 问题 背景 其实就是在问, 如果要实现 0.5px 的方法, 主要问题是 在不同浏览器上, 小于 1px 的会默认为 1px css 1px 是逻辑像素, 而屏幕是逻辑像素, 设备像素比 dpr 不同, 逻辑像素最终转换为物理像素就不同 设备像素比 = 物理设备像素 / 逻辑像素 兼容性问题 chrome：把小于 0.5px 的当成0，大于等于 0.5px 的当作 1px firefox：会把大于等于 0.55px 的当作 1px safiri:把大于等于 0.75px 的当作 1px 进一步在手机上观察 iOS 的 Chrome 会画出 0.5px的边，而安卓(5.0)原生浏览器是不行的。所以直接设置 0.5px 不同浏览器的差异比较大","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Lin-Note-v3/%E4%BC%98%E8%B4%A8%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%9F%BA%E6%9C%AC%E9%9D%A2%E8%AF%95%E9%A2%98/css-%E6%A0%B7%E5%BC%8F%E4%B8%8E%E5%B8%83%E5%B1%80.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"css-样式与布局"}],["meta",{"property":"og:description","content":"css-样式与布局 1. 1px 问题 背景 其实就是在问, 如果要实现 0.5px 的方法, 主要问题是 在不同浏览器上, 小于 1px 的会默认为 1px css 1px 是逻辑像素, 而屏幕是逻辑像素, 设备像素比 dpr 不同, 逻辑像素最终转换为物理像素就不同 设备像素比 = 物理设备像素 / 逻辑像素 兼容性问题 chrome：把小于 0.5px 的当成0，大于等于 0.5px 的当作 1px firefox：会把大于等于 0.55px 的当作 1px safiri:把大于等于 0.75px 的当作 1px 进一步在手机上观察 iOS 的 Chrome 会画出 0.5px的边，而安卓(5.0)原生浏览器是不行的。所以直接设置 0.5px 不同浏览器的差异比较大"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/Lin-Note-v3/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-14T10:55:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"css-样式与布局"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2023-06-14T10:55:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"css-样式与布局\\",\\"image\\":[\\"https://mister-hope.github.io/Lin-Note-v3/\\"],\\"dateModified\\":\\"2023-06-14T10:55:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"1. 1px 问题","slug":"_1-1px-问题","link":"#_1-1px-问题","children":[]},{"level":2,"title":"2. CSS 操作题 总结","slug":"_2-css-操作题-总结","link":"#_2-css-操作题-总结","children":[]},{"level":2,"title":"3. CSS 高级语法的应用","slug":"_3-css-高级语法的应用","link":"#_3-css-高级语法的应用","children":[]},{"level":2,"title":"4. CSS 常见的选择器","slug":"_4-css-常见的选择器","link":"#_4-css-常见的选择器","children":[]},{"level":2,"title":"5. CSS 优化、提高性能的方法有哪些?","slug":"_5-css-优化、提高性能的方法有哪些","link":"#_5-css-优化、提高性能的方法有哪些","children":[]},{"level":2,"title":"6. 响应式布局实现方式有哪些?","slug":"_6-响应式布局实现方式有哪些","link":"#_6-响应式布局实现方式有哪些","children":[]},{"level":2,"title":"7. 清除浮动的方法有哪些?","slug":"_7-清除浮动的方法有哪些","link":"#_7-清除浮动的方法有哪些","children":[]},{"level":2,"title":"8. float 高度塌陷？","slug":"_8-float-高度塌陷","link":"#_8-float-高度塌陷","children":[]},{"level":2,"title":"9. display:inline-block 有缝隙？","slug":"_9-display-inline-block-有缝隙","link":"#_9-display-inline-block-有缝隙","children":[]},{"level":2,"title":"10. 多行文本垂直居中","slug":"_10-多行文本垂直居中","link":"#_10-多行文本垂直居中","children":[]},{"level":2,"title":"11. div 居中的方法有哪些?","slug":"_11-div-居中的方法有哪些","link":"#_11-div-居中的方法有哪些","children":[]},{"level":2,"title":"12. 如何画 0.5px 的线?","slug":"_12-如何画-0-5px-的线","link":"#_12-如何画-0-5px-的线","children":[]},{"level":2,"title":"13. flex 布局怎么把元素搞到右下角?","slug":"_13-flex-布局怎么把元素搞到右下角","link":"#_13-flex-布局怎么把元素搞到右下角","children":[]},{"level":2,"title":"14. flex 高度继承","slug":"_14-flex-高度继承","link":"#_14-flex-高度继承","children":[]},{"level":2,"title":"15. 子元素在什么情况不会撑起父元素的高度","slug":"_15-子元素在什么情况不会撑起父元素的高度","link":"#_15-子元素在什么情况不会撑起父元素的高度","children":[]},{"level":2,"title":"16. 如何让文字过长, 显示省略号","slug":"_16-如何让文字过长-显示省略号","link":"#_16-如何让文字过长-显示省略号","children":[]},{"level":2,"title":"17. 上下边距重叠","slug":"_17-上下边距重叠","link":"#_17-上下边距重叠","children":[]},{"level":2,"title":"18. BFC (块级格式上下文)","slug":"_18-bfc-块级格式上下文","link":"#_18-bfc-块级格式上下文","children":[]},{"level":2,"title":"19. CSS 性能优化","slug":"_19-css-性能优化","link":"#_19-css-性能优化","children":[]},{"level":2,"title":"20. 伪元素、伪类选择器","slug":"_20-伪元素、伪类选择器","link":"#_20-伪元素、伪类选择器","children":[]},{"level":2,"title":"21. 画 三角形","slug":"_21-画-三角形","link":"#_21-画-三角形","children":[]},{"level":2,"title":"22. CSS 尺寸单位有哪些?","slug":"_22-css-尺寸单位有哪些","link":"#_22-css-尺寸单位有哪些","children":[]},{"level":2,"title":"23. 说一说 BFC","slug":"_23-说一说-bfc","link":"#_23-说一说-bfc","children":[{"level":3,"title":"什么是 BFC","slug":"什么是-bfc","link":"#什么是-bfc","children":[]},{"level":3,"title":"如何形成 BFC","slug":"如何形成-bfc","link":"#如何形成-bfc","children":[]},{"level":3,"title":"BFC 解决了什么问题 (或者说应用场景)","slug":"bfc-解决了什么问题-或者说应用场景","link":"#bfc-解决了什么问题-或者说应用场景","children":[]}]}],"git":{"createdTime":1686740115000,"updatedTime":1686740115000,"contributors":[{"name":"linzeqin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":11.46,"words":3437},"filePathRelative":"优质面试题/基本面试题/css-样式与布局.md","localizedDate":"2023年6月14日","excerpt":"<h1> css-样式与布局</h1>\\n<h2> 1. 1px 问题</h2>\\n<p>背景</p>\\n<ul>\\n<li>其实就是在问, 如果要实现 0.5px 的方法, 主要问题是 在不同浏览器上, 小于 1px 的会默认为 1px</li>\\n<li>css 1px 是逻辑像素, 而屏幕是逻辑像素, 设备像素比 dpr 不同, 逻辑像素最终转换为物理像素就不同</li>\\n<li>设备像素比 = 物理设备像素 / 逻辑像素</li>\\n</ul>\\n<p>兼容性问题</p>\\n<ol>\\n<li>\\n<p>chrome：把小于 0.5px 的当成0，大于等于 0.5px 的当作 1px</p>\\n</li>\\n<li>\\n<p>firefox：会把大于等于 0.55px 的当作 1px</p>\\n</li>\\n<li>\\n<p>safiri:把大于等于 0.75px 的当作 1px 进一步在手机上观察 iOS 的 Chrome 会画出 0.5px的边，而安卓(5.0)原生浏览器是不行的。所以直接设置 0.5px 不同浏览器的差异比较大</p>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};
