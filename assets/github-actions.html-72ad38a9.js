import{_ as s,X as l,Y as d,Z as a,a0 as e,a2 as n,$ as r,a3 as c,H as t}from"./framework-4d3348b7.js";const v={},u=e("h1",{id:"github-actions-部署博客",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-actions-部署博客","aria-hidden":"true"},"#"),n(" Github-Actions 部署博客")],-1),o={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/tutorial/deploy.html#%E9%83%A8%E7%BD%B2%E5%88%B0-github-pages",target:"_blank",rel:"noopener noreferrer"},m=c(`<ul><li>调整 <ul><li>我发布到不同的仓库，需要用到私钥，私钥用 GitHub Secret 来管理，发布同仓库可以去掉这个 (ssh-key) 配置。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name: 部署文档

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(h,p){const i=t("ExternalLinkIcon");return l(),d("div",null,[u,a(" more "),e("p",null,[e("a",o,[n("官方主题部署项目指南"),r(i)])]),m])}const g=s(v,[["render",b],["__file","github-actions.html.vue"]]);export{g as default};
