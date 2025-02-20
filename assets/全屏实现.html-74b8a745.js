import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-4bc45b34.js";const e={},p=t(`<h1 id="全屏实现" tabindex="-1"><a class="header-anchor" href="#全屏实现" aria-hidden="true">#</a> 全屏实现</h1><h2 id="_1-安装依赖包" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖包" aria-hidden="true">#</a> 1. 安装依赖包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i screenfull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-调用-依赖包方法" tabindex="-1"><a class="header-anchor" href="#_2-调用-依赖包方法" aria-hidden="true">#</a> 2. 调用 依赖包方法</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
@description: 全屏功能演示
--&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onToggle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>全屏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/* ------------------------ 导入 与 引用 ----------------------------------- */</span>
<span class="token keyword">import</span> screenfull <span class="token keyword">from</span> <span class="token string">&#39;screenfull&#39;</span>
<span class="token comment">/* ------------------------ 变量 与 数据 ----------------------------------- */</span>

<span class="token comment">/* ------------------------ 函数 与 方法 ----------------------------------- */</span>

<span class="token comment">/* 全屏 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onToggle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  screenfull<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ------------------------- 生命周期 -------------------------------------- */</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function l(i,o){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","全屏实现.html.vue"]]);export{r as default};
