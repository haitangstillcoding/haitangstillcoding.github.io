import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const _=JSON.parse('{"title":"列出指定时间段内所有的下单产品","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-26T18:00:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/列出指定时间段内所有的下单产品.md","filePath":"blog/leetcode/database/simple/列出指定时间段内所有的下单产品.md","lastUpdated":1703584971000}'),e={name:"blog/leetcode/database/simple/列出指定时间段内所有的下单产品.md"},l=p(`<h1 id="列出指定时间段内所有的下单产品" tabindex="-1">列出指定时间段内所有的下单产品 <a class="header-anchor" href="#列出指定时间段内所有的下单产品" aria-label="Permalink to &quot;列出指定时间段内所有的下单产品&quot;">​</a></h1><p>表: <code>Products</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+------------------+---------+</span></span>
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
<span class="line"><span>2020 年 2 月份下单 product_id = 5 的产品的数目总和为 (50 + 50) = 100 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="方法一" tabindex="-1">方法一： <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一：&quot;">​</a></h2>`,11),r=[l];function i(c,b,t,u,d,o){return n(),a("div",null,r)}const h=s(e,[["render",i]]);export{_ as __pageData,h as default};
