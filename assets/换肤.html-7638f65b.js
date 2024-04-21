import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-fd3cbc51.js";const t={},c=e(`<h1 id="换肤" tabindex="-1"><a class="header-anchor" href="#换肤" aria-hidden="true">#</a> 换肤</h1><h2 id="css-变量的使用" tabindex="-1"><a class="header-anchor" href="#css-变量的使用" aria-hidden="true">#</a> CSS 变量的使用</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* css 变量的定义 */</span>
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
    <span class="token property">--background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">--font-color</span><span class="token punctuation">:</span> #303133<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">[data-theme=&quot;dark&quot;]</span> <span class="token punctuation">{</span>
    <span class="token property">--background</span><span class="token punctuation">:</span> #383838<span class="token punctuation">;</span>
    <span class="token property">--font-color</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-theme&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),i=[c];function p(o,l){return s(),a("div",null,i)}const r=n(t,[["render",p],["__file","换肤.html.vue"]]);export{r as default};
