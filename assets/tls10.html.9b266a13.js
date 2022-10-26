import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,f as i}from"./app.5c02955d.js";const d={},t=i('<h1 id="jdk-停用-tls10-导致数据库连接出错" tabindex="-1"><a class="header-anchor" href="#jdk-停用-tls10-导致数据库连接出错" aria-hidden="true">#</a> JDK 停用 TLS10 导致数据库连接出错</h1><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>因为新版的 JDK 不推荐使用旧的 TLSV1.0 的协议，所以默认停用 TLS10 的支持</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><h3 id="更换-jdk-版本" tabindex="-1"><a class="header-anchor" href="#更换-jdk-版本" aria-hidden="true">#</a> 更换 JDK 版本</h3><h3 id="修改-jre-配置" tabindex="-1"><a class="header-anchor" href="#修改-jre-配置" aria-hidden="true">#</a> 修改 jre 配置</h3><ul><li>jre\\lib\\security\\ java.security 文件</li><li>修改 jdk.tls.disabledAlgorithms= 这行，去除 TLSv1 等</li></ul><h3 id="dockerfile-里添加修改命令" tabindex="-1"><a class="header-anchor" href="#dockerfile-里添加修改命令" aria-hidden="true">#</a> Dockerfile 里添加修改命令</h3><ul><li>首先通过 grep 找到对应行数</li></ul><blockquote><p>通过 grep -n jdk.tls.disabledAlgorithms= /opt/java/openjdk/jre/lib/security/java.security 找到对应行数</p></blockquote><ul><li>通过 sed -i 替换对应字段</li></ul><blockquote><p>RUN sed -i &#39;703s/SSLv3, TLSv1, TLSv1.1,//&#39; /opt/java/openjdk/jre/lib/security/java.security</p></blockquote><h3 id="修改数据库支持-tlsv1-2" tabindex="-1"><a class="header-anchor" href="#修改数据库支持-tlsv1-2" aria-hidden="true">#</a> 修改数据库支持 TLSV1.2</h3>',13),l=[t];function h(s,c){return a(),r("div",null,l)}const u=e(d,[["render",h],["__file","tls10.html.vue"]]);export{u as default};
