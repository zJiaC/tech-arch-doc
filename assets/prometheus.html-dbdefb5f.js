import{_ as a,X as t,Y as e,a0 as n,a2 as p,$ as o,a3 as c,I as i}from"./framework-8a5cde39.js";const l={},u=c(`<h1 id="fastjson-导致-spring-boot-接入-prometheus-返回结果不正确" tabindex="-1"><a class="header-anchor" href="#fastjson-导致-spring-boot-接入-prometheus-返回结果不正确" aria-hidden="true">#</a> Fastjson 导致 Spring boot 接入 Prometheus 返回结果不正确</h1><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><ul><li>添加 StringHttpMessageConverter 单独处理返回字符串类型，需要注意顺序排在 FastJsonHttpMessageConverter 之前</li><li>同时需要注意的一点，由于项目统一切片封装返回对象： <ul><li>返回 String 的接口也会封装多一层成对象，导致 StringHttpMessageConverter 处理的时候将对象转成 String 从而出现错误</li><li>指定 MediaType 针对 prometheus 所用限制处理</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyWebMvcConfigurer</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureMessageConverters</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HttpMessageConverter</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> converters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        converters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">stringConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        converters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">fastJsonHttpMessageConverters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//无论白名单和黑名单，都不支持autoType</span>
        <span class="token class-name">ParserConfig</span><span class="token punctuation">.</span><span class="token function">getGlobalInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSafeMode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 修改默认的JSON实现为FastJson
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">FastJsonHttpMessageConverter</span> <span class="token function">fastJsonHttpMessageConverters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FastJsonHttpMessageConverter</span> httpMessageConverter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FastJsonHttpMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        httpMessageConverter<span class="token punctuation">.</span><span class="token function">setFastJsonConfig</span><span class="token punctuation">(</span><span class="token function">getFastJsonConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        httpMessageConverter<span class="token punctuation">.</span><span class="token function">setDefaultCharset</span><span class="token punctuation">(</span><span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> httpMessageConverter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">FastJsonConfig</span> <span class="token function">getFastJsonConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FastJsonConfig</span> fastJsonConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FastJsonConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fastJsonConfig<span class="token punctuation">.</span><span class="token function">setDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss.SSS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fastJsonConfig<span class="token punctuation">.</span><span class="token function">setCharset</span><span class="token punctuation">(</span><span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        fastJsonConfig<span class="token punctuation">.</span><span class="token function">setSerializerFeatures</span><span class="token punctuation">(</span>
                <span class="token class-name">SerializerFeature<span class="token punctuation">.</span>WriteMapNullValue</span><span class="token punctuation">,</span>
                <span class="token class-name">SerializerFeature<span class="token punctuation">.</span>QuoteFieldNames</span><span class="token punctuation">,</span>
                <span class="token class-name">SerializerFeature<span class="token punctuation">.</span>WriteNullListAsEmpty</span><span class="token punctuation">,</span>
<span class="token comment">//        SerializerFeature.WriteEnumUsingToString,</span>
                <span class="token class-name">SerializerFeature<span class="token punctuation">.</span>WriteDateUseDateFormat</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> fastJsonConfig<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">HttpMessageConverter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">stringConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringHttpMessageConverter</span> converter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringHttpMessageConverter</span><span class="token punctuation">(</span>
                <span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MediaType</span><span class="token punctuation">&gt;</span></span> supportedMediaTypes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//提供只针对 prometheus 所用到类型支持 mediaType</span>
        supportedMediaTypes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;application/openmetrics-text;version=1.0.0;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        converter<span class="token punctuation">.</span><span class="token function">setSupportedMediaTypes</span><span class="token punctuation">(</span>supportedMediaTypes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> converter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2>`,5),r={href:"https://github.com/spring-projects/spring-boot/issues/31150",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const s=i("ExternalLinkIcon");return t(),e("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[p("WebMvcMetricsFilter stopped working since 2.7.0"),o(s)])])])])}const g=a(l,[["render",k],["__file","prometheus.html.vue"]]);export{g as default};