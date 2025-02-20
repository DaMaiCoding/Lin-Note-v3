import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-da553741.js";const p={},e=t(`<h1 id="vue2-x-递归组件的使用" tabindex="-1"><a class="header-anchor" href="#vue2-x-递归组件的使用" aria-hidden="true">#</a> Vue2.x 递归组件的使用</h1><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h2><p>![image-20230619153720228](./assets/Vue2.x 递归组件的使用/image-20230619153720228-1687160244772-1.png)</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 递归组件 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multilayer-class-box<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
        multilayerClass.classItemList &amp;&amp;
          multilayerClass.classItemList.length &gt; 0
      <span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ multilayerClass.classTitleName }}：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setmultilayerClassItem({})<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button-box-item<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clicked === null ? &#39;button-box-item-clicked&#39; : &#39;&#39;<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          全部
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in multilayerClass.classItemList<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.categoryId<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button-box-item<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clicked === item.categoryId ? &#39;button-box-item-clicked&#39; : &#39;&#39;<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setmultilayerClassItem(item)<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          {{ item.serviceName }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
        multilayerClassItem.classItemList &amp;&amp;
          multilayerClassItem.classItemList.length &gt; 0
      <span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>multilayer-class</span>
        <span class="token attr-name">:multilayerClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multilayerClassItem<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@selectService</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multilayerClassItem<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>multilayer-class</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> bus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../utils/bus&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;multilayerClass&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">multilayerClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">multilayerClassItem</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clicked</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置 下一级分类</span>
    <span class="token function">setmultilayerClassItem</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      item<span class="token punctuation">.</span>categoryId
        <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>clicked <span class="token operator">=</span> item<span class="token punctuation">.</span>categoryId<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>clicked <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      item<span class="token punctuation">.</span>children
        <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>multilayerClassItem <span class="token operator">=</span> item<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>multilayerClassItem <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;on-clicked&quot;</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.multilayer-class-box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button-box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token selector">.button-box-item</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 15px<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fcfcfc<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.button-box-item-clicked</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #1b7ef6<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用" tabindex="-1"><a class="header-anchor" href="#调用" aria-hidden="true">#</a> 调用</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 调用页面 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>multilayer-class</span> <span class="token attr-name">:multilayerClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multilayerClass<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">multilayerClass</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../../components/multilayerClass&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">multilayerClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;classTitleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专项服务分类&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;classItemList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;科技服务&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classTitleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专项服务子类&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classItemList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;安全防护&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;任务&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试1&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;补贴申请2&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classTitleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专项服务子类&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classItemList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;补贴&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;综合服务&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classTitleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专项服务子类&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classItemList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;地产服务&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classTitleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专项服务子类&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classItemList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;安全防护1&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classTitleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专项服务子类&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classItemList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;综合&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classTitleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专项服务子类&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classItemList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;企业服务1&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一级测试分类&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classTitleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专项服务子类&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;classItemList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;二级测试分类&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCategoryTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&quot;on-clicked&quot;</span><span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[注]</strong></p><p>这个递归组件核心的点</p><ul><li>递归组件，自己要调用自己</li><li><code>multilayerClass</code> 数据格式要符合，递归组件功能要求</li></ul>`,10),o=[e];function l(c,i){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","vue2.x 递归组件的使用.html.vue"]]);export{k as default};
