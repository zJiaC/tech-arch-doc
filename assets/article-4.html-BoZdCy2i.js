import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as t,f as n,b as e,d as o}from"./app-CUJPFFrd.js";const c={},p=e("p",null,"使用自定义Job Factory，用于Spring注入",-1),i=o(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function l(u,r){return s(),t("div",null,[n(" more "),p,n("more"),i])}const k=a(c,[["render",l],["__file","article-4.html.vue"]]),v=JSON.parse('{"path":"/posts/question/article-4.html","title":"解决Spring boot项目quartz的job没法使用注解方式实例化对象","lang":"zh-CN","frontmatter":{"icon":"java","title":"解决Spring boot项目quartz的job没法使用注解方式实例化对象","date":"2017-05-18T00:00:00.000Z","order":3,"category":["问题","编程"],"tag":["Java","Spring boot"],"head":[["meta",{"property":"og:url","content":"https://zjiac.github.io/tech-arch-doc/tech-arch-doc/posts/question/article-4.html"}],["meta",{"property":"og:site_name","content":"zJiac 个人知识体系"}],["meta",{"property":"og:title","content":"解决Spring boot项目quartz的job没法使用注解方式实例化对象"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-14T07:49:08.000Z"}],["meta",{"property":"article:author","content":"zJiaC"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Spring boot"}],["meta",{"property":"article:published_time","content":"2017-05-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-14T07:49:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"解决Spring boot项目quartz的job没法使用注解方式实例化对象\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-05-18T00:00:00.000Z\\",\\"dateModified\\":\\"2022-06-14T07:49:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zJiaC\\",\\"url\\":\\"https://zjiac.github.io/tech-arch-doc/\\"}]}"]]},"headers":[],"git":{"createdTime":1653902001000,"updatedTime":1655192948000,"contributors":[{"name":"zJiaC","email":"jc456123","commits":3}]},"readingTime":{"minutes":0.48,"words":143},"filePathRelative":"posts/question/article-4.md","localizedDate":"2017年5月18日","excerpt":""}');export{k as comp,v as data};
