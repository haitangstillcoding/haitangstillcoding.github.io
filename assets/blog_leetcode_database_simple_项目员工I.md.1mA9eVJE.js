import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const m=JSON.parse('{"title":"项目员工 I","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-24T11:30:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/项目员工I.md","filePath":"blog/leetcode/database/simple/项目员工I.md","lastUpdated":null}'),e={name:"blog/leetcode/database/simple/项目员工I.md"},i=p(`<h1 id="项目员工-i" tabindex="-1">项目员工 I <a class="header-anchor" href="#项目员工-i" aria-label="Permalink to &quot;项目员工 I&quot;">​</a></h1><p>项目表 <code>Project</code>：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| Column Name | Type    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| project_id  | int     |</span></span>
<span class="line"><span>| employee_id | int     |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>主键为 (project_id, employee_id)。</span></span>
<span class="line"><span>employee_id 是员工表 Employee 表的外键。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>员工表 <code>Employee</code>：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+------------------+---------+</span></span>
<span class="line"><span>| Column Name      | Type    |</span></span>
<span class="line"><span>+------------------+---------+</span></span>
<span class="line"><span>| employee_id      | int     |</span></span>
<span class="line"><span>| name             | varchar |</span></span>
<span class="line"><span>| experience_years | int     |</span></span>
<span class="line"><span>+------------------+---------+</span></span>
<span class="line"><span>主键是 employee_id。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>请写一个 SQL 语句，查询每一个项目中员工的 <strong>平均</strong> 工作年限，<strong>精确到小数点后两位</strong>。</p><p>查询结果的格式如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Project 表：</span></span>
<span class="line"><span>+-------------+-------------+</span></span>
<span class="line"><span>| project_id  | employee_id |</span></span>
<span class="line"><span>+-------------+-------------+</span></span>
<span class="line"><span>| 1           | 1           |</span></span>
<span class="line"><span>| 1           | 2           |</span></span>
<span class="line"><span>| 1           | 3           |</span></span>
<span class="line"><span>| 2           | 1           |</span></span>
<span class="line"><span>| 2           | 4           |</span></span>
<span class="line"><span>+-------------+-------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Employee 表：</span></span>
<span class="line"><span>+-------------+--------+------------------+</span></span>
<span class="line"><span>| employee_id | name   | experience_years |</span></span>
<span class="line"><span>+-------------+--------+------------------+</span></span>
<span class="line"><span>| 1           | Khaled | 3                |</span></span>
<span class="line"><span>| 2           | Ali    | 2                |</span></span>
<span class="line"><span>| 3           | John   | 1                |</span></span>
<span class="line"><span>| 4           | Doe    | 2                |</span></span>
<span class="line"><span>+-------------+--------+------------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Result 表：</span></span>
<span class="line"><span>+-------------+---------------+</span></span>
<span class="line"><span>| project_id  | average_years |</span></span>
<span class="line"><span>+-------------+---------------+</span></span>
<span class="line"><span>| 1           | 2.00          |</span></span>
<span class="line"><span>| 2           | 2.50          |</span></span>
<span class="line"><span>+-------------+---------------+</span></span>
<span class="line"><span>第一个项目中，员工的平均工作年限是 (3 + 2 + 1) / 3 = 2.00；第二个项目中，员工的平均工作年限是 (3 + 2) / 2 = 2.50</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="方法一-round-avg" tabindex="-1">方法一：round + avg <a class="header-anchor" href="#方法一-round-avg" aria-label="Permalink to &quot;方法一：round + avg&quot;">​</a></h2><p>本题使用 <code>group by</code> 对项目id <code>Project.project_id</code> 分组。</p><p>对员工工作年限求平均，使用 <code>avg()</code> 函数求平均。</p><p>要求精确到小数点后两位，使用 <code>round()</code> 函数。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">project_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">avg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">experience_years</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) average_years</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Project p</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">left join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Employee e </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">employee_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">employee_id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">project_id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,13),l=[i];function r(c,t,h,d,b,o){return n(),a("div",null,l)}const u=s(e,[["render",r]]);export{m as __pageData,u as default};
