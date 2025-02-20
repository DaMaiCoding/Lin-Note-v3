const e=JSON.parse('{"key":"v-143b1071","path":"/%E9%97%B2%E6%97%B6%E5%B0%8F%E8%AE%B0/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html","title":"前端性能优化","lang":"zh-CN","frontmatter":{"description":"前端性能优化 简介 image-20230409212935447 性能优化过程: 结合性能检测工具, 得到具体网站的性能瓶颈, 发现一个网站的性能的痛点 理解页面的生命周期 经典面试题 从浏览器地址栏输入URL后，到页面渲染出来，整个过程都发生了什么? 不同级别的回答 初级:首先浏览器发起请求，然后服务器返回数据，最后浏览器执行脚本和页面渲染 中级:知道浏览器输入 url 后会建立 tcp 链接，进行 http 的请求和响应在浏览器接收到服务器返回数据之后了解 html, css 构建渲染树以及 js 引擎解析和执行等","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/DaMaiCoding-Note/%E9%97%B2%E6%97%B6%E5%B0%8F%E8%AE%B0/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"DaMaiCoding-Note"}],["meta",{"property":"og:title","content":"前端性能优化"}],["meta",{"property":"og:description","content":"前端性能优化 简介 image-20230409212935447 性能优化过程: 结合性能检测工具, 得到具体网站的性能瓶颈, 发现一个网站的性能的痛点 理解页面的生命周期 经典面试题 从浏览器地址栏输入URL后，到页面渲染出来，整个过程都发生了什么? 不同级别的回答 初级:首先浏览器发起请求，然后服务器返回数据，最后浏览器执行脚本和页面渲染 中级:知道浏览器输入 url 后会建立 tcp 链接，进行 http 的请求和响应在浏览器接收到服务器返回数据之后了解 html, css 构建渲染树以及 js 引擎解析和执行等"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-21T16:39:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-21T16:39:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端性能优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-21T16:39:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"理解页面的生命周期","slug":"理解页面的生命周期","link":"#理解页面的生命周期","children":[{"level":3,"title":"经典面试题","slug":"经典面试题","link":"#经典面试题","children":[]},{"level":3,"title":"不同级别的回答","slug":"不同级别的回答","link":"#不同级别的回答","children":[]},{"level":3,"title":"整个链路的流转 (整个页面的生命周期)","slug":"整个链路的流转-整个页面的生命周期","link":"#整个链路的流转-整个页面的生命周期","children":[]},{"level":3,"title":"从页面生命周期出发, 得出优秀的性能分析方案","slug":"从页面生命周期出发-得出优秀的性能分析方案","link":"#从页面生命周期出发-得出优秀的性能分析方案","children":[]}]},{"level":2,"title":"性能优化实例","slug":"性能优化实例","link":"#性能优化实例","children":[{"level":3,"title":"加载性能优化","slug":"加载性能优化","link":"#加载性能优化","children":[]},{"level":3,"title":"构建优化","slug":"构建优化","link":"#构建优化","children":[]}]},{"level":2,"title":"渲染优化","slug":"渲染优化","link":"#渲染优化","children":[{"level":3,"title":"渲染性能 - 减少重排的操作","slug":"渲染性能-减少重排的操作","link":"#渲染性能-减少重排的操作","children":[]},{"level":3,"title":"渲染性能 - 避免样式频繁修改","slug":"渲染性能-避免样式频繁修改","link":"#渲染性能-避免样式频繁修改","children":[]},{"level":3,"title":"渲染性能 - 动画优化","slug":"渲染性能-动画优化","link":"#渲染性能-动画优化","children":[]}]},{"level":2,"title":"缓存性能优化","slug":"缓存性能优化","link":"#缓存性能优化","children":[{"level":3,"title":"http缓存优化关注点","slug":"http缓存优化关注点","link":"#http缓存优化关注点","children":[]},{"level":3,"title":"浏览器缓存 - 强缓存","slug":"浏览器缓存-强缓存","link":"#浏览器缓存-强缓存","children":[]},{"level":3,"title":"浏览器缓存 - 协商缓存","slug":"浏览器缓存-协商缓存","link":"#浏览器缓存-协商缓存","children":[]}]}],"git":{"createdTime":1687101610000,"updatedTime":1713717565000,"contributors":[{"name":"Jack_Lin","email":"1351123861@qq.com","commits":2}]},"readingTime":{"minutes":7.35,"words":2204},"filePathRelative":"闲时小记/性能优化.md","localizedDate":"2023年6月18日","excerpt":"<h1> 前端性能优化</h1>\\n<h2> 简介</h2>\\n<figure><figcaption>image-20230409212935447</figcaption></figure>\\n<p>性能优化过程: 结合性能检测工具, 得到具体网站的性能瓶颈, 发现一个网站的性能的痛点</p>\\n<h2> 理解页面的生命周期</h2>\\n<h3> 经典面试题</h3>\\n<p>从浏览器地址栏输入URL后，到页面渲染出来，整个过程都发生了什么?</p>\\n<h3> 不同级别的回答</h3>\\n<p>初级:首先浏览器发起请求，然后服务器返回数据，最后浏览器执行脚本和页面渲染</p>\\n<p>中级:知道浏览器输入 url 后会建立 tcp 链接，进行 http 的请求和响应在浏览器接收到服务器返回数据之后了解 html, css 构建渲染树以及 js 引擎解析和执行等</p>","autoDesc":true}');export{e as data};
