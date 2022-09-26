import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as d,a,d as e,b as r,e as n,f as c,r as t}from"./app.841fabeb.js";const v={},u=e("h1",{id:"github-actions-\u90E8\u7F72\u535A\u5BA2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-actions-\u90E8\u7F72\u535A\u5BA2","aria-hidden":"true"},"#"),n(" Github-Actions \u90E8\u7F72\u535A\u5BA2")],-1),o={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/tutorial/deploy.html#%E9%83%A8%E7%BD%B2%E5%88%B0-github-pages",target:"_blank",rel:"noopener noreferrer"},m=n("\u5B98\u65B9\u4E3B\u9898\u90E8\u7F72\u9879\u76EE\u6307\u5357"),b=c(`<ul><li>\u8C03\u6574 <ul><li>\u6211\u53D1\u5E03\u5230\u4E0D\u540C\u7684\u4ED3\u5E93\uFF0C\u9700\u8981\u7528\u5230\u79C1\u94A5\uFF0C\u79C1\u94A5\u7528 GitHub Secret \u6765\u7BA1\u7406\uFF0C\u53D1\u5E03\u540C\u4ED3\u5E93\u53EF\u4EE5\u53BB\u6389\u8FD9\u4E2A (ssh-key) \u914D\u7F6E\u3002</li></ul></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>name: \u90E8\u7F72\u6587\u6863

on:
  push:
    branches:
      # \u786E\u4FDD\u8FD9\u662F\u4F60\u6B63\u5728\u4F7F\u7528\u7684\u5206\u652F\u540D\u79F0
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
          # \u8FD9\u662F\u6587\u6863\u90E8\u7F72\u5230\u7684\u5206\u652F\u540D\u79F0
          branch: master
          folder: docs/.vuepress/dist
          ssh-key: \${{ secrets.Secret }}                # \u6211\u53D1\u5E03\u5230\u4E0D\u540C\u7684\u4ED3\u5E93\uFF0C\u9700\u8981\u7528\u5230\u79C1\u94A5\uFF0C\u79C1\u94A5\u7528 GitHub Secret \u6765\u7BA1\u7406\uFF0C\u53D1\u5E03\u540C\u4ED3\u5E93\u53EF\u4EE5\u53BB\u6389\u8FD9\u4E2A\u914D\u7F6E
          repository-name: user/tech-arch-doc


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(p,_){const i=t("ExternalLinkIcon");return l(),d("div",null,[u,a(" more "),e("p",null,[e("a",o,[m,r(i)])]),b])}const x=s(v,[["render",h],["__file","github-actions.html.vue"]]);export{x as default};
