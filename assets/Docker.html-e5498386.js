import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as a}from"./app-fd3cbc51.js";const i={},c=a(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用" aria-hidden="true">#</a> 1. 基本使用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 docker 版本</span>
<span class="token function">docker</span> <span class="token parameter variable">--version</span>

<span class="token comment"># 查看 docker-compose 版本</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">--version</span>

<span class="token comment"># 查看 docker 中运行的服务</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># 停止 docker 中的服务, some-mysql 是服务名</span>
<span class="token function">docker</span> stop some-mysql

<span class="token comment"># 删除 docker 中的服务</span>
<span class="token function">docker</span> <span class="token function">rm</span> some-mysql

<span class="token comment"># 获取所有服务</span>
<span class="token function">docker</span> network <span class="token function">ls</span>

<span class="token comment"># 查看某个服务的详细信息，docker_default 为服务名称</span>
<span class="token function">docker</span> network inspect docker_default

<span class="token comment"># 查看服务运行失败的原因 mydb 为服务名称</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> mydb

<span class="token comment"># 配置镜像加速器</span>
<span class="token builtin class-name">cd</span> etc/docker
<span class="token function">vim</span> daemon.json

<span class="token comment"># 修改镜像地址为</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://lwviz7xj.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[c];function o(d,t){return s(),e("div",null,l)}const m=n(i,[["render",o],["__file","Docker.html.vue"]]);export{m as default};
