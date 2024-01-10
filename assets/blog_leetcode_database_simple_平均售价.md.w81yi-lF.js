import{_ as s,o as n,c as a,U as p}from"./chunks/framework.nmnrFtMU.js";const _=JSON.parse('{"title":"平均售价","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2024-01-03T23:50:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/平均售价.md","filePath":"blog/leetcode/database/simple/平均售价.md","lastUpdated":1704376225000}'),e={name:"blog/leetcode/database/simple/平均售价.md"},l=p(`<h1 id="平均售价" tabindex="-1">平均售价 <a class="header-anchor" href="#平均售价" aria-label="Permalink to &quot;平均售价&quot;">​</a></h1><p>表：<code>Prices</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| Column Name   | Type    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| product_id    | int     |</span></span>
<span class="line"><span>| start_date    | date    |</span></span>
<span class="line"><span>| end_date      | date    |</span></span>
<span class="line"><span>| price         | int     |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>(product_id，start_date，end_date) 是 prices 表的主键（具有唯一值的列的组合）。</span></span>
<span class="line"><span>prices 表的每一行表示的是某个产品在一段时期内的价格。</span></span>
<span class="line"><span>每个产品的对应时间段是不会重叠的，这也意味着同一个产品的价格时段不会出现交叉。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>表：<code>UnitsSold</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| Column Name   | Type    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| product_id    | int     |</span></span>
<span class="line"><span>| purchase_date | date    |</span></span>
<span class="line"><span>| units         | int     |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>该表可能包含重复数据。</span></span>
<span class="line"><span>该表的每一行表示的是每种产品的出售日期，单位和产品 id。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>编写解决方案以查找每种产品的平均售价。<code>average_price</code> 应该 <strong>四舍五入到小数点后两位</strong>。</p><p>返回结果表 <strong>无顺序要求</strong> 。</p><p>结果格式如下例所示。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Prices table:</span></span>
<span class="line"><span>+------------+------------+------------+--------+</span></span>
<span class="line"><span>| product_id | start_date | end_date   | price  |</span></span>
<span class="line"><span>+------------+------------+------------+--------+</span></span>
<span class="line"><span>| 1          | 2019-02-17 | 2019-02-28 | 5      |</span></span>
<span class="line"><span>| 1          | 2019-03-01 | 2019-03-22 | 20     |</span></span>
<span class="line"><span>| 2          | 2019-02-01 | 2019-02-20 | 15     |</span></span>
<span class="line"><span>| 2          | 2019-02-21 | 2019-03-31 | 30     |</span></span>
<span class="line"><span>+------------+------------+------------+--------+</span></span>
<span class="line"><span>UnitsSold table:</span></span>
<span class="line"><span>+------------+---------------+-------+</span></span>
<span class="line"><span>| product_id | purchase_date | units |</span></span>
<span class="line"><span>+------------+---------------+-------+</span></span>
<span class="line"><span>| 1          | 2019-02-25    | 100   |</span></span>
<span class="line"><span>| 1          | 2019-03-01    | 15    |</span></span>
<span class="line"><span>| 2          | 2019-02-10    | 200   |</span></span>
<span class="line"><span>| 2          | 2019-03-22    | 30    |</span></span>
<span class="line"><span>+------------+---------------+-------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+------------+---------------+</span></span>
<span class="line"><span>| product_id | average_price |</span></span>
<span class="line"><span>+------------+---------------+</span></span>
<span class="line"><span>| 1          | 6.96          |</span></span>
<span class="line"><span>| 2          | 16.96         |</span></span>
<span class="line"><span>+------------+---------------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>平均售价 = 产品总价 / 销售的产品数量。</span></span>
<span class="line"><span>产品 1 的平均售价 = ((100 * 5)+(15 * 20) )/ 115 = 6.96</span></span>
<span class="line"><span>产品 2 的平均售价 = ((200 * 15)+(30 * 30) )/ 230 = 16.96</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="方法一" tabindex="-1">方法一： <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一：&quot;">​</a></h2>`,11),i=[l];function r(c,b,t,d,u,o){return n(),a("div",null,i)}const h=s(e,[["render",r]]);export{_ as __pageData,h as default};
