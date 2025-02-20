const e=JSON.parse('{"key":"v-3b14d178","path":"/%E7%BB%8F%E9%AA%8C%E5%AE%9E%E8%B7%B5/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%9C%B0%E5%9B%BE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9D%90%E6%A0%87%E5%AE%9E%E7%8E%B0.html","title":"微信小程序地图自定义坐标实现","lang":"zh-CN","frontmatter":{"description":"微信小程序地图自定义坐标实现 实现目标 \\t 地图中坐标点绘制，并可点击切换样式 思路与问题、及解决方案 cover-view 批量显示在 map 中 一开始直接在 map 中定义 cover-view 并将 在 v-for 写在 cover-view上 结果 marker 都不显示了，查看资料说循环渲染，需要套在 block 中","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/DaMaiCoding-Note/%E7%BB%8F%E9%AA%8C%E5%AE%9E%E8%B7%B5/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%9C%B0%E5%9B%BE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9D%90%E6%A0%87%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"DaMaiCoding-Note"}],["meta",{"property":"og:title","content":"微信小程序地图自定义坐标实现"}],["meta",{"property":"og:description","content":"微信小程序地图自定义坐标实现 实现目标 \\t 地图中坐标点绘制，并可点击切换样式 思路与问题、及解决方案 cover-view 批量显示在 map 中 一开始直接在 map 中定义 cover-view 并将 在 v-for 写在 cover-view上 结果 marker 都不显示了，查看资料说循环渲染，需要套在 block 中"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-21T16:39:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-21T16:39:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微信小程序地图自定义坐标实现\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-21T16:39:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"实现目标","slug":"实现目标","link":"#实现目标","children":[]},{"level":2,"title":"思路与问题、及解决方案","slug":"思路与问题、及解决方案","link":"#思路与问题、及解决方案","children":[{"level":3,"title":"cover-view 批量显示在 map 中","slug":"cover-view-批量显示在-map-中","link":"#cover-view-批量显示在-map-中","children":[]},{"level":3,"title":"marker 无点击事件","slug":"marker-无点击事件","link":"#marker-无点击事件","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1713717565000,"updatedTime":1713717565000,"contributors":[{"name":"Jack_Lin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":1.25,"words":374},"filePathRelative":"经验实践/微信小程序地图自定义坐标实现.md","localizedDate":"2024年4月21日","excerpt":"<h1> 微信小程序地图自定义坐标实现</h1>\\n<h2> 实现目标</h2>\\n\\t\\n<ol>\\n<li>地图中坐标点绘制，并可点击切换样式</li>\\n</ol>\\n<h2> 思路与问题、及解决方案</h2>\\n<h3> cover-view 批量显示在 map 中</h3>\\n<p>一开始直接在 <code>map</code> 中定义 <code>cover-view</code> 并将 在 <code>v-for</code> 写在 <code>cover-view</code>上</p>\\n<p>结果 <code>marker</code> 都不显示了，查看资料说循环渲染，需要套在 <code>block</code> 中</p>","autoDesc":true}');export{e as data};
