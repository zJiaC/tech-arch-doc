import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as n,f as i,d as p,o as l}from"./app-X9Qm7P3-.js";const t={};function c(r,s){return l(),e("div",null,[s[0]||(s[0]=n("h1",{id:"github-actions-部署博客",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github-actions-部署博客"},[n("span",null,"Github-Actions 部署博客")])],-1)),i(" more "),s[1]||(s[1]=p(`<p><a href="https://vuepress-theme-hope.github.io/v2/zh/cookbook/tutorial/deploy.html#%E9%83%A8%E7%BD%B2%E5%88%B0-github-pages" target="_blank" rel="noopener noreferrer">官方主题部署项目指南</a></p><ul><li>调整 <ul><li>我发布到不同的仓库，需要用到私钥，私钥用 GitHub Secret 来管理，发布同仓库可以去掉这个 (ssh-key) 配置。</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>name: 部署文档</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches:</span></span>
<span class="line"><span>      # 确保这是你正在使用的分支名称</span></span>
<span class="line"><span>      - master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  deploy-tech-arch-doc:</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - name: Checkout</span></span>
<span class="line"><span>        uses: actions/checkout@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          fetch-depth: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: Setup Node.js</span></span>
<span class="line"><span>        uses: actions/setup-node@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          node-version: 16</span></span>
<span class="line"><span>          cache: yarn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: Build Docs</span></span>
<span class="line"><span>        env:</span></span>
<span class="line"><span>          NODE_OPTIONS: --max_old_space_size=8192</span></span>
<span class="line"><span>        run: yarn install &amp;&amp; yarn run build</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: Deploy</span></span>
<span class="line"><span>        uses: JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          # 这是文档部署到的分支名称</span></span>
<span class="line"><span>          branch: master</span></span>
<span class="line"><span>          folder: docs/.vuepress/dist</span></span>
<span class="line"><span>          ssh-key: \${{ secrets.Secret }}                # 我发布到不同的仓库，需要用到私钥，私钥用 GitHub Secret 来管理，发布同仓库可以去掉这个配置</span></span>
<span class="line"><span>          repository-name: user/tech-arch-doc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const u=a(t,[["render",c]]),m=JSON.parse('{"path":"/posts/ops/github-actions.html","title":"Github-Actions 部署博客","lang":"zh-CN","frontmatter":{"icon":"fa-brands fa-github","order":5,"date":"2022-04-27T00:00:00.000Z","category":["编程"],"tag":["Github"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Github-Actions 部署博客\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-20T02:08:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zJiaC\\",\\"url\\":\\"https://zjiac.github.io/tech-arch-doc/\\"}]}"],["meta",{"property":"og:url","content":"https://zjiac.github.io/tech-arch-doc/tech-arch-doc/posts/ops/github-actions.html"}],["meta",{"property":"og:site_name","content":"zJiac 个人知识体系"}],["meta",{"property":"og:title","content":"Github-Actions 部署博客"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-20T02:08:45.000Z"}],["meta",{"property":"article:tag","content":"Github"}],["meta",{"property":"article:published_time","content":"2022-04-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-20T02:08:45.000Z"}]]},"git":{"createdTime":1653382248000,"updatedTime":1713578925000,"contributors":[{"name":"zJiaC","username":"zJiaC","email":"425226133@qq.com","commits":27,"url":"https://github.com/zJiaC"}]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"posts/ops/github-actions.md","excerpt":"\\n"}');export{u as comp,m as data};
