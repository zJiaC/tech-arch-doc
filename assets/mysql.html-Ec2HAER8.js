import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as a,a as r,b as l,d as h,f as t}from"./app-9HIzqMwZ.js";const d={},n=l("h1",{id:"mysql-知识查缺补漏",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#mysql-知识查缺补漏","aria-hidden":"true"},"#"),h(" MySQL 知识查缺补漏")],-1),s=t('<h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><h3 id="单列索引" tabindex="-1"><a class="header-anchor" href="#单列索引" aria-hidden="true">#</a> 单列索引</h3><ul><li>NORMAL</li><li>UNIQUE</li><li>SPATIAL</li><li>FULLTEXT</li></ul><h3 id="组合索引" tabindex="-1"><a class="header-anchor" href="#组合索引" aria-hidden="true">#</a> 组合索引</h3><ul><li>实际上就是多行捆绑在一起，同样支持上诉单列索引类型</li></ul><h3 id="explain" tabindex="-1"><a class="header-anchor" href="#explain" aria-hidden="true">#</a> explain</h3><ul><li>select_type 查询类型</li><li>table 查询的表</li><li>type MySQL 决定如何查找对应的记录，效率从高到低 system &gt; const &gt; eq_ref &gt; ref &gt; range &gt; index &gt; all</li><li>possible_keys 执行查询时可能会用到的索引</li><li>key 实际使用的索引</li><li>key_len MySQL 在索引里使用的字节数，字段的最大可能长度</li><li>rows 扫描的行数</li><li>extra 附加说明</li></ul><h3 id="最左优先原则" tabindex="-1"><a class="header-anchor" href="#最左优先原则" aria-hidden="true">#</a> 最左优先原则</h3><h4 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理" aria-hidden="true">#</a> 底层原理</h4><ul><li>B+ 树</li><li>innoDB 与 MyISAM 实现不同之处</li><li>数据本身就是索引的一部分(所以这里建议使用自增)</li><li>非主键索引的数据实际上存储的是对应记录的主键值(因此 InnoDB 必须要有主键，若没有也会自动查找替代)</li></ul><h2 id="锁机制" tabindex="-1"><a class="header-anchor" href="#锁机制" aria-hidden="true">#</a> 锁机制</h2><h4 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h4><ul><li>读未提交 存在脏读问题</li><li>读已提交 存在不可重复读问题</li><li>可重复读 存在幻读问题</li><li>串行读</li></ul><p>在 RR 级别下，MySQL 一定程度上解决幻读问题</p><ul><li><p>快照读（不加锁） mvcc</p></li><li><p>当前读（加锁）next-key</p></li><li><p>读锁和写锁</p><ul><li>读锁 也叫共享锁</li><li>写锁 也叫排他锁</li></ul></li><li><p>全局锁、表锁、行锁</p><ul><li>记录锁 仅仅锁住索引记录的一行，锁住的永远是索引而非记录本身，如果表上没有任何索引，后台会创建一个隐藏的聚集主键索引，当一条 sql 没走任何索引会将每条聚合索引加写锁类似表锁。</li><li>间隙锁 <ul><li>防止幻读</li></ul></li><li>临键锁 <ul><li>左开右闭区间</li><li>记录锁和间隙锁的组合</li></ul></li></ul></li></ul><p>使用唯一索引进行精准匹配，但表中不存在记录，自动转换为间隙锁<br> 使用唯一索引进行精准匹配，且表中存在记录，自动转换为记录锁<br> 普通索引不管只要加锁都会产生间隙锁</p>',16);function c(o,u){return e(),a("div",null,[n,r(" more "),s])}const _=i(d,[["render",c],["__file","mysql.html.vue"]]);export{_ as default};