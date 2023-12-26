import{_ as s,o as n,c as a,R as p}from"./chunks/framework.gZp3ZZFg.js";const u=JSON.parse('{"title":"股票的资本损益","description":"","frontmatter":{"hidden":true,"recommend":false,"date":"2023-12-24T13:00:00.000Z"},"headers":[],"relativePath":"blog/leetcode/database/medium/股票的资本损益.md","filePath":"blog/leetcode/database/medium/股票的资本损益.md","lastUpdated":null}'),e={name:"blog/leetcode/database/medium/股票的资本损益.md"},i=p(`<h1 id="股票的资本损益" tabindex="-1">股票的资本损益 <a class="header-anchor" href="#股票的资本损益" aria-label="Permalink to &quot;股票的资本损益&quot;">​</a></h1><p><code>Stocks</code> 表：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| Column Name   | Type    |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>| stock_name    | varchar |</span></span>
<span class="line"><span>| operation     | enum    |</span></span>
<span class="line"><span>| operation_day | int     |</span></span>
<span class="line"><span>| price         | int     |</span></span>
<span class="line"><span>+---------------+---------+</span></span>
<span class="line"><span>(stock_name, day) 是这张表的主键(具有唯一值的列的组合)</span></span>
<span class="line"><span>operation 列使用的是一种枚举类型，包括：(&#39;Sell&#39;,&#39;Buy&#39;)</span></span>
<span class="line"><span>此表的每一行代表了名为 stock_name 的某支股票在 operation_day 这一天的操作价格。</span></span>
<span class="line"><span>此表可以保证，股票的每个“卖出”操作在前一天都有相应的“买入”操作。并且，股票的每个“买入”操作在即将到来的一天都有相应的“卖出”操作。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>编写解决方案报告每只股票的 <strong>资本损益</strong>。</p><p>股票的 <strong>资本利得/损失</strong> 是指一次或多次买卖该股票后的总收益或损失。</p><p>以 <strong>任意顺序</strong> 返回结果表。</p><p>结果格式如下所示。</p><p><strong>示例 1：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>输入：</span></span>
<span class="line"><span>Stocks 表:</span></span>
<span class="line"><span>+---------------+-----------+---------------+--------+</span></span>
<span class="line"><span>| stock_name    | operation | operation_day | price  |</span></span>
<span class="line"><span>+---------------+-----------+---------------+--------+</span></span>
<span class="line"><span>| Leetcode      | Buy       | 1             | 1000   |</span></span>
<span class="line"><span>| Corona Masks  | Buy       | 2             | 10     |</span></span>
<span class="line"><span>| Leetcode      | Sell      | 5             | 9000   |</span></span>
<span class="line"><span>| Handbags      | Buy       | 17            | 30000  |</span></span>
<span class="line"><span>| Corona Masks  | Sell      | 3             | 1010   |</span></span>
<span class="line"><span>| Corona Masks  | Buy       | 4             | 1000   |</span></span>
<span class="line"><span>| Corona Masks  | Sell      | 5             | 500    |</span></span>
<span class="line"><span>| Corona Masks  | Buy       | 6             | 1000   |</span></span>
<span class="line"><span>| Handbags      | Sell      | 29            | 7000   |</span></span>
<span class="line"><span>| Corona Masks  | Sell      | 10            | 10000  |</span></span>
<span class="line"><span>+---------------+-----------+---------------+--------+</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>+---------------+-------------------+</span></span>
<span class="line"><span>| stock_name    | capital_gain_loss |</span></span>
<span class="line"><span>+---------------+-------------------+</span></span>
<span class="line"><span>| Corona Masks  | 9500              |</span></span>
<span class="line"><span>| Leetcode      | 8000              |</span></span>
<span class="line"><span>| Handbags      | -23000            |</span></span>
<span class="line"><span>+---------------+-------------------+</span></span>
<span class="line"><span>解释：</span></span>
<span class="line"><span>Leetcode 股票在第一天以1000美元的价格买入，在第五天以9000美元的价格卖出。资本收益=9000-1000=8000美元。</span></span>
<span class="line"><span>Handbags 股票在第17天以30000美元的价格买入，在第29天以7000美元的价格卖出。资本损失=7000-30000=-23000美元。</span></span>
<span class="line"><span>Corona Masks 股票在第1天以10美元的价格买入，在第3天以1010美元的价格卖出。在第4天以1000美元的价格再次购买，在第5天以500美元的价格出售。最后，它在第6天以1000美元的价格被买走，在第10天以10000美元的价格被卖掉。资本损益是每次（’Buy&#39;-&gt;&#39;Sell&#39;）操作资本收益或损失的和=（1010-10）+（500-1000）+（10000-1000）=1000-500+9000=9500美元。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="方法一-if-sum" tabindex="-1">方法一： if + sum <a class="header-anchor" href="#方法一-if-sum" aria-label="Permalink to &quot;方法一： if + sum&quot;">​</a></h2><p>根据 <code>stock_name</code> 分组， 通过 <code>if</code> 根据 不同的 <code>operation</code> 更改价格的正负，再通过 <code>sum</code> 函数计算 <code>capital_gain_loss</code>。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stock_name,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(operation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Buy&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">price, price)) capital_gain_loss</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Stocks</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stock_name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="方法二-case-when-sum" tabindex="-1">方法二：case when + sum <a class="header-anchor" href="#方法二-case-when-sum" aria-label="Permalink to &quot;方法二：case when + sum&quot;">​</a></h2><p>根据 <code>stock_name</code> 分组， 通过 <code>case when</code> 根据 不同的 <code>operation</code> 更改价格的正负，再通过 <code>sum</code> 函数计算 <code>capital_gain_loss</code>。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stock_name,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        when</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> operation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Buy&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> then</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">price</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        when</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> operation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Sell&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> price</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ) capital_gain_loss</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Stocks</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">group by</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stock_name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,15),l=[i];function r(c,t,h,o,d,b){return n(),a("div",null,l)}const m=s(e,[["render",r]]);export{u as __pageData,m as default};
