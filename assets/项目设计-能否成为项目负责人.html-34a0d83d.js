import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-db054a83.js";const p="/Lin-Note-v3/assets/image-20230128103802912-1675344115031-46.6fc72605-02886057.png",e="/Lin-Note-v3/assets/image-20230128104055986-1675344116924-49.ffdb11e7-9fbc677f.png",o="/Lin-Note-v3/assets/image-20230128110359784-1675344120178-52.14db9118-e2fe1b8e.png",l={},i=t(`<h1 id="项目设计-能否成为项目负责人" tabindex="-1"><a class="header-anchor" href="#项目设计-能否成为项目负责人" aria-hidden="true">#</a> 项目设计-能否成为项目负责人</h1><h2 id="_1-如何设计一个前端统计-sdk-分析功能范围" tabindex="-1"><a class="header-anchor" href="#_1-如何设计一个前端统计-sdk-分析功能范围" aria-hidden="true">#</a> 1. 如何设计一个前端统计 SDK - 分析功能范围</h2><p>前端统计的范围</p><ul><li>访问量 PV</li><li>自定义事件 (如 某个按钮的点击量, 分享按钮)</li><li>性能, 错误</li></ul><p>--- 前端统计 SDK ---</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> <span class="token constant">PV_URL_SET</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Mystatistic</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>productId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>productId <span class="token operator">=</span> productId
        
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initPerformance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 性能统计</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 错误统计</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 发送统计数据</span>
    <span class="token function">send</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        params<span class="token punctuation">.</span>productId <span class="token operator">=</span> productId
        
        <span class="token keyword">const</span> paramArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> val <span class="token operator">=</span> params<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            paramArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">const</span> newUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>paramArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token comment">// url?a=10&amp;b=20</span>
        
        <span class="token comment">// 用 &lt;img&gt; 发送: 1. 可跨域 2. 兼容性非常好</span>
        <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>
        img<span class="token punctuation">.</span>src <span class="token operator">=</span> newUrl <span class="token comment">// get   </span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 初始化性能统计</span>
    <span class="token function">initPerformance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;yyy&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> performance<span class="token punctuation">.</span>timing<span class="token punctuation">)</span>
        <span class="token comment">// 统计的时候一定要给最原始的、最完整的结果, 原始数据</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 初始化错误监控</span>
    <span class="token function">initError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 监听 JS 错误</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> event <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> error<span class="token punctuation">.</span> lineno<span class="token punctuation">,</span> colno <span class="token punctuation">}</span> <span class="token operator">=</span> event
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> <span class="token punctuation">{</span> lineno<span class="token punctuation">,</span> colno <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// promise 未 catch 住的报错</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;unhandledrejection&#39;</span><span class="token punctuation">,</span> event <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;unhandlerejection&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">pv</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 页面流量统计 (可以看做一个特殊的 event)</span>
        <span class="token keyword">const</span> herf <span class="token operator">=</span> location<span class="token punctuation">.</span>href
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">PV_URL_SET</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token comment">// 不重复发送 pv</span>
        
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">event</span><span class="token punctuation">(</span><span class="token string">&#39;pv&#39;</span><span class="token punctuation">)</span>
        <span class="token constant">PV_URL_SET</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">event</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span> <span class="token comment">// 自定义事件统计 server API</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>key<span class="token punctuation">,</span>val<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> info <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;zzz&#39;</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> stack <span class="token punctuation">}</span> <span class="token operator">=</span> err <span class="token comment">// message 错误信息, stack 错误的详细信息</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> stack<span class="token punctuation">,</span> <span class="token operator">...</span>info <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用这个 SDK</span>
<span class="token comment">// const s = new MyStatistic(&#39;a1&#39;)</span>
<span class="token comment">// s.pv() // SPA 路由切换 就是一次 PV</span>
<span class="token comment">// s.event(&#39;vip&#39;, &#39;ok&#39;) </span>
<span class="token comment">// try {</span>
    
<span class="token comment">// } catch(ex) {</span>
<span class="token comment">//     s.error(ex, {})</span>
<span class="token comment">// }</span>

<span class="token comment">// Vue</span>
<span class="token comment">// React</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-sourcemap-有何作用-如何配置" tabindex="-1"><a class="header-anchor" href="#_2-sourcemap-有何作用-如何配置" aria-hidden="true">#</a> 2. sourcemap 有何作用, 如何配置</h2><p>sourcemap 的作用</p><ul><li>JS 上线时要压缩、混淆</li><li>线上的 JS 报错信息, 将无法识别行、列</li><li>sourcemap 即可解决这个问题 (将线上的报错的行列信息,转换为源代码报错行列信息)</li></ul><p>推荐</p><ul><li>开发环境 - 通常就不压缩</li><li>线上环境 - source-map, 无</li></ul><p>重点</p><ul><li>开源项目, 也要开源 sourcemap</li><li>非开源项目, 不要泄漏 sourcemap !!!</li><li>了解 sourcemap 作用和配置即可, 编译原理不必深究</li></ul><h2 id="_3-何时用-spa-何时用-mpa" tabindex="-1"><a class="header-anchor" href="#_3-何时用-spa-何时用-mpa" aria-hidden="true">#</a> 3. 何时用 SPA, 何时用 MPA</h2><p>名词解释</p><ul><li><p>SPA - Single - page Application 单页面应用</p></li><li><p>MPA - Multi - page Application 多页面应用</p></li><li><p>默认情况下, Vue React 都是 SPA</p></li></ul><p>SPA 特点</p><ul><li>功能较多, 一个页面展示不完</li><li>以操作为主, 非展示为主</li><li>适合一个综合 Web 应用</li></ul><p>SPA 场景</p><ul><li>大型后台管理系统, 如阿里云的 console</li><li>知识库, 如语雀、石墨文档</li><li>比较复杂的 WebApp、如 外卖 H5</li></ul><p>MPA 特点</p><ul><li>功能较少, 一个页面展示的完</li><li>以展示为主, 操作较少</li><li>适合一个孤立的页面</li></ul><p>MPA 场景</p><ul><li>分享页, 如腾讯文档分享出去</li><li>新闻详情页, 如新闻 App 的详情页, 微信公众号发布的页面</li></ul><h2 id="_4-技术-与-怎么做" tabindex="-1"><a class="header-anchor" href="#_4-技术-与-怎么做" aria-hidden="true">#</a> 4. 技术 与 怎么做？</h2><p>在做的过程中要以 产品、用户、需求的角度去做, 不要单从技术出发</p><h2 id="_5-设计一个-h5-编辑器的数据模型和核心功能" tabindex="-1"><a class="header-anchor" href="#_5-设计一个-h5-编辑器的数据模型和核心功能" aria-hidden="true">#</a> 5. 设计一个 H5 编辑器的数据模型和核心功能</h2><p>使用 Vue + Vuex 开发 H5 编辑器</p><ul><li>点击保存按钮, 提交给服务端的数据格式怎样设计？</li><li>如何保证画布和属性面板的信息同步？</li><li>如果再扩展一个 “图层” 面板, Vuex 如何设计数据？</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 点击保存按钮, 提交给服务端的数据格式怎样设计？</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;标题&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">setting</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* 其他扩展信息：多语言, 微信分享的配置, 其他*/</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* 当前页面的属性设置, 背景 */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// components 有序, 数组</span>
            
            <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;x1&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;文本1&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;16px&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* 其他属性 */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;文本1&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&#39;x3&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;图片1&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;iamge&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;xxx.png&#39;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 如何保证画布和属性面板的信息同步？</span>
    <span class="token comment">// 用于记录当前选中的组件, 记录 id 即可</span>
    <span class="token literal-property property">activeComponentId</span><span class="token operator">:</span> <span class="token string">&#39;x3&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果再扩展一个 “图层” 面板, Vuex 如何设计数据？</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// Vue computed</span>
    <span class="token function">layers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        store<span class="token punctuation">.</span>page<span class="token punctuation">.</span>components<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> c<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> c<span class="token punctuation">.</span>name
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结</p><ul><li>组件有序结构, 参考 vnode 格式</li><li>通过 id 对应选中的组件, 即可使用 Vuex 同步数据</li><li>图层使用 Vuex getter, 而非独立的数据</li></ul><p>重点</p><ul><li>系统的数据结构设计, 至关重要, 比优化算法更重要</li><li>要尽量参考现有标准, 而非自造标准 (这需要知识广度)</li><li>要看整体设计, 抓核心问题, 而非纠细节</li></ul><h2 id="_6-设计一个-用户-权限-模型" tabindex="-1"><a class="header-anchor" href="#_6-设计一个-用户-权限-模型" aria-hidden="true">#</a> 6. 设计一个 用户-权限 模型</h2><p>例如一个博客管理后台</p><ul><li>普通会员: 查看博客, 审核博客, 下架博客 (只是隐藏, 不是删除)</li><li>管理员: 普通用户权限 + 修改博客, 删除博客</li><li>超级管理员: 管理员角色 + 添加、删除用户, 绑定用户和角色</li></ul><p>RBAC - Role-based access control (基于角色的访问控制)</p><p>RBAC - 三个模型, 两个关系</p><figure><img src="`+p+'" alt="image-20230128103802912" tabindex="0" loading="lazy"><figcaption>image-20230128103802912</figcaption></figure><p>RBAC 举例</p><figure><img src="'+e+'" alt="image-20230128104055986" tabindex="0" loading="lazy"><figcaption>image-20230128104055986</figcaption></figure><p>功能模块</p><ul><li>用户管理: 增删改查, 绑定角色</li><li>角色管理: 增删改查, 绑定权限</li><li>权限管理: 增删改查</li></ul><p>重点</p><ul><li>RBAC 模型</li><li>尽量去参考现有标准, 谨慎创新</li><li>“设计” 就是 数据模型 (关系) + 如何操作数据 (功能)</li></ul><h2 id="_7-hybrid-模板是如何更新的" tabindex="-1"><a class="header-anchor" href="#_7-hybrid-模板是如何更新的" aria-hidden="true">#</a> 7. Hybrid 模板是如何更新的？</h2><p>Hybrid 的运作流程</p><figure><img src="'+o+`" alt="image-20230128110359784" tabindex="0" loading="lazy"><figcaption>image-20230128110359784</figcaption></figure><p>APP 何时下载新版本</p><ul><li>App 启动时检查、下载</li><li>实时 (每隔 5min) 检查、下载</li></ul><p>延迟使用</p><ul><li>立即下载、使用会影响性能 (下载需要时间, 网络环境不同)</li><li>检查到新版本, 先在后台下载。此时先用着老版本</li><li>待新版本下载完成, 再替换为新版本, 开始使用</li></ul><p>总结</p><ul><li>Hybrid 运作流程</li><li>模板的延迟使用</li></ul><h2 id="_8-如果你是前端技术负责人-将如何做技术选型" tabindex="-1"><a class="header-anchor" href="#_8-如果你是前端技术负责人-将如何做技术选型" aria-hidden="true">#</a> 8. 如果你是前端技术负责人, 将如何做技术选型</h2><p>技术选型, 选什么</p><ul><li>前端框架 (Vue React Nuxt.js Next.js 或者 nodejs 框架)</li><li>语言 (Javascript 或 Typescript)</li><li>其他 (构建工具、CI/CD 等)</li></ul><p>技术选型的依据</p><ul><li>社区是否足够成熟</li><li>公司是否已有经验积累 (选择公司大多数人会的, 方便维护)</li><li>团队成员的学习成本</li></ul><p>要全面考虑各种成本</p><ul><li>学习成本</li><li>管理成本 (如用 TS 遍地 any 怎么办)</li><li>运维成本</li></ul><p>重点</p><ul><li>初期选型是关键, 所谓: 一将无能, 累死三军</li><li>技术选型能很好的体验一个人的技术 &quot;修养&quot;</li><li>要站在团队的角度, 而非个人的角度</li></ul><p>扩展：技术没有好坏之分, 只为产出</p><h2 id="_9-开发一个-h5-抽奖页-需要后端提供哪些接口" tabindex="-1"><a class="header-anchor" href="#_9-开发一个-h5-抽奖页-需要后端提供哪些接口" aria-hidden="true">#</a> 9. 开发一个 H5 抽奖页, 需要后端提供哪些接口？</h2><p>一般答案</p><ul><li>抽奖接口</li><li>用户信息接口 (少部分人)</li><li>是否已经抽奖 (极少部分人)</li></ul><p>答案</p><ul><li>登录, 获取用户信息, 用户是否已抽奖</li><li>抽奖接口</li><li>统计接口, 微信 JSSDK 信息 (需要和 PM 确定)</li></ul><p>重点</p><ul><li>让页面动起来, 分析业务流程</li><li>技术人员要去熟悉业务, 技术永远是为业务服务的</li></ul><p>扩展: PM (产品经理)、PD (设计师)</p><h2 id="_10-设计实现一个-h5-图片懒加载-sdk" tabindex="-1"><a class="header-anchor" href="#_10-设计实现一个-h5-图片懒加载-sdk" aria-hidden="true">#</a> 10. 设计实现一个 H5 图片懒加载 SDK</h2><p>分析</p><ul><li>定义 &lt; img src=loading.png data-src=xxx.png / &gt;</li><li>页面滚动, 图片露出时, 将 data-src 赋值给 src</li><li>滚动要节流</li></ul><p>获取图片定位</p><ul><li>元素的位置 elem.getBoundingClientRect()</li><li>图片 top 和 window.innerHeight</li></ul><p>--- 图片懒加载 SDK ---</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>新闻标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./img/loading.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./img/anima16.webp<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bottcdn.net/ajax/.../lodash.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">mapImagesAndTryLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">const</span> images <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;img[data-src]&#39;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>images<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    
    	images<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">img</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> rect <span class="token operator">=</span> img<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>rect<span class="token punctuation">.</span>top <span class="token operator">&lt;</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 图片从浏览器视图最下面露出</span>
                <span class="token comment">// console.info(&#39;loading img&#39;, img.dataset.src)</span>
                img<span class="token punctuation">.</span>src <span class="token operator">=</span> img<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src
                img<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-src&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 移除 data-src 属性, 为了下次执行范围更小</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

	window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> _<span class="token punctuation">.</span><span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">mapImagesAndTryLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token function">mapImagesAndTryLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,80),c=[i];function u(r,k){return s(),a("div",null,c)}const m=n(l,[["render",u],["__file","项目设计-能否成为项目负责人.html.vue"]]);export{m as default};
