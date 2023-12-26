import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const m=JSON.parse('{"title":"员工奖金","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-26T16:20:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/员工奖金.md","filePath":"blog/leetcode/database/simple/员工奖金.md","lastUpdated":1703584971000}'),e={name:"blog/leetcode/database/simple/员工奖金.md"},l=p(`<h1 id="员工奖金" tabindex="-1">员工奖金 <a class="header-anchor" href="#员工奖金" aria-label="Permalink to &quot;员工奖金&quot;">​</a></h1><p>表：<code>Employee</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| Column Name | Type    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| empId       | int     |</span></span>
<span class="line"><span>| name        | varchar |</span></span>
<span class="line"><span>| supervisor  | int     |</span></span>
<span class="line"><span>| salary      | int     |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>empId 是该表中具有唯一值的列。</span></span>
<span class="line"><span>该表的每一行都表示员工的姓名和 id，以及他们的工资和经理的 id。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>表：<code>Bonus</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>| Column Name | Type |</span></span>
<span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>| empId       | int  |</span></span>
<span class="line"><span>| bonus       | int  |</span></span>
<span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>empId 是该表具有唯一值的列。</span></span>
<span class="line"><span>empId 是 Employee 表中 empId 的外键(reference 列)。</span></span>
<span class="line"><span>该表的每一行都包含一个员工的 id 和他们各自的奖金。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>编写解决方案，报告每个奖金 <strong>少于</strong> <code>1000</code> 的员工的姓名和奖金数额。</p><p>以 <strong>任意顺序</strong> 返回结果表。</p><p>结果格式如下所示。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Employee table:</span></span>
<span class="line"><span>+-------+--------+------------+--------+</span></span>
<span class="line"><span>| empId | name   | supervisor | salary |</span></span>
<span class="line"><span>+-------+--------+------------+--------+</span></span>
<span class="line"><span>| 3     | Brad   | null       | 4000   |</span></span>
<span class="line"><span>| 1     | John   | 3          | 1000   |</span></span>
<span class="line"><span>| 2     | Dan    | 3          | 2000   |</span></span>
<span class="line"><span>| 4     | Thomas | 3          | 4000   |</span></span>
<span class="line"><span>+-------+--------+------------+--------+</span></span>
<span class="line"><span>Bonus table:</span></span>
<span class="line"><span>+-------+-------+</span></span>
<span class="line"><span>| empId | bonus |</span></span>
<span class="line"><span>+-------+-------+</span></span>
<span class="line"><span>| 2     | 500   |</span></span>
<span class="line"><span>| 4     | 2000  |</span></span>
<span class="line"><span>+-------+-------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+------+-------+</span></span>
<span class="line"><span>| name | bonus |</span></span>
<span class="line"><span>+------+-------+</span></span>
<span class="line"><span>| Brad | null  |</span></span>
<span class="line"><span>| John | null  |</span></span>
<span class="line"><span>| Dan  | 500   |</span></span>
<span class="line"><span>+------+-------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="方法一-left-join" tabindex="-1">方法一：left join <a class="header-anchor" href="#方法一-left-join" aria-label="Permalink to &quot;方法一：left join&quot;">​</a></h2><p>首先需要知道每个员工的奖金数量，因此需要首先将 Employee 表与 Bonus 表连接。注意需要使用外连接，以处理员工没有出现在 Bonus 表上的情况。这里因为不存在员工只出现在 Bonus 表中的情况，所以只需要使用左外连接。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bonus</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Employee e</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">left join</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Bonus b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">empId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">empId</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bonus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bonus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> null</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,13),i=[l];function r(c,t,b,d,h,o){return n(),a("div",null,i)}const k=s(e,[["render",r]]);export{m as __pageData,k as default};
