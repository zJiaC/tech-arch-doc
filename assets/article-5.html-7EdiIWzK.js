import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,a as e,b as n,d as o,f as i}from"./app-5ZoPpGpM.js";const p={},c=n("h1",{id:"解决spring-boot项目多个类implements于同一个接口类-使用注解需要多个-qualifier",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解决spring-boot项目多个类implements于同一个接口类-使用注解需要多个-qualifier","aria-hidden":"true"},"#"),o(" 解决spring boot项目多个类implements于同一个接口类，使用注解需要多个@Qualifier")],-1),l=i(`<ul><li>业务场景<br> 搭建DI系统定时任务调度管理使用的是Quartz。<br><br> 首先通过一个主定时任务去触发其它任务的调度处理。最终是触发BaseTask的execute方法。BaseTask继承Job。<br><br> 然后execute方法里通过ThirdBusinessFactory工厂类去获取相应参数获取IThirdBll接口的实例。</li><li>问题<br> 因为Spring boot一般都是通过@Autowired去注入，从而实例然后调用，如果直接通过New实例化则里面再通过@Autowired注解会有问题。<br><br> 但是如果在ThirdBusinessFactory。每个实例都写成如下将会是越来越多：<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">IThirdBll</span> <span class="token class-name">A</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>解决<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Itest</span><span class="token punctuation">&gt;</span></span> testList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>先将全部实例注解进去，再通过遍历testList寻找相应的实例。可以自定义个注解例如 TaskHandler，然后根据如下获取并加以判断。<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">TaskHandler</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

  <span class="token class-name">String</span> <span class="token function">customer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

  <span class="token class-name">String</span> <span class="token function">description</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token class-name">TaskHandler</span> annotation <span class="token operator">=</span> taskHandlerClass<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">TaskHandler</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1);function u(r,d){return a(),t("div",null,[c,e(" more "),l])}const m=s(p,[["render",u],["__file","article-5.html.vue"]]);export{m as default};