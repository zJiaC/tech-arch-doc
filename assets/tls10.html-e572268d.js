const e=JSON.parse('{"key":"v-b8f54992","path":"/posts/coding-related/datasource/tls10.html","title":"JDK 停用 TLS10 导致数据库连接出错","lang":"zh-CN","frontmatter":{"title":"JDK 停用 TLS10 导致数据库连接出错","icon":"storage","date":"2022-07-08T00:00:00.000Z","category":["编程"],"tag":["Java","数据库"],"description":"JDK 停用 TLS10 导致数据库连接出错 原因 因为新版的 JDK 不推荐使用旧的 TLSV1.0 的协议，所以默认停用 TLS10 的支持 解决 更换 JDK 版本 修改 jre 配置 jre\\\\lib\\\\security\\\\ java.security 文件 修改 jdk.tls.disabledAlgorithms= 这行，去除 TLSv1 等 Dockerfile 里添加修改命令 首先通过 grep 找到对应行数","head":[["meta",{"property":"og:url","content":"https://zjiac.github.io/tech-arch-doc/tech-arch-doc/posts/coding-related/datasource/tls10.html"}],["meta",{"property":"og:site_name","content":"zJiac 个人知识体系"}],["meta",{"property":"og:title","content":"JDK 停用 TLS10 导致数据库连接出错"}],["meta",{"property":"og:description","content":"JDK 停用 TLS10 导致数据库连接出错 原因 因为新版的 JDK 不推荐使用旧的 TLSV1.0 的协议，所以默认停用 TLS10 的支持 解决 更换 JDK 版本 修改 jre 配置 jre\\\\lib\\\\security\\\\ java.security 文件 修改 jdk.tls.disabledAlgorithms= 这行，去除 TLSv1 等 Dockerfile 里添加修改命令 首先通过 grep 找到对应行数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-07-08T09:23:37.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:published_time","content":"2022-07-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-08T09:23:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JDK 停用 TLS10 导致数据库连接出错\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-08T00:00:00.000Z\\",\\"dateModified\\":\\"2022-07-08T09:23:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":2,"title":"解决","slug":"解决","link":"#解决","children":[{"level":3,"title":"更换 JDK 版本","slug":"更换-jdk-版本","link":"#更换-jdk-版本","children":[]},{"level":3,"title":"修改 jre 配置","slug":"修改-jre-配置","link":"#修改-jre-配置","children":[]},{"level":3,"title":"Dockerfile 里添加修改命令","slug":"dockerfile-里添加修改命令","link":"#dockerfile-里添加修改命令","children":[]},{"level":3,"title":"修改数据库支持 TLSV1.2","slug":"修改数据库支持-tlsv1-2","link":"#修改数据库支持-tlsv1-2","children":[]}]}],"git":{"createdTime":1657264315000,"updatedTime":1657272217000,"contributors":[{"name":"zJiaC","email":"425226133@qq.com","commits":2}]},"readingTime":{"minutes":0.55,"words":166},"filePathRelative":"posts/coding-related/datasource/tls10.md","localizedDate":"2022年7月8日","excerpt":"<h1> JDK 停用 TLS10 导致数据库连接出错</h1>\\n<h2> 原因</h2>\\n<p>因为新版的 JDK 不推荐使用旧的 TLSV1.0 的协议，所以默认停用 TLS10 的支持</p>\\n<h2> 解决</h2>\\n<h3> 更换 JDK 版本</h3>\\n<h3> 修改 jre 配置</h3>\\n<ul>\\n<li>jre\\\\lib\\\\security\\\\ java.security 文件</li>\\n<li>修改 jdk.tls.disabledAlgorithms= 这行，去除 TLSv1 等</li>\\n</ul>\\n<h3> Dockerfile 里添加修改命令</h3>\\n<ul>\\n<li>首先通过 grep 找到对应行数</li>\\n</ul>","autoDesc":true}');export{e as data};
