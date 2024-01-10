import{_ as s,o as n,c as a,U as p}from"./chunks/framework.nmnrFtMU.js";const m=JSON.parse('{"title":"大的国家","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-27T23:00:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/大的国家.md","filePath":"blog/leetcode/database/simple/大的国家.md","lastUpdated":1703734987000}'),e={name:"blog/leetcode/database/simple/大的国家.md"},l=p(`<h1 id="大的国家" tabindex="-1">大的国家 <a class="header-anchor" href="#大的国家" aria-label="Permalink to &quot;大的国家&quot;">​</a></h1><p><code>World</code> 表：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| Column Name | Type    |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>| name        | varchar |</span></span>
<span class="line"><span>| continent   | varchar |</span></span>
<span class="line"><span>| area        | int     |</span></span>
<span class="line"><span>| population  | int     |</span></span>
<span class="line"><span>| gdp         | bigint  |</span></span>
<span class="line"><span>+-------------+---------+</span></span>
<span class="line"><span>name 是该表的主键（具有唯一值的列）。</span></span>
<span class="line"><span>这张表的每一行提供：国家名称、所属大陆、面积、人口和 GDP 值。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>如果一个国家满足下述两个条件之一，则认为该国是 <strong>大国</strong> ：</p><ul><li>面积至少为 300 万平方公里（即，<code>3000000 km2</code>），或者</li><li>人口至少为 2500 万（即 <code>25000000</code>）</li></ul><p>编写解决方案找出 <strong>大国</strong> 的国家名称、人口和面积。</p><p>按 <strong>任意顺序</strong> 返回结果表。</p><p>返回结果格式如下例所示。</p><p><strong>示例：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>World 表：</span></span>
<span class="line"><span>+-------------+-----------+---------+------------+--------------+</span></span>
<span class="line"><span>| name        | continent | area    | population | gdp          |</span></span>
<span class="line"><span>+-------------+-----------+---------+------------+--------------+</span></span>
<span class="line"><span>| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |</span></span>
<span class="line"><span>| Albania     | Europe    | 28748   | 2831741    | 12960000000  |</span></span>
<span class="line"><span>| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |</span></span>
<span class="line"><span>| Andorra     | Europe    | 468     | 78115      | 3712000000   |</span></span>
<span class="line"><span>| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |</span></span>
<span class="line"><span>+-------------+-----------+---------+------------+--------------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+-------------+------------+---------+</span></span>
<span class="line"><span>| name        | population | area    |</span></span>
<span class="line"><span>+-------------+------------+---------+</span></span>
<span class="line"><span>| Afghanistan | 25500100   | 652230  |</span></span>
<span class="line"><span>| Algeria     | 37100000   | 2381741 |</span></span>
<span class="line"><span>+-------------+------------+---------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h1 id="方法一-行过滤" tabindex="-1">方法一：行过滤 <a class="header-anchor" href="#方法一-行过滤" aria-label="Permalink to &quot;方法一：行过滤&quot;">​</a></h1><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    population</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    area</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    World</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    area </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3000000</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    or</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> population</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25000000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,12),i=[l];function r(t,c,b,o,d,h){return n(),a("div",null,i)}const k=s(e,[["render",r]]);export{m as __pageData,k as default};
