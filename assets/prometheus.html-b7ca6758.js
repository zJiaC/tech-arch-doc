const t=JSON.parse('{"key":"v-5d4de9fb","path":"/posts/question/prometheus.html","title":"Fastjson 导致 Spring boot 接入 Prometheus 返回结果不正确","lang":"zh-CN","frontmatter":{"icon":"java","order":7,"date":"2022-11-07T00:00:00.000Z","category":["问题","运维","监控"],"tag":["prometheus","fastjson"],"description":"Fastjson 导致 Spring boot 接入 Prometheus 返回结果不正确 解决办法 添加 StringHttpMessageConverter 单独处理返回字符串类型，需要注意顺序排在 FastJsonHttpMessageConverter 之前 同时需要注意的一点，由于项目统一切片封装返回对象： 返回 String 的接口也会封装多一层成对象，导致 StringHttpMessageConverter 处理的时候将对象转成 String 从而出现错误 指定 MediaType 针对 prometheus 所用限制处理","head":[["meta",{"property":"og:url","content":"https://zjiac.github.io/tech-arch-doc/tech-arch-doc/posts/question/prometheus.html"}],["meta",{"property":"og:site_name","content":"zJiac 个人知识体系"}],["meta",{"property":"og:title","content":"Fastjson 导致 Spring boot 接入 Prometheus 返回结果不正确"}],["meta",{"property":"og:description","content":"Fastjson 导致 Spring boot 接入 Prometheus 返回结果不正确 解决办法 添加 StringHttpMessageConverter 单独处理返回字符串类型，需要注意顺序排在 FastJsonHttpMessageConverter 之前 同时需要注意的一点，由于项目统一切片封装返回对象： 返回 String 的接口也会封装多一层成对象，导致 StringHttpMessageConverter 处理的时候将对象转成 String 从而出现错误 指定 MediaType 针对 prometheus 所用限制处理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-11T08:43:12.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"prometheus"}],["meta",{"property":"article:tag","content":"fastjson"}],["meta",{"property":"article:published_time","content":"2022-11-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-11T08:43:12.000Z"}]]},"headers":[{"level":2,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[]},{"level":2,"title":"补充","slug":"补充","link":"#补充","children":[]}],"git":{"createdTime":1667799844000,"updatedTime":1668156192000,"contributors":[{"name":"zJiaC","email":"425226133@qq.com","commits":2}]},"readingTime":{"minutes":0.94,"words":281},"filePathRelative":"posts/question/prometheus.md","localizedDate":"2022年11月7日","excerpt":"<h1> Fastjson 导致 Spring boot 接入 Prometheus 返回结果不正确</h1>\\n<h2> 解决办法</h2>\\n<ul>\\n<li>添加 StringHttpMessageConverter 单独处理返回字符串类型，需要注意顺序排在 FastJsonHttpMessageConverter 之前</li>\\n<li>同时需要注意的一点，由于项目统一切片封装返回对象：\\n<ul>\\n<li>返回 String 的接口也会封装多一层成对象，导致 StringHttpMessageConverter 处理的时候将对象转成 String 从而出现错误</li>\\n<li>指定 MediaType 针对 prometheus 所用限制处理</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};
