import{_ as s,o as n,c as a,U as p}from"./chunks/framework.nmnrFtMU.js";const o=JSON.parse('{"title":"使用唯一标识码替换员工ID","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-24T16:10:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/使用唯一标识码替换员工ID.md","filePath":"blog/leetcode/database/simple/使用唯一标识码替换员工ID.md","lastUpdated":1703552913000}'),e={name:"blog/leetcode/database/simple/使用唯一标识码替换员工ID.md"},l=p(`<h1 id="使用唯一标识码替换员工id" tabindex="-1">使用唯一标识码替换员工ID <a class="header-anchor" href="#使用唯一标识码替换员工id" aria-label="Permalink to &quot;使用唯一标识码替换员工ID&quot;">​</a></h1><p><code>Employees</code> 表：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| Column Name   | Type    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| id            | int     |</span></span>
<span class="line"><span>| name          | varchar |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>在 SQL 中，id 是这张表的主键。</span></span>
<span class="line"><span>这张表的每一行分别代表了某公司其中一位员工的名字和 ID 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>EmployeeUNI</code> 表：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| Column Name   | Type    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| id            | int     |</span></span>
<span class="line"><span>| unique_id     | int     |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>在 SQL 中，(id, unique_id) 是这张表的主键。</span></span>
<span class="line"><span>这张表的每一行包含了该公司某位员工的 ID 和他的唯一标识码（unique ID）。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>展示每位用户的 <strong>唯一标识码（unique ID ）</strong>；如果某位员工没有唯一标识码，使用 null 填充即可。</p><p>你可以以 <strong>任意</strong> 顺序返回结果表。</p><p>返回结果的格式如下例所示。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Employees 表:</span></span>
<span class="line"><span>+----+----------+</span></span>
<span class="line"><span>| id | name     |</span></span>
<span class="line"><span>+----+----------+</span></span>
<span class="line"><span>| 1  | Alice    |</span></span>
<span class="line"><span>| 7  | Bob      |</span></span>
<span class="line"><span>| 11 | Meir     |</span></span>
<span class="line"><span>| 90 | Winston  |</span></span>
<span class="line"><span>| 3  | Jonathan |</span></span>
<span class="line"><span>+----+----------+</span></span>
<span class="line"><span>EmployeeUNI 表:</span></span>
<span class="line"><span>+----+-----------+</span></span>
<span class="line"><span>| id | unique_id |</span></span>
<span class="line"><span>+----+-----------+</span></span>
<span class="line"><span>| 3  | 1         |</span></span>
<span class="line"><span>| 11 | 2         |</span></span>
<span class="line"><span>| 90 | 3         |</span></span>
<span class="line"><span>+----+-----------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+-----------+----------+</span></span>
<span class="line"><span>| unique_id | name     |</span></span>
<span class="line"><span>+-----------+----------+</span></span>
<span class="line"><span>| null      | Alice    |</span></span>
<span class="line"><span>| null      | Bob      |</span></span>
<span class="line"><span>| 2         | Meir     |</span></span>
<span class="line"><span>| 3         | Winston  |</span></span>
<span class="line"><span>| 1         | Jonathan |</span></span>
<span class="line"><span>+-----------+----------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>Alice and Bob 没有唯一标识码, 因此我们使用 null 替代。</span></span>
<span class="line"><span>Meir 的唯一标识码是 2 。</span></span>
<span class="line"><span>Winston 的唯一标识码是 3 。</span></span>
<span class="line"><span>Jonathan 唯一标识码是 1 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="方法一-根据id进行左连接" tabindex="-1">方法一：根据ID进行左连接 <a class="header-anchor" href="#方法一-根据id进行左连接" aria-label="Permalink to &quot;方法一：根据ID进行左连接&quot;">​</a></h2><p>我们首先执行LEFT JOIN操作，将两个表的数据基于 id 列进行组合。同样，我们使用 LEFT JOIN 来确保将所有 Employees 表中的行都包含在结果中，即使在 EmployeeUNI 表中没有匹配的行。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unique_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Employees e</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">left join</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    EmployeeUNI u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,13),i=[l];function r(c,t,b,d,u,h){return n(),a("div",null,i)}const k=s(e,[["render",r]]);export{o as __pageData,k as default};
