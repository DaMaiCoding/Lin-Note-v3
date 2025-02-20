import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c,a as s,b as n,d as o,e as a}from"./app-4bc45b34.js";const p="/DaMaiCoding-Note/assets/image-20230825134605219-f8623218.png",d="/DaMaiCoding-Note/assets/image-20230825134700839-35452faa.png",r="/DaMaiCoding-Note/assets/image-20230825135146365-f11f33db.png",u="/DaMaiCoding-Note/assets/image-20230825135353807-92ebb28c.png",v={},m=a(`<h1 id="npm-管理插件" tabindex="-1"><a class="header-anchor" href="#npm-管理插件" aria-hidden="true">#</a> npm-管理插件</h1><h2 id="node-版本管理插件" tabindex="-1"><a class="header-anchor" href="#node-版本管理插件" aria-hidden="true">#</a> node 版本管理插件</h2><p>nvm 相关命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看已经安装的版本</span>
nvm list 

<span class="token comment"># 安装最新版本 nvm</span>
nvm <span class="token function">install</span> 

<span class="token comment"># 切换使用指定的版本node</span>
nvm use

<span class="token comment"># 下载版本号为14.16.1的node</span>
nvm <span class="token function">install</span> <span class="token number">14.16</span>.1 

<span class="token comment"># 卸载版本号为14.16.1的node</span>
nvm uninstall <span class="token number">14.16</span>.1

<span class="token comment"># 查看 帮助</span>
nvm <span class="token parameter variable">--help</span>

<span class="token comment"># 获取所有可使用版本信息</span>
nvm list available
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>nvm 低版本 node 下载</strong></p>`,5),b={href:"https://nodejs.org/en/download/releases",target:"_blank",rel:"noopener noreferrer"},k=a('<ol><li>比如下载 <code>v14</code> 版本的</li></ol><figure><img src="'+p+'" alt="image-20230825134605219" tabindex="0" loading="lazy"><figcaption>image-20230825134605219</figcaption></figure><ol start="2"><li>选择对应系统的文件下载，我的是 window</li></ol><figure><img src="'+d+`" alt="image-20230825134700839" tabindex="0" loading="lazy"><figcaption>image-20230825134700839</figcaption></figure><ol start="3"><li>查找 nvm 的 node 包存放目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm root
<span class="token comment"># 运行结果：Current Root: C:\\Users\\Administrator\\AppData\\Roaming\\nvm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>进入目录 <code>C:\\Users\\Administrator\\AppData\\Roaming\\nvm</code>，将安装包进行解压，并修改名字为当前 node 对应版本命 <code>v14.21.3</code></li></ol><figure><img src="`+r+'" alt="image-20230825135146365" tabindex="0" loading="lazy"><figcaption>image-20230825135146365</figcaption></figure><p><strong>[注意]</strong></p><p>版本包<code>v14.21.3</code> 里面是这样的</p><figure><img src="'+u+`" alt="image-20230825135353807" tabindex="0" loading="lazy"><figcaption>image-20230825135353807</figcaption></figure><h2 id="依赖包-管理工具" tabindex="-1"><a class="header-anchor" href="#依赖包-管理工具" aria-hidden="true">#</a> 依赖包 管理工具</h2><p>ncu: npm-check-updates</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> npm-check-updates

<span class="token comment"># 检查更新</span>
ncu

<span class="token comment"># 升级packjson.json</span>
ncu <span class="token parameter variable">-u</span>

<span class="token comment"># 安装</span>
<span class="token function">npm</span> isntall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装指定版本插件" tabindex="-1"><a class="header-anchor" href="#安装指定版本插件" aria-hidden="true">#</a> 安装指定版本插件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 直接在插件名后面加版本号</span>
<span class="token function">npm</span> <span class="token function">add</span> vue-i18n@8.14.1 <span class="token parameter variable">-S</span>

<span class="token comment"># 直接修改 package.json 中插件的版本号，在重新下载插件</span>
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单元测试插件" tabindex="-1"><a class="header-anchor" href="#单元测试插件" aria-hidden="true">#</a> 单元测试插件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> jest --save-dev

<span class="token comment"># 测试</span>
<span class="token function">npm</span> <span class="token builtin class-name">test</span> src/test.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 测试代码</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> flattern <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./array-flatten&#39;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;数组扁平化&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;空数组&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">flatten1</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简易服务器插件-开发时使用" tabindex="-1"><a class="header-anchor" href="#简易服务器插件-开发时使用" aria-hidden="true">#</a> 简易服务器插件 (开发时使用)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev lite-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json 中配置</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lite-server&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行 服务代码</span>
<span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rullup-热更新插件" tabindex="-1"><a class="header-anchor" href="#rullup-热更新插件" aria-hidden="true">#</a> Rullup 热更新插件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> rollup-plugin-livereload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// rollup.config.js 中配置</span>
import livereload from <span class="token string">&quot;rollup-plugin-livereload&quot;</span>; <span class="token comment">// 热更新插件</span>
export default <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    livereload()
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码启动后, 就自动有热更新了</p><h2 id="rullup-代码压缩插件" tabindex="-1"><a class="header-anchor" href="#rullup-代码压缩插件" aria-hidden="true">#</a> Rullup 代码压缩插件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> rollup-plugin-terser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// rollup.config.js 中配置</span>
import <span class="token punctuation">{</span> terser <span class="token punctuation">}</span> from <span class="token string">&quot;rollup-plugin-terser&quot;</span>;
const isDev = () =&gt; <span class="token punctuation">{</span>
  return p<wbr>rocess.env.NODE_ENV === <span class="token string">&quot;development&quot;</span>;
<span class="token punctuation">}</span>;
export default <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    terser(<span class="token punctuation">{</span>
      compress<span class="token operator">:</span> <span class="token punctuation">{</span>
        drop_console<span class="token operator">:</span> !isDev()<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>)<span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 <code>sourceMap</code> 可以让代码不混乱, 能找到原文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源管理工具" tabindex="-1"><a class="header-anchor" href="#源管理工具" aria-hidden="true">#</a> 源管理工具</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> i <span class="token parameter variable">-g</span> nrm

<span class="token comment"># 使用</span>
nrm use taobao

<span class="token comment"># 查看源列表</span>
nrm <span class="token function">ls</span>

<span class="token comment"># 查看当前 源</span>
<span class="token function">npm</span> config get registery
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找-nvm-安装目录" tabindex="-1"><a class="header-anchor" href="#查找-nvm-安装目录" aria-hidden="true">#</a> 查找 nvm 安装目录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36);function g(h,f){const e=l("ExternalLinkIcon");return t(),c("div",null,[m,s("p",null,[n("如果可使用版本列表没有，你需要的版本，可以去 "),s("a",b,[n("node低版本库"),o(e)]),n(" 下载")]),k])}const j=i(v,[["render",g],["__file","npm-管理插件.html.vue"]]);export{j as default};
