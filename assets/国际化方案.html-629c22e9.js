import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as l,c as o,a as n,b as s,d as c,e as a}from"./app-da553741.js";const i="/DaMaiCoding-Note/assets/image-20230709191605245-ee21287d.png",u="/DaMaiCoding-Note/assets/image-20230709202327877-6b86ba8b.png",r={},k=a(`<h1 id="国际化方案" tabindex="-1"><a class="header-anchor" href="#国际化方案" aria-hidden="true">#</a> 国际化方案</h1><h2 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1. 定义 msg 值的数据源</span>
<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  en<span class="token operator">:</span> <span class="token punctuation">{</span>
    msg<span class="token operator">:</span> <span class="token string">&#39;hello word&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  zn<span class="token operator">:</span> <span class="token punctuation">{</span>
    msg<span class="token operator">:</span> <span class="token string">&#39;你好世界&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. 定义切换变量</span>
<span class="token keyword">let</span> local <span class="token operator">=</span> <span class="token string">&#39;en&#39;</span>

<span class="token comment">// 3. 定义赋值函数</span>
<span class="token keyword">function</span> <span class="token function">t</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> messages<span class="token punctuation">[</span>local<span class="token punctuation">]</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 4. 为 msg 赋值</span>
<span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token comment">// hello word</span>

<span class="token comment">// 修改 local，重新执行 t 方法，获取不同语言下的值</span>
local <span class="token operator">=</span> <span class="token string">&#39;zn&#39;</span>
msg <span class="token operator">=</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token comment">// 你好世界</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>通过一个变量来<strong>控制</strong>语言环境</li><li>所有语言环境下的数据源要<strong>预先</strong>定义好</li><li>通过一个方法来获取<strong>当前语言</strong>下<strong>指定属性</strong>的值</li><li>该值即为国际化下展示值</li></ol><h2 id="基于-vue-i18n-的国际化实现方案分析" tabindex="-1"><a class="header-anchor" href="#基于-vue-i18n-的国际化实现方案分析" aria-hidden="true">#</a> 基于 vue-i18n 的国际化实现方案分析</h2><h3 id="简述" tabindex="-1"><a class="header-anchor" href="#简述" aria-hidden="true">#</a> 简述</h3><blockquote><p><strong>[注]</strong></p><p>vue3 下 vue-i18n 需要 v 9.0.x 的 i18n</p></blockquote>`,8),d={href:"https://element-plus.org/zh-CN/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},v=a(`<ol><li>创建 messages 数据源</li><li>创建 locale 语言变量</li><li>初始化 i18n 实例</li><li>注册 i18 实例</li></ol><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><ol><li>安装 vue-i18n</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-i18n@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>src 目录下 创建 i18n/index.ts 文件</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>
<span class="token comment">// 这里可以把，msg 换成你要导入的语言包</span>
<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  en<span class="token operator">:</span> <span class="token punctuation">{</span>
    msg<span class="token operator">:</span> <span class="token punctuation">{</span>
      test<span class="token operator">:</span> <span class="token string">&#39;hello word&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  zh<span class="token operator">:</span> <span class="token punctuation">{</span>
    msg<span class="token operator">:</span> <span class="token punctuation">{</span>
      test<span class="token operator">:</span> <span class="token string">&#39;你好世界&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token string">&#39;en&#39;</span>

<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 使用 composition API</span>
  legacy<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 全局使用 t 函数</span>
  globalInjection<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  locale<span class="token punctuation">,</span>
  messages
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>main.js 中 注册</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&quot;./i18n&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./index.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>src/i18nTest/index 文件中使用 i18n，修改 i18n/index.ts 中为 locale = &#39;zh&#39;，可切换展示内容</li></ol><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
@description: i18n 国际化演示
--&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSetLanguage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>切换<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    setup 语法糖写法： {{ t(&#39;msg.test&#39;) }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    template 旧版写： {{ $t(&#39;msg.test&#39;) }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/* ------------------------ 导入 与 引用 ----------------------------------- */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span> <span class="token comment">// 【注意】 不管新旧版的写法，都要引入 useI18n 才有办法使用</span>
<span class="token comment">/* ------------------------ 变量 与 数据 ----------------------------------- */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> t<span class="token punctuation">,</span> locale <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">/* ------------------------ 函数 与 方法 ----------------------------------- */</span>
<span class="token comment">// 切换语言的方法</span>
<span class="token keyword">const</span>  <span class="token function-variable function">handleSetLanguage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 切换 i18n 的 locale</span>
  locale<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;en&#39;</span> <span class="token operator">?</span> locale<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;zh&#39;</span> <span class="token operator">:</span> locale<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;en&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ------------------------- 生命周期 -------------------------------------- */</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>scss<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>APP.vue 文件导入 index.vue</li></ol><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>I18nTest</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> I18nTest <span class="token keyword">from</span> <span class="token string">&#39;./i18nTest/index.vue&#39;</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>实现效果</li></ol><figure><img src="`+i+`" alt="image-20230709191605245" tabindex="0" loading="lazy"><figcaption>image-20230709191605245</figcaption></figure><blockquote><p><strong>[注]</strong></p><p>该方案主要用于 自定义 语言包管理</p><p>后续可添加 持久化 等等</p></blockquote><h2 id="element-plus-国际化实现" tabindex="-1"><a class="header-anchor" href="#element-plus-国际化实现" aria-hidden="true">#</a> element-plus 国际化实现</h2><blockquote><p><strong>[注]</strong></p><p><code>element-plus</code> 的国际化，只针对 <code>element-plus</code> 组件做 国际化，并不会对一些后端返回数据，或者自定义内容做国际化</p><p>也就是说，<code>element-plus</code> 引入的语言包只支持，<code>element-plus</code> 组件</p></blockquote><h3 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h3><ol><li>安装 <code>element-plus</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> element-plus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>main.ts 中导入<code>element-plus</code></li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&quot;./i18n&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现-1" tabindex="-1"><a class="header-anchor" href="#实现-1" aria-hidden="true">#</a> 实现</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
@description: i18n 国际化演示
--&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSetLanguage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>切换<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      setup 语法糖写法： {{ t(&#39;msg.test&#39;) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      template 旧版写： {{ $t(&#39;msg.test&#39;) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>elementLocale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span> <span class="token attr-name">mb-1</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-pagination</span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/* ------------------------ 导入 与 引用 ----------------------------------- */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>

<span class="token keyword">import</span> zh <span class="token keyword">from</span> <span class="token string">&#39;element-plus/dist/locale/zh-cn.mjs&#39;</span>
<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">&#39;element-plus/dist/locale/en.mjs&#39;</span>

<span class="token comment">/* ------------------------ 变量 与 数据 ----------------------------------- */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> t<span class="token punctuation">,</span> locale <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> elementLocale <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>locale<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;zh&#39;</span> <span class="token operator">?</span> zh <span class="token operator">:</span> en<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">/* ------------------------ 函数 与 方法 ----------------------------------- */</span>
<span class="token comment">// 切换语言的方法</span>
<span class="token keyword">const</span>  <span class="token function-variable function">handleSetLanguage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 切换 i18n 的 locale</span>
  locale<span class="token punctuation">.</span>value <span class="token operator">=</span> locale<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;zh&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;en&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;zh&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* ------------------------- 生命周期 -------------------------------------- */</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.middle</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h3><figure><img src="`+u+'" alt="image-20230709202327877" tabindex="0" loading="lazy"><figcaption>image-20230709202327877</figcaption></figure>',26);function m(g,b){const t=e("ExternalLinkIcon");return l(),o("div",null,[k,n("p",null,[n("a",d,[s("vue-i18n"),c(t)]),s(" 的使用分为 四个部分")]),v])}const y=p(r,[["render",m],["__file","国际化方案.html.vue"]]);export{y as default};
