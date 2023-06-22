import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-f7181f71.js";const t={},i=e(`<h1 id="模块化如何封装" tabindex="-1"><a class="header-anchor" href="#模块化如何封装" aria-hidden="true">#</a> 模块化如何封装</h1><p>目录结构</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>|-- App.js
|-- utils
    |-- http.js
    |-- index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个文件的代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// http.js</span>
<span class="token keyword">class</span> <span class="token class-name">http</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./http&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// App.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>基本思想就是, 将在一个文件夹下建各种功能的js文件, 由统一的 index.js 进行管理, 并导出</p><p>那么使用这个工具库的人就能按需, 导入模块使用</p>`,9),p=[i];function c(l,d){return n(),a("div",null,p)}const u=s(t,[["render",c],["__file","模块化如何封装.html.vue"]]);export{u as default};
