import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const h=JSON.parse('{"title":"每天的领导和合伙人","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-24T16:30:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/每天的领导和合伙人.md","filePath":"blog/leetcode/database/simple/每天的领导和合伙人.md","lastUpdated":null}'),e={name:"blog/leetcode/database/simple/每天的领导和合伙人.md"},l=p(`<h1 id="每天的领导和合伙人" tabindex="-1">每天的领导和合伙人 <a class="header-anchor" href="#每天的领导和合伙人" aria-label="Permalink to &quot;每天的领导和合伙人&quot;">​</a></h1><p>表：<code>DailySales</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| Column Name | Type    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| date_id     | date    |</span></span>
<span class="line"><span>| make_name   | varchar |</span></span>
<span class="line"><span>| lead_id     | int     |</span></span>
<span class="line"><span>| partner_id  | int     |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>该表没有主键(具有唯一值的列)。它可能包含重复项。</span></span>
<span class="line"><span>该表包含日期、产品的名称，以及售给的领导和合伙人的编号。</span></span>
<span class="line"><span>名称只包含小写英文字母。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>对于每一个 <code>date_id</code> 和 <code>make_name</code>，找出 <strong>不同</strong> 的 <code>lead_id</code> 以及 <strong>不同</strong> 的 <code>partner_id</code> 的数量。</p><p>按 <strong>任意顺序</strong> 返回结果表。</p><p>返回结果格式如下示例所示。</p><p><strong>示例 1:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>DailySales 表：</span></span>
<span class="line"><span>+-----------+-----------+---------+------------+</span></span>
<span class="line"><span>| date_id   | make_name | lead_id | partner_id |</span></span>
<span class="line"><span>+-----------+-----------+---------+------------+</span></span>
<span class="line"><span>| 2020-12-8 | toyota    | 0       | 1          |</span></span>
<span class="line"><span>| 2020-12-8 | toyota    | 1       | 0          |</span></span>
<span class="line"><span>| 2020-12-8 | toyota    | 1       | 2          |</span></span>
<span class="line"><span>| 2020-12-7 | toyota    | 0       | 2          |</span></span>
<span class="line"><span>| 2020-12-7 | toyota    | 0       | 1          |</span></span>
<span class="line"><span>| 2020-12-8 | honda     | 1       | 2          |</span></span>
<span class="line"><span>| 2020-12-8 | honda     | 2       | 1          |</span></span>
<span class="line"><span>| 2020-12-7 | honda     | 0       | 1          |</span></span>
<span class="line"><span>| 2020-12-7 | honda     | 1       | 2          |</span></span>
<span class="line"><span>| 2020-12-7 | honda     | 2       | 1          |</span></span>
<span class="line"><span>+-----------+-----------+---------+------------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+-----------+-----------+--------------+-----------------+</span></span>
<span class="line"><span>| date_id   | make_name | unique_leads | unique_partners |</span></span>
<span class="line"><span>+-----------+-----------+--------------+-----------------+</span></span>
<span class="line"><span>| 2020-12-8 | toyota    | 2            | 3               |</span></span>
<span class="line"><span>| 2020-12-7 | toyota    | 1            | 2               |</span></span>
<span class="line"><span>| 2020-12-8 | honda     | 2            | 2               |</span></span>
<span class="line"><span>| 2020-12-7 | honda     | 3            | 2               |</span></span>
<span class="line"><span>+-----------+-----------+--------------+-----------------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>在 2020-12-8，丰田（toyota）有领导者 = [0, 1] 和合伙人 = [0, 1, 2] ，同时本田（honda）有领导者 = [1, 2] 和合伙人 = [1, 2]。</span></span>
<span class="line"><span>在 2020-12-7，丰田（toyota）有领导者 = [0] 和合伙人 = [1, 2] ，同时本田（honda）有领导者 = [0, 1, 2] 和合伙人 = [1, 2]。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="方法一-group-by-与-聚合" tabindex="-1">方法一：Group by 与 聚合 <a class="header-anchor" href="#方法一-group-by-与-聚合" aria-label="Permalink to &quot;方法一：Group by 与 聚合&quot;">​</a></h2><p>在SQL中，我们将使用带有 <code>date_id</code> 和 <code>make_name</code> 的 GROUP BY 聚合子句将每个相似的 <code>date_id</code> 和 <code>make_name</code> 行组合在一起。为了计算唯一的 <code>lead_id</code> 和 <code>Partner_id</code>，我们使用 COUNT(DISTINCT {column_name}) 来统计指定的每一列中唯一出现的次数。在本例中，传入的列名为 <code>lead_id</code> 和 <code>partner_id</code>。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    date_id,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    make_name,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">distinct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lead_id) unique_leads,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">distinct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> partner_id) unique_partners</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DailySales</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    date_id,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    make_name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,11),i=[l];function r(c,t,d,o,b,m){return n(),a("div",null,i)}const k=s(e,[["render",r]]);export{h as __pageData,k as default};
