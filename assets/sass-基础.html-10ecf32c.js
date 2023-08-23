import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-632e70fb.js";const p="/Lin-Note-v3/assets/image-20230304135833899-b2f20b64.png",t="/Lin-Note-v3/assets/image-20230304142942981-1205b4ff.png",c="/Lin-Note-v3/assets/image-20230304143107773-30b474a2.png",i={},o=e('<h1 id="sass-基础" tabindex="-1"><a class="header-anchor" href="#sass-基础" aria-hidden="true">#</a> sass-基础</h1><h2 id="使用流程" tabindex="-1"><a class="header-anchor" href="#使用流程" aria-hidden="true">#</a> 使用流程</h2><figure><img src="'+p+`" alt="image-20230304135833899" tabindex="0" loading="lazy"><figcaption>image-20230304135833899</figcaption></figure><h2 id="演变历史" tabindex="-1"><a class="header-anchor" href="#演变历史" aria-hidden="true">#</a> 演变历史</h2><p><strong>.Sass</strong></p><p>以前的 <code>sass</code> 的文件名后缀是 <code>.sass</code>, 下面为其语法</p><div class="language-sass line-numbers-mode" data-ext="sass"><pre class="language-sass"><code><span class="token selector">h1 </span>
<span class="token property-line">    <span class="token property">color</span><span class="token punctuation">:</span> #000</span>
<span class="token property-line">    <span class="token property">background</span><span class="token punctuation">:</span> #fff</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>.Scss</strong></p><p>在 3.x 以后的版本, 引入了 <code>.scss</code> 的语法, 类似于我们的 <code>css</code> 语法</p><p>有了 &quot;花括号“、“分号”, 可以直接兼容 老的项目的 <code>css</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">h1 </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意: 一个项目中可以混合使用两种语法, 但不能在一个文件中使用两种语法</p></blockquote><h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法" aria-hidden="true">#</a> 安装方法</h2><ol><li>使用 <code>npm</code> 进行安装, 其他安装方法可自行百度</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>查看版本</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sass <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>编译</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 直接将输出结果输出在终端
sass test.scss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="image-20230304142942981" tabindex="0" loading="lazy"><figcaption>image-20230304142942981</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 将结果以文件输出, 后面再加 .css 的文件名即可
sass test.scss test.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image-20230304143107773" tabindex="0" loading="lazy"><figcaption>image-20230304143107773</figcaption></figure><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><h4 id="变量的定义与使用" tabindex="-1"><a class="header-anchor" href="#变量的定义与使用" aria-hidden="true">#</a> 变量的定义与使用</h4><p><code>sass</code> 变量定义, 使用 <code>$</code> 符号</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* 定义变量与值 */</span>
<span class="token property"><span class="token variable">$bgcolor</span></span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$textcolor</span></span><span class="token punctuation">:</span> darkblue<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$fontsize</span></span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>

