import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const o=JSON.parse('{"title":"银行账户概要 II","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-26T09:30:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/银行账户概要II.md","filePath":"blog/leetcode/database/simple/银行账户概要II.md","lastUpdated":1703584971000}'),l={name:"blog/leetcode/database/simple/银行账户概要II.md"},i=p(`<h1 id="银行账户概要-ii" tabindex="-1">银行账户概要 II <a class="header-anchor" href="#银行账户概要-ii" aria-label="Permalink to &quot;银行账户概要 II&quot;">​</a></h1><p>表: <code>Users</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+--------------+---------+</span></span>
<span class="line"><span>| Column Name  | Type    |</span></span>
<span class="line"><span>+--------------+---------+</span></span>
<span class="line"><span>| account      | int     |</span></span>
<span class="line"><span>| name         | varchar |</span></span>
<span class="line"><span>+--------------+---------+</span></span>
<span class="line"><span>account 是该表的主键(具有唯一值的列)。</span></span>
<span class="line"><span>该表的每一行都包含银行中每个用户的帐号。</span></span>
<span class="line"><span>表中不会有两个用户具有相同的名称。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>表: <code>Transactions</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| Column Name   | Type    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| trans_id      | int     |</span></span>
<span class="line"><span>| account       | int     |</span></span>
<span class="line"><span>| amount        | int     |</span></span>
<span class="line"><span>| transacted_on | date    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>trans_id 是该表主键(具有唯一值的列)。</span></span>
<span class="line"><span>该表的每一行包含了所有账户的交易改变情况。</span></span>
<span class="line"><span>如果用户收到了钱, 那么金额是正的; 如果用户转了钱, 那么金额是负的。</span></span>
<span class="line"><span>所有账户的起始余额为 0。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>编写解决方案, 报告余额高于 10000 的所有用户的名字和余额. 账户的余额等于包含该账户的所有交易的总和。</p><p>返回结果表单 <strong>无顺序要求</strong> 。</p><p>查询结果格式如下例所示。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Users table:</span></span>
<span class="line"><span>+------------+--------------+</span></span>
<span class="line"><span>| account    | name         |</span></span>
<span class="line"><span>+------------+--------------+</span></span>
<span class="line"><span>| 900001     | Alice        |</span></span>
<span class="line"><span>| 900002     | Bob          |</span></span>
<span class="line"><span>| 900003     | Charlie      |</span></span>
<span class="line"><span>+------------+--------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Transactions table:</span></span>
<span class="line"><span>+------------+------------+------------+---------------+</span></span>
<span class="line"><span>| trans_id   | account    | amount     | transacted_on |</span></span>
<span class="line"><span>+------------+------------+------------+---------------+</span></span>
<span class="line"><span>| 1          | 900001     | 7000       |  2020-08-01   |</span></span>
<span class="line"><span>| 2          | 900001     | 7000       |  2020-09-01   |</span></span>
<span class="line"><span>| 3          | 900001     | -3000      |  2020-09-02   |</span></span>
<span class="line"><span>| 4          | 900002     | 1000       |  2020-09-12   |</span></span>
<span class="line"><span>| 5          | 900003     | 6000       |  2020-08-07   |</span></span>
<span class="line"><span>| 6          | 900003     | 6000       |  2020-09-07   |</span></span>
<span class="line"><span>| 7          | 900003     | -4000      |  2020-09-11   |</span></span>
<span class="line"><span>+------------+------------+------------+---------------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+------------+------------+</span></span>
<span class="line"><span>| name       | balance    |</span></span>
<span class="line"><span>+------------+------------+</span></span>
<span class="line"><span>| Alice      | 11000      |</span></span>
<span class="line"><span>+------------+------------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>Alice 的余额为(7000 + 7000 - 3000) = 11000.</span></span>
<span class="line"><span>Bob 的余额为1000.</span></span>
<span class="line"><span>Charlie 的余额为(6000 + 6000 - 4000) = 8000.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="方法一-left-join-group-by-sum-having" tabindex="-1">方法一：left join + group by + sum + having <a class="header-anchor" href="#方法一-left-join-group-by-sum-having" aria-label="Permalink to &quot;方法一：left join + group by + sum + having&quot;">​</a></h2><ol><li>由于最后的结果需要两张表中的数据所以采用多表联查的方式，最后是采用左连接的方式。</li><li>由于transaction表中由这个用户的多条交易记录所以需要进行分组求和</li><li>最后将sum的结果进行筛选</li></ol><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) balance</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Users u</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">left join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Transactions t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">account</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">account</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">having</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    balance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,13),e=[i];function r(c,t,b,h,u,d){return n(),a("div",null,e)}const k=s(l,[["render",r]]);export{o as __pageData,k as default};
