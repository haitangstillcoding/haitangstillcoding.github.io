import{_ as s,o as n,c as a,U as p}from"./chunks/framework.nmnrFtMU.js";const m=JSON.parse('{"title":"文章浏览I","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-26T16:00:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/文章浏览I.md","filePath":"blog/leetcode/database/simple/文章浏览I.md","lastUpdated":1703584971000}'),e={name:"blog/leetcode/database/simple/文章浏览I.md"},i=p(`<h1 id="文章浏览i" tabindex="-1">文章浏览I <a class="header-anchor" href="#文章浏览i" aria-label="Permalink to &quot;文章浏览I&quot;">​</a></h1><p><code>Views</code> 表：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| Column Name   | Type    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| article_id    | int     |</span></span>
<span class="line"><span>| author_id     | int     |</span></span>
<span class="line"><span>| viewer_id     | int     |</span></span>
<span class="line"><span>| view_date     | date    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>此表可能会存在重复行。（换句话说，在 SQL 中这个表没有主键）</span></span>
<span class="line"><span>此表的每一行都表示某人在某天浏览了某位作者的某篇文章。</span></span>
<span class="line"><span>请注意，同一人的 author_id 和 viewer_id 是相同的。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>请查询出所有浏览过自己文章的作者</p><p>结果按照 <code>id</code> 升序排列。</p><p>查询结果的格式如下所示：</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Views 表：</span></span>
<span class="line"><span>+------------+-----------+-----------+------------+</span></span>
<span class="line"><span>| article_id | author_id | viewer_id | view_date  |</span></span>
<span class="line"><span>+------------+-----------+-----------+------------+</span></span>
<span class="line"><span>| 1          | 3         | 5         | 2019-08-01 |</span></span>
<span class="line"><span>| 1          | 3         | 6         | 2019-08-02 |</span></span>
<span class="line"><span>| 2          | 7         | 7         | 2019-08-01 |</span></span>
<span class="line"><span>| 2          | 7         | 6         | 2019-08-02 |</span></span>
<span class="line"><span>| 4          | 7         | 1         | 2019-07-22 |</span></span>
<span class="line"><span>| 3          | 4         | 4         | 2019-07-21 |</span></span>
<span class="line"><span>| 3          | 4         | 4         | 2019-07-21 |</span></span>
<span class="line"><span>+------------+-----------+-----------+------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+------+</span></span>
<span class="line"><span>| id   |</span></span>
<span class="line"><span>+------+</span></span>
<span class="line"><span>| 4    |</span></span>
<span class="line"><span>| 7    |</span></span>
<span class="line"><span>+------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="方法一-distinct" tabindex="-1">方法一：distinct <a class="header-anchor" href="#方法一-distinct" aria-label="Permalink to &quot;方法一：distinct&quot;">​</a></h2><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    distinct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> author_id id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Views</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    author_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> viewer_id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">order by</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,10),l=[i];function r(c,t,d,b,h,u){return n(),a("div",null,l)}const k=s(e,[["render",r]]);export{m as __pageData,k as default};
