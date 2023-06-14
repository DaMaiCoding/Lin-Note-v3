# html-标签

## DOM 对象有哪些？ (文档对象模型)

- document (文档对象)
- element (HTML 元素, 节点对象)
- event (事件对象)
- attribute (表示 HTML 属性)



## BOM 对象有哪些？

- window
- location
- navigator
- screen
- history
- cosole

[BOM对象有哪些？你用过哪些？](https://juejin.cn/post/7116113618550292516#heading-1)



## HTML 语义化是什么, 有哪些标签?

HTML 语义化标签就是用于方便搜索引擎解析, 也就是 SEO

语义化标签 就是 用正确的标签做正确的事



**语义化标签有哪些?** 

有很多, 基本不会问, 可能会问 HTML5 新增了哪些

[什么是HTML语义化标签？](https://blog.csdn.net/eeeecw/article/details/80591511)

HTML5 新增语义化标签 footer、nav、header、article



## 块级标签、内联标签有哪些?

1. CSS 规范规定，每个元素都有 display 属性，确定该元素的类型，每个元素都有默认的 display值， 比如 div 默认 display 属性值为 “**block**”，成为“块级”元素； span 默认 display 属性值为 “**inline**”，是“行内”元素。

2. 行内元素有：`a span img input select strong`（强调的语气） 块级元素有：`div ul ol li dl dt dd h1 ~ h6 p`



## defer 和 async 区别？

html 文件都是按顺序执行的，script 标签中没有加 defer 和 async 时，浏览器在解析文档时遇到 script 标签就会停止解析, 阻塞文档解析，先加载JS文件，加载完之后立即执行，执行完毕后才能继续解析文档。 

而在 script 标签中写入 defer 或者 async 时，就会使JS文件异步加载，即 html 执行到 script 标签时，JS加载和文档解析同时进行，

而 defer 则是JS加载完成后，在文档解析完成后执行JS脚本，而 async 是在JS加载完成后立即执行JS脚本，阻塞文档解析，



小结

- defer -> js 加载 -> 文档解析 -> js 执行
- async -> js 加载 -> js 执行 -> 文档解析
