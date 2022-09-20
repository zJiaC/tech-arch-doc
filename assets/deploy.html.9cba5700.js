import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as t,d as e,b as n,e as i,f as d,r as c}from"./app.0800b632.js";const o={},p=e("h1",{id:"\u9879\u76EE\u90E8\u7F72",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9879\u76EE\u90E8\u7F72","aria-hidden":"true"},"#"),i(" \u9879\u76EE\u90E8\u7F72")],-1),m=d(`<h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><h3 id="docker-\u5BB9\u5668\u65E5\u671F\u4E0E\u5BBF\u4E3B\u4E3B\u673A\u65F6\u95F4\u4E0D\u4E00\u81F4\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#docker-\u5BB9\u5668\u65E5\u671F\u4E0E\u5BBF\u4E3B\u4E3B\u673A\u65F6\u95F4\u4E0D\u4E00\u81F4\u89E3\u51B3" aria-hidden="true">#</a> Docker \u5BB9\u5668\u65E5\u671F\u4E0E\u5BBF\u4E3B\u4E3B\u673A\u65F6\u95F4\u4E0D\u4E00\u81F4\u89E3\u51B3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5931\u8D25\uFF1A
/etc/localtime:/etc/localtime:ro
\u6210\u529F\uFF1A
- /etc/localtime:/etc/localtime
- /etc/timezone:/etc/timezone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt; \u7B2C\u4E00\u79CD\u4ECD\u7136\u5B58\u5728\u65F6\u533A\u95EE\u9898\uFF0C\u7B2C\u4E8C\u79CD\u6700\u7EC8\u89E3\u51B3\u8BE5\u95EE\u9898\u3002</p><h3 id="\u5DF2\u975E-jar-\u5305\u5F62\u5F0F\u90E8\u7F72-spring-boot-\u9879\u76EE\u6302\u8F7D\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5DF2\u975E-jar-\u5305\u5F62\u5F0F\u90E8\u7F72-spring-boot-\u9879\u76EE\u6302\u8F7D\u9879\u76EE" aria-hidden="true">#</a> \u5DF2\u975E jar \u5305\u5F62\u5F0F\u90E8\u7F72 Spring boot \u9879\u76EE\u6302\u8F7D\u9879\u76EE</h3><ul><li>\u524D\u60C5\u63D0\u8981\uFF1A <ul><li>\u975E jar \u5F62\u5F0F\u901A\u8FC7\u811A\u672C\u542F\u52A8\u9879\u76EE<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  #!/bin/bash
  APP_ENTRY=\${app.entry}
  
  DIR=$( cd &quot;$( dirname &quot;\${BASH_SOURCE[0]}&quot; )&quot; &amp;&amp; pwd )
  BASE=$DIR/.
  CP=$BASE/classes:$BASE/lib/*
  
  JAVA_OPTS=&quot;$JAVA_OPTS -server -Xms512m -Xmx1g&quot;
  
  java $JAVA_OPTS -cp &quot;$CP&quot; $APP_ENTRY

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>\u89E3\u51B3\uFF1A <ul><li>\u6362\u6210 jar \u5305\u6267\u884C: <ul><li>\u82E5\u662F\u901A\u8FC7\u6267\u884C jar \u5305\u542F\u52A8\u9879\u76EE\u7136\u540E\u6302\u8F7D\u5916\u90E8\u914D\u7F6E\u6587\u4EF6\u5C31\u9700\u8981\u63D0\u524D\u5355\u72EC\u51C6\u5907\u597D\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  FROM java:8
  RUN mkdir -p /opt/erp
  VOLUME /tmp
  ADD bill.api-1.0.0.jar /opt/erp/app.jar
  COPY /classes /opt/erp/conf
  WORKDIR /opt/erp
  RUN bash -c &#39;touch /opt/erp/app.jar&#39;
  ENTRYPOINT [&quot;java&quot;,&quot;-Djava.security.egd=file:/dev/./urandom&quot;,&quot;-jar&quot;,&quot;/opt/erp/app.jar&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u76F4\u63A5\u89E3\u538B zip \u5305\u7136\u540E\u76F4\u63A5\u6267\u884C\u811A\u672C\u542F\u52A8 <ul><li>CMD \u53EF\u7075\u6D3B\u8C03\u6574\uFF0C\u8FD9\u91CC\u9488\u5BF9\u6027\u9009\u62E9\u5220\u9664 com \u4EE5\u53CA static \u7B49\u9759\u6001\u6587\u4EF6\uFF0C\u6267\u884C\u89E3\u538B\u64CD\u4F5C\u4EC5\u4F1A\u5BF9\u4E0D\u5B58\u5728\u7684\u8FDB\u884C\u8865\u5145\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  FROM java:8
  MAINTAINER zJiaC
  RUN mkdir -p /opt/erp
  ADD *.zip /opt/api.zip
  WORKDIR /opt/api
  CMD rm -rf /opt/api/classes/com &amp;&amp; rm -rf /opt/api/classes/static/*.json &amp;&amp; rm -rf /opt/api/classes/static/*.jsonp &amp;&amp; rm -rf /opt/api/classes/static/*.html &amp;&amp; rm -rf /opt/api/classes/static/classic &amp;&amp; rm -rf /opt/api/classes/static/modern &amp;&amp; unzip -n /opt/api.zip -d /opt/api &amp;&amp; chmod +x /opt/api/run &amp;&amp; ./run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="\u6536\u85CF\u7F51\u5740" tabindex="-1"><a class="header-anchor" href="#\u6536\u85CF\u7F51\u5740" aria-hidden="true">#</a> \u6536\u85CF\u7F51\u5740</h2>`,7),u={href:"https://yeasy.gitbook.io/docker_practice/",target:"_blank",rel:"noopener noreferrer"},v=i("Docker-\u4ECE\u5165\u95E8\u5230\u5B9E\u8DF5"),b={href:"https://www.qikqiak.com/k8s-book/",target:"_blank",rel:"noopener noreferrer"},h=i("\u4ECE Docker \u5230 Kubernetes \u8FDB\u9636");function _(x,f){const a=c("ExternalLinkIcon");return r(),l("div",null,[p,t(" more "),m,e("ul",null,[e("li",null,[e("a",u,[v,n(a)])]),e("li",null,[e("a",b,[h,n(a)])])])])}const j=s(o,[["render",_],["__file","deploy.html.vue"]]);export{j as default};
