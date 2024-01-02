import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as r,a,b as t,d as p,f as i}from"./app-5ZoPpGpM.js";const h={},n=t("h1",{id:"cloud技术选型",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#cloud技术选型","aria-hidden":"true"},"#"),p(" Cloud技术选型")],-1),o=i('<h2 id="服务注册中心" tabindex="-1"><a class="header-anchor" href="#服务注册中心" aria-hidden="true">#</a> 服务注册中心</h2><p>​ 原理是将部署服务的机器地址记录到注册中心，服务消费者在有需求的时候，只需要查询注册中心，输入提供的服务名，就可以得到地址，从而发起调用。</p><p>主要有三种角色：<strong>服务提供者（RPC Server）、服务消费者（RPC Client）和服务注册中心（Registry）</strong></p><p>​ Eureka：Spring Cloud原生自带（停更）</p><p>​ Zookeeper：Eureka替换，旧技术</p><p>​ Consul：go语言写的</p><p>​ Nacos：百万级客户使用，完美替换Eureka（推荐使用）</p><table><thead><tr><th></th><th>Nacos</th><th>Eureka</th><th>Cosul</th><th>Zookeeper</th></tr></thead><tbody><tr><td>一致性协议</td><td>CP+AP</td><td>AP</td><td>CP</td><td>CP</td></tr><tr><td>健康检查</td><td>TCP/HTTP/MYSQL/Client Beat</td><td>Client Beat</td><td>TCP/HTTP/gRPC/Cmd</td><td>Keep Alive</td></tr><tr><td>负载均衡策略</td><td>权重/metadata/Selector</td><td>Ribbon</td><td>Fabio</td><td></td></tr><tr><td>雪崩保护</td><td>有</td><td>有</td><td>无</td><td>无</td></tr><tr><td>自动注销实例</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>访问协议</td><td>HTTP/DNS</td><td>HTTP</td><td>HTTP/DNS</td><td>TCP</td></tr><tr><td>监听支持</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>多数据中心</td><td>支持</td><td>支持</td><td>支持</td><td>不支持</td></tr><tr><td>跨注册中心同步</td><td>支持</td><td>不支持</td><td>支持</td><td>不支持</td></tr><tr><td>SpringCloud集成</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>Dubbo集成</td><td>支持</td><td>不支持</td><td>支持</td><td>支持</td></tr><tr><td>K8S集成</td><td>支持</td><td>不支持</td><td>支持</td><td>不支持</td></tr></tbody></table><table><thead><tr><th>组件名</th><th>语言</th><th>CAP</th><th>服务健康检查</th><th>对外暴露接口</th><th>Spring Cloud集成</th></tr></thead><tbody><tr><td>Eureka</td><td>Java</td><td>AP</td><td>可配支持</td><td>HTTP</td><td>已集成</td></tr><tr><td>Consul</td><td>Go</td><td>CP</td><td>支持</td><td>HTTP/DNS</td><td>已集成</td></tr><tr><td>Zookeeper</td><td>Java</td><td>CP</td><td>支持</td><td>客户端</td><td>已集成</td></tr><tr><td>Nacos</td><td>Java</td><td>AP&amp;CP</td><td>支持</td><td></td><td>已集成</td></tr></tbody></table><p>C:Consistency（强一致性）</p><p>A:Availability（可用性）</p><p>P:Partition tolerance（分区容错性）</p><p>CAP理论关注粒度是数据，而不是整体系统设计的策略</p><h2 id="服务调用" tabindex="-1"><a class="header-anchor" href="#服务调用" aria-hidden="true">#</a> 服务调用</h2><p>服务与服务之间的调用</p><p>​ Ribbon：继续使用（停止更新，进入维护阶段）</p><p>​ LoadBalancer：慢慢替换Ribbon</p><p>​ Feign：X</p><p>​ OpenFeign：Spring公司自己开发的</p><p>​ Dubbo：RPC调用</p><h2 id="服务熔断与降级" tabindex="-1"><a class="header-anchor" href="#服务熔断与降级" aria-hidden="true">#</a> 服务熔断与降级</h2><p>服务熔断<br> 服务熔断的作用类似于我们家用的保险丝，当某服务出现不可用或响应超时的情况时，为了防止整个系统出现雪崩，暂时停止对该服务的调用。</p><p>服务降级<br> 服务降级是从整个系统的负荷情况出发和考虑的，对某些负荷会比较高的情况，为了预防某些功能（业务场景）出现负荷过载或者响应慢的情况，在其内部暂时舍弃对一些非核心的接口和数据的请求，而直接返回一个提前准备好的fallback（退路）错误处理信息。这样，虽然提供的是一个有损的服务，但却保证了整个系统的稳定性和可用性。</p><p>​ Hystrix：企业大规模使用，官网不推荐</p><p>​ Resilience4j：国外大规模使用，替换Hystrix</p><p>​ Sentienl：国内推荐Sentienl，替换Hystrix</p><table><thead><tr><th></th><th>Sentienl</th><th>Hystrix</th><th>Resilience4j</th></tr></thead><tbody><tr><td>隔离策略</td><td>信号量隔离（并发线程数限流）</td><td>线程池隔离/信号量隔离</td><td>信号量隔离</td></tr><tr><td>熔断降级策略</td><td>基于响应时间、异常比率、异常数</td><td>基于异常比率</td><td>基于异常比率、响应时间</td></tr><tr><td>实时统计实现</td><td>滑动窗口（LeapArray）</td><td>滑动窗口（基于 RxJava）</td><td>Ring Bit Buffer</td></tr><tr><td>动态规则配置</td><td>支持多种数据源</td><td>支持多种数据源</td><td>有限支持</td></tr><tr><td>扩展性</td><td>多个扩展点</td><td>插件的形式</td><td>接口的形式</td></tr><tr><td>基于注解的支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>限流</td><td>基于 QPS，支持基于调用关系的限流</td><td>有限的支持</td><td>Rate Limiter</td></tr><tr><td>流量整形</td><td>支持预热模式、匀速器模式、预热排队模式</td><td>不支持</td><td>简单的 Rate Limiter 模式</td></tr><tr><td>系统自适应保护</td><td>支持</td><td>不支持</td><td>不支持</td></tr><tr><td>控制台</td><td>提供开箱即用的控制台，可配置规则、查看秒级监控、机器发现等</td><td>简单的监控查看</td><td>不提供控制台，可对接其它监控系统</td></tr></tbody></table><p>优缺点<br> Sentinel<br> 轻量级，核心库无多余依赖，性能损耗小。<br> 方便接入，开源生态广泛。Sentinel 对 Dubbo、Spring Cloud、Web Servlet、gRPC 等常用框架提供适配模块，只需引入相应依赖并简单配置即可快速接入；同时针对自定义的场景 Sentinel 还提供低侵入性的注解资源定义方式，方便自定义接入。<br> 丰富的流量控制场景。Sentinel 承接了阿里巴巴近 10 年的双十一大促流量的核心场景，流控维度包括流控指标、流控效果（塑形）、调用关系、热点、集群等各种维度，针对系统维度也提供自适应的保护机制。<br> 易用的控制台，提供实时监控、机器发现、规则管理等能力。<br> 完善的扩展性设计，提供多样化的 SPI 接口，方便用户根据需求给 Sentinel 添加自定义的逻辑。</p><p>Resilience4j<br> Resilience4j 是比较轻量的库，在较小较新的项目中使用还是比较方便的，但是 Resilience4j 只包含限流降级的基本场景，对于非常复杂的企业级服务架构可能无法很好地 cover 住；同时 Resilience4j 缺乏生产级别的配套设施（如提供规则管理和实时监控能力的控制台）。</p><p>Hystrix</p><p>优点</p><p>熔断与恢复:依赖服务A异常时切换至备份服务B，A恢复后自动回切。</p><p>异常记录:触发熔断原因可记录日志</p><p>流量控制:可限制依赖服务A被调用频率</p><p>实时监控:实时监控服务A状态(平均响应时间,调用次数等)</p><p>缺点</p><p>代码复杂度:引入额外中间件，增加编码复杂度</p><p>性能损耗:官方文档标明会损耗1%~5%的服务器性能(数据统计与线程池管理)</p><h2 id="服务网关" tabindex="-1"><a class="header-anchor" href="#服务网关" aria-hidden="true">#</a> 服务网关</h2><p>服务网关=路由转发 + 过滤器</p><p>1、路由转发：接收一切外界请求，转发到后端的微服务上去；</p><p>2、过滤器：在服务网关中可以完成一系列的横切功能，例如权限校验、限流以及监控等</p><p>​ Zuul：公司分列</p><p>​ Zuul2：胎死腹中</p><p>​ gateway：spring推荐</p><p>Zuul：</p><p>使用的是阻塞式的 API，不支持长连接，比如 websockets。</p><p>底层是servlet，Zuul处理的是http请求</p><p>没有提供异步支持，流控等均由hystrix支持。</p><h2 id="服务配置" tabindex="-1"><a class="header-anchor" href="#服务配置" aria-hidden="true">#</a> 服务配置</h2><p>为系统中的基础设施和微服务应用提供集中化的外部配置支持</p><p>​ spring cloud config：不在使用</p><p>​ apollo</p><p>​ Nacos：推荐</p><p><strong>阿里的nacos : 性能最好</strong></p><ol><li>他同时支持AP和CP模式,他根据服务注册选择临时和永久来决定走AP模式还是CP模式,</li><li>他这里支持CP模式对于我的理解来说,应该是为了配置中心集群,因为nacos可以同时作为注册中心和配置中心,</li><li>因为他的配置中心信息是保存在nacos里面的,假如因为nacos其中一台挂掉后,还没有同步配置信息,就可能发生配置不一致的情况.,</li><li>配置中心的配置变更是服务端有监听器,配置中心发生配置变化,然后服务端会监听到配置发生变化,从而做出改变</li></ol><p><strong>eureka+spring cloud config:</strong></p><ol><li>性能也不差,对于服务数量小于上千台来说,性能没有问题</li><li>eureka: 可以做注册中心,完全AP,支持注册中心之间的节点复制,同时支持服务端同时注册多个注册中心节点, 所以不存节点信息不一致的情况</li><li>config: 单独服务,是从git仓库拉取配置信息,然后服务端从config服务里面拉取配置信息缓存到本地仓库， 这里配置的变更比较麻烦,他需要结合bus组件,同时约束了只能用rabbitmq和kafka来进行通知服务端进行配置变更。</li><li>但是保证了数据的一致性,因为他的配置信息在git仓库上,git仓库只有一个,就会数据一致</li></ol><h2 id="服务总线" tabindex="-1"><a class="header-anchor" href="#服务总线" aria-hidden="true">#</a> 服务总线</h2><p>在微服务架构的系统中，通常会使用轻量级的消息代理来构建一个<strong>共用的消息主题</strong>，并让系统中所有微服务实例都连接上来，由于该主题中产生的消息会被所有实例监听和消费，所以称它为消息总线。在总线上的各个实例，都可以方便地广播一些需要让其他连接在该主题上的实例都知道的消息。</p><p>​ Bus：不推荐</p><p>​ Nacos：推荐</p><h2 id="链路追踪" tabindex="-1"><a class="header-anchor" href="#链路追踪" aria-hidden="true">#</a> 链路追踪</h2><p>​ sleuth</p><p>​ skywalking</p><h2 id="鉴权" tabindex="-1"><a class="header-anchor" href="#鉴权" aria-hidden="true">#</a> 鉴权</h2><p>spring security</p><p>JWT</p><h2 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务" aria-hidden="true">#</a> 分布式事务</h2><p>seata</p><h2 id="服务监控" tabindex="-1"><a class="header-anchor" href="#服务监控" aria-hidden="true">#</a> 服务监控</h2><p>Spring Admin</p><p>普罗米修斯</p><h2 id="日志收集" tabindex="-1"><a class="header-anchor" href="#日志收集" aria-hidden="true">#</a> 日志收集</h2><p>logback + ELK</p><p>洛基</p><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><p>Docker Swarm</p><p>k8s</p><p>spring web flux</p><p>r2dbc</p>',81);function s(l,c){return e(),r("div",null,[n,a(" more "),o])}const P=d(h,[["render",s],["__file","microservices.html.vue"]]);export{P as default};
