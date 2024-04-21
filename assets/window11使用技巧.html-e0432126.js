import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as a}from"./app-fd3cbc51.js";const i="/Lin-Note-v3/assets/image-20230730190121548-0e2b1307.png",o="/Lin-Note-v3/assets/image-20230730190602160-591b38b0.png",t={},l=a('<h1 id="window11-使用技巧" tabindex="-1"><a class="header-anchor" href="#window11-使用技巧" aria-hidden="true">#</a> window11 使用技巧</h1><h2 id="家庭版如何使用-自带远程连接工具-连接-centeros" tabindex="-1"><a class="header-anchor" href="#家庭版如何使用-自带远程连接工具-连接-centeros" aria-hidden="true">#</a> 家庭版如何使用 自带远程连接工具 连接 CenterOS</h2><ol><li>直接搜索，就可找到，远程连接工具</li></ol><figure><img src="'+i+`" alt="image-20230730190121548" tabindex="0" loading="lazy"><figcaption>image-20230730190121548</figcaption></figure><ol start="2"><li>CenterOS 安装插件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装epel库</span>
yum <span class="token function">install</span> epel-release

<span class="token comment"># 安装xrdp</span>
yum <span class="token function">install</span> xrdp

<span class="token comment"># 因为Xrdp最终会自动启用VNC，所以必须安装tigervnc-server，否则xrdp无法使用。安装vnc</span>
yum <span class="token function">install</span> tigervnc-server

<span class="token comment"># 为root用户设置VNC密码</span>
vncpasswd root

<span class="token comment"># 关闭防火墙</span>
systemctl stop firewalld.service

<span class="token comment"># 设置开机不启动防火墙</span>
systemctl disable firewalld.servie

<span class="token comment"># 启动XRDP</span>
systemctl start xrdp

<span class="token comment"># 设置开机自启动</span>
systemctl <span class="token builtin class-name">enable</span> xrdp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>直接连接即可</li></ol><figure><img src="`+o+`" alt="image-20230730190602160" tabindex="0" loading="lazy"><figcaption>image-20230730190602160</figcaption></figure><blockquote><p><strong>[注意]</strong></p><p>如果 还是不行，很有可能就是 安装其他防火墙，比如 小皮面板 的防火墙，只要关了就可以连接上了</p></blockquote><h2 id="window11-添加-vscode-进入-右键菜单-命令行的方法修改" tabindex="-1"><a class="header-anchor" href="#window11-添加-vscode-进入-右键菜单-命令行的方法修改" aria-hidden="true">#</a> window11 添加 vscode 进入 右键菜单 (命令行的方法修改)</h2><ol><li>新建一个 空白文件，写入下面代码</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Windows Registry Editor Version <span class="token number">5.00</span>
 
<span class="token punctuation">[</span><span class="token constant">HKEY_CLASSES_ROOT</span>\\<span class="token operator">*</span>\\shell\\VSCode<span class="token punctuation">]</span>
@<span class="token operator">=</span><span class="token string">&quot;Open with Code&quot;</span>
<span class="token string">&quot;Icon&quot;</span><span class="token operator">=</span><span class="token string">&quot;D:\\\\software\\\\Microsoft VS Code\\\\Code.exe&quot;</span>
 
<span class="token punctuation">[</span><span class="token constant">HKEY_CLASSES_ROOT</span>\\<span class="token operator">*</span>\\shell\\VSCode\\command<span class="token punctuation">]</span>
@<span class="token operator">=</span><span class="token string">&quot;\\&quot;D:\\\\software\\\\Microsoft VS Code\\\\Code.exe\\&quot; \\&quot;%1\\&quot;&quot;</span>
 
Windows Registry Editor Version <span class="token number">5.00</span>
 
<span class="token punctuation">[</span><span class="token constant">HKEY_CLASSES_ROOT</span>\\Directory\\shell\\VSCode<span class="token punctuation">]</span>
@<span class="token operator">=</span><span class="token string">&quot;Open with Code&quot;</span>
<span class="token string">&quot;Icon&quot;</span><span class="token operator">=</span><span class="token string">&quot;D:\\\\software\\\\Microsoft VS Code\\\\Code.exe&quot;</span>
 
<span class="token punctuation">[</span><span class="token constant">HKEY_CLASSES_ROOT</span>\\Directory\\shell\\VSCode\\command<span class="token punctuation">]</span>
@<span class="token operator">=</span><span class="token string">&quot;\\&quot;D:\\\\software\\\\Microsoft VS Code\\\\Code.exe\\&quot; \\&quot;%V\\&quot;&quot;</span>
 
Windows Registry Editor Version <span class="token number">5.00</span>
 
<span class="token punctuation">[</span><span class="token constant">HKEY_CLASSES_ROOT</span>\\Directory\\Background\\shell\\VSCode<span class="token punctuation">]</span>
@<span class="token operator">=</span><span class="token string">&quot;Open with Code&quot;</span>
<span class="token string">&quot;Icon&quot;</span><span class="token operator">=</span><span class="token string">&quot;D:\\\\software\\\\Microsoft VS Code\\\\Code.exe&quot;</span>
 
<span class="token punctuation">[</span><span class="token constant">HKEY_CLASSES_ROOT</span>\\Directory\\Background\\shell\\VSCode\\command<span class="token punctuation">]</span>
@<span class="token operator">=</span><span class="token string">&quot;\\&quot;D:\\\\software\\\\Microsoft VS Code\\\\Code.exe\\&quot; \\&quot;%V\\&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>修改路径 <code>D:\\\\software\\\\Microsoft VS Code\\\\Code.exe</code> 为你电脑上 vscode 的安装路径，这里使用 双 <code>\\\\</code> 代替 <code>\\</code></li><li>写完将文件名改为，<code>xxx.reg</code> 保存，双击运行即可</li></ol>`,13),c=[l];function d(r,p){return s(),e("div",null,c)}const m=n(t,[["render",d],["__file","window11使用技巧.html.vue"]]);export{m as default};