<span class="token comment">/* 使用变量 */</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$bgcolor</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$textcolor</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$fontsize</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>扩展: css 变量的定义与使用</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 变量的定义 */</span>
<span class="token comment">/* -- 两个减号 */</span>
<span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--main-bg-color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 变量的使用 */</span>
<span class="token selector">.element</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--main-bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件的引用" tabindex="-1"><a class="header-anchor" href="#文件的引用" aria-hidden="true">#</a> 文件的引用</h4><p>直接使用 <code>@import</code>, 即可导入, 这个语法原生 <code>css</code> 也是有的</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 单文件引入</span>
<span class="token keyword">@import</span> <span class="token string">&quot;variables&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 多文件引入</span>
<span class="token keyword">@import</span> <span class="token string">&quot;variables&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;compass/reset&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要使用 <code>css</code> 原生 <code>@import</code> , 可以按以下既定规则</p><ol><li>当 <code>@import</code> 后边跟着文件名是以 <code>.css</code> 结尾的时候</li><li>当 <code>@import</code> 后边跟着的是 <code>http://</code> 开头的字符串的时候</li><li>当 <code>@import</code> 后边跟着的是 <code>url()</code> 开头的字符串的时候</li><li>当 <code>@import</code> 后边跟着的是 <code>media queries</code> 开头的字符串的时候</li></ol><p>如果要使用 <code>sass</code> 的 <code>@import</code> , 可以按以下既定规则</p><ol><li>没有文件后缀名的时候, <code>sass</code> 会添加 <code>.scss</code> 或者 <code>.sass</code> 的后缀</li><li>同一个目录下, 所有文件不能重名</li></ol><blockquote><p>扩展: 如果你不想 <code>sass</code> 文件被编译, 可以在前面加 <code>_</code> 下划线, 比如 <code>_filename</code> 这样文件就会被忽略</p></blockquote><h4 id="注释的不同" tabindex="-1"><a class="header-anchor" href="#注释的不同" aria-hidden="true">#</a> 注释的不同</h4><p><code>sass</code> 有两种注释方式</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// test.scs 文件</span>
<span class="token comment">// 主题样式</span>
<span class="token selector">.headline </span><span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token variable">$headline-ff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 页面样式 */</span>
<span class="token selector">.main-sec </span><span class="token punctuation">{</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token variable">$main-sec-ff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那这两种样式有何不同呢? 我们看下编译后的文件</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* test.css 文件, 由 test.scss 编译而来 */</span>
<span class="token selector">.headline</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Braggadocio<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 页面样式 */</span>
<span class="token selector">.main-sec</span> <span class="token punctuation">{</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到, <code>.headline</code> 没有注释信息, 而 <code>.main-sec</code> 有, 说明 <code>//</code> 双斜线注释, 不会被编译</p><blockquote><p>扩展: <code>css</code> 注释, 只能使用 <code>/* */</code> 进行注释</p></blockquote><h4 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h4><p>Sass 具有作用域类似于 <code>JavaScript</code> 的中的函数作用域</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$myColor</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

<span class="token selector">h1 </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$myColor</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>   <span class="token comment">// 只在 h1 里头有用，局部作用域</span>
  	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$myColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p </span><span class="token punctuation">{</span>
  	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$myColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  	<span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
  	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="嵌套规则与属性" tabindex="-1"><a class="header-anchor" href="#嵌套规则与属性" aria-hidden="true">#</a> 嵌套规则与属性</h4><p>嵌套规则的使用</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 文件</span>
<span class="token selector">nav </span><span class="token punctuation">{</span>
  	<span class="token selector">ul </span><span class="token punctuation">{</span>
    	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    	<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  	<span class="token selector">li </span><span class="token punctuation">{</span>
    	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  	<span class="token selector">a </span><span class="token punctuation">{</span>
    	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
   		<span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
    	<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 编译后 .css 文件 */</span>
<span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  	<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav li</span> <span class="token punctuation">{</span>
  	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav a</span> <span class="token punctuation">{</span>
  	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  	<span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
  	<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌套属性的使用</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// scss 文件</span>
<span class="token selector">font: </span><span class="token punctuation">{</span>
  	<span class="token property">family</span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  	<span class="token property">size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  	<span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">text: </span><span class="token punctuation">{</span>
  	<span class="token property">align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  	<span class="token property">transform</span><span class="token punctuation">:</span> lowercase<span class="token punctuation">;</span>
  	<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 编译后 .css 文件 */</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>

<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token property">text-transform</span><span class="token punctuation">:</span> lowercase<span class="token punctuation">;</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="混入的使用" tabindex="-1"><a class="header-anchor" href="#混入的使用" aria-hidden="true">#</a> 混入的使用</h4><p><strong>混入的基本使用</strong></p><p>混入的定义 <code>@mixin</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">mixin-name </span><span class="token punctuation">{</span>
  	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  	<span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  	<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混入的使用 <code>@include</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">selector </span><span class="token punctuation">{</span>
  	<span class="token keyword">@include</span> mixin-name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>混入可以传递变量</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* 混入接收两个参数 */</span>
<span class="token keyword">@mixin</span> <span class="token function">bordered</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">$width</span> solid <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.myArticle </span><span class="token punctuation">{</span>
  	<span class="token keyword">@include</span> <span class="token function">bordered</span><span class="token punctuation">(</span>blue<span class="token punctuation">,</span> 1px<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 调用混入，并传递两个参数</span>
<span class="token punctuation">}</span>

<span class="token selector">.myNotes </span><span class="token punctuation">{</span>
  	<span class="token keyword">@include</span> <span class="token function">bordered</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> 2px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用混入，并传递两个参数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 <code>.css</code> 文件</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.myArticle</span> <span class="token punctuation">{</span>
  	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.myNotes</span> <span class="token punctuation">{</span>
  	<span class="token property">border</span><span class="token punctuation">:</span> 2px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以设置默认值</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 1in<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token selector">border: </span><span class="token punctuation">{</span>
    	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    	<span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
    	<span class="token property">style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>
  	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">p </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">h1 </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span>blue<span class="token punctuation">,</span> 2in<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  	<span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  	<span class="token property">border-width</span><span class="token punctuation">:</span> 1in<span class="token punctuation">;</span>
  	<span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
  	<span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  	<span class="token property">border-width</span><span class="token punctuation">:</span> 2in<span class="token punctuation">;</span>
  	<span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不定参数的情况下, 我们可以使用 <code>...</code> 来设置参数</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span><span class="token variable">$shadows</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
     <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
     <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.shadows </span><span class="token punctuation">{</span>
  	<span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span>0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.shadows</span> <span class="token punctuation">{</span>
  	<span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
  	<span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
  	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>扩展: 浏览器前缀使用混入, 会很方便</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token variable">$property</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token variable">$property</span><span class="token punctuation">;</span>
  	<span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token variable">$property</span><span class="token punctuation">;</span>
  	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token variable">$property</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.myBox </span><span class="token punctuation">{</span>
  	<span class="token keyword">@include</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token function">rotate</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.myBox</span> <span class="token punctuation">{</span>
  	<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h4><p><strong>基本使用</strong></p><p>场景: 三个样式只有少量区别, 其中一个样式, 另外两个都有, 那么就可以使用继承</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.button-basic  </span><span class="token punctuation">{</span>
  	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  	<span class="token property">padding</span><span class="token punctuation">:</span> 15px 30px<span class="token punctuation">;</span>
  	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  	<span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  	<span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-report  </span><span class="token punctuation">{</span>
  	<span class="token keyword">@extend</span> .button-basic<span class="token punctuation">;</span>
  	<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-submit  </span><span class="token punctuation">{</span>
  	<span class="token keyword">@extend</span> .button-basic<span class="token punctuation">;</span>
  	<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.button-basic, .button-report, .button-submit</span> <span class="token punctuation">{</span>
  	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  	<span class="token property">padding</span><span class="token punctuation">:</span> 15px 30px<span class="token punctuation">;</span>
  	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  	<span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  	<span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-report</span>  <span class="token punctuation">{</span>
  	<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-submit</span>  <span class="token punctuation">{</span>
  	<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>继承多个选择器</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.one </span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.two </span><span class="token punctuation">{</span>
	<span class="token comment">/*继承的样式*/</span>
	<span class="token keyword">@extend</span> .one<span class="token punctuation">,</span> .three<span class="token punctuation">;</span>
	<span class="token comment">/*独立的样式*/</span>
	<span class="token property">background</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span>5px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.three </span><span class="token punctuation">{</span>
	<span class="token property">padding</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.one, .two</span> <span class="token punctuation">{</span>
  	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token selector">.two</span> <span class="token punctuation">{</span>
  	<span class="token comment">/*独立的样式*/</span>
  	<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  	<span class="token property">border</span><span class="token punctuation">:</span> 5px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token selector">.three, .two</span> <span class="token punctuation">{</span>
  	<span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 <code>%</code>, 用来构建只用来继承的选择器</strong></p><p>不使用 <code>%</code> 的情况</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.error </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.serious-serror </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.error, .serious-serror</span> <span class="token punctuation">{</span>
 	<span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.serious-serror</span> <span class="token punctuation">{</span>
  	<span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>%</code> 的情况</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector"><span class="token placeholder">%error</span> </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.serious-serror </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%error</span><span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.serious-serror</span> <span class="token punctuation">{</span>
  	<span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.serious-serror</span> <span class="token punctuation">{</span>
  	<span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到使用 <code>%</code> 的选择器 <code>.error</code> 就不显示了</p><blockquote><p>扩展: extend 不可以继承嵌套选择器</p></blockquote><h4 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h4><p>在函数内部使用 <code>&amp;</code> 表示当前 (<code>&amp;</code> add 符合)</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.webdome-sec </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.webdome-sec:hover</span> <span class="token punctuation">{</span>
  	<span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h4><p><code>@function</code> 定义函数, 知道就好, 基本不用</p>`,105),l=[o];function u(d,r){return s(),a("div",null,l)}const m=n(i,[["render",u],["__file","sass-基础.html.vue"]]);export{m as default};
