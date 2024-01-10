import{_ as s,D as d,o,c as l,m as t,a as e,I as i,w as r,U as n}from"./chunks/framework.nmnrFtMU.js";const p="/assets/redis官网简介.py9rXXs_.png",h="/assets/github简介.WjLFEfe3.png",c="/assets/redis和mysql.EADRT1M_.png",m="/assets/redis总体功能.ayaVsMek.png",_="/assets/redis小总结.0-LSyqgO.png",u="/assets/redis版本演进.YyuPyGxJ.png",f="/assets/redis7核心特性概览.xydMQmNW.png",b="/assets/RedisFunctions.GKiCuC0g.png",g="/assets/Client-eviction.scoo9a8n.png",R="/assets/Multi-part_AOF.VjtCf8uT.png",k="/assets/ACL_v2.LcA0At7e.png",q="/assets/新增命令.8Lrd7uxR.png",O=JSON.parse('{"title":"Redis入门概述","description":"","frontmatter":{"cover":"/blog/database/redis/images/redis版本演进.png","recommend":false,"tag":["Redis"],"date":"2023-12-29T16:30:00.000Z"},"headers":[],"relativePath":"blog/database/redis/Redis入门概述.md","filePath":"blog/database/redis/Redis入门概述.md","lastUpdated":1704891399000}'),P={name:"blog/database/redis/Redis入门概述.md"},x=t("h1",{id:"redis入门概述",tabindex:"-1"},[e("Redis入门概述 "),t("a",{class:"header-anchor",href:"#redis入门概述","aria-label":'Permalink to "Redis入门概述"'},"​")],-1),y=t("h2",{id:"_1-是什么",tabindex:"-1"},[e("1 是什么 "),t("a",{class:"header-anchor",href:"#_1-是什么","aria-label":'Permalink to "1 是什么"'},"​")],-1),w=n('<p>官网解释：</p><p><img src="'+p+'" alt="redis官网简介"></p><p>Redis 是一种开源（BSD 许可）的内存数据结构存储，用作数据库、缓存、消息代理和流式处理引擎。Redis 提供数据结构，例如字符串、哈希、列表、集、带有范围查询的排序集、位图、超日志、地理空间索引和流。Redis 具有内置复制、Lua 脚本、LRU 逐出、事务和不同级别的磁盘持久性，并通过 Redis Sentinel 和 Redis 集群的自动分区提供高可用性。</p><p>github解释：</p><p><img src="'+h+'" alt="redis官网简介"></p><p>Redis 是保留在磁盘上的内存数据库。数据模型是键值，但支持许多不同类型的值：字符串、列表、集、排序集、哈希、流、HyperLogLogs、位图。</p><p>作者github：<a href="https://github.com/antirez" target="_blank" rel="noreferrer">https://github.com/antirez</a></p><p>作者博客：<a href="http://www.antirez.com/" target="_blank" rel="noreferrer">http://www.antirez.com/</a></p><h2 id="_2-能干嘛" tabindex="-1">2 能干嘛 <a class="header-anchor" href="#_2-能干嘛" aria-label="Permalink to &quot;2 能干嘛&quot;">​</a></h2><p>为什么要引入 Redis 这门技术。</p><h3 id="主流功能与应用" tabindex="-1">主流功能与应用 <a class="header-anchor" href="#主流功能与应用" aria-label="Permalink to &quot;主流功能与应用&quot;">​</a></h3><ol><li><p>分布式缓存，帮 MySQL 减负</p><p>主流的系统都遵循28原则，80%查询和20%写入。MySQL 主要是做持久化存储，保证一致性，存储在硬盘。为了分担 MySQL 的查询压力，读写分离，引入了 Redis 。</p><p><img src="'+c+'" alt="redis和mysql"></p><p>Redis 与 MySQL 的关系：</p><ul><li>Redis 是 key-value 数据库（NoSQL一种），MySQL 是关系数据库</li><li>Redis 数据操作主要在内存，而 MySQL 主要存储在磁盘</li><li>Redis 在某一些场景使用中要明显优于 MySQL ，比如计数器、排行榜等方面</li><li>Redis 通常用于一些特定场景，需要与 MySQL 一起配合使用</li><li>两者并不是相互替换和竞争关系，而是共用和配合使用</li></ul></li><li><p>内存存储和持久化（RDB + AOF）</p><p>Redis 支持异步将内存中的数据持久化到硬盘，同时不影响继续服务。</p></li><li><p>高可用架构选配</p><p>单机、主从、哨兵、集群</p></li><li><p>缓存穿透、击穿、雪崩</p></li><li><p>分布式锁</p></li><li><p>队列</p><p>Reids 提供 list 和 set 操作，这使得 Redis 能作为一个很好的消息队列平台来使用。</p><p>我们常通过 Reids 的队列功能做购买限制。比如到节假日或者推广期间，进行一些活动，对用户购买行为进行限制，限制今天只能购买几次商品或者一段时间内只能购买一次。也比较适合适用。</p></li><li><p>排行榜、点赞</p><p>在互联网应用中，有各种各样的排行榜，如电商网站的月度销量排行榜、社交APP的礼物排行榜、小程序的投票排行榜等等。Redis 提供的 zset 数据类型能够快速实现这些复杂的排行榜。</p><p>比如小说网站对小说进行排名，根据排名，将排名靠前的小说推荐给用户。</p></li></ol><h3 id="总体功能概述" tabindex="-1">总体功能概述 <a class="header-anchor" href="#总体功能概述" aria-label="Permalink to &quot;总体功能概述&quot;">​</a></h3><p><img src="'+m+'" alt="redis总体功能"></p><h3 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h3><ul><li>性能极高，Redis 能读的速度是110000次/秒，写的速度是81000次/秒</li><li>Redis 数据类型丰富，不仅仅支持简单的 key-value 类型的数据，同时还提供 list，set，Zset，hash 等数据结构的存储</li><li>Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用</li><li>Redis支持数据的备份，即 master-slave 模式的数据备份</li></ul><h3 id="小总结" tabindex="-1">小总结 <a class="header-anchor" href="#小总结" aria-label="Permalink to &quot;小总结&quot;">​</a></h3><p><img src="'+_+'" alt="redis小总结"></p><h2 id="_3-去哪下" tabindex="-1">3 去哪下 <a class="header-anchor" href="#_3-去哪下" aria-label="Permalink to &quot;3 去哪下&quot;">​</a></h2><h3 id="官网地址" tabindex="-1">官网地址 <a class="header-anchor" href="#官网地址" aria-label="Permalink to &quot;官网地址&quot;">​</a></h3><p>英文：<a href="https://redis.io" target="_blank" rel="noreferrer">https://redis.io</a></p><p>中文：</p><ul><li><a href="http://www.redis.cn" target="_blank" rel="noreferrer">http://www.redis.cn</a></li><li><a href="https://www.redis.com.cn/documentation.html" target="_blank" rel="noreferrer">https://www.redis.com.cn/documentation.html</a></li></ul><h3 id="下载安装" tabindex="-1">下载安装 <a class="header-anchor" href="#下载安装" aria-label="Permalink to &quot;下载安装&quot;">​</a></h3><p>Redis 下载地址：<a href="https://www.redis.io/download" target="_blank" rel="noreferrer">https://www.redis.io/download</a></p><h3 id="其他文档资料" tabindex="-1">其他文档资料 <a class="header-anchor" href="#其他文档资料" aria-label="Permalink to &quot;其他文档资料&quot;">​</a></h3><p>Redis 源码地址：<a href="https://github.com/redis/redis" target="_blank" rel="noreferrer">https://github.com/redis/redis</a></p><p>Redis 在线测试：<a href="https://try.redis.io" target="_blank" rel="noreferrer">https://try.redis.io</a></p><p>Redis 命令参考：<a href="http://doc.redisfans.com" target="_blank" rel="noreferrer">http://doc.redisfans.com</a></p><h2 id="_4-redis-版本迭代推演介绍" tabindex="-1">4 Redis 版本迭代推演介绍 <a class="header-anchor" href="#_4-redis-版本迭代推演介绍" aria-label="Permalink to &quot;4 Redis 版本迭代推演介绍&quot;">​</a></h2><p>里程碑的重要版本：</p><p><img src="'+u+'" alt="redis版本演进"></p><p>版本命名规则：</p><p>版本号第二位如果是奇数，则为非稳定版本 如2.7、2.9、3.1；版本号第二位如果是偶数，则为稳定版本 如2.6、2.8、3.0、3.2，当前奇数版本就是下一个稳定版本的开发版本，如2.9版本是3.0版本的开发版本。</p><p>历史发布版本的源码：<a href="https://download.redis.io/releases/" target="_blank" rel="noreferrer">https://download.redis.io/releases/</a></p><h2 id="_5-redis7-新特性概述" tabindex="-1">5 Redis7 新特性概述 <a class="header-anchor" href="#_5-redis7-新特性概述" aria-label="Permalink to &quot;5 Redis7 新特性概述&quot;">​</a></h2><p>新特性概述：<a href="https://github.com/redis/redis/releases" target="_blank" rel="noreferrer">https://github.com/redis/redis/releases</a></p><p>部分新特性总览：</p><p>2022 年 4 月正式发布的 Redis 7.0 是目前 Redis 历史版本中变化最大的版本。首先，它有超过 50 个以上新增命令；其次，它有大量核心特性的新增和改进。</p><p><img src="'+f+'" alt="redis7核心特性概览"></p><h3 id="redis-functions" tabindex="-1">Redis Functions <a class="header-anchor" href="#redis-functions" aria-label="Permalink to &quot;Redis Functions&quot;">​</a></h3><p><img src="'+b+'" alt="RedisFunctions"></p><h3 id="client-eviction" tabindex="-1">Client-eviction <a class="header-anchor" href="#client-eviction" aria-label="Permalink to &quot;Client-eviction&quot;">​</a></h3><p><img src="'+g+'" alt="Client-eviction"></p><h3 id="multi-part-aof" tabindex="-1">Multi-part AOF <a class="header-anchor" href="#multi-part-aof" aria-label="Permalink to &quot;Multi-part AOF&quot;">​</a></h3><p><img src="'+R+'" alt="Multi-part_AOF"></p><h3 id="acl-v2" tabindex="-1">ACL v2 <a class="header-anchor" href="#acl-v2" aria-label="Permalink to &quot;ACL v2&quot;">​</a></h3><p><img src="'+k+'" alt="ACL_v2"></p><h3 id="新增命令" tabindex="-1">新增命令 <a class="header-anchor" href="#新增命令" aria-label="Permalink to &quot;新增命令&quot;">​</a></h3><p><img src="'+q+'" alt="新增命令"></p><h3 id="listpack" tabindex="-1">listpack <a class="header-anchor" href="#listpack" aria-label="Permalink to &quot;listpack&quot;">​</a></h3><p>listpack 是用来替代 ziplist 的新数据结构，在 7.0 版本已经没有 ziplist 的配置了（6.0版本仅部分数据类型作为过渡阶段在使用）</p><h3 id="总体概述" tabindex="-1">总体概述 <a class="header-anchor" href="#总体概述" aria-label="Permalink to &quot;总体概述&quot;">​</a></h3><p>大体和之前的redis版本保持一致和稳定，主要是自身底层性能和资源利用率上的优化和提高。</p><table><thead><tr><th>多AOF文件支持</th><th>7.0 版本中一个比较大的变化就是 aof 文件由一个变成了多个，主要分为两种类型：基本文件(base files)、增量文件(incr files)，请注意这些文件名称是复数形式说明每一类文件不仅仅只有一个。在此之外还引入了一个清单文件(manifest) 用于跟踪文件以及文件的创建和应用顺序（恢复）</th></tr></thead><tbody><tr><td>config命令增强</td><td>对于Config Set 和Get命令，支持在一次调用过程中传递多个配置参数。例如，现在我们可以在执行一次Config Set命令中更改多个参数： config set maxmemory 10000001 maxmemory-clients 50% port 6399</td></tr><tr><td>限制客户端内存使用Client-eviction</td><td>一旦 Redis 连接较多，再加上每个连接的内存占用都比较大的时候， Redis总连接内存占用可能会达到maxmemory的上限，可以增加允许限制所有客户端的总内存使用量配置项，redis.config 中对应的配置项// 两种配置形式：指定内存大小、基于 maxmemory 的百分比。maxmemory-clients 1gmaxmemory-clients 10%</td></tr><tr><td>listpack紧凑列表调整</td><td>listpack 是用来替代 ziplist 的新数据结构，在 7.0 版本已经没有 ziplist 的配置了（6.0版本仅部分数据类型作为过渡阶段在使用）listpack 已经替换了 ziplist 类似 hash-max-ziplist-entries 的配置</td></tr><tr><td>访问安全性增强ACLV2</td><td>在redis.conf配置文件中，protected-mode默认为yes，只有当你希望你的客户端在没有授权的情况下可以连接到Redis server的时候可以将protected-mode设置为no</td></tr><tr><td>Redis Functions</td><td>Redis函数，一种新的通过服务端脚本扩展Redis的方式，函数与数据本身一起存储。简言之，redis自己要去抢夺Lua脚本的饭碗</td></tr><tr><td>RDB保存时间调整</td><td>将持久化文件RDB的保存规则发生了改变，尤其是时间记录频度变化</td></tr><tr><td>命令新增和变动</td><td>Zset (有序集合)增加 ZMPOP、BZMPOP、ZINTERCARD 等命令Set (集合)增加 SINTERCARD 命令LIST (列表)增加 LMPOP、BLMPOP ，从提供的键名列表中的第一个非空列表键中弹出一个或多个元素。</td></tr><tr><td>性能资源利用率、安全、等改进</td><td>自身底层部分优化改动，Redis核心在许多方面进行了重构和改进主动碎片整理V2：增强版主动碎片整理，配合Jemalloc版本更新，更快更智能，延时更低HyperLogLog改进：在Redis5.0中，HyperLogLog算法得到改进，优化了计数统计时的内存使用效率，7更加优秀更好的内存统计报告如果不为了API向后兼容，我们将不再使用slave一词......(政治正确)</td></tr></tbody></table>',55);function L(v,S,A,C,M,T){const a=d("font");return o(),l("div",null,[x,y,t("p",null,[e("英文释义："),i(a,{color:"red"},{default:r(()=>[e("RE")]),_:1}),e("mote "),i(a,{color:"red"},{default:r(()=>[e("DI")]),_:1}),e("ctionary "),i(a,{color:"red"},{default:r(()=>[e("S")]),_:1}),e("erver（远程字典服务器）")]),w])}const z=s(P,[["render",L]]);export{O as __pageData,z as default};
