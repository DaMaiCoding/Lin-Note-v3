import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c,a as n,b as i,d as o,e as p}from"./app-deeca2ec.js";const l={},u=p(`<h1 id="换肤" tabindex="-1"><a class="header-anchor" href="#换肤" aria-hidden="true">#</a> 换肤</h1><h2 id="css-变量的使用" tabindex="-1"><a class="header-anchor" href="#css-变量的使用" aria-hidden="true">#</a> CSS 变量的使用</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* css 变量的定义 */</span>
<span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--color</span><span class="token punctuation">:</span> #808080
<span class="token punctuation">}</span>
<span class="token comment">/* 使用 css 变量 */</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token selector">.someClass:hover</span> <span class="token punctuation">{</span>
    <span class="token property">backgroud</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="改变主题色" tabindex="-1"><a class="header-anchor" href="#改变主题色" aria-hidden="true">#</a> 改变主题色</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* css 定义主题色 */</span>
<span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--main</span><span class="token punctuation">:</span> #808080
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// js 动态修改 主题颜色</span>
document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--main&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#808080&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="换肤-1" tabindex="-1"><a class="header-anchor" href="#换肤-1" aria-hidden="true">#</a> 换肤</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--background</span><span class="token punctuation">:</span> while<span class="token punctuation">;</span>
    <span class="token property">--font-color</span><span class="token punctuation">:</span> #303133<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">[data-theme=&quot;dark&quot;]</span> <span class="token punctuation">{</span>
    <span class="token property">--background</span><span class="token punctuation">:</span> #383838<span class="token punctuation">;</span>
    <span class="token property">--font-color</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-theme&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),r={href:"https://wiidede.github.io/vue3-element-plus-change-theme-solution/#%E6%8D%A2%E8%82%A4",target:"_blank",rel:"noopener noreferrer"};function d(v,k){const s=e("ExternalLinkIcon");return t(),c("div",null,[u,n("p",null,[n("a",r,[i("vue3 + ElementPlus 换肤方案（Css变量） | Wiidede's blog"),o(s)])])])}const h=a(l,[["render",d],["__file","换肤.html.vue"]]);export{h as default};
