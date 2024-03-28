import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as l,c as s,f as o,b as e,e as t,a as i,d}from"./app-CArpxNNo.js";const c={},p=e("h1",{id:"项目部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目部署"},[e("span",null,"项目部署")])],-1),m=d(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><h3 id="docker-容器日期与宿主主机时间不一致解决" tabindex="-1"><a class="header-anchor" href="#docker-容器日期与宿主主机时间不一致解决"><span>Docker 容器日期与宿主主机时间不一致解决</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>失败：
/etc/localtime:/etc/localtime:ro
成功：
- /etc/localtime:/etc/localtime
- /etc/timezone:/etc/timezone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt; 第一种仍然存在时区问题，第二种最终解决该问题。</p><h3 id="已非-jar-包形式部署-spring-boot-项目挂载项目" tabindex="-1"><a class="header-anchor" href="#已非-jar-包形式部署-spring-boot-项目挂载项目"><span>已非 jar 包形式部署 Spring boot 项目挂载项目</span></a></h3><ul><li>前情提要： <ul><li>非 jar 形式通过脚本启动项目<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  #!/bin/bash
  APP_ENTRY=\${app.entry}
  
  DIR=$( cd &quot;$( dirname &quot;\${BASH_SOURCE[0]}&quot; )&quot; &amp;&amp; pwd )
  BASE=$DIR/.
  CP=$BASE/classes:$BASE/lib/*
  
  JAVA_OPTS=&quot;$JAVA_OPTS -server -Xms512m -Xmx1g&quot;
  
  java $JAVA_OPTS -cp &quot;$CP&quot; $APP_ENTRY

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>解决： <ul><li>换成 jar 包执行: <ul><li>若是通过执行 jar 包启动项目然后挂载外部配置文件就需要提前单独准备好配置文件</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  FROM java:8
  RUN mkdir -p /opt/erp
  VOLUME /tmp
  ADD bill.api-1.0.0.jar /opt/erp/app.jar
  COPY /classes /opt/erp/conf
  WORKDIR /opt/erp
  RUN bash -c &#39;touch /opt/erp/app.jar&#39;
  ENTRYPOINT [&quot;java&quot;,&quot;-Djava.security.egd=file:/dev/./urandom&quot;,&quot;-jar&quot;,&quot;/opt/erp/app.jar&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>直接解压 zip 包然后直接执行脚本启动 <ul><li>CMD 可灵活调整，这里针对性选择删除 com 以及 static 等静态文件，执行解压操作仅会对不存在的进行补充。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  FROM java:8
  MAINTAINER zJiaC
  RUN mkdir -p /opt/erp
  ADD *.zip /opt/api.zip
  WORKDIR /opt/api
  CMD rm -rf /opt/api/classes/com &amp;&amp; rm -rf /opt/api/classes/static/*.json &amp;&amp; rm -rf /opt/api/classes/static/*.jsonp &amp;&amp; rm -rf /opt/api/classes/static/*.html &amp;&amp; rm -rf /opt/api/classes/static/classic &amp;&amp; rm -rf /opt/api/classes/static/modern &amp;&amp; unzip -n /opt/api.zip -d /opt/api &amp;&amp; chmod +x /opt/api/run &amp;&amp; ./run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="收藏网址" tabindex="-1"><a class="header-anchor" href="#收藏网址"><span>收藏网址</span></a></h2>`,7),u={href:"https://yeasy.gitbook.io/docker_practice/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.qikqiak.com/k8s-book/",target:"_blank",rel:"noopener noreferrer"};function h(b,g){const a=r("ExternalLinkIcon");return l(),s("div",null,[p,o(" more "),m,e("ul",null,[e("li",null,[e("a",u,[t("Docker-从入门到实践"),i(a)])]),e("li",null,[e("a",v,[t("从 Docker 到 Kubernetes 进阶"),i(a)])])])])}const f=n(c,[["render",h],["__file","deploy.html.vue"]]),k=JSON.parse('{"path":"/posts/ops/deploy.html","title":"项目部署","lang":"zh-CN","frontmatter":{"icon":"app","order":4,"date":"2022-04-29T00:00:00.000Z","category":["运维"],"tag":["Docker"],"head":[["meta",{"property":"og:url","content":"https://zjiac.github.io/tech-arch-doc/tech-arch-doc/posts/ops/deploy.html"}],["meta",{"property":"og:site_name","content":"zJiac 个人知识体系"}],["meta",{"property":"og:title","content":"项目部署"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-13T03:27:53.000Z"}],["meta",{"property":"article:author","content":"zJiaC"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2022-04-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-13T03:27:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-13T03:27:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zJiaC\\",\\"url\\":\\"https://zjiac.github.io/tech-arch-doc/\\"}]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[{"level":3,"title":"Docker 容器日期与宿主主机时间不一致解决","slug":"docker-容器日期与宿主主机时间不一致解决","link":"#docker-容器日期与宿主主机时间不一致解决","children":[]},{"level":3,"title":"已非 jar 包形式部署 Spring boot 项目挂载项目","slug":"已非-jar-包形式部署-spring-boot-项目挂载项目","link":"#已非-jar-包形式部署-spring-boot-项目挂载项目","children":[]}]},{"level":2,"title":"收藏网址","slug":"收藏网址","link":"#收藏网址","children":[]}],"git":{"createdTime":1676258873000,"updatedTime":1676258873000,"contributors":[{"name":"zJiaC","email":"425226133@qq.com","commits":1}]},"readingTime":{"minutes":1.08,"words":323},"filePathRelative":"posts/ops/deploy.md","localizedDate":"2022年4月29日","excerpt":"\\n"}');export{f as comp,k as data};
