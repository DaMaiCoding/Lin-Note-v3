import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,a as n,b as a,d as i,e as s}from"./app-fd3cbc51.js";const l={},d=s(`<h1 id="前端编写规范" tabindex="-1"><a class="header-anchor" href="#前端编写规范" aria-hidden="true">#</a> 前端编写规范</h1><h2 id="文件名-规范" tabindex="-1"><a class="header-anchor" href="#文件名-规范" aria-hidden="true">#</a> 文件名 规范</h2><p>js 文件名 采用驼峰写法 首字母小写</p><p><code>axios.js</code></p><p>Vue 文件名 采用驼峰写法 首字母大写</p><p><code>Login.vue</code></p><h2 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h2><p>不管是在 TypeScript, 还是 JavaScript 应尽量避免使用 <code>var</code>, 而应该去使用 <code>const</code>、<code>let</code></p><p>因为使用 <code>var</code> 容易造成全局变量污染</p><p>普通变量，使用驼峰命名，如：<code>let loadingModules = {}</code></p><p>私有变量, 以 <code>_</code> 开头结尾, 如: <code>let _name = &#39;&#39;</code></p><p>常量定义，全部字母大写，单词间下划线分隔的命名方式，如：<code>let HTML_ENTITY = {}</code></p><h2 id="函数的声明" tabindex="-1"><a class="header-anchor" href="#函数的声明" aria-hidden="true">#</a> 函数的声明</h2><p>要以 驼峰写法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">stringFormat</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="类的声明" tabindex="-1"><a class="header-anchor" href="#类的声明" aria-hidden="true">#</a> 类的声明</h2><p>以驼峰写法，且首字母要大写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">TextNode</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> engine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举的声明" tabindex="-1"><a class="header-anchor" href="#枚举的声明" aria-hidden="true">#</a> 枚举的声明</h2><ol><li>枚举变量 使用驼峰写法</li><li>枚举属性，使用全部字母大写，单词间用下划线隔开</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> TargetState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">LOADING_TIME</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token constant">READED</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命名语法" tabindex="-1"><a class="header-anchor" href="#命名语法" aria-hidden="true">#</a> 命名语法</h2><p><strong>类名</strong>，使用名词</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Engine</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>函数名</strong>，使用动宾短语</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>boolean</strong> 类型的变量使用 is 或 has 开头</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> isReady <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">let</span> hasMoreCommands <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Promise 对象</strong>用动宾短语的进行时表达</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> loadingData <span class="token operator">=</span> ajax<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>
loadingData<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-语义化" tabindex="-1"><a class="header-anchor" href="#html-语义化" aria-hidden="true">#</a> HTML 语义化</h2><ul><li>需要 SEO 页面再用 H5 的语义化标签</li><li>工作中, 通常 div + css 即可</li></ul>`,32),u={href:"https://juejin.cn/post/6844903544995184653",target:"_blank",rel:"noopener noreferrer"},r=s(`<h2 id="css-选择器名称" tabindex="-1"><a class="header-anchor" href="#css-选择器名称" aria-hidden="true">#</a> CSS 选择器名称</h2><p>css 选择器名称 采用加 <code>-</code> 写法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.icon-font</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高内聚、低耦合" tabindex="-1"><a class="header-anchor" href="#高内聚、低耦合" aria-hidden="true">#</a> 高内聚、低耦合</h2><p><strong>高内聚</strong></p><p>公共相关的东西应该放在同一个模块(集合)中</p><p><strong>低耦合</strong></p><p>不同模块(集合)应该独立的, 这就低耦合</p><h2 id="代码规范插件" tabindex="-1"><a class="header-anchor" href="#代码规范插件" aria-hidden="true">#</a> 代码规范插件</h2><p>VSCode 代码格式化工具 <code>Prettier</code></p><h2 id="什么时候用-或" tabindex="-1"><a class="header-anchor" href="#什么时候用-或" aria-hidden="true">#</a> 什么时候用 == 或 ===</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 除了 == null 之外, 其他都一律用 ===, 例如:</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token comment">// 相当于:</span>
<span class="token comment">// if ( obj.a === null || onj.a === undefined ) { }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于代码规范的问题" tabindex="-1"><a class="header-anchor" href="#关于代码规范的问题" aria-hidden="true">#</a> 关于代码规范的问题</h2><p>有的写 <code>xxx-xxx</code>，有的用驼峰写法 <code>xxxFfff</code></p><p>像我们使用的 <code>element-ui</code> 就是 <code>css</code> 命名，就是使用了 <code>BEM</code> 架构的去命名的</p><p>像什么变量命名啊、注释、写法等这个规定都是主观的，有时写着写着就忘了，容易受情绪的支配，对吧</p><p>最简单的，我们前端的 css 类名的命名</p><p>那么要如何去实现这个规范呢？</p><p>通过 工具、流程 这种客观的进行规范</p><h2 id="布尔类型检测" tabindex="-1"><a class="header-anchor" href="#布尔类型检测" aria-hidden="true">#</a> 布尔类型检测</h2><p>类型检测优先使用 typeof</p><p>对象类型检测使用 instanceof</p><p>null 或 undefined 的检测使用 == null</p><p>下面的布尔表达式都返回 false</p><ul><li>null</li><li>undefined</li><li>‘’ 空字符串</li><li>0 数字0</li></ul><p>但小心下面的, 可都返回 true</p><ul><li>‘0’ 字符串0</li><li>[] 空数组</li><li>{} 空对象</li></ul><h2 id="二元和三元操作符" tabindex="-1"><a class="header-anchor" href="#二元和三元操作符" aria-hidden="true">#</a> 二元和三元操作符</h2><p>操作符始终写在前一行, 以免<strong>分号的隐式插入</strong>产生预想不到的问题</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> a <span class="token operator">?</span> b <span class="token operator">:</span> c<span class="token punctuation">;</span>

<span class="token keyword">var</span> y <span class="token operator">=</span> a <span class="token operator">?</span>
    <span class="token literal-property property">longButSimpleOperandB</span> <span class="token operator">:</span> longButSimpleOperandC<span class="token punctuation">;</span>

<span class="token keyword">var</span> z <span class="token operator">=</span> a <span class="token operator">?</span>
        <span class="token literal-property property">moreComplicatedB</span> <span class="token operator">:</span>
        moreComplicatedC<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.</code> 操作符也是如此</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> foo<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">doSomethingElse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="条件-三元-操作符" tabindex="-1"><a class="header-anchor" href="#条件-三元-操作符" aria-hidden="true">#</a> 条件(三元)操作符 (?😃</h4><p>三元操作符用于替代 if 条件判断语句</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不推荐</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 推荐</span>
<span class="token keyword">return</span> val <span class="token operator">?</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="和" tabindex="-1"><a class="header-anchor" href="#和" aria-hidden="true">#</a> &amp;&amp; 和 ||</h4><p>二元布尔操作符是可短路的, 只有在必要时才会计算到最后一项</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不推荐</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">opt_win</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> win<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opt_win<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    win <span class="token operator">=</span> opt_win<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    win <span class="token operator">=</span> window<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>kids<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>kids<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">foo</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>kids<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 推荐</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">opt_win</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> win <span class="token operator">=</span> opt_win <span class="token operator">||</span> window<span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> kid <span class="token operator">=</span> node <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>kids <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>kids<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>kid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span>kid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>巧用三元、二元表达式，优化代码</p></blockquote>`,39);function k(v,m){const e=t("ExternalLinkIcon");return o(),c("div",null,[d,n("p",null,[a("相关文章链接: "),n("a",u,[a("html5语义化标签 - 掘金 (juejin.cn)"),i(e)])]),r])}const g=p(l,[["render",k],["__file","前端编写规范.html.vue"]]);export{g as default};
