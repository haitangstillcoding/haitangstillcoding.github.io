import{_ as s,o as n,c as a,U as e}from"./chunks/framework.nmnrFtMU.js";const u=JSON.parse('{"title":"无效的推文","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-24T11:30:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/simple/无效的推文.md","filePath":"blog/leetcode/database/simple/无效的推文.md","lastUpdated":1703552913000}'),p={name:"blog/leetcode/database/simple/无效的推文.md"},l=e(`<h1 id="无效的推文" tabindex="-1">无效的推文 <a class="header-anchor" href="#无效的推文" aria-label="Permalink to &quot;无效的推文&quot;">​</a></h1><p>表：<code>Tweets</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+----------------+---------+</span></span>
<span class="line"><span>| Column Name    | Type    |</span></span>
<span class="line"><span>+----------------+---------+</span></span>
<span class="line"><span>| tweet_id       | int     |</span></span>
<span class="line"><span>| content        | varchar |</span></span>
<span class="line"><span>+----------------+---------+</span></span>
<span class="line"><span>在 SQL 中，tweet_id 是这个表的主键。</span></span>
<span class="line"><span>这个表包含某社交媒体 App 中所有的推文。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>查询所有无效推文的编号（ID）。当推文内容中的字符数<strong>严格大于</strong> <code>15</code> 时，该推文是无效的。</p><p>以<strong>任意顺序</strong>返回结果表。</p><p>查询结果格式如下所示：</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Tweets 表：</span></span>
<span class="line"><span>+----------+----------------------------------+</span></span>
<span class="line"><span>| tweet_id | content                          |</span></span>
<span class="line"><span>+----------+----------------------------------+</span></span>
<span class="line"><span>| 1        | Vote for Biden                   |</span></span>
<span class="line"><span>| 2        | Let us make America great again! |</span></span>
<span class="line"><span>+----------+----------------------------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+----------+</span></span>
<span class="line"><span>| tweet_id |</span></span>
<span class="line"><span>+----------+</span></span>
<span class="line"><span>| 2        |</span></span>
<span class="line"><span>+----------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>推文 1 的长度 length = 14。该推文是有效的。</span></span>
<span class="line"><span>推文 2 的长度 length = 32。该推文是无效的。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="方法一-条件过滤行" tabindex="-1">方法一：条件过滤行 <a class="header-anchor" href="#方法一-条件过滤行" aria-label="Permalink to &quot;方法一：条件过滤行&quot;">​</a></h2><p>对于SQL表，用于计算字符串中字符数的最佳函数是 CHAR_LENGTH(str)，它返回字符串 str 的长度。</p><p>另一个常用的函数 LENGTH(str) 在这个问题中也适用，因为列 content 只包含英文字符，没有特殊字符。否则，LENGTH() 可能会返回不同的结果，因为该函数返回字符串 str 的字节数，某些字符包含多于 1 个字节。</p><p>以字符 &#39;¥&#39; 为例：CHAR_LENGTH() 返回结果为 1，而 LENGTH() 返回结果为 2，因为该字符串包含 2 个字节。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tweet_id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Tweets</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    char_length(content) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,13),i=[l];function r(t,c,b,d,o,h){return n(),a("div",null,i)}const g=s(p,[["render",r]]);export{u as __pageData,g as default};
