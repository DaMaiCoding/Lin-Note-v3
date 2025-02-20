import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,b as s,d as t,e}from"./app-da553741.js";const l="/DaMaiCoding-Note/assets/7102c90ebd7e4f1da3da7ee2401f3850tplv-k3u1fbpfcp-jj-mark1512000q75-0034acd4.webp",u="/DaMaiCoding-Note/assets/image-20241022093841621-bc1f73ee.png",d={},r=n("h1",{id:"_2025前端最新面试题-框架篇react",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2025前端最新面试题-框架篇react","aria-hidden":"true"},"#"),s(" 2025前端最新面试题-框架篇react")],-1),k=n("p",null,"[扩展]",-1),v={href:"https://www.yuque.com/fechaichai/qeamqf/xbai87#e3638cf5-2",target:"_blank",rel:"noopener noreferrer"},m=e(`<h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><p><code>Create-React-App</code> 创建, 官网推荐, 比较稳定</p><ol><li>安装</li></ol><p>如果不加 <code>--template typescript</code> 项目会默认使用 <code>javascript</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx create-react-app my-app <span class="token parameter variable">--template</span> typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>进入到目录中, 运行项目即可</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>安装 <code>prettier</code>规范代码风格</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> prettier eslit-config-prettier eslint-plugin-prettier --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Vite</code> 创建</p><ol><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> create vite@latest react-dome-vite <span class="token parameter variable">--template</span> react-ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>进行目录, 安装依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>运行</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范" aria-hidden="true">#</a> 代码规范</h2><p>高质量代码的特点</p><ul><li><strong>严格编码规范</strong>（靠工具、流程，而非自觉）</li><li>合理、规范的注释</li><li>代码合理拆分</li></ul><h3 id="两者区别" tabindex="-1"><a class="header-anchor" href="#两者区别" aria-hidden="true">#</a> 两者区别</h3><p>eslint prettier</p><ul><li>eslint 编码规范，如变量未定义（语法语义）</li><li>prettier 编码风格，如末尾是否用 <code>;</code></li><li>eslint 也有编码风格的功能，两者可能会有冲突</li></ul><h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> eslint</h3><p>安装插件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化配置文件 <code>.eslint.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .eslint.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;eslint: recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin: react/recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:@typescript-eslint/recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:prettier/recommended&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;atypescript-eslint&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx eslint <span class="token parameter variable">--init</span>    <span class="token comment">## 然后根据引导一步一步走</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解释：eslint <code>plugin</code> 与 <code>extend</code> 的区别：</p><ul><li><code>extend</code> 提供的是 eslint 现有规则的一系列预设</li><li><code>plugin</code> 则提供了除预设之外的自定义规则，当你在 eslint 的规则里找不到合适的的时候就可以借用插件来实现了</li></ul><p>安装 vscode 插件 <code>eslint</code> ，此时就可以看到代码 <code>App.txs</code> 中的错误提示（如定义一个未使用的变量）</p><p>在 <code>package.json</code> 中增加 scripts <code>&quot;lint&quot;: &quot; eslint &#39;src/**/*.+(js|ts|jsx|tsx)&#39; &quot;</code> <br><br> 控制台运行 <code>npm run lint</code> 也可以看到错误提示。如果要自动修复，可以加 <code>--fix</code> 参数</p><h3 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> prettier</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install prettier eslint-config-prettier eslint-plugin-prettier -save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>eslint-config-prettier</code> 禁用所有和 Prettier 产生<strong>冲突</strong>的规则</li><li><code>eslint-plugin-prettier</code> 把 Prettier 应用到 Eslint，配合 rules <code>&quot;prettier/prettier&quot;: &quot;error&quot;</code> 实现 Eslint 提醒。</li></ul><p>在 eslint 配置文件的 <code>extends</code> <strong>最后</strong> 增加 <code>&#39;plugin:prettier/recommended&#39;</code></p><p>安装 vscode 插件 <code>prettier</code> ，此时可以看到代码 <code>App.txs</code> 中的格式提示（如末尾是否使用 <code>;</code> ，或单引号、双引号）</p><p>在 <code>package.json</code> 中增加 scripts <code>&quot;format&quot;: &quot; prettier --write &#39;src/**/*.+(js|ts|jsx|tsx)&#39; &quot;</code> <br><br> 控制台运行 <code>npm run format</code> 可以修复所有的格式错误</p><p>设置 vscode <code>.vscode/settings.json</code> 自动保存格式，可以在文件保存时，自动保留格式</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加配置文件 <code>.prettierrc.js</code> 规定自己的编码格式，运行 <code>npm run format</code> 可以看到效果，保存文件也可以看到效果。<br><br> 【注意】如果此处没效果，可以<strong>重启 vscode</strong> 再重试。</p><hr><p>一直搞不定，重启 vscode 就好了。<br> 在 vscode 搜“prettier” 插件时，发现一个 “reload required” 的提示，于是就重启了</p><p>CRA 创建的项目，配置文件是 <code>js</code> 格式<br> vite 创建的项目，配置文件是 <code>cjs</code> 格式</p><h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX</h2><h3 id="jsx-与-标签的区别" tabindex="-1"><a class="header-anchor" href="#jsx-与-标签的区别" aria-hidden="true">#</a> JSX 与 标签的区别</h3><ol><li>首字母大小写的区分，大写是自定义组件</li><li>每段 JSX 只能有一个根节点 (其中为 <code>&lt;&gt;&lt;/&gt;</code> 空标签，空标签无法添加 <code>class</code> 等修饰)</li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>return (
	&lt;&gt;
  	&lt;div&gt;hello world&lt;/div&gt;
  &lt;/&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-的属性" tabindex="-1"><a class="header-anchor" href="#jsx-的属性" aria-hidden="true">#</a> JSX 的属性</h3><ol><li>类型的变化，<code>class</code> 在 react 中需要写成 <code>className</code></li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>return (
	&lt;div className=&quot;App&quot;&gt;hello world&lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么？</p><p>因为 JSX 是写在 ts 或者 js 中的，那么 <code>class</code> 已经是一个关键字了 (类)</p><p>所以，只能将名称改为 <code>className</code></p><ol start="2"><li><code>style</code> 要使用 JS 对象 (不能是 <code>string</code>) 而且 <code>key</code> 用驼峰写法</li></ol><p>错误写法</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>return (
  &lt;a style=&quot;color:red; background-color:white;&quot;&gt;&lt;/a&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确写法</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>return (
	&lt;a style={{ color: &#39;red&#39;, backgroundColor: &#39;white&#39; }}&gt;&lt;/a&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[注意]</strong></p><p>有两点需要注意</p><ul><li><p><code>style</code> 必须用 <code>{}</code> 包起来并使用 对象的方式去写</p></li><li><p><code>background-color</code> 这样的属性，只能在 css 中使用，JSX 或 TSX 需要写成这样 <code>backgroundColor</code>，即采用 驼峰写法</p></li></ul><ol start="3"><li>for 要改为 htmlFor</li></ol><p>for 属性规定 label 与 哪个表单元素绑定，for 绑定的名称 与 表单 id 相同</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>male<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Male<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>male<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>JSX 中的写法</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>return (
  &lt;&gt;
  	&lt;label htmlFor=&quot;male&quot;&gt;Male&lt;/label&gt;
		&lt;input type=&quot;radio&quot; name=&quot;sex&quot; id=&quot;male&quot; /&gt;
  &lt;/&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-中监听-dom-事件" tabindex="-1"><a class="header-anchor" href="#jsx-中监听-dom-事件" aria-hidden="true">#</a> JSX 中监听 DOM 事件</h3><ol><li>使用 <code>onXxx</code> 的形式，定义事件</li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>return (
	&lt;div&gt;
      &lt;button
        onClick={() =&gt; {
          console.log(&#39;clicked&#39;)
        }}
      &gt;
        click
      &lt;/button&gt;
   &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>必须传入一个函数 ( 是fn 而非 fn() ，fn() 是执行结果, fn 才是一个函数)</li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const fn = () =&gt; {
  console.log(&#39;clicked...&#39;)
}
return (
	&lt;div&gt;
    &lt;button onClick={fn}&gt;click&lt;/button&gt;
  &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-函数传递-额外参数" tabindex="-1"><a class="header-anchor" href="#jsx-函数传递-额外参数" aria-hidden="true">#</a> JSX 函数传递 额外参数</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const fn = (event: MouseEvent&lt;HTMLButtonElement&gt;, name: string) =&gt; {
  event.preventDefault()
  event.stopPropagation()
  console.log(&#39;clicked...&#39;, name)
}

return (
	&lt;div&gt;
    &lt;button
      onClick={event =&gt; {
        fn(event, &#39;Lin&#39;)
      }}
    &gt;
      click
    &lt;/button&gt;
  &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-中变量与表达式的插入" tabindex="-1"><a class="header-anchor" href="#jsx-中变量与表达式的插入" aria-hidden="true">#</a> JSX 中变量与表达式的插入</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const style = { color: &#39;red&#39;, backgroundColor: &#39;white&#39; }

return (
  &lt;div style={ style }&gt;{ true ? &#39;true&#39; : &#39;false&#39; }&lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-中的注释" tabindex="-1"><a class="header-anchor" href="#jsx-中的注释" aria-hidden="true">#</a> JSX 中的注释</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>{/* 这个是注释 */}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jsx-中条件判断" tabindex="-1"><a class="header-anchor" href="#jsx-中条件判断" aria-hidden="true">#</a> JSX 中条件判断</h3><p>简单使用</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const flag = true

return (
	&lt;div&gt;
  	&lt;div&gt;{flag &amp;&amp; &lt;p&gt;Hello&lt;/p&gt;}&lt;/div&gt; {/* 单个元素的隐藏 */}
    &lt;div&gt;{flag ? &lt;p&gt;Hello&lt;/p&gt; : &lt;p&gt;你好&lt;/p&gt;}&lt;/div&gt; {/* 两个元素的要显示哪个一个 */}
  &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数的封装</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>function Hello() {
  if (flag) return &lt;p&gt;hello1&lt;/p&gt;
  return &lt;p&gt;你好1&lt;/p&gt;
}

return (
	&lt;div&gt;
  	&lt;Hello&gt;&lt;/Hello&gt; {/* 首字母大写才是 自定义组件 */}
  &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-循环的使用" tabindex="-1"><a class="header-anchor" href="#jsx-循环的使用" aria-hidden="true">#</a> JSX 循环的使用</h3><ul><li>使用数组 map，来执行循环</li><li>每个 item 元素需要 key 属性</li><li>key 在同级别唯一</li><li><strong>[注意]</strong> 不要使用 index 作为 key</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const list = [
  { userName: &#39;shuangyue&#39;, name: &#39;双越&#39; },
  { userName: &#39;zhangsan&#39;, name: &#39;张三&#39; },
  { userName: &#39;lisi&#39;, name: &#39;李四&#39; },
]

return (
	&lt;ul&gt;
    {list.map(user =&gt; {
      const { userName, name } = user
      return &lt;li key={userName}&gt;{name}&lt;/li&gt;
    })} 
  &lt;/ul&gt;
  {/* 不要使用 index 作为 key，下面做法是错误的 */}
  {/*&lt;ul&gt;
    {list.map((user, index) =&gt; {
      const { userName, name } = user
      return &lt;li key={index}&gt;{name}&lt;/li&gt;
    })} 
  &lt;/ul&gt;
  */}
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-与-vue-设计理念的区别" tabindex="-1"><a class="header-anchor" href="#jsx-与-vue-设计理念的区别" aria-hidden="true">#</a> JSX 与 Vue 设计理念的区别</h3><ul><li><p>判断 Vue 采用 v-if，React 使用 三元表达式，或者 &amp;&amp;</p></li><li><p>循环 Vue 采用 v-for，React 使用 map 进行循环，但是两者同样需要 key</p></li><li><p>React - 能用 js 的就用 js</p></li><li><p>Vue - 自定义很多指令，方便初学者学习和记忆</p></li></ul><p><strong>[注意]</strong></p><p>Vue3 也能很好的支持 JSX 语法</p><h3 id="jsx-中使用-html" tabindex="-1"><a class="header-anchor" href="#jsx-中使用-html" aria-hidden="true">#</a> JSX 中使用 html</h3><p><code>dangerouslySetInnerHTML</code> 属性能将 文本转换为 <code>html</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState<span class="token punctuation">,</span> ChangeEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ChangeEvent<span class="token operator">&lt;</span>HTMLTextAreaElement<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setText</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">getHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> __html<span class="token operator">:</span> text<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">getHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> // 将文本转化为 html
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-显示与隐藏" tabindex="-1"><a class="header-anchor" href="#jsx-显示与隐藏" aria-hidden="true">#</a> JSX 显示与隐藏</h3><p><code>JSX</code> 中我们可以使用 <code>hidden</code> 属性，来控制 <code>JSX</code> 元素的显示与隐藏</p><p><code>hidden</code> 属性实际上控制的是 <code>css</code> 中的 <code>display</code> 属性</p><ul><li><code>true</code> 显示</li><li><code>false</code> 隐藏</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pathname<span class="token punctuation">}</span></span>
  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;relative&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">&quot;hidden auto&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keep-alive-page<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">hidden</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token function">matchPath</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span> pathname<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token punctuation">{</span>element<span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[重点]</strong> 只能在元素上使用，不能在组件上使用，也就是说，你无法通过 <code>hidden</code> 属性来判断组件显示或隐藏</p><p>如果你要控制组件的显示或者隐藏，可以在顶层增加一个 <code>&lt;div&gt;</code>，<code>&lt;div&gt;</code> 控制 <code>hidden</code> 来实现</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><ul><li><p>标签</p></li><li><p>属性</p></li><li><p>事件</p></li><li><p>JS 变量或表达式</p></li><li><p>条件判断</p></li><li><p>循环</p></li></ul><h2 id="增、删、改、查" tabindex="-1"><a class="header-anchor" href="#增、删、改、查" aria-hidden="true">#</a> 增、删、改、查</h2><h3 id="基本操作的语法" tabindex="-1"><a class="header-anchor" href="#基本操作的语法" aria-hidden="true">#</a> 基本操作的语法</h3><p>增加 <code>concat</code></p><p>删除、查询 <code>filter</code></p><p>修改 <code>map</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> QuestionCard <span class="token keyword">from</span> <span class="token string">&#39;./components/QuestionCard&#39;</span>

<span class="token keyword">const</span> List2<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>questionList<span class="token punctuation">,</span> setQuestionList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;q1&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;问卷1&#39;</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;q2&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;问卷2&#39;</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;q3&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;问卷3&#39;</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;q4&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;问卷4&#39;</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token comment">// 添加 concat</span>
      questionList<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">&#39;qs&#39;</span> <span class="token operator">+</span> r<span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&#39;问卷&#39;</span> <span class="token operator">+</span> r<span class="token punctuation">,</span>
        isPublished<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">deleteQuestion</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不可变数据</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token comment">// 删除/查询 filter</span>
      questionList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>q <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">publishQuestion</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token comment">// 修改 map</span>
      questionList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>q <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span> <span class="token keyword">return</span> q

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>q<span class="token punctuation">,</span>
          isPublished<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">问卷列表页2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>questionList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>question <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> isPublished <span class="token punctuation">}</span> <span class="token operator">=</span> question
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">QuestionCard</span></span>
              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
              <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
              <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span>
              <span class="token attr-name">isPublished</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isPublished<span class="token punctuation">}</span></span>
              <span class="token attr-name">deleteQuestion</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>deleteQuestion<span class="token punctuation">}</span></span>
              <span class="token attr-name">publishQuestion</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>publishQuestion<span class="token punctuation">}</span></span>
            <span class="token punctuation">/&gt;</span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">新增问卷</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> List2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="immer" tabindex="-1"><a class="header-anchor" href="#immer" aria-hidden="true">#</a> immer</h3><p><code>immer</code> 是第三库，用来实现更方便的 增、删、改、查</p><p>增加 <code>push</code></p><p>删除/查找 <code>findIndex</code> 、<code>splice</code></p><p>修改 <code>find</code>，直接修改属性 <code>.属性名</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> QuestionCard <span class="token keyword">from</span> <span class="token string">&#39;./components/QuestionCard&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> produce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;immer&#39;</span>

<span class="token keyword">const</span> List2<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>questionList<span class="token punctuation">,</span> setQuestionList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;q1&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;问卷1&#39;</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;q2&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;问卷2&#39;</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;q3&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;问卷3&#39;</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;q4&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;问卷4&#39;</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token comment">// setQuestionList(</span>
    <span class="token comment">//   // 添加 concat</span>
    <span class="token comment">//   questionList.concat({</span>
    <span class="token comment">//     id: &#39;qs&#39; + r,</span>
    <span class="token comment">//     title: &#39;问卷&#39; + r,</span>
    <span class="token comment">//     isPublished: false,</span>
    <span class="token comment">//   })</span>
    <span class="token comment">// )</span>

    <span class="token comment">// immer 增加</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token function">produce</span><span class="token punctuation">(</span>draft <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        draft<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          id<span class="token operator">:</span> <span class="token string">&#39;q&#39;</span> <span class="token operator">+</span> r<span class="token punctuation">,</span>
          title<span class="token operator">:</span> <span class="token string">&#39;问卷&#39;</span> <span class="token operator">+</span> r<span class="token punctuation">,</span>
          isPublished<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">deleteQuestion</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不可变数据</span>
    <span class="token comment">// setQuestionList(</span>
    <span class="token comment">//   // 删除/查询 filter</span>
    <span class="token comment">//   questionList.filter(q =&gt; {</span>
    <span class="token comment">//     if (q.id === id) return false</span>
    <span class="token comment">//     else return true</span>
    <span class="token comment">//   })</span>
    <span class="token comment">// )</span>

    <span class="token comment">// immer 删除</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token function">produce</span><span class="token punctuation">(</span>draft <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> draft<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>q <span class="token operator">=&gt;</span> q<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span>
        draft<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">publishQuestion</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// setQuestionList(</span>
    <span class="token comment">//   // 修改 map</span>
    <span class="token comment">//   questionList.map(q =&gt; {</span>
    <span class="token comment">//     if (q.id !== id) return q</span>

    <span class="token comment">//     return {</span>
    <span class="token comment">//       ...q,</span>
    <span class="token comment">//       isPublished: true,</span>
    <span class="token comment">//     }</span>
    <span class="token comment">//   })</span>
    <span class="token comment">// )</span>

    <span class="token comment">// immer 修改</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token function">produce</span><span class="token punctuation">(</span>draft <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> q <span class="token operator">=</span> draft<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>q<span class="token punctuation">)</span> q<span class="token punctuation">.</span>isPublished <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">问卷列表页2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>questionList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>question <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> isPublished <span class="token punctuation">}</span> <span class="token operator">=</span> question
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">QuestionCard</span></span>
              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
              <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
              <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span>
              <span class="token attr-name">isPublished</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isPublished<span class="token punctuation">}</span></span>
              <span class="token attr-name">deleteQuestion</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>deleteQuestion<span class="token punctuation">}</span></span>
              <span class="token attr-name">publishQuestion</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>publishQuestion<span class="token punctuation">}</span></span>
            <span class="token punctuation">/&gt;</span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">新增问卷</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> List2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合成事件" tabindex="-1"><a class="header-anchor" href="#合成事件" aria-hidden="true">#</a> 合成事件</h2><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><p><code>onClick、onChange、onScroll</code></p><ul><li><p><code>React</code> 事件就是在 浏览器原生事件 前面加 <code>on</code></p></li><li><p><code>Vue</code> 事件是在 浏览器原生事件 前面加 <code>@</code></p></li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// onClick 使用示例，其他事件类似
const MyComponent = () =&gt; {
   return &lt;button onClick={() =&gt; console.log(&#39;Button clicked&#39;)}&gt;Click me&lt;/button&gt;;
 };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【注意】</p><p><code>React</code> 中的合成事件<code>（SyntheticEvent）</code>是对浏览器原生事件的跨浏览器包装。</p><h3 id="为什么会有-合成事件" tabindex="-1"><a class="header-anchor" href="#为什么会有-合成事件" aria-hidden="true">#</a> 为什么会有 合成事件？</h3><ol><li>在传统的事件里，不同的浏览器需要兼容不同的写法，在合成事件中<code>React</code>提供统一的事件对象，抹平了浏览器的兼容性差异**（解决了什么？）**</li><li><code>React</code>通过顶层监听的形式，通过事件委托的方式来统一管理所有的事件，可以在事件上区分事件优先级，优化用户体验**（如何解决？）**</li></ol><h3 id="普通事件-执行顺序" tabindex="-1"><a class="header-anchor" href="#普通事件-执行顺序" aria-hidden="true">#</a> 普通事件 执行顺序？</h3><p>捕获 -&gt; 目标 -&gt; 冒泡</p><h3 id="什么是-事件委托、事件监听" tabindex="-1"><a class="header-anchor" href="#什么是-事件委托、事件监听" aria-hidden="true">#</a> 什么是 事件委托、事件监听？</h3><p>**事件委托：**在多个事件的的父元素绑定一个事件委托，通过<code>target</code>属性获取当前触发 目标阶段 的<code>dom</code>元素，来进行统一管理</p><p>**事件监听：**使用 <code>addEventListerner</code> 进行监听</p><h3 id="如何阻止原生事件" tabindex="-1"><a class="header-anchor" href="#如何阻止原生事件" aria-hidden="true">#</a> 如何阻止原生事件</h3><p><code>stopPropagation()</code> 阻止事件的 <strong>捕获</strong> 和 <strong>冒泡阶段</strong></p><p><code>preventDefault()</code> 阻止 <strong>默认事件</strong>（例如，阻止链接的默认跳转行为、阻止表单的默认提交行为等）</p><h3 id="原生事件-与-合成事件-的执行顺序" tabindex="-1"><a class="header-anchor" href="#原生事件-与-合成事件-的执行顺序" aria-hidden="true">#</a> 原生事件 与 合成事件 的执行顺序？</h3><h2 id="typescript-类型基础知识补充" tabindex="-1"><a class="header-anchor" href="#typescript-类型基础知识补充" aria-hidden="true">#</a> Typescript 类型基础知识补充</h2>`,134),b={href:"https://www.tslang.cn/play/index.html",target:"_blank",rel:"noopener noreferrer"},g=e(`<h3 id="t-泛型的使用" tabindex="-1"><a class="header-anchor" href="#t-泛型的使用" aria-hidden="true">#</a> <code>&lt;T&gt;</code> 泛型的使用</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">print</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token generic-function"><span class="token function">print</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;T&gt;</code> 的含义就是等待类型被定义，也就是说可以在使用的时候再去定义类型</p><p>通常你在 typescript 中看到 <code>&lt;&gt;</code> 尖括号基本都是 <strong>泛型</strong></p><p><code>class</code> 中加 泛型</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>function print&lt;T&gt;(info: T) {
    console.log(info)
}

print&lt;string&gt;(&#39;hello&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型定义一个数组" tabindex="-1"><a class="header-anchor" href="#泛型定义一个数组" aria-hidden="true">#</a> 泛型定义一个数组</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 泛型定义 字符类型的数组</span>

<span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 直接命名定义数组类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts-中获取一个类型" tabindex="-1"><a class="header-anchor" href="#ts-中获取一个类型" aria-hidden="true">#</a> TS 中获取一个类型</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import type { MouseEvent } from &#39;react&#39;

function App() {
  const fn = (event: MouseEvent&lt;HTMLButtonElement&gt;) =&gt; {
    event.preventDefault() // 阻止默认行为
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子就是引入了类型 <code>MouseEvent</code> ，并且使用</p><h3 id="函数返回值类型定义" tabindex="-1"><a class="header-anchor" href="#函数返回值类型定义" aria-hidden="true">#</a> 函数返回值类型定义</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;xx&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解构重命名" tabindex="-1"><a class="header-anchor" href="#解构重命名" aria-hidden="true">#</a> 解构重命名</h3><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> run<span class="token operator">:</span> handleCreateClick<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">handleCreateClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 相当于 执行 run()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="partial-的妙用" tabindex="-1"><a class="header-anchor" href="#partial-的妙用" aria-hidden="true">#</a> Partial 的妙用</h3><p>定义复杂数据类型，可用 <code>?:</code> 定义一些可能不必有的属性</p><p>这样是话，b、c 可有，也可无，都不会报错</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ObjType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span>
  b<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  c<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj1<span class="token operator">:</span> ObjType <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token string">&#39;x&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果要定义的复杂数据类型过多，那就显得不灵活啦</p><p>那么，有没有什么 API 语法可以简化呢，答案是有的，<code>partial</code></p><p><code>partial</code> 有部分的意思</p><p>也就是说有 <code>partial</code> 用这个关键字定义后，定义的数据，只需要有预先定义的复杂数据类型的一部分即可</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ObjType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span>
  b<span class="token operator">:</span> <span class="token builtin">number</span>
  c<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj1<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>ObjType<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token string">&#39;x&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="required-的妙用" tabindex="-1"><a class="header-anchor" href="#required-的妙用" aria-hidden="true">#</a> Required 的妙用</h3><p><code>Required</code> 是去掉可选用的，也就是把 可选都变成必选</p><p><code>Partial</code> 是给属性添加可选修饰，也就是把 必选都变成可选</p><h2 id="组件-与-props" tabindex="-1"><a class="header-anchor" href="#组件-与-props" aria-hidden="true">#</a> 组件 与 props</h2><h3 id="react-一切皆组件" tabindex="-1"><a class="header-anchor" href="#react-一切皆组件" aria-hidden="true">#</a> React 一切皆组件</h3><ul><li>组件就是一个 UI 片段</li><li>拥有独立的逻辑和显示</li><li>组件可大可小，可嵌套</li></ul><p>react 有两种组件，class 组件 和 函数组件</p><p>React16 以后，React 推崇 函数组件 和 Hooks</p><p>组件是一个函数（执行放回 JSX 片段），组件初次渲染执行这个函数</p><p>任何 state 更新，都会触发组件的更新（重新执行函数）</p><h3 id="react-fc-与-jsx-element" tabindex="-1"><a class="header-anchor" href="#react-fc-与-jsx-element" aria-hidden="true">#</a> React.FC 与 JSX.Element</h3><p><code>React.FC</code> 是一个 <code>TypeScript</code> 类型，用于 <code>React</code> 函数组件</p><p><code>FC</code> 代表 <code>Functional Component</code>（函数组件）</p><p>这个类型的使用有助于在 <code>TypeScript</code> 项目中编写类型安全的 <code>React</code> 组件</p><p>使用 <code>React.FC</code> 为组件定义类型就可以享受到 <code>TypeScript</code> 提供的类型检查和自动补全等特性，让开发过程更加高效和减少错误</p><ol><li>直接写法</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Welcome</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>React.FC</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
 
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">const</span> MyComponent<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>JSX.Element</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> Welcome<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 不使用 React.FC，直接指定返回类型</span>
<span class="token keyword">const</span> Welcome <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这三种写有什么不同，为什么要这么写？</p><p>使用 <code>React.FC</code> 可以提供类型检测、IDE 语法提示，但是却会自动增加 <code>children</code> 属性（即使你并不需要）</p><p><code>JSX.Element</code> 是 <code>React.FC</code> 的替代方案，可以完全自己定义返回类型</p><p><strong>【注】</strong><code>React.FC</code> 的函数组件会被自动添加上 <code>children</code> 属性，即此函数组件可以在包别的 <code>element</code></p><h3 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h3><table><thead><tr><th>传值方式</th><th>方法</th></tr></thead><tbody><tr><td>父 -&gt; 子</td><td>props</td></tr><tr><td>子 -&gt; 父</td><td>回调函数</td></tr><tr><td>父组件 获取 子组件方法</td><td>useImperativeHandle、useRef</td></tr><tr><td>子组件 获取 父组件方法</td><td>useContext</td></tr><tr><td>多层级 或者 同级数据传递</td><td>ZuStand</td></tr></tbody></table><h3 id="props-如何设置默认值" tabindex="-1"><a class="header-anchor" href="#props-如何设置默认值" aria-hidden="true">#</a> props 如何设置默认值</h3><p>可以采用 ES6 解构的方式设置默认值</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const MyFunctionalComponent = ({ propName = &#39;defaultValue&#39; }) =&gt; {
  return &lt;div&gt;{propName}&lt;/div&gt;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父组件获取子组件的方法" tabindex="-1"><a class="header-anchor" href="#父组件获取子组件的方法" aria-hidden="true">#</a> 父组件获取子组件的方法</h3><p>这样的操作，类似于 Vue 里面的 emit 自定义事件</p><p>而 React 中要实现这样的操作，需要用到 <code>useImperativeHandle</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 子组件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> forwardRef<span class="token punctuation">,</span> Ref<span class="token punctuation">,</span> useImperativeHandle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 需要对 Ref 的类型进行定义，不然 ts 校验会不通过</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RefProps</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">chileMethod</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> title <span class="token operator">=</span> <span class="token string">&#39;title&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> ref<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>RefProps<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">chileMethod</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;233&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span>ChildComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 父组件</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChildComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span> RefProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./component/ChildComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> childRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>RefProps<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    childRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">chileMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildComponent</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>childRef<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">调用子组件方法</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props-children" tabindex="-1"><a class="header-anchor" href="#props-children" aria-hidden="true">#</a> Props.children</h3><p>【注意】类组件才有这个</p><p>Props.children 类似于 Vue 中的 <code>slot</code> 插槽</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// 父组件
return (
  &lt;Child&gt;
      &lt;span&gt;{ &#39;child node&#39; }&lt;/span&gt;
   &lt;/Child&gt;
 )

// 子组件
return (
  &lt;div&gt;
    { props.children }
  &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="状态提升" tabindex="-1"><a class="header-anchor" href="#状态提升" aria-hidden="true">#</a> 状态提升</h3><p>状态提升 <code>state</code></p><p>数据源在父组件里面，每个子组件只需要执行父组件传过来的数据和方法，这就是 <strong>状态提升</strong></p><p><strong>为什么需要状态提升？</strong></p><p>当多个组件需要共享状态或者需要基于相同的状态进行交互时，如果每个组件都独立管理自己的状态，会导致状态不一致和难以维护</p><p>通过将状态提升到共同的父组件，可以确保所有相关组件都能访问和更新相同的状态，从而实现更高效和一致的状态管理</p><h3 id="outlet" tabindex="-1"><a class="header-anchor" href="#outlet" aria-hidden="true">#</a> Outlet</h3><p>类似于 vue 中 slot 插槽</p><h3 id="受控组件-与-非受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件-与-非受控组件" aria-hidden="true">#</a> 受控组件 与 非受控组件</h3><ul><li>受控组件：值同步到 state，使用 value 属性（数据可以由代码控制）</li><li>非受控组件：值不同步 state，使用 defaultValue 属性（数据由用户控制）</li><li>React 推荐使用受控组件，看似繁琐，实则更加可控</li></ul><h3 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h3><p>如果需要返回多个组件，但又不想用额外的父元素包裹，可以是使用 <code>Fragment</code></p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Example extends React.Component {
  render() {
    return (
      &lt;React.Fragment&gt;
        &lt;div&gt;First div&lt;/div&gt;
        &lt;div&gt;Second div&lt;/div&gt;
      &lt;/React.Fragment&gt;
    );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者可以使用简写（空标签）</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class Example extends React.Component {
  render() {
    return (
      &lt;&gt;
        &lt;div&gt;First div&lt;/div&gt;
        &lt;div&gt;Second div&lt;/div&gt;
      &lt;/&gt;
    );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3><p>可以使用两种方式</p><ol><li>使用 <code>props</code> 携带组件</li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;FunctionComponent customContent1={&lt;ChildComponent1 /&gt;} customContent2={&lt;ChildComponent2 /&gt;} /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> const FunctionComponent = ({ customContent1, customContent2 }) =&gt; {
   return (
     &lt;div&gt;
       {customContent1}
       {customContent2}
     &lt;/div&gt;
   );
 };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用 <code>props.children</code></li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> &lt;FunctionComponent&gt;
   &lt;div&gt;Child Content&lt;/div&gt;
 &lt;/FunctionComponent&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code> const FunctionComponent = ({ children }) =&gt; {
   return (
     &lt;div&gt;
       {children}
     &lt;/div&gt;
   );
 };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【注】</p><p><code>React.FC</code>（Function Component）在 <code>React 16</code> 以后确实没有默认的 <code>children</code> 属性类型定义了</p><p>如果你需要使用 <code>ts</code>，并使用 <code>React.FC</code> 声明类型，你需要自己添加 <code>children</code> 属性</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &#39;react&#39;;

interface MyComponentProps {
  // 其他属性定义...
}

const MyComponent: React.FC&lt;MyComponentProps&gt; = ({ children,...props }) =&gt; {
  return (
    &lt;div&gt;
      {children}
      {/* 组件的其他内容 */}
    &lt;/div&gt;
  );
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-高阶组件" tabindex="-1"><a class="header-anchor" href="#react-高阶组件" aria-hidden="true">#</a> React 高阶组件</h3><p>高阶组件，本质上是对 React 组件的进一步封装</p><p>可以接收任何外部的值，也可以不接收</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// 这个高阶组件为被包裹的组件添加了挂载和卸载时的日志记录功能，不需要接收任何外部的值
const withLogging = (WrappedComponent) =&gt; {
  return (props) =&gt; {
    useEffect(() =&gt; {
      console.log(\`Component \${WrappedComponent.name} mounted.\`);
      return () =&gt; {
        console.log(\`Component \${WrappedComponent.name} will unmount.\`);
      };
    }, []);

    return &lt;WrappedComponent {...props} /&gt;;
  };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// 这个高阶组件接收一个颜色参数，然后为被包裹的组件设置一个特定颜色的背景
const withBackgroundColor = (color) =&gt; (WrappedComponent) =&gt; {
  return (props) =&gt; {
    return (
      &lt;div style={{ backgroundColor: color }}&gt;
        &lt;WrappedComponent {...props} /&gt;
      &lt;/div&gt;
    );
  };
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> Hooks</h2><h3 id="为什么-react-需要使用到-usestate-这样的钩子函数呢" tabindex="-1"><a class="header-anchor" href="#为什么-react-需要使用到-usestate-这样的钩子函数呢" aria-hidden="true">#</a> 为什么 react 需要使用到 useState 这样的钩子函数呢</h3><p>因为普通 js 变量，无法触发组件的更新，useState 可以触发这样的更新</p><p>触发条件就是使用，setCount 进行更新</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { useState } from &#39;react&#39;

function App() {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
  }
  // 列表页
  return (
    &lt;&gt;
      &lt;div&gt;
        &lt;button onClick={add}&gt;add {count}&lt;/button&gt;
      &lt;/div&gt;
    &lt;/&gt;
  )
}

export default App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么usestate返回值是数组-而不是对象" tabindex="-1"><a class="header-anchor" href="#为什么usestate返回值是数组-而不是对象" aria-hidden="true">#</a> 为什么useState返回值是数组，而不是对象？</h3><p>对象解构的变量必须与属性同名、可以任意顺序</p><p>数组解构的变量可以是任意名称、必须相同顺序</p><p>所以，<code>useState</code> 返回值是数组，是为了简化写法</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const [state, setState] = useState(null)
const [state2, setState2] = useState(null)

const {state, setState} = useState(null)
const {state:state2, setState:setState2} = useState(null)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-有哪些特点" tabindex="-1"><a class="header-anchor" href="#state-有哪些特点" aria-hidden="true">#</a> state 有哪些特点?</h3><ol><li>state 的更新是异步的，所以无法拿到最新的 state 值</li></ol><blockquote><p>[注意]</p><p>如果说一个变量 不用于 JSX 中显示，那就不要用 setState 来管理它 (因为 useState 会触发组件更新，所以没必要)，用 useRef</p></blockquote><ol start="2"><li>state 可能会被合并</li></ol><p>add 函数执行结果一次的结果只加 1</p><p>因为，每次执行 <code>setCount(count + 1)</code> ，使用值进行更新，都被合并了</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { FC, useState } from &#39;react&#39;

const Demo: FC = () =&gt; {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    // setCount(count =&gt; count + 1) setCount 的第二种写法
  }

  return (
    &lt;div&gt;
      &lt;button onClick={add}&gt;add {count}&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是使用函数来更新就不会被合并，因为函数是一个比较复杂的结构</p><p>add 函数执行结果一次的结果加 5</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { FC, useState } from &#39;react&#39;

const Demo: FC = () =&gt; {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count =&gt; count + 1)
    setCount(count =&gt; count + 1)
    setCount(count =&gt; count + 1)
    setCount(count =&gt; count + 1)
    setCount(count =&gt; count + 1)
    // setCount(count =&gt; count + 1) setCount 的第二种写法
  }

  return (
    &lt;div&gt;
      &lt;button onClick={add}&gt;add {count}&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>不可变数据 ！！！</li></ol><p><strong><code>useState()</code> 的 <code>state</code> 是否可以直接修改？是否可以引起组件渲染？</strong></p><p><code>state</code> 不可以直接修改，因为这个 <code>state</code> 是不可变数据，直接改，会提示它是个常数</p><p><code>state</code> 改变会引起组件渲染</p><h3 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h3><p><strong>经典面试题</strong></p><p>什么是副作用函数，什么是纯函数？[ 副作用：对函数外部进行修改 ]</p><p>纯函数：</p><ol><li>输入输出一致</li><li>无副作用</li></ol><p>副作用函数：</p><ol><li>副作用效果不一定符合我们预期</li><li>依赖外部的变量</li></ol><p>[例子]</p><ul><li>调用外部API</li><li>操作<code>DOM</code></li><li>计时器</li><li>操作引用类型</li></ul><p><code>useEffect</code> 能监听组件的生命周期，创建、更新、销毁</p><p>函数是一个组件，<code>useEffect</code> 在函数中执行</p><ol><li>只执行一次，数组中为空，只执行一次</li></ol><p>挂载</p><p>谁引用了 List2，谁就执行 useEffect 一次</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> List2<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;加载 ajax 网络请求&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>监听 <code>useState</code> 数据变化</li></ol><p>更新 -&gt; <code>componentDidUpdate</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> List2<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;count change&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span>
  
  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>监听函数 创建 与 销毁</li></ol><p>创建 -&gt; <code>componentDidMount</code></p><p>销毁 -&gt; <code>componentWillUnmount</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;question card mounted&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 监听创建</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;question card unmounted&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token comment">// 监听销毁</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[注]</strong></p><p><code>useEffect</code> 在开发环境下会执行两次?</p><p>先创建一次，销毁一次，再次创建</p><p>从 React 18 开始，useEffect 在开发环境下会执行两次</p><p>这样做的目的，模拟组件创建、销毁，再创建的完整流程，及早暴露问题</p><p>生产环境下会执行一次</p><h3 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h3><p>一般用于操作 DOM</p><p>也可传入普通 JS 变量, 但更新不会触发 <code>rerender</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nameRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token string">&#39;lin&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nameRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token string">&#39;linjk&#39;</span> <span class="token comment">// 修改 ref 值, 不会触发 rerender (state 修改组件会触发组件的 rerender)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">name </span><span class="token punctuation">{</span>nameRef<span class="token punctuation">.</span>current<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>changeName<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">change name</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h3><p>用于返回一个记忆化的值。这个函数会在依赖项改变时重新计算这个记忆化的值。</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>num1<span class="token punctuation">,</span> setNum1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>num2<span class="token punctuation">,</span> setNum2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;gen sum ...&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// num1、num2 其中一个改变或者两个都改变才会重新渲染</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h3><p>用于返回一个记忆化函数，只有当这个函数项数组改变时，才会更新。</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> fn2 <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fn2 text:&#39;</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>text<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// text 改变，才会重新渲染</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【扩展】</p><p><code>useCallback</code>和<code>useMemo</code>并不能保证性能优化，过度使用反而可能导致性能下降。</p><p>因为记忆化也需要消耗资源来保存记忆化的值。只有在确定性能瓶颈存在，并且可以通过记忆化来解决时，才应该使用它们。</p><p><strong>那什么时候才需要使用<code>useCallback</code>和<code>useMemo</code>这两个呢？</strong></p><ol><li>你明确知道要写的这个东西确实需要缓存了，那你就根据情况加上<code>useCallback</code>或<code>useMemo</code></li><li>平时写的时候不要使用这两个，出现了性能瓶颈了，再考虑使用<code>useCallback</code>或<code>useMemo</code>来优化</li></ol><h3 id="usereducer" tabindex="-1"><a class="header-anchor" href="#usereducer" aria-hidden="true">#</a> useReducer</h3><p><code>reducer</code>函数根据不同的<code>action</code>类型来更新状态。<code>dispatch</code>函数用于触发<code>action</code>，从而更新状态</p><p>而 <code>useState</code> 只能通过 <code>set</code> 函数进行简单赋值，如果要实现 <code>reducer</code> 那种处理多种情况，可以封装成一个自定义 <code>Hook</code></p><p><strong>实例</strong></p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { FC, useReducer } from &#39;react&#39;

type StateType = { count: number }
type ActionType = { type: string }

const initialState: StateType = { count: 100 } // 初始值

// 根据传入的 action 返回新的 state (不可变数据)
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case &#39;increment&#39;:
      return { count: state.count + 1 }
    case &#39;decrement&#39;:
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const CountReducer: FC = () =&gt; {
  // const [count, setCount] = useState(100)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    &lt;&gt;
      &lt;span&gt;count: {state.count}&lt;/span&gt;
      {/* &lt;button onClick={() =&gt; setCount(count + 1)}&gt;+&lt;/button&gt;
      &lt;button onClick={() =&gt; setCount(count - 1)}&gt;-&lt;/button&gt; */}
      &lt;button onClick={() =&gt; dispatch({ type: &#39;increment&#39; })}&gt;+&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: &#39;decrement&#39; })}&gt;-&lt;/button&gt;
    &lt;/&gt;
  )
}

export default CountReducer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="forwardref" tabindex="-1"><a class="header-anchor" href="#forwardref" aria-hidden="true">#</a> forwardRef</h3><p>父组件想拿到子组件的 ref</p><p>也就是从子组件传递 ref 到父组件，就需要 forwardRef 了，也就是把组件内的 ref 转发一下</p><figure><img src="`+l+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="自定义-hooks" tabindex="-1"><a class="header-anchor" href="#自定义-hooks" aria-hidden="true">#</a> 自定义 hooks</h3><p>类似于，定义一个外部函数，可以引入使用</p><p>外部 hooks</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// hooks/useTitle.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">function</span> <span class="token function">useTitle</span><span class="token punctuation">(</span>title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> title
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useTitle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 hooks</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// index.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> useTitle <span class="token keyword">from</span> <span class="token string">&#39;./hooks/useTitle&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useTitle</span><span class="token punctuation">(</span><span class="token string">&#39;App page 2&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">App page</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><strong>自定义 hooks (获取鼠标位置)</strong></li></ol><p>外部 hooks</p><p>下面 <code>mouseMoveHandler</code> 每次执行这个函数都会创建一次，我们鼠标移动一次就会创建一次，可以使用 <code>useCallback</code> 进行缓存起来</p><p>比较大量的计算可以使用 <code>useCallback</code>，比较小的计算可以不同，根据具体情况而定</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// hooks/useMouse.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token comment">// 获取鼠标位置</span>
<span class="token keyword">function</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> setX<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> setY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> mouseMoveHandler <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setX</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>clientX<span class="token punctuation">)</span>
    <span class="token function">setY</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>clientY<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 监听鼠标事件</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> mouseMoveHandler<span class="token punctuation">)</span>

    <span class="token comment">// 组件销毁时，一定要解绑 DOM 事件 !!! 可能出现内存泄漏问题</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> mouseMoveHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useMouse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用 hooks</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> useMouse <span class="token keyword">from</span> <span class="token string">&#39;./hooks/useMouse&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 列表页</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        App page </span><span class="token punctuation">{</span>x<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token punctuation">{</span>y<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>模拟 hooks 异步加载数据</strong></li></ol><p>外部 hooks</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// hooks/getInfo.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">function</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// Promsie 模拟请求</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span>resolve <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">useGetInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>info<span class="token punctuation">,</span> setInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>info <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token function">setInfo</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> info <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useGetInfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用 hooks</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> useGetInfo <span class="token keyword">from</span> <span class="token string">&#39;./hooks/useGetInfo&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> info <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useGetInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">App page</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>loading <span class="token operator">?</span> <span class="token string">&#39;加载中...&#39;</span> <span class="token operator">:</span> info<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-中-hooks-的命名" tabindex="-1"><a class="header-anchor" href="#react-中-hooks-的命名" aria-hidden="true">#</a> react 中 hooks 的命名</h3><p><strong>useLoad 开头</strong></p><p>通常用于 ajax 请求获取数据</p><p><strong>useGet 开头</strong></p><p>通常用于获取前端 redux 信息</p><h3 id="文件中-引入的先后顺序" tabindex="-1"><a class="header-anchor" href="#文件中-引入的先后顺序" aria-hidden="true">#</a> 文件中 引入的先后顺序</h3><p><strong>顺序</strong></p><p>第三方插件往前面放，自定义插件往后面放</p><h3 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h3><p>函数组件生命周期有三个</p><ul><li>挂载</li><li>更新</li><li>销毁</li></ul><p>函数组件 挂载阶段</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>useEffect(() =&gt; {
  console.log(&#39;挂载阶段&#39;)
}, [])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数组件 更新阶段</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const [count, setCount] = useState(0)

useEffect(() =&gt; {
  // x 变化，下面函数就会触发，首次进入 x 没有变化也会触发
  console.log(&#39;更新阶段&#39;);
}, [x])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要，只在更新阶段，执行副作用，要怎么做呢？</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const [count, setCount] = useState(0)
const [isMounted, setIsMounted] = useState(false);

useEffect(() =&gt; {
  	if (!isMounted) {
      	setIsMounted(true);
    } else {
      	// 只有 count 变化且不是首次渲染时执行
      	console.log(&#39;更新阶段&#39;);
    }
}, [count, isMounted])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数组件的 销毁阶段</p><p>下面例子的组件销毁阶段，就在于 <code>useEffect</code> 中 return 返回的函数，就是组件销毁阶段要执行的东西</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token comment">// 获取鼠标位置</span>
<span class="token keyword">function</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> setX<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> setY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> mouseMoveHandler <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setX</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>clientX<span class="token punctuation">)</span>
    <span class="token function">setY</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>clientY<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 监听鼠标事件</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> mouseMoveHandler<span class="token punctuation">)</span>

    <span class="token comment">// 组件销毁时，一定要解绑 DOM 事件 !!! 可能出现内存泄漏问题</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> mouseMoveHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useMouse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三方-hooks-的使用" tabindex="-1"><a class="header-anchor" href="#第三方-hooks-的使用" aria-hidden="true">#</a> 第三方 Hooks 的使用</h3>`,210),h={href:"https://ahooks.gitee.io/zh-CN/guide",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/streamich/react-use",target:"_blank",rel:"noopener noreferrer"},x=e(`<p><code>ahooks</code> 的使用案例，<code>useTitle</code>、<code>useMouse</code> 的使用</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useTitle<span class="token punctuation">,</span> useMouse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ahooks&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useTitle</span><span class="token punctuation">(</span><span class="token string">&#39;App page 3&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> clientX<span class="token punctuation">,</span> clientY <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 列表页</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">App page</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>clientX<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token punctuation">{</span>clientY<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hooks-使用规则" tabindex="-1"><a class="header-anchor" href="#hooks-使用规则" aria-hidden="true">#</a> Hooks 使用规则</h3><ul><li>必须用 useXxxx 格式来命名</li><li>只能在两个地方调用 Hook (组件内，其他 Hook 内)</li><li>必须保证每次的调用顺序一致 (不能放在 if for 普通函数内部)</li></ul><p><strong>为什么不能放普通函数内部？</strong></p><p>因为，普通函数没有 React 执行上下文</p><h3 id="hooks-闭包陷阱" tabindex="-1"><a class="header-anchor" href="#hooks-闭包陷阱" aria-hidden="true">#</a> Hooks 闭包陷阱</h3><ul><li>当异步函数获取 state 时，可能不是当前最新的 state</li></ul><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">alertFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// count 5 闭包</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">闭包陷阱</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">add</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>alertFn<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">alert</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">// 点击 alert 后，多次点击 add，弹窗出来的接口，不等于 count</span>
    <span class="token comment">// 也就所谓的 闭包陷阱</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决的办法，使用 <code>useRef</code>，因为它的值是引用类型，根据原值的改变而改变</p><p>原先用 <code>useState</code> 定的值是值类型，所以点击 <code>alert</code> 的时候，<code>count</code> 是 5 的话，那么弹窗的值也是 5</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> countRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    countRef<span class="token punctuation">.</span>current <span class="token operator">=</span> count
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">alertFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// alert(counr) // count 值类型</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>countRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token comment">// ref 引用类型</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">闭包陷阱</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">add</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>alertFn<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">alert</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">// 点击 alert 后，多次点击 add，弹窗出来的接口，不等于 count</span>
    <span class="token comment">// 也就所谓的 闭包陷阱</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-hook-的使用规范" tabindex="-1"><a class="header-anchor" href="#react-hook-的使用规范" aria-hidden="true">#</a> React Hook 的使用规范</h3><p><strong>React Hook 的使用限制有什么（官方规则）？</strong></p><p>为了保证 React 能正确地追踪到各个 hook 之间的状态，需要注意以下规则</p><ol><li><strong>只在最顶层使用 hook：</strong> 不可以在 判断语句、循环语句、子函数中调用 Hook</li><li><strong>只在 React 函数、自定义 Hook 中调用 Hook：</strong> 不要在普通函数中调用 Hook</li></ol><p>如果调用了会报错，这样使用会导致 React Hook 正确追踪到 Hook 之间的状态</p><p><strong>React Hook 与 普通函数有什么不同？</strong></p><p>普通函数，不涉及任何与 React 组件相关的状态管理（数据）或副作用</p><p><strong>React Hook 平时开发时需要注意什么？</strong></p><p>除了 <code>React Hooks</code> 官方提出的使用规则外，还需注意以下事项</p><ol><li><p>自定义 <code>Hook</code>，使用 <code>use</code> 开头</p></li><li><p>避免过度使用 <code>useEffect</code></p></li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// 错误的使用
import React, { useState, useEffect } from &#39;react&#39;;

const OveruseEffectExample = () =&gt; {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(&#39;&#39;);

  useEffect(() =&gt; {
    console.log(\`Count is \${count}\`);
    console.log(\`Name is \${name}\`);
  }, [count, name]);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment Count&lt;/button&gt;
      &lt;p&gt;Name: {name}&lt;/p&gt;
      &lt;input value={name} onChange={(e) =&gt; setName(e.target.value)} /&gt;
    &lt;/div&gt;
  );
};

export default OveruseEffectExample;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// 正确的使用
import React, { useState, useEffect } from &#39;react&#39;;

const CorrectUseEffectExample = () =&gt; {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(&#39;&#39;);

  useEffect(() =&gt; {
    // 只有当 count 变化时执行这个副作用
    console.log(\`Count is \${count}\`);
  }, [count]);

  useEffect(() =&gt; {
    // 只有当 name 变化时执行这个副作用
    console.log(\`Name is \${name}\`);
  }, [name]);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment Count&lt;/button&gt;
      &lt;p&gt;Name: {name}&lt;/p&gt;
      &lt;input value={name} onChange={(e) =&gt; setName(e.target.value)} /&gt;
    &lt;/div&gt;
  );
};

export default CorrectUseEffectExample;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>闭包陷阱</li></ol><p>成因</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import { useEffect, useState } from &#39;react&#39;;

function App() {

    const [count,setCount] = useState(0);

    useEffect(() =&gt; {
        setInterval(() =&gt; {
            console.log(count);
            setCount(count + 1);
        }, 1000);
    }, []);

    return &lt;div&gt;{count}&lt;/div&gt;
}

export default App;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>count</code> 并不会每秒加 1，一直是 0</p><p>闭包陷阱就是 <code>effect</code> 函数等引用了 <code>state</code>，形成了闭包，但是并没有把 <code>state</code> 加到依赖数组里，导致执行 <code>effect</code> 时用的 <code>state</code> 还是之前的</p><p>三种解决方案</p><ul><li>使用 <code>setState</code> 的函数的形式，从参数拿到上次的 <code>state</code>，这样就不会形成闭包了，或者用 <code>useReducer</code>，直接 <code>dispatch action</code>，而不是直接操作 <code>state</code>，这样也不会形成闭包</li><li>把用到的 <code>state</code> 加到依赖数组里，这样 <code>state</code> 变了就会重新跑 <code>effect</code> 函数，引用新的 <code>state</code></li><li>使用 <code>useRef</code> 保存每次渲染的值，用到的时候从 <code>ref.current</code> 取</li></ul>`,31),y={href:"https://juejin.cn/book/7294082310658326565/section/7298292751051784230#heading-0",target:"_blank",rel:"noopener noreferrer"},w=e(`<ol start="4"><li>注意清除副作用</li></ol><p>使用 <code>useEffect</code> 处理订阅事件、网络请求、定时器等副作用操作时，别忘了在 <code>effect</code> 返回函数中清理，防止可能出现的内存泄露</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { useState, useEffect } from &#39;react&#39;;

const NetworkRequestExample = () =&gt; {
  const [data, setData] = useState(null);

  useEffect(() =&gt; {
    const fetchData = async () =&gt; {
      const response = await fetch(&#39;https://api.example.com/data&#39;);
      const result = await response.json();
      setData(result);
    };

    fetchData();

    // 返回清理函数
    return () =&gt; {
      // 如果有需要，可以在这里取消正在进行的网络请求或进行其他清理操作
    };
  }, []);

  return &lt;div&gt;{data? \`Received data: \${JSON.stringify(data)}\` : &#39;Loading data...&#39;}&lt;/div&gt;;
};

export default NetworkRequestExample;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h3>`,4),C={href:"https://juejin.cn/book/7294082310658326565/section/7295617117938778149",target:"_blank",rel:"noopener noreferrer"},R=e(`<h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2><h3 id="内联样式条件判断怎么写" tabindex="-1"><a class="header-anchor" href="#内联样式条件判断怎么写" aria-hidden="true">#</a> 内联样式条件判断怎么写</h3><p>基础写法</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> isPublished <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">let</span> itemClassName <span class="token operator">=</span> <span class="token string">&#39;list-item&#39;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPublished<span class="token punctuation">)</span> itemClassName <span class="token operator">+=</span> <span class="token string">&#39; published&#39;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>itemClassName<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  )
}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用第三方插件 <code>classnames</code> 进行条件判断</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> isPublished <span class="token operator">=</span> <span class="token boolean">true</span>
  
  <span class="token keyword">const</span> itemClassName <span class="token operator">=</span> <span class="token function">classnames</span><span class="token punctuation">(</span><span class="token string">&#39;list-item&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> published<span class="token operator">:</span> isPublished <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> itemClassName <span class="token operator">=</span> <span class="token function">classnames</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;list-item&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    published<span class="token operator">:</span> isPublished<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>itemClassName<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  )
}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决-clasname-可能重复的问题" tabindex="-1"><a class="header-anchor" href="#解决-clasname-可能重复的问题" aria-hidden="true">#</a> 解决 clasName 可能重复的问题</h3><p>使用 <code>CSS Module</code> 进行解决</p><ul><li>每个 CSS 文件都当做单独的模块，命令 <code>xxx.module.css</code></li><li>为每个 <code>className</code> 增加后缀名，不让它们重复</li><li><code>Create-React-App</code> 原生支持 <code>CSS Module</code></li></ul><p>使用方法就是 将需要引入的 css 命名后缀 <code>.css</code> 改为 <code>.module.css</code></p><p>那么在构建的是时候，就会为该组件的类名等，添加前后缀来进行区别！</p><h3 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS-in-JS</h3><p>使用 js 的方式写 css</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> css <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;styled-components&#39;</span>

<span class="token comment">// Button 组件</span>
<span class="token keyword">type</span> <span class="token class-name">ButtonPropsType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  primary<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 定义属性类型</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义组件</span>
<span class="token keyword">const</span> Button <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span>props<span class="token operator">:</span> ButtonPropsType<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    props<span class="token punctuation">.</span>primary <span class="token operator">&amp;&amp;</span> <span class="token comment">// 当属性 primary 存在的时候，css 中的内容生效</span>
    css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      background: palevioletred;
      color: white;
    </span><span class="token template-punctuation string">\`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// Container 组件，定义 div 的元素居中显示</span>
<span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  text-align: center;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">style-component</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Container</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Normal Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">primary</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">primary Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Container</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[注]</strong></p><p>关于 <code>div</code> 这个语法的解释</p><p><code>div</code> 类似一个函数执行</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  text-align: center;
</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 类似函数的调用，但是返回的是一个数组，且有一些属性信息</p><h3 id="关于-flex-布局的写法" tabindex="-1"><a class="header-anchor" href="#关于-flex-布局的写法" aria-hidden="true">#</a> 关于 flex 布局的写法</h3><p>三列布局，两变固定大小，中间自适应</p><p>外层可以用 <code>display: flex</code></p><p>中间层可以用 <code>flex: auto</code></p><p>为了不让 中间 和 左右因为缩放被挤压，可以设置最小宽高 <code>min-width</code>、<code>min-height</code></p><p>三列布局 按比例划分 3份, 中间 2 份，左右各一份</p><p>可以使用中间 <code>flex: 2</code></p><p>左右使用 <code>flex: 1</code></p><h3 id="class-类有-横杠-如何写入-classname" tabindex="-1"><a class="header-anchor" href="#class-类有-横杠-如何写入-classname" aria-hidden="true">#</a> class 类有 横杠 如何写入 className</h3><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">&#39;component-wrapper&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>component<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">QuestionInput</span></span> <span class="token attr-name">placeholder</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;&#39;</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个-classname" tabindex="-1"><a class="header-anchor" href="#多个-classname" aria-hidden="true">#</a> 多个 className</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// 动态判断添加单类名
&lt;div className={detail.applyStatus == 1 ? styles.class : styles.class2 }&gt;HELLO WORLD&lt;/div&gt;
 
// 已有多类名，动态判断再添加类名
// ( 数组法)
&lt;div className{[classA,&#39;box&#39;,index===this.state.currentState?&quot;active&quot;:null].join(&#39;&#39;)}&gt;HELLO WORLD&lt;/div&gt;

// （模板字符串法）
&lt;div className={\`box\${classA}\${index===this.state.currentState?&quot;active&quot;:null}\`}&gt;HELLO WORLD&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过插件<code>classnames</code>，快速合并</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &#39;react&#39;;
import c from &#39;classnames&#39;;
 
class MyComponent extends React.Component {
    render() {
        return (
            &lt;div className={c(&#39;set-color&#39;, &#39;set-font-size&#39;)}&gt;1234567890&lt;/div&gt;
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>classNames</code> 的原理</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">classNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> classes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//一个专门存储最后类名合集的数组</span>
  	<span class="token comment">//传入参数不限制数量，自然是用到参数对象 arguments 这个东西</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> arg <span class="token operator">=</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//遍历 arguments 拿到每一项</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arg<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">//如果该项的值为 undefined、null之类的就直接跳过</span>
		<span class="token comment">//获取该项的类型</span>
        <span class="token keyword">var</span> argType <span class="token operator">=</span> <span class="token keyword">typeof</span> arg<span class="token punctuation">;</span>
  		<span class="token comment">//字符串或者数字之类的直接加入 classes 中就完事了</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>argType <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> argType <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            classes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> inner <span class="token operator">=</span> <span class="token function">classNames</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span> 
                <span class="token comment">//针对数组中的每一项都需要进行判断是否能够加入 classes 中，所以利用 递归+apply 达到数组扁平化的效果</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>inner<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//递归调用返回的不是空字符串 &#39;&#39; 的话就加入 classes</span>
                    classes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>inner<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//放入</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>argType <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//对象的情况下</span>
    		<span class="token comment">//如果自带的 toString 方法 和 Object 的一样</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arg<span class="token punctuation">.</span>toString <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//&#39;[object object]&#39;的情况</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//用 for in 遍历对象中的可枚举属性</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arg<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//如果该属性是自身的 &amp;&amp; value 为 true（或者说 可以转变为 true）</span>
                        classes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//就将 key 放入 classes 中，注意是key</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//否则就用自身自定义的 toString 方法</span>
                classes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
		<span class="token keyword">return</span> classes<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//用 join 方法将数组变为字符串，用&#39; &#39;隔开</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//用于支持各种导出方式</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> module <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// CommonJS</span>
		classNames<span class="token punctuation">.</span>default <span class="token operator">=</span> classNames<span class="token punctuation">;</span>
		module<span class="token punctuation">.</span>exports <span class="token operator">=</span> classNames<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> define<span class="token punctuation">.</span>amd <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// AMD, 通过判断是否又 define 方法以及 define.amd 	是否为 object</span>
		<span class="token comment">// register as &#39;classnames&#39;, consistent with npm package name</span>
		<span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;classnames&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> classNames<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    	<span class="token comment">//浏览器环境</span>
		window<span class="token punctuation">.</span>classNames <span class="token operator">=</span> classNames<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现步骤：</p><ol><li>创建一个空数组 <code>classes</code>，用于存储最终的类名集合。</li><li>遍历传入的参数，对于每个参数： <ul><li>如果参数是 <code>undefined</code>、<code>null</code> 或其他假值，则跳过。</li><li>如果参数是字符串或数字，则直接将其添加到 <code>classes</code> 数组中。</li><li>如果参数是数组，则递归调用 <code>classNames</code> 函数，将数组中的每个元素作为参数传入，然后将返回的类名字符串添加到 <code>classes</code> 数组中。</li><li>如果参数是对象，则遍历对象的每个属性： <ul><li>如果属性是对象自身的属性，并且属性的值是 <code>true</code>，则将属性的键（即类名）添加到 <code>classes</code> 数组中。</li><li>如果对象的 <code>toString</code> 方法不是 <code>Object.prototype.toString</code>，则使用对象的 <code>toString</code> 方法生成类名字符串，并将其添加到 <code>classes</code> 数组中。</li></ul></li></ul></li><li>使用 <code>join(&#39; &#39;)</code> 方法将 <code>classes</code> 数组中的所有类名连接成一个字符串，用空格分隔。</li><li>如果是在 Node.js 环境中，将 <code>classNames</code> 函数导出为一个模块。</li><li>如果是在浏览器环境中，将 <code>classNames</code> 函数挂载到 <code>window</code> 对象上。</li></ol><h3 id="一些特殊属性" tabindex="-1"><a class="header-anchor" href="#一些特殊属性" aria-hidden="true">#</a> 一些特殊属性</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 屏蔽鼠标行为，组件不让被点击到</span>
<span class="token selector">.component </span><span class="token punctuation">{</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 动画 暂停 与 恢复</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> rotate 20s linear infinite<span class="token punctuation">;</span>
  <span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container: hover </span><span class="token punctuation">{</span>
  <span class="token property">animation-play-state</span><span class="token punctuation">:</span> running<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><h3 id="路由跳转的三种方式" tabindex="-1"><a class="header-anchor" href="#路由跳转的三种方式" aria-hidden="true">#</a> 路由跳转的三种方式</h3><ol><li>直接通过 函数的方式 跳转</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">const</span> Home<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nav <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
       </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">nav</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">返回</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> // 返回上一级
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>通过 <code>nav</code> 进行 跳转</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">const</span> Home<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nav <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">clickHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// nav(&#39;/login?b=20&#39;)</span>
    <span class="token function">nav</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      pathname<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
      search<span class="token operator">:</span> <span class="token string">&#39;b=21&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
       </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>clickHandler<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">登录</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>通过 <code>Link</code> 插件进行 跳转</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">const</span> Home<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
       </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/register?a=10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">注册</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取参数" tabindex="-1"><a class="header-anchor" href="#获取参数" aria-hidden="true">#</a> 获取参数</h3><ol><li>获取动态路由的动态参数</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span> <span class="token comment">// 通过 useParams 获取</span>

<span class="token keyword">const</span> Edit<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Edit </span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Edit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>获取当前 <code>url</code> 的参数</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSearchParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">const</span> List<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchParams<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;keyword&#39;</span><span class="token punctuation">,</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;keyword&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> List
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>获取当前路由路径的方法</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLocation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">const</span> ManageLayout<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pathname&#39;</span><span class="token punctuation">,</span> pathname<span class="token punctuation">)</span> <span class="token comment">// /manage/list</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
      <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/manage/list&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&#39;default&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">}</span></span> <span class="token comment">// pathname.startsWith(&#39;/manage/list&#39;) 用于判断路径是匹配</span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BarsOutlined</span></span> <span class="token attr-name">rev</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">undefined</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">nav</span><span class="token punctuation">(</span><span class="token string">&#39;/manage/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
  )
}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-router的三种形式" tabindex="-1"><a class="header-anchor" href="#react-router的三种形式" aria-hidden="true">#</a> React-Router的三种形式</h3><ol><li><strong>BrowserRouter</strong>：这是最常用的路由方式，适用于大多数web应用。它使用HTML5的history API（pushState、replaceState和popstate事件）来保持UI和URL的同步。在<code>BrowserRouter</code>中，React Router将URL的路径部分作为应用的UI状态。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>HashRouter</strong>：这种路由方式使用URL的哈希部分（#后面的部分）来作为应用的状态。这种方式在很早的浏览器版本中比较常见，因为这些浏览器不支持HTML5的history API。但现在大多数情况下，我们会优先选择<code>BrowserRouter</code>。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> HashRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>MemoryRouter</strong>：这种路由方式使用内存来保存应用的状态，不与URL进行同步。这在非web环境中非常有用，例如React Native，或者在测试和非浏览器环境中。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MemoryRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，除非你有特殊的需求，否则一般推荐使用<code>BrowserRouter</code></p><h2 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> Mock</h2><h3 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h3><p>mock.js 两大功能：劫持 Ajax + 全面的 Random 能力</p><p>把 mock.js 用于 nodejs 服务端，使用 Random 能力</p><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><p>通常使用的话，主要使用另开一个服务运行 <code>mockjs</code></p><p>如果使用原项目的话，请求路径被劫持，如果这个 mock 上线了，会导致相同的线上接口返回的是 mock 数据，而无法得到真实数据</p><p>重新写一个 mock 服务花不了多少时间，能重新开一个服务就开一个服务</p><h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2><p>使用 <code>craco</code> 进行跨域代理</p><h3 id="具体使用方法" tabindex="-1"><a class="header-anchor" href="#具体使用方法" aria-hidden="true">#</a> 具体使用方法</h3><ol><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @craco/craco
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用方法、根目录下建一个 <code>craco.config.js</code> 文件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 根目录下建一个 </span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// common.js</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3001&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="restful-api" tabindex="-1"><a class="header-anchor" href="#restful-api" aria-hidden="true">#</a> Restful API</h2><h3 id="设计规范" tabindex="-1"><a class="header-anchor" href="#设计规范" aria-hidden="true">#</a> 设计规范</h3><ul><li>method 按照，对资源的操作类型，get、post、patch (或者 put 修改)、delete，进行操作</li><li>path 按照，每个路径代表某一类资源，加上 id 就代表这一类资源 <code>/api/question/:id</code></li></ul><blockquote><p>下面就 用户功能、问卷管理 的两个 Restful API 设计实例</p></blockquote><h3 id="用户功能" tabindex="-1"><a class="header-anchor" href="#用户功能" aria-hidden="true">#</a> 用户功能</h3><h4 id="获取用户信息" tabindex="-1"><a class="header-anchor" href="#获取用户信息" aria-hidden="true">#</a> 获取用户信息</h4><ul><li>method <code>get</code></li><li>path <code>/api/user/info</code></li><li>response <code>{ errno: 0, data: {...} }</code> 或 <code>{ errno: 10001, msg: &#39;xxx&#39; }</code></li></ul><h4 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册</h4><ul><li>method <code>post</code></li><li>path <code>/api/user/register</code></li><li>request body <code>{ username, password, nickname }</code></li><li>response <code>{ errno: 0 }</code></li></ul><h4 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h4><ul><li>method <code>post</code></li><li>path <code>/api/user/login</code></li><li>request body <code>{ username, password }</code></li><li>response <code>{ errno: 0, data: { token } }</code> —— <strong>JWT</strong> 使用 token</li></ul><h3 id="问卷功能" tabindex="-1"><a class="header-anchor" href="#问卷功能" aria-hidden="true">#</a> 问卷功能</h3><h4 id="创建问卷" tabindex="-1"><a class="header-anchor" href="#创建问卷" aria-hidden="true">#</a> 创建问卷</h4><ul><li>method <code>post</code></li><li>path <code>/api/question</code></li><li>request body - 无 （点击一个按钮即可创建，title 自动生成）</li><li>response <code>{ errno: 0, data: { id } }</code></li></ul><h4 id="获取单个问卷" tabindex="-1"><a class="header-anchor" href="#获取单个问卷" aria-hidden="true">#</a> 获取单个问卷</h4><ul><li>method <code>get</code></li><li>path <code>/api/question/:id</code></li><li>response <code>{ errno: 0, data: { id, title ... } }</code></li></ul><h4 id="获取问卷列表" tabindex="-1"><a class="header-anchor" href="#获取问卷列表" aria-hidden="true">#</a> 获取问卷列表</h4><ul><li>method <code>get</code></li><li>path <code>/api/question</code></li><li>response: <code>{ errno: 0, data: { list: [ ... ], total } }</code></li></ul><h4 id="更新问卷信息" tabindex="-1"><a class="header-anchor" href="#更新问卷信息" aria-hidden="true">#</a> 更新问卷信息</h4><ul><li>method <code>patch</code></li><li>path <code>/api/question/:id</code></li><li>request body <code>{ title, isStar ... }</code> （之前忘记了，现补上）</li><li>response: <code>{ errno: 0 }</code></li></ul><p>PS：删除是<code>假删除</code>，实际是更新 <code>isDeleted</code> 属性</p><h4 id="批量彻底删除问卷" tabindex="-1"><a class="header-anchor" href="#批量彻底删除问卷" aria-hidden="true">#</a> 批量彻底删除问卷</h4><ul><li>method <code>delete</code></li><li>path <code>/api/question</code></li><li>request body <code>{ ids: [ ... ] }</code></li><li>response: <code>{ errno: 0 }</code></li></ul><h4 id="复制问卷" tabindex="-1"><a class="header-anchor" href="#复制问卷" aria-hidden="true">#</a> 复制问卷</h4><ul><li>method <code>post</code></li><li>path <code>/api/question/duplicate/:id</code></li><li>response: <code>{ errno: 0, data: { id } }</code></li></ul>`,102),S={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"},q=e('<h2 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h2><h3 id="简叙" tabindex="-1"><a class="header-anchor" href="#简叙" aria-hidden="true">#</a> 简叙</h3><p>中小型网站用于，用户登录，或者说用于 用户信息验证的一种方式</p><ul><li><p>JWT (JSON Web Token)</p></li><li><p>登录成功之后，服务端返回一个 token (令牌，一段字符串)</p></li><li><p>以后每次请求都带这个 token, 以表明自己的身份</p></li></ul><h2 id="dom-操作" tabindex="-1"><a class="header-anchor" href="#dom-操作" aria-hidden="true">#</a> DOM 操作</h2><h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h3><p>滚动到底部加载</p><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><p>使用 <code>useRef</code> 进行操作</p><p>获取元素到顶部的距离 <code>getBoundingClientRect</code></p>',10),j={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect",target:"_blank",rel:"noopener noreferrer"},M=e(`<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useDebounceFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ahooks&#39;</span>

<span class="token keyword">const</span> List<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token comment">// 触发加载的函数 - 防抖</span>
  <span class="token keyword">const</span> containerRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> run<span class="token operator">:</span> tryLoadMore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDebounceFn</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elem <span class="token operator">=</span> containerRef<span class="token punctuation">.</span>current
      <span class="token keyword">if</span> <span class="token punctuation">(</span>elem <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token keyword">const</span> domRect <span class="token operator">=</span> elem<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取 底部元素到顶部的距离</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>domRect <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> bottom <span class="token punctuation">}</span> <span class="token operator">=</span> domRect
      <span class="token keyword">if</span> <span class="token punctuation">(</span>bottom <span class="token operator">&lt;=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// document.body.clientHeight 获取 body 的高度</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;tryLoadMore...&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      wait<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>

  <span class="token comment">// 当页面加载，或者 url 参数 (keyword) 变化时，触发加载</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">tryLoadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 加载第一页</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>searchParams<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>footer<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>containerRef<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">loadMore... 上划加载更多...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> List
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="createportal" tabindex="-1"><a class="header-anchor" href="#createportal" aria-hidden="true">#</a> createPortal</h2><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3><p><code>createPortal</code> 允许你将 JSX 作为 children 渲染至 DOM 的不同部分</p><p>比如我要把一个元素渲染到 body，而不是在当前dom下</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import { createPortal } from &#39;react-dom&#39;;

// ...

&lt;div&gt;
  &lt;p&gt;这个子节点被放置在父节点 div 中。&lt;/p&gt;
  {createPortal(
    &lt;p&gt;这个子节点被放置在 document body 中。&lt;/p&gt;,
    document.body
  )}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h2><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>目录结构；</p><p>.<br> |-- ThemeButton.tsx<br> |-- Toolbar.tsx<br> \`-- index.tsx</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 第一层 index.tsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> createContext<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;styled-components&#39;</span>
<span class="token keyword">import</span> Toolbar <span class="token keyword">from</span> <span class="token string">&#39;./Toolbar&#39;</span>

<span class="token keyword">const</span> themes <span class="token operator">=</span> <span class="token punctuation">{</span>
  light<span class="token operator">:</span> <span class="token punctuation">{</span>
    fore<span class="token operator">:</span> <span class="token string">&#39;#000&#39;</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">&#39;#eee&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  dark<span class="token operator">:</span> <span class="token punctuation">{</span>
    fore<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">&#39;#222&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义 ThemeContext</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ThemeContect <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span>themes<span class="token punctuation">.</span>light<span class="token punctuation">)</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>theme<span class="token punctuation">,</span> setTheme<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>themes<span class="token punctuation">.</span>light<span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">toDark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTheme</span><span class="token punctuation">(</span>themes<span class="token punctuation">.</span>dark<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemeContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Context Demo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>toDark<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">dark</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Toolbar</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ThemeContext.Provider</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 第二层 Toolbar.tsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ThemeButton <span class="token keyword">from</span> <span class="token string">&#39;./ThemeButton&#39;</span>

<span class="token keyword">const</span> Toolbar<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Toolbar</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemeButton</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Toolbar

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 第三层 ThemeButton.tsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;styled-components&#39;</span>

<span class="token keyword">const</span> ThemeButton<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span>

  <span class="token comment">// 根据 theme 设置 button 样式</span>
  <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> theme<span class="token punctuation">.</span>fore<span class="token punctuation">,</span> background<span class="token operator">:</span> theme<span class="token punctuation">.</span>background <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">theme button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ThemeButton
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[注]</strong></p><ul><li>类似于 Vue 的 provide/inject</li><li>可跨层级传递，而不像 props 层层传递</li><li>场景：切换主题、切换语言 (场景比较单一)</li></ul><h2 id="zustand" tabindex="-1"><a class="header-anchor" href="#zustand" aria-hidden="true">#</a> Zustand</h2><p>redux 的使用过于繁琐，可以使用 Zustand 进行代替</p><p>【注】Zustand 祖斯坦德</p><h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// 计数器 Demo 快速上手
import React from &quot;react&quot;;
import { create } from &quot;zustand&quot;;

// create（）：存在三个参数，第一个参数为函数，第二个参数为布尔值
// 第一个参数：(set、get、api)=&gt;{…}
// 第二个参数：true/false 
// 若第二个参数不传或者传false时，则调用修改状态的方法后得到的新状态将会和create方法原来的返回值进行融合；
// 若第二个参数传true时，则调用修改状态的方法后得到的新状态将会直接覆盖create方法原来的返回值。

const useStore = create(set =&gt; ({
  count: 0, // 初始值
  setCount: (num: number) =&gt; set({ count: num }), // 设置值函数
  inc: () =&gt; set((state) =&gt; ({ count: state.count + 1 })), // 计算函数
}));

export default function Demo() {
  // 在这里引入所需状态
  const { count, setCount, inc } = useStore();

  return (
    &lt;div&gt;
      {count}
      &lt;input
        onChange={(event) =&gt; {
          setCount(Number(event.target.value));
        }}
      &gt;&lt;/input&gt;
      &lt;button onClick={inc}&gt;增加&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h3><p>可以直接使用 <code>persist</code> 函数将状态保存到 <code>localStorage</code> 中</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// store.js
import create from &#39;zustand&#39;;
import { persist } from &#39;zustand-persist&#39;;

const initialState = {
  count: 0,
  increment: () =&gt; {},
  decrement: () =&gt; {},
};

const useStore = create(
  persist(
    (set) =&gt; ({
      ...initialState,
      increment: () =&gt; set((state) =&gt; ({ count: state.count + 1 })),
      decrement: () =&gt; set((state) =&gt; ({ count: state.count - 1 })),
    }),
    {
      name: &#39;my-store&#39;, // 唯一名称
      getStorage: () =&gt; localStorage, // 可选，默认使用 localStorage
    }
  )
);

export default useStore;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 第三方插件</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createBrowserRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token comment">// 自定义插件 (hook)</span>
<span class="token keyword">import</span> MainLayout <span class="token keyword">from</span> <span class="token string">&#39;../layouts/MainLayout&#39;</span>
<span class="token keyword">import</span> ManageLayout <span class="token keyword">from</span> <span class="token string">&#39;../layouts/ManageLayout&#39;</span>
<span class="token keyword">import</span> QuestionLayout <span class="token keyword">from</span> <span class="token string">&#39;../layouts/QuestionLayout&#39;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;../pages/Home&#39;</span>
<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">&#39;../pages/Login&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><h3 id="_1-vdom、fiber、diff" tabindex="-1"><a class="header-anchor" href="#_1-vdom、fiber、diff" aria-hidden="true">#</a> 1. VDOM、Fiber、Diff</h3><h4 id="vdom" tabindex="-1"><a class="header-anchor" href="#vdom" aria-hidden="true">#</a> VDOM</h4><p>**性能优化：**虚拟 <code>DOM</code> 的优势，性能优化主要体现 <code>diff</code> 算法的节点复用上，提升的也没那么多实际上</p><p>**跨平台性：**虚拟 <code>DOM</code> 是一个与平台无关的概念，可以渲染成浏览器的 <code>DOM</code>，像 <code>React Native</code> 就可以渲染成 <code>APP</code></p><h4 id="fiber" tabindex="-1"><a class="header-anchor" href="#fiber" aria-hidden="true">#</a> Fiber</h4><p>**目的：**为了解决 <code>React15</code> 在大组件更新时产生的卡顿现象，将同步无法中断更新，重构为异步可中断更新</p><p><strong>实现目标：</strong></p><ol><li>可中断渲染</li><li>优先级调度</li><li>双缓存树</li><li>任务切片</li></ol><h4 id="diff" tabindex="-1"><a class="header-anchor" href="#diff" aria-hidden="true">#</a> Diff</h4><p><strong>React 的 diff 过程</strong></p><ol><li>**同一层级的比较：**React 只会在同一层级的节点之间进行比较，如果在不同层级发现差异，React 会直接销毁旧的节点及其子节点，然后创建并插入新的节点及其子节点</li><li>**元素类型的比较：**React 首先查看两个元素的类型 <ul><li>如果元素类型不同，React 会销毁旧的元素及其子元素，并创建并插入新的元素及其子元素。</li><li>如果元素类型相同，React 会保留 DOM 节点并比较两个元素的属性，然后根据需要更新属性。</li></ul></li><li>**组件类型的比较：**如果元素是用户自定义的组件，React 会比较它们的类型： <ul><li>如果组件类型不同，进行类似元素类型不同的处理。</li><li>如果组件类型相同，组件实例会被保留，React 会调用其 <code>render</code> 方法获取新的子元素，然后再对子元素进行 diff。</li></ul></li><li>**列表元素的比较：**对于列表元素，React 无法知道列表中的哪些元素被添加、移动或删除，因此默认情况下，React 会逐个地比较列表中的每个子元素。为了优化这个过程，我们可以使用 key 属性来帮助 React 识别哪些元素可以被保留</li></ol><p>总的来说，React 的 diff 算法通过三种策略（同层比较、类型比较和 key 属性）来降低比较的复杂度，从而在更新 DOM 时保持高性能</p><p>【扩展】</p>`,39),E={href:"https://juejin.cn/post/7412539585823981608#heading-3",target:"_blank",rel:"noopener noreferrer"},F=e('<h3 id="_2-单向数据流、双向数据绑定、响应式更新的区别" tabindex="-1"><a class="header-anchor" href="#_2-单向数据流、双向数据绑定、响应式更新的区别" aria-hidden="true">#</a> 2. 单向数据流、双向数据绑定、响应式更新的区别</h3><figure><img src="'+u+`" alt="image-20241022093841621" tabindex="0" loading="lazy"><figcaption>image-20241022093841621</figcaption></figure><ul><li><strong>「双向数据绑定」<strong>描述的是</strong>「组件内逻辑与视图的关系」</strong></li><li><strong>「单向数据流」<strong>描述的是</strong>「组件之间的关系」</strong></li><li><strong>「响应式更新」<strong>描述的是</strong>「状态与UI之间的关系」</strong></li></ul><p>【注】</p><p>**单向数据流：**数据的流动是单向的，从父组件流向子组件</p><p><strong>双向数据绑定：<strong>react 并没有提供像 <code>v-model</code> 这样的双向绑定语法糖，但是可以采用</strong>受控组件</strong>进行实现类似的功能</p><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h2><p>因为<strong>函数组件</strong>没有<strong>类组件</strong>的相关错误边界的概念</p><p>因此<strong>函数组件</strong>要处理错误问题可以采用下面三种方式</p><h3 id="使用-try-catch-块" tabindex="-1"><a class="header-anchor" href="#使用-try-catch-块" aria-hidden="true">#</a> 使用 try ... catch 块</h3><p>在函数组件内部，如果有异步操作或者可能抛出错误的代码，可以使用<code>try...catch</code>块来捕获错误并进行处理。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &#39;react&#39;;

const MyFunctionComponent = () =&gt; {
  try {
    // 可能会抛出错误的代码
    const result = someFunctionThatMightThrowError();
    return &lt;div&gt;{result}&lt;/div&gt;;
  } catch (error) {
    // 处理错误
    return &lt;div&gt;An error occurred: {error.message}&lt;/div&gt;;
  }
};

export default MyFunctionComponent;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用错误边界组件包裹函数组件" tabindex="-1"><a class="header-anchor" href="#使用错误边界组件包裹函数组件" aria-hidden="true">#</a> 使用错误边界组件包裹函数组件</h3><p>可以创建一个错误边界组件，将函数组件包裹在其中。错误边界组件可以捕获子组件抛出的错误，并显示一个备用的 UI</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { Component } from &#39;react&#39;;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(&#39;Error caught by error boundary:&#39;, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return &lt;div&gt;Something went wrong.&lt;/div&gt;;
    }
    return this.props.children;
  }
}

const MyFunctionComponent = () =&gt; {
  // 函数组件的正常内容
  return &lt;div&gt;Some content&lt;/div&gt;;
};

const WrappedComponent = () =&gt; (
  &lt;ErrorBoundary&gt;
    &lt;MyFunctionComponent /&gt;
  &lt;/ErrorBoundary&gt;
);

export default WrappedComponent;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用全局错误处理机制" tabindex="-1"><a class="header-anchor" href="#使用全局错误处理机制" aria-hidden="true">#</a> 使用全局错误处理机制</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>window.onerror = (message, source, lineno, colno, error) =&gt; {
  console.error(&#39;Global error:&#39;, error);
};

const MyFunctionComponent = () =&gt; {
  // 函数组件的正常内容
  return &lt;div&gt;Some content&lt;/div&gt;;
};

export default MyFunctionComponent;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-error-boundary" tabindex="-1"><a class="header-anchor" href="#react-error-boundary" aria-hidden="true">#</a> react-error-boundary</h3><p>其他几种方式都是比较麻烦的，第三方插件提供的错误处理，是采用 React Hooks 和函数组件</p><p>与当前 React 开发的趋势更加一致。它使用了一个简单的组件叫做 ErrorBoundary，可以用它来包裹潜在的容易出错的代码</p>`,20),T={href:"https://illacloud.com/zh/blog/react-error-boundary/#%E4%BD%BF%E7%94%A8-react-error-boundary-%E5%BA%93",target:"_blank",rel:"noopener noreferrer"},_=e(`<h2 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h2><h3 id="如何防范-xss-攻击-跨站脚本攻击" tabindex="-1"><a class="header-anchor" href="#如何防范-xss-攻击-跨站脚本攻击" aria-hidden="true">#</a> 如何防范 XSS 攻击（跨站脚本攻击）</h3><p>React对于XSS（跨站脚本攻击）有内置的防御机制。默认情况下，React在插入数据到DOM前会对所有的内容进行转义，这意味着如果你使用JSX来插入用户输入的内容，React会确保这些内容在插入到页面前被正确的转义，从而避免XSS攻击。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;div dangerouslySetInnerHTML={{__html: userInput}} /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>总的来说，React的默认行为可以防止大部分的XSS攻击，但是我们仍然需要对特殊情况（如使用<code>dangerouslySetInnerHTML</code>）保持警惕。</p>`,5);function L(N,H){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,k,n("p",null,[n("a",v,[s("React基础"),t(a)])]),m,n("p",null,[n("a",b,[s("TypeScript 转 JavaScript 在线工具"),t(a)])]),g,n("ul",null,[n("li",null,[s("国内流行 "),n("a",h,[s("ahooks"),t(a)])]),n("li",null,[s("国外流行 "),n("a",f,[s("React Hooks"),t(a)])])]),x,n("p",null,[n("a",y,[s("Hook 的闭包陷阱的成因和解决方案"),t(a)])]),w,n("p",null,[n("a",C,[s("一网打尽常见 Hook"),t(a)])]),R,n("p",null,[n("a",S,[s("HTTP 响应状态码 参考"),t(a)])]),q,n("p",null,[n("a",j,[s("Element.getBoundingClientRect)"),t(a)])]),M,n("p",null,[n("a",E,[s("React第六章(实现vdom，fiber，diff)虚拟DOM 小满zs"),t(a)])]),F,n("p",null,[n("a",T,[s("React error boundary | React 错误处理方式"),t(a)])]),_])}const A=p(d,[["render",L],["__file","2025前端最新面试题-框架篇react.html.vue"]]);export{A as default};
