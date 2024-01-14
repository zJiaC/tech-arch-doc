import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,a as n,b as t,f as c}from"./app-9HIzqMwZ.js";const p={},o=t("p",null,"使用自定义Job Factory，用于Spring注入",-1),l=c(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomJobFactory</span> <span class="token keyword">extends</span> <span class="token class-name">AdaptableJobFactory</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">AutowireCapableBeanFactory</span> capableBeanFactory<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">createJobInstance</span><span class="token punctuation">(</span><span class="token class-name">TriggerFiredBundle</span> bundle<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用父类的方法</span>
    <span class="token class-name">Object</span> jobInstance <span class="token operator">=</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">createJobInstance</span><span class="token punctuation">(</span>bundle<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 进行注入</span>
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

    <span class="token comment">// 延时启动</span>
    schedulerFactory<span class="token punctuation">.</span><span class="token function">setStartupDelay</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 加载quartz数据源配置</span>
    schedulerFactory<span class="token punctuation">.</span><span class="token function">setQuartzProperties</span><span class="token punctuation">(</span><span class="token function">quartzProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 自定义Job Factory，用于Spring注入</span>
    schedulerFactory<span class="token punctuation">.</span><span class="token function">setJobFactory</span><span class="token punctuation">(</span>customJobFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> schedulerFactory<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function i(u,r){return a(),e("div",null,[n(" more "),o,n("more"),l])}const v=s(p,[["render",i],["__file","article-4.html.vue"]]);export{v as default};
