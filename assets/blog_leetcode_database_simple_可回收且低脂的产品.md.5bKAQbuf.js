import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const m=JSON.parse('{"title":"可回收且低脂的产品","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-24T14:30:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/可回收且低脂的产品.md","filePath":"blog/leetcode/database/simple/可回收且低脂的产品.md","lastUpdated":null}'),e={name:"blog/leetcode/database/simple/可回收且低脂的产品.md"},l=p(`<h1 id="可回收且低脂的产品" tabindex="-1">可回收且低脂的产品 <a class="header-anchor" href="#可回收且低脂的产品" aria-label="Permalink to &quot;可回收且低脂的产品&quot;">​</a></h1><p>表：<code>Products</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| Column Name | Type    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| product_id  | int     |</span></span>
<span class="line"><span>| low_fats    | enum    |</span></span>
<span class="line"><span>| recyclable  | enum    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>product_id 是该表的主键（具有唯一值的列）。</span></span>
<span class="line"><span>low_fats 是枚举类型，取值为以下两种 (&#39;Y&#39;, &#39;N&#39;)，其中 &#39;Y&#39; 表示该产品是低脂产品，&#39;N&#39; 表示不是低脂产品。</span></span>
<span class="line"><span>recyclable 是枚举类型，取值为以下两种 (&#39;Y&#39;, &#39;N&#39;)，其中 &#39;Y&#39; 表示该产品可回收，而 &#39;N&#39; 表示不可回收。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>编写解决方案找出既是低脂又是可回收的产品编号。</p><p>返回结果 <strong>无顺序要求</strong> 。</p><p>返回结果格式如下例所示：</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Products 表：</span></span>
<span class="line"><span>+-------------+----------+------------+</span></span>
<span class="line"><span>| product_id  | low_fats | recyclable |</span></span>
<span class="line"><span>+-------------+----------+------------+</span></span>
<span class="line"><span>| 0           | Y        | N          |</span></span>
<span class="line"><span>| 1           | Y        | Y          |</span></span>
<span class="line"><span>| 2           | N        | Y          |</span></span>
<span class="line"><span>| 3           | Y        | Y          |</span></span>
<span class="line"><span>| 4           | N        | N          |</span></span>
<span class="line"><span>+-------------+----------+------------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span>| product_id  |</span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span>| 1           |</span></span>
<span class="line"><span>| 3           |</span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>只有产品 id 为 1 和 3 的产品，既是低脂又是可回收的产品。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h1 id="方法一-根据条件选择行" tabindex="-1">方法一：根据条件选择行 <a class="header-anchor" href="#方法一-根据条件选择行" aria-label="Permalink to &quot;方法一：根据条件选择行&quot;">​</a></h1><p>关键字 SELECT 用于指定我们想要从表 Products 中检索的列。在这种情况下，我们想要检索 product_id 列。</p><p>关键字 WHERE 用于根据特定条件过滤表 Products 中的行，条件是 low_fats 列的值为&quot;Y&quot;（表示低脂肪产品）且 recyclable 列的值为&quot;Y&quot;（表示可回收产品）。我们使用逻辑运算符 AND 将两个条件组合起来，确保最终结果只包含既是低脂肪产品又是可回收产品的产品ID。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    product_id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Products</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    low_fats </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Y&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> recyclable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Y&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,12),i=[l];function r(c,t,b,d,o,u){return n(),a("div",null,i)}const k=s(e,[["render",r]]);export{m as __pageData,k as default};
