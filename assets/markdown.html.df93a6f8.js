import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as b,c as k,a as y,d as s,e,b as a,w as l,f as i,r as t}from"./app.18089db6.js";const _={},f=s("p",null,"VuePress \u7684\u6BCF\u4E2A\u6587\u6863\u9875\u9762\u90FD\u662F\u7531 Markdown \u6E32\u67D3\u800C\u6210\u3002\u6240\u4EE5\u4F60\u9700\u8981\u901A\u8FC7\u5728\u76F8\u5E94\u8DEF\u5F84\u521B\u5EFA\u7F16\u5199 Markdown \u5EFA\u7ACB\u4F60\u7684\u6587\u6863\u6216\u535A\u5BA2\u9875\u9762\u3002",-1),z=s("h2",{id:"markdown-\u4ECB\u7ECD",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-\u4ECB\u7ECD","aria-hidden":"true"},"#"),e(" Markdown \u4ECB\u7ECD")],-1),w={href:"https://vuepress-theme-hope.github.io/v2/zh/basic/markdown/README.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://vuepress-theme-hope.github.io/v2/zh/basic/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},E={class:"custom-container info"},M=s("p",{class:"custom-container-title"},"Frontmatter",-1),A={href:"https://vuepress-theme-hope.github.io/v2/zh/basic/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},U=s("h2",{id:"vuepress-\u6269\u5C55",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-\u6269\u5C55","aria-hidden":"true"},"#"),e(" VuePress \u6269\u5C55")],-1),C=s("p",null,"\u4E3A\u4E86\u4E30\u5BCC\u6587\u6863\u5199\u4F5C\uFF0CVuePress \u5BF9 Markdown \u8BED\u6CD5\u8FDB\u884C\u4E86\u6269\u5C55\u3002",-1),V={href:"https://vuepress-theme-hope.github.io/v2/zh/basic/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},B=s("h2",{id:"\u4E3B\u9898\u6269\u5C55",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E3B\u9898\u6269\u5C55","aria-hidden":"true"},"#"),e(" \u4E3B\u9898\u6269\u5C55")],-1),q=s("h3",{id:"\u4E00\u952E\u542F\u7528",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E00\u952E\u542F\u7528","aria-hidden":"true"},"#"),e(" \u4E00\u952E\u542F\u7528")],-1),P=s("code",null,"plugins.mdEnhance.enableAll: true",-1),F={href:"https://vuepress-theme-hope.github.io/v2/md-enhance",target:"_blank",rel:"noopener noreferrer"},j=i(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">mdEnhance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enableAll</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5BB9\u5668" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5BB9\u5668</h3><div><p>\u5B89\u5168\u7684\u5728 Markdown \u4E2D\u4F7F\u7528 {{ variable }}\u3002</p></div><div class="custom-container info"><p class="custom-container-title">\u81EA\u5B9A\u4E49\u6807\u9898</p><p>\u4FE1\u606F\u5BB9\u5668\uFF0C\u5305\u542B <code>\u4EE3\u7801</code> \u4E0E <a href="#markdown">\u94FE\u63A5</a>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u81EA\u5B9A\u4E49\u6807\u9898</p><p>\u63D0\u793A\u5BB9\u5668</p></div><div class="custom-container warning"><p class="custom-container-title">\u81EA\u5B9A\u4E49\u6807\u9898</p><p>\u8B66\u544A\u5BB9\u5668</p></div><div class="custom-container danger"><p class="custom-container-title">\u81EA\u5B9A\u4E49\u6807\u9898</p><p>\u5371\u9669\u5BB9\u5668</p></div><details class="custom-container details"><summary>\u81EA\u5B9A\u4E49\u6807\u9898</summary><p>\u8BE6\u60C5\u5BB9\u5668</p></details><details class="custom-container details"><summary>\u4EE3\u7801</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: v-pre

\u5B89\u5168\u7684\u5728 Markdown \u4E2D\u4F7F\u7528 {{ variable }}\u3002

:::

::: info \u81EA\u5B9A\u4E49\u6807\u9898

\u4FE1\u606F\u5BB9\u5668

:::

::: tip \u81EA\u5B9A\u4E49\u6807\u9898

\u63D0\u793A\u5BB9\u5668

:::

::: warning \u81EA\u5B9A\u4E49\u6807\u9898

\u8B66\u544A\u5BB9\u5668

:::

::: danger \u81EA\u5B9A\u4E49\u6807\u9898

\u5371\u9669\u5BB9\u5668

:::

::: details \u81EA\u5B9A\u4E49\u6807\u9898

\u8BE6\u60C5\u5BB9\u5668

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,9),I={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},L=s("h3",{id:"\u4EE3\u7801\u5757",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4EE3\u7801\u5757","aria-hidden":"true"},"#"),e(" \u4EE3\u7801\u5757")],-1),T=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),X=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),Z=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(" i "),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),H={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},K=s("h3",{id:"\u81EA\u5B9A\u4E49\u5BF9\u9F50",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5BF9\u9F50","aria-hidden":"true"},"#"),e(" \u81EA\u5B9A\u4E49\u5BF9\u9F50")],-1),N=s("div",{style:{"text-align":"center"}},[s("p",null,"\u6211\u662F\u5C45\u4E2D\u7684")],-1),D=s("div",{style:{"text-align":"right"}},[s("p",null,"\u6211\u5728\u53F3\u5BF9\u9F50")],-1),J={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},O=s("h3",{id:"\u4E0A\u4E0B\u89D2\u6807",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E0A\u4E0B\u89D2\u6807","aria-hidden":"true"},"#"),e(" \u4E0A\u4E0B\u89D2\u6807")],-1),S=s("p",null,[e("19"),s("sup",null,"th"),e(" H"),s("sub",null,"2"),e("O")],-1),W={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},R=i('<h3 id="\u811A\u6CE8" tabindex="-1"><a class="header-anchor" href="#\u811A\u6CE8" aria-hidden="true">#</a> \u811A\u6CE8</h3><p>\u6B64\u6587\u5B57\u6709\u811A\u6CE8<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),Y={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},Q=s("h3",{id:"\u6807\u8BB0",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6807\u8BB0","aria-hidden":"true"},"#"),e(" \u6807\u8BB0")],-1),G=s("p",null,[e("\u4F60\u53EF\u4EE5\u6807\u8BB0 "),s("mark",null,"\u91CD\u8981\u7684\u5185\u5BB9"),e(" \u3002")],-1),$={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},ss=s("h3",{id:"\u4EFB\u52A1\u5217\u8868",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4EFB\u52A1\u5217\u8868","aria-hidden":"true"},"#"),e(" \u4EFB\u52A1\u5217\u8868")],-1),es={class:"task-list-container"},as=i('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> \u8BA1\u5212 1</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> \u8BA1\u5212 2</label></p></li>',2),ns={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},ts=s("h3",{id:"\u56FE\u8868",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u56FE\u8868","aria-hidden":"true"},"#"),e(" \u56FE\u8868")],-1),ls={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},is=s("h3",{id:"\u6D41\u7A0B\u56FE",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6D41\u7A0B\u56FE","aria-hidden":"true"},"#"),e(" \u6D41\u7A0B\u56FE")],-1),rs={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},os=s("h3",{id:"mermaid",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),e(" Mermaid")],-1),cs={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},ps=s("h3",{id:"tex-\u8BED\u6CD5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tex-\u8BED\u6CD5","aria-hidden":"true"},"#"),e(" Tex \u8BED\u6CD5")],-1),ms=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("msup",null,[s("mi",{mathvariant:"normal"},"\u2202"),s("mi",null,"r")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"\u2202"),s("msup",null,[s("mi",null,"\u03C9"),s("mi",null,"r")])])]),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"\u03C9")]),s("mi",null,"\u03C9")]),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"\u03C9")]),s("mi",null,"\u03C9")]),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"\u2061"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"r")]),s("mo",null,"+"),s("munderover",null,[s("mo",null,"\u2211"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"r")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"\u2212"),s("mn",null,"1"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"i")]),s("mi",null,"r"),s("mo",null,"\u22EF"),s("mo",{stretchy:"false"},"("),s("mi",null,"r"),s("mo",null,"\u2212"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"\u2061"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mrow",null,[s("mi",null,"r"),s("mo",null,"\u2212"),s("mi",null,"i")])])]),s("msup",null,[s("mi",null,"\u03C9"),s("mi",null,"i")])]),s("mo",{fence:"true"},"}")])]),s("annotation",{encoding:"application/x-tex"}," \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4em","vertical-align":"-0.95em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5904em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"\u2202"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"\u03C9")])])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0277em","vertical-align":"-1.2777em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"\u03C9")])])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"{")]),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"\u2211")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5017em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"\u03C9"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7507em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"\u2212"),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"\u22EF"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mbin mtight"},"\u2212"),s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"}")])])])])])])],-1),hs={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},us=s("h3",{id:"\u4EE3\u7801\u6F14\u793A",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true"},"#"),e(" \u4EE3\u7801\u6F14\u793A")],-1),ds=s("div",{class:"language-html ext-html line-numbers-mode"},[s("pre",{class:"language-html"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("h1")]),s("span",{class:"token punctuation"},">")]),e("VuePress Theme Hope"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("h1")]),s("span",{class:"token punctuation"},">")]),e(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("p")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("span")]),e(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),e("very"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),e("\u975E\u5E38"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("span")]),s("span",{class:"token punctuation"},">")]),e("\u5F3A\u5927!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("p")]),s("span",{class:"token punctuation"},">")]),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),gs=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"language-javascript"},[s("code",null,[e("document"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"querySelector"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"#very"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"addEventListener"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"click"'),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token operator"},"=>"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token function"},"alert"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"\u975E\u5E38\u5F3A\u5927"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),vs=s("div",{class:"language-css ext-css line-numbers-mode"},[s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"token selector"},"span"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),e(" red"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),bs={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},ks=s("h3",{id:"\u5E7B\u706F\u7247",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5E7B\u706F\u7247","aria-hidden":"true"},"#"),e(" \u5E7B\u706F\u7247")],-1),ys={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},_s=i('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>\u8FD9\u662F\u811A\u6CE8\u5185\u5BB9 <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>',2);function fs(zs,ws){const n=t("ExternalLinkIcon"),p=t("CodeTabs"),m=t("ChartJS"),h=t("FlowChart"),u=t("Mermaid"),d=t("CodeDemo"),g=t("Presentation");return b(),k("div",null,[f,y(" more "),z,s("p",null,[e("\u5982\u679C\u4F60\u662F\u4E00\u4E2A\u65B0\u624B\uFF0C\u8FD8\u4E0D\u4F1A\u7F16\u5199 Markdown\uFF0C\u8BF7\u5148\u9605\u8BFB "),s("a",w,[e("Markdown \u4ECB\u7ECD"),a(n)]),e(" \u548C "),s("a",x,[e("Markdown \u6F14\u793A"),a(n)]),e("\u3002")]),s("div",E,[M,s("p",null,[e("Frontmatter \u662F VuePress \u4E2D\u5F88\u91CD\u8981\u7684\u4E00\u4E2A\u6982\u5FF5\uFF0C\u5982\u679C\u4F60\u4E0D\u4E86\u89E3\u5B83\uFF0C\u4F60\u9700\u8981\u9605\u8BFB "),s("a",A,[e("Frontmatter \u4ECB\u7ECD"),a(n)]),e("\u3002")])]),U,C,s("p",null,[e("\u5173\u4E8E\u8FD9\u4E9B\u6269\u5C55\uFF0C\u8BF7\u9605\u8BFB "),s("a",V,[e("VuePress \u4E2D\u7684 Markdown \u6269\u5C55"),a(n)]),e("\u3002")]),B,q,s("p",null,[e("\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u5728\u4E3B\u9898\u9009\u9879\u4E2D\u8BBE\u7F6E "),P,e(" \u542F\u7528 "),s("a",F,[e("md-enhance"),a(n)]),e(" \u63D2\u4EF6\u7684\u6240\u6709\u529F\u80FD\u3002")]),j,s("ul",null,[s("li",null,[s("a",I,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),L,a(p,{id:"81",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2},{tab0:l(({title:r,value:o,isActive:c})=>[T]),tab1:l(({title:r,value:o,isActive:c})=>[X]),tab2:l(({title:r,value:o,isActive:c})=>[Z]),_:1}),s("ul",null,[s("li",null,[s("a",H,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),K,N,D,s("ul",null,[s("li",null,[s("a",J,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),O,S,s("ul",null,[s("li",null,[s("a",W,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),R,s("ul",null,[s("li",null,[s("a",Y,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),Q,G,s("ul",null,[s("li",null,[s("a",$,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),ss,s("ul",es,[as,s("li",null,[s("p",null,[s("a",ns,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])])]),ts,a(m,{id:"chart-181",config:"eNptULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),s("ul",null,[s("li",null,[s("a",ls,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),is,a(h,{id:"flowchart-194",code:"eNpLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",preset:"vue"}),s("ul",null,[s("li",null,[s("a",rs,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),os,a(u,{id:"mermaid-205",code:"eNpLy8kvT85ILCpRCHHiUgCCZENdXbtEIzC7uDQpvSixIEMhPy8VLJCIJJmal4KqqKQ8HyyQBFKUhEtRRlEqxCywRcmoyoD2KABF4UaBVaOKlOeD+UCNAP9rL9s="}),s("ul",null,[s("li",null,[s("a",cs,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),ps,ms,s("ul",null,[s("li",null,[s("a",hs,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),us,a(d,{id:"code-demo-227",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",code:"eNoljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"},{default:l(()=>[ds,gs,vs]),_:1}),s("ul",null,[s("li",null,[s("a",bs,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),ks,a(g,{id:"presentation-242",code:"eNrjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr59blJFfkKpXnFmSqqnwfFbLs3VbX0zYy8Wlq6vLhWqgEVBQ4eXCnc9nrwMaDmeChDHUGusBrU9ISMgq5krOzysuUUhUsFUwtAYJgZRjqAYaoqLC5aURU5KRWpIYb6ADZRhqAvXFFJfmxldn2hrUghQBAI9BXC0=",theme:"auto"}),s("ul",null,[s("li",null,[s("a",ys,[e("\u67E5\u770B\u8BE6\u60C5"),a(n)])])]),_s])}const Ms=v(_,[["render",fs],["__file","markdown.html.vue"]]);export{Ms as default};
