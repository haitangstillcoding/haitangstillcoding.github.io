import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const m=JSON.parse('{"title":"排名靠前的旅行者","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-24T11:00:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/排名靠前的旅行者.md","filePath":"blog/leetcode/database/simple/排名靠前的旅行者.md","lastUpdated":1703552913000}'),i={name:"blog/leetcode/database/simple/排名靠前的旅行者.md"},l=p(`<h1 id="排名靠前的旅行者" tabindex="-1">排名靠前的旅行者 <a class="header-anchor" href="#排名靠前的旅行者" aria-label="Permalink to &quot;排名靠前的旅行者&quot;">​</a></h1><p>表：<code>Users</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| Column Name   | Type    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| id            | int     |</span></span>
<span class="line"><span>| name          | varchar |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>id 是该表中具有唯一值的列。</span></span>
<span class="line"><span>name 是用户名字。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>表：<code>Rides</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| Column Name   | Type    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| id            | int     |</span></span>
<span class="line"><span>| user_id       | int     |</span></span>
<span class="line"><span>| distance      | int     |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>id 是该表中具有唯一值的列。</span></span>
<span class="line"><span>user_id 是本次行程的用户的 id, 而该用户此次行程距离为 distance 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>编写解决方案，报告每个用户的旅行距离。</p><p>返回的结果表单，以 <code>travelled_distance</code> <strong>降序排列</strong> ，如果有两个或者更多的用户旅行了相同的距离, 那么再以 <code>name</code> <strong>升序排列</strong> 。</p><p>返回结果格式如下例所示。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Users 表：</span></span>
<span class="line"><span>+------+-----------+</span></span>
<span class="line"><span>| id   | name      |</span></span>
<span class="line"><span>+------+-----------+</span></span>
<span class="line"><span>| 1    | Alice     |</span></span>
<span class="line"><span>| 2    | Bob       |</span></span>
<span class="line"><span>| 3    | Alex      |</span></span>
<span class="line"><span>| 4    | Donald    |</span></span>
<span class="line"><span>| 7    | Lee       |</span></span>
<span class="line"><span>| 13   | Jonathan  |</span></span>
<span class="line"><span>| 19   | Elvis     |</span></span>
<span class="line"><span>+------+-----------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Rides 表：</span></span>
<span class="line"><span>+------+----------+----------+</span></span>
<span class="line"><span>| id   | user_id  | distance |</span></span>
<span class="line"><span>+------+----------+----------+</span></span>
<span class="line"><span>| 1    | 1        | 120      |</span></span>
<span class="line"><span>| 2    | 2        | 317      |</span></span>
<span class="line"><span>| 3    | 3        | 222      |</span></span>
<span class="line"><span>| 4    | 7        | 100      |</span></span>
<span class="line"><span>| 5    | 13       | 312      |</span></span>
<span class="line"><span>| 6    | 19       | 50       |</span></span>
<span class="line"><span>| 7    | 7        | 120      |</span></span>
<span class="line"><span>| 8    | 19       | 400      |</span></span>
<span class="line"><span>| 9    | 7        | 230      |</span></span>
<span class="line"><span>+------+----------+----------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+----------+--------------------+</span></span>
<span class="line"><span>| name     | travelled_distance |</span></span>
<span class="line"><span>+----------+--------------------+</span></span>
<span class="line"><span>| Elvis    | 450                |</span></span>
<span class="line"><span>| Lee      | 450                |</span></span>
<span class="line"><span>| Bob      | 317                |</span></span>
<span class="line"><span>| Jonathan | 312                |</span></span>
<span class="line"><span>| Alex     | 222                |</span></span>
<span class="line"><span>| Alice    | 120                |</span></span>
<span class="line"><span>| Donald   | 0                  |</span></span>
<span class="line"><span>+----------+--------------------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>Elvis 和 Lee 旅行了 450 英里，Elvis 是排名靠前的旅行者，因为他的名字在字母表上的排序比 Lee 更小。</span></span>
<span class="line"><span>Bob, Jonathan, Alex 和 Alice 只有一次行程，我们只按此次行程的全部距离对他们排序。</span></span>
<span class="line"><span>Donald 没有任何行程, 他的旅行距离为 0。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="方法一-ifnull-sum" tabindex="-1">方法一：ifnull + sum <a class="header-anchor" href="#方法一-ifnull-sum" aria-label="Permalink to &quot;方法一：ifnull + sum&quot;">​</a></h2><p>有的旅行者可能没有行程，所以选择左连接。</p><p>为了防止行程为空，使用ifnull函数将null值转换为0。</p><p>题目未说明Users.name字段唯一，可能不同旅行者的姓名相同，所以需要对Users.id也分组。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ifnull</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">distance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  travelled_distance</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Users u</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">left join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Rides r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">user_id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">order by</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    travelled_distance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">desc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,15),e=[l];function r(c,t,h,b,d,k){return n(),a("div",null,e)}const o=s(i,[["render",r]]);export{m as __pageData,o as default};
