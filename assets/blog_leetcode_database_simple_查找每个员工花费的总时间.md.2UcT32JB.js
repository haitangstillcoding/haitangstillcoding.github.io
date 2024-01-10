import{_ as s,o as n,c as a,U as p}from"./chunks/framework.nmnrFtMU.js";const o=JSON.parse('{"title":"查找每个员工花费的总时间","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-24T15:00:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/查找每个员工花费的总时间.md","filePath":"blog/leetcode/database/simple/查找每个员工花费的总时间.md","lastUpdated":1703552913000}'),e={name:"blog/leetcode/database/simple/查找每个员工花费的总时间.md"},l=p(`<h1 id="查找每个员工花费的总时间" tabindex="-1">查找每个员工花费的总时间 <a class="header-anchor" href="#查找每个员工花费的总时间" aria-label="Permalink to &quot;查找每个员工花费的总时间&quot;">​</a></h1><p>表: <code>Employees</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>| Column Name | Type |</span></span>
<span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>| emp_id      | int  |</span></span>
<span class="line"><span>| event_day   | date |</span></span>
<span class="line"><span>| in_time     | int  |</span></span>
<span class="line"><span>| out_time    | int  |</span></span>
<span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>在 SQL 中，(emp_id, event_day, in_time) 是这个表的主键。</span></span>
<span class="line"><span>该表显示了员工在办公室的出入情况。</span></span>
<span class="line"><span>event_day 是此事件发生的日期，in_time 是员工进入办公室的时间，而 out_time 是他们离开办公室的时间。</span></span>
<span class="line"><span>in_time 和 out_time 的取值在1到1440之间。</span></span>
<span class="line"><span>题目保证同一天没有两个事件在时间上是相交的，并且保证 in_time 小于 out_time。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>计算每位员工每天在办公室花费的总时间（以分钟为单位）。 请注意，在一天之内，同一员工是可以多次进入和离开办公室的。 在办公室里一次进出所花费的时间为out_time 减去 in_time。</p><p>返回结果表单的顺序无要求。 查询结果的格式如下：</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Employees table:</span></span>
<span class="line"><span>+--------+------------+---------+----------+</span></span>
<span class="line"><span>| emp_id | event_day  | in_time | out_time |</span></span>
<span class="line"><span>+--------+------------+---------+----------+</span></span>
<span class="line"><span>| 1      | 2020-11-28 | 4       | 32       |</span></span>
<span class="line"><span>| 1      | 2020-11-28 | 55      | 200      |</span></span>
<span class="line"><span>| 1      | 2020-12-03 | 1       | 42       |</span></span>
<span class="line"><span>| 2      | 2020-11-28 | 3       | 33       |</span></span>
<span class="line"><span>| 2      | 2020-12-09 | 47      | 74       |</span></span>
<span class="line"><span>+--------+------------+---------+----------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+------------+--------+------------+</span></span>
<span class="line"><span>| day        | emp_id | total_time |</span></span>
<span class="line"><span>+------------+--------+------------+</span></span>
<span class="line"><span>| 2020-11-28 | 1      | 173        |</span></span>
<span class="line"><span>| 2020-11-28 | 2      | 30         |</span></span>
<span class="line"><span>| 2020-12-03 | 1      | 41         |</span></span>
<span class="line"><span>| 2020-12-09 | 2      | 27         |</span></span>
<span class="line"><span>+------------+--------+------------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>雇员 1 有三次进出: 有两次发生在 2020-11-28 花费的时间为 (32 - 4) + (200 - 55) = 173, 有一次发生在 2020-12-03 花费的时间为 (42 - 1) = 41。</span></span>
<span class="line"><span>雇员 2 有两次进出: 有一次发生在 2020-11-28 花费的时间为 (33 - 3) = 30,  有一次发生在 2020-12-09 花费的时间为 (74 - 47) = 27。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="方法一-计算时间和-group-by" tabindex="-1">方法一：计算时间和 GROUP BY <a class="header-anchor" href="#方法一-计算时间和-group-by" aria-label="Permalink to &quot;方法一：计算时间和 GROUP BY&quot;">​</a></h2><p>在 SQL 中，计算每个员工每天在办公室的总时间的查询包括计算 out_time 和 in_time 的差值，然后按 emp_id 和 event_day 分组，最后对每组的时间差求和。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    event_day </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">day</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    emp_id,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(out_time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> in_time) total_time</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Employees</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    event_day,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    emp_id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,10),i=[l];function r(t,c,b,m,d,u){return n(),a("div",null,i)}const _=s(e,[["render",r]]);export{o as __pageData,_ as default};
