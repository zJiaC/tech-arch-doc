import{_ as a,X as t,Y as e,Z as p,a0 as s,a2 as n,a3 as o}from"./framework-8ecabe26.js";const c={},l=s("h1",{id:"结合两个数据库表结构生成修改表字段语句",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#结合两个数据库表结构生成修改表字段语句","aria-hidden":"true"},"#"),n(" 结合两个数据库表结构生成修改表字段语句")],-1),i=s("h2",{id:"原因",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#原因","aria-hidden":"true"},"#"),n(" 原因")],-1),r=s("ul",null,[s("li",null,"同时存在 A 和 B 两个数据库，其中 A 库具有完整注释但字段长度及是否为空不确定，B 库字段长度及是否为空准确但缺少注释， 由于修改注释同时也会修改字段长度和是否为空限制，现需将二者结合。")],-1),u=o(`<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;alter table &#39;</span><span class="token punctuation">,</span>ct<span class="token punctuation">.</span>TABLE_NAME<span class="token punctuation">,</span><span class="token string">&#39; modify &#39;</span><span class="token punctuation">,</span>ct<span class="token punctuation">.</span>COLUMN_NAME<span class="token punctuation">,</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span>rt<span class="token punctuation">.</span>COLUMN_TYPE<span class="token punctuation">,</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span><span class="token keyword">CASE</span> rt<span class="token punctuation">.</span>IS_NULLABLE
	<span class="token keyword">WHEN</span> <span class="token string">&#39;YES&#39;</span> <span class="token keyword">THEN</span>
		<span class="token string">&#39;NULL&#39;</span>
	<span class="token keyword">ELSE</span>
		<span class="token string">&#39;NOT NULL&#39;</span>
<span class="token keyword">END</span><span class="token punctuation">,</span><span class="token string">&#39; comment &#39;</span><span class="token punctuation">,</span><span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">,</span>ct<span class="token punctuation">.</span>COLUMN_COMMENT<span class="token punctuation">,</span><span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">,</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> 
<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> INFORMATION_SCHEMA<span class="token punctuation">.</span><span class="token keyword">COLUMNS</span> <span class="token keyword">WHERE</span> TABLE_SCHEMA <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span> <span class="token punctuation">)</span> ct
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span>
<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> INFORMATION_SCHEMA<span class="token punctuation">.</span><span class="token keyword">COLUMNS</span> <span class="token keyword">WHERE</span> TABLE_SCHEMA <span class="token operator">=</span> <span class="token string">&#39;B&#39;</span> <span class="token punctuation">)</span> rt <span class="token keyword">ON</span> ct<span class="token punctuation">.</span>TABLE_NAME <span class="token operator">=</span> rt<span class="token punctuation">.</span>TABLE_NAME <span class="token operator">AND</span> ct<span class="token punctuation">.</span>COLUMN_NAME <span class="token operator">=</span> rt<span class="token punctuation">.</span>COLUMN_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最终会生成修改表字段的多条语句</li></ul>`,3);function k(d,E){return t(),e("div",null,[l,i,r,p(" more "),u])}const _=a(c,[["render",k],["__file","alter-column.html.vue"]]);export{_ as default};
