import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-fd3cbc51.js";const c={},i=e(`<h1 id="删除-docker-容器的方法" tabindex="-1"><a class="header-anchor" href="#删除-docker-容器的方法" aria-hidden="true">#</a> 删除 docker 容器的方法</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 停止所有 docker 容器</span>
<span class="token function">docker</span> <span class="token function">kill</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>

<span class="token comment"># 删除所有 docker 容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span><span class="token variable">)</span></span>

<span class="token comment"># 删除 所有 docker 安装包</span>
<span class="token function">sudo</span> yum remove docker*

<span class="token comment"># 删除所有 docker 相关文件夹</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker/

<span class="token comment"># 查看 docker 是否删除</span>
<span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[i];function o(r,t){return s(),a("div",null,l)}const k=n(c,[["render",o],["__file","删除 docker 容器的方法.html.vue"]]);export{k as default};
