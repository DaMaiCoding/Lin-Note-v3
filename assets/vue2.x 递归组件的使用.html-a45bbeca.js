const s=JSON.parse(`{"key":"v-c940e932","path":"/%E7%BB%8F%E9%AA%8C%E5%AE%9E%E8%B7%B5/vue2.x%20%E9%80%92%E5%BD%92%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"Vue2.x 递归组件的使用","lang":"zh-CN","frontmatter":{"description":"Vue2.x 递归组件的使用 效果 ![image-20230619153720228](./assets/Vue2.x 递归组件的使用/image-20230619153720228-1687160244772-1.png) 实现 &lt;!-- 递归组件 --&gt; &lt;template&gt; &lt;div&gt; &lt;div class=\\"multilayer-class-box\\" v-if=\\" multilayerClass.classItemList &amp;&amp; multilayerClass.classItemList.length &gt; 0 \\" &gt; &lt;div&gt;{{ multilayerClass.classTitleName }}：&lt;/div&gt; &lt;div class=\\"button-box\\"&gt; &lt;div @click=\\"setmultilayerClassItem({})\\" class=\\"button-box-item\\" :class=\\"clicked === null ? 'button-box-item-clicked' : ''\\" &gt; 全部 &lt;/div&gt; &lt;div v-for=\\"item in multilayerClass.classItemList\\" :key=\\"item.categoryId\\" class=\\"button-box-item\\" :class=\\"clicked === item.categoryId ? 'button-box-item-clicked' : ''\\" @click=\\"setmultilayerClassItem(item)\\" &gt; {{ item.serviceName }} &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div v-if=\\" multilayerClassItem.classItemList &amp;&amp; multilayerClassItem.classItemList.length &gt; 0 \\" &gt; &lt;multilayer-class :multilayerClass=\\"multilayerClassItem\\" @selectService=\\"multilayerClassItem\\" &gt;&lt;/multilayer-class&gt; &lt;/div&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; import { bus } from \\"../../utils/bus\\"; export default { name: \\"multilayerClass\\", props: { multilayerClass: { type: Object, default: () =&gt; {} } }, data() { return { multilayerClassItem: {}, clicked: null }; }, methods: { // 设置 下一级分类 setmultilayerClassItem(item) { item.categoryId ? (this.clicked = item.categoryId) : (this.clicked = null); item.children ? (this.multilayerClassItem = item.children) : (this.multilayerClassItem = {}); bus.$emit(\\"on-clicked\\", item); } } }; &lt;/script&gt; &lt;style scoped lang=\\"less\\"&gt; .multilayer-class-box { display: flex; width: 100%; align-items: center; margin: 20px 0; } .button-box { display: flex; .button-box-item { display: flex; align-items: center; border-radius: 30px; padding: 10px 15px; margin-left: 20px; background-color: #fcfcfc; color: #333333; cursor: pointer; } .button-box-item-clicked { color: #ffffff; background-color: #1b7ef6; } } &lt;/style&gt;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/DaMaiCoding-Note/%E7%BB%8F%E9%AA%8C%E5%AE%9E%E8%B7%B5/vue2.x%20%E9%80%92%E5%BD%92%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"DaMaiCoding-Note"}],["meta",{"property":"og:title","content":"Vue2.x 递归组件的使用"}],["meta",{"property":"og:description","content":"Vue2.x 递归组件的使用 效果 ![image-20230619153720228](./assets/Vue2.x 递归组件的使用/image-20230619153720228-1687160244772-1.png) 实现 &lt;!-- 递归组件 --&gt; &lt;template&gt; &lt;div&gt; &lt;div class=\\"multilayer-class-box\\" v-if=\\" multilayerClass.classItemList &amp;&amp; multilayerClass.classItemList.length &gt; 0 \\" &gt; &lt;div&gt;{{ multilayerClass.classTitleName }}：&lt;/div&gt; &lt;div class=\\"button-box\\"&gt; &lt;div @click=\\"setmultilayerClassItem({})\\" class=\\"button-box-item\\" :class=\\"clicked === null ? 'button-box-item-clicked' : ''\\" &gt; 全部 &lt;/div&gt; &lt;div v-for=\\"item in multilayerClass.classItemList\\" :key=\\"item.categoryId\\" class=\\"button-box-item\\" :class=\\"clicked === item.categoryId ? 'button-box-item-clicked' : ''\\" @click=\\"setmultilayerClassItem(item)\\" &gt; {{ item.serviceName }} &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div v-if=\\" multilayerClassItem.classItemList &amp;&amp; multilayerClassItem.classItemList.length &gt; 0 \\" &gt; &lt;multilayer-class :multilayerClass=\\"multilayerClassItem\\" @selectService=\\"multilayerClassItem\\" &gt;&lt;/multilayer-class&gt; &lt;/div&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; import { bus } from \\"../../utils/bus\\"; export default { name: \\"multilayerClass\\", props: { multilayerClass: { type: Object, default: () =&gt; {} } }, data() { return { multilayerClassItem: {}, clicked: null }; }, methods: { // 设置 下一级分类 setmultilayerClassItem(item) { item.categoryId ? (this.clicked = item.categoryId) : (this.clicked = null); item.children ? (this.multilayerClassItem = item.children) : (this.multilayerClassItem = {}); bus.$emit(\\"on-clicked\\", item); } } }; &lt;/script&gt; &lt;style scoped lang=\\"less\\"&gt; .multilayer-class-box { display: flex; width: 100%; align-items: center; margin: 20px 0; } .button-box { display: flex; .button-box-item { display: flex; align-items: center; border-radius: 30px; padding: 10px 15px; margin-left: 20px; background-color: #fcfcfc; color: #333333; cursor: pointer; } .button-box-item-clicked { color: #ffffff; background-color: #1b7ef6; } } &lt;/style&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/DaMaiCoding-Note/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-21T16:39:25.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Vue2.x 递归组件的使用"}],["meta",{"property":"article:modified_time","content":"2024-04-21T16:39:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue2.x 递归组件的使用\\",\\"image\\":[\\"https://mister-hope.github.io/DaMaiCoding-Note/\\"],\\"dateModified\\":\\"2024-04-21T16:39:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"效果","slug":"效果","link":"#效果","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"调用","slug":"调用","link":"#调用","children":[]}],"git":{"createdTime":1713717565000,"updatedTime":1713717565000,"contributors":[{"name":"Jack_Lin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":1.58,"words":474},"filePathRelative":"经验实践/vue2.x 递归组件的使用.md","localizedDate":"2024年4月21日","excerpt":"<h1> Vue2.x 递归组件的使用</h1>\\n<h2> 效果</h2>\\n<p>![image-20230619153720228](./assets/Vue2.x 递归组件的使用/image-20230619153720228-1687160244772-1.png)</p>\\n<h2> 实现</h2>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token comment\\">&lt;!-- 递归组件 --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span>\\n      <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>multilayer-class-box<span class=\\"token punctuation\\">\\"</span></span>\\n      <span class=\\"token attr-name\\">v-if</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>\\n        multilayerClass.classItemList &amp;&amp;\\n          multilayerClass.classItemList.length &gt; 0\\n      <span class=\\"token punctuation\\">\\"</span></span>\\n    <span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>{{ multilayerClass.classTitleName }}：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>button-box<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span>\\n          <span class=\\"token attr-name\\">@click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>setmultilayerClassItem({})<span class=\\"token punctuation\\">\\"</span></span>\\n          <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>button-box-item<span class=\\"token punctuation\\">\\"</span></span>\\n          <span class=\\"token attr-name\\">:class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>clicked === null ? 'button-box-item-clicked' : ''<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token punctuation\\">&gt;</span></span>\\n          全部\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span>\\n          <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item in multilayerClass.classItemList<span class=\\"token punctuation\\">\\"</span></span>\\n          <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item.categoryId<span class=\\"token punctuation\\">\\"</span></span>\\n          <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>button-box-item<span class=\\"token punctuation\\">\\"</span></span>\\n          <span class=\\"token attr-name\\">:class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>clicked === item.categoryId ? 'button-box-item-clicked' : ''<span class=\\"token punctuation\\">\\"</span></span>\\n          <span class=\\"token attr-name\\">@click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>setmultilayerClassItem(item)<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token punctuation\\">&gt;</span></span>\\n          {{ item.serviceName }}\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span>\\n      <span class=\\"token attr-name\\">v-if</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>\\n        multilayerClassItem.classItemList &amp;&amp;\\n          multilayerClassItem.classItemList.length &gt; 0\\n      <span class=\\"token punctuation\\">\\"</span></span>\\n    <span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>multilayer-class</span>\\n        <span class=\\"token attr-name\\">:multilayerClass</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>multilayerClassItem<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">@selectService</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>multilayerClassItem<span class=\\"token punctuation\\">\\"</span></span>\\n      <span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>multilayer-class</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> bus <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"../../utils/bus\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"multilayerClass\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">props</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">multilayerClass</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> Object<span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token function-variable function\\">default</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function\\">data</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">multilayerClassItem</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">clicked</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">null</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">methods</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 设置 下一级分类</span>\\n    <span class=\\"token function\\">setmultilayerClassItem</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">item</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      item<span class=\\"token punctuation\\">.</span>categoryId\\n        <span class=\\"token operator\\">?</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>clicked <span class=\\"token operator\\">=</span> item<span class=\\"token punctuation\\">.</span>categoryId<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>clicked <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      item<span class=\\"token punctuation\\">.</span>children\\n        <span class=\\"token operator\\">?</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>multilayerClassItem <span class=\\"token operator\\">=</span> item<span class=\\"token punctuation\\">.</span>children<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>multilayerClassItem <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      bus<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">$emit</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"on-clicked\\"</span><span class=\\"token punctuation\\">,</span> item<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span> <span class=\\"token attr-name\\">scoped</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>less<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n<span class=\\"token selector\\">.multilayer-class-box</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">display</span><span class=\\"token punctuation\\">:</span> flex<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 100%<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">align-items</span><span class=\\"token punctuation\\">:</span> center<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">margin</span><span class=\\"token punctuation\\">:</span> 20px 0<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token selector\\">.button-box</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">display</span><span class=\\"token punctuation\\">:</span> flex<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token selector\\">.button-box-item</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">display</span><span class=\\"token punctuation\\">:</span> flex<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">align-items</span><span class=\\"token punctuation\\">:</span> center<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">border-radius</span><span class=\\"token punctuation\\">:</span> 30px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">padding</span><span class=\\"token punctuation\\">:</span> 10px 15px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">margin-left</span><span class=\\"token punctuation\\">:</span> 20px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> #fcfcfc<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> #333333<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">cursor</span><span class=\\"token punctuation\\">:</span> pointer<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token selector\\">.button-box-item-clicked</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> #ffffff<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> #1b7ef6<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{s as data};
