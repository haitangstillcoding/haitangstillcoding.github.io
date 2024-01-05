import{d as $,o as c,c as m,r as _,a as te,t as H,n as z,_ as I,b as E,w as k,e as C,T as We,u as st,i as tr,l as nr,f as Ge,g as M,h as L,j as fe,k as p,m as u,p as ie,q as le,s as Se,v as Pe,x as it,y as G,z as _e,A as yt,B as mn,C as rr,D as Me,F as W,E as ee,G as Ke,H as xe,I as S,J as hn,K as we,L as Ee,M as Be,N as Je,O as ar,P as ce,Q as fn,R as vn,S as kt,U as $e,V as wt,W as St,X as or,Y as gn,Z as _n,$ as sr,a0 as ze,a1 as bn,a2 as yn,a3 as ir,a4 as lr,a5 as cr,a6 as ur,a7 as kn,a8 as dr,a9 as pr,aa as mr,ab as hr}from"./framework.gZp3ZZFg.js";const fr=$({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(c(),m("span",{class:z(["VPBadge",e.type])},[_(e.$slots,"default",{},()=>[te(H(e.text),1)],!0)],2))}}),vr=I(fr,[["__scopeId","data-v-dd00062f"]]),gr={key:0,class:"VPBackdrop"},_r=$({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(c(),E(We,{name:"fade"},{default:k(()=>[e.show?(c(),m("div",gr)):C("",!0)]),_:1}))}}),br=I(_r,[["__scopeId","data-v-f14a2e87"]]),D=st;function yr(t,e){let n,r=!1;return()=>{n&&clearTimeout(n),r?n=setTimeout(t,e):(t(),(r=!0)&&setTimeout(()=>r=!1,e))}}function lt(t){return/^\//.test(t)?t:`/${t}`}function $t(t){const{pathname:e,search:n,hash:r,protocol:a}=new URL(t,"http://a.com");if(tr(t)||t.startsWith("#")||!a.startsWith("http")||/\.(?!html|md)\w+($|\?)/i.test(t)&&nr(t))return t;const{site:o}=D(),s=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${n}${r}`);return Ge(s)}function Te({removeCurrent:t=!0,correspondingLink:e=!1}={}){const{site:n,localeIndex:r,page:a,theme:o}=D(),s=M(()=>{var l,d;return{label:(l=n.value.locales[r.value])==null?void 0:l.label,link:((d=n.value.locales[r.value])==null?void 0:d.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:M(()=>Object.entries(n.value.locales).flatMap(([l,d])=>t&&s.value.label===d.label?[]:{text:d.label,link:kr(d.link||(l==="root"?"/":`/${l}/`),o.value.i18nRouting!==!1&&e,a.value.relativePath.slice(s.value.link.length-1),!n.value.cleanUrls)})),currentLang:s}}function kr(t,e,n,r){return e?t.replace(/\/$/,"")+lt(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):t}const wr=t=>(ie("data-v-0d8ccc9a"),t=t(),le(),t),Sr={class:"NotFound"},$r={class:"code"},Cr={class:"title"},Mr=wr(()=>p("div",{class:"divider"},null,-1)),Lr={class:"quote"},Ir={class:"action"},Pr=["href","aria-label"],Ar=$({__name:"NotFound",setup(t){const{site:e,theme:n}=D(),{localeLinks:r}=Te({removeCurrent:!1}),a=L("/");return fe(()=>{var s;const o=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");r.value.length&&(a.value=((s=r.value.find(({link:i})=>i.startsWith(o)))==null?void 0:s.link)||r.value[0].link)}),(o,s)=>{var i,l,d,h,b;return c(),m("div",Sr,[p("p",$r,H(((i=u(n).notFound)==null?void 0:i.code)??"404"),1),p("h1",Cr,H(((l=u(n).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Mr,p("blockquote",Lr,H(((d=u(n).notFound)==null?void 0:d.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),p("div",Ir,[p("a",{class:"link",href:u(Ge)(a.value),"aria-label":((h=u(n).notFound)==null?void 0:h.linkLabel)??"go to home"},H(((b=u(n).notFound)==null?void 0:b.linkText)??"Take me home"),9,Pr)])])}}}),Vr=I(Ar,[["__scopeId","data-v-0d8ccc9a"]]);function wn(t,e){if(Array.isArray(t))return je(t);if(t==null)return[];e=lt(e);const n=Object.keys(t).sort((a,o)=>o.split("/").length-a.split("/").length).find(a=>e.startsWith(lt(a))),r=n?t[n]:[];return Array.isArray(r)?je(r):je(r.items,r.base)}function xr(t){const e=[];let n=0;for(const r in t){const a=t[r];if(a.items){n=e.push(a);continue}e[n]||e.push({items:[]}),e[n].items.push(a)}return e}function Or(t){const e=[];function n(r){for(const a of r)a.text&&a.link&&e.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&n(a.items)}return n(t),e}function ct(t,e){return Array.isArray(e)?e.some(n=>ct(t,n)):Se(t,e.link)?!0:e.items?ct(t,e.items):!1}function je(t,e){return[...t].map(n=>{const r={...n},a=r.base||e;return a&&r.link&&(r.link=a+r.link),r.items&&(r.items=je(r.items,a)),r})}function ve(){const{frontmatter:t,page:e,theme:n}=D(),r=it("(min-width: 960px)"),a=L(!1),o=M(()=>{const f=n.value.sidebar,g=e.value.relativePath;return f?wn(f,g):[]}),s=L(o.value);G(o,(f,g)=>{JSON.stringify(f)!==JSON.stringify(g)&&(s.value=o.value)});const i=M(()=>t.value.sidebar!==!1&&s.value.length>0&&t.value.layout!=="home"),l=M(()=>d?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),d=M(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),h=M(()=>i.value&&r.value),b=M(()=>i.value?xr(s.value):[]);function v(){a.value=!0}function y(){a.value=!1}function w(){a.value?y():v()}return{isOpen:a,sidebar:s,sidebarGroups:b,hasSidebar:i,hasAside:d,leftAside:l,isSidebarEnabled:h,open:v,close:y,toggle:w}}function Er(t,e){let n;_e(()=>{n=t.value?document.activeElement:void 0}),fe(()=>{window.addEventListener("keyup",r)}),yt(()=>{window.removeEventListener("keyup",r)});function r(a){a.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}const Sn=L(Pe?location.hash:"");Pe&&window.addEventListener("hashchange",()=>{Sn.value=location.hash});function Tr(t){const{page:e}=D(),n=L(!1),r=M(()=>t.value.collapsed!=null),a=M(()=>!!t.value.link),o=L(!1),s=()=>{o.value=Se(e.value.relativePath,t.value.link)};G([e,t,Sn],s),fe(s);const i=M(()=>o.value?!0:t.value.items?ct(e.value.relativePath,t.value.items):!1),l=M(()=>!!(t.value.items&&t.value.items.length));_e(()=>{n.value=!!(r.value&&t.value.collapsed)}),mn(()=>{(o.value||i.value)&&(n.value=!1)});function d(){r.value&&(n.value=!n.value)}return{collapsed:n,collapsible:r,isLink:a,isActiveLink:o,hasActiveLink:i,hasChildren:l,toggle:d}}function Rr(){const{hasSidebar:t}=ve(),e=it("(min-width: 960px)"),n=it("(min-width: 1280px)");return{isAsideEnabled:M(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const Nr=71;function Ct(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Mt(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const r=Number(n.tagName[1]);return{title:Hr(n),link:"#"+n.id,level:r}});return Dr(e,t)}function Hr(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function Dr(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,a]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;t=t.filter(s=>s.level>=r&&s.level<=a);const o=[];e:for(let s=0;s<t.length;s++){const i=t[s];if(s===0)o.push(i);else{for(let l=s-1;l>=0;l--){const d=t[l];if(d.level<i.level){(d.children||(d.children=[])).push(i);continue e}}o.push(i)}}return o}function Br(t,e){const{isAsideEnabled:n}=Rr(),r=yr(o,100);let a=null;fe(()=>{requestAnimationFrame(o),window.addEventListener("scroll",r)}),rr(()=>{s(location.hash)}),yt(()=>{window.removeEventListener("scroll",r)});function o(){if(!n.value)return;const i=[].slice.call(t.value.querySelectorAll(".outline-link")),l=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(y=>i.some(w=>w.hash===y.hash&&y.offsetParent!==null)),d=window.scrollY,h=window.innerHeight,b=document.body.offsetHeight,v=Math.abs(d+h-b)<1;if(l.length&&v){s(l[l.length-1].hash);return}for(let y=0;y<l.length;y++){const w=l[y],f=l[y+1],[g,x]=jr(y,w,f);if(g){s(x);return}}}function s(i){a&&a.classList.remove("active"),i==null?a=null:a=t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const l=a;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+33+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Rt(t){return t.parentElement.offsetTop-Nr}function jr(t,e,n){const r=window.scrollY;return t===0&&r===0?[!0,null]:r<Rt(e)?[!1,null]:!n||r<Rt(n)?[!0,e.hash]:[!1,null]}const Fr=["href","title"],zr=$({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const r=n.href.split("#")[1],a=document.getElementById(decodeURIComponent(r));a==null||a.focus({preventScroll:!0})}return(n,r)=>{const a=Me("VPDocOutlineItem",!0);return c(),m("ul",{class:z(n.root?"root":"nested")},[(c(!0),m(W,null,ee(n.headers,({children:o,link:s,title:i})=>(c(),m("li",null,[p("a",{class:"outline-link",href:s,onClick:e,title:i},H(i),9,Fr),o!=null&&o.length?(c(),E(a,{key:0,headers:o},null,8,["headers"])):C("",!0)]))),256))],2)}}}),Lt=I(zr,[["__scopeId","data-v-04c2665f"]]),Qr=t=>(ie("data-v-72c067c0"),t=t(),le(),t),Ur={class:"content"},qr={class:"outline-title",role:"heading","aria-level":"2"},Wr={"aria-labelledby":"doc-outline-aria-label"},Gr=Qr(()=>p("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Kr=$({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=D(),r=Ke([]);xe(()=>{r.value=Mt(e.value.outline??n.value.outline)});const a=L(),o=L();return Br(a,o),(s,i)=>(c(),m("div",{class:z(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:a,role:"navigation"},[p("div",Ur,[p("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),p("div",qr,H(u(Ct)(u(n))),1),p("nav",Wr,[Gr,S(Lt,{headers:r.value,root:!0},null,8,["headers"])])])],2))}}),Jr=I(Kr,[["__scopeId","data-v-72c067c0"]]),Xr={class:"VPDocAsideCarbonAds"},Zr=$({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,r)=>(c(),m("div",Xr,[S(u(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Yr=t=>(ie("data-v-1be47ae8"),t=t(),le(),t),ea={class:"VPDocAside"},ta=Yr(()=>p("div",{class:"spacer"},null,-1)),na=$({__name:"VPDocAside",setup(t){const{theme:e}=D();return(n,r)=>(c(),m("div",ea,[_(n.$slots,"aside-top",{},void 0,!0),_(n.$slots,"aside-outline-before",{},void 0,!0),S(Jr),_(n.$slots,"aside-outline-after",{},void 0,!0),ta,_(n.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(c(),E(Zr,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):C("",!0),_(n.$slots,"aside-ads-after",{},void 0,!0),_(n.$slots,"aside-bottom",{},void 0,!0)]))}}),ra=I(na,[["__scopeId","data-v-1be47ae8"]]);function aa(){const{theme:t,page:e}=D();return M(()=>{const{text:n="Edit this page",pattern:r=""}=t.value.editLink||{};let a;return typeof r=="function"?a=r(e.value):a=r.replace(/:path/g,e.value.filePath),{url:a,text:n}})}function oa(){const{page:t,theme:e,frontmatter:n}=D();return M(()=>{var l,d,h,b,v,y,w,f;const r=wn(e.value.sidebar,t.value.relativePath),a=Or(r),o=a.findIndex(g=>Se(t.value.relativePath,g.link)),s=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!n.value.prev||n.value.prev===!1,i=((d=e.value.docFooter)==null?void 0:d.next)===!1&&!n.value.next||n.value.next===!1;return{prev:s?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((h=a[o-1])==null?void 0:h.docFooterText)??((b=a[o-1])==null?void 0:b.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((v=a[o-1])==null?void 0:v.link)},next:i?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((y=a[o+1])==null?void 0:y.docFooterText)??((w=a[o+1])==null?void 0:w.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((f=a[o+1])==null?void 0:f.link)}}})}const sa={},ia={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},la=p("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),ca=p("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),ua=[la,ca];function da(t,e){return c(),m("svg",ia,ua)}const pa=I(sa,[["render",da]]),pe=$({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=M(()=>e.tag??(e.href?"a":"span")),r=M(()=>e.href&&hn.test(e.href));return(a,o)=>(c(),E(we(n.value),{class:z(["VPLink",{link:a.href,"vp-external-link-icon":r.value,"no-icon":a.noIcon}]),href:a.href?u($t)(a.href):void 0,target:a.target??(r.value?"_blank":void 0),rel:a.rel??(r.value?"noreferrer":void 0)},{default:k(()=>[_(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),ma={class:"VPLastUpdated"},ha=["datetime"],fa=$({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,frontmatter:r,lang:a}=D(),o=M(()=>new Date(r.value.lastUpdated??n.value.lastUpdated)),s=M(()=>o.value.toISOString()),i=L("");return fe(()=>{_e(()=>{var l,d,h;i.value=new Intl.DateTimeFormat((d=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&d.forceLocale?a.value:void 0,((h=e.value.lastUpdated)==null?void 0:h.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,d)=>{var h;return c(),m("p",ma,[te(H(((h=u(e).lastUpdated)==null?void 0:h.text)||u(e).lastUpdatedText||"Last updated")+": ",1),p("time",{datetime:s.value},H(i.value),9,ha)])}}}),va=I(fa,[["__scopeId","data-v-652c7874"]]),ga={key:0,class:"VPDocFooter"},_a={key:0,class:"edit-info"},ba={key:0,class:"edit-link"},ya={key:1,class:"last-updated"},ka={key:1,class:"prev-next"},wa={class:"pager"},Sa=["innerHTML"],$a=["innerHTML"],Ca={class:"pager"},Ma=["innerHTML"],La=["innerHTML"],Ia=$({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:r}=D(),a=aa(),o=oa(),s=M(()=>e.value.editLink&&r.value.editLink!==!1),i=M(()=>n.value.lastUpdated&&r.value.lastUpdated!==!1),l=M(()=>s.value||i.value||o.value.prev||o.value.next);return(d,h)=>{var b,v,y,w;return l.value?(c(),m("footer",ga,[_(d.$slots,"doc-footer-before",{},void 0,!0),s.value||i.value?(c(),m("div",_a,[s.value?(c(),m("div",ba,[S(pe,{class:"edit-link-button",href:u(a).url,"no-icon":!0},{default:k(()=>[S(pa,{class:"edit-link-icon","aria-label":"edit icon"}),te(" "+H(u(a).text),1)]),_:1},8,["href"])])):C("",!0),i.value?(c(),m("div",ya,[S(va)])):C("",!0)])):C("",!0),(b=u(o).prev)!=null&&b.link||(v=u(o).next)!=null&&v.link?(c(),m("nav",ka,[p("div",wa,[(y=u(o).prev)!=null&&y.link?(c(),E(pe,{key:0,class:"pager-link prev",href:u(o).prev.link},{default:k(()=>{var f;return[p("span",{class:"desc",innerHTML:((f=u(e).docFooter)==null?void 0:f.prev)||"Previous page"},null,8,Sa),p("span",{class:"title",innerHTML:u(o).prev.text},null,8,$a)]}),_:1},8,["href"])):C("",!0)]),p("div",Ca,[(w=u(o).next)!=null&&w.link?(c(),E(pe,{key:0,class:"pager-link next",href:u(o).next.link},{default:k(()=>{var f;return[p("span",{class:"desc",innerHTML:((f=u(e).docFooter)==null?void 0:f.next)||"Next page"},null,8,Ma),p("span",{class:"title",innerHTML:u(o).next.text},null,8,La)]}),_:1},8,["href"])):C("",!0)])])):C("",!0)])):C("",!0)}}}),Pa=I(Ia,[["__scopeId","data-v-0eceaff8"]]),Aa={},Va={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},xa=p("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"},null,-1),Oa=[xa];function Ea(t,e){return c(),m("svg",Va,Oa)}const It=I(Aa,[["render",Ea]]),Ta={key:0,class:"VPDocOutlineDropdown"},Ra={key:0,class:"items"},Na=$({__name:"VPDocOutlineDropdown",setup(t){const{frontmatter:e,theme:n}=D(),r=L(!1);xe(()=>{r.value=!1});const a=Ke([]);return xe(()=>{a.value=Mt(e.value.outline??n.value.outline)}),(o,s)=>a.value.length>0?(c(),m("div",Ta,[p("button",{onClick:s[0]||(s[0]=i=>r.value=!r.value),class:z({open:r.value})},[te(H(u(Ct)(u(n)))+" ",1),S(It,{class:"icon"})],2),r.value?(c(),m("div",Ra,[S(Lt,{headers:a.value},null,8,["headers"])])):C("",!0)])):C("",!0)}}),Ha=I(Na,[["__scopeId","data-v-7339dafe"]]),Da=t=>(ie("data-v-695f753e"),t=t(),le(),t),Ba={class:"container"},ja=Da(()=>p("div",{class:"aside-curtain"},null,-1)),Fa={class:"aside-container"},za={class:"aside-content"},Qa={class:"content"},Ua={class:"content-container"},qa={class:"main"},Wa=$({__name:"VPDoc",setup(t){const{theme:e}=D(),n=Ee(),{hasSidebar:r,hasAside:a,leftAside:o}=ve(),s=M(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,l)=>{const d=Me("Content");return c(),m("div",{class:z(["VPDoc",{"has-sidebar":u(r),"has-aside":u(a)}])},[_(i.$slots,"doc-top",{},void 0,!0),p("div",Ba,[u(a)?(c(),m("div",{key:0,class:z(["aside",{"left-aside":u(o)}])},[ja,p("div",Fa,[p("div",za,[S(ra,null,{"aside-top":k(()=>[_(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[_(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[_(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[_(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[_(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[_(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):C("",!0),p("div",Qa,[p("div",Ua,[_(i.$slots,"doc-before",{},void 0,!0),S(Ha),p("main",qa,[S(d,{class:z(["vp-doc",[s.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),S(Pa,null,{"doc-footer-before":k(()=>[_(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),_(i.$slots,"doc-after",{},void 0,!0)])])]),_(i.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Ga=I(Wa,[["__scopeId","data-v-695f753e"]]),Ka=$({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{}},setup(t){const e=t,n=M(()=>e.href&&hn.test(e.href)),r=M(()=>e.tag||e.href?"a":"button");return(a,o)=>(c(),E(we(r.value),{class:z(["VPButton",[a.size,a.theme]]),href:a.href?u($t)(a.href):void 0,target:n.value?"_blank":void 0,rel:n.value?"noreferrer":void 0},{default:k(()=>[te(H(a.text),1)]),_:1},8,["class","href","target","rel"]))}}),Ja=I(Ka,[["__scopeId","data-v-e92859e2"]]),Xa=["src","alt"],Za=$({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const r=Me("VPImage",!0);return e.image?(c(),m(W,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),m("img",Be({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(Ge)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Xa)):(c(),m(W,{key:1},[S(r,Be({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),S(r,Be({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):C("",!0)}}}),Qe=I(Za,[["__scopeId","data-v-863096c3"]]),Ya=t=>(ie("data-v-0a1d7c47"),t=t(),le(),t),eo={class:"container"},to={class:"main"},no={key:0,class:"name"},ro=["innerHTML"],ao=["innerHTML"],oo=["innerHTML"],so={key:0,class:"actions"},io={key:0,class:"image"},lo={class:"image-container"},co=Ya(()=>p("div",{class:"image-bg"},null,-1)),uo=$({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=Je("hero-image-slot-exists");return(n,r)=>(c(),m("div",{class:z(["VPHero",{"has-image":n.image||u(e)}])},[p("div",eo,[p("div",to,[_(n.$slots,"home-hero-info",{},()=>[n.name?(c(),m("h1",no,[p("span",{innerHTML:n.name,class:"clip"},null,8,ro)])):C("",!0),n.text?(c(),m("p",{key:1,innerHTML:n.text,class:"text"},null,8,ao)):C("",!0),n.tagline?(c(),m("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,oo)):C("",!0)],!0),n.actions?(c(),m("div",so,[(c(!0),m(W,null,ee(n.actions,a=>(c(),m("div",{key:a.link,class:"action"},[S(Ja,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link},null,8,["theme","text","href"])]))),128))])):C("",!0)]),n.image||u(e)?(c(),m("div",io,[p("div",lo,[co,_(n.$slots,"home-hero-image",{},()=>[n.image?(c(),E(Qe,{key:0,class:"image-src",image:n.image},null,8,["image"])):C("",!0)],!0)])])):C("",!0)])],2))}}),po=I(uo,[["__scopeId","data-v-0a1d7c47"]]),mo=$({__name:"VPHomeHero",setup(t){const{frontmatter:e}=D();return(n,r)=>u(e).hero?(c(),E(po,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info":k(()=>[_(n.$slots,"home-hero-info")]),"home-hero-image":k(()=>[_(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):C("",!0)}}),ho={},fo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},vo=p("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),go=[vo];function _o(t,e){return c(),m("svg",fo,go)}const bo=I(ho,[["render",_o]]),yo={class:"box"},ko={key:0,class:"icon"},wo=["innerHTML"],So=["innerHTML"],$o=["innerHTML"],Co={key:4,class:"link-text"},Mo={class:"link-text-value"},Lo=$({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(c(),E(pe,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:k(()=>[p("article",yo,[typeof e.icon=="object"&&e.icon.wrap?(c(),m("div",ko,[S(Qe,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),E(Qe,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),m("div",{key:2,class:"icon",innerHTML:e.icon},null,8,wo)):C("",!0),p("h2",{class:"title",innerHTML:e.title},null,8,So),e.details?(c(),m("p",{key:3,class:"details",innerHTML:e.details},null,8,$o)):C("",!0),e.linkText?(c(),m("div",Co,[p("p",Mo,[te(H(e.linkText)+" ",1),S(bo,{class:"link-text-icon"})])])):C("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Io=I(Lo,[["__scopeId","data-v-d6279a83"]]),Po={key:0,class:"VPFeatures"},Ao={class:"container"},Vo={class:"items"},xo=$({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=M(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,a)=>r.features?(c(),m("div",Po,[p("div",Ao,[p("div",Vo,[(c(!0),m(W,null,ee(r.features,o=>(c(),m("div",{key:o.title,class:z(["item",[n.value]])},[S(Io,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):C("",!0)}}),Oo=I(xo,[["__scopeId","data-v-e6dd66bb"]]),Eo=$({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=D();return(n,r)=>u(e).features?(c(),E(Oo,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):C("",!0)}}),To={class:"VPHome"},Ro=$({__name:"VPHome",setup(t){return(e,n)=>{const r=Me("Content");return c(),m("div",To,[_(e.$slots,"home-hero-before",{},void 0,!0),S(mo,null,{"home-hero-info":k(()=>[_(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[_(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),_(e.$slots,"home-hero-after",{},void 0,!0),_(e.$slots,"home-features-before",{},void 0,!0),S(Eo),_(e.$slots,"home-features-after",{},void 0,!0),S(r)])}}}),No=I(Ro,[["__scopeId","data-v-5c7c4633"]]),Ho={},Do={class:"VPPage"};function Bo(t,e){const n=Me("Content");return c(),m("div",Do,[_(t.$slots,"page-top"),S(n),_(t.$slots,"page-bottom")])}const jo=I(Ho,[["render",Bo]]),Fo=$({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=D(),{hasSidebar:r}=ve();return(a,o)=>(c(),m("div",{class:z(["VPContent",{"has-sidebar":u(r),"is-home":u(n).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?_(a.$slots,"not-found",{key:0},()=>[S(Vr)],!0):u(n).layout==="page"?(c(),E(jo,{key:1},{"page-top":k(()=>[_(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[_(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(n).layout==="home"?(c(),E(No,{key:2},{"home-hero-before":k(()=>[_(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":k(()=>[_(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[_(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[_(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[_(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[_(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(n).layout&&u(n).layout!=="doc"?(c(),E(we(u(n).layout),{key:3})):(c(),E(Ga,{key:4},{"doc-top":k(()=>[_(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[_(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":k(()=>[_(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[_(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[_(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":k(()=>[_(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":k(()=>[_(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[_(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[_(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[_(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":k(()=>[_(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),zo=I(Fo,[["__scopeId","data-v-e4bdd7c7"]]),Qo={class:"container"},Uo=["innerHTML"],qo=["innerHTML"],Wo=$({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=D(),{hasSidebar:r}=ve();return(a,o)=>u(e).footer&&u(n).footer!==!1?(c(),m("footer",{key:0,class:z(["VPFooter",{"has-sidebar":u(r)}])},[p("div",Qo,[u(e).footer.message?(c(),m("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,Uo)):C("",!0),u(e).footer.copyright?(c(),m("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,qo)):C("",!0)])],2)):C("",!0)}}),Go=I(Wo,[["__scopeId","data-v-518559dd"]]),Ko={class:"header"},Jo={class:"outline"},Xo=$({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=D(),r=L(!1),a=L(0),o=L();xe(()=>{r.value=!1});function s(){r.value=!r.value,a.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function i(d){d.target.classList.contains("outline-link")&&(o.value&&(o.value.style.transition="none"),ce(()=>{r.value=!1}))}function l(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(d,h)=>(c(),m("div",{class:"VPLocalNavOutlineDropdown",style:ar({"--vp-vh":a.value+"px"})},[d.headers.length>0?(c(),m("button",{key:0,onClick:s,class:z({open:r.value})},[te(H(u(Ct)(u(n)))+" ",1),S(It,{class:"icon"})],2)):(c(),m("button",{key:1,onClick:l},H(u(n).returnToTopLabel||"Return to top"),1)),S(We,{name:"flyout"},{default:k(()=>[r.value?(c(),m("div",{key:0,ref_key:"items",ref:o,class:"items",onClick:i},[p("div",Ko,[p("a",{class:"top-link",href:"#",onClick:l},H(u(n).returnToTopLabel||"Return to top"),1)]),p("div",Jo,[S(Lt,{headers:d.headers},null,8,["headers"])])],512)):C("",!0)]),_:1})],4))}}),Zo=I(Xo,[["__scopeId","data-v-3d5ae069"]]),Yo={},es={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ts=p("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),ns=p("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),rs=p("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),as=p("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),os=[ts,ns,rs,as];function ss(t,e){return c(),m("svg",es,os)}const is=I(Yo,[["render",ss]]),ls=["aria-expanded"],cs={class:"menu-text"},us=$({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=D(),{hasSidebar:r}=ve(),{y:a}=fn(),o=Ke([]),s=L(0);fe(()=>{s.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),xe(()=>{o.value=Mt(n.value.outline??e.value.outline)});const i=M(()=>o.value.length===0&&!r.value),l=M(()=>({VPLocalNav:!0,fixed:i.value,"reached-top":a.value>=s.value}));return(d,h)=>u(n).layout!=="home"&&(!i.value||u(a)>=s.value)?(c(),m("div",{key:0,class:z(l.value)},[u(r)?(c(),m("button",{key:0,class:"menu","aria-expanded":d.open,"aria-controls":"VPSidebarNav",onClick:h[0]||(h[0]=b=>d.$emit("open-menu"))},[S(is,{class:"menu-icon"}),p("span",cs,H(u(e).sidebarMenuLabel||"Menu"),1)],8,ls)):C("",!0),S(Zo,{headers:o.value,navHeight:s.value},null,8,["headers","navHeight"])],2)):C("",!0)}}),ds=I(us,[["__scopeId","data-v-c53a99ad"]]);function ps(){const t=L(!1);function e(){t.value=!0,window.addEventListener("resize",a)}function n(){t.value=!1,window.removeEventListener("resize",a)}function r(){t.value?n():e()}function a(){window.outerWidth>=768&&n()}const o=Ee();return G(()=>o.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:r}}const ms={},hs={class:"VPSwitch",type:"button",role:"switch"},fs={class:"check"},vs={key:0,class:"icon"};function gs(t,e){return c(),m("button",hs,[p("span",fs,[t.$slots.default?(c(),m("span",vs,[_(t.$slots,"default",{},void 0,!0)])):C("",!0)])])}const _s=I(ms,[["render",gs],["__scopeId","data-v-ba41b7bf"]]),bs={},ys={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ks=p("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),ws=[ks];function Ss(t,e){return c(),m("svg",ys,ws)}const $s=I(bs,[["render",Ss]]),Cs={},Ms={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ls=vn('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),Is=[Ls];function Ps(t,e){return c(),m("svg",Ms,Is)}const As=I(Cs,[["render",Ps]]),Vs=$({__name:"VPSwitchAppearance",setup(t){const{isDark:e}=D(),n=Je("toggle-appearance",()=>{e.value=!e.value}),r=M(()=>e.value?"Switch to light theme":"Switch to dark theme");return(a,o)=>(c(),E(_s,{title:r.value,class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(n)},{default:k(()=>[S(As,{class:"sun"}),S($s,{class:"moon"})]),_:1},8,["title","aria-checked","onClick"]))}}),Pt=I(Vs,[["__scopeId","data-v-19ff1f45"]]),xs={key:0,class:"VPNavBarAppearance"},Os=$({__name:"VPNavBarAppearance",setup(t){const{site:e}=D();return(n,r)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),m("div",xs,[S(Pt)])):C("",!0)}}),Es=I(Os,[["__scopeId","data-v-0ecff3b9"]]),At=L();let $n=!1,rt=0;function Ts(t){const e=L(!1);if(Pe){!$n&&Rs(),rt++;const n=G(At,r=>{var a,o,s;r===t.el.value||(a=t.el.value)!=null&&a.contains(r)?(e.value=!0,(o=t.onFocus)==null||o.call(t)):(e.value=!1,(s=t.onBlur)==null||s.call(t))});yt(()=>{n(),rt--,rt||Ns()})}return kt(e)}function Rs(){document.addEventListener("focusin",Cn),$n=!0,At.value=document.activeElement}function Ns(){document.removeEventListener("focusin",Cn)}function Cn(){At.value=document.activeElement}const Hs={},Ds={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Bs=p("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),js=[Bs];function Fs(t,e){return c(),m("svg",Ds,js)}const Mn=I(Hs,[["render",Fs]]),zs={},Qs={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Us=p("circle",{cx:"12",cy:"12",r:"2"},null,-1),qs=p("circle",{cx:"19",cy:"12",r:"2"},null,-1),Ws=p("circle",{cx:"5",cy:"12",r:"2"},null,-1),Gs=[Us,qs,Ws];function Ks(t,e){return c(),m("svg",Qs,Gs)}const Js=I(zs,[["render",Ks]]),Xs={class:"VPMenuLink"},Zs=$({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=D();return(n,r)=>(c(),m("div",Xs,[S(pe,{class:z({active:u(Se)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:k(()=>[te(H(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Xe=I(Zs,[["__scopeId","data-v-715d28c4"]]),Ys={class:"VPMenuGroup"},ei={key:0,class:"title"},ti=$({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),m("div",Ys,[e.text?(c(),m("p",ei,H(e.text),1)):C("",!0),(c(!0),m(W,null,ee(e.items,r=>(c(),m(W,null,["link"in r?(c(),E(Xe,{key:0,item:r},null,8,["item"])):C("",!0)],64))),256))]))}}),ni=I(ti,[["__scopeId","data-v-de82258f"]]),ri={class:"VPMenu"},ai={key:0,class:"items"},oi=$({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(c(),m("div",ri,[e.items?(c(),m("div",ai,[(c(!0),m(W,null,ee(e.items,r=>(c(),m(W,{key:r.text},["link"in r?(c(),E(Xe,{key:0,item:r},null,8,["item"])):(c(),E(ni,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):C("",!0),_(e.$slots,"default",{},void 0,!0)]))}}),si=I(oi,[["__scopeId","data-v-1e6c5847"]]),ii=["aria-expanded","aria-label"],li={key:0,class:"text"},ci=["innerHTML"],ui={class:"menu"},di=$({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=L(!1),n=L();Ts({el:n,onBlur:r});function r(){e.value=!1}return(a,o)=>(c(),m("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=s=>e.value=!0),onMouseleave:o[2]||(o[2]=s=>e.value=!1)},[p("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":a.label,onClick:o[0]||(o[0]=s=>e.value=!e.value)},[a.button||a.icon?(c(),m("span",li,[a.icon?(c(),E(we(a.icon),{key:0,class:"option-icon"})):C("",!0),a.button?(c(),m("span",{key:1,innerHTML:a.button},null,8,ci)):C("",!0),S(Mn,{class:"text-icon"})])):(c(),E(Js,{key:1,class:"icon"}))],8,ii),p("div",ui,[S(si,{items:a.items},{default:k(()=>[_(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Vt=I(di,[["__scopeId","data-v-30a6eb53"]]),pi={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',mastodon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',x:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},mi=["href","aria-label","innerHTML"],hi=$({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=M(()=>typeof e.icon=="object"?e.icon.svg:pi[e.icon]);return(r,a)=>(c(),m("a",{class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,mi))}}),fi=I(hi,[["__scopeId","data-v-1c95c846"]]),vi={class:"VPSocialLinks"},gi=$({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(c(),m("div",vi,[(c(!0),m(W,null,ee(e.links,({link:r,icon:a,ariaLabel:o})=>(c(),E(fi,{key:r,icon:a,link:r,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),xt=I(gi,[["__scopeId","data-v-9cd5c4f9"]]),_i={key:0,class:"group translations"},bi={class:"trans-title"},yi={key:1,class:"group"},ki={class:"item appearance"},wi={class:"label"},Si={class:"appearance-action"},$i={key:2,class:"group"},Ci={class:"item social-links"},Mi=$({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=D(),{localeLinks:r,currentLang:a}=Te({correspondingLink:!0}),o=M(()=>r.value.length&&a.value.label||e.value.appearance||n.value.socialLinks);return(s,i)=>o.value?(c(),E(Vt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:k(()=>[u(r).length&&u(a).label?(c(),m("div",_i,[p("p",bi,H(u(a).label),1),(c(!0),m(W,null,ee(u(r),l=>(c(),E(Xe,{key:l.link,item:l},null,8,["item"]))),128))])):C("",!0),u(e).appearance&&u(e).appearance!=="force-dark"?(c(),m("div",yi,[p("div",ki,[p("p",wi,H(u(n).darkModeSwitchLabel||"Appearance"),1),p("div",Si,[S(Pt)])])])):C("",!0),u(n).socialLinks?(c(),m("div",$i,[p("div",Ci,[S(xt,{class:"social-links-list",links:u(n).socialLinks},null,8,["links"])])])):C("",!0)]),_:1})):C("",!0)}}),Li=I(Mi,[["__scopeId","data-v-bfbdff7d"]]),Ii=t=>(ie("data-v-97f7e8bb"),t=t(),le(),t),Pi=["aria-expanded"],Ai=Ii(()=>p("span",{class:"container"},[p("span",{class:"top"}),p("span",{class:"middle"}),p("span",{class:"bottom"})],-1)),Vi=[Ai],xi=$({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(c(),m("button",{type:"button",class:z(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=r=>e.$emit("click"))},Vi,10,Pi))}}),Oi=I(xi,[["__scopeId","data-v-97f7e8bb"]]),Ei=["innerHTML"],Ti=$({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=D();return(n,r)=>(c(),E(pe,{class:z({VPNavBarMenuLink:!0,active:u(Se)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:k(()=>[p("span",{innerHTML:n.item.text},null,8,Ei)]),_:1},8,["class","href","target","rel"]))}}),Ri=I(Ti,[["__scopeId","data-v-9cf79a12"]]),Ni=$({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=D(),r=o=>"link"in o?Se(n.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(r),a=M(()=>r(e.item));return(o,s)=>(c(),E(Vt,{class:z({VPNavBarMenuGroup:!0,active:u(Se)(u(n).relativePath,o.item.activeMatch,!!o.item.activeMatch)||a.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Hi=t=>(ie("data-v-e14c0b4d"),t=t(),le(),t),Di={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Bi=Hi(()=>p("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),ji=$({__name:"VPNavBarMenu",setup(t){const{theme:e}=D();return(n,r)=>u(e).nav?(c(),m("nav",Di,[Bi,(c(!0),m(W,null,ee(u(e).nav,a=>(c(),m(W,{key:a.text},["link"in a?(c(),E(Ri,{key:0,item:a},null,8,["item"])):(c(),E(Ni,{key:1,item:a},null,8,["item"]))],64))),128))])):C("",!0)}}),Fi=I(ji,[["__scopeId","data-v-e14c0b4d"]]);var Nt;const Ln=typeof window<"u",zi=t=>typeof t=="string",Fe=()=>{};Ln&&((Nt=window==null?void 0:window.navigator)!=null&&Nt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ut(t){return typeof t=="function"?t():u(t)}function Qi(t,e){function n(...r){t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})}return n}function Ui(t,e={}){let n,r;return a=>{const o=ut(t),s=ut(e.maxWait);if(n&&clearTimeout(n),o<=0||s!==void 0&&s<=0)return r&&(clearTimeout(r),r=null),a();s&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,a()},s)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,a()},o)}}function qi(t){return t}function Wi(t){return bn()?(yn(t),!0):!1}function In(t,e=200,n={}){return Qi(Ui(e,n),t)}function at(t,e=200,n={}){if(e<=0)return t;const r=L(t.value),a=In(()=>{r.value=t.value},e,n);return G(t,()=>a()),r}function Pn(t,e,n){return G(t,(r,a,o)=>{r&&e(r,a,o)},n)}function Gi(t){var e;const n=ut(t);return(e=n==null?void 0:n.$el)!=null?e:n}const An=Ln?window:void 0;function He(...t){let e,n,r,a;if(zi(t[0])?([n,r,a]=t,e=An):[e,n,r,a]=t,!e)return Fe;let o=Fe;const s=G(()=>Gi(e),l=>{o(),l&&(l.addEventListener(n,r,a),o=()=>{l.removeEventListener(n,r,a),o=Fe})},{immediate:!0,flush:"post"}),i=()=>{s(),o()};return Wi(i),i}const Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dt="__vueuse_ssr_handlers__";Ht[Dt]=Ht[Dt]||{};const Ki={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Ji(t={}){const{reactive:e=!1,target:n=An,aliasMap:r=Ki,passive:a=!0,onEventFired:o=Fe}=t,s=$e(new Set),i={toJSON(){return{}},current:s},l=e?$e(i):i,d=new Set,h=new Set;function b(f,g){f in l&&(e?l[f]=g:l[f].value=g)}function v(){for(const f of h)b(f,!1)}function y(f,g){var x,P;const O=(x=f.key)==null?void 0:x.toLowerCase(),N=[(P=f.code)==null?void 0:P.toLowerCase(),O].filter(Boolean);O&&(g?s.add(O):s.delete(O));for(const Q of N)h.add(Q),b(Q,g);O==="meta"&&!g?(d.forEach(Q=>{s.delete(Q),b(Q,!1)}),d.clear()):typeof f.getModifierState=="function"&&f.getModifierState("Meta")&&g&&[...s,...N].forEach(Q=>d.add(Q))}He(n,"keydown",f=>(y(f,!0),o(f)),{passive:a}),He(n,"keyup",f=>(y(f,!1),o(f)),{passive:a}),He("blur",v,{passive:!0}),He("focus",v,{passive:!0});const w=new Proxy(l,{get(f,g,x){if(typeof g!="string")return Reflect.get(f,g,x);if(g=g.toLowerCase(),g in r&&(g=r[g]),!(g in l))if(/[+_-]/.test(g)){const O=g.split(/[+_-]/g).map(N=>N.trim());l[g]=M(()=>O.every(N=>u(w[N])))}else l[g]=L(!1);const P=Reflect.get(f,g,x);return e?u(P):P}});return w}var Bt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Bt||(Bt={}));var Xi=Object.defineProperty,jt=Object.getOwnPropertySymbols,Zi=Object.prototype.hasOwnProperty,Yi=Object.prototype.propertyIsEnumerable,Ft=(t,e,n)=>e in t?Xi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,el=(t,e)=>{for(var n in e||(e={}))Zi.call(e,n)&&Ft(t,n,e[n]);if(jt)for(var n of jt(e))Yi.call(e,n)&&Ft(t,n,e[n]);return t};const tl={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};el({linear:qi},tl);function he(t){return Array.isArray?Array.isArray(t):On(t)==="[object Array]"}const nl=1/0;function rl(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-nl?"-0":e}function al(t){return t==null?"":rl(t)}function ue(t){return typeof t=="string"}function Vn(t){return typeof t=="number"}function ol(t){return t===!0||t===!1||sl(t)&&On(t)=="[object Boolean]"}function xn(t){return typeof t=="object"}function sl(t){return xn(t)&&t!==null}function oe(t){return t!=null}function ot(t){return!t.trim().length}function On(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const il="Incorrect 'index' type",ll=t=>`Invalid value for key ${t}`,cl=t=>`Pattern length exceeds max of ${t}.`,ul=t=>`Missing ${t} property in key`,dl=t=>`Property 'weight' in key '${t}' must be a positive integer`,zt=Object.prototype.hasOwnProperty;class pl{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let a=En(r);n+=a.weight,this._keys.push(a),this._keyMap[a.id]=a,n+=a.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function En(t){let e=null,n=null,r=null,a=1,o=null;if(ue(t)||he(t))r=t,e=Qt(t),n=dt(t);else{if(!zt.call(t,"name"))throw new Error(ul("name"));const s=t.name;if(r=s,zt.call(t,"weight")&&(a=t.weight,a<=0))throw new Error(dl(s));e=Qt(s),n=dt(s),o=t.getFn}return{path:e,id:n,weight:a,src:r,getFn:o}}function Qt(t){return he(t)?t:t.split(".")}function dt(t){return he(t)?t.join("."):t}function ml(t,e){let n=[],r=!1;const a=(o,s,i)=>{if(oe(o))if(!s[i])n.push(o);else{let l=s[i];const d=o[l];if(!oe(d))return;if(i===s.length-1&&(ue(d)||Vn(d)||ol(d)))n.push(al(d));else if(he(d)){r=!0;for(let h=0,b=d.length;h<b;h+=1)a(d[h],s,i+1)}else s.length&&a(d,s,i+1)}};return a(t,ue(e)?e.split("."):e,0),r?n:n[0]}const hl={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},fl={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},vl={location:0,threshold:.6,distance:100},gl={useExtendedSearch:!1,getFn:ml,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var T={...fl,...hl,...vl,...gl};const _l=/[^ ]+/g;function bl(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(a){const o=a.match(_l).length;if(n.has(o))return n.get(o);const s=1/Math.pow(o,.5*t),i=parseFloat(Math.round(s*r)/r);return n.set(o,i),i},clear(){n.clear()}}}class Ot{constructor({getFn:e=T.getFn,fieldNormWeight:n=T.fieldNormWeight}={}){this.norm=bl(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ue(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();ue(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!oe(e)||ot(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((a,o)=>{let s=a.getFn?a.getFn(e):this.getFn(e,a.path);if(oe(s)){if(he(s)){let i=[];const l=[{nestedArrIndex:-1,value:s}];for(;l.length;){const{nestedArrIndex:d,value:h}=l.pop();if(oe(h))if(ue(h)&&!ot(h)){let b={v:h,i:d,n:this.norm.get(h)};i.push(b)}else he(h)&&h.forEach((b,v)=>{l.push({nestedArrIndex:v,value:b})})}r.$[o]=i}else if(ue(s)&&!ot(s)){let i={v:s,n:this.norm.get(s)};r.$[o]=i}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Tn(t,e,{getFn:n=T.getFn,fieldNormWeight:r=T.fieldNormWeight}={}){const a=new Ot({getFn:n,fieldNormWeight:r});return a.setKeys(t.map(En)),a.setSources(e),a.create(),a}function yl(t,{getFn:e=T.getFn,fieldNormWeight:n=T.fieldNormWeight}={}){const{keys:r,records:a}=t,o=new Ot({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(a),o}function De(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:a=T.distance,ignoreLocation:o=T.ignoreLocation}={}){const s=e/t.length;if(o)return s;const i=Math.abs(r-n);return a?s+i/a:i?1:s}function kl(t=[],e=T.minMatchCharLength){let n=[],r=-1,a=-1,o=0;for(let s=t.length;o<s;o+=1){let i=t[o];i&&r===-1?r=o:!i&&r!==-1&&(a=o-1,a-r+1>=e&&n.push([r,a]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const ke=32;function wl(t,e,n,{location:r=T.location,distance:a=T.distance,threshold:o=T.threshold,findAllMatches:s=T.findAllMatches,minMatchCharLength:i=T.minMatchCharLength,includeMatches:l=T.includeMatches,ignoreLocation:d=T.ignoreLocation}={}){if(e.length>ke)throw new Error(cl(ke));const h=e.length,b=t.length,v=Math.max(0,Math.min(r,b));let y=o,w=v;const f=i>1||l,g=f?Array(b):[];let x;for(;(x=t.indexOf(e,w))>-1;){let U=De(e,{currentLocation:x,expectedLocation:v,distance:a,ignoreLocation:d});if(y=Math.min(U,y),w=x+h,f){let R=0;for(;R<h;)g[x+R]=1,R+=1}}w=-1;let P=[],O=1,N=h+b;const Q=1<<h-1;for(let U=0;U<h;U+=1){let R=0,B=N;for(;R<B;)De(e,{errors:U,currentLocation:v+B,expectedLocation:v,distance:a,ignoreLocation:d})<=y?R=B:N=B,B=Math.floor((N-R)/2+R);N=B;let ne=Math.max(1,v-B+1),me=s?b:Math.min(v+B,b)+h,ae=Array(me+2);ae[me+1]=(1<<U)-1;for(let A=me;A>=ne;A-=1){let F=A-1,Y=n[t.charAt(F)];if(f&&(g[F]=+!!Y),ae[A]=(ae[A+1]<<1|1)&Y,U&&(ae[A]|=(P[A+1]|P[A])<<1|1|P[A+1]),ae[A]&Q&&(O=De(e,{errors:U,currentLocation:F,expectedLocation:v,distance:a,ignoreLocation:d}),O<=y)){if(y=O,w=F,w<=v)break;ne=Math.max(1,2*v-w)}}if(De(e,{errors:U+1,currentLocation:v,expectedLocation:v,distance:a,ignoreLocation:d})>y)break;P=ae}const X={isMatch:w>=0,score:Math.max(.001,O)};if(f){const U=kl(g,i);U.length?l&&(X.indices=U):X.isMatch=!1}return X}function Sl(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const a=t.charAt(n);e[a]=(e[a]||0)|1<<r-n-1}return e}class Rn{constructor(e,{location:n=T.location,threshold:r=T.threshold,distance:a=T.distance,includeMatches:o=T.includeMatches,findAllMatches:s=T.findAllMatches,minMatchCharLength:i=T.minMatchCharLength,isCaseSensitive:l=T.isCaseSensitive,ignoreLocation:d=T.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:a,includeMatches:o,findAllMatches:s,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:d},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(v,y)=>{this.chunks.push({pattern:v,alphabet:Sl(v),startIndex:y})},b=this.pattern.length;if(b>ke){let v=0;const y=b%ke,w=b-y;for(;v<w;)h(this.pattern.substr(v,ke),v),v+=ke;if(y){const f=b-ke;h(this.pattern.substr(f),f)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let w={isMatch:!0,score:0};return r&&(w.indices=[[0,e.length-1]]),w}const{location:a,distance:o,threshold:s,findAllMatches:i,minMatchCharLength:l,ignoreLocation:d}=this.options;let h=[],b=0,v=!1;this.chunks.forEach(({pattern:w,alphabet:f,startIndex:g})=>{const{isMatch:x,score:P,indices:O}=wl(e,w,f,{location:a+g,distance:o,threshold:s,findAllMatches:i,minMatchCharLength:l,includeMatches:r,ignoreLocation:d});x&&(v=!0),b+=P,x&&O&&(h=[...h,...O])});let y={isMatch:v,score:v?b/this.chunks.length:1};return v&&r&&(y.indices=h),y}}class be{constructor(e){this.pattern=e}static isMultiMatch(e){return Ut(e,this.multiRegex)}static isSingleMatch(e){return Ut(e,this.singleRegex)}search(){}}function Ut(t,e){const n=t.match(e);return n?n[1]:null}class $l extends be{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Cl extends be{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ml extends be{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ll extends be{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Il extends be{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Pl extends be{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Nn extends be{constructor(e,{location:n=T.location,threshold:r=T.threshold,distance:a=T.distance,includeMatches:o=T.includeMatches,findAllMatches:s=T.findAllMatches,minMatchCharLength:i=T.minMatchCharLength,isCaseSensitive:l=T.isCaseSensitive,ignoreLocation:d=T.ignoreLocation}={}){super(e),this._bitapSearch=new Rn(e,{location:n,threshold:r,distance:a,includeMatches:o,findAllMatches:s,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Hn extends be{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const a=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,a.push([r,n-1]);const s=!!a.length;return{isMatch:s,score:s?0:1,indices:a}}}const pt=[$l,Hn,Ml,Ll,Pl,Il,Cl,Nn],qt=pt.length,Al=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Vl="|";function xl(t,e={}){return t.split(Vl).map(n=>{let r=n.trim().split(Al).filter(o=>o&&!!o.trim()),a=[];for(let o=0,s=r.length;o<s;o+=1){const i=r[o];let l=!1,d=-1;for(;!l&&++d<qt;){const h=pt[d];let b=h.isMultiMatch(i);b&&(a.push(new h(b,e)),l=!0)}if(!l)for(d=-1;++d<qt;){const h=pt[d];let b=h.isSingleMatch(i);if(b){a.push(new h(b,e));break}}}return a})}const Ol=new Set([Nn.type,Hn.type]);class El{constructor(e,{isCaseSensitive:n=T.isCaseSensitive,includeMatches:r=T.includeMatches,minMatchCharLength:a=T.minMatchCharLength,ignoreLocation:o=T.ignoreLocation,findAllMatches:s=T.findAllMatches,location:i=T.location,threshold:l=T.threshold,distance:d=T.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:a,findAllMatches:s,ignoreLocation:o,location:i,threshold:l,distance:d},this.pattern=n?e:e.toLowerCase(),this.query=xl(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:a}=this.options;e=a?e:e.toLowerCase();let o=0,s=[],i=0;for(let l=0,d=n.length;l<d;l+=1){const h=n[l];s.length=0,o=0;for(let b=0,v=h.length;b<v;b+=1){const y=h[b],{isMatch:w,indices:f,score:g}=y.search(e);if(w){if(o+=1,i+=g,r){const x=y.constructor.type;Ol.has(x)?s=[...s,...f]:s.push(f)}}else{i=0,o=0,s.length=0;break}}if(o){let b={isMatch:!0,score:i/o};return r&&(b.indices=s),b}}return{isMatch:!1,score:1}}}const mt=[];function Tl(...t){mt.push(...t)}function ht(t,e){for(let n=0,r=mt.length;n<r;n+=1){let a=mt[n];if(a.condition(t,e))return new a(t,e)}return new Rn(t,e)}const Ue={AND:"$and",OR:"$or"},ft={PATH:"$path",PATTERN:"$val"},vt=t=>!!(t[Ue.AND]||t[Ue.OR]),Rl=t=>!!t[ft.PATH],Nl=t=>!he(t)&&xn(t)&&!vt(t),Wt=t=>({[Ue.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Dn(t,e,{auto:n=!0}={}){const r=a=>{let o=Object.keys(a);const s=Rl(a);if(!s&&o.length>1&&!vt(a))return r(Wt(a));if(Nl(a)){const l=s?a[ft.PATH]:o[0],d=s?a[ft.PATTERN]:a[l];if(!ue(d))throw new Error(ll(l));const h={keyId:dt(l),pattern:d};return n&&(h.searcher=ht(d,e)),h}let i={children:[],operator:o[0]};return o.forEach(l=>{const d=a[l];he(d)&&d.forEach(h=>{i.children.push(r(h))})}),i};return vt(t)||(t=Wt(t)),r(t)}function Hl(t,{ignoreFieldNorm:e=T.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:a,norm:o,score:s})=>{const i=a?a.weight:null;r*=Math.pow(s===0&&i?Number.EPSILON:s,(i||1)*(e?1:o))}),n.score=r})}function Dl(t,e){const n=t.matches;e.matches=[],oe(n)&&n.forEach(r=>{if(!oe(r.indices)||!r.indices.length)return;const{indices:a,value:o}=r;let s={indices:a,value:o};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function Bl(t,e){e.score=t.score}function jl(t,e,{includeMatches:n=T.includeMatches,includeScore:r=T.includeScore}={}){const a=[];return n&&a.push(Dl),r&&a.push(Bl),t.map(o=>{const{idx:s}=o,i={item:e[s],refIndex:s};return a.length&&a.forEach(l=>{l(o,i)}),i})}class Ce{constructor(e,n={},r){this.options={...T,...n},this.options.useExtendedSearch,this._keyStore=new pl(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Ot))throw new Error(il);this._myIndex=n||Tn(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!oe(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,a=this._docs.length;r<a;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,a-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:a,shouldSort:o,sortFn:s,ignoreFieldNorm:i}=this.options;let l=ue(e)?ue(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Hl(l,{ignoreFieldNorm:i}),o&&l.sort(s),Vn(n)&&n>-1&&(l=l.slice(0,n)),jl(l,this._docs,{includeMatches:r,includeScore:a})}_searchStringList(e){const n=ht(e,this.options),{records:r}=this._myIndex,a=[];return r.forEach(({v:o,i:s,n:i})=>{if(!oe(o))return;const{isMatch:l,score:d,indices:h}=n.searchIn(o);l&&a.push({item:o,idx:s,matches:[{score:d,value:o,norm:i,indices:h}]})}),a}_searchLogical(e){const n=Dn(e,this.options),r=(i,l,d)=>{if(!i.children){const{keyId:b,searcher:v}=i,y=this._findMatches({key:this._keyStore.get(b),value:this._myIndex.getValueForItemAtKeyId(l,b),searcher:v});return y&&y.length?[{idx:d,item:l,matches:y}]:[]}const h=[];for(let b=0,v=i.children.length;b<v;b+=1){const y=i.children[b],w=r(y,l,d);if(w.length)h.push(...w);else if(i.operator===Ue.AND)return[]}return h},a=this._myIndex.records,o={},s=[];return a.forEach(({$:i,i:l})=>{if(oe(i)){let d=r(n,i,l);d.length&&(o[l]||(o[l]={idx:l,item:i,matches:[]},s.push(o[l])),d.forEach(({matches:h})=>{o[l].matches.push(...h)}))}}),s}_searchObjectList(e){const n=ht(e,this.options),{keys:r,records:a}=this._myIndex,o=[];return a.forEach(({$:s,i})=>{if(!oe(s))return;let l=[];r.forEach((d,h)=>{l.push(...this._findMatches({key:d,value:s[h],searcher:n}))}),l.length&&o.push({idx:i,item:s,matches:l})}),o}_findMatches({key:e,value:n,searcher:r}){if(!oe(n))return[];let a=[];if(he(n))n.forEach(({v:o,i:s,n:i})=>{if(!oe(o))return;const{isMatch:l,score:d,indices:h}=r.searchIn(o);l&&a.push({score:d,key:e,value:o,idx:s,norm:i,indices:h})});else{const{v:o,n:s}=n,{isMatch:i,score:l,indices:d}=r.searchIn(o);i&&a.push({score:l,key:e,value:o,norm:s,indices:d})}return a}}Ce.version="6.6.2";Ce.createIndex=Tn;Ce.parseIndex=yl;Ce.config=T;Ce.parseQuery=Dn;Tl(El);const Gt=$e({selectedNode:"",selectedGroup:"",search:"",dataValue:"",filtered:{count:0,items:new Map,groups:new Set}}),Ae=()=>({isSearching:M(()=>Gt.search!==""),...sr(Gt)});function Fl(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map(function(a){a(n)}),(r=t.get("*"))&&r.slice().map(function(a){a(e,n)})}}}const zl=Fl(),Ze=()=>({emitter:zl});function Ql(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return n;n=n.nextElementSibling}}function Ul(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return n;n=n.previousElementSibling}}const ql=["command-theme"],Wl={"command-root":""},Gl=$({name:"Command"}),Kl=$({...Gl,props:{theme:{type:String,default:"default"},fuseOptions:{type:Object,default:()=>({threshold:.2,keys:["label"]})}},emits:["select-item"],setup(t,{emit:e}){const n=t,r='[command-item=""]',a="command-item-key",o='[command-group=""]',s="command-group-key",i='[command-group-heading=""]',l=`${r}:not([aria-disabled="true"])`,d=`${r}[aria-selected="true"]`,h="command-item-select",b="data-value";wt("theme",n.theme||"default");const{selectedNode:v,search:y,dataValue:w,filtered:f}=Ae(),{emitter:g}=Ze(),x=L(),P=at(L(new Map),333),O=at(L(new Set),333),N=at(L(new Map)),Q=M(()=>{const V=[];for(const[q,j]of P.value.entries())V.push({key:q,label:j});return V}),X=M(()=>{const V=Ce.createIndex(n.fuseOptions.keys,Q.value);return new Ce(Q.value,n.fuseOptions,V)}),U=()=>{var V,q,j;const K=R();K&&(((V=K.parentElement)==null?void 0:V.firstElementChild)===K&&((j=(q=K.closest(o))==null?void 0:q.querySelector(i))==null||j.scrollIntoView({block:"nearest"})),K.scrollIntoView({block:"nearest"}))},R=()=>{var V;return(V=x.value)==null?void 0:V.querySelector(d)},B=(V=x.value)=>{const q=V==null?void 0:V.querySelectorAll(l);return q?Array.from(q):[]},ne=()=>{var V;const q=(V=x.value)==null?void 0:V.querySelectorAll(o);return q?Array.from(q):[]},me=()=>{const[V]=B();V&&V.getAttribute(a)&&(v.value=V.getAttribute(a)||"")},ae=V=>{const q=B()[V];q&&(v.value=q.getAttribute(a)||"")},A=V=>{const q=R(),j=B(),K=j.findIndex(Ne=>Ne===q),ge=j[K+V];ge?v.value=ge.getAttribute(a)||"":V>0?ae(0):ae(j.length-1)},F=V=>{const q=R();let j=q==null?void 0:q.closest(o),K=null;for(;j&&!K;)j=V>0?Ql(j,o):Ul(j,o),K=j==null?void 0:j.querySelector(l);K?v.value=K.getAttribute(a)||"":A(V)},Y=()=>ae(0),J=()=>ae(B().length-1),Le=V=>{V.preventDefault(),V.metaKey?J():V.altKey?F(1):A(1)},tt=V=>{V.preventDefault(),V.metaKey?Y():V.altKey?F(-1):A(-1)},nt=V=>{switch(V.key){case"n":case"j":{V.ctrlKey&&Le(V);break}case"ArrowDown":{Le(V);break}case"p":case"k":{V.ctrlKey&&tt(V);break}case"ArrowUp":{tt(V);break}case"Home":{Y();break}case"End":{J();break}case"Enter":{const q=R();if(q){const j=new Event(h);q.dispatchEvent(j)}}}},re=()=>{if(!y.value){f.value.count=O.value.size;return}f.value.groups=new Set("");const V=new Map,q=X.value.search(y.value).map(j=>j.item);for(const{key:j,label:K}of q)V.set(j,K);for(const[j,K]of N.value)for(const ge of K)V.get(ge)&&f.value.groups.add(j);ce(()=>{f.value.count=V.size,f.value.items=V})},ye=()=>{const V=B(),q=ne();for(const j of V){const K=j.getAttribute(a)||"",ge=j.getAttribute(b)||"";O.value.add(K),P.value.set(K,ge),f.value.count=P.value.size}for(const j of q){const K=B(j),ge=j.getAttribute(s)||"",Ne=new Set("");for(const Yn of K){const er=Yn.getAttribute(a)||"";Ne.add(er)}N.value.set(ge,Ne)}};G(()=>v.value,V=>{V&&ce(U)},{deep:!0}),G(()=>y.value,V=>{re(),ce(me)}),g.on("selectItem",V=>{e("select-item",V)});const Zn=In(V=>{V&&(ye(),ce(me))},100);return g.on("rerenderList",Zn),fe(()=>{ye(),me()}),(V,q)=>(c(),m("div",{class:z(t.theme),onKeydown:nt,ref_key:"commandRef",ref:x,"command-theme":t.theme},[p("div",Wl,[_(V.$slots,"default")])],42,ql))}}),Ve=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},gt=Ve(Kl,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]),Jl={"command-dialog":""},Xl={"command-dialog-mask":""},Zl={"command-dialog-wrapper":""},Yl={"command-dialog-header":""},ec={"command-dialog-body":""},tc={key:0,"command-dialog-footer":""},nc=$({name:"Command.Dialog"}),rc=$({...nc,props:{visible:{type:Boolean,required:!0},theme:{type:String,required:!0}},emits:["select-item"],setup(t,{emit:e}){const n=t,{search:r,filtered:a}=Ae(),{emitter:o}=Ze(),s=L();o.on("selectItem",l=>{e("select-item",l)});const i=()=>{r.value="",a.value.count=0,a.value.items=new Map,a.value.groups=new Set};return Pn(()=>n.visible,i),St(i),(l,d)=>(c(),E(or,{to:"body",ref_key:"dialogRef",ref:s},[S(We,{name:"command-dialog",appear:""},{default:k(()=>[t.visible?(c(),E(gt,{key:0,theme:t.theme},{default:k(()=>[p("div",Jl,[p("div",Xl,[p("div",Zl,[p("div",Yl,[_(l.$slots,"header")]),p("div",ec,[_(l.$slots,"body")]),l.$slots.footer?(c(),m("div",tc,[_(l.$slots,"footer")])):C("v-if",!0)])])])]),_:3},8,["theme"])):C("v-if",!0)]),_:3})],512))}}),ac=Ve(rc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);let Bn=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const oc=["command-group-key","data-value"],sc={key:0,"command-group-heading":""},ic={"command-group-items":"",role:"group"},lc=$({name:"Command.Group"}),cc=$({...lc,props:{heading:{type:String,required:!0}},setup(t){const e=M(()=>`command-group-${Bn()}`),{filtered:n,isSearching:r}=Ae(),a=M(()=>r.value?n.value.groups.has(e.value):!0);return(o,s)=>gn((c(),m("div",{"command-group":"",role:"presentation",key:u(e),"command-group-key":u(e),"data-value":t.heading},[t.heading?(c(),m("div",sc,H(t.heading),1)):C("v-if",!0),p("div",ic,[_(o.$slots,"default")])],8,oc)),[[_n,u(a)]])}}),uc=Ve(cc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]),dc=["placeholder","value"],pc=$({name:"Command.Input"}),mc=$({...pc,props:{placeholder:{type:String,required:!0},value:{type:String,required:!1}},emits:["input","update:value"],setup(t,{emit:e}){const n=L(null),{search:r}=Ae(),a=M(()=>r.value),o=s=>{const i=s,l=s.target;r.value=l==null?void 0:l.value,e("input",i),e("update:value",r.value)};return _e(()=>{var s;(s=n.value)==null||s.focus()}),(s,i)=>(c(),m("input",{ref_key:"inputRef",ref:n,"command-input":"","auto-focus":"","auto-complete":"off","auto-correct":"off","spell-check":!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,placeholder:t.placeholder,value:u(a),onInput:o},null,40,dc))}}),hc=Ve(mc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]),fc=["aria-selected","aria-disabled","command-item-key"],vc=$({name:"Command.Item"}),gc=$({...vc,props:{shortcut:{type:Array,required:!1},perform:{type:null,required:!1}},emits:["select"],setup(t,{emit:e}){const n=t,r="command-item-select",a="data-value",{current:o}=Ji(),{selectedNode:s,filtered:i,isSearching:l}=Ae(),{emitter:d}=Ze(),h=L(),b=M(()=>`command-item-${Bn()}`),v=M(()=>{const f=i.value.items.get(b.value);return l.value?f!==void 0:!0}),y=M(()=>Array.from(o)),w=()=>{var f;const g={key:b.value,value:((f=h.value)==null?void 0:f.getAttribute(a))||""};e("select",g),d.emit("selectItem",g)};return Pn(y,f=>{n.shortcut&&n.shortcut.length>0&&n.shortcut.every(g=>o.has(g.toLowerCase()))&&n.perform&&n.perform()}),_e(()=>{var f;(f=h.value)==null||f.addEventListener(r,w)}),St(()=>{var f;(f=h.value)==null||f.removeEventListener(r,w)}),(f,g)=>gn((c(),m("div",{ref_key:"itemRef",ref:h,"command-item":"",role:"option","aria-selected":u(s)===u(b),"aria-disabled":!u(v),key:u(b),"command-item-key":u(b),onClick:w},[_(f.$slots,"default")],8,fc)),[[_n,u(v)]])}}),_c=Ve(gc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]),bc=$({name:"Command.List"}),yc=$({...bc,setup(t){const{emitter:e}=Ze(),n=L(),r=L();let a=null,o;return _e(()=>{o=r.value;const s=n.value;o&&s&&(a=new ResizeObserver(i=>{ce(()=>{const l=o==null?void 0:o.offsetHeight;s==null||s.style.setProperty("--command-list-height",`${l==null?void 0:l.toFixed(1)}px`),e.emit("rerenderList",!0)})}),a.observe(o))}),St(()=>{a!==null&&o&&a.unobserve(o)}),(s,i)=>(c(),m("div",{"command-list":"",role:"listbox","aria-label":"Suggestions",ref_key:"listRef",ref:n},[p("div",{"command-list-sizer":"",ref_key:"heightRef",ref:r},[_(s.$slots,"default")],512)],512))}}),kc=Ve(yc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]),wc=$({name:"Command.Empty",setup(t,{attrs:e,slots:n}){const{filtered:r}=Ae(),a=M(()=>r.value.count===0);return()=>a.value?ze("div",{"command-empty":"",role:"presentation",...e},n):ze("div",{"command-empty":"hidden",role:"presentation",style:{display:"none"},...e})}}),Sc=$({name:"Command.Loading",setup(t,{attrs:e,slots:n}){return()=>ze("div",{"command-loading":"",role:"progressbar",...e},n)}}),$c=$({name:"Command.Separator",setup(t,{attrs:e,slots:n}){return()=>ze("div",{"command-separator":"",role:"separator",...e})}}),Ie=Object.assign(gt,{Dialog:ac,Empty:wc,Group:uc,Input:hc,Item:_c,List:kc,Loading:Sc,Separator:$c,Root:gt});var Kt;const Et=typeof window<"u",Cc=t=>typeof t=="function",Mc=t=>typeof t=="string",Oe=()=>{},Lc=Et&&((Kt=window==null?void 0:window.navigator)==null?void 0:Kt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Re(t){return typeof t=="function"?t():u(t)}function jn(t,e){function n(...r){return new Promise((a,o)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(a).catch(o)})}return n}const Fn=t=>t();function Ic(t,e=!0,n=!0,r=!1){let a=0,o,s=!0,i=Oe,l;const d=()=>{o&&(clearTimeout(o),o=void 0,i(),i=Oe)};return b=>{const v=Re(t),y=Date.now()-a,w=()=>l=b();return d(),v<=0?(a=Date.now(),w()):(y>v&&(n||!s)?(a=Date.now(),w()):e&&(l=new Promise((f,g)=>{i=r?g:f,o=setTimeout(()=>{a=Date.now(),s=!0,f(w()),d()},Math.max(0,v-y))})),!n&&!o&&(o=setTimeout(()=>s=!0,v)),s=!1,l)}}function Pc(t=Fn){const e=L(!0);function n(){e.value=!1}function r(){e.value=!0}const a=(...o)=>{e.value&&t(...o)};return{isActive:kt(e),pause:n,resume:r,eventFilter:a}}function Ac(t){return t}function Ye(t){return bn()?(yn(t),!0):!1}function c0(t,e=200,n=!1,r=!0,a=!1){return jn(Ic(e,n,r,a),t)}function Vc(t){return typeof t=="function"?M(t):L(t)}function et(t,e=!0){ir()?fe(t):e?t():ce(t)}function u0(t,e,n={}){const{immediate:r=!0}=n,a=L(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function i(){a.value=!1,s()}function l(...d){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,t(...d)},Re(e))}return r&&(a.value=!0,Et&&l()),Ye(i),{isPending:kt(a),start:l,stop:i}}var Jt=Object.getOwnPropertySymbols,xc=Object.prototype.hasOwnProperty,Oc=Object.prototype.propertyIsEnumerable,Ec=(t,e)=>{var n={};for(var r in t)xc.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Jt)for(var r of Jt(t))e.indexOf(r)<0&&Oc.call(t,r)&&(n[r]=t[r]);return n};function Tc(t,e,n={}){const r=n,{eventFilter:a=Fn}=r,o=Ec(r,["eventFilter"]);return G(t,jn(a,e),o)}var Rc=Object.defineProperty,Nc=Object.defineProperties,Hc=Object.getOwnPropertyDescriptors,qe=Object.getOwnPropertySymbols,zn=Object.prototype.hasOwnProperty,Qn=Object.prototype.propertyIsEnumerable,Xt=(t,e,n)=>e in t?Rc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Dc=(t,e)=>{for(var n in e||(e={}))zn.call(e,n)&&Xt(t,n,e[n]);if(qe)for(var n of qe(e))Qn.call(e,n)&&Xt(t,n,e[n]);return t},Bc=(t,e)=>Nc(t,Hc(e)),jc=(t,e)=>{var n={};for(var r in t)zn.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&qe)for(var r of qe(t))e.indexOf(r)<0&&Qn.call(t,r)&&(n[r]=t[r]);return n};function Un(t,e,n={}){const r=n,{eventFilter:a}=r,o=jc(r,["eventFilter"]),{eventFilter:s,pause:i,resume:l,isActive:d}=Pc(a);return{stop:Tc(t,e,Bc(Dc({},o),{eventFilter:s})),pause:i,resume:l,isActive:d}}function de(t){var e;const n=Re(t);return(e=n==null?void 0:n.$el)!=null?e:n}const se=Et?window:void 0;function Z(...t){let e,n,r,a;if(Mc(t[0])||Array.isArray(t[0])?([n,r,a]=t,e=se):[e,n,r,a]=t,!e)return Oe;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],s=()=>{o.forEach(h=>h()),o.length=0},i=(h,b,v,y)=>(h.addEventListener(b,v,y),()=>h.removeEventListener(b,v,y)),l=G(()=>[de(e),Re(a)],([h,b])=>{s(),h&&o.push(...n.flatMap(v=>r.map(y=>i(h,v,y,b))))},{immediate:!0,flush:"post"}),d=()=>{l(),s()};return Ye(d),d}let Zt=!1;function d0(t,e,n={}){const{window:r=se,ignore:a=[],capture:o=!0,detectIframe:s=!1}=n;if(!r)return;Lc&&!Zt&&(Zt=!0,Array.from(r.document.body.children).forEach(v=>v.addEventListener("click",Oe)));let i=!0;const l=v=>a.some(y=>{if(typeof y=="string")return Array.from(r.document.querySelectorAll(y)).some(w=>w===v.target||v.composedPath().includes(w));{const w=de(y);return w&&(v.target===w||v.composedPath().includes(w))}}),h=[Z(r,"click",v=>{const y=de(t);if(!(!y||y===v.target||v.composedPath().includes(y))){if(v.detail===0&&(i=!l(v)),!i){i=!0;return}e(v)}},{passive:!0,capture:o}),Z(r,"pointerdown",v=>{const y=de(t);y&&(i=!v.composedPath().includes(y)&&!l(v))},{passive:!0}),s&&Z(r,"blur",v=>{var y;const w=de(t);((y=r.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(w!=null&&w.contains(r.document.activeElement))&&e(v)})].filter(Boolean);return()=>h.forEach(v=>v())}function qn(t,e=!1){const n=L(),r=()=>n.value=!!t();return r(),et(r,e),n}function Fc(t,e={}){const{window:n=se}=e,r=qn(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const o=L(!1),s=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},i=()=>{r.value&&(s(),a=n.matchMedia(Vc(t).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",i):a.addListener(i))};return _e(i),Ye(()=>s()),o}function p0({window:t=se}={}){const e=r=>{const{state:a,length:o}=(t==null?void 0:t.history)||{},{hash:s,host:i,hostname:l,href:d,origin:h,pathname:b,port:v,protocol:y,search:w}=(t==null?void 0:t.location)||{};return{trigger:r,state:a,length:o,hash:s,host:i,hostname:l,href:d,origin:h,pathname:b,port:v,protocol:y,search:w}},n=L(e("load"));return t&&(Z(t,"popstate",()=>n.value=e("popstate"),{passive:!0}),Z(t,"hashchange",()=>n.value=e("hashchange"),{passive:!0})),n}const _t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bt="__vueuse_ssr_handlers__";_t[bt]=_t[bt]||{};const zc=_t[bt];function Wn(t,e){return zc[t]||e}function Qc(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var Uc=Object.defineProperty,Yt=Object.getOwnPropertySymbols,qc=Object.prototype.hasOwnProperty,Wc=Object.prototype.propertyIsEnumerable,en=(t,e,n)=>e in t?Uc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,tn=(t,e)=>{for(var n in e||(e={}))qc.call(e,n)&&en(t,n,e[n]);if(Yt)for(var n of Yt(e))Wc.call(e,n)&&en(t,n,e[n]);return t};const Gc={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},nn="vueuse-storage";function Kc(t,e,n,r={}){var a;const{flush:o="pre",deep:s=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,mergeDefaults:d=!1,shallow:h,window:b=se,eventFilter:v,onError:y=R=>{console.error(R)}}=r,w=(h?Ke:L)(e);if(!n)try{n=Wn("getDefaultStorage",()=>{var R;return(R=se)==null?void 0:R.localStorage})()}catch(R){y(R)}if(!n)return w;const f=Re(e),g=Qc(f),x=(a=r.serializer)!=null?a:Gc[g],{pause:P,resume:O}=Un(w,()=>N(w.value),{flush:o,deep:s,eventFilter:v});return b&&i&&(Z(b,"storage",U),Z(b,nn,X)),U(),w;function N(R){try{if(R==null)n.removeItem(t);else{const B=x.write(R),ne=n.getItem(t);ne!==B&&(n.setItem(t,B),b&&b.dispatchEvent(new CustomEvent(nn,{detail:{key:t,oldValue:ne,newValue:B,storageArea:n}})))}}catch(B){y(B)}}function Q(R){const B=R?R.newValue:n.getItem(t);if(B==null)return l&&f!==null&&n.setItem(t,x.write(f)),f;if(!R&&d){const ne=x.read(B);return Cc(d)?d(ne,f):g==="object"&&!Array.isArray(ne)?tn(tn({},f),ne):ne}else return typeof B!="string"?B:x.read(B)}function X(R){U(R.detail)}function U(R){if(!(R&&R.storageArea!==n)){if(R&&R.key==null){w.value=f;return}if(!(R&&R.key!==t)){P();try{w.value=Q(R)}catch(B){y(B)}finally{R?ce(O):O()}}}}}function Gn(t){return Fc("(prefers-color-scheme: dark)",t)}var Jc=Object.defineProperty,rn=Object.getOwnPropertySymbols,Xc=Object.prototype.hasOwnProperty,Zc=Object.prototype.propertyIsEnumerable,an=(t,e,n)=>e in t?Jc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Yc=(t,e)=>{for(var n in e||(e={}))Xc.call(e,n)&&an(t,n,e[n]);if(rn)for(var n of rn(e))Zc.call(e,n)&&an(t,n,e[n]);return t};function eu(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:a=se,storage:o,storageKey:s="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:l,emitAuto:d}=t,h=Yc({auto:"",light:"light",dark:"dark"},t.modes||{}),b=Gn({window:a}),v=M(()=>b.value?"dark":"light"),y=l||(s==null?L(r):Kc(s,r,o,{window:a,listenToStorageChanges:i})),w=M({get(){return y.value==="auto"&&!d?v.value:y.value},set(P){y.value=P}}),f=Wn("updateHTMLAttrs",(P,O,N)=>{const Q=a==null?void 0:a.document.querySelector(P);if(Q)if(O==="class"){const X=N.split(/\s/g);Object.values(h).flatMap(U=>(U||"").split(/\s/g)).filter(Boolean).forEach(U=>{X.includes(U)?Q.classList.add(U):Q.classList.remove(U)})}else Q.setAttribute(O,N)});function g(P){var O;const N=P==="auto"?v.value:P;f(e,n,(O=h[N])!=null?O:N)}function x(P){t.onChanged?t.onChanged(P,g):g(P)}return G(w,x,{flush:"post",immediate:!0}),d&&G(v,()=>x(w.value),{flush:"post"}),et(()=>x(w.value)),w}var tu=Object.defineProperty,nu=Object.defineProperties,ru=Object.getOwnPropertyDescriptors,on=Object.getOwnPropertySymbols,au=Object.prototype.hasOwnProperty,ou=Object.prototype.propertyIsEnumerable,sn=(t,e,n)=>e in t?tu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,su=(t,e)=>{for(var n in e||(e={}))au.call(e,n)&&sn(t,n,e[n]);if(on)for(var n of on(e))ou.call(e,n)&&sn(t,n,e[n]);return t},iu=(t,e)=>nu(t,ru(e));function m0(t={}){const{valueDark:e="dark",valueLight:n="",window:r=se}=t,a=eu(iu(su({},t),{onChanged:(i,l)=>{var d;t.onChanged?(d=t.onChanged)==null||d.call(t,i==="dark"):l(i)},modes:{dark:e,light:n}})),o=Gn({window:r});return M({get(){return a.value==="dark"},set(i){i===o.value?a.value="auto":a.value=i?"dark":"light"}})}var ln=Object.getOwnPropertySymbols,lu=Object.prototype.hasOwnProperty,cu=Object.prototype.propertyIsEnumerable,uu=(t,e)=>{var n={};for(var r in t)lu.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&ln)for(var r of ln(t))e.indexOf(r)<0&&cu.call(t,r)&&(n[r]=t[r]);return n};function du(t,e,n={}){const r=n,{window:a=se}=r,o=uu(r,["window"]);let s;const i=qn(()=>a&&"ResizeObserver"in a),l=()=>{s&&(s.disconnect(),s=void 0)},d=G(()=>de(t),b=>{l(),i.value&&a&&b&&(s=new ResizeObserver(e),s.observe(b,o))},{immediate:!0,flush:"post"}),h=()=>{l(),d()};return Ye(h),{isSupported:i,stop:h}}function h0(t,e={}){const{reset:n=!0,windowResize:r=!0,windowScroll:a=!0,immediate:o=!0}=e,s=L(0),i=L(0),l=L(0),d=L(0),h=L(0),b=L(0),v=L(0),y=L(0);function w(){const f=de(t);if(!f){n&&(s.value=0,i.value=0,l.value=0,d.value=0,h.value=0,b.value=0,v.value=0,y.value=0);return}const g=f.getBoundingClientRect();s.value=g.height,i.value=g.bottom,l.value=g.left,d.value=g.right,h.value=g.top,b.value=g.width,v.value=g.x,y.value=g.y}return du(t,w),G(()=>de(t),f=>!f&&w()),a&&Z("scroll",w,{capture:!0,passive:!0}),r&&Z("resize",w,{passive:!0}),et(()=>{o&&w()}),{height:s,bottom:i,left:l,right:d,top:h,width:b,x:v,y,update:w}}function f0(t,{window:e=se,scrollTarget:n}={}){const r=L(!1),a=()=>{if(!e)return;const o=e.document,s=de(t);if(!s)r.value=!1;else{const i=s.getBoundingClientRect();r.value=i.top<=(e.innerHeight||o.documentElement.clientHeight)&&i.left<=(e.innerWidth||o.documentElement.clientWidth)&&i.bottom>=0&&i.right>=0}};return G(()=>de(t),()=>a(),{immediate:!0,flush:"post"}),e&&Z(n||e,"scroll",a,{capture:!1,passive:!0}),r}const pu={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function mu(t={}){const{reactive:e=!1,target:n=se,aliasMap:r=pu,passive:a=!0,onEventFired:o=Oe}=t,s=$e(new Set),i={toJSON(){return{}},current:s},l=e?$e(i):i,d=new Set,h=new Set;function b(f,g){f in l&&(e?l[f]=g:l[f].value=g)}function v(){s.clear();for(const f of h)b(f,!1)}function y(f,g){var x,P;const O=(x=f.key)==null?void 0:x.toLowerCase(),Q=[(P=f.code)==null?void 0:P.toLowerCase(),O].filter(Boolean);O&&(g?s.add(O):s.delete(O));for(const X of Q)h.add(X),b(X,g);O==="meta"&&!g?(d.forEach(X=>{s.delete(X),b(X,!1)}),d.clear()):typeof f.getModifierState=="function"&&f.getModifierState("Meta")&&g&&[...s,...Q].forEach(X=>d.add(X))}Z(n,"keydown",f=>(y(f,!0),o(f)),{passive:a}),Z(n,"keyup",f=>(y(f,!1),o(f)),{passive:a}),Z("blur",v,{passive:!0}),Z("focus",v,{passive:!0});const w=new Proxy(l,{get(f,g,x){if(typeof g!="string")return Reflect.get(f,g,x);if(g=g.toLowerCase(),g in r&&(g=r[g]),!(g in l))if(/[+_-]/.test(g)){const O=g.split(/[+_-]/g).map(N=>N.trim());l[g]=M(()=>O.every(N=>u(w[N])))}else l[g]=L(!1);const P=Reflect.get(f,g,x);return e?u(P):P}});return w}var cn;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(cn||(cn={}));var hu=Object.defineProperty,un=Object.getOwnPropertySymbols,fu=Object.prototype.hasOwnProperty,vu=Object.prototype.propertyIsEnumerable,dn=(t,e,n)=>e in t?hu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gu=(t,e)=>{for(var n in e||(e={}))fu.call(e,n)&&dn(t,n,e[n]);if(un)for(var n of un(e))vu.call(e,n)&&dn(t,n,e[n]);return t};const _u={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};gu({linear:Ac},_u);function v0(t="history",e={}){const{initialValue:n={},removeNullishValues:r=!0,removeFalsyValues:a=!1,write:o=!0,window:s=se}=e;if(!s)return $e(n);const i=$e({});function l(){if(t==="history")return s.location.search||"";if(t==="hash"){const x=s.location.hash||"",P=x.indexOf("?");return P>0?x.slice(P):""}else return(s.location.hash||"").replace(/^#/,"")}function d(x){const P=x.toString();if(t==="history")return`${P?`?${P}`:""}${s.location.hash||""}`;if(t==="hash-params")return`${s.location.search||""}${P?`#${P}`:""}`;const O=s.location.hash||"#",N=O.indexOf("?");return N>0?`${O.slice(0,N)}${P?`?${P}`:""}`:`${O}${P?`?${P}`:""}`}function h(){return new URLSearchParams(l())}function b(x){const P=new Set(Object.keys(i));for(const O of x.keys()){const N=x.getAll(O);i[O]=N.length>1?N:x.get(O)||"",P.delete(O)}Array.from(P).forEach(O=>delete i[O])}const{pause:v,resume:y}=Un(i,()=>{const x=new URLSearchParams("");Object.keys(i).forEach(P=>{const O=i[P];Array.isArray(O)?O.forEach(N=>x.append(P,N)):r&&O==null||a&&!O?x.delete(P):x.set(P,O)}),w(x)},{deep:!0});function w(x,P){v(),P&&b(x),s.history.replaceState(s.history.state,s.document.title,s.location.pathname+d(x)),y()}function f(){o&&w(h(),!0)}Z(s,"popstate",f,!1),t!=="history"&&Z(s,"hashchange",f,!1);const g=h();return g.keys().next().value?b(g):Object.assign(i,n),i}function bu(t={}){const{window:e=se,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:a=!0,includeScrollbar:o=!0}=t,s=L(n),i=L(r),l=()=>{e&&(o?(s.value=e.innerWidth,i.value=e.innerHeight):(s.value=e.document.documentElement.clientWidth,i.value=e.document.documentElement.clientHeight))};return l(),et(l),Z("resize",l,{passive:!0}),a&&Z("orientationchange",l,{passive:!0}),{width:s,height:i}}const pn=L([{route:"/blog/nginx/",meta:{description:`# Nginx\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"Nginx",date:"2023-12-26 09:08:33"}},{route:"/blog/nginx/正向代理与反向代理.html",meta:{description:"",cover:"/blog/nginx/images/反向代理.png",recommend:!1,tag:["Nginx","反向代理"],date:"2023-11-29 21:00:00",title:"正向代理与反向代理"}},{route:"/blog/redis/",meta:{description:`# Redis\r
\r
## 零基础\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"Redis",date:"2024-01-04 21:50:25"}},{route:"/blog/redis/Redis之key操作命令.html",meta:{description:"",cover:"/blog/redis/images/常用key.png",recommend:!1,tag:["Redis"],date:"2023-12-31 10:30:00",title:"Redis之key操作命令"}},{route:"/blog/redis/Redis入门概述.html",meta:{description:`# Redis入门概述\r
\r
## 1 是什么\r
\r
英文释义：<font color=red>RE</font>mote <font color=red>DI</font>ctionary <font color=red>S</font>erver（远程字典服务器）\r
\r
官网解释：\r
\r
![redis官网简介](.\\images\\redis官网简介.png)\r
\r
Redis 是一种开源（BSD 许可）的内存数据结构存储，用作数据库、缓存、消息代理和流式处理引擎。Redis 提供数据结构，例如字符串、哈希、列表、集、带有范围查询的排序集、位图、超日志、地理空间索引和流。Redis 具有内置复制、Lua 脚本、LRU 逐出、事务和不同级别的磁盘持久性，并通过 Redis Sentinel 和 Redis 集群的自动分区提供高可用性。\r
\r
github解释：\r
\r
![redis官网简介](.\\images\\github简介.png)\r
\r
Redis 是保留在磁盘上的内存数据库。数据模型是键值，但支持许多不同类型的值：字符串、列表、集、排序集、哈希、流、HyperLogLogs、位图。\r
\r
作者github：https://github.com/antirez\r
\r
作者博客：http://www.antirez.com/\r
\r
## 2 能干嘛\r
\r
为什么要引入 Redis 这门技术。\r
\r
### 主流功能与应用\r
\r
1. 分布式缓存，帮 MySQL 减负\r
\r
   主流的系统都遵循28原则，80%查询和20%写入。MySQL 主要是做持久化存储，保证一致性，存储在硬盘。为了分担 MySQL 的查询压力，读写分离，引入了 Redis 。\r
\r
   ![redis和mysql](.\\images\\redis和mysql.png)\r
\r
   Redis 与 MySQL 的关系：\r
\r
   - Redis 是 key-value 数据库（NoSQL一种），MySQL 是关系数据库\r
   - Redis 数据操作主要在内存，而 MySQL 主要存储在磁盘\r
   - Redis 在某一些场景使用中要明显优于 MySQL ，比如计数器、排行榜等方面\r
   - Redis 通常用于一些特定场景，需要与 MySQL 一起配合使用\r
   - 两者并不是相互替换和竞争关系，而是共用和配合使用\r
\r
2. 内存存储和持久化（RDB + AOF）\r
\r
   Redis 支持异步将内存中的数据持久化到硬盘，同时不影响继续服务。\r
\r
3. 高可用架构选配\r
\r
   单机、主从、哨兵、集群\r
\r
4. 缓存穿透、击穿、雪崩\r
\r
5. 分布式锁\r
\r
6. 队列\r
\r
   Reids 提供 list 和 set 操作，这使得 Redis 能作为一个很好的消息队列平台来使用。\r
\r
   我们常通过 Reids 的队列功能做购买限制。比如到节假日或者推广期间，进行一些活动，对用户购买行为进行限制，限制今天只能购买几次商品或者一段时间内只能购买一次。也比较适合适用。\r
\r
7. 排行榜、点赞\r
\r
   在互联网应用中，有各种各样的排行榜，如电商网站的月度销量排行榜、社交APP的礼物排行榜、小程序的投票排行榜等等。Redis 提供的 zset 数据类型能够快速实现这些复杂的排行榜。\r
\r
   比如小说网站对小说进行排名，根据排名，将排名靠前的小说推荐给用户。\r
\r
### 总体功能概述\r
\r
![redis总体功能](.\\images\\redis总体功能.png)\r
\r
### 优势\r
\r
- 性能极高，Redis 能读的速度是110000次/秒，写的速度是81000次/秒\r
- Redis 数据类型丰富，不仅仅支持简单的 key-value 类型的数据，同时还提供 list，set，Zset，hash 等数据结构的存储\r
- Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用\r
- Redis支持数据的备份，即 master-slave 模式的数据备份\r
\r
### 小总结\r
\r
![redis小总结](.\\images\\redis小总结.png)\r
\r
## 3 去哪下\r
\r
### 官网地址\r
\r
英文：https://redis.io\r
\r
中文：\r
\r
- http://www.redis.cn\r
- https://www.redis.com.cn/documentation.html\r
\r
### 下载安装\r
\r
Redis 下载地址：https://www.redis.io/download\r
\r
### 其他文档资料\r
\r
Redis 源码地址：https://github.com/redis/redis\r
\r
Redis 在线测试：https://try.redis.io\r
\r
Redis 命令参考：http://doc.redisfans.com\r
\r
\r
\r
## 4 Redis 版本迭代推演介绍\r
\r
里程碑的重要版本：\r
\r
![redis版本演进](.\\images\\redis版本演进.png)\r
\r
版本命名规则：\r
\r
版本号第二位如果是奇数，则为非稳定版本 如2.7、2.9、3.1；版本号第二位如果是偶数，则为稳定版本 如2.6、2.8、3.0、3.2，当前奇数版本就是下一个稳定版本的开发版本，如2.9版本是3.0版本的开发版本。\r
\r
历史发布版本的源码：https://download.redis.io/releases/\r
\r
## 5 Redis7 新特性概述\r
\r
新特性概述：https://github.com/redis/redis/releases\r
\r
部分新特性总览：\r
\r
2022 年 4 月正式发布的 Redis 7.0 是目前 Redis 历史版本中变化最大的版本。首先，它有超过 50 个以上新增命令；其次，它有大量核心特性的新增和改进。\r
\r
![redis7核心特性概览](.\\images\\redis7核心特性概览.png)\r
\r
### Redis Functions\r
\r
![RedisFunctions](.\\images\\RedisFunctions.png)\r
\r
### Client-eviction\r
\r
![Client-eviction](.\\images\\Client-eviction.png)\r
\r
### Multi-part AOF\r
\r
![Multi-part_AOF](.\\images\\Multi-part_AOF.png)\r
\r
### ACL v2\r
\r
![ACL_v2](.\\images\\ACL_v2.png)\r
\r
### 新增命令\r
\r
![新增命令](.\\images\\新增命令.png)\r
\r
### listpack\r
\r
listpack 是用来替代 ziplist 的新数据结构，在 7.0 版本已经没有 ziplist 的配置了（6.0版本仅部分数据类型作为过渡阶段在使用）\r
\r
\r
\r
### 总体概述\r
\r
大体和之前的redis版本保持一致和稳定，主要是自身底层性能和资源利用率上的优化和提高。\r
\r
| 多AOF文件支持                     | 7.0 版本中一个比较大的变化就是 aof 文件由一个变成了多个，主要分为两种类型：基本文件(base files)、增量文件(incr files)，请注意这些文件名称是复数形式说明每一类文件不仅仅只有一个。在此之外还引入了一个清单文件(manifest) 用于跟踪文件以及文件的创建和应用顺序（恢复） |\r
| `,cover:"/blog/redis/images/redis版本演进.png",recommend:!1,tag:["Redis"],date:"2023-12-29 16:30:00",title:"Redis入门概述"}},{route:"/blog/redis/Redis安装配置.html",meta:{description:"",cover:"/blog/redis/images/6379端口来源.png",recommend:!1,tag:["Redis"],date:"2023-12-30 23:30:00",title:"Redis安装配置"}},{route:"/blog/redis/Redis数据类型之string.html",meta:{description:"",cover:"/blog/redis/images/常用key.png",recommend:!1,tag:["Redis"],date:"2023-12-31 11:30:00",top:1,title:"Redis数据类型之string"}},{route:"/blog/redis/Redis数据类型概述.html",meta:{description:"",cover:"/blog/redis/images/redis数据类型.png",recommend:!1,tag:["Redis"],date:"2023-12-31 00:30:00",title:"Redis数据类型概述"}},{route:"/blog/swagger/",meta:{description:`# Swagger\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"Swagger",date:"2024-01-04 21:50:25"}},{route:"/blog/swagger/Swagger和Springboot的整合.html",meta:{description:`# Swagger和Springboot的整合\r
\r
## 整合出现问题的原因\r
\r
> SpringBoot 处理映射匹配的默认策略发生变化\r
\r
请求路径与 Spring MVC 处理映射匹配的默认策略已从 \`AntPathMatcher\` 更改为 \`PathPatternParser\`。\r
\r
- Springboot 2.6.0之前\r
\r
  \`\`\`java\r
  public static class Pathmatch {\r
  	private MatchingStrategy matchingStrategy = MatchingStrategy.ANT_PATH_MATCHER;\r
  }\r
  \`\`\`\r
\r
- Springboot 2.6.0之后\r
\r
  \`\`\`java\r
  public static class Pathmatch {\r
      private MatchingStrategy matchingStrategy = MatchingStrategy.PATH_PATTERN_PARSER;\r
  }\r
  \`\`\`\r
\r
  如果升级Springboot 到2.6.0之后，可以通过设置 \`spring.mvc.pathmatch.matching-strategy\` 为 \`ant-path-matcher\` 来兼容Swagger2。\r
\r
> Swagger版本升级\r
\r
| 版本      | swagger-ui访问地址                          |\r
| `,cover:"/blog/swagger/images/swagger-ui.png",recommend:!1,tag:["Swagger"],date:"2024-01-04 21:50:00",top:1,title:"Swagger和Springboot的整合"}},{route:"/blog/swagger/Swagger常用注解.html",meta:{description:"",cover:"/blog/swagger/images/swagger-ui.png",recommend:!1,tag:["Swagger"],date:"2024-01-04 21:50:00",top:1,title:"Swagger常用注解"}},{route:"/blog/database/mysql/",meta:{description:`# MySQL\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"MySQL",date:"2023-12-26 09:08:33"}},{route:"/blog/database/mysql/MySQL事务机制及原理剖析.html",meta:{description:"",cover:"/blog/database/mysql/images/脏读.png",recommend:!1,tag:["MySQL","事务"],date:"2023-11-28 21:00:00",title:"MySQL事务机制及原理剖析"}},{route:"/blog/database/mysql/MySQL基础.html",meta:{description:"",cover:"/blog/database/mysql/images/mysql基础.png",recommend:!1,tag:["MySQL"],date:"2023-11-25 21:00:00",title:"MySQL基础"}},{route:"/blog/database/mysql/MySQL幻读被彻底解决了吗.html",meta:{description:`# MySQL幻读被彻底解决了吗？\r
之前我也提到过，MySQL InnoDB 引擎的默认隔离级别虽然是「可重复读」，但是它很大程度上避免幻读现象（并不是完全解决了），解决的方案有两种：\r
\r
- 针对**快照读**（普通 \`select\` 语句），**是通过 \`MVCC\` 方式解决了幻读**，因为可重复读隔离级别下，事务执行过程中看到的数据，一直跟这个事务启动时看到的数据是一致的，即使中途有其他事务插入了一条数据，是查询不出来这条数据的，所以就很好了避免幻读问题。\r
\r
- 针对**当前读**（\`select ... for update\` 等语句），是**通过 \`next-key lock\`（记录锁+间隙锁）方式解决了幻读**，因为当执行 \`select ... for update\` 语句的时候，会加上 \`next-key lock\`，如果有其他事务在 \`next-key lock\` 锁范围内插入了一条记录，那么这个插入语句就会被阻塞，无法成功插入，所以就很好了避免幻读问题。\r
\r
这次，我会举例两个实验场景来说明 MySQL InnoDB 引擎的可重复读隔离级别发生幻读的问题。\r
\r
好了，发车！\r
\r
## 什么是幻读？\r
\r
首先来看看 MySQL 文档是怎么定义幻读（Phantom Read）的：\r
\r
*The so-called phantom problem occurs within a transaction when the same query produces different sets of rows at different times. For example, if a SELECT is executed twice, but returns a row the second time that was not returned the first time, the row is a “phantom” row.*\r
\r
**翻译**：当同一个查询在不同的时间产生不同的结果集时，事务中就会出现所谓的幻象问题。例如，如果 SELECT 执行了两次，但第二次返回了第一次没有返回的行，则该行是“幻像”行。\r
\r
举个例子：假设一个事务在 T1 时刻和 T2 时刻分别执行了下面查询语句，途中没有执行其他任何语句：\r
\r
\`\`\`sql\r
SELECT * FROM t_test WHERE id > 100;\r
\`\`\`\r
\r
**只要 T1 和 T2 时刻执行产生的结果集是不相同的，那就发生了幻读的问题**，比如：\r
\r
- T1 时间执行的结果是有 5 条行记录，而 T2 时间执行的结果是有 6 条行记录，那就发生了幻读的问题。\r
- T1 时间执行的结果是有 5 条行记录，而 T2 时间执行的结果是有 4 条行记录，也是发生了幻读的问题。\r
\r
## 隔离级别\r
\r
当多个事务并发执行时可能会遇到「脏读、不可重复读、幻读」的现象，这些现象会对事务的一致性产生不同程序的影响。\r
\r
- 脏读：读到其他事务未提交的数据；\r
- 不可重复读：前后读取的数据不一致；\r
- 幻读：前后读取的记录数量不一致。\r
\r
这三个现象的严重性排序如下：\r
\r
![并发事务导致的现象](./images/并发事务导致的现象.png)\r
\r
**SQL 标准**提出了四种隔离级别来规避这些现象，隔离级别越高，性能效率就越低，这四个隔离级别如下：\r
\r
- **读未提交（read uncommitted）**，指一个事务还没提交时，它做的变更就能被其他事务看到；\r
- **读提交（read committed）**，指一个事务提交之后，它做的变更才能被其他事务看到；\r
- **可重复读（repeatable read）**，指一个事务执行过程中看到的数据，一直跟这个事务启动时看到的数据是一致的，**MySQL InnoDB 引擎的默认隔离级别**；\r
- **串行化（serializable ）**；会对记录加上读写锁，在多个事务对这条记录进行读写操作时，如果发生了读写冲突的时候，后访问的事务必须等前一个事务执行完成，才能继续执行；\r
\r
针对不同的隔离级别，并发事务时可能发生的现象也会不同。\r
\r
![不同隔离级别可能发生的现象](./images/不同隔离级别可能发生的现象.png)\r
\r
所以，要解决脏读现象，就要升级到「读提交」以上的隔离级别；要解决不可重复读现象，就要升级到「可重复读」的隔离级别，要解决幻读现象不建议将隔离级别升级到「串行化」。\r
\r
不同的数据库厂商对 SQL 标准中规定的 4 种隔离级别的支持不一样，有的数据库只实现了其中几种隔离级别，**我们讨论的 MySQL 虽然支持 4 种隔离级别，但是与SQL 标准中规定的各级隔离级别允许发生的现象却有些出入**。\r
\r
MySQL 在「可重复读」隔离级别下，可以很大程度上避免幻读现象的发生（注意是很大程度避免，并不是彻底避免），所以 MySQL 并不会使用「串行化」隔离级别来避免幻读现象的发生，因为使用「串行化」隔离级别会影响性能。\r
\r
## 快照读是如何避免幻读的？ \r
\r
可重复读隔离级别是由 MVCC（多版本并发控制）实现的，实现的方式是启动事务后，在执行第一个查询语句后，会创建一个 Read View，**后续的查询语句利用这个 Read View，通过这个  Read View 就可以在 undo log 版本链找到事务开始时的数据，所以事务过程中每次查询的数据都是一样的**，即使中途有其他事务插入了新纪录，是查询不出来这条数据的，所以就很好了避免幻读问题。\r
\r
做个实验，数据库表 t_stu 如下，其中 id 为主键。\r
\r
![数据表t_stu](./images/数据表t_stu.png)\r
\r
然后在可重复读隔离级别下，有两个事务的执行顺序如下：\r
\r
![事务执行顺序](./images/事务执行顺序.png)\r
\r
从这个实验结果可以看到，即使事务 B 中途插入了一条记录，事务 A 前后两次查询的结果集都是一样的，并没有出现所谓的幻读现象。\r
\r
## **当前读是如何避免幻读的？** \r
\r
MySQL 里除了普通查询是快照读，其他都是**当前读**，比如 update、insert、delete，这些语句执行前都会查询最新版本的数据，然后再做进一步的操作。\r
\r
这很好理解，假设你要 update 一个记录，另一个事务已经 delete 这条记录并且提交事务了，这样不是会产生冲突吗，所以 update 的时候肯定要知道最新的数据。\r
\r
另外，\`select ... for update\` 这种查询语句是当前读，每次执行的时候都是读取最新的数据。\r
\r
接下来，我们假设\`select ... for update\`当前读是不会加锁的（实际上是会加锁的），在做一遍实验。\r
\r
![select_for_update不加锁](./images/select_for_update不加锁.png)\r
\r
这时候，事务 B 插入的记录，就会被事务 A 的第二条查询语句查询到（因为是当前读），这样就会出现前后两次查询的结果集合不一样，这就出现了幻读。\r
\r
所以，**Innodb 引擎为了解决「可重复读」隔离级别使用「当前读」而造成的幻读问题，就引出了间隙锁**。（额外提一句，读提交隔离级别，是没有间隙锁的，只有记录锁）\r
\r
假设，表中有一个范围 id 为（3，5）间隙锁，那么其他事务就无法插入 id = 4 这条记录了，这样就有效的防止幻读现象的发生。\r
\r
![间隙锁](./images/间隙锁.png)\r
\r
举个具体例子，场景如下：\r
\r
![间隙锁阻塞其他事务插入](./images/间隙锁阻塞其他事务插入.png)\r
\r
事务 A 执行了这条当前读语句后，就在对表中的记录加上 id 范围为 (2, +∞] 的 \`next-key lock\`（\`next-key lock\` 是间隙锁+记录锁的组合）。\r
\r
然后，事务 B 在执行插入语句的时候，判断到插入的位置被事务 A 加了  \`next-key lock\`，于是事物 B 会生成一个插入意向锁，同时进入等待状态，直到事务 A 提交了事务。这就避免了由于事务 B 插入新记录而导致事务 A 发生幻读的现象。\r
\r
## 幻读被彻底解决了吗？ \r
\r
**可重复读隔离级别下虽然很大程度上避免了幻读，但是还是没有能完全解决幻读**。\r
\r
我举例两个可重复读隔离级别发生幻读现象的场景。\r
\r
### 第一个发生幻读现象的场景\r
\r
还是以这张表作为例子：\r
\r
![数据表t_stu](./images/数据表t_stu.png)\r
\r
事务 A 执行查询 id = 5 的记录，此时表中是没有该记录的，所以查询不出来。\r
\r
\`\`\`sql\r
# 事务 A\r
mysql> begin;\r
Query OK, 0 rows affected (0.00 sec)\r
\r
mysql> select * from t_stu where id = 5;\r
Empty set (0.01 sec)\r
\`\`\`\r
\r
然后事务 B 插入一条 id = 5 的记录，并且提交了事务。\r
\r
\`\`\`sql\r
# 事务 B\r
mysql> begin;\r
Query OK, 0 rows affected (0.00 sec)\r
\r
mysql> insert into t_stu values(5, '小美', 18);\r
Query OK, 1 row affected (0.00 sec)\r
\r
mysql> commit;\r
Query OK, 0 rows affected (0.00 sec)\r
\`\`\`\r
\r
此时，**事务 A  更新 id = 5 这条记录。对没错，事务 A 看不到 id = 5 这条记录，但是他去更新了这条记录，这场景确实很违和，然后再次查询 id = 5 的记录，事务 A 就能看到事务 B 插入的纪录了，幻读就是发生在这种违和的场景**。\r
\r
\`\`\`javascript\r
# 事务 A\r
mysql> update t_stu set name = '小林coding' where id = 5;\r
Query OK, 1 row affected (0.01 sec)\r
Rows matched: 1  Changed: 1  Warnings: 0\r
\r
mysql> select * from t_stu where id = 5;\r
+`,cover:"/blog/database/mysql/images/隔离级别和现象.png",recommend:!1,tag:["MySQL","幻读"],date:"2023-11-27 21:00:00",title:"MySQL幻读被彻底解决了吗？"}},{route:"/blog/database/mysql/MySQL数据类型.html",meta:{description:`# MySQL数据类型\r
\r
MySQL的数据类型简单分为三类：\r
\r
![mysql数据类型](./images/mysql数据类型.png)\r
\r
## 整数类型的UNSIGNED 属性有什么用？\r
\r
MySQL 中的整数类型可以使用可选的 \`UNSIGNED \`属性来表示不允许负值的无符号整数。使用 ~属性可以将正整数的上限提高一倍，因为它不需要存储负数值。\r
\r
例如， \`TINYINT UNSIGNED \` 类型的取值范围是 0 ~ 255，而普通的 \`TINY\` 类型的值范围是 -128 ~ 127。\`INT UNSIGNED \` 类型的取值范围是 0 ~ 4,294,967,295，而普通的 \`INT\` 类型的值范围是 2,147,483,648 ~ 2,147,483,647。\r
\r
::: tip\r
\r
对于从 0 开始递增的 ID 列，使用\`UNSIGNED \`属性可以非常适合，因为不允许负值并且可以拥有更大的上限范围，提供了更多的 ID 值可用。\r
\r
:::\r
\r
## CHAR和VARCHAR的区别是什么？\r
\r
\`CHAR\` 和 \`VARCHAR\` 是最常用到的字符串类型，两者的主要区别在于：**\`CHAR\`是定长字符串，\`VARCHAR\`是变长字符串。**\r
\r
- 长度：\r
\r
  \`CHAR\`在存储时会在右边填充空格以达到指定的长度，检索时会去掉空格；\`VARCHAR\`在存储时需要使用 1 或 2 个额外字节记录字符串的长度，检索时不需要处理。\r
\r
- 适用场景：\r
\r
  CHAR更适合存储长度较短或者长度都差不多的字符串，例如 Bcrypt 算法、MD5 算法加密后的密码、身份证号码。VARCHAR类型适合存储长度不确定或者差异较大的字符串，例如用户昵称、文章标题等。\r
\r
- 最大值：\r
\r
  CHAR(M) 和 VARCHAR(M) 的 M 都代表能够保存的字符数的最大值，无论是字母、数字还是中文，每个都只占用一个字符。\r
\r
## VARCHAR(100)和 VARCHAR(10)的区别是什么？\r
\r
先举个例子：如果要存储\`'hello12345'\`这个字符串，使用\`VARCHAR(10)\`和\`VARCHAR(100)\`存储，占用磁盘空间是一样的么？\r
\r
答案是：占用磁盘的存储空间是一样的。\r
\r
**既然存储时磁盘占用空间一样，还有什么其他的区别吗？**\r
\r
虽然使用\`VARCHAR(100)\`和\`VARCHAR(10)\`存储\`'hello12345'\`字符串占用的磁盘空间一样，但是消耗的内存不一样，更长的列消耗的内存会更多。因为MySQL通常会分配固定大小的内存块来保存内部值。尤其是使用临时表进行排序会操作时，会消耗更多的内存。在使用磁盘进行排序时，也是一样。\r
\r
所以此时\`VARCHAR(100)\` ***会消耗更多的内存。***\r
\r
**VARCHAR(10)和VARCHAR(100)的优劣势是什么？**\r
\r
因为涉及到文件排序或者基于磁盘的临时表时，更长的列会消耗更多的内存，所以在使用使用时，我们不能太过浪费内存空间，还是需要评估实际使用的长度来设置字符的长度。***推荐冗余10%的长度***（因业务而异）。\r
\r
所使用VARCHAR(10)会更加***节约内存空间***，但是实际业务中字符长度一旦超过10就需要更改表结构，在表数据量特别大时，***不易拓展***。\r
\r
而这时使用更长的列：VARCHAR(100)无需更改表结构，***业务拓展性更好***。\r
\r
\r
\r
## DECIMAL 和 FLOAT/DOUBLE 的区别是什么？\r
\r
DECIMAL 和 FLOAT 的区别是：**DECIMAL 是定点数，FLOAT/DOUBLE 是浮点数。DECIMAL 可以存储精确的小数值，FLOAT/DOUBLE 只能存储近似的小数值。**\r
\r
DECIMAL 用于存储具有精度要求的小数，例如与货币相关的数据，可以避免浮点数带来的精度损失。在 Java 中，MySQL 的 DECIMAL 类型对应的是 Java 类 \`java.math.BigDecimal\`\r
\r
## 为什么不推荐使用 TEXT 和 BLOB？\r
\r
TEXT 类型类似于 CHAR（0-255 字节）和 VARCHAR（0-65,535 字节），但可以存储更长的字符串，即长文本数据，例如博客内容。\r
\r
| 类型       | 可存储大小           | 用途           |\r
| `,cover:"/blog/database/mysql/images/mysql数据类型.png",recommend:!1,tag:["MySQL"],date:"2023-11-26 21:00:00",title:"MySQL数据类型"}},{route:"/blog/database/mysql/Windows安装MySQL.html",meta:{description:"",cover:"/blog/database/mysql/images/mysql.png",recommend:!1,tag:["MySQL"],date:"2023-11-30 16:58:00",title:"Windows安装MySQL"}},{route:"/blog/devops/docker/Docker安装Nginx.html",meta:{description:"通过Docker容器快速部署Nginx服务器",recommend:!1,cover:"/blog/docker/images/nginx.jpeg",tag:["Docker","Nginx"],date:"2023-11-27 21:00:00",title:"Docker安装Nginx"}},{route:"/blog/devops/docker/",meta:{description:`# Docker\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"Docker",date:"2023-12-26 09:08:33"}},{route:"/blog/java/javase/",meta:{description:`# JavaSE\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"JavaSE",date:"2024-01-04 21:50:25"}},{route:"/blog/java/javase/集合框架.html",meta:{description:`# 集合框架

## 集合框架概述

### 1 数组的特点与弊端

一方面，面向对象语言对事物的体现都是以对象的形式，为了方便对多个对象的操作，就要对对象进行存储。

另一方面，使用数组存储对象方面具有\`一些弊端\`，而Java 集合就像一种容器，可以\`动态地\`把多个对象的引用放入容器中。

数组在内存存储方面的\`特点\`：
- 数组初始化以后，长度就确定了。
- 数组中的添加的元素是依次紧密排列的，有序的，可以重复的。
- 数组声明的类型，就决定了进行元素初始化时的类型。不是此类型的变量，就不能添加。
- 可以存储基本数据类型值，也可以存储引用数据类型的变量

数组在存储数据方面的\`弊端\`：
- 数组初始化以后，长度就不可变了，不便于扩展
- 数组中提供的属性和方法少，不便于进行添加、删除、插入、获取元素个数等操作，且效率不高。
- 数组存储数据的特点单一，只能存储有序的、可以重复的数据

Java 集合框架中的类可以用于存储多个\`对象\`，还可用于保存具有\`映射关系\`的关联数组。

### 2 Java集合框架体系

JDK 提供的集合 API 位于 java.util 包内

Java 集合可分为 Collection 和 Map 两大体系：

Collection接口：用于存储一个一个的数据，也称\`单列数据集合\`。
- List子接口：用来存储有序的、可以重复的数据（主要用来替换数组，"动态"数组）
  - 实现类：ArrayList（主要实现类）、LinkedList、Vector
- Set子接口：用来存储无序的、不可重复的数据（类似于高中讲的"集合"）
  - 实现类：HashSet（主要实现类）、LinkedHashSet、TreeSet

Map接口：用于存储具有映射关系“key-value对”的集合，即一对一对的数据，也称\`双列数据集合\`。(类似于高中的函数、映射。
- HashMap（主要实现类）、LinkedHashMap、TreeMap、Hashtable、Properties



集合框架全图

![集合框架全图.png](.\\images\\集合框架全图.png)

Collection接口继承树

![image-20220407203244029](.\\images\\image-20220407203244029.png)

Map接口继承树

![image-20220407203412665](.\\images\\image-20220407203412665.png)

### 3 集合的使用场景

![第12章_集合的使用场景](.\\images\\第12章_集合的使用场景.png)

## Collection接口及方法

JDK不提供此接口的任何直接实现，而是提供更具体的子接口（如：Set和List）去实现。

Collection 接口是 List和Set接口的父接口，该接口里定义的方法既可用于操作 Set 集合，也可用于操作 List 集合。方法如下：

### 1 添加

（1）add(E obj)：添加元素对象到当前集合中
（2）addAll(Collection other)：添加other集合中的所有元素对象到当前集合中

> 注意：add和addAll的区别，coll.addAll(other)与coll.add(other)
>

![](.\\images\\1563548078274.png)

### 2 判断

（3）int size()：获取当前集合中实际存储的元素个数
（4）boolean isEmpty()：判断当前集合是否为空集合
（5）boolean contains(Object obj)：判断当前集合中是否存在一个与obj对象equals返回true的元素
（6）boolean containsAll(Collection coll)：判断coll集合中的元素是否在当前集合中都存在。即coll集合是否是当前集合的“子集”
（7）boolean equals(Object obj)：判断当前集合与obj是否相等

### 3 删除

（8）void clear()：清空集合元素
（9） boolean remove(Object obj) ：从当前集合中删除第一个找到的与obj对象equals返回true的元素。
（10）boolean removeAll(Collection coll)：从当前集合中删除所有与coll集合中相同的元素。
（11）boolean retainAll(Collection coll)：从当前集合中删除两个集合中不同的元素，使得当前集合仅保留与coll集合中的元素相同的元素，即当前集合中仅保留两个集合的交集。

### 4 其它

（12）Object[] toArray()：返回包含当前集合中所有元素的数组
（13）hashCode()：获取集合对象的哈希值
（14）iterator()：返回迭代器对象，用于集合遍历

## Iterator迭代器接口

### 1 Iterator接口

在程序开发中，经常需要遍历集合中的所有元素。针对这种需求，JDK专门提供了一个接口\`java.util.Iterator\`。\`Iterator\`接口也是Java集合中的一员，但它与\`Collection\`、\`Map\`接口有所不同。
- Collection接口与Map接口主要用于\`存储\`元素
- \`Iterator\`，被称为迭代器接口，本身并不提供存储对象的能力，主要用于\`遍历\`Collection中的元素

Collection接口继承了java.lang.Iterable接口，该接口有一个iterator()方法，那么所有实现了Collection接口的集合类都有一个iterator()方法，用以返回一个实现了Iterator接口的对象。
- \`public Iterator iterator()\`: 获取集合对应的迭代器，用来遍历集合中的元素的。
- 集合对象每次调用iterator()方法都得到一个全新的迭代器对象，默认游标都在集合的第一个元素之前。

Iterator接口的常用方法如下：
- \`public E next()\`:返回迭代的下一个元素。
- \`public boolean hasNext()\`:如果仍有元素可以迭代，则返回 true。

> 注意：在调用it.next()方法之前必须要调用it.hasNext()进行检测。若不调用，且下一条记录无效，直接调用it.next()会抛出\`NoSuchElementException异常\`。

### 2 迭代器的执行原理

Iterator迭代器对象在遍历集合时，内部采用指针的方式来跟踪集合中的元素，接下来通过一个图例来演示Iterator对象迭代元素的过程：

![image-20220407235130988](.\\images\\image-20220407235130988.png)

使用Iterator迭代器删除元素：java.util.Iterator迭代器中有一个方法：void remove() ;

\`\`\`java
Iterator iter = coll.iterator();//回到起点
while(iter.hasNext()){
    Object obj = iter.next();
    if(obj.equals("Tom")){
        iter.remove();
    }
}
\`\`\`

注意：
- Iterator可以删除集合的元素，但是遍历过程中通过迭代器对象的remove方法，不是集合对象的remove方法。
- 如果还未调用next()或在上一次调用 next() 方法之后已经调用了 remove() 方法，再调用remove()都会报IllegalStateException。

- Collection已经有remove(xx)方法了，为什么Iterator迭代器还要提供删除方法呢？因为迭代器的remove()可以按指定的条件进行删除。



在JDK8.0时，Collection接口有了removeIf 方法，即可以根据条件删除。

\`\`\`java
public class TestCollectionRemoveIf {
    @Test
    public void test01(){
        Collection coll = new ArrayList();
        coll.add("小李广");
        coll.add("扫地僧");
        coll.add("石破天");
        coll.add("佛地魔");
        System.out.println("coll = " + coll);

        coll.removeIf(new Predicate() {
            @Override
            public boolean test(Object o) {
                String str = (String) o;
                return str.contains("地");
            }
        });
        System.out.println("删除包含\\"地\\"字的元素之后coll = " + coll);
    }
}
\`\`\`

### 3 foreach循环

- foreach循环（也称增强for循环）是 JDK5.0 中定义的一个高级for循环，专门用来\`遍历数组和集合\`的。


- foreach循环的语法格式：


\`\`\`java
for(元素的数据类型 局部变量 : Collection集合或数组){ 
  	//操作局部变量的输出操作
}
//这里局部变量就是一个临时变量，自己命名就可以
\`\`\`

- 举例：


\`\`\`java
package com.atguigu.iterator;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Collection;

public class TestForeach {
    @Test
    public void test01(){
        Collection coll = new ArrayList();
        coll.add("小李广");
        coll.add("扫地僧");
        coll.add("石破天");
		//foreach循环其实就是使用Iterator迭代器来完成元素的遍历的。
        for (Object o : coll) {
            System.out.println(o);
        }
    }
    @Test
    public void test02(){
        int[] nums = {1,2,3,4,5};
        for (int num : nums) {
            System.out.println(num);
        }
        System.out.println("`,title:"集合框架",date:"2024-01-05 21:08:24"}},{route:"/blog/java/juc/",meta:{description:`# JUC\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"JUC",date:"2023-12-26 09:08:33"}},{route:"/blog/java/jvm/",meta:{description:`# JVM\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"JVM",date:"2023-12-26 09:08:33"}},{route:"/blog/leetcode/algorithm/",meta:{description:`# 代码随想录\r
\r
网站：https://www.programmercarl.com/\r
\r
| 时间       | 题目                      | 类型                    | 难度                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"代码随想录",date:"2023-12-26 09:08:33"}},{route:"/blog/leetcode/algorithm/两数之和.html",meta:{description:"",recommend:!1,tag:["哈希表"],date:"2023-12-15 14:00:00",title:"两数之和"}},{route:"/blog/leetcode/algorithm/买卖股票的最佳时机.html",meta:{description:"",recommend:!1,tag:["哈希表","快慢指针"],date:"2023-12-15 17:00:00",title:"买卖股票的最佳时机"}},{route:"/blog/leetcode/algorithm/二分查找.html",meta:{description:"",recommend:!1,tag:["二分查找"],date:"2023-12-16 10:00:00",title:"二分查找"}},{route:"/blog/leetcode/algorithm/反转链表.html",meta:{description:"",recommend:!1,tag:["迭代","递归","双指针"],date:"2023-12-13 21:00:00",title:"反转链表"}},{route:"/blog/leetcode/algorithm/合并两个有序链表.html",meta:{description:"",recommend:!1,tag:["递归","迭代"],date:"2023-12-15 11:00:00",title:"合并两个有序链表"}},{route:"/blog/leetcode/algorithm/最大子序和.html",meta:{description:"",recommend:!1,tag:["贪心","动态规划"],date:"2023-12-14 17:00:00",title:"最大子序和"}},{route:"/blog/leetcode/algorithm/有序数组的平方.html",meta:{description:"",recommend:!1,tag:["双指针"],date:"2023-12-16 15:00:00",title:"有序数组的平方"}},{route:"/blog/leetcode/algorithm/环形链表.html",meta:{description:"",recommend:!1,tag:["哈希表","快慢指针"],date:"2023-12-15 16:00:00",title:"环形链表"}},{route:"/blog/leetcode/algorithm/移除元素.html",meta:{description:"",recommend:!1,tag:["快慢指针","相向指针"],date:"2023-12-16 10:00:00",title:"移除元素"}},{route:"/blog/leetcode/algorithm/移除链表元素.html",meta:{description:"",recommend:!1,tag:["虚拟头节点"],date:"2023-12-22 14:00:00",title:"移除链表元素"}},{route:"/blog/leetcode/algorithm/螺旋矩阵II.html",meta:{description:"",recommend:!1,tag:["二分查找"],date:"2023-12-18 21:00:00",title:"螺旋矩阵II"}},{route:"/blog/leetcode/algorithm/设计链表.html",meta:{description:"",recommend:!1,tag:["虚拟头节点"],date:"2023-12-22 14:00:00",title:"设计链表"}},{route:"/blog/leetcode/algorithm/长度最小的子数组.html",meta:{description:"",recommend:!1,tag:["双指针"],date:"2023-12-16 16:00:00",title:"长度最小的子数组"}},{route:"/blog/leetcode/database/",meta:{description:`# SQL\r
## 高频 SQL 50 题（基础版）\r
### 查询\r
| 时间       | 题目                     | 类型              | 难度 |\r
| `,hidden:!0,readingTime:!1,title:"SQL",date:"2024-01-05 21:08:24"}},{route:"/blog/mq/kafka/",meta:{description:`# Kafka\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"Kafka",date:"2023-12-26 09:08:33"}},{route:"/blog/mq/kafka/kafka概述.html",meta:{description:"",cover:"/blog/mq/kafka/images/Kafka拓扑结构.png",recommend:!1,tag:["Kafka"],date:"2023-11-27 21:00:00",title:"Kafka概述"}},{route:"/blog/project/glsx/",meta:{description:`# 谷粒随享\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"谷粒随享",date:"2023-12-26 09:08:33"}},{route:"/blog/project/glsx/搭建项目.html",meta:{description:"",recommend:!1,cover:"/blog/project/glsx/images/maven.png",tag:["谷粒随享"],date:"2023-11-28 21:00:00",title:"3搭建项目"}},{route:"/blog/project/glsx/谷粒随享.html",meta:{description:"",recommend:!1,cover:"/blog/project/glsx/images/项目架构.png",tag:["谷粒随享"],date:"2023-11-26 21:00:00",title:"1谷粒随享"}},{route:"/blog/project/glsx/项目环境准备.html",meta:{description:`# 2 项目环境准备\r
## 2.1 准备linux环境\r
\r
### 安装vmware虚拟机\r
\r
略\r
\r
### 安装centos7系统\r
\r
略\r
\r
### 虚拟机网路配置\r
\r
编辑——>虚拟网络编辑器\r
\r
①固定ip地址(nat模式)\r
\r
![PixPin_2023-11-27_18-29-45](./images/PixPin_2023-11-27_18-29-45.png)\r
\r
②起始ip地址、结束ip地址、子网ip需要同一号段\r
\r
![PixPin_2023-11-27_18-33-25](./images/PixPin_2023-11-27_18-33-25.png)\r
\r
同时起始ip和结束ip需要相邻，保证DHCP分配ip地址固定为起始ip\r
\r
## 2.2 安装docker环境\r
\r
### 为什么要用docker\r
\r
docker可以带软件环境帮我们安装应用，不同的系统中docker同一种安装方式\r
\r
### 基本概念\r
\r
Docker是一个开源的应用容器引擎，基于go语言开发并遵循了apache2.0协议开源。Docker是在Linux容器里运行应用的开源工具，是一种轻量级的“虚拟机"。Docker 的容器技术可以在一台主机上轻松为任何应用创建一个轻量级的、可移植的、自给自足的容器。Docker的Logo设计为鲸鱼拖着许多集装箱。鲸鱼可看作为宿主机，集装箱可理解为相互隔离的容器，每个集装箱中都包含自己的应用程序。\r
\r
### 常用命令\r
\r
| 命令描述       | 命令                     |\r
| `,recommend:!1,cover:"/blog/project/glsx/images/docker.png",tag:["谷粒随享"],date:"2023-11-27 21:00:00",title:"2项目环境准备"}},{route:"/blog/spring/springframework/",meta:{description:`# SpringFramework实战指南\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"SpringFramework实战指南",date:"2023-12-26 09:08:33"}},{route:"/blog/spring/springframework/SpringFramework介绍.html",meta:{description:"",cover:"/blog/spring/springframework/images/SpringFramework6框架结构图.png",recommend:!1,tag:["SpringFramework"],date:"2023-11-27 21:00:00",title:"SpringFramework介绍"}},{route:"/blog/spring/springframework/SpringIoC容器核心概念.html",meta:{description:`\r
# Spring IoC容器核心概念\r
## 1 组件和组件管理概念\r
\r
### 什么是组件？\r
\r
常规的三层架构请求处理流程：\r
\r
![三层架构组件](./images/三层架构组件.jpg)\r
\r
### 我们的期待\r
\r
- 有人替我们创建组件的对象\r
- 有人帮我们保存组件的对象\r
- 有人帮助我们自动组装\r
- 有人替我们管理事务\r
- 有人协助我们整合其他框架\r
- ......\r
\r
### Spring充当组件管理角色(IoC)\r
\r
组件可以完全交给Spring框架进行管理，Spring框架替代了程序员原有的new对象和对象属性赋值动作等！\r
\r
Spring具体的组件管理动作包含：\r
\r
- 组件对象实例化\r
- 组件属性属性赋值\r
- 组件对象之间引用\r
- 组件对象存活周期管理\r
- ......\r
\r
我们只需要编写配置文件告知Spring管理哪些类组件和他们的关系即可！\r
\r
::: tip\r
\r
注意：组件是映射到应用程序中所有可重用组件的Java对象，应该是可复用的功能对象！\r
\r
- 组件一定是对象\r
- 对象不一定是组件\r
\r
:::\r
\r
### 组件交给Spring的管理优势！\r
\r
1. **降低了组件之间的耦合性**：Spring loC容器通过依赖注入机制，将组件之间的依赖关系削弱，减少了程序组件之间的耦合性，使得组件更加松散地耦合。\r
2. **提高了代码的可重用性和可维护性**：将组件的实例化过程、依赖关系的管理等功能交给Spring loC容器处理，使得组件代码更加模块化、可重用、更易于维护。\r
3. **方便了配置和管理**：Spring loC容器通过XML文件或者注解，轻松的对组件进行配置和管理，使得组件的切换、替换等操作更加的方便和快捷。\r
4. 交给Spring管理的对象（组件），方可享受Spring框架的其他功能（AOP，声明事务管理）等。\r
\r
## 2 Spring loC容器和容器实现\r
\r
### 程序中的容器\r
\r
普通容器：\r
\r
- 数组\r
- 链表\r
- 集合\r
- ......\r
\r
复杂容器：\r
\r
- Servlet容器能够管理Servlet、Filter、Listener这样的组件的一生，所以它是一个复杂容器。\r
\r
- Spring loC容器也是一个复杂容器。它们不仅要负责创建组件的对象、存储组件的对象，还要负责调用组件的方法让它们工作，最终在特定情况下销毁组件。\r
\r
总结：Spring管理组件的容器，就是一个复杂容器，不仅存储组件，也可以管理组件之间依赖关系，并且创建和销毁组件等！\r
\r
### Spring loC容器介绍\r
\r
Spring loC容器，负责实例化、配置和组装bean(组件)。容器通过读取配置元数据来获取有关要实例化、配置和组装组件的指令。配置元数据以XML、Java注解或Java代码形式表现。它允许表达组成应用程序的组件以及这些组件之间丰富的相互依赖关系。\r
\r
![container-magic](./images/container-magic.png)\r
\r
上图显示了Spring容器工作原理的高级视图。应用程序类与配置元数据相结合，您拥有完全配置且可执行的系统或应用程序。\r
\r
### Spring IoC容器具体接口和实现类\r
\r
Spring Ioc容器接口：\r
\r
- BeanFactory：接口提供了一种高级配置机制，能够管理任何类型的对象，它是Spring Ioc容器标准超接口！\r
- ApplicationContext：是BeanFactory的子接口。它扩展了以下功能\r
  1. 更容易与Spring的AOP功能集成\r
  2. 消息资源处理（用于国际化）\r
  3. 特定于应用程序给予此接口实现，例如Web应用程序的WebApplicationContext\r
\r
\r
\r
简而言之，BeanFactory提供了配置框架和基本功能，而ApplicationContext添加了更多特定于企业的功能。ApplicationContext是BeanFactory的完整超集。\r
\r
ApplicationContext容器实现类：\r
\r
![Snipaste_2023-11-24_16-29-07](./images/Snipaste_2023-11-24_16-29-07.png)\r
\r
| 类型名                             | 简介                                                         |\r
| `,cover:"/blog/spring/springframework/images/container-magic.png",recommend:!1,tag:["SpringFramework","IoC"],date:"2023-11-28 21:00:00",title:"SpringIoC容器核心概念"}},{route:"/blog/spring/springframework/三种配置方式总结.html",meta:{description:"",title:"",date:"2023-12-26 09:08:33"}},{route:"/blog/spring/springframework/基于XML配置方式管理Bean.html",meta:{description:`# 基于XML配置方式管理Bean\r
\r
## 1 组件(Bean)信息声明配置(IoC)\r
\r
1. 目标\r
\r
   Spring IoC 容器管理一个或多个 bean。这些 Bean 是使用您提供给容器的配置元数据创建的（例如，以 XML \`<bean/>\` 定义的形式）。 我们学习，如何通过定义XML配置文件，声明组件类信息，交给 Spring 的 IoC 容器进行组件管理\r
\r
2. 思路\r
\r
   ![通过配置文件创建组件对象](./images/通过配置文件创建组件对象.png)\r
\r
3. 准备项目\r
\r
   - 创建maven工程（spring-ioc-xml-01）\r
\r
   - 导入SpringIoC相关依赖\r
\r
     pom.xml\r
\r
     \`\`\`xml\r
     <dependencies>\r
         <!--spring context依赖-->\r
         <!--当你引入Spring Context依赖之后，表示将Spring的基础依赖引入了-->\r
         <dependency>\r
             <groupId>org.springframework</groupId>\r
             <artifactId>spring-context</artifactId>\r
             <version>6.0.6</version>\r
         </dependency>\r
         <!--junit5测试-->\r
         <dependency>\r
             <groupId>org.junit.jupiter</groupId>\r
             <artifactId>junit-jupiter-api</artifactId>\r
             <version>5.3.1</version>\r
         </dependency>\r
     </dependencies>\r
     \`\`\`\r
\r
### 基于无参构造函数\r
\r
> 当通过构造函数方法创建一个 bean（组件对象） 时，所有普通类都可以由 Spring 使用并与之兼容。也就是说，正在开发的类不需要实现任何特定的接口或以特定的方式进行编码。只需指定 Bean 类信息就足够了。但是，默认情况下，我们需要一个默认（空）构造函数。\r
\r
- 准备组件类\r
\r
  \`\`\`java\r
  package com.haitang.ioc;\r
  \r
  public class HappyComponent {\r
      //默认包含无参数构造函数\r
      public void doWork() {\r
          System.out.println("HappyComponent.doWork");\r
      }\r
  }\r
  \`\`\`\r
\r
- xml 配置文件编写\r
\r
  resource/spring-bean-01.xml\r
\r
  \`\`\`xml\r
  <!-- 基于无参数构造函数创建bean -->\r
  <bean id="happyComponent" class="com.atguigu.ioc.HappyComponent"/>\r
  \`\`\`\r
\r
  - bean标签：通过配置bean标签告诉IOC容器需要创建对象的组件信息\r
  - id属性：bean的唯一标识，方便后期获取Bean!\r
  - class属性：组件类的全限定符！\r
\r
  > 注意：要求当前组件类必须包含无参数构造函数！\r
\r
### 基于静态工厂方法实例化\r
\r
> 除了使用构造函数实例化对象，还有一类是通过工厂模式实例化对象。接下来我们讲解如何定义使用静态工厂方法创建Bean的配置 ！\r
\r
- 准备组件类\r
\r
  \`\`\`java\r
  public class ClientService {\r
      private static ClientService clientService = new ClientService();\r
  \r
      private ClientService() {\r
      }\r
  \r
      public static ClientService createInstance() {\r
          return clientService;\r
      }\r
  }\r
  \`\`\`\r
\r
- xml 配置文件编写\r
\r
  resource/spring-bean-01.xml\r
\r
  \`\`\`xml\r
  <!-- 基于静态工厂方法实例化 -->\r
  <bean id="clientService" class="com.haitang.ioc.ClientService" factory-method="createInstance"/>\r
  \`\`\`\r
\r
  - class属性：指定工厂类的全限定符！ \r
  - factory-method: 指定静态工厂方法。\r
\r
  > 注意：该方法必须是static方法。\r
\r
### 基于实例工厂方法实例化\r
\r
> 接下来我们讲解下如何定义使用实例工厂方法创建Bean的配置 ！\r
\r
准备组件类\r
\r
\`\`\`java\r
// 实例类\r
public class ClientServiceImpl {\r
}\r
// 实例工厂类\r
public class DefaultServiceLocator {\r
    private static ClientServiceImpl clientService = new ClientServiceImpl();\r
\r
    public ClientServiceImpl createClientServiceInstance() {\r
        return clientService;\r
    }\r
}\r
\`\`\`\r
\r
xml 配置文件编写\r
\r
\`\`\`xml\r
<!-- 基于实例工厂方法实例化 -->\r
<!-- 实例类 -->\r
<bean id="serviceLocator" class="com.haitang.ioc.DefaultServiceLocator"/>\r
<!-- 通过指定实例对象和工厂实例方法 -->\r
<bean id="clientServiceImpl" factory-bean="serviceLocator" factory-method="createClientServiceInstance"/>\r
\`\`\`\r
\r
- factory-bean属性：指定当前容器中工厂Bean 的名称。 \r
- factory-method: 指定实例工厂方法名。\r
\r
> 注意：实例方法必须是非static的！\r
\r
### 图解IoC配置流程\r
\r
![图解ioc配置流程](./images/图解ioc配置流程.png)\r
\r
## 2 组件(Bean)依赖注入配置(Dl)\r
\r
1. 目标\r
\r
   通过配置文件，实现IoC容器中Bean之间的引用（依赖注入DI配置）。\r
\r
   主要涉及注入场景：**基于构造函数的依赖注入和基于 Setter 的依赖注入**。\r
\r
2. 思路\r
\r
   ![组件依赖注入配置](./images/组件依赖注入配置.png)\r
\r
### 基于构造函数（单个构造参数）\r
\r
- 介绍\r
\r
  基于构造函数的 DI 是通过容器调用具有多个参数的构造函数来完成的，每个参数表示一个依赖项。 下面的示例演示一个只能通过构造函数注入进行依赖项注入的类！\r
\r
- 准备组件类\r
\r
  \`\`\`java\r
  // dao类\r
  public class UserDao {\r
  }\r
  // service类\r
  public class UserService {\r
  \r
      private UserDao userDao;\r
  \r
      public UserService(UserDao userDao) {\r
          this.userDao = userDao;\r
      }\r
  }\r
  \`\`\`\r
\r
- 编写配置文件\r
\r
  resources/spring-di-02.xml\r
\r
  \`\`\`xml\r
  <beans>\r
      <!-- 引用类bean声明 -->\r
      <bean id="userService" class="com.haitang.di.UserService">\r
          <!-- 构造函数引用 -->\r
          <constructor-arg ref="userDao"/>\r
      </bean>\r
      <!-- 被引用类bean声明 -->\r
      <bean id="userDao" class="com.haitang.di.UserDao"/>\r
  </beans>\r
  \`\`\`\r
\r
  - constructor-arg标签：可以引用构造参数 ref 引用其他bean的标识。\r
\r
### 基于构造函数（多构造参数解析）\r
\r
- 介绍\r
\r
  基于构造函数的 DI 是通过容器调用具有多个参数的构造函数来完成的，每个参数表示一个依赖项。 下面的示例演示通过构造函数注入多个参数，参数包含其他bean和基本数据类型！\r
\r
- 准备组件类\r
\r
  \`\`\`java\r
  // dao类\r
  public class UserDao {\r
  }\r
  // service类\r
  public class UserService {\r
  \r
      private UserDao userDao;\r
  \r
      private int age;\r
  \r
      private String name;\r
  \r
      public UserService(int age, String name, UserDao userDao) {\r
          this.userDao = userDao;\r
          this.age = age;\r
          this.name = name;\r
      }\r
  }\r
  \`\`\`\r
\r
- 编写配置文件\r
\r
  \`\`\`xml\r
  <!-- 场景1: 多参数，可以按照相应构造函数的顺序注入数据 -->\r
  <bean id="userService" class="com.haitang.di.UserService">\r
      <!-- value直接注入基本类型值 -->\r
      <constructor-arg value="18"/>\r
      <constructor-arg value="赵伟风"/>\r
      <constructor-arg ref="userDao"/>\r
  </bean>\r
  <!-- 被引用类bean声明 -->\r
  <bean id="userDao" class="com.haitang.di.UserDao"/>\r
  \`\`\`\r
\r
  \`\`\`xml\r
  <!-- 场景2: 多参数，可以按照相应构造函数的名称注入数据 -->\r
  <bean id="userService" class="com.haitang.di.UserService">\r
      <!-- value直接注入基本类型值 -->\r
      <constructor-arg name="name" value="赵伟风"/>\r
      <constructor-arg name="userDao" ref="userDao"/>\r
      <constructor-arg name="age" value="18"/>\r
  </bean>\r
  <!-- 被引用类bean声明 -->\r
  <bean id="userDao" class="com.haitang.di.UserDao"/>\r
  \`\`\`\r
\r
  \`\`\`xml\r
  <!-- 场景3: 多参数，可以按照相应构造函数的角标注入数据。index从0开始 构造函数(0,1,2....) -->\r
  <bean id="userService" class="com.haitang.di.UserService">\r
      <!-- value直接注入基本类型值 -->\r
      <constructor-arg index="1" value="赵伟风"/>\r
      <constructor-arg index="2" ref="userDao"/>\r
      <constructor-arg index="0" value="18"/>\r
  </bean>\r
  <!-- 被引用类bean声明 -->\r
  <bean id="userDao" class="com.haitang.di.UserDao"/>\r
  \`\`\`\r
\r
  - constructor-arg标签：指定构造参数和对应的值。\r
    1. name属性指定参数名\r
    2. index属性指定参数角标\r
    3. value属性指定普通属性值\r
\r
### 基于Setter方法依赖注入\r
\r
- 介绍\r
\r
  开发中，除了构造函数注入（DI）更多的使用的Setter方法进行注入！\r
\r
  下面的示例演示一个只能使用纯 setter 注入进行依赖项注入的类。\r
\r
- 准备组件类\r
\r
  \`\`\`java\r
  package com.haitang.setter;\r
  \r
  public class MovieFinder {\r
  }\r
  \r
  public class SimpleMovieLister {\r
  \r
      private MovieFinder movieFinder;\r
  \r
      private String movieName;\r
  \r
      public void setMovieFinder(MovieFinder movieFinder) {\r
          this.movieFinder = movieFinder;\r
      }\r
  \r
      public void setMovieName(String movieName) {\r
          this.movieName = movieName;\r
      }\r
  }\r
  \`\`\`\r
\r
- 编写配置文件\r
\r
  \`\`\`xml\r
  <bean id="simpleMovieLister" class="com.haitang.setter.SimpleMovieLister">\r
      <!-- setter方法，注入movieFinder对象的标识id\r
           name = 属性名  ref = 引用bean的id值\r
       -->\r
      <property name="movieFinder" ref="movieFinder"/>\r
      <!-- setter方法，注入基本数据类型movieName\r
           name = 属性名 value= 基本类型值\r
       -->\r
      <property name="movieName" value="消失的她"/>\r
  </bean>\r
  <bean id="movieFinder" class="com.haitang.setter.MovieFinder"/>\r
  \`\`\`\r
\r
  - property标签： 可以给setter方法对应的属性赋值。\r
    1. name属性代表set方法标识\r
    2. ref代表引用bean的标识id\r
    3. value属性代表基本属性值\r
\r
### 总结\r
\r
依赖注入（DI）包含引用类型和基本数据类型，同时注入的方式也有多种！主流的注入方式为setter方法注入和构造函数注入，两种注入语法都需要掌握！ \r
\r
> 需要特别注意：引用其他bean，使用ref属性。直接注入基本类型值，使用value属性。\r
\r
## 3 IoC容器创建和使用\r
\r
1. 介绍\r
\r
   上面的实验只是讲解了如何在XML格式的配置文件编写IoC和DI配置！\r
\r
   ![container-magic](./images/container-magic.png)\r
\r
   想要配置文件中声明组件类信息真正的进行实例化成Bean对象和形成Bean之间的引用关系，我们需要声明IoC容器对象，读取配置文件，实例化组件和关系维护的过程都是在IoC容器中实现的！\r
\r
2. 容器实例化\r
\r
   \`\`\`java\r
   //方式1:实例化并且指定配置文件\r
   //参数：传入一个或者多个配置文件\r
   ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");\r
   \r
   //方式2:先实例化，再指定配置文件，最后刷新容器触发Bean实例化动作\r
   ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext();\r
   //设置配置配置文件,方法参数为可变参数,可以设置一个或者多个配置\r
   context.setConfigLocations("services.xml", "daos.xml");\r
   //后配置的文件,需要调用refresh方法,触发刷新配置\r
   context.refresh();\r
   \`\`\`\r
\r
3. Bean对象读取\r
\r
   \`\`\`java\r
   //方式1: 根据bean的id获取\r
   //没有指定类型,返回为Object,需要类型转化!\r
   Object happyComponent = context.getBean("happyComponent");\r
   HappyComponent happyComponent = (HappyComponent) context.getBean("happyComponent");\r
   \r
   //方式2: 根据bean的类型获取\r
   //根据bean的类型获取,但是要求,同类型(当前类,或者子类,或者接口的实现类)只能有一个对象交给IoC容器管理\r
   //配置两个或者以上出现: org.springframework.beans.factory.NoUniqueBeanDefinitionException 问题\r
   HappyComponent happyComponent = context.getBean(HappyComponent.class);\r
   \r
   //方式3: 根据bean的id和类型获取\r
   HappyComponent happyComponent = context.getBean("happyComponent", HappyComponent.class);\r
   \`\`\`\r
\r
## 4 组件(Bean)作用域和周期方法配置\r
\r
### 组件周期方法配置\r
\r
周期方法概念：\r
\r
我们可以在组件类中定义方法，然后当IoC容器实例化和销毁组件对象的时候进行调用！这两个方法我们成为生命周期方法！ 类似于Servlet的init/destroy方法，我们可以在周期方法完成初始化和释放资源等工作。\r
\r
周期方法声明：\r
\r
\`\`\`java\r
public class JavaBean {\r
    public void init() {\r
        // 初始化逻辑\r
    }\r
\r
    public void destroy() {\r
        // 释放资源逻辑\r
    }\r
}\r
\`\`\`\r
\r
周期方法配置：\r
\r
\`\`\`xml\r
<bean id="javaBean" class="com.haitang.bean.JavaBean" init-method="init" destroy-method="destroy"/>\r
\`\`\`\r
\r
### 组件作用域配置\r
\r
Bean作用域概念：\r
\r
\`<bean>\` 标签声明Bean，只是将Bean的信息配置给SpringIoC容器！\r
\r
在IoC容器中，这些\`<bean>\`标签对应的信息转成Spring内部 \`BeanDefinition\` 对象，\`BeanDefinition\` 对象内，包含定义的信息（id，class，属性等等）！\r
\r
这意味着，\`BeanDefinition\`与类概念一样，SpringIoC容器可以可以根据\`BeanDefinition\`对象反射创建多个Bean对象实例。 具体创建多少个Bean的实例对象，由Bean的作用域Scope属性指定！\r
\r
作用域可选值：\r
\r
| 取值      | 含义                                | 创建对象的时机 | 默认值 |\r
| `,cover:"/blog/spring/springframework/images/组件依赖注入配置.png",recommend:!1,tag:["SpringFramework","IoC","DI"],date:"2023-12-01 20:00:00",title:"基于XML配置方式管理Bean"}},{route:"/blog/spring/springframework/基于注解方式管理Bean.html",meta:{description:`# 基于注解方式管理Bean\r
\r
## 1 Bean注解标记和扫描(loC)\r
\r
### 注解理解\r
\r
和 XML 配置文件一样，注解本身并不能执行，注解本身仅仅只是做一个标记，具体的功能是框架检测到注解标记的位置，然后针对这个位置按照注解标记的功能来执行具体操作。\r
\r
本质上：所有一切的操作都是 Java 代码来完成的，XML 和注解只是告诉框架中的 Java 代码如何执行。\r
\r
### 扫描理解\r
\r
Spring 为了知道程序员在哪些地方标记了什么注解，就需要通过扫描的方式，来进行检测。然后根据注解进行后续操作。\r
\r
### 准备Spring项目和组件\r
\r
- 新建项目spring-ioc-annotation-03\r
\r
- 准备pom.xml文件\r
\r
  \`\`\`xml\r
  <dependencies>\r
      <!--spring context依赖-->\r
      <!--当你引入Spring Context依赖之后，表示将Spring的基础依赖引入了-->\r
      <dependency>\r
          <groupId>org.springframework</groupId>\r
          <artifactId>spring-context</artifactId>\r
          <version>6.0.6</version>\r
      </dependency>\r
  \r
      <!--junit5测试-->\r
      <dependency>\r
          <groupId>org.junit.jupiter</groupId>\r
          <artifactId>junit-jupiter-api</artifactId>\r
          <version>5.3.1</version>\r
      </dependency>\r
      <!--jdk注解-->\r
  	<dependency>\r
      	<groupId>javax.annotation</groupId>\r
      	<artifactId>javax.annotation-api</artifactId>\r
      	<version>1.3.2</version>\r
      	<scope>compile</scope>\r
  	</dependency>\r
  </dependencies>\r
  \`\`\`\r
\r
- 准备组件类\r
\r
  - 普通组件\r
\r
    \`\`\`java\r
    public class CommonComponent {\r
    }\r
    \`\`\`\r
\r
  - Controller组件\r
\r
    \`\`\`java\r
    public class XxxController {\r
    }\r
    \`\`\`\r
\r
  - Service组件\r
\r
    \`\`\`java\r
    public class XxxService {\r
    }\r
    \`\`\`\r
\r
  - Dao组件\r
\r
    \`\`\`java\r
    public class XxxDao {\r
    }\r
    \`\`\`\r
\r
### 组件添加标记注解\r
\r
- 组件标记注解和区别\r
\r
  Spring 提供了以下多个注解，这些注解可以直接标注在 Java 类上，将它们定义成 Spring Bean。\r
\r
  | 注解        | 说明                                                         |\r
  | `,cover:"/blog/spring/springframework/images/Component注解.png",recommend:!1,tag:["SpringFramework","IoC","DI"],date:"2023-12-06 20:00:00",title:"基于注解方式管理Bean"}},{route:"/blog/spring/springframework/基于配置类方式管理Bean.html",meta:{description:"",cover:"/blog/spring/springframework/images/Component注解.png",hidden:!0,recommend:!1,tag:["SpringFramework","IoC","DI"],date:"2023-12-01 20:00:00",title:"基于配置类方式管理Bean"}},{route:"/blog/spring/springframework/整合Spring5-Test5搭建测试环境.html",meta:{description:"",title:"",date:"2023-12-26 09:08:33"}},{route:"/blog/leetcode/database/medium/换座位.html",meta:{description:`\r
# 换座位\r
\r
表: \`Seat\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-27 10:30:00",title:"换座位"}},{route:"/blog/leetcode/database/medium/最后一个能进入巴士的人.html",meta:{description:`\r
# 最后一个能进入巴士的人\r
\r
表: \`Queue\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 14:30:00",title:"最后一个能进入巴士的人"}},{route:"/blog/leetcode/database/medium/确认率.html",meta:{description:`\r
# 确认率\r
\r
表: \`Signups\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 11:30:00",title:"确认率"}},{route:"/blog/leetcode/database/medium/股票的资本损益.html",meta:{description:`\r
# 股票的资本损益\r
\r
\`Stocks\` 表：\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 13:00:00",title:"股票的资本损益"}},{route:"/blog/leetcode/database/medium/至少有5名直接下属的经理.html",meta:{description:`\r
# 每至少有5名直接下属的经理\r
\r
表: \`Employee\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-28 11:30:00",title:"每至少有5名直接下属的经理"}},{route:"/blog/leetcode/database/simple/2020年最后一次登录.html",meta:{description:`\r
# 2020年最后一次登录\r
\r
表: \`Logins\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 16:00:00",title:"2020年最后一次登录"}},{route:"/blog/leetcode/database/simple/上升的温度.html",meta:{description:`\r
# 上升的温度\r
\r
表： \`Weather\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-28 08:40:00",title:"上升的温度"}},{route:"/blog/leetcode/database/simple/丢失信息的雇员.html",meta:{description:`\r
# 丢失信息的雇员\r
\r
表: \`Employees\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 12:20:00",title:"丢失信息的雇员"}},{route:"/blog/leetcode/database/simple/产品销售分析I.html",meta:{description:`\r
# 产品销售分析 I\r
\r
销售表 \`Sales\`：\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 10:00:00",title:"产品销售分析I"}},{route:"/blog/leetcode/database/simple/使用唯一标识码替换员工ID.html",meta:{description:`\r
# 使用唯一标识码替换员工ID\r
\r
\`Employees\` 表：\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 16:10:00",title:"使用唯一标识码替换员工ID"}},{route:"/blog/leetcode/database/simple/列出指定时间段内所有的下单产品.html",meta:{description:`\r
# 列出指定时间段内所有的下单产品\r
\r
表: \`Products\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 18:00:00",title:"列出指定时间段内所有的下单产品"}},{route:"/blog/leetcode/database/simple/变更性别.html",meta:{description:`\r
# 变更性别\r
\r
\`Salary\` 表：\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 16:20:00",title:"变更性别"}},{route:"/blog/leetcode/database/simple/可回收且低脂的产品.html",meta:{description:`\r
# 可回收且低脂的产品\r
\r
表：\`Products\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 14:30:00",title:"可回收且低脂的产品"}},{route:"/blog/leetcode/database/simple/合作过至少三次的演员和导演.html",meta:{description:`\r
# 合作过至少三次的演员和导演\r
\r
\`ActorDirector\` 表：\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 09:00:00",title:"合作过至少三次的演员和导演"}},{route:"/blog/leetcode/database/simple/员工奖金.html",meta:{description:`\r
# 员工奖金\r
\r
表：\`Employee\` \r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 16:20:00",title:"员工奖金"}},{route:"/blog/leetcode/database/simple/大的国家.html",meta:{description:`\r
# 大的国家\r
\r
\`World\` 表：\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-27 23:00:00",title:"大的国家"}},{route:"/blog/leetcode/database/simple/学生们参加各科测试的次数.html",meta:{description:`\r
# 学生们参加各科测试的次数\r
\r
学生表: \`Students\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-28 09:30:00",title:"学生们参加各科测试的次数"}},{route:"/blog/leetcode/database/simple/寻找用户推荐人.html",meta:{description:`\r
# 寻找用户推荐人\r
\r
表: \`Customer\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-27 22:30:00",title:"寻找用户推荐人"}},{route:"/blog/leetcode/database/simple/平均售价.html",meta:{description:`\r
# 平均售价\r
\r
表：\`Prices\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2024-01-03 23:50:00",title:"平均售价"}},{route:"/blog/leetcode/database/simple/按日期分组销售产品.html",meta:{description:`\r
# 按日期分组销售产品\r
\r
表 \`Activities\`：\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 14:00:00",title:"按日期分组销售产品"}},{route:"/blog/leetcode/database/simple/排名靠前的旅行者.html",meta:{description:`\r
# 排名靠前的旅行者\r
\r
表：\`Users\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 11:00:00",title:"排名靠前的旅行者"}},{route:"/blog/leetcode/database/simple/文章浏览I.html",meta:{description:`\r
# 文章浏览I\r
\r
\`Views\` 表：\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 16:00:00",title:"文章浏览I"}},{route:"/blog/leetcode/database/simple/无效的推文.html",meta:{description:`\r
# 无效的推文\r
\r
表：\`Tweets\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 11:30:00",title:"无效的推文"}},{route:"/blog/leetcode/database/simple/有趣的电影.html",meta:{description:`\r
# 有趣的电影\r
\r
表：\`cinema\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 11:10:00",title:"有趣的电影"}},{route:"/blog/leetcode/database/simple/查找每个员工花费的总时间.html",meta:{description:`\r
# 查找每个员工花费的总时间\r
\r
表: \`Employees\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 15:00:00",title:"查找每个员工花费的总时间"}},{route:"/blog/leetcode/database/simple/查找重复的电子邮箱.html",meta:{description:`\r
# 查找重复的电子邮箱\r
\r
表: \`Person\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 09:40:00",title:"查找重复的电子邮箱"}},{route:"/blog/leetcode/database/simple/每个产品在不同商店的价格.html",meta:{description:`\r
# 每个产品在不同商店的价格\r
\r
表：\`Products\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 10:40:00",title:"每个产品在不同商店的价格"}},{route:"/blog/leetcode/database/simple/每位教师所教授的科目种类的数量.html",meta:{description:`\r
# 每位教师所教授的科目种类的数量\r
\r
表: \`Teacher\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 16:00:00",title:"每位教师所教授的科目种类的数量"}},{route:"/blog/leetcode/database/simple/每台机器的进程平均运行时间.html",meta:{description:`\r
# 每台机器的进程平均运行时间\r
\r
表: \`Activity\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 16:30:00",title:"每台机器的进程平均运行时间"}},{route:"/blog/leetcode/database/simple/每天的领导和合伙人.html",meta:{description:`\r
# 每天的领导和合伙人\r
\r
表：\`DailySales\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 16:30:00",title:"每天的领导和合伙人"}},{route:"/blog/leetcode/database/simple/游戏玩法分析I.html",meta:{description:`\r
# 游戏玩法分析I\r
\r
活动表 \`Activity\`：\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 15:50:00",title:"游戏玩法分析I"}},{route:"/blog/leetcode/database/simple/组合两个表.html",meta:{description:`\r
# 组合两个表\r
\r
表: \`Person\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 12:10:00",title:"组合两个表"}},{route:"/blog/leetcode/database/simple/超过经理收入的员工.html",meta:{description:`\r
# 超过经理收入的员工\r
\r
表：\`Employee\` \r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 17:00:00",title:"超过经理收入的员工"}},{route:"/blog/leetcode/database/simple/进店却未进行过交易的顾客.html",meta:{description:`\r
# 进店却未进行过交易的顾客\r
\r
表：\`Visits\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 11:20:00",title:"进店却未进行过交易的顾客"}},{route:"/blog/leetcode/database/simple/银行账户概要II.html",meta:{description:`\r
# 银行账户概要 II\r
\r
表: \`Users\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 09:30:00",title:"银行账户概要II"}},{route:"/blog/leetcode/database/simple/项目员工I.html",meta:{description:`\r
# 项目员工 I\r
\r
项目表 \`Project\`： \r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 11:30:00",title:"项目员工I"}}]),yu={customSearchQuery:function(e){return e.replace(/[\u4E00-\u9FA5]/g," $& ").replace(/\s+/g," ").trim()}};function ku(t,e="yyyy-MM-dd hh:mm:ss"){t instanceof Date||(t=new Date(t));const n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,`${t.getFullYear()}`.substr(4-RegExp.$1.length)));for(const r in n)new RegExp(`(${r})`).test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length===1?n[r]:`00${n[r]}`.substr(`${n[r]}`.length)));return e}const wu={},Su={width:"594",height:"112",viewBox:"0 0 594 112",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$u=vn('<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',11),Cu=[$u];function Mu(t,e){return c(),m("svg",Su,Cu)}const Lu=I(wu,[["render",Mu]]),Tt=t=>(ie("data-v-3e38d8c7"),t=t(),le(),t),Iu={class:"blog-search","data-pagefind-ignore":"all"},Pu=Tt(()=>p("svg",{width:"14",height:"14",viewBox:"0 0 20 20"},[p("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Au={key:0,class:"search-tip"},Vu={key:1,class:"metaKey"},xu={class:"search-dialog"},Ou={class:"link"},Eu={class:"title"},Tu={key:0,class:"date"},Ru=["innerHTML"],Nu={class:"command-palette-logo"},Hu={href:"https://github.com/cloudcannon/pagefind",target:"_blank",rel:"noopener noreferrer"},Du=Tt(()=>p("span",{class:"command-palette-Label"},"Search by",-1)),Bu=Tt(()=>p("ul",{class:"command-palette-commands"},[p("li",null,[p("kbd",{class:"command-palette-commands-key"},[p("svg",{width:"15",height:"15","aria-label":"Enter key",role:"img"},[p("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[p("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"})])])]),p("span",{class:"command-palette-Label"},"to select")]),p("li",null,[p("kbd",{class:"command-palette-commands-key"},[p("svg",{width:"15",height:"15","aria-label":"Arrow down",role:"img"},[p("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[p("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"})])])]),p("kbd",{class:"command-palette-commands-key"},[p("svg",{width:"15",height:"15","aria-label":"Arrow up",role:"img"},[p("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[p("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"})])])]),p("span",{class:"command-palette-Label"},"to navigate")]),p("li",null,[p("kbd",{class:"command-palette-commands-key"},[p("svg",{width:"15",height:"15","aria-label":"Escape key",role:"img"},[p("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[p("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])])]),p("span",{class:"command-palette-Label"},"to close")])],-1)),ju=$({__name:"Search",setup(t){lr(A=>({"3fb90223":d.value}));const e=L([]),n=yu,{localeIndex:r,site:a}=st(),o=M(()=>{var A;return{...n,...((A=n==null?void 0:n.locales)==null?void 0:A[r.value])||{}}}),s=M(()=>{var A;return((A=o.value)==null?void 0:A.showDate)??!0}),i=bu(),l=M(()=>i.width.value<760),d=M(()=>l.value?0:1),h=M(()=>{var A;return(A=o.value)!=null&&A.heading?o.value.heading.replace(/\{\{searchResult\}\}/,e.value.length):`Total: ${e.value.length} search results.`}),b=L("");fe(()=>{b.value=/(Mac|iPhone|iPod|iPad)/i.test(navigator==null?void 0:navigator.platform)?"⌘":"Ctrl"});const v=L(!1),y=L(""),w=mu({passive:!1,onEventFired(A){A.ctrlKey&&A.key==="k"&&A.type==="keydown"&&A.preventDefault()}}),f=w["Meta+K"],g=w["Ctrl+K"],x=w.Escape;G(f,A=>{A&&(v.value=!0)}),G(g,A=>{A&&(v.value=!0)}),G(x,A=>{A&&(v.value=!1)});function P(){if(!y.value){e.value=[];return}e.value=pn.value.filter(A=>`${A.meta.description}${A.meta.title}`.includes(y.value)).map(A=>{var F,Y;return{...A,meta:{...A.meta,description:((Y=(F=A.meta)==null?void 0:F.description)==null?void 0:Y.replace(new RegExp(`(${y.value})`,"g"),"<mark>$1</mark>"))||""}}}),e.value.sort((A,F)=>+new Date(F.meta.date)-+new Date(A.meta.date))}const O=M(()=>{var A;return((A=o.value)==null?void 0:A.resultOptimization)??!0});G(()=>y.value,async()=>{var A,F,Y;if(!((A=window==null?void 0:window.__pagefind__)!=null&&A.search))P();else{const J=typeof o.value.customSearchQuery=="function"?o.value.customSearchQuery(y.value):y.value;await((Y=(F=window==null?void 0:window.__pagefind__)==null?void 0:F.search)==null?void 0:Y.call(F,J).then(async Le=>{const nt=(await Promise.all(Le.results.map(re=>re.data()))).map(re=>{var ye;return{route:re.url.startsWith(a.value.base)?re.url:Ge(re.url),meta:{title:re.meta.title,description:re.excerpt,date:(ye=re==null?void 0:re.meta)==null?void 0:ye.date}}}).filter(re=>!O.value||pn.value.some(ye=>ye.route===re.route));e.value=nt.filter(o.value.filter??(()=>!0))}))}ce(()=>{document.querySelectorAll('div[aria-disabled="true"]').forEach(J=>{J.setAttribute("aria-disabled","false")})})});function N(A){A.target===A.currentTarget&&(v.value=!1)}G(()=>v.value,A=>{var F;A?ce(()=>{var Y;(Y=document.querySelector("div[command-dialog-mask]"))==null||Y.addEventListener("click",N)}):(F=document.querySelector("div[command-dialog-mask]"))==null||F.removeEventListener("click",N)});const Q=L(999),X=L(0),U=M(()=>{const F=X.value%Math.ceil(e.value.length/Q.value)*Q.value;return e.value.slice(F,F+Q.value)}),R=cr(),B=Ee();function ne(A){v.value=!1,B.path!==A.value&&R.go(A.value)}const{lang:me}=st(),ae=M(()=>o.value.langReload??!0);return G(()=>me.value,()=>{ae.value&&window.location.reload()}),(A,F)=>{var Y;return c(),m("div",Iu,[p("div",{class:"nav-search-btn-wait",onClick:F[0]||(F[0]=J=>v.value=!0)},[Pu,l.value?C("",!0):(c(),m("span",Au,H(((Y=o.value)==null?void 0:Y.btnPlaceholder)||"Search"),1)),l.value?C("",!0):(c(),m("span",Vu,H(b.value)+" K ",1))]),S(u(Ie).Dialog,{visible:v.value,theme:"algolia"},ur({header:k(()=>{var J;return[S(u(Ie).Input,{value:y.value,"onUpdate:value":F[1]||(F[1]=Le=>y.value=Le),placeholder:((J=o.value)==null?void 0:J.placeholder)||"Search Docs"},null,8,["value","placeholder"])]}),body:k(()=>[p("div",xu,[S(u(Ie).List,null,{default:k(()=>[e.value.length?(c(),E(u(Ie).Group,{key:1,heading:h.value},{default:k(()=>[(c(!0),m(W,null,ee(U.value,J=>(c(),E(u(Ie).Item,{key:J.route,"data-value":J.route,onSelect:ne},{default:k(()=>[p("div",Ou,[p("div",Eu,[p("span",null,H(J.meta.title),1),s.value&&J.meta.date?(c(),m("span",Tu,H(u(ku)(J.meta.date,"yyyy-MM-dd")),1)):C("",!0)]),p("div",{class:"des",innerHTML:J.meta.description},null,8,Ru)])]),_:2},1032,["data-value"]))),128))]),_:1},8,["heading"])):(c(),E(u(Ie).Empty,{key:0},{default:k(()=>{var J;return[te(H(((J=o.value)==null?void 0:J.emptyText)||"No results found."),1)]}),_:1}))]),_:1})])]),_:2},[e.value.length?{name:"footer",fn:k(()=>[p("div",Nu,[p("a",Hu,[Du,S(Lu,{style:{width:"77px"}})])]),Bu]),key:"0"}:void 0]),1032,["visible"])])}}}),Fu=I(ju,[["__scopeId","data-v-3e38d8c7"]]),zu=$({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=D();return(n,r)=>u(e).socialLinks?(c(),E(xt,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):C("",!0)}}),Qu=I(zu,[["__scopeId","data-v-3e8e2c11"]]),Uu=["href"],qu=$({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=D(),{hasSidebar:r}=ve(),{currentLang:a}=Te();return(o,s)=>(c(),m("div",{class:z(["VPNavBarTitle",{"has-sidebar":u(r)}])},[p("a",{class:"title",href:u(n).logoLink??u($t)(u(a).link)},[_(o.$slots,"nav-bar-title-before",{},void 0,!0),u(n).logo?(c(),E(Qe,{key:0,class:"logo",image:u(n).logo},null,8,["image"])):C("",!0),u(n).siteTitle?(c(),m(W,{key:1},[te(H(u(n).siteTitle),1)],64)):u(n).siteTitle===void 0?(c(),m(W,{key:2},[te(H(u(e).title),1)],64)):C("",!0),_(o.$slots,"nav-bar-title-after",{},void 0,!0)],8,Uu)],2))}}),Wu=I(qu,[["__scopeId","data-v-e0604155"]]),Gu={},Ku={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ju=p("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),Xu=p("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),Zu=[Ju,Xu];function Yu(t,e){return c(),m("svg",Ku,Zu)}const Kn=I(Gu,[["render",Yu]]),ed={class:"items"},td={class:"title"},nd=$({__name:"VPNavBarTranslations",setup(t){const{theme:e}=D(),{localeLinks:n,currentLang:r}=Te({correspondingLink:!0});return(a,o)=>u(n).length&&u(r).label?(c(),E(Vt,{key:0,class:"VPNavBarTranslations",icon:Kn,label:u(e).langMenuLabel||"Change language"},{default:k(()=>[p("div",ed,[p("p",td,H(u(r).label),1),(c(!0),m(W,null,ee(u(n),s=>(c(),E(Xe,{key:s.link,item:s},null,8,["item"]))),128))])]),_:1},8,["label"])):C("",!0)}}),rd=I(nd,[["__scopeId","data-v-417a068e"]]),ad=t=>(ie("data-v-18d4faf0"),t=t(),le(),t),od={class:"container"},sd={class:"title"},id={class:"content"},ld=ad(()=>p("div",{class:"curtain"},null,-1)),cd={class:"content-body"},ud=$({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:e}=fn(),{hasSidebar:n}=ve(),{frontmatter:r}=D(),a=L({});return mn(()=>{a.value={"has-sidebar":n.value,top:r.value.layout==="home"&&e.value===0}}),(o,s)=>(c(),m("div",{class:z(["VPNavBar",a.value])},[p("div",od,[p("div",sd,[S(Wu,null,{"nav-bar-title-before":k(()=>[_(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[_(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),p("div",id,[ld,p("div",cd,[_(o.$slots,"nav-bar-content-before",{},void 0,!0),S(Fu,{class:"search"}),S(Fi,{class:"menu"}),S(rd,{class:"translations"}),S(Es,{class:"appearance"}),S(Qu,{class:"social-links"}),S(Li,{class:"extra"}),_(o.$slots,"nav-bar-content-after",{},void 0,!0),S(Oi,{class:"hamburger",active:o.isScreenOpen,onClick:s[0]||(s[0]=i=>o.$emit("toggle-screen"))},null,8,["active"])])])])],2))}}),dd=I(ud,[["__scopeId","data-v-18d4faf0"]]),pd={key:0,class:"VPNavScreenAppearance"},md={class:"text"},hd=$({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=D();return(r,a)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),m("div",pd,[p("p",md,H(u(n).darkModeSwitchLabel||"Appearance"),1),S(Pt)])):C("",!0)}}),fd=I(hd,[["__scopeId","data-v-0c992459"]]),vd=$({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=Je("close-screen");return(n,r)=>(c(),E(pe,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:k(()=>[te(H(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),gd=I(vd,[["__scopeId","data-v-4af47512"]]),_d={},bd={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},yd=p("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),kd=[yd];function wd(t,e){return c(),m("svg",bd,kd)}const Sd=I(_d,[["render",wd]]),$d=$({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=Je("close-screen");return(n,r)=>(c(),E(pe,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:k(()=>[te(H(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Jn=I($d,[["__scopeId","data-v-5f784394"]]),Cd={class:"VPNavScreenMenuGroupSection"},Md={key:0,class:"title"},Ld=$({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),m("div",Cd,[e.text?(c(),m("p",Md,H(e.text),1)):C("",!0),(c(!0),m(W,null,ee(e.items,r=>(c(),E(Jn,{key:r.text,item:r},null,8,["item"]))),128))]))}}),Id=I(Ld,[["__scopeId","data-v-18d517aa"]]),Pd=["aria-controls","aria-expanded"],Ad=["innerHTML"],Vd=["id"],xd={key:1,class:"group"},Od=$({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=L(!1),r=M(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function a(){n.value=!n.value}return(o,s)=>(c(),m("div",{class:z(["VPNavScreenMenuGroup",{open:n.value}])},[p("button",{class:"button","aria-controls":r.value,"aria-expanded":n.value,onClick:a},[p("span",{class:"button-text",innerHTML:o.text},null,8,Ad),S(Sd,{class:"button-icon"})],8,Pd),p("div",{id:r.value,class:"items"},[(c(!0),m(W,null,ee(o.items,i=>(c(),m(W,{key:i.text},["link"in i?(c(),m("div",{key:i.text,class:"item"},[S(Jn,{item:i},null,8,["item"])])):(c(),m("div",xd,[S(Id,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,Vd)],2))}}),Ed=I(Od,[["__scopeId","data-v-b66aaaac"]]),Td={key:0,class:"VPNavScreenMenu"},Rd=$({__name:"VPNavScreenMenu",setup(t){const{theme:e}=D();return(n,r)=>u(e).nav?(c(),m("nav",Td,[(c(!0),m(W,null,ee(u(e).nav,a=>(c(),m(W,{key:a.text},["link"in a?(c(),E(gd,{key:0,item:a},null,8,["item"])):(c(),E(Ed,{key:1,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):C("",!0)}}),Nd=$({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=D();return(n,r)=>u(e).socialLinks?(c(),E(xt,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):C("",!0)}}),Hd={class:"list"},Dd=$({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=Te({correspondingLink:!0}),r=L(!1);function a(){r.value=!r.value}return(o,s)=>u(e).length&&u(n).label?(c(),m("div",{key:0,class:z(["VPNavScreenTranslations",{open:r.value}])},[p("button",{class:"title",onClick:a},[S(Kn,{class:"icon lang"}),te(" "+H(u(n).label)+" ",1),S(Mn,{class:"icon chevron"})]),p("ul",Hd,[(c(!0),m(W,null,ee(u(e),i=>(c(),m("li",{key:i.link,class:"item"},[S(pe,{class:"link",href:i.link},{default:k(()=>[te(H(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):C("",!0)}}),Bd=I(Dd,[["__scopeId","data-v-605851c6"]]),jd={class:"container"},Fd=$({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=L(null),n=kn(Pe?document.body:null);return(r,a)=>(c(),E(We,{name:"fade",onEnter:a[0]||(a[0]=o=>n.value=!0),onAfterLeave:a[1]||(a[1]=o=>n.value=!1)},{default:k(()=>[r.open?(c(),m("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[p("div",jd,[_(r.$slots,"nav-screen-content-before",{},void 0,!0),S(Rd,{class:"menu"}),S(Bd,{class:"translations"}),S(fd,{class:"appearance"}),S(Nd,{class:"social-links"}),_(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):C("",!0)]),_:3}))}}),zd=I(Fd,[["__scopeId","data-v-bd059bce"]]),Qd={key:0,class:"VPNav"},Ud=$({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:r}=ps(),{frontmatter:a}=D(),o=M(()=>a.value.navbar!==!1);return wt("close-screen",n),_e(()=>{Pe&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(s,i)=>o.value?(c(),m("header",Qd,[S(dd,{"is-screen-open":u(e),onToggleScreen:u(r)},{"nav-bar-title-before":k(()=>[_(s.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[_(s.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[_(s.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[_(s.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),S(zd,{open:u(e)},{"nav-screen-content-before":k(()=>[_(s.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[_(s.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):C("",!0)}}),qd=I(Ud,[["__scopeId","data-v-b302a458"]]),Wd=t=>(ie("data-v-13414bb8"),t=t(),le(),t),Gd=["role","tabindex"],Kd=Wd(()=>p("div",{class:"indicator"},null,-1)),Jd={key:1,class:"items"},Xd=$({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:r,isLink:a,isActiveLink:o,hasActiveLink:s,hasChildren:i,toggle:l}=Tr(M(()=>e.item)),d=M(()=>i.value?"section":"div"),h=M(()=>a.value?"a":"div"),b=M(()=>i.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),v=M(()=>a.value?void 0:"button"),y=M(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:n.value},{"is-link":a.value},{"is-active":o.value},{"has-active":s.value}]);function w(g){"key"in g&&g.key!=="Enter"||!e.item.link&&l()}function f(){e.item.link&&l()}return(g,x)=>{const P=Me("VPSidebarItem",!0);return c(),E(we(d.value),{class:z(["VPSidebarItem",y.value])},{default:k(()=>[g.item.text?(c(),m("div",Be({key:0,class:"item",role:v.value},dr(g.item.items?{click:w,keydown:w}:{},!0),{tabindex:g.item.items&&0}),[Kd,g.item.link?(c(),E(pe,{key:0,tag:h.value,class:"link",href:g.item.link,rel:g.item.rel,target:g.item.target},{default:k(()=>[(c(),E(we(b.value),{class:"text",innerHTML:g.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),E(we(b.value),{key:1,class:"text",innerHTML:g.item.text},null,8,["innerHTML"])),g.item.collapsed!=null?(c(),m("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:f,onKeydown:pr(f,["enter"]),tabindex:"0"},[S(It,{class:"caret-icon"})],32)):C("",!0)],16,Gd)):C("",!0),g.item.items&&g.item.items.length?(c(),m("div",Jd,[g.depth<5?(c(!0),m(W,{key:0},ee(g.item.items,O=>(c(),E(P,{key:O.text,item:O,depth:g.depth+1},null,8,["item","depth"]))),128)):C("",!0)])):C("",!0)]),_:1},8,["class"])}}}),Zd=I(Xd,[["__scopeId","data-v-13414bb8"]]),Xn=t=>(ie("data-v-e5410bfe"),t=t(),le(),t),Yd=Xn(()=>p("div",{class:"curtain"},null,-1)),e0={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},t0=Xn(()=>p("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),n0=$({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=ve(),r=t,a=L(null),o=kn(Pe?document.body:null);return G([r,a],()=>{var s;r.open?(o.value=!0,(s=a.value)==null||s.focus()):o.value=!1},{immediate:!0,flush:"post"}),(s,i)=>u(n)?(c(),m("aside",{key:0,class:z(["VPSidebar",{open:s.open}]),ref_key:"navEl",ref:a,onClick:i[0]||(i[0]=mr(()=>{},["stop"]))},[Yd,p("nav",e0,[t0,_(s.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),m(W,null,ee(u(e),l=>(c(),m("div",{key:l.text,class:"group"},[S(Zd,{item:l,depth:0},null,8,["item"])]))),128)),_(s.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):C("",!0)}}),r0=I(n0,[["__scopeId","data-v-e5410bfe"]]),a0=$({__name:"VPSkipLink",setup(t){const e=Ee(),n=L();G(()=>e.path,()=>n.value.focus());function r({target:a}){const o=document.getElementById(decodeURIComponent(a.hash).slice(1));if(o){const s=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",s)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",s),o.focus(),window.scrollTo(0,0)}}return(a,o)=>(c(),m(W,null,[p("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),p("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}}),o0=I(a0,[["__scopeId","data-v-e7eff6c1"]]),s0=$({__name:"Layout",setup(t){const{isOpen:e,open:n,close:r}=ve(),a=Ee();G(()=>a.path,r),Er(e,r);const{frontmatter:o}=D(),s=hr(),i=M(()=>!!s["home-hero-image"]);return wt("hero-image-slot-exists",i),(l,d)=>{const h=Me("Content");return u(o).layout!==!1?(c(),m("div",{key:0,class:z(["Layout",u(o).pageClass])},[_(l.$slots,"layout-top",{},void 0,!0),S(o0),S(br,{class:"backdrop",show:u(e),onClick:u(r)},null,8,["show","onClick"]),S(qd,null,{"nav-bar-title-before":k(()=>[_(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[_(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[_(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[_(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":k(()=>[_(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[_(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),S(ds,{open:u(e),onOpenMenu:u(n)},null,8,["open","onOpenMenu"]),S(r0,{open:u(e)},{"sidebar-nav-before":k(()=>[_(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":k(()=>[_(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),S(zo,{"data-pagefind-body":""},{"page-top":k(()=>[_(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[_(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":k(()=>[_(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":k(()=>[_(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":k(()=>[_(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[_(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[_(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[_(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[_(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":k(()=>[_(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[_(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[_(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":k(()=>[_(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[_(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":k(()=>[_(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[_(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[_(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[_(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[_(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[_(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),S(Go),_(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),E(h,{key:1}))}}}),i0=I(s0,[["__scopeId","data-v-ab453002"]]),g0={Layout:i0,enhanceApp:({app:t})=>{t.component("Badge",vr)}};export{Jr as V,Z as a,bu as b,h0 as c,du as d,de as e,c0 as f,Lc as g,u0 as h,Et as i,m0 as j,p0 as k,v0 as l,f0 as m,g0 as n,d0 as o,Ye as t,eu as u};
