import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const o=JSON.parse('{"title":"每位教师所教授的科目种类的数量","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-24T16:00:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/每位教师所教授的科目种类的数量.md","filePath":"blog/leetcode/database/simple/每位教师所教授的科目种类的数量.md","lastUpdated":null}'),e={name:"blog/leetcode/database/simple/每位教师所教授的科目种类的数量.md"},l=p(`<h1 id="每位教师所教授的科目种类的数量" tabindex="-1">每位教师所教授的科目种类的数量 <a class="header-anchor" href="#每位教师所教授的科目种类的数量" aria-label="Permalink to &quot;每位教师所教授的科目种类的数量&quot;">​</a></h1><p>表: <code>Teacher</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>| Column Name | Type |</span></span>
<span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>| teacher_id  | int  |</span></span>
<span class="line"><span>| subject_id  | int  |</span></span>
<span class="line"><span>| dept_id     | int  |</span></span>
<span class="line"><span>+-------------+------+</span></span>
<span class="line"><span>在 SQL 中，(subject_id, dept_id) 是该表的主键。</span></span>
<span class="line"><span>该表中的每一行都表示带有 teacher_id 的教师在系 dept_id 中教授科目 subject_id。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>查询每位老师在大学里教授的科目种类的数量。</p><p>以 <strong>任意顺序</strong> 返回结果表。</p><p>查询结果格式示例如下。</p><p><strong>示例 1:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入: </span></span>
<span class="line"><span>Teacher 表:</span></span>
<span class="line"><span>+------------+------------+---------+</span></span>
<span class="line"><span>| teacher_id | subject_id | dept_id |</span></span>
<span class="line"><span>+------------+------------+---------+</span></span>
<span class="line"><span>| 1          | 2          | 3       |</span></span>
<span class="line"><span>| 1          | 2          | 4       |</span></span>
<span class="line"><span>| 1          | 3          | 3       |</span></span>
<span class="line"><span>| 2          | 1          | 1       |</span></span>
<span class="line"><span>| 2          | 2          | 1       |</span></span>
<span class="line"><span>| 2          | 3          | 1       |</span></span>
<span class="line"><span>| 2          | 4          | 1       |</span></span>
<span class="line"><span>+------------+------------+---------+</span></span>
<span class="line"><span>输出:  </span></span>
<span class="line"><span>+------------+-----+</span></span>
<span class="line"><span>| teacher_id | cnt |</span></span>
<span class="line"><span>+------------+-----+</span></span>
<span class="line"><span>| 1          | 2   |</span></span>
<span class="line"><span>| 2          | 4   |</span></span>
<span class="line"><span>+------------+-----+</span></span>
<span class="line"><span>解释: </span></span>
<span class="line"><span>教师 1:</span></span>
<span class="line"><span>  - 他在 3、4 系教科目 2。</span></span>
<span class="line"><span>  - 他在 3 系教科目 3。</span></span>
<span class="line"><span>教师 2:</span></span>
<span class="line"><span>  - 他在 1 系教科目 1。</span></span>
<span class="line"><span>  - 他在 1 系教科目 2。</span></span>
<span class="line"><span>  - 他在 1 系教科目 3。</span></span>
<span class="line"><span>  - 他在 1 系教科目 4。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="方法一-group-by-和计数-distinct" tabindex="-1">方法一：GROUP BY 和计数 DISTINCT <a class="header-anchor" href="#方法一-group-by-和计数-distinct" aria-label="Permalink to &quot;方法一：GROUP BY 和计数 DISTINCT&quot;">​</a></h2><p>这项任务需要计算每位教师在大学里教授的不同科目的数量。这意味着我们必须按 teacher_id 分组，然后计算不同的 subject_id。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    teacher_id,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">distinct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> subject_id) cnt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Teacher</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    teacher_id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,11),i=[l];function r(c,t,b,d,u,h){return n(),a("div",null,i)}const _=s(e,[["render",r]]);export{o as __pageData,_ as default};
