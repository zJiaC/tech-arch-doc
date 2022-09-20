import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as e,a as n,d as t,f as c}from"./app.0800b632.js";const p={},o=t("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49Job Factory\uFF0C\u7528\u4E8ESpring\u6CE8\u5165",-1),l=c(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomJobFactory</span> <span class="token keyword">extends</span> <span class="token class-name">AdaptableJobFactory</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">AutowireCapableBeanFactory</span> capableBeanFactory<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">createJobInstance</span><span class="token punctuation">(</span><span class="token class-name">TriggerFiredBundle</span> bundle<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8C03\u7528\u7236\u7C7B\u7684\u65B9\u6CD5</span>
    <span class="token class-name">Object</span> jobInstance <span class="token operator">=</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">createJobInstance</span><span class="token punctuation">(</span>bundle<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8FDB\u884C\u6CE8\u5165</span>
    capableBeanFactory<span class="token punctuation">.</span><span class="token function">autowireBean</span><span class="token punctuation">(</span>jobInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> jobInstance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuartzConfig</span> <span class="token punctuation">{</span>

  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">SchedulerFactoryBean</span> <span class="token function">schedulerFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    schedulerFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SchedulerFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    schedulerFactory<span class="token punctuation">.</span><span class="token function">setOverwriteExistingJobs</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5EF6\u65F6\u542F\u52A8</span>
    schedulerFactory<span class="token punctuation">.</span><span class="token function">setStartupDelay</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u52A0\u8F7Dquartz\u6570\u636E\u6E90\u914D\u7F6E</span>
    schedulerFactory<span class="token punctuation">.</span><span class="token function">setQuartzProperties</span><span class="token punctuation">(</span><span class="token function">quartzProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u81EA\u5B9A\u4E49Job Factory\uFF0C\u7528\u4E8ESpring\u6CE8\u5165</span>
    schedulerFactory<span class="token punctuation">.</span><span class="token function">setJobFactory</span><span class="token punctuation">(</span>customJobFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> schedulerFactory<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function i(u,r){return a(),e("div",null,[n(" more "),o,n("more"),l])}const v=s(p,[["render",i],["__file","article-4.html.vue"]]);export{v as default};
