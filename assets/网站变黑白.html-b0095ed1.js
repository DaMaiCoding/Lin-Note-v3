import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-fd3cbc51.js";const e={},p=t(`<h1 id="一行-css-代码实现整个网站网页变黑白灰的效果" tabindex="-1"><a class="header-anchor" href="#一行-css-代码实现整个网站网页变黑白灰的效果" aria-hidden="true">#</a> 一行 CSS 代码实现整个网站网页变黑白灰的效果</h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><blockquote><p>在全国哀悼日（吊念地震、疫情等），如果你也是站长，想做点什么，那么可以把网站编程黑白以示哀悼</p><p>下面分享一行代码实现整个网站网页编程黑白灰色的效果，主要是通过修改 CSS 的方式实现的（如果想要全站去彩色、最好放到基础公共的css文件中全局引用）</p></blockquote><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"> 
    <span class="token selector">html</span> <span class="token punctuation">{</span> 
        <span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token property">-moz-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token property">-ms-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token property">-o-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span> 
		<span class="token property">filter</span><span class="token punctuation">:</span><span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">BasicImage</span><span class="token punctuation">(</span>grayscale=1<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token property">_filter</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解释" tabindex="-1"><a class="header-anchor" href="#解释" aria-hidden="true">#</a> 解释</h2><p>把代码加在网站的 CSS 文件或者 <code>&lt;head&gt;&lt;/head&gt;</code> 之间任意部分即可。建议加到全局css文件中</p><p>代码释义：filter 是滤镜的意思，<code>filter:gray</code> 的意思就是说给页面加上一个灰度的滤镜，所以 html 里面的所有内容都会变成黑白的了。不过这个滤镜对于 Chrome 和 Safari 浏览器是无效的，所以下面会有一行 <code>-webkit-filter: grayscale(100%);</code> 这个样式是专属于使用 webkit 内核的浏览器的，意思和 <code>filter: gray;</code> 差不多，只是写法不同罢了</p>`,8),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","网站变黑白.html.vue"]]);export{d as default};
