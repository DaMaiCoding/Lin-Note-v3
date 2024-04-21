import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-fd3cbc51.js";const o="/Lin-Note-v3/assets/image-20231204150735380-5e30df3d.png",t="/Lin-Note-v3/assets/image-20231204152650467-8a66c687.png",p="/Lin-Note-v3/assets/image-20231204152323587-40438d2b.png",i={},c=e(`<h1 id="uniapp-微信小程序分包" tabindex="-1"><a class="header-anchor" href="#uniapp-微信小程序分包" aria-hidden="true">#</a> uniapp-微信小程序分包</h1><h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2><p>因为 微信小程序上传有 大小限制，需要将代码包进行分包</p><h2 id="分包步骤" tabindex="-1"><a class="header-anchor" href="#分包步骤" aria-hidden="true">#</a> 分包步骤</h2><ol><li>开启分包优化</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;mp-weixin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;optimization&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;subPackages&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[注意]</strong></p><p>只支持 mp-weixin、mp-qq、mp-baidu 的分包优化</p><p>分包的核心，分包<code>可以</code>使用 主包资源，主包<code>不可以</code>使用 分包资源</p><ol start="2"><li>新建分包文件夹，<code>pagesA</code>（可以是任意名称），当然啦，可以建立多个分包，也即是多建几个类似的文件夹</li></ol><figure><img src="`+o+'" alt="image-20231204150735380" tabindex="0" loading="lazy"><figcaption>image-20231204150735380</figcaption></figure><ol start="3"><li>将需要分包的页面，放在 <code>pagesA</code> 中，并修改 pages.json 文件 ( <code>tabBar</code> 相关页面不能分包，得在主包中)</li></ol><p>例子：我们把 <code>modifyInformation</code> 放入 <code>pagesA</code> 中</p><figure><img src="'+t+`" alt="image-20231204152650467" tabindex="0" loading="lazy"><figcaption>image-20231204152650467</figcaption></figure><p>接下来，就是修改 <code>modifyInformation</code> 在 <code>pages.json</code> 中的路径了</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// pages 中的路径</span>
<span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/modifyInformation/modifyInformation&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修改信息&quot;</span>
        <span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// 将上面 pages 中的路径，移动到 subPackages 对应分包下的 pages 中</span>
<span class="token property">&quot;subPackages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pagesA&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 分包的那个文件夹名称</span>
      <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;modifyInformation/modifyInformation&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 注意与 上面 pages 的路径做对比 (少了 根路径 pages/) </span>
          <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修改信息&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后呢，看看其他页面有没有跳转链接，跳到 <code>modifyInformation</code> 页面的</p><p>有的话，就得把路径修改下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 原有</span>
uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/pages/modifyInformation/modifyInformation&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 应改为</span>
uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/pagesA/modifyInformation/modifyInformation&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【注意】这些就是 <code>tabBar</code> 页面</p><figure><img src="`+p+'" alt="image-20231204152323587" tabindex="0" loading="lazy"><figcaption>image-20231204152323587</figcaption></figure>',21),l=[c];function r(u,d){return s(),a("div",null,l)}const k=n(i,[["render",r],["__file","uniapp-微信小程序分包.html.vue"]]);export{k as default};
