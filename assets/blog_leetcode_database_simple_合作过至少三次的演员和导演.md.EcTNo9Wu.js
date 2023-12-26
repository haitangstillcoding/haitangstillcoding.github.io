import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const m=JSON.parse('{"title":"合作过至少三次的演员和导演","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-24T09:00:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/合作过至少三次的演员和导演.md","filePath":"blog/leetcode/database/simple/合作过至少三次的演员和导演.md","lastUpdated":null}'),e={name:"blog/leetcode/database/simple/合作过至少三次的演员和导演.md"},i=p(`<h1 id="合作过至少三次的演员和导演" tabindex="-1">合作过至少三次的演员和导演 <a class="header-anchor" href="#合作过至少三次的演员和导演" aria-label="Permalink to &quot;合作过至少三次的演员和导演&quot;">​</a></h1><p><code>ActorDirector</code> 表：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| Column Name | Type    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| actor_id    | int     |</span></span>
<span class="line"><span>| director_id | int     |</span></span>
<span class="line"><span>| timestamp   | int     |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>timestamp 是这张表的主键(具有唯一值的列).</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>编写解决方案找出合作过至少三次的演员和导演的 id 对 <code>(actor_id, director_id)</code></p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>ActorDirector 表：</span></span>
<span class="line"><span>+-------------+-------------+-------------+</span></span>
<span class="line"><span>| actor_id    | director_id | timestamp   |</span></span>
<span class="line"><span>+-------------+-------------+-------------+</span></span>
<span class="line"><span>| 1           | 1           | 0           |</span></span>
<span class="line"><span>| 1           | 1           | 1           |</span></span>
<span class="line"><span>| 1           | 1           | 2           |</span></span>
<span class="line"><span>| 1           | 2           | 3           |</span></span>
<span class="line"><span>| 1           | 2           | 4           |</span></span>
<span class="line"><span>| 2           | 1           | 5           |</span></span>
<span class="line"><span>| 2           | 1           | 6           |</span></span>
<span class="line"><span>+-------------+-------------+-------------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+-------------+-------------+</span></span>
<span class="line"><span>| actor_id    | director_id |</span></span>
<span class="line"><span>+-------------+-------------+</span></span>
<span class="line"><span>| 1           | 1           |</span></span>
<span class="line"><span>+-------------+-------------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>唯一的 id 对是 (1, 1)，他们恰好合作了 3 次。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="方法-1-group-by-和-count" tabindex="-1">方法 1：group by 和 count <a class="header-anchor" href="#方法-1-group-by-和-count" aria-label="Permalink to &quot;方法 1：group by 和 count&quot;">​</a></h2><p>在 SQL 中，找到合作至少三次的演员导演对的查询是按照 <code>actor_id</code> 和 <code>director_id</code> 分组，然后过滤掉计数至少为 3 的对。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	actor_id,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	director_id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	ActorDirector</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	actor_id,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	director_id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">having</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,9),l=[i];function r(t,c,d,b,o,h){return n(),a("div",null,l)}const k=s(e,[["render",r]]);export{m as __pageData,k as default};
