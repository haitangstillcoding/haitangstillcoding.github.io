import{_ as n,o as s,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const _=JSON.parse('{"title":"最后一个能进入巴士的人","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-26T14:30:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/medium/最后一个能进入巴士的人.md","filePath":"blog/leetcode/database/medium/最后一个能进入巴士的人.md","lastUpdated":1703584971000}'),e={name:"blog/leetcode/database/medium/最后一个能进入巴士的人.md"},l=p(`<h1 id="最后一个能进入巴士的人" tabindex="-1">最后一个能进入巴士的人 <a class="header-anchor" href="#最后一个能进入巴士的人" aria-label="Permalink to &quot;最后一个能进入巴士的人&quot;">​</a></h1><p>表: <code>Queue</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| Column Name | Type    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| person_id   | int     |</span></span>
<span class="line"><span>| person_name | varchar |</span></span>
<span class="line"><span>| weight      | int     |</span></span>
<span class="line"><span>| turn        | int     |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>person_id 是这个表具有唯一值的列。</span></span>
<span class="line"><span>该表展示了所有候车乘客的信息。</span></span>
<span class="line"><span>表中 person_id 和 turn 列将包含从 1 到 n 的所有数字，其中 n 是表中的行数。</span></span>
<span class="line"><span>turn 决定了候车乘客上巴士的顺序，其中 turn=1 表示第一个上巴士，turn=n 表示最后一个上巴士。</span></span>
<span class="line"><span>weight 表示候车乘客的体重，以千克为单位。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>有一队乘客在等着上巴士。然而，巴士有<code>1000</code> <strong>千克</strong> 的重量限制，所以其中一部分乘客可能无法上巴士。</p><p>编写解决方案找出 <strong>最后一个</strong> 上巴士且不超过重量限制的乘客，并报告 <code>person_name</code> 。题目测试用例确保顺位第一的人可以上巴士且不会超重。</p><p>返回结果格式如下所示。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Queue 表</span></span>
<span class="line"><span>+-----------+-------------+--------+------+</span></span>
<span class="line"><span>| person_id | person_name | weight | turn |</span></span>
<span class="line"><span>+-----------+-------------+--------+------+</span></span>
<span class="line"><span>| 5         | Alice       | 250    | 1    |</span></span>
<span class="line"><span>| 4         | Bob         | 175    | 5    |</span></span>
<span class="line"><span>| 3         | Alex        | 350    | 2    |</span></span>
<span class="line"><span>| 6         | John Cena   | 400    | 3    |</span></span>
<span class="line"><span>| 1         | Winston     | 500    | 6    |</span></span>
<span class="line"><span>| 2         | Marie       | 200    | 4    |</span></span>
<span class="line"><span>+-----------+-------------+--------+------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span>| person_name |</span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span>| John Cena   |</span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>为了简化，Queue 表按 turn 列由小到大排序。</span></span>
<span class="line"><span>+------+----+-----------+--------+--------------+</span></span>
<span class="line"><span>| Turn | ID | Name      | Weight | Total Weight |</span></span>
<span class="line"><span>+------+----+-----------+--------+--------------+</span></span>
<span class="line"><span>| 1    | 5  | Alice     | 250    | 250          |</span></span>
<span class="line"><span>| 2    | 3  | Alex      | 350    | 600          |</span></span>
<span class="line"><span>| 3    | 6  | John Cena | 400    | 1000         | (最后一个上巴士)</span></span>
<span class="line"><span>| 4    | 2  | Marie     | 200    | 1200         | (无法上巴士)</span></span>
<span class="line"><span>| 5    | 4  | Bob       | 175    | ___          |</span></span>
<span class="line"><span>| 6    | 1  | Winston   | 500    | ___          |</span></span>
<span class="line"><span>+------+----+-----------+--------+--------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="方法一" tabindex="-1">方法一： <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一：&quot;">​</a></h2>`,9),i=[l];function r(c,b,t,u,o,m){return s(),a("div",null,i)}const h=n(e,[["render",r]]);export{_ as __pageData,h as default};
