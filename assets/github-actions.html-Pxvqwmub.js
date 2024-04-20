import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as s,c as a,f as r,b as e,e as c,a as l,d}from"./app-CgPki5_t.js";const o={},u=e("h1",{id:"github-actions-部署博客",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-actions-部署博客"},[e("span",null,"Github-Actions 部署博客")])],-1),m={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/tutorial/deploy.html#%E9%83%A8%E7%BD%B2%E5%88%B0-github-pages",target:"_blank",rel:"noopener noreferrer"},v=d(`<ul><li>调整 <ul><li>我发布到不同的仓库，需要用到私钥，私钥用 GitHub Secret 来管理，发布同仓库可以去掉这个 (ssh-key) 配置。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - master

jobs:
  deploy-tech-arch-doc:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: yarn

      - name: Build Docs
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: yarn install &amp;&amp; yarn run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: master
          folder: docs/.vuepress/dist
          ssh-key: \${{ secrets.Secret }}                # 我发布到不同的仓库，需要用到私钥，私钥用 GitHub Secret 来管理，发布同仓库可以去掉这个配置
          repository-name: user/tech-arch-doc


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(b,p){const i=t("ExternalLinkIcon");return s(),a("div",null,[u,r(" more "),e("p",null,[e("a",m,[c("官方主题部署项目指南"),l(i)])]),v])}const y=n(o,[["render",h],["__file","github-actions.html.vue"]]),f=JSON.parse('{"path":"/posts/ops/github-actions.html","title":"Github-Actions 部署博客","lang":"zh-CN","frontmatter":{"icon":"fa-brands fa-github","order":5,"date":"2022-04-27T00:00:00.000Z","category":["编程"],"tag":["Github"],"head":[["meta",{"property":"og:url","content":"https://zjiac.github.io/tech-arch-doc/tech-arch-doc/posts/ops/github-actions.html"}],["meta",{"property":"og:site_name","content":"zJiac 个人知识体系"}],["meta",{"property":"og:title","content":"Github-Actions 部署博客"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-20T02:08:45.000Z"}],["meta",{"property":"article:author","content":"zJiaC"}],["meta",{"property":"article:tag","content":"Github"}],["meta",{"property":"article:published_time","content":"2022-04-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-20T02:08:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Github-Actions 部署博客\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-20T02:08:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zJiaC\\",\\"url\\":\\"https://zjiac.github.io/tech-arch-doc/\\"}]}"]]},"headers":[],"git":{"createdTime":1653382248000,"updatedTime":1713578925000,"contributors":[{"name":"zJiaC","email":"425226133@qq.com","commits":2}]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"posts/ops/github-actions.md","localizedDate":"2022年4月27日","excerpt":"\\n"}');export{y as comp,f as data};
