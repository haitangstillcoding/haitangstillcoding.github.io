import{_ as s,o as n,c as a,U as p}from"./chunks/framework.nmnrFtMU.js";const m=JSON.parse('{"title":"进店却未进行过交易的顾客","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-26T11:20:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/进店却未进行过交易的顾客.md","filePath":"blog/leetcode/database/simple/进店却未进行过交易的顾客.md","lastUpdated":1703584971000}'),i={name:"blog/leetcode/database/simple/进店却未进行过交易的顾客.md"},l=p(`<h1 id="进店却未进行过交易的顾客" tabindex="-1">进店却未进行过交易的顾客 <a class="header-anchor" href="#进店却未进行过交易的顾客" aria-label="Permalink to &quot;进店却未进行过交易的顾客&quot;">​</a></h1><p>表：<code>Visits</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| Column Name | Type    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| visit_id    | int     |</span></span>
<span class="line"><span>| customer_id | int     |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>visit_id 是该表中具有唯一值的列。</span></span>
<span class="line"><span>该表包含有关光临过购物中心的顾客的信息。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>表：<code>Transactions</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+----------------+---------+</span></span>
<span class="line"><span>| Column Name    | Type    |</span></span>
<span class="line"><span>+----------------+---------+</span></span>
<span class="line"><span>| transaction_id | int     |</span></span>
<span class="line"><span>| visit_id       | int     |</span></span>
<span class="line"><span>| amount         | int     |</span></span>
<span class="line"><span>+----------------+---------+</span></span>
<span class="line"><span>transaction_id 是该表中具有唯一值的列。</span></span>
<span class="line"><span>此表包含 visit_id 期间进行的交易的信息。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>有一些顾客可能光顾了购物中心但没有进行交易。请你编写一个解决方案，来查找这些顾客的 ID ，以及他们只光顾不交易的次数。</p><p>返回以 <strong>任何顺序</strong> 排序的结果表。</p><p>返回结果格式如下例所示。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入:</span></span>
<span class="line"><span>Visits</span></span>
<span class="line"><span>+----------+-------------+</span></span>
<span class="line"><span>| visit_id | customer_id |</span></span>
<span class="line"><span>+----------+-------------+</span></span>
<span class="line"><span>| 1        | 23          |</span></span>
<span class="line"><span>| 2        | 9           |</span></span>
<span class="line"><span>| 4        | 30          |</span></span>
<span class="line"><span>| 5        | 54          |</span></span>
<span class="line"><span>| 6        | 96          |</span></span>
<span class="line"><span>| 7        | 54          |</span></span>
<span class="line"><span>| 8        | 54          |</span></span>
<span class="line"><span>+----------+-------------+</span></span>
<span class="line"><span>Transactions</span></span>
<span class="line"><span>+----------------+----------+--------+</span></span>
<span class="line"><span>| transaction_id | visit_id | amount |</span></span>
<span class="line"><span>+----------------+----------+--------+</span></span>
<span class="line"><span>| 2              | 5        | 310    |</span></span>
<span class="line"><span>| 3              | 5        | 300    |</span></span>
<span class="line"><span>| 9              | 5        | 200    |</span></span>
<span class="line"><span>| 12             | 1        | 910    |</span></span>
<span class="line"><span>| 13             | 2        | 970    |</span></span>
<span class="line"><span>+----------------+----------+--------+</span></span>
<span class="line"><span>输出:</span></span>
<span class="line"><span>+-------------+----------------+</span></span>
<span class="line"><span>| customer_id | count_no_trans |</span></span>
<span class="line"><span>+-------------+----------------+</span></span>
<span class="line"><span>| 54          | 2              |</span></span>
<span class="line"><span>| 30          | 1              |</span></span>
<span class="line"><span>| 96          | 1              |</span></span>
<span class="line"><span>+-------------+----------------+</span></span>
<span class="line"><span>解释:</span></span>
<span class="line"><span>ID = 23 的顾客曾经逛过一次购物中心，并在 ID = 12 的访问期间进行了一笔交易。</span></span>
<span class="line"><span>ID = 9 的顾客曾经逛过一次购物中心，并在 ID = 13 的访问期间进行了一笔交易。</span></span>
<span class="line"><span>ID = 30 的顾客曾经去过购物中心，并且没有进行任何交易。</span></span>
<span class="line"><span>ID = 54 的顾客三度造访了购物中心。在 2 次访问中，他们没有进行任何交易，在 1 次访问中，他们进行了 3 次交易。</span></span>
<span class="line"><span>ID = 96 的顾客曾经去过购物中心，并且没有进行任何交易。</span></span>
<span class="line"><span>如我们所见，ID 为 30 和 96 的顾客一次没有进行任何交易就去了购物中心。顾客 54 也两次访问了购物中心并且没有进行任何交易。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="方法一-left-join-is-null-group-by" tabindex="-1">方法一：left join + is null + group by <a class="header-anchor" href="#方法一-left-join-is-null-group-by" aria-label="Permalink to &quot;方法一：left join + is null + group by&quot;">​</a></h2><p>根据输出示例可以看出，应该使用左连接两张表。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    *</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Visits v</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">left join</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Transactions t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">visit_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">visit_id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>输出：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>| visit_id | customer_id | transaction_id | visit_id | amount |</span></span>
<span class="line"><span>| -------- | ----------- | -------------- | -------- | ------ |</span></span>
<span class="line"><span>| 1        | 23          | 12             | 1        | 910    |</span></span>
<span class="line"><span>| 2        | 9           | 13             | 2        | 970    |</span></span>
<span class="line"><span>| 4        | 30          | null           | null     | null   |</span></span>
<span class="line"><span>| 5        | 54          | 9              | 5        | 200    |</span></span>
<span class="line"><span>| 5        | 54          | 3              | 5        | 300    |</span></span>
<span class="line"><span>| 5        | 54          | 2              | 5        | 310    |</span></span>
<span class="line"><span>| 6        | 96          | null           | null     | null   |</span></span>
<span class="line"><span>| 7        | 54          | null           | null     | null   |</span></span>
<span class="line"><span>| 8        | 54          | null           | null     | null   |</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>然后筛选 <code>transaction_id</code> 为空的部分，并根据 <code>customer_id</code> 分组，最后 <code>count(*)</code> 统计数量。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    customer_id,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) count_no_trans</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Visits v</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">left join</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Transactions t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">visit_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">visit_id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    transaction_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> null</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    customer_id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,17),e=[l];function r(c,t,b,d,h,u){return n(),a("div",null,e)}const k=s(i,[["render",r]]);export{m as __pageData,k as default};
