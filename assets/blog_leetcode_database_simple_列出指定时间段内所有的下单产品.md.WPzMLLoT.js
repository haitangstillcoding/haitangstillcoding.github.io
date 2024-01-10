import{_ as s,o as n,c as a,U as p}from"./chunks/framework.nmnrFtMU.js";const m=JSON.parse('{"title":"列出指定时间段内所有的下单产品","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-26T18:00:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/列出指定时间段内所有的下单产品.md","filePath":"blog/leetcode/database/simple/列出指定时间段内所有的下单产品.md","lastUpdated":1703734987000}'),e={name:"blog/leetcode/database/simple/列出指定时间段内所有的下单产品.md"},l=p(`<h1 id="列出指定时间段内所有的下单产品" tabindex="-1">列出指定时间段内所有的下单产品 <a class="header-anchor" href="#列出指定时间段内所有的下单产品" aria-label="Permalink to &quot;列出指定时间段内所有的下单产品&quot;">​</a></h1><p>表: <code>Products</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+------------------+---------+</span></span>
<span class="line"><span>| Column Name      | Type    |</span></span>
<span class="line"><span>+------------------+---------+</span></span>
<span class="line"><span>| product_id       | int     |</span></span>
<span class="line"><span>| product_name     | varchar |</span></span>
<span class="line"><span>| product_category | varchar |</span></span>
<span class="line"><span>+------------------+---------+</span></span>
<span class="line"><span>product_id 是该表主键(具有唯一值的列)。</span></span>
<span class="line"><span>该表包含该公司产品的数据。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>表: <code>Orders</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| Column Name   | Type    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| product_id    | int     |</span></span>
<span class="line"><span>| order_date    | date    |</span></span>
<span class="line"><span>| unit          | int     |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>该表可能包含重复行。</span></span>
<span class="line"><span>product_id 是表单 Products 的外键（reference 列）。</span></span>
<span class="line"><span>unit 是在日期 order_date 内下单产品的数目。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>写一个解决方案，要求获取在 2020 年 2 月份下单的数量不少于 100 的产品的名字和数目。</p><p>返回结果表单的 <strong>顺序无要求</strong> 。</p><p>查询结果的格式如下。</p><p><strong>示例 1:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Products 表:</span></span>
<span class="line"><span>+-------------+-----------------------+------------------+</span></span>
<span class="line"><span>| product_id  | product_name          | product_category |</span></span>
<span class="line"><span>+-------------+-----------------------+------------------+</span></span>
<span class="line"><span>| 1           | Leetcode Solutions    | Book             |</span></span>
<span class="line"><span>| 2           | Jewels of Stringology | Book             |</span></span>
<span class="line"><span>| 3           | HP                    | Laptop           |</span></span>
<span class="line"><span>| 4           | Lenovo                | Laptop           |</span></span>
<span class="line"><span>| 5           | Leetcode Kit          | T-shirt          |</span></span>
<span class="line"><span>+-------------+-----------------------+------------------+</span></span>
<span class="line"><span>Orders 表:</span></span>
<span class="line"><span>+--------------+--------------+----------+</span></span>
<span class="line"><span>| product_id   | order_date   | unit     |</span></span>
<span class="line"><span>+--------------+--------------+----------+</span></span>
<span class="line"><span>| 1            | 2020-02-05   | 60       |</span></span>
<span class="line"><span>| 1            | 2020-02-10   | 70       |</span></span>
<span class="line"><span>| 2            | 2020-01-18   | 30       |</span></span>
<span class="line"><span>| 2            | 2020-02-11   | 80       |</span></span>
<span class="line"><span>| 3            | 2020-02-17   | 2        |</span></span>
<span class="line"><span>| 3            | 2020-02-24   | 3        |</span></span>
<span class="line"><span>| 4            | 2020-03-01   | 20       |</span></span>
<span class="line"><span>| 4            | 2020-03-04   | 30       |</span></span>
<span class="line"><span>| 4            | 2020-03-04   | 60       |</span></span>
<span class="line"><span>| 5            | 2020-02-25   | 50       |</span></span>
<span class="line"><span>| 5            | 2020-02-27   | 50       |</span></span>
<span class="line"><span>| 5            | 2020-03-01   | 50       |</span></span>
<span class="line"><span>+--------------+--------------+----------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+--------------------+---------+</span></span>
<span class="line"><span>| product_name       | unit    |</span></span>
<span class="line"><span>+--------------------+---------+</span></span>
<span class="line"><span>| Leetcode Solutions | 130     |</span></span>
<span class="line"><span>| Leetcode Kit       | 100     |</span></span>
<span class="line"><span>+--------------------+---------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>2020 年 2 月份下单 product_id = 1 的产品的数目总和为 (60 + 70) = 130 。</span></span>
<span class="line"><span>2020 年 2 月份下单 product_id = 2 的产品的数目总和为 80 。</span></span>
<span class="line"><span>2020 年 2 月份下单 product_id = 3 的产品的数目总和为 (2 + 3) = 5 。</span></span>
<span class="line"><span>2020 年 2 月份 product_id = 4 的产品并没有下单。</span></span>
<span class="line"><span>2020 年 2 月份下单 product_id = 5 的产品的数目总和为 (50 + 50) = 100 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="方法一" tabindex="-1">方法一： <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一：&quot;">​</a></h2><ol><li><p>SELECT 语句用于选择需要返回的列，其中 product_name 表示产品名称，sum(unit) unit 表示产品销售数量的汇总结果并使用别名 unit 进行标识。</p></li><li><p>FROM 子句用于指定查询所需的数据表，Products 和 Orders 分别表示产品信息表和订单信息表。</p></li><li><p>JOIN 关键字表示关联两个数据表，使用 using(product_id) 指定关联条件为两表中的 product_id 字段相等。</p></li><li><p>WHERE 子句用于对查询的数据进行筛选，使用 order_date &gt;= &#39;2020-02-01&#39; and order_date &lt; &#39;2020-03-01&#39; 条件来确定订单发生时间在 2020 年 2 月份。</p></li><li><p>GROUP BY 子句用于对数据进行分组，按照 product_name 来分组。</p></li><li><p>HAVING 子句用于对分组后的数据进行过滤，只有当 unit 汇总结果大于等于 100 时，当前分组的数据才被保留。</p></li></ol><p>注意：原本的查询是使用 year(order_date) = &#39;2020&#39; and month(order_date) = &#39;02&#39; 对日期进行筛选，但这种方法会使索引失效，影响查询性能。因此，可以使用 order_date &gt;= &#39;2020-02-01&#39; and order_date &lt; &#39;2020-03-01&#39; 来替代。还可以使用 where order_date like &#39;2020-02%&#39;，但是对于大批量数据的查询，这种方式的性能也可能较低。由于先对 SUM(unit) 进行了别名操作，故可以在 HAVING 子句中直接使用该别名 unit 进行条件筛选。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    product_name,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(unit) unit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Products</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">inner join</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Orders </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(product_id)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	order_date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2020-02-01&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> order_date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2020-03-01&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    product_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">having</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    unit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,14),i=[l];function r(c,t,d,b,u,o){return n(),a("div",null,i)}const k=s(e,[["render",r]]);export{m as __pageData,k as default};
