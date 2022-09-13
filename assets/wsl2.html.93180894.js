import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,a as t,d as e,f as r,e as l}from"./app.38b2a52b.js";const i={},o=e("h1",{id:"docker-desktop-wsl2-\u4FEE\u6539\u955C\u50CF\u5B58\u50A8\u4F4D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-desktop-wsl2-\u4FEE\u6539\u955C\u50CF\u5B58\u50A8\u4F4D\u7F6E","aria-hidden":"true"},"#"),r(" Docker Desktop(WSL2) \u4FEE\u6539\u955C\u50CF\u5B58\u50A8\u4F4D\u7F6E")],-1),n=l(`<h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><ul><li>\u9ED8\u8BA4\u5B58\u50A8\u5728C\u76D8\u5360\u7A7A\u95F4</li></ul><h2 id="\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3" aria-hidden="true">#</a> \u89E3\u51B3</h2><ul><li>docker-desktop \u662F\u5B58\u653E\u7A0B\u5E8F\u7684\uFF0Cdocker-desktop-data \u662F\u5B58\u653E\u955C\u50CF\u7684\uFF0C\u8FD9\u4E24\u4E2A wsl \u5B50\u7CFB\u7EDF\u90FD\u662F\u9ED8\u8BA4\u653E\u5728\u7CFB\u7EDF\u76D8\u7684\u3002</li><li>\u5BFC\u51FAwsl\u5B50\u7CFB\u7EDF\u955C\u50CF:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wsl --export docker-desktop docker-desktop.tar
wsl --export docker-desktop-data docker-desktop-data.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5220\u9664\u73B0\u6709\u7684 wsl \u5B50\u7CFB\u7EDF\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wsl --unregister docker-desktop
wsl --unregister docker-desktop-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u91CD\u65B0\u521B\u5EFA wsl \u5B50\u7CFB\u7EDF\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wsl --import docker-desktop d:\\your-install-path docker-desktop.tar
wsl --import docker-desktop-data d:\\your-install-path docker-desktop-data.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function c(u,k){return a(),s("div",null,[o,t(" more "),n])}const h=d(i,[["render",c],["__file","wsl2.html.vue"]]);export{h as default};
