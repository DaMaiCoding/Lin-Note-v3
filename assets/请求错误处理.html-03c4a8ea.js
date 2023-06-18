import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as a}from"./app-3b87b348.js";const s={},c=a(`<h1 id="请求错误处理" tabindex="-1"><a class="header-anchor" href="#请求错误处理" aria-hidden="true">#</a> 请求错误处理</h1><p>可以使用 可选链运算符号 (?.)</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const onFinish = async values =&gt; {
    const { mobile, code } = values
    try {
      await loginStore.login({ mobile, code })
      navigate(&#39;/&#39;)
    } catch (e) {
      message.error(e.response?.data?.message || &#39;登录失败&#39;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[c];function r(l,t){return n(),i("div",null,d)}const m=e(s,[["render",r],["__file","请求错误处理.html.vue"]]);export{m as default};
