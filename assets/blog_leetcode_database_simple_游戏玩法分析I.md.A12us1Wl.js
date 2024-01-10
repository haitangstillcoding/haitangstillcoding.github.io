import{_ as s,o as n,c as a,U as p}from"./chunks/framework.nmnrFtMU.js";const m=JSON.parse('{"title":"游戏玩法分析I","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-26T15:50:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/游戏玩法分析I.md","filePath":"blog/leetcode/database/simple/游戏玩法分析I.md","lastUpdated":1703584971000}'),e={name:"blog/leetcode/database/simple/游戏玩法分析I.md"},l=p(`<h1 id="游戏玩法分析i" tabindex="-1">游戏玩法分析I <a class="header-anchor" href="#游戏玩法分析i" aria-label="Permalink to &quot;游戏玩法分析I&quot;">​</a></h1><p>活动表 <code>Activity</code>：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+--------------+---------+</span></span>
<span class="line"><span>| Column Name  | Type    |</span></span>
<span class="line"><span>+--------------+---------+</span></span>
<span class="line"><span>| player_id    | int     |</span></span>
<span class="line"><span>| device_id    | int     |</span></span>
<span class="line"><span>| event_date   | date    |</span></span>
<span class="line"><span>| games_played | int     |</span></span>
<span class="line"><span>+--------------+---------+</span></span>
<span class="line"><span>在 SQL 中，表的主键是 (player_id, event_date)。</span></span>
<span class="line"><span>这张表展示了一些游戏玩家在游戏平台上的行为活动。</span></span>
<span class="line"><span>每行数据记录了一名玩家在退出平台之前，当天使用同一台设备登录平台后打开的游戏的数目（可能是 0 个）。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>查询每位玩家 <strong>第一次登录平台的日期</strong>。</p><p>查询结果的格式如下所示：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Activity 表：</span></span>
<span class="line"><span>+-----------+-----------+------------+--------------+</span></span>
<span class="line"><span>| player_id | device_id | event_date | games_played |</span></span>
<span class="line"><span>+-----------+-----------+------------+--------------+</span></span>
<span class="line"><span>| 1         | 2         | 2016-03-01 | 5            |</span></span>
<span class="line"><span>| 1         | 2         | 2016-05-02 | 6            |</span></span>
<span class="line"><span>| 2         | 3         | 2017-06-25 | 1            |</span></span>
<span class="line"><span>| 3         | 1         | 2016-03-02 | 0            |</span></span>
<span class="line"><span>| 3         | 4         | 2018-07-03 | 5            |</span></span>
<span class="line"><span>+-----------+-----------+------------+--------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Result 表：</span></span>
<span class="line"><span>+-----------+-------------+</span></span>
<span class="line"><span>| player_id | first_login |</span></span>
<span class="line"><span>+-----------+-------------+</span></span>
<span class="line"><span>| 1         | 2016-03-01  |</span></span>
<span class="line"><span>| 2         | 2017-06-25  |</span></span>
<span class="line"><span>| 3         | 2016-03-02  |</span></span>
<span class="line"><span>+-----------+-------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="方法一-分组并提取最小值" tabindex="-1">方法一：分组并提取最小值 <a class="header-anchor" href="#方法一-分组并提取最小值" aria-label="Permalink to &quot;方法一：分组并提取最小值&quot;">​</a></h2><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    player_id, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event_date) first_login</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Activity</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    player_id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="方法二-窗口函数" tabindex="-1">方法二：窗口函数 <a class="header-anchor" href="#方法二-窗口函数" aria-label="Permalink to &quot;方法二：窗口函数&quot;">​</a></h2>`,9),i=[l];function r(t,c,b,d,h,o){return n(),a("div",null,i)}const _=s(e,[["render",r]]);export{m as __pageData,_ as default};
