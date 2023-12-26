import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const m=JSON.parse('{"title":"组合两个表","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-26T12:10:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/组合两个表.md","filePath":"blog/leetcode/database/simple/组合两个表.md","lastUpdated":1703584971000}'),e={name:"blog/leetcode/database/simple/组合两个表.md"},l=p(`<h1 id="组合两个表" tabindex="-1">组合两个表 <a class="header-anchor" href="#组合两个表" aria-label="Permalink to &quot;组合两个表&quot;">​</a></h1><p>表: <code>Person</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| 列名         | 类型     |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| PersonId    | int     |</span></span>
<span class="line"><span>| FirstName   | varchar |</span></span>
<span class="line"><span>| LastName    | varchar |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>personId 是该表的主键（具有唯一值的列）。</span></span>
<span class="line"><span>该表包含一些人的 ID 和他们的姓和名的信息。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>表: <code>Address</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| 列名         | 类型    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| AddressId   | int     |</span></span>
<span class="line"><span>| PersonId    | int     |</span></span>
<span class="line"><span>| City        | varchar |</span></span>
<span class="line"><span>| State       | varchar |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>addressId 是该表的主键（具有唯一值的列）。</span></span>
<span class="line"><span>该表的每一行都包含一个 ID = PersonId 的人的城市和州的信息。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>编写解决方案，报告 <code>Person</code> 表中每个人的姓、名、城市和州。如果 <code>personId</code> 的地址不在 <code>Address</code> 表中，则报告为 <code>null</code> 。</p><p>以 <strong>任意顺序</strong> 返回结果表。</p><p>结果格式如下所示。</p><p><strong>示例 1:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入: </span></span>
<span class="line"><span>Person表:</span></span>
<span class="line"><span>+----------+----------+-----------+</span></span>
<span class="line"><span>| personId | lastName | firstName |</span></span>
<span class="line"><span>+----------+----------+-----------+</span></span>
<span class="line"><span>| 1        | Wang     | Allen     |</span></span>
<span class="line"><span>| 2        | Alice    | Bob       |</span></span>
<span class="line"><span>+----------+----------+-----------+</span></span>
<span class="line"><span>Address表:</span></span>
<span class="line"><span>+-----------+----------+---------------+------------+</span></span>
<span class="line"><span>| addressId | personId | city          | state      |</span></span>
<span class="line"><span>+-----------+----------+---------------+------------+</span></span>
<span class="line"><span>| 1         | 2        | New York City | New York   |</span></span>
<span class="line"><span>| 2         | 3        | Leetcode      | California |</span></span>
<span class="line"><span>+-----------+----------+---------------+------------+</span></span>
<span class="line"><span>输出: </span></span>
<span class="line"><span>+-----------+----------+---------------+----------+</span></span>
<span class="line"><span>| firstName | lastName | city          | state    |</span></span>
<span class="line"><span>+-----------+----------+---------------+----------+</span></span>
<span class="line"><span>| Allen     | Wang     | Null          | Null     |</span></span>
<span class="line"><span>| Bob       | Alice    | New York City | New York |</span></span>
<span class="line"><span>+-----------+----------+---------------+----------+</span></span>
<span class="line"><span>解释: </span></span>
<span class="line"><span>地址表中没有 personId = 1 的地址，所以它们的城市和州返回 null。</span></span>
<span class="line"><span>addressId = 1 包含了 personId = 2 的地址信息。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="方法一-left-join" tabindex="-1">方法一：left join <a class="header-anchor" href="#方法一-left-join" aria-label="Permalink to &quot;方法一：left join&quot;">​</a></h2><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    firstName,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lastName,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    city,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    state</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Person p</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">left join</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    Address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">personId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">personId</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,12),i=[l];function r(c,t,d,b,o,h){return n(),a("div",null,i)}const k=s(e,[["render",r]]);export{m as __pageData,k as default};
