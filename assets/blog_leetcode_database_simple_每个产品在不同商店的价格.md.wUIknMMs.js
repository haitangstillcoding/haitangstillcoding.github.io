import{_ as s,o as n,c as a,U as p}from"./chunks/framework.nmnrFtMU.js";const k=JSON.parse('{"title":"每个产品在不同商店的价格","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-26T10:40:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/每个产品在不同商店的价格.md","filePath":"blog/leetcode/database/simple/每个产品在不同商店的价格.md","lastUpdated":1703584971000}'),e={name:"blog/leetcode/database/simple/每个产品在不同商店的价格.md"},i=p(`<h1 id="每个产品在不同商店的价格" tabindex="-1">每个产品在不同商店的价格 <a class="header-anchor" href="#每个产品在不同商店的价格" aria-label="Permalink to &quot;每个产品在不同商店的价格&quot;">​</a></h1><p>表：<code>Products</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| Column Name | Type    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| product_id  | int     |</span></span>
<span class="line"><span>| store1      | int     |</span></span>
<span class="line"><span>| store2      | int     |</span></span>
<span class="line"><span>| store3      | int     |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>在 SQL 中，这张表的主键是 product_id（产品Id）。</span></span>
<span class="line"><span>每行存储了这一产品在不同商店 store1, store2, store3 的价格。</span></span>
<span class="line"><span>如果这一产品在商店里没有出售，则值将为 null。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>请你重构 <code>Products</code> 表，查询每个产品在不同商店的价格，使得输出的格式变为<code>(product_id, store, price)</code> 。如果这一产品在商店里没有出售，则不输出这一行。</p><p>输出结果表中的 <strong>顺序不作要求</strong> 。</p><p>查询输出格式请参考下面示例。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Products table:</span></span>
<span class="line"><span>+------------+--------+--------+--------+</span></span>
<span class="line"><span>| product_id | store1 | store2 | store3 |</span></span>
<span class="line"><span>+------------+--------+--------+--------+</span></span>
<span class="line"><span>| 0          | 95     | 100    | 105    |</span></span>
<span class="line"><span>| 1          | 70     | null   | 80     |</span></span>
<span class="line"><span>+------------+--------+--------+--------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+------------+--------+-------+</span></span>
<span class="line"><span>| product_id | store  | price |</span></span>
<span class="line"><span>+------------+--------+-------+</span></span>
<span class="line"><span>| 0          | store1 | 95    |</span></span>
<span class="line"><span>| 0          | store2 | 100   |</span></span>
<span class="line"><span>| 0          | store3 | 105   |</span></span>
<span class="line"><span>| 1          | store1 | 70    |</span></span>
<span class="line"><span>| 1          | store3 | 80    |</span></span>
<span class="line"><span>+------------+--------+-------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>产品 0 在 store1、store2、store3 的价格分别为 95、100、105。</span></span>
<span class="line"><span>产品 1 在 store1、store3 的价格分别为 70、80。在 store2 无法买到。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="方法一-union-合并表格" tabindex="-1">方法一：union 合并表格 <a class="header-anchor" href="#方法一-union-合并表格" aria-label="Permalink to &quot;方法一：union 合并表格&quot;">​</a></h2><p>我们的任务是重新排列表格，这可以看作是将三个商店列组合成一列，并保留每个 product_id 对应的 price。为了实现这一点，我们可以使用 UNION 操作将数据连接在一起。</p><p>UNION 操作将多个 SELECT 语句的结果合并为一个结果集。我们可以使用三个 SELECT 语句分别获取每个商店列的数据，并使用 UNION 将它们合并。</p><p>以第一个表格为例，我们使用 SELECT 语句从表格 Produce 中检索数据，其中 store1 列的值不为空，将字符串 &quot;store1&quot; 作为 store 列的值，并将 store1 列重命名为 price。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    product_id,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;store1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> store,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    store1 price</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Products</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> store1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is not null</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">union</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    product_id,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;store2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> store,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    store2 price</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Products</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> store2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is not null</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">union</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    product_id,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;store3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> store,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    store3 price</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Products</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> store3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is not null</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,13),l=[i];function r(t,c,o,h,b,d){return n(),a("div",null,l)}const m=s(e,[["render",r]]);export{k as __pageData,m as default};
