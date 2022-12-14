import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as t,d as e,e as a,b as n,f as d,r as c}from"./app.2678307a.js";const o={},p=e("h1",{id:"项目部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目部署","aria-hidden":"true"},"#"),a(" 项目部署")],-1),m=d(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><h3 id="docker-容器日期与宿主主机时间不一致解决" tabindex="-1"><a class="header-anchor" href="#docker-容器日期与宿主主机时间不一致解决" aria-hidden="true">#</a> Docker 容器日期与宿主主机时间不一致解决</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>失败：
/etc/localtime:/etc/localtime:ro
成功：
- /etc/localtime:/etc/localtime
- /etc/timezone:/etc/timezone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt; 第一种仍然存在时区问题，第二种最终解决该问题。</p><h3 id="已非-jar-包形式部署-spring-boot-项目挂载项目" tabindex="-1"><a class="header-anchor" href="#已非-jar-包形式部署-spring-boot-项目挂载项目" aria-hidden="true">#</a> 已非 jar 包形式部署 Spring boot 项目挂载项目</h3><ul><li>前情提要： <ul><li>非 jar 形式通过脚本启动项目<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  #!/bin/bash
  APP_ENTRY=\${app.entry}
  
  DIR=$( cd &quot;$( dirname &quot;\${BASH_SOURCE[0]}&quot; )&quot; &amp;&amp; pwd )
  BASE=$DIR/.
  CP=$BASE/classes:$BASE/lib/*
  
  JAVA_OPTS=&quot;$JAVA_OPTS -server -Xms512m -Xmx1g&quot;
  
  java $JAVA_OPTS -cp &quot;$CP&quot; $APP_ENTRY

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>解决： <ul><li>换成 jar 包执行: <ul><li>若是通过执行 jar 包启动项目然后挂载外部配置文件就需要提前单独准备好配置文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  FROM java:8
  RUN mkdir -p /opt/erp
  VOLUME /tmp
  ADD bill.api-1.0.0.jar /opt/erp/app.jar
  COPY /classes /opt/erp/conf
  WORKDIR /opt/erp
  RUN bash -c &#39;touch /opt/erp/app.jar&#39;
  ENTRYPOINT [&quot;java&quot;,&quot;-Djava.security.egd=file:/dev/./urandom&quot;,&quot;-jar&quot;,&quot;/opt/erp/app.jar&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>直接解压 zip 包然后直接执行脚本启动 <ul><li>CMD 可灵活调整，这里针对性选择删除 com 以及 static 等静态文件，执行解压操作仅会对不存在的进行补充。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  FROM java:8
  MAINTAINER zJiaC
  RUN mkdir -p /opt/erp
  ADD *.zip /opt/api.zip
  WORKDIR /opt/api
  CMD rm -rf /opt/api/classes/com &amp;&amp; rm -rf /opt/api/classes/static/*.json &amp;&amp; rm -rf /opt/api/classes/static/*.jsonp &amp;&amp; rm -rf /opt/api/classes/static/*.html &amp;&amp; rm -rf /opt/api/classes/static/classic &amp;&amp; rm -rf /opt/api/classes/static/modern &amp;&amp; unzip -n /opt/api.zip -d /opt/api &amp;&amp; chmod +x /opt/api/run &amp;&amp; ./run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="收藏网址" tabindex="-1"><a class="header-anchor" href="#收藏网址" aria-hidden="true">#</a> 收藏网址</h2>`,7),u={href:"https://yeasy.gitbook.io/docker_practice/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.qikqiak.com/k8s-book/",target:"_blank",rel:"noopener noreferrer"};function b(h,_){const i=c("ExternalLinkIcon");return r(),l("div",null,[p,t(" more "),m,e("ul",null,[e("li",null,[e("a",u,[a("Docker-从入门到实践"),n(i)])]),e("li",null,[e("a",v,[a("从 Docker 到 Kubernetes 进阶"),n(i)])])])])}const g=s(o,[["render",b],["__file","deploy.html.vue"]]);export{g as default};
