import{_ as d,W as a,X as s,Y as t,$ as e,a1 as r,a2 as l}from"./framework-bf2683f4.js";const i={},o=e("h1",{id:"docker-desktop-wsl2-修改镜像存储位置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-desktop-wsl2-修改镜像存储位置","aria-hidden":"true"},"#"),r(" Docker Desktop(WSL2) 修改镜像存储位置")],-1),n=l(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><ul><li>默认存储在C盘占空间</li></ul><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><ul><li>docker-desktop 是存放程序的，docker-desktop-data 是存放镜像的，这两个 wsl 子系统都是默认放在系统盘的。</li><li>导出wsl子系统镜像:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wsl --export docker-desktop docker-desktop.tar
wsl --export docker-desktop-data docker-desktop-data.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除现有的 wsl 子系统：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wsl --unregister docker-desktop
wsl --unregister docker-desktop-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重新创建 wsl 子系统：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wsl --import docker-desktop d:\\your-install-path docker-desktop.tar
wsl --import docker-desktop-data d:\\your-install-path docker-desktop-data.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function c(u,k){return a(),s("div",null,[o,t(" more "),n])}const h=d(i,[["render",c],["__file","wsl2.html.vue"]]);export{h as default};
