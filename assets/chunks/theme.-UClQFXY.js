import{d as S,o as c,c as h,r as _,a as te,t as D,n as z,_ as I,b as E,w as k,e as C,T as We,u as ot,i as tr,l as nr,f as Ge,g as M,h as L,j as fe,k as p,m as u,p as ie,q as le,s as $e,v as Pe,x as it,y as G,z as _e,A as yt,B as hn,C as rr,D as Me,F as W,E as ee,G as Ke,H as xe,I as $,J as mn,K as we,L as Ee,M as Re,N as Je,O as ar,P as ce,Q as fn,R as vn,S as kt,U as Se,V as wt,W as $t,X as sr,Y as gn,Z as _n,$ as or,a0 as ze,a1 as bn,a2 as yn,a3 as ir,a4 as lr,a5 as cr,a6 as ur,a7 as kn,a8 as dr,a9 as pr,aa as hr,ab as mr}from"./framework.gZp3ZZFg.js";const fr=S({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(c(),h("span",{class:z(["VPBadge",e.type])},[_(e.$slots,"default",{},()=>[te(D(e.text),1)],!0)],2))}}),vr=I(fr,[["__scopeId","data-v-dd00062f"]]),gr={key:0,class:"VPBackdrop"},_r=S({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(c(),E(We,{name:"fade"},{default:k(()=>[e.show?(c(),h("div",gr)):C("",!0)]),_:1}))}}),br=I(_r,[["__scopeId","data-v-f14a2e87"]]),B=ot;function yr(t,e){let n,r=!1;return()=>{n&&clearTimeout(n),r?n=setTimeout(t,e):(t(),(r=!0)&&setTimeout(()=>r=!1,e))}}function lt(t){return/^\//.test(t)?t:`/${t}`}function St(t){const{pathname:e,search:n,hash:r,protocol:a}=new URL(t,"http://a.com");if(tr(t)||t.startsWith("#")||!a.startsWith("http")||/\.(?!html|md)\w+($|\?)/i.test(t)&&nr(t))return t;const{site:s}=B(),o=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,s.value.cleanUrls?"":".html")}${n}${r}`);return Ge(o)}function Te({removeCurrent:t=!0,correspondingLink:e=!1}={}){const{site:n,localeIndex:r,page:a,theme:s}=B(),o=M(()=>{var l,d;return{label:(l=n.value.locales[r.value])==null?void 0:l.label,link:((d=n.value.locales[r.value])==null?void 0:d.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:M(()=>Object.entries(n.value.locales).flatMap(([l,d])=>t&&o.value.label===d.label?[]:{text:d.label,link:kr(d.link||(l==="root"?"/":`/${l}/`),s.value.i18nRouting!==!1&&e,a.value.relativePath.slice(o.value.link.length-1),!n.value.cleanUrls)})),currentLang:o}}function kr(t,e,n,r){return e?t.replace(/\/$/,"")+lt(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):t}const wr=t=>(ie("data-v-0d8ccc9a"),t=t(),le(),t),$r={class:"NotFound"},Sr={class:"code"},Cr={class:"title"},Mr=wr(()=>p("div",{class:"divider"},null,-1)),Lr={class:"quote"},Ir={class:"action"},Pr=["href","aria-label"],Vr=S({__name:"NotFound",setup(t){const{site:e,theme:n}=B(),{localeLinks:r}=Te({removeCurrent:!1}),a=L("/");return fe(()=>{var o;const s=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");r.value.length&&(a.value=((o=r.value.find(({link:i})=>i.startsWith(s)))==null?void 0:o.link)||r.value[0].link)}),(s,o)=>{var i,l,d,m,b;return c(),h("div",$r,[p("p",Sr,D(((i=u(n).notFound)==null?void 0:i.code)??"404"),1),p("h1",Cr,D(((l=u(n).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Mr,p("blockquote",Lr,D(((d=u(n).notFound)==null?void 0:d.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),p("div",Ir,[p("a",{class:"link",href:u(Ge)(a.value),"aria-label":((m=u(n).notFound)==null?void 0:m.linkLabel)??"go to home"},D(((b=u(n).notFound)==null?void 0:b.linkText)??"Take me home"),9,Pr)])])}}}),Ar=I(Vr,[["__scopeId","data-v-0d8ccc9a"]]);function wn(t,e){if(Array.isArray(t))return Fe(t);if(t==null)return[];e=lt(e);const n=Object.keys(t).sort((a,s)=>s.split("/").length-a.split("/").length).find(a=>e.startsWith(lt(a))),r=n?t[n]:[];return Array.isArray(r)?Fe(r):Fe(r.items,r.base)}function xr(t){const e=[];let n=0;for(const r in t){const a=t[r];if(a.items){n=e.push(a);continue}e[n]||e.push({items:[]}),e[n].items.push(a)}return e}function Or(t){const e=[];function n(r){for(const a of r)a.text&&a.link&&e.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&n(a.items)}return n(t),e}function ct(t,e){return Array.isArray(e)?e.some(n=>ct(t,n)):$e(t,e.link)?!0:e.items?ct(t,e.items):!1}function Fe(t,e){return[...t].map(n=>{const r={...n},a=r.base||e;return a&&r.link&&(r.link=a+r.link),r.items&&(r.items=Fe(r.items,a)),r})}function ve(){const{frontmatter:t,page:e,theme:n}=B(),r=it("(min-width: 960px)"),a=L(!1),s=M(()=>{const f=n.value.sidebar,g=e.value.relativePath;return f?wn(f,g):[]}),o=L(s.value);G(s,(f,g)=>{JSON.stringify(f)!==JSON.stringify(g)&&(o.value=s.value)});const i=M(()=>t.value.sidebar!==!1&&o.value.length>0&&t.value.layout!=="home"),l=M(()=>d?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),d=M(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),m=M(()=>i.value&&r.value),b=M(()=>i.value?xr(o.value):[]);function v(){a.value=!0}function y(){a.value=!1}function w(){a.value?y():v()}return{isOpen:a,sidebar:o,sidebarGroups:b,hasSidebar:i,hasAside:d,leftAside:l,isSidebarEnabled:m,open:v,close:y,toggle:w}}function Er(t,e){let n;_e(()=>{n=t.value?document.activeElement:void 0}),fe(()=>{window.addEventListener("keyup",r)}),yt(()=>{window.removeEventListener("keyup",r)});function r(a){a.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}const $n=L(Pe?location.hash:"");Pe&&window.addEventListener("hashchange",()=>{$n.value=location.hash});function Tr(t){const{page:e}=B(),n=L(!1),r=M(()=>t.value.collapsed!=null),a=M(()=>!!t.value.link),s=L(!1),o=()=>{s.value=$e(e.value.relativePath,t.value.link)};G([e,t,$n],o),fe(o);const i=M(()=>s.value?!0:t.value.items?ct(e.value.relativePath,t.value.items):!1),l=M(()=>!!(t.value.items&&t.value.items.length));_e(()=>{n.value=!!(r.value&&t.value.collapsed)}),hn(()=>{(s.value||i.value)&&(n.value=!1)});function d(){r.value&&(n.value=!n.value)}return{collapsed:n,collapsible:r,isLink:a,isActiveLink:s,hasActiveLink:i,hasChildren:l,toggle:d}}function Nr(){const{hasSidebar:t}=ve(),e=it("(min-width: 960px)"),n=it("(min-width: 1280px)");return{isAsideEnabled:M(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const Hr=71;function Ct(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Mt(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const r=Number(n.tagName[1]);return{title:Dr(n),link:"#"+n.id,level:r}});return Br(e,t)}function Dr(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function Br(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,a]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;t=t.filter(o=>o.level>=r&&o.level<=a);const s=[];e:for(let o=0;o<t.length;o++){const i=t[o];if(o===0)s.push(i);else{for(let l=o-1;l>=0;l--){const d=t[l];if(d.level<i.level){(d.children||(d.children=[])).push(i);continue e}}s.push(i)}}return s}function Rr(t,e){const{isAsideEnabled:n}=Nr(),r=yr(s,100);let a=null;fe(()=>{requestAnimationFrame(s),window.addEventListener("scroll",r)}),rr(()=>{o(location.hash)}),yt(()=>{window.removeEventListener("scroll",r)});function s(){if(!n.value)return;const i=[].slice.call(t.value.querySelectorAll(".outline-link")),l=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(y=>i.some(w=>w.hash===y.hash&&y.offsetParent!==null)),d=window.scrollY,m=window.innerHeight,b=document.body.offsetHeight,v=Math.abs(d+m-b)<1;if(l.length&&v){o(l[l.length-1].hash);return}for(let y=0;y<l.length;y++){const w=l[y],f=l[y+1],[g,x]=Fr(y,w,f);if(g){o(x);return}}}function o(i){a&&a.classList.remove("active"),i==null?a=null:a=t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const l=a;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+33+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Nt(t){return t.parentElement.offsetTop-Hr}function Fr(t,e,n){const r=window.scrollY;return t===0&&r===0?[!0,null]:r<Nt(e)?[!1,null]:!n||r<Nt(n)?[!0,e.hash]:[!1,null]}const jr=["href","title"],zr=S({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const r=n.href.split("#")[1],a=document.getElementById(decodeURIComponent(r));a==null||a.focus({preventScroll:!0})}return(n,r)=>{const a=Me("VPDocOutlineItem",!0);return c(),h("ul",{class:z(n.root?"root":"nested")},[(c(!0),h(W,null,ee(n.headers,({children:s,link:o,title:i})=>(c(),h("li",null,[p("a",{class:"outline-link",href:o,onClick:e,title:i},D(i),9,jr),s!=null&&s.length?(c(),E(a,{key:0,headers:s},null,8,["headers"])):C("",!0)]))),256))],2)}}}),Lt=I(zr,[["__scopeId","data-v-04c2665f"]]),Ur=t=>(ie("data-v-72c067c0"),t=t(),le(),t),Qr={class:"content"},qr={class:"outline-title",role:"heading","aria-level":"2"},Wr={"aria-labelledby":"doc-outline-aria-label"},Gr=Ur(()=>p("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Kr=S({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=B(),r=Ke([]);xe(()=>{r.value=Mt(e.value.outline??n.value.outline)});const a=L(),s=L();return Rr(a,s),(o,i)=>(c(),h("div",{class:z(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:a,role:"navigation"},[p("div",Qr,[p("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),p("div",qr,D(u(Ct)(u(n))),1),p("nav",Wr,[Gr,$(Lt,{headers:r.value,root:!0},null,8,["headers"])])])],2))}}),Jr=I(Kr,[["__scopeId","data-v-72c067c0"]]),Xr={class:"VPDocAsideCarbonAds"},Zr=S({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,r)=>(c(),h("div",Xr,[$(u(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Yr=t=>(ie("data-v-1be47ae8"),t=t(),le(),t),ea={class:"VPDocAside"},ta=Yr(()=>p("div",{class:"spacer"},null,-1)),na=S({__name:"VPDocAside",setup(t){const{theme:e}=B();return(n,r)=>(c(),h("div",ea,[_(n.$slots,"aside-top",{},void 0,!0),_(n.$slots,"aside-outline-before",{},void 0,!0),$(Jr),_(n.$slots,"aside-outline-after",{},void 0,!0),ta,_(n.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(c(),E(Zr,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):C("",!0),_(n.$slots,"aside-ads-after",{},void 0,!0),_(n.$slots,"aside-bottom",{},void 0,!0)]))}}),ra=I(na,[["__scopeId","data-v-1be47ae8"]]);function aa(){const{theme:t,page:e}=B();return M(()=>{const{text:n="Edit this page",pattern:r=""}=t.value.editLink||{};let a;return typeof r=="function"?a=r(e.value):a=r.replace(/:path/g,e.value.filePath),{url:a,text:n}})}function sa(){const{page:t,theme:e,frontmatter:n}=B();return M(()=>{var l,d,m,b,v,y,w,f;const r=wn(e.value.sidebar,t.value.relativePath),a=Or(r),s=a.findIndex(g=>$e(t.value.relativePath,g.link)),o=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!n.value.prev||n.value.prev===!1,i=((d=e.value.docFooter)==null?void 0:d.next)===!1&&!n.value.next||n.value.next===!1;return{prev:o?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((m=a[s-1])==null?void 0:m.docFooterText)??((b=a[s-1])==null?void 0:b.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((v=a[s-1])==null?void 0:v.link)},next:i?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((y=a[s+1])==null?void 0:y.docFooterText)??((w=a[s+1])==null?void 0:w.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((f=a[s+1])==null?void 0:f.link)}}})}const oa={},ia={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},la=p("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),ca=p("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),ua=[la,ca];function da(t,e){return c(),h("svg",ia,ua)}const pa=I(oa,[["render",da]]),pe=S({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=M(()=>e.tag??(e.href?"a":"span")),r=M(()=>e.href&&mn.test(e.href));return(a,s)=>(c(),E(we(n.value),{class:z(["VPLink",{link:a.href,"vp-external-link-icon":r.value,"no-icon":a.noIcon}]),href:a.href?u(St)(a.href):void 0,target:a.target??(r.value?"_blank":void 0),rel:a.rel??(r.value?"noreferrer":void 0)},{default:k(()=>[_(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),ha={class:"VPLastUpdated"},ma=["datetime"],fa=S({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,frontmatter:r,lang:a}=B(),s=M(()=>new Date(r.value.lastUpdated??n.value.lastUpdated)),o=M(()=>s.value.toISOString()),i=L("");return fe(()=>{_e(()=>{var l,d,m;i.value=new Intl.DateTimeFormat((d=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&d.forceLocale?a.value:void 0,((m=e.value.lastUpdated)==null?void 0:m.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(l,d)=>{var m;return c(),h("p",ha,[te(D(((m=u(e).lastUpdated)==null?void 0:m.text)||u(e).lastUpdatedText||"Last updated")+": ",1),p("time",{datetime:o.value},D(i.value),9,ma)])}}}),va=I(fa,[["__scopeId","data-v-652c7874"]]),ga={key:0,class:"VPDocFooter"},_a={key:0,class:"edit-info"},ba={key:0,class:"edit-link"},ya={key:1,class:"last-updated"},ka={key:1,class:"prev-next"},wa={class:"pager"},$a=["innerHTML"],Sa=["innerHTML"],Ca={class:"pager"},Ma=["innerHTML"],La=["innerHTML"],Ia=S({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:r}=B(),a=aa(),s=sa(),o=M(()=>e.value.editLink&&r.value.editLink!==!1),i=M(()=>n.value.lastUpdated&&r.value.lastUpdated!==!1),l=M(()=>o.value||i.value||s.value.prev||s.value.next);return(d,m)=>{var b,v,y,w;return l.value?(c(),h("footer",ga,[_(d.$slots,"doc-footer-before",{},void 0,!0),o.value||i.value?(c(),h("div",_a,[o.value?(c(),h("div",ba,[$(pe,{class:"edit-link-button",href:u(a).url,"no-icon":!0},{default:k(()=>[$(pa,{class:"edit-link-icon","aria-label":"edit icon"}),te(" "+D(u(a).text),1)]),_:1},8,["href"])])):C("",!0),i.value?(c(),h("div",ya,[$(va)])):C("",!0)])):C("",!0),(b=u(s).prev)!=null&&b.link||(v=u(s).next)!=null&&v.link?(c(),h("nav",ka,[p("div",wa,[(y=u(s).prev)!=null&&y.link?(c(),E(pe,{key:0,class:"pager-link prev",href:u(s).prev.link},{default:k(()=>{var f;return[p("span",{class:"desc",innerHTML:((f=u(e).docFooter)==null?void 0:f.prev)||"Previous page"},null,8,$a),p("span",{class:"title",innerHTML:u(s).prev.text},null,8,Sa)]}),_:1},8,["href"])):C("",!0)]),p("div",Ca,[(w=u(s).next)!=null&&w.link?(c(),E(pe,{key:0,class:"pager-link next",href:u(s).next.link},{default:k(()=>{var f;return[p("span",{class:"desc",innerHTML:((f=u(e).docFooter)==null?void 0:f.next)||"Next page"},null,8,Ma),p("span",{class:"title",innerHTML:u(s).next.text},null,8,La)]}),_:1},8,["href"])):C("",!0)])])):C("",!0)])):C("",!0)}}}),Pa=I(Ia,[["__scopeId","data-v-0eceaff8"]]),Va={},Aa={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},xa=p("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"},null,-1),Oa=[xa];function Ea(t,e){return c(),h("svg",Aa,Oa)}const It=I(Va,[["render",Ea]]),Ta={key:0,class:"VPDocOutlineDropdown"},Na={key:0,class:"items"},Ha=S({__name:"VPDocOutlineDropdown",setup(t){const{frontmatter:e,theme:n}=B(),r=L(!1);xe(()=>{r.value=!1});const a=Ke([]);return xe(()=>{a.value=Mt(e.value.outline??n.value.outline)}),(s,o)=>a.value.length>0?(c(),h("div",Ta,[p("button",{onClick:o[0]||(o[0]=i=>r.value=!r.value),class:z({open:r.value})},[te(D(u(Ct)(u(n)))+" ",1),$(It,{class:"icon"})],2),r.value?(c(),h("div",Na,[$(Lt,{headers:a.value},null,8,["headers"])])):C("",!0)])):C("",!0)}}),Da=I(Ha,[["__scopeId","data-v-7339dafe"]]),Ba=t=>(ie("data-v-695f753e"),t=t(),le(),t),Ra={class:"container"},Fa=Ba(()=>p("div",{class:"aside-curtain"},null,-1)),ja={class:"aside-container"},za={class:"aside-content"},Ua={class:"content"},Qa={class:"content-container"},qa={class:"main"},Wa=S({__name:"VPDoc",setup(t){const{theme:e}=B(),n=Ee(),{hasSidebar:r,hasAside:a,leftAside:s}=ve(),o=M(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,l)=>{const d=Me("Content");return c(),h("div",{class:z(["VPDoc",{"has-sidebar":u(r),"has-aside":u(a)}])},[_(i.$slots,"doc-top",{},void 0,!0),p("div",Ra,[u(a)?(c(),h("div",{key:0,class:z(["aside",{"left-aside":u(s)}])},[Fa,p("div",ja,[p("div",za,[$(ra,null,{"aside-top":k(()=>[_(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[_(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[_(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[_(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[_(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[_(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):C("",!0),p("div",Ua,[p("div",Qa,[_(i.$slots,"doc-before",{},void 0,!0),$(Da),p("main",qa,[$(d,{class:z(["vp-doc",[o.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),$(Pa,null,{"doc-footer-before":k(()=>[_(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),_(i.$slots,"doc-after",{},void 0,!0)])])]),_(i.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Ga=I(Wa,[["__scopeId","data-v-695f753e"]]),Ka=S({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{}},setup(t){const e=t,n=M(()=>e.href&&mn.test(e.href)),r=M(()=>e.tag||e.href?"a":"button");return(a,s)=>(c(),E(we(r.value),{class:z(["VPButton",[a.size,a.theme]]),href:a.href?u(St)(a.href):void 0,target:n.value?"_blank":void 0,rel:n.value?"noreferrer":void 0},{default:k(()=>[te(D(a.text),1)]),_:1},8,["class","href","target","rel"]))}}),Ja=I(Ka,[["__scopeId","data-v-e92859e2"]]),Xa=["src","alt"],Za=S({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const r=Me("VPImage",!0);return e.image?(c(),h(W,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),h("img",Re({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(Ge)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Xa)):(c(),h(W,{key:1},[$(r,Re({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),$(r,Re({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):C("",!0)}}}),Ue=I(Za,[["__scopeId","data-v-863096c3"]]),Ya=t=>(ie("data-v-0a1d7c47"),t=t(),le(),t),es={class:"container"},ts={class:"main"},ns={key:0,class:"name"},rs=["innerHTML"],as=["innerHTML"],ss=["innerHTML"],os={key:0,class:"actions"},is={key:0,class:"image"},ls={class:"image-container"},cs=Ya(()=>p("div",{class:"image-bg"},null,-1)),us=S({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=Je("hero-image-slot-exists");return(n,r)=>(c(),h("div",{class:z(["VPHero",{"has-image":n.image||u(e)}])},[p("div",es,[p("div",ts,[_(n.$slots,"home-hero-info",{},()=>[n.name?(c(),h("h1",ns,[p("span",{innerHTML:n.name,class:"clip"},null,8,rs)])):C("",!0),n.text?(c(),h("p",{key:1,innerHTML:n.text,class:"text"},null,8,as)):C("",!0),n.tagline?(c(),h("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,ss)):C("",!0)],!0),n.actions?(c(),h("div",os,[(c(!0),h(W,null,ee(n.actions,a=>(c(),h("div",{key:a.link,class:"action"},[$(Ja,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link},null,8,["theme","text","href"])]))),128))])):C("",!0)]),n.image||u(e)?(c(),h("div",is,[p("div",ls,[cs,_(n.$slots,"home-hero-image",{},()=>[n.image?(c(),E(Ue,{key:0,class:"image-src",image:n.image},null,8,["image"])):C("",!0)],!0)])])):C("",!0)])],2))}}),ds=I(us,[["__scopeId","data-v-0a1d7c47"]]),ps=S({__name:"VPHomeHero",setup(t){const{frontmatter:e}=B();return(n,r)=>u(e).hero?(c(),E(ds,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info":k(()=>[_(n.$slots,"home-hero-info")]),"home-hero-image":k(()=>[_(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):C("",!0)}}),hs={},ms={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},fs=p("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),vs=[fs];function gs(t,e){return c(),h("svg",ms,vs)}const _s=I(hs,[["render",gs]]),bs={class:"box"},ys={key:0,class:"icon"},ks=["innerHTML"],ws=["innerHTML"],$s=["innerHTML"],Ss={key:4,class:"link-text"},Cs={class:"link-text-value"},Ms=S({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(c(),E(pe,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:k(()=>[p("article",bs,[typeof e.icon=="object"&&e.icon.wrap?(c(),h("div",ys,[$(Ue,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),E(Ue,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),h("div",{key:2,class:"icon",innerHTML:e.icon},null,8,ks)):C("",!0),p("h2",{class:"title",innerHTML:e.title},null,8,ws),e.details?(c(),h("p",{key:3,class:"details",innerHTML:e.details},null,8,$s)):C("",!0),e.linkText?(c(),h("div",Ss,[p("p",Cs,[te(D(e.linkText)+" ",1),$(_s,{class:"link-text-icon"})])])):C("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ls=I(Ms,[["__scopeId","data-v-d6279a83"]]),Is={key:0,class:"VPFeatures"},Ps={class:"container"},Vs={class:"items"},As=S({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=M(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,a)=>r.features?(c(),h("div",Is,[p("div",Ps,[p("div",Vs,[(c(!0),h(W,null,ee(r.features,s=>(c(),h("div",{key:s.title,class:z(["item",[n.value]])},[$(Ls,{icon:s.icon,title:s.title,details:s.details,link:s.link,"link-text":s.linkText,rel:s.rel,target:s.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):C("",!0)}}),xs=I(As,[["__scopeId","data-v-e6dd66bb"]]),Os=S({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=B();return(n,r)=>u(e).features?(c(),E(xs,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):C("",!0)}}),Es={class:"VPHome"},Ts=S({__name:"VPHome",setup(t){return(e,n)=>{const r=Me("Content");return c(),h("div",Es,[_(e.$slots,"home-hero-before",{},void 0,!0),$(ps,null,{"home-hero-info":k(()=>[_(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[_(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),_(e.$slots,"home-hero-after",{},void 0,!0),_(e.$slots,"home-features-before",{},void 0,!0),$(Os),_(e.$slots,"home-features-after",{},void 0,!0),$(r)])}}}),Ns=I(Ts,[["__scopeId","data-v-5c7c4633"]]),Hs={},Ds={class:"VPPage"};function Bs(t,e){const n=Me("Content");return c(),h("div",Ds,[_(t.$slots,"page-top"),$(n),_(t.$slots,"page-bottom")])}const Rs=I(Hs,[["render",Bs]]),Fs=S({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=B(),{hasSidebar:r}=ve();return(a,s)=>(c(),h("div",{class:z(["VPContent",{"has-sidebar":u(r),"is-home":u(n).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?_(a.$slots,"not-found",{key:0},()=>[$(Ar)],!0):u(n).layout==="page"?(c(),E(Rs,{key:1},{"page-top":k(()=>[_(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[_(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(n).layout==="home"?(c(),E(Ns,{key:2},{"home-hero-before":k(()=>[_(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":k(()=>[_(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[_(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[_(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[_(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[_(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(n).layout&&u(n).layout!=="doc"?(c(),E(we(u(n).layout),{key:3})):(c(),E(Ga,{key:4},{"doc-top":k(()=>[_(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[_(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":k(()=>[_(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[_(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[_(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":k(()=>[_(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":k(()=>[_(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[_(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[_(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[_(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":k(()=>[_(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),js=I(Fs,[["__scopeId","data-v-e4bdd7c7"]]),zs={class:"container"},Us=["innerHTML"],Qs=["innerHTML"],qs=S({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=B(),{hasSidebar:r}=ve();return(a,s)=>u(e).footer&&u(n).footer!==!1?(c(),h("footer",{key:0,class:z(["VPFooter",{"has-sidebar":u(r)}])},[p("div",zs,[u(e).footer.message?(c(),h("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,Us)):C("",!0),u(e).footer.copyright?(c(),h("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,Qs)):C("",!0)])],2)):C("",!0)}}),Ws=I(qs,[["__scopeId","data-v-518559dd"]]),Gs={class:"header"},Ks={class:"outline"},Js=S({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=B(),r=L(!1),a=L(0),s=L();xe(()=>{r.value=!1});function o(){r.value=!r.value,a.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function i(d){d.target.classList.contains("outline-link")&&(s.value&&(s.value.style.transition="none"),ce(()=>{r.value=!1}))}function l(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(d,m)=>(c(),h("div",{class:"VPLocalNavOutlineDropdown",style:ar({"--vp-vh":a.value+"px"})},[d.headers.length>0?(c(),h("button",{key:0,onClick:o,class:z({open:r.value})},[te(D(u(Ct)(u(n)))+" ",1),$(It,{class:"icon"})],2)):(c(),h("button",{key:1,onClick:l},D(u(n).returnToTopLabel||"Return to top"),1)),$(We,{name:"flyout"},{default:k(()=>[r.value?(c(),h("div",{key:0,ref_key:"items",ref:s,class:"items",onClick:i},[p("div",Gs,[p("a",{class:"top-link",href:"#",onClick:l},D(u(n).returnToTopLabel||"Return to top"),1)]),p("div",Ks,[$(Lt,{headers:d.headers},null,8,["headers"])])],512)):C("",!0)]),_:1})],4))}}),Xs=I(Js,[["__scopeId","data-v-3d5ae069"]]),Zs={},Ys={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},eo=p("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),to=p("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),no=p("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),ro=p("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),ao=[eo,to,no,ro];function so(t,e){return c(),h("svg",Ys,ao)}const oo=I(Zs,[["render",so]]),io=["aria-expanded"],lo={class:"menu-text"},co=S({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=B(),{hasSidebar:r}=ve(),{y:a}=fn(),s=Ke([]),o=L(0);fe(()=>{o.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),xe(()=>{s.value=Mt(n.value.outline??e.value.outline)});const i=M(()=>s.value.length===0&&!r.value),l=M(()=>({VPLocalNav:!0,fixed:i.value,"reached-top":a.value>=o.value}));return(d,m)=>u(n).layout!=="home"&&(!i.value||u(a)>=o.value)?(c(),h("div",{key:0,class:z(l.value)},[u(r)?(c(),h("button",{key:0,class:"menu","aria-expanded":d.open,"aria-controls":"VPSidebarNav",onClick:m[0]||(m[0]=b=>d.$emit("open-menu"))},[$(oo,{class:"menu-icon"}),p("span",lo,D(u(e).sidebarMenuLabel||"Menu"),1)],8,io)):C("",!0),$(Xs,{headers:s.value,navHeight:o.value},null,8,["headers","navHeight"])],2)):C("",!0)}}),uo=I(co,[["__scopeId","data-v-c53a99ad"]]);function po(){const t=L(!1);function e(){t.value=!0,window.addEventListener("resize",a)}function n(){t.value=!1,window.removeEventListener("resize",a)}function r(){t.value?n():e()}function a(){window.outerWidth>=768&&n()}const s=Ee();return G(()=>s.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:r}}const ho={},mo={class:"VPSwitch",type:"button",role:"switch"},fo={class:"check"},vo={key:0,class:"icon"};function go(t,e){return c(),h("button",mo,[p("span",fo,[t.$slots.default?(c(),h("span",vo,[_(t.$slots,"default",{},void 0,!0)])):C("",!0)])])}const _o=I(ho,[["render",go],["__scopeId","data-v-ba41b7bf"]]),bo={},yo={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ko=p("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),wo=[ko];function $o(t,e){return c(),h("svg",yo,wo)}const So=I(bo,[["render",$o]]),Co={},Mo={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Lo=vn('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),Io=[Lo];function Po(t,e){return c(),h("svg",Mo,Io)}const Vo=I(Co,[["render",Po]]),Ao=S({__name:"VPSwitchAppearance",setup(t){const{isDark:e}=B(),n=Je("toggle-appearance",()=>{e.value=!e.value}),r=M(()=>e.value?"Switch to light theme":"Switch to dark theme");return(a,s)=>(c(),E(_o,{title:r.value,class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(n)},{default:k(()=>[$(Vo,{class:"sun"}),$(So,{class:"moon"})]),_:1},8,["title","aria-checked","onClick"]))}}),Pt=I(Ao,[["__scopeId","data-v-19ff1f45"]]),xo={key:0,class:"VPNavBarAppearance"},Oo=S({__name:"VPNavBarAppearance",setup(t){const{site:e}=B();return(n,r)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),h("div",xo,[$(Pt)])):C("",!0)}}),Eo=I(Oo,[["__scopeId","data-v-0ecff3b9"]]),Vt=L();let Sn=!1,rt=0;function To(t){const e=L(!1);if(Pe){!Sn&&No(),rt++;const n=G(Vt,r=>{var a,s,o;r===t.el.value||(a=t.el.value)!=null&&a.contains(r)?(e.value=!0,(s=t.onFocus)==null||s.call(t)):(e.value=!1,(o=t.onBlur)==null||o.call(t))});yt(()=>{n(),rt--,rt||Ho()})}return kt(e)}function No(){document.addEventListener("focusin",Cn),Sn=!0,Vt.value=document.activeElement}function Ho(){document.removeEventListener("focusin",Cn)}function Cn(){Vt.value=document.activeElement}const Do={},Bo={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ro=p("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),Fo=[Ro];function jo(t,e){return c(),h("svg",Bo,Fo)}const Mn=I(Do,[["render",jo]]),zo={},Uo={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Qo=p("circle",{cx:"12",cy:"12",r:"2"},null,-1),qo=p("circle",{cx:"19",cy:"12",r:"2"},null,-1),Wo=p("circle",{cx:"5",cy:"12",r:"2"},null,-1),Go=[Qo,qo,Wo];function Ko(t,e){return c(),h("svg",Uo,Go)}const Jo=I(zo,[["render",Ko]]),Xo={class:"VPMenuLink"},Zo=S({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=B();return(n,r)=>(c(),h("div",Xo,[$(pe,{class:z({active:u($e)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:k(()=>[te(D(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Xe=I(Zo,[["__scopeId","data-v-715d28c4"]]),Yo={class:"VPMenuGroup"},ei={key:0,class:"title"},ti=S({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),h("div",Yo,[e.text?(c(),h("p",ei,D(e.text),1)):C("",!0),(c(!0),h(W,null,ee(e.items,r=>(c(),h(W,null,["link"in r?(c(),E(Xe,{key:0,item:r},null,8,["item"])):C("",!0)],64))),256))]))}}),ni=I(ti,[["__scopeId","data-v-de82258f"]]),ri={class:"VPMenu"},ai={key:0,class:"items"},si=S({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(c(),h("div",ri,[e.items?(c(),h("div",ai,[(c(!0),h(W,null,ee(e.items,r=>(c(),h(W,{key:r.text},["link"in r?(c(),E(Xe,{key:0,item:r},null,8,["item"])):(c(),E(ni,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):C("",!0),_(e.$slots,"default",{},void 0,!0)]))}}),oi=I(si,[["__scopeId","data-v-1e6c5847"]]),ii=["aria-expanded","aria-label"],li={key:0,class:"text"},ci=["innerHTML"],ui={class:"menu"},di=S({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=L(!1),n=L();To({el:n,onBlur:r});function r(){e.value=!1}return(a,s)=>(c(),h("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:s[1]||(s[1]=o=>e.value=!0),onMouseleave:s[2]||(s[2]=o=>e.value=!1)},[p("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":a.label,onClick:s[0]||(s[0]=o=>e.value=!e.value)},[a.button||a.icon?(c(),h("span",li,[a.icon?(c(),E(we(a.icon),{key:0,class:"option-icon"})):C("",!0),a.button?(c(),h("span",{key:1,innerHTML:a.button},null,8,ci)):C("",!0),$(Mn,{class:"text-icon"})])):(c(),E(Jo,{key:1,class:"icon"}))],8,ii),p("div",ui,[$(oi,{items:a.items},{default:k(()=>[_(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),At=I(di,[["__scopeId","data-v-30a6eb53"]]),pi={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',mastodon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',x:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},hi=["href","aria-label","innerHTML"],mi=S({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=M(()=>typeof e.icon=="object"?e.icon.svg:pi[e.icon]);return(r,a)=>(c(),h("a",{class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,hi))}}),fi=I(mi,[["__scopeId","data-v-1c95c846"]]),vi={class:"VPSocialLinks"},gi=S({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(c(),h("div",vi,[(c(!0),h(W,null,ee(e.links,({link:r,icon:a,ariaLabel:s})=>(c(),E(fi,{key:r,icon:a,link:r,ariaLabel:s},null,8,["icon","link","ariaLabel"]))),128))]))}}),xt=I(gi,[["__scopeId","data-v-9cd5c4f9"]]),_i={key:0,class:"group translations"},bi={class:"trans-title"},yi={key:1,class:"group"},ki={class:"item appearance"},wi={class:"label"},$i={class:"appearance-action"},Si={key:2,class:"group"},Ci={class:"item social-links"},Mi=S({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=B(),{localeLinks:r,currentLang:a}=Te({correspondingLink:!0}),s=M(()=>r.value.length&&a.value.label||e.value.appearance||n.value.socialLinks);return(o,i)=>s.value?(c(),E(At,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:k(()=>[u(r).length&&u(a).label?(c(),h("div",_i,[p("p",bi,D(u(a).label),1),(c(!0),h(W,null,ee(u(r),l=>(c(),E(Xe,{key:l.link,item:l},null,8,["item"]))),128))])):C("",!0),u(e).appearance&&u(e).appearance!=="force-dark"?(c(),h("div",yi,[p("div",ki,[p("p",wi,D(u(n).darkModeSwitchLabel||"Appearance"),1),p("div",$i,[$(Pt)])])])):C("",!0),u(n).socialLinks?(c(),h("div",Si,[p("div",Ci,[$(xt,{class:"social-links-list",links:u(n).socialLinks},null,8,["links"])])])):C("",!0)]),_:1})):C("",!0)}}),Li=I(Mi,[["__scopeId","data-v-bfbdff7d"]]),Ii=t=>(ie("data-v-97f7e8bb"),t=t(),le(),t),Pi=["aria-expanded"],Vi=Ii(()=>p("span",{class:"container"},[p("span",{class:"top"}),p("span",{class:"middle"}),p("span",{class:"bottom"})],-1)),Ai=[Vi],xi=S({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(c(),h("button",{type:"button",class:z(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=r=>e.$emit("click"))},Ai,10,Pi))}}),Oi=I(xi,[["__scopeId","data-v-97f7e8bb"]]),Ei=["innerHTML"],Ti=S({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=B();return(n,r)=>(c(),E(pe,{class:z({VPNavBarMenuLink:!0,active:u($e)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:k(()=>[p("span",{innerHTML:n.item.text},null,8,Ei)]),_:1},8,["class","href","target","rel"]))}}),Ni=I(Ti,[["__scopeId","data-v-9cf79a12"]]),Hi=S({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=B(),r=s=>"link"in s?$e(n.value.relativePath,s.link,!!e.item.activeMatch):s.items.some(r),a=M(()=>r(e.item));return(s,o)=>(c(),E(At,{class:z({VPNavBarMenuGroup:!0,active:u($e)(u(n).relativePath,s.item.activeMatch,!!s.item.activeMatch)||a.value}),button:s.item.text,items:s.item.items},null,8,["class","button","items"]))}}),Di=t=>(ie("data-v-e14c0b4d"),t=t(),le(),t),Bi={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Ri=Di(()=>p("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Fi=S({__name:"VPNavBarMenu",setup(t){const{theme:e}=B();return(n,r)=>u(e).nav?(c(),h("nav",Bi,[Ri,(c(!0),h(W,null,ee(u(e).nav,a=>(c(),h(W,{key:a.text},["link"in a?(c(),E(Ni,{key:0,item:a},null,8,["item"])):(c(),E(Hi,{key:1,item:a},null,8,["item"]))],64))),128))])):C("",!0)}}),ji=I(Fi,[["__scopeId","data-v-e14c0b4d"]]);var Ht;const Ln=typeof window<"u",zi=t=>typeof t=="string",je=()=>{};Ln&&((Ht=window==null?void 0:window.navigator)!=null&&Ht.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ut(t){return typeof t=="function"?t():u(t)}function Ui(t,e){function n(...r){t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})}return n}function Qi(t,e={}){let n,r;return a=>{const s=ut(t),o=ut(e.maxWait);if(n&&clearTimeout(n),s<=0||o!==void 0&&o<=0)return r&&(clearTimeout(r),r=null),a();o&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,a()},o)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,a()},s)}}function qi(t){return t}function Wi(t){return bn()?(yn(t),!0):!1}function In(t,e=200,n={}){return Ui(Qi(e,n),t)}function at(t,e=200,n={}){if(e<=0)return t;const r=L(t.value),a=In(()=>{r.value=t.value},e,n);return G(t,()=>a()),r}function Pn(t,e,n){return G(t,(r,a,s)=>{r&&e(r,a,s)},n)}function Gi(t){var e;const n=ut(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Vn=Ln?window:void 0;function De(...t){let e,n,r,a;if(zi(t[0])?([n,r,a]=t,e=Vn):[e,n,r,a]=t,!e)return je;let s=je;const o=G(()=>Gi(e),l=>{s(),l&&(l.addEventListener(n,r,a),s=()=>{l.removeEventListener(n,r,a),s=je})},{immediate:!0,flush:"post"}),i=()=>{o(),s()};return Wi(i),i}const Dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bt="__vueuse_ssr_handlers__";Dt[Bt]=Dt[Bt]||{};const Ki={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Ji(t={}){const{reactive:e=!1,target:n=Vn,aliasMap:r=Ki,passive:a=!0,onEventFired:s=je}=t,o=Se(new Set),i={toJSON(){return{}},current:o},l=e?Se(i):i,d=new Set,m=new Set;function b(f,g){f in l&&(e?l[f]=g:l[f].value=g)}function v(){for(const f of m)b(f,!1)}function y(f,g){var x,P;const O=(x=f.key)==null?void 0:x.toLowerCase(),H=[(P=f.code)==null?void 0:P.toLowerCase(),O].filter(Boolean);O&&(g?o.add(O):o.delete(O));for(const U of H)m.add(U),b(U,g);O==="meta"&&!g?(d.forEach(U=>{o.delete(U),b(U,!1)}),d.clear()):typeof f.getModifierState=="function"&&f.getModifierState("Meta")&&g&&[...o,...H].forEach(U=>d.add(U))}De(n,"keydown",f=>(y(f,!0),s(f)),{passive:a}),De(n,"keyup",f=>(y(f,!1),s(f)),{passive:a}),De("blur",v,{passive:!0}),De("focus",v,{passive:!0});const w=new Proxy(l,{get(f,g,x){if(typeof g!="string")return Reflect.get(f,g,x);if(g=g.toLowerCase(),g in r&&(g=r[g]),!(g in l))if(/[+_-]/.test(g)){const O=g.split(/[+_-]/g).map(H=>H.trim());l[g]=M(()=>O.every(H=>u(w[H])))}else l[g]=L(!1);const P=Reflect.get(f,g,x);return e?u(P):P}});return w}var Rt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Rt||(Rt={}));var Xi=Object.defineProperty,Ft=Object.getOwnPropertySymbols,Zi=Object.prototype.hasOwnProperty,Yi=Object.prototype.propertyIsEnumerable,jt=(t,e,n)=>e in t?Xi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,el=(t,e)=>{for(var n in e||(e={}))Zi.call(e,n)&&jt(t,n,e[n]);if(Ft)for(var n of Ft(e))Yi.call(e,n)&&jt(t,n,e[n]);return t};const tl={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};el({linear:qi},tl);function me(t){return Array.isArray?Array.isArray(t):On(t)==="[object Array]"}const nl=1/0;function rl(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-nl?"-0":e}function al(t){return t==null?"":rl(t)}function ue(t){return typeof t=="string"}function An(t){return typeof t=="number"}function sl(t){return t===!0||t===!1||ol(t)&&On(t)=="[object Boolean]"}function xn(t){return typeof t=="object"}function ol(t){return xn(t)&&t!==null}function se(t){return t!=null}function st(t){return!t.trim().length}function On(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const il="Incorrect 'index' type",ll=t=>`Invalid value for key ${t}`,cl=t=>`Pattern length exceeds max of ${t}.`,ul=t=>`Missing ${t} property in key`,dl=t=>`Property 'weight' in key '${t}' must be a positive integer`,zt=Object.prototype.hasOwnProperty;class pl{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let a=En(r);n+=a.weight,this._keys.push(a),this._keyMap[a.id]=a,n+=a.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function En(t){let e=null,n=null,r=null,a=1,s=null;if(ue(t)||me(t))r=t,e=Ut(t),n=dt(t);else{if(!zt.call(t,"name"))throw new Error(ul("name"));const o=t.name;if(r=o,zt.call(t,"weight")&&(a=t.weight,a<=0))throw new Error(dl(o));e=Ut(o),n=dt(o),s=t.getFn}return{path:e,id:n,weight:a,src:r,getFn:s}}function Ut(t){return me(t)?t:t.split(".")}function dt(t){return me(t)?t.join("."):t}function hl(t,e){let n=[],r=!1;const a=(s,o,i)=>{if(se(s))if(!o[i])n.push(s);else{let l=o[i];const d=s[l];if(!se(d))return;if(i===o.length-1&&(ue(d)||An(d)||sl(d)))n.push(al(d));else if(me(d)){r=!0;for(let m=0,b=d.length;m<b;m+=1)a(d[m],o,i+1)}else o.length&&a(d,o,i+1)}};return a(t,ue(e)?e.split("."):e,0),r?n:n[0]}const ml={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},fl={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},vl={location:0,threshold:.6,distance:100},gl={useExtendedSearch:!1,getFn:hl,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var T={...fl,...ml,...vl,...gl};const _l=/[^ ]+/g;function bl(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(a){const s=a.match(_l).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*t),i=parseFloat(Math.round(o*r)/r);return n.set(s,i),i},clear(){n.clear()}}}class Ot{constructor({getFn:e=T.getFn,fieldNormWeight:n=T.fieldNormWeight}={}){this.norm=bl(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ue(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();ue(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!se(e)||st(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((a,s)=>{let o=a.getFn?a.getFn(e):this.getFn(e,a.path);if(se(o)){if(me(o)){let i=[];const l=[{nestedArrIndex:-1,value:o}];for(;l.length;){const{nestedArrIndex:d,value:m}=l.pop();if(se(m))if(ue(m)&&!st(m)){let b={v:m,i:d,n:this.norm.get(m)};i.push(b)}else me(m)&&m.forEach((b,v)=>{l.push({nestedArrIndex:v,value:b})})}r.$[s]=i}else if(ue(o)&&!st(o)){let i={v:o,n:this.norm.get(o)};r.$[s]=i}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Tn(t,e,{getFn:n=T.getFn,fieldNormWeight:r=T.fieldNormWeight}={}){const a=new Ot({getFn:n,fieldNormWeight:r});return a.setKeys(t.map(En)),a.setSources(e),a.create(),a}function yl(t,{getFn:e=T.getFn,fieldNormWeight:n=T.fieldNormWeight}={}){const{keys:r,records:a}=t,s=new Ot({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(a),s}function Be(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:a=T.distance,ignoreLocation:s=T.ignoreLocation}={}){const o=e/t.length;if(s)return o;const i=Math.abs(r-n);return a?o+i/a:i?1:o}function kl(t=[],e=T.minMatchCharLength){let n=[],r=-1,a=-1,s=0;for(let o=t.length;s<o;s+=1){let i=t[s];i&&r===-1?r=s:!i&&r!==-1&&(a=s-1,a-r+1>=e&&n.push([r,a]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const ke=32;function wl(t,e,n,{location:r=T.location,distance:a=T.distance,threshold:s=T.threshold,findAllMatches:o=T.findAllMatches,minMatchCharLength:i=T.minMatchCharLength,includeMatches:l=T.includeMatches,ignoreLocation:d=T.ignoreLocation}={}){if(e.length>ke)throw new Error(cl(ke));const m=e.length,b=t.length,v=Math.max(0,Math.min(r,b));let y=s,w=v;const f=i>1||l,g=f?Array(b):[];let x;for(;(x=t.indexOf(e,w))>-1;){let Q=Be(e,{currentLocation:x,expectedLocation:v,distance:a,ignoreLocation:d});if(y=Math.min(Q,y),w=x+m,f){let N=0;for(;N<m;)g[x+N]=1,N+=1}}w=-1;let P=[],O=1,H=m+b;const U=1<<m-1;for(let Q=0;Q<m;Q+=1){let N=0,R=H;for(;N<R;)Be(e,{errors:Q,currentLocation:v+R,expectedLocation:v,distance:a,ignoreLocation:d})<=y?N=R:H=R,R=Math.floor((H-N)/2+N);H=R;let ne=Math.max(1,v-R+1),he=o?b:Math.min(v+R,b)+m,ae=Array(he+2);ae[he+1]=(1<<Q)-1;for(let V=he;V>=ne;V-=1){let j=V-1,Y=n[t.charAt(j)];if(f&&(g[j]=+!!Y),ae[V]=(ae[V+1]<<1|1)&Y,Q&&(ae[V]|=(P[V+1]|P[V])<<1|1|P[V+1]),ae[V]&U&&(O=Be(e,{errors:Q,currentLocation:j,expectedLocation:v,distance:a,ignoreLocation:d}),O<=y)){if(y=O,w=j,w<=v)break;ne=Math.max(1,2*v-w)}}if(Be(e,{errors:Q+1,currentLocation:v,expectedLocation:v,distance:a,ignoreLocation:d})>y)break;P=ae}const X={isMatch:w>=0,score:Math.max(.001,O)};if(f){const Q=kl(g,i);Q.length?l&&(X.indices=Q):X.isMatch=!1}return X}function $l(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const a=t.charAt(n);e[a]=(e[a]||0)|1<<r-n-1}return e}class Nn{constructor(e,{location:n=T.location,threshold:r=T.threshold,distance:a=T.distance,includeMatches:s=T.includeMatches,findAllMatches:o=T.findAllMatches,minMatchCharLength:i=T.minMatchCharLength,isCaseSensitive:l=T.isCaseSensitive,ignoreLocation:d=T.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:a,includeMatches:s,findAllMatches:o,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:d},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const m=(v,y)=>{this.chunks.push({pattern:v,alphabet:$l(v),startIndex:y})},b=this.pattern.length;if(b>ke){let v=0;const y=b%ke,w=b-y;for(;v<w;)m(this.pattern.substr(v,ke),v),v+=ke;if(y){const f=b-ke;m(this.pattern.substr(f),f)}}else m(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let w={isMatch:!0,score:0};return r&&(w.indices=[[0,e.length-1]]),w}const{location:a,distance:s,threshold:o,findAllMatches:i,minMatchCharLength:l,ignoreLocation:d}=this.options;let m=[],b=0,v=!1;this.chunks.forEach(({pattern:w,alphabet:f,startIndex:g})=>{const{isMatch:x,score:P,indices:O}=wl(e,w,f,{location:a+g,distance:s,threshold:o,findAllMatches:i,minMatchCharLength:l,includeMatches:r,ignoreLocation:d});x&&(v=!0),b+=P,x&&O&&(m=[...m,...O])});let y={isMatch:v,score:v?b/this.chunks.length:1};return v&&r&&(y.indices=m),y}}class be{constructor(e){this.pattern=e}static isMultiMatch(e){return Qt(e,this.multiRegex)}static isSingleMatch(e){return Qt(e,this.singleRegex)}search(){}}function Qt(t,e){const n=t.match(e);return n?n[1]:null}class Sl extends be{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Cl extends be{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ml extends be{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ll extends be{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Il extends be{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Pl extends be{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Hn extends be{constructor(e,{location:n=T.location,threshold:r=T.threshold,distance:a=T.distance,includeMatches:s=T.includeMatches,findAllMatches:o=T.findAllMatches,minMatchCharLength:i=T.minMatchCharLength,isCaseSensitive:l=T.isCaseSensitive,ignoreLocation:d=T.ignoreLocation}={}){super(e),this._bitapSearch=new Nn(e,{location:n,threshold:r,distance:a,includeMatches:s,findAllMatches:o,minMatchCharLength:i,isCaseSensitive:l,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Dn extends be{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const a=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,a.push([r,n-1]);const o=!!a.length;return{isMatch:o,score:o?0:1,indices:a}}}const pt=[Sl,Dn,Ml,Ll,Pl,Il,Cl,Hn],qt=pt.length,Vl=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Al="|";function xl(t,e={}){return t.split(Al).map(n=>{let r=n.trim().split(Vl).filter(s=>s&&!!s.trim()),a=[];for(let s=0,o=r.length;s<o;s+=1){const i=r[s];let l=!1,d=-1;for(;!l&&++d<qt;){const m=pt[d];let b=m.isMultiMatch(i);b&&(a.push(new m(b,e)),l=!0)}if(!l)for(d=-1;++d<qt;){const m=pt[d];let b=m.isSingleMatch(i);if(b){a.push(new m(b,e));break}}}return a})}const Ol=new Set([Hn.type,Dn.type]);class El{constructor(e,{isCaseSensitive:n=T.isCaseSensitive,includeMatches:r=T.includeMatches,minMatchCharLength:a=T.minMatchCharLength,ignoreLocation:s=T.ignoreLocation,findAllMatches:o=T.findAllMatches,location:i=T.location,threshold:l=T.threshold,distance:d=T.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:a,findAllMatches:o,ignoreLocation:s,location:i,threshold:l,distance:d},this.pattern=n?e:e.toLowerCase(),this.query=xl(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:a}=this.options;e=a?e:e.toLowerCase();let s=0,o=[],i=0;for(let l=0,d=n.length;l<d;l+=1){const m=n[l];o.length=0,s=0;for(let b=0,v=m.length;b<v;b+=1){const y=m[b],{isMatch:w,indices:f,score:g}=y.search(e);if(w){if(s+=1,i+=g,r){const x=y.constructor.type;Ol.has(x)?o=[...o,...f]:o.push(f)}}else{i=0,s=0,o.length=0;break}}if(s){let b={isMatch:!0,score:i/s};return r&&(b.indices=o),b}}return{isMatch:!1,score:1}}}const ht=[];function Tl(...t){ht.push(...t)}function mt(t,e){for(let n=0,r=ht.length;n<r;n+=1){let a=ht[n];if(a.condition(t,e))return new a(t,e)}return new Nn(t,e)}const Qe={AND:"$and",OR:"$or"},ft={PATH:"$path",PATTERN:"$val"},vt=t=>!!(t[Qe.AND]||t[Qe.OR]),Nl=t=>!!t[ft.PATH],Hl=t=>!me(t)&&xn(t)&&!vt(t),Wt=t=>({[Qe.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Bn(t,e,{auto:n=!0}={}){const r=a=>{let s=Object.keys(a);const o=Nl(a);if(!o&&s.length>1&&!vt(a))return r(Wt(a));if(Hl(a)){const l=o?a[ft.PATH]:s[0],d=o?a[ft.PATTERN]:a[l];if(!ue(d))throw new Error(ll(l));const m={keyId:dt(l),pattern:d};return n&&(m.searcher=mt(d,e)),m}let i={children:[],operator:s[0]};return s.forEach(l=>{const d=a[l];me(d)&&d.forEach(m=>{i.children.push(r(m))})}),i};return vt(t)||(t=Wt(t)),r(t)}function Dl(t,{ignoreFieldNorm:e=T.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:a,norm:s,score:o})=>{const i=a?a.weight:null;r*=Math.pow(o===0&&i?Number.EPSILON:o,(i||1)*(e?1:s))}),n.score=r})}function Bl(t,e){const n=t.matches;e.matches=[],se(n)&&n.forEach(r=>{if(!se(r.indices)||!r.indices.length)return;const{indices:a,value:s}=r;let o={indices:a,value:s};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),e.matches.push(o)})}function Rl(t,e){e.score=t.score}function Fl(t,e,{includeMatches:n=T.includeMatches,includeScore:r=T.includeScore}={}){const a=[];return n&&a.push(Bl),r&&a.push(Rl),t.map(s=>{const{idx:o}=s,i={item:e[o],refIndex:o};return a.length&&a.forEach(l=>{l(s,i)}),i})}class Ce{constructor(e,n={},r){this.options={...T,...n},this.options.useExtendedSearch,this._keyStore=new pl(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Ot))throw new Error(il);this._myIndex=n||Tn(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!se(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,a=this._docs.length;r<a;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,a-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:a,shouldSort:s,sortFn:o,ignoreFieldNorm:i}=this.options;let l=ue(e)?ue(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Dl(l,{ignoreFieldNorm:i}),s&&l.sort(o),An(n)&&n>-1&&(l=l.slice(0,n)),Fl(l,this._docs,{includeMatches:r,includeScore:a})}_searchStringList(e){const n=mt(e,this.options),{records:r}=this._myIndex,a=[];return r.forEach(({v:s,i:o,n:i})=>{if(!se(s))return;const{isMatch:l,score:d,indices:m}=n.searchIn(s);l&&a.push({item:s,idx:o,matches:[{score:d,value:s,norm:i,indices:m}]})}),a}_searchLogical(e){const n=Bn(e,this.options),r=(i,l,d)=>{if(!i.children){const{keyId:b,searcher:v}=i,y=this._findMatches({key:this._keyStore.get(b),value:this._myIndex.getValueForItemAtKeyId(l,b),searcher:v});return y&&y.length?[{idx:d,item:l,matches:y}]:[]}const m=[];for(let b=0,v=i.children.length;b<v;b+=1){const y=i.children[b],w=r(y,l,d);if(w.length)m.push(...w);else if(i.operator===Qe.AND)return[]}return m},a=this._myIndex.records,s={},o=[];return a.forEach(({$:i,i:l})=>{if(se(i)){let d=r(n,i,l);d.length&&(s[l]||(s[l]={idx:l,item:i,matches:[]},o.push(s[l])),d.forEach(({matches:m})=>{s[l].matches.push(...m)}))}}),o}_searchObjectList(e){const n=mt(e,this.options),{keys:r,records:a}=this._myIndex,s=[];return a.forEach(({$:o,i})=>{if(!se(o))return;let l=[];r.forEach((d,m)=>{l.push(...this._findMatches({key:d,value:o[m],searcher:n}))}),l.length&&s.push({idx:i,item:o,matches:l})}),s}_findMatches({key:e,value:n,searcher:r}){if(!se(n))return[];let a=[];if(me(n))n.forEach(({v:s,i:o,n:i})=>{if(!se(s))return;const{isMatch:l,score:d,indices:m}=r.searchIn(s);l&&a.push({score:d,key:e,value:s,idx:o,norm:i,indices:m})});else{const{v:s,n:o}=n,{isMatch:i,score:l,indices:d}=r.searchIn(s);i&&a.push({score:l,key:e,value:s,norm:o,indices:d})}return a}}Ce.version="6.6.2";Ce.createIndex=Tn;Ce.parseIndex=yl;Ce.config=T;Ce.parseQuery=Bn;Tl(El);const Gt=Se({selectedNode:"",selectedGroup:"",search:"",dataValue:"",filtered:{count:0,items:new Map,groups:new Set}}),Ve=()=>({isSearching:M(()=>Gt.search!==""),...or(Gt)});function jl(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map(function(a){a(n)}),(r=t.get("*"))&&r.slice().map(function(a){a(e,n)})}}}const zl=jl(),Ze=()=>({emitter:zl});function Ul(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return n;n=n.nextElementSibling}}function Ql(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return n;n=n.previousElementSibling}}const ql=["command-theme"],Wl={"command-root":""},Gl=S({name:"Command"}),Kl=S({...Gl,props:{theme:{type:String,default:"default"},fuseOptions:{type:Object,default:()=>({threshold:.2,keys:["label"]})}},emits:["select-item"],setup(t,{emit:e}){const n=t,r='[command-item=""]',a="command-item-key",s='[command-group=""]',o="command-group-key",i='[command-group-heading=""]',l=`${r}:not([aria-disabled="true"])`,d=`${r}[aria-selected="true"]`,m="command-item-select",b="data-value";wt("theme",n.theme||"default");const{selectedNode:v,search:y,dataValue:w,filtered:f}=Ve(),{emitter:g}=Ze(),x=L(),P=at(L(new Map),333),O=at(L(new Set),333),H=at(L(new Map)),U=M(()=>{const A=[];for(const[q,F]of P.value.entries())A.push({key:q,label:F});return A}),X=M(()=>{const A=Ce.createIndex(n.fuseOptions.keys,U.value);return new Ce(U.value,n.fuseOptions,A)}),Q=()=>{var A,q,F;const K=N();K&&(((A=K.parentElement)==null?void 0:A.firstElementChild)===K&&((F=(q=K.closest(s))==null?void 0:q.querySelector(i))==null||F.scrollIntoView({block:"nearest"})),K.scrollIntoView({block:"nearest"}))},N=()=>{var A;return(A=x.value)==null?void 0:A.querySelector(d)},R=(A=x.value)=>{const q=A==null?void 0:A.querySelectorAll(l);return q?Array.from(q):[]},ne=()=>{var A;const q=(A=x.value)==null?void 0:A.querySelectorAll(s);return q?Array.from(q):[]},he=()=>{const[A]=R();A&&A.getAttribute(a)&&(v.value=A.getAttribute(a)||"")},ae=A=>{const q=R()[A];q&&(v.value=q.getAttribute(a)||"")},V=A=>{const q=N(),F=R(),K=F.findIndex(He=>He===q),ge=F[K+A];ge?v.value=ge.getAttribute(a)||"":A>0?ae(0):ae(F.length-1)},j=A=>{const q=N();let F=q==null?void 0:q.closest(s),K=null;for(;F&&!K;)F=A>0?Ul(F,s):Ql(F,s),K=F==null?void 0:F.querySelector(l);K?v.value=K.getAttribute(a)||"":V(A)},Y=()=>ae(0),J=()=>ae(R().length-1),Le=A=>{A.preventDefault(),A.metaKey?J():A.altKey?j(1):V(1)},tt=A=>{A.preventDefault(),A.metaKey?Y():A.altKey?j(-1):V(-1)},nt=A=>{switch(A.key){case"n":case"j":{A.ctrlKey&&Le(A);break}case"ArrowDown":{Le(A);break}case"p":case"k":{A.ctrlKey&&tt(A);break}case"ArrowUp":{tt(A);break}case"Home":{Y();break}case"End":{J();break}case"Enter":{const q=N();if(q){const F=new Event(m);q.dispatchEvent(F)}}}},re=()=>{if(!y.value){f.value.count=O.value.size;return}f.value.groups=new Set("");const A=new Map,q=X.value.search(y.value).map(F=>F.item);for(const{key:F,label:K}of q)A.set(F,K);for(const[F,K]of H.value)for(const ge of K)A.get(ge)&&f.value.groups.add(F);ce(()=>{f.value.count=A.size,f.value.items=A})},ye=()=>{const A=R(),q=ne();for(const F of A){const K=F.getAttribute(a)||"",ge=F.getAttribute(b)||"";O.value.add(K),P.value.set(K,ge),f.value.count=P.value.size}for(const F of q){const K=R(F),ge=F.getAttribute(o)||"",He=new Set("");for(const Yn of K){const er=Yn.getAttribute(a)||"";He.add(er)}H.value.set(ge,He)}};G(()=>v.value,A=>{A&&ce(Q)},{deep:!0}),G(()=>y.value,A=>{re(),ce(he)}),g.on("selectItem",A=>{e("select-item",A)});const Zn=In(A=>{A&&(ye(),ce(he))},100);return g.on("rerenderList",Zn),fe(()=>{ye(),he()}),(A,q)=>(c(),h("div",{class:z(t.theme),onKeydown:nt,ref_key:"commandRef",ref:x,"command-theme":t.theme},[p("div",Wl,[_(A.$slots,"default")])],42,ql))}}),Ae=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},gt=Ae(Kl,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]),Jl={"command-dialog":""},Xl={"command-dialog-mask":""},Zl={"command-dialog-wrapper":""},Yl={"command-dialog-header":""},ec={"command-dialog-body":""},tc={key:0,"command-dialog-footer":""},nc=S({name:"Command.Dialog"}),rc=S({...nc,props:{visible:{type:Boolean,required:!0},theme:{type:String,required:!0}},emits:["select-item"],setup(t,{emit:e}){const n=t,{search:r,filtered:a}=Ve(),{emitter:s}=Ze(),o=L();s.on("selectItem",l=>{e("select-item",l)});const i=()=>{r.value="",a.value.count=0,a.value.items=new Map,a.value.groups=new Set};return Pn(()=>n.visible,i),$t(i),(l,d)=>(c(),E(sr,{to:"body",ref_key:"dialogRef",ref:o},[$(We,{name:"command-dialog",appear:""},{default:k(()=>[t.visible?(c(),E(gt,{key:0,theme:t.theme},{default:k(()=>[p("div",Jl,[p("div",Xl,[p("div",Zl,[p("div",Yl,[_(l.$slots,"header")]),p("div",ec,[_(l.$slots,"body")]),l.$slots.footer?(c(),h("div",tc,[_(l.$slots,"footer")])):C("v-if",!0)])])])]),_:3},8,["theme"])):C("v-if",!0)]),_:3})],512))}}),ac=Ae(rc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);let Rn=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const sc=["command-group-key","data-value"],oc={key:0,"command-group-heading":""},ic={"command-group-items":"",role:"group"},lc=S({name:"Command.Group"}),cc=S({...lc,props:{heading:{type:String,required:!0}},setup(t){const e=M(()=>`command-group-${Rn()}`),{filtered:n,isSearching:r}=Ve(),a=M(()=>r.value?n.value.groups.has(e.value):!0);return(s,o)=>gn((c(),h("div",{"command-group":"",role:"presentation",key:u(e),"command-group-key":u(e),"data-value":t.heading},[t.heading?(c(),h("div",oc,D(t.heading),1)):C("v-if",!0),p("div",ic,[_(s.$slots,"default")])],8,sc)),[[_n,u(a)]])}}),uc=Ae(cc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]),dc=["placeholder","value"],pc=S({name:"Command.Input"}),hc=S({...pc,props:{placeholder:{type:String,required:!0},value:{type:String,required:!1}},emits:["input","update:value"],setup(t,{emit:e}){const n=L(null),{search:r}=Ve(),a=M(()=>r.value),s=o=>{const i=o,l=o.target;r.value=l==null?void 0:l.value,e("input",i),e("update:value",r.value)};return _e(()=>{var o;(o=n.value)==null||o.focus()}),(o,i)=>(c(),h("input",{ref_key:"inputRef",ref:n,"command-input":"","auto-focus":"","auto-complete":"off","auto-correct":"off","spell-check":!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,placeholder:t.placeholder,value:u(a),onInput:s},null,40,dc))}}),mc=Ae(hc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]),fc=["aria-selected","aria-disabled","command-item-key"],vc=S({name:"Command.Item"}),gc=S({...vc,props:{shortcut:{type:Array,required:!1},perform:{type:null,required:!1}},emits:["select"],setup(t,{emit:e}){const n=t,r="command-item-select",a="data-value",{current:s}=Ji(),{selectedNode:o,filtered:i,isSearching:l}=Ve(),{emitter:d}=Ze(),m=L(),b=M(()=>`command-item-${Rn()}`),v=M(()=>{const f=i.value.items.get(b.value);return l.value?f!==void 0:!0}),y=M(()=>Array.from(s)),w=()=>{var f;const g={key:b.value,value:((f=m.value)==null?void 0:f.getAttribute(a))||""};e("select",g),d.emit("selectItem",g)};return Pn(y,f=>{n.shortcut&&n.shortcut.length>0&&n.shortcut.every(g=>s.has(g.toLowerCase()))&&n.perform&&n.perform()}),_e(()=>{var f;(f=m.value)==null||f.addEventListener(r,w)}),$t(()=>{var f;(f=m.value)==null||f.removeEventListener(r,w)}),(f,g)=>gn((c(),h("div",{ref_key:"itemRef",ref:m,"command-item":"",role:"option","aria-selected":u(o)===u(b),"aria-disabled":!u(v),key:u(b),"command-item-key":u(b),onClick:w},[_(f.$slots,"default")],8,fc)),[[_n,u(v)]])}}),_c=Ae(gc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]),bc=S({name:"Command.List"}),yc=S({...bc,setup(t){const{emitter:e}=Ze(),n=L(),r=L();let a=null,s;return _e(()=>{s=r.value;const o=n.value;s&&o&&(a=new ResizeObserver(i=>{ce(()=>{const l=s==null?void 0:s.offsetHeight;o==null||o.style.setProperty("--command-list-height",`${l==null?void 0:l.toFixed(1)}px`),e.emit("rerenderList",!0)})}),a.observe(s))}),$t(()=>{a!==null&&s&&a.unobserve(s)}),(o,i)=>(c(),h("div",{"command-list":"",role:"listbox","aria-label":"Suggestions",ref_key:"listRef",ref:n},[p("div",{"command-list-sizer":"",ref_key:"heightRef",ref:r},[_(o.$slots,"default")],512)],512))}}),kc=Ae(yc,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]),wc=S({name:"Command.Empty",setup(t,{attrs:e,slots:n}){const{filtered:r}=Ve(),a=M(()=>r.value.count===0);return()=>a.value?ze("div",{"command-empty":"",role:"presentation",...e},n):ze("div",{"command-empty":"hidden",role:"presentation",style:{display:"none"},...e})}}),$c=S({name:"Command.Loading",setup(t,{attrs:e,slots:n}){return()=>ze("div",{"command-loading":"",role:"progressbar",...e},n)}}),Sc=S({name:"Command.Separator",setup(t,{attrs:e,slots:n}){return()=>ze("div",{"command-separator":"",role:"separator",...e})}}),Ie=Object.assign(gt,{Dialog:ac,Empty:wc,Group:uc,Input:mc,Item:_c,List:kc,Loading:$c,Separator:Sc,Root:gt});var Kt;const Et=typeof window<"u",Cc=t=>typeof t=="function",Mc=t=>typeof t=="string",Oe=()=>{},Lc=Et&&((Kt=window==null?void 0:window.navigator)==null?void 0:Kt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ne(t){return typeof t=="function"?t():u(t)}function Fn(t,e){function n(...r){return new Promise((a,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(a).catch(s)})}return n}const jn=t=>t();function Ic(t,e=!0,n=!0,r=!1){let a=0,s,o=!0,i=Oe,l;const d=()=>{s&&(clearTimeout(s),s=void 0,i(),i=Oe)};return b=>{const v=Ne(t),y=Date.now()-a,w=()=>l=b();return d(),v<=0?(a=Date.now(),w()):(y>v&&(n||!o)?(a=Date.now(),w()):e&&(l=new Promise((f,g)=>{i=r?g:f,s=setTimeout(()=>{a=Date.now(),o=!0,f(w()),d()},Math.max(0,v-y))})),!n&&!s&&(s=setTimeout(()=>o=!0,v)),o=!1,l)}}function Pc(t=jn){const e=L(!0);function n(){e.value=!1}function r(){e.value=!0}const a=(...s)=>{e.value&&t(...s)};return{isActive:kt(e),pause:n,resume:r,eventFilter:a}}function Vc(t){return t}function Ye(t){return bn()?(yn(t),!0):!1}function c1(t,e=200,n=!1,r=!0,a=!1){return Fn(Ic(e,n,r,a),t)}function Ac(t){return typeof t=="function"?M(t):L(t)}function et(t,e=!0){ir()?fe(t):e?t():ce(t)}function u1(t,e,n={}){const{immediate:r=!0}=n,a=L(!1);let s=null;function o(){s&&(clearTimeout(s),s=null)}function i(){a.value=!1,o()}function l(...d){o(),a.value=!0,s=setTimeout(()=>{a.value=!1,s=null,t(...d)},Ne(e))}return r&&(a.value=!0,Et&&l()),Ye(i),{isPending:kt(a),start:l,stop:i}}var Jt=Object.getOwnPropertySymbols,xc=Object.prototype.hasOwnProperty,Oc=Object.prototype.propertyIsEnumerable,Ec=(t,e)=>{var n={};for(var r in t)xc.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Jt)for(var r of Jt(t))e.indexOf(r)<0&&Oc.call(t,r)&&(n[r]=t[r]);return n};function Tc(t,e,n={}){const r=n,{eventFilter:a=jn}=r,s=Ec(r,["eventFilter"]);return G(t,Fn(a,e),s)}var Nc=Object.defineProperty,Hc=Object.defineProperties,Dc=Object.getOwnPropertyDescriptors,qe=Object.getOwnPropertySymbols,zn=Object.prototype.hasOwnProperty,Un=Object.prototype.propertyIsEnumerable,Xt=(t,e,n)=>e in t?Nc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Bc=(t,e)=>{for(var n in e||(e={}))zn.call(e,n)&&Xt(t,n,e[n]);if(qe)for(var n of qe(e))Un.call(e,n)&&Xt(t,n,e[n]);return t},Rc=(t,e)=>Hc(t,Dc(e)),Fc=(t,e)=>{var n={};for(var r in t)zn.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&qe)for(var r of qe(t))e.indexOf(r)<0&&Un.call(t,r)&&(n[r]=t[r]);return n};function Qn(t,e,n={}){const r=n,{eventFilter:a}=r,s=Fc(r,["eventFilter"]),{eventFilter:o,pause:i,resume:l,isActive:d}=Pc(a);return{stop:Tc(t,e,Rc(Bc({},s),{eventFilter:o})),pause:i,resume:l,isActive:d}}function de(t){var e;const n=Ne(t);return(e=n==null?void 0:n.$el)!=null?e:n}const oe=Et?window:void 0;function Z(...t){let e,n,r,a;if(Mc(t[0])||Array.isArray(t[0])?([n,r,a]=t,e=oe):[e,n,r,a]=t,!e)return Oe;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(m=>m()),s.length=0},i=(m,b,v,y)=>(m.addEventListener(b,v,y),()=>m.removeEventListener(b,v,y)),l=G(()=>[de(e),Ne(a)],([m,b])=>{o(),m&&s.push(...n.flatMap(v=>r.map(y=>i(m,v,y,b))))},{immediate:!0,flush:"post"}),d=()=>{l(),o()};return Ye(d),d}let Zt=!1;function d1(t,e,n={}){const{window:r=oe,ignore:a=[],capture:s=!0,detectIframe:o=!1}=n;if(!r)return;Lc&&!Zt&&(Zt=!0,Array.from(r.document.body.children).forEach(v=>v.addEventListener("click",Oe)));let i=!0;const l=v=>a.some(y=>{if(typeof y=="string")return Array.from(r.document.querySelectorAll(y)).some(w=>w===v.target||v.composedPath().includes(w));{const w=de(y);return w&&(v.target===w||v.composedPath().includes(w))}}),m=[Z(r,"click",v=>{const y=de(t);if(!(!y||y===v.target||v.composedPath().includes(y))){if(v.detail===0&&(i=!l(v)),!i){i=!0;return}e(v)}},{passive:!0,capture:s}),Z(r,"pointerdown",v=>{const y=de(t);y&&(i=!v.composedPath().includes(y)&&!l(v))},{passive:!0}),o&&Z(r,"blur",v=>{var y;const w=de(t);((y=r.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(w!=null&&w.contains(r.document.activeElement))&&e(v)})].filter(Boolean);return()=>m.forEach(v=>v())}function qn(t,e=!1){const n=L(),r=()=>n.value=!!t();return r(),et(r,e),n}function jc(t,e={}){const{window:n=oe}=e,r=qn(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const s=L(!1),o=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},i=()=>{r.value&&(o(),a=n.matchMedia(Ac(t).value),s.value=a.matches,"addEventListener"in a?a.addEventListener("change",i):a.addListener(i))};return _e(i),Ye(()=>o()),s}function p1({window:t=oe}={}){const e=r=>{const{state:a,length:s}=(t==null?void 0:t.history)||{},{hash:o,host:i,hostname:l,href:d,origin:m,pathname:b,port:v,protocol:y,search:w}=(t==null?void 0:t.location)||{};return{trigger:r,state:a,length:s,hash:o,host:i,hostname:l,href:d,origin:m,pathname:b,port:v,protocol:y,search:w}},n=L(e("load"));return t&&(Z(t,"popstate",()=>n.value=e("popstate"),{passive:!0}),Z(t,"hashchange",()=>n.value=e("hashchange"),{passive:!0})),n}const _t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bt="__vueuse_ssr_handlers__";_t[bt]=_t[bt]||{};const zc=_t[bt];function Wn(t,e){return zc[t]||e}function Uc(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var Qc=Object.defineProperty,Yt=Object.getOwnPropertySymbols,qc=Object.prototype.hasOwnProperty,Wc=Object.prototype.propertyIsEnumerable,en=(t,e,n)=>e in t?Qc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,tn=(t,e)=>{for(var n in e||(e={}))qc.call(e,n)&&en(t,n,e[n]);if(Yt)for(var n of Yt(e))Wc.call(e,n)&&en(t,n,e[n]);return t};const Gc={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},nn="vueuse-storage";function Kc(t,e,n,r={}){var a;const{flush:s="pre",deep:o=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,mergeDefaults:d=!1,shallow:m,window:b=oe,eventFilter:v,onError:y=N=>{console.error(N)}}=r,w=(m?Ke:L)(e);if(!n)try{n=Wn("getDefaultStorage",()=>{var N;return(N=oe)==null?void 0:N.localStorage})()}catch(N){y(N)}if(!n)return w;const f=Ne(e),g=Uc(f),x=(a=r.serializer)!=null?a:Gc[g],{pause:P,resume:O}=Qn(w,()=>H(w.value),{flush:s,deep:o,eventFilter:v});return b&&i&&(Z(b,"storage",Q),Z(b,nn,X)),Q(),w;function H(N){try{if(N==null)n.removeItem(t);else{const R=x.write(N),ne=n.getItem(t);ne!==R&&(n.setItem(t,R),b&&b.dispatchEvent(new CustomEvent(nn,{detail:{key:t,oldValue:ne,newValue:R,storageArea:n}})))}}catch(R){y(R)}}function U(N){const R=N?N.newValue:n.getItem(t);if(R==null)return l&&f!==null&&n.setItem(t,x.write(f)),f;if(!N&&d){const ne=x.read(R);return Cc(d)?d(ne,f):g==="object"&&!Array.isArray(ne)?tn(tn({},f),ne):ne}else return typeof R!="string"?R:x.read(R)}function X(N){Q(N.detail)}function Q(N){if(!(N&&N.storageArea!==n)){if(N&&N.key==null){w.value=f;return}if(!(N&&N.key!==t)){P();try{w.value=U(N)}catch(R){y(R)}finally{N?ce(O):O()}}}}}function Gn(t){return jc("(prefers-color-scheme: dark)",t)}var Jc=Object.defineProperty,rn=Object.getOwnPropertySymbols,Xc=Object.prototype.hasOwnProperty,Zc=Object.prototype.propertyIsEnumerable,an=(t,e,n)=>e in t?Jc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Yc=(t,e)=>{for(var n in e||(e={}))Xc.call(e,n)&&an(t,n,e[n]);if(rn)for(var n of rn(e))Zc.call(e,n)&&an(t,n,e[n]);return t};function eu(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:a=oe,storage:s,storageKey:o="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:l,emitAuto:d}=t,m=Yc({auto:"",light:"light",dark:"dark"},t.modes||{}),b=Gn({window:a}),v=M(()=>b.value?"dark":"light"),y=l||(o==null?L(r):Kc(o,r,s,{window:a,listenToStorageChanges:i})),w=M({get(){return y.value==="auto"&&!d?v.value:y.value},set(P){y.value=P}}),f=Wn("updateHTMLAttrs",(P,O,H)=>{const U=a==null?void 0:a.document.querySelector(P);if(U)if(O==="class"){const X=H.split(/\s/g);Object.values(m).flatMap(Q=>(Q||"").split(/\s/g)).filter(Boolean).forEach(Q=>{X.includes(Q)?U.classList.add(Q):U.classList.remove(Q)})}else U.setAttribute(O,H)});function g(P){var O;const H=P==="auto"?v.value:P;f(e,n,(O=m[H])!=null?O:H)}function x(P){t.onChanged?t.onChanged(P,g):g(P)}return G(w,x,{flush:"post",immediate:!0}),d&&G(v,()=>x(w.value),{flush:"post"}),et(()=>x(w.value)),w}var tu=Object.defineProperty,nu=Object.defineProperties,ru=Object.getOwnPropertyDescriptors,sn=Object.getOwnPropertySymbols,au=Object.prototype.hasOwnProperty,su=Object.prototype.propertyIsEnumerable,on=(t,e,n)=>e in t?tu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ou=(t,e)=>{for(var n in e||(e={}))au.call(e,n)&&on(t,n,e[n]);if(sn)for(var n of sn(e))su.call(e,n)&&on(t,n,e[n]);return t},iu=(t,e)=>nu(t,ru(e));function h1(t={}){const{valueDark:e="dark",valueLight:n="",window:r=oe}=t,a=eu(iu(ou({},t),{onChanged:(i,l)=>{var d;t.onChanged?(d=t.onChanged)==null||d.call(t,i==="dark"):l(i)},modes:{dark:e,light:n}})),s=Gn({window:r});return M({get(){return a.value==="dark"},set(i){i===s.value?a.value="auto":a.value=i?"dark":"light"}})}var ln=Object.getOwnPropertySymbols,lu=Object.prototype.hasOwnProperty,cu=Object.prototype.propertyIsEnumerable,uu=(t,e)=>{var n={};for(var r in t)lu.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&ln)for(var r of ln(t))e.indexOf(r)<0&&cu.call(t,r)&&(n[r]=t[r]);return n};function du(t,e,n={}){const r=n,{window:a=oe}=r,s=uu(r,["window"]);let o;const i=qn(()=>a&&"ResizeObserver"in a),l=()=>{o&&(o.disconnect(),o=void 0)},d=G(()=>de(t),b=>{l(),i.value&&a&&b&&(o=new ResizeObserver(e),o.observe(b,s))},{immediate:!0,flush:"post"}),m=()=>{l(),d()};return Ye(m),{isSupported:i,stop:m}}function m1(t,e={}){const{reset:n=!0,windowResize:r=!0,windowScroll:a=!0,immediate:s=!0}=e,o=L(0),i=L(0),l=L(0),d=L(0),m=L(0),b=L(0),v=L(0),y=L(0);function w(){const f=de(t);if(!f){n&&(o.value=0,i.value=0,l.value=0,d.value=0,m.value=0,b.value=0,v.value=0,y.value=0);return}const g=f.getBoundingClientRect();o.value=g.height,i.value=g.bottom,l.value=g.left,d.value=g.right,m.value=g.top,b.value=g.width,v.value=g.x,y.value=g.y}return du(t,w),G(()=>de(t),f=>!f&&w()),a&&Z("scroll",w,{capture:!0,passive:!0}),r&&Z("resize",w,{passive:!0}),et(()=>{s&&w()}),{height:o,bottom:i,left:l,right:d,top:m,width:b,x:v,y,update:w}}function f1(t,{window:e=oe,scrollTarget:n}={}){const r=L(!1),a=()=>{if(!e)return;const s=e.document,o=de(t);if(!o)r.value=!1;else{const i=o.getBoundingClientRect();r.value=i.top<=(e.innerHeight||s.documentElement.clientHeight)&&i.left<=(e.innerWidth||s.documentElement.clientWidth)&&i.bottom>=0&&i.right>=0}};return G(()=>de(t),()=>a(),{immediate:!0,flush:"post"}),e&&Z(n||e,"scroll",a,{capture:!1,passive:!0}),r}const pu={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function hu(t={}){const{reactive:e=!1,target:n=oe,aliasMap:r=pu,passive:a=!0,onEventFired:s=Oe}=t,o=Se(new Set),i={toJSON(){return{}},current:o},l=e?Se(i):i,d=new Set,m=new Set;function b(f,g){f in l&&(e?l[f]=g:l[f].value=g)}function v(){o.clear();for(const f of m)b(f,!1)}function y(f,g){var x,P;const O=(x=f.key)==null?void 0:x.toLowerCase(),U=[(P=f.code)==null?void 0:P.toLowerCase(),O].filter(Boolean);O&&(g?o.add(O):o.delete(O));for(const X of U)m.add(X),b(X,g);O==="meta"&&!g?(d.forEach(X=>{o.delete(X),b(X,!1)}),d.clear()):typeof f.getModifierState=="function"&&f.getModifierState("Meta")&&g&&[...o,...U].forEach(X=>d.add(X))}Z(n,"keydown",f=>(y(f,!0),s(f)),{passive:a}),Z(n,"keyup",f=>(y(f,!1),s(f)),{passive:a}),Z("blur",v,{passive:!0}),Z("focus",v,{passive:!0});const w=new Proxy(l,{get(f,g,x){if(typeof g!="string")return Reflect.get(f,g,x);if(g=g.toLowerCase(),g in r&&(g=r[g]),!(g in l))if(/[+_-]/.test(g)){const O=g.split(/[+_-]/g).map(H=>H.trim());l[g]=M(()=>O.every(H=>u(w[H])))}else l[g]=L(!1);const P=Reflect.get(f,g,x);return e?u(P):P}});return w}var cn;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(cn||(cn={}));var mu=Object.defineProperty,un=Object.getOwnPropertySymbols,fu=Object.prototype.hasOwnProperty,vu=Object.prototype.propertyIsEnumerable,dn=(t,e,n)=>e in t?mu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gu=(t,e)=>{for(var n in e||(e={}))fu.call(e,n)&&dn(t,n,e[n]);if(un)for(var n of un(e))vu.call(e,n)&&dn(t,n,e[n]);return t};const _u={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};gu({linear:Vc},_u);function v1(t="history",e={}){const{initialValue:n={},removeNullishValues:r=!0,removeFalsyValues:a=!1,write:s=!0,window:o=oe}=e;if(!o)return Se(n);const i=Se({});function l(){if(t==="history")return o.location.search||"";if(t==="hash"){const x=o.location.hash||"",P=x.indexOf("?");return P>0?x.slice(P):""}else return(o.location.hash||"").replace(/^#/,"")}function d(x){const P=x.toString();if(t==="history")return`${P?`?${P}`:""}${o.location.hash||""}`;if(t==="hash-params")return`${o.location.search||""}${P?`#${P}`:""}`;const O=o.location.hash||"#",H=O.indexOf("?");return H>0?`${O.slice(0,H)}${P?`?${P}`:""}`:`${O}${P?`?${P}`:""}`}function m(){return new URLSearchParams(l())}function b(x){const P=new Set(Object.keys(i));for(const O of x.keys()){const H=x.getAll(O);i[O]=H.length>1?H:x.get(O)||"",P.delete(O)}Array.from(P).forEach(O=>delete i[O])}const{pause:v,resume:y}=Qn(i,()=>{const x=new URLSearchParams("");Object.keys(i).forEach(P=>{const O=i[P];Array.isArray(O)?O.forEach(H=>x.append(P,H)):r&&O==null||a&&!O?x.delete(P):x.set(P,O)}),w(x)},{deep:!0});function w(x,P){v(),P&&b(x),o.history.replaceState(o.history.state,o.document.title,o.location.pathname+d(x)),y()}function f(){s&&w(m(),!0)}Z(o,"popstate",f,!1),t!=="history"&&Z(o,"hashchange",f,!1);const g=m();return g.keys().next().value?b(g):Object.assign(i,n),i}function bu(t={}){const{window:e=oe,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:a=!0,includeScrollbar:s=!0}=t,o=L(n),i=L(r),l=()=>{e&&(s?(o.value=e.innerWidth,i.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,i.value=e.document.documentElement.clientHeight))};return l(),et(l),Z("resize",l,{passive:!0}),a&&Z("orientationchange",l,{passive:!0}),{width:o,height:i}}const pn=L([{route:"/blog/nginx/",meta:{description:`# Nginx\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"Nginx",date:"2023-12-26 09:08:33"}},{route:"/blog/nginx/正向代理与反向代理.html",meta:{description:"",cover:"/blog/nginx/images/反向代理.png",recommend:!1,tag:["Nginx","反向代理"],date:"2023-11-29 21:00:00",title:"正向代理与反向代理"}},{route:"/blog/redis/",meta:{description:`# Redis\r
\r
| 日期 | 标题                    |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"Redis",date:"2023-12-26 09:08:33"}},{route:"/blog/database/mysql/",meta:{description:`# MySQL\r
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
| `,hidden:!0,readingTime:!1,recommend:1,title:"JavaSE",date:"2023-12-26 09:08:33"}},{route:"/blog/java/juc/",meta:{description:`# JUC\r
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
| `,hidden:!0,readingTime:!1,recommend:1,title:"代码随想录",date:"2023-12-26 09:08:33"}},{route:"/blog/leetcode/algorithm/两数之和.html",meta:{description:"",recommend:!1,tag:["哈希表"],date:"2023-12-15 14:00:00",title:"两数之和"}},{route:"/blog/leetcode/algorithm/买卖股票的最佳时机.html",meta:{description:"",recommend:!1,tag:["哈希表","快慢指针"],date:"2023-12-15 17:00:00",title:"买卖股票的最佳时机"}},{route:"/blog/leetcode/algorithm/二分查找.html",meta:{description:"",recommend:!1,tag:["二分查找"],date:"2023-12-16 10:00:00",title:"二分查找"}},{route:"/blog/leetcode/algorithm/反转链表.html",meta:{description:"",recommend:!1,tag:["迭代","递归","双指针"],date:"2023-12-13 21:00:00",title:"反转链表"}},{route:"/blog/leetcode/algorithm/合并两个有序链表.html",meta:{description:"",recommend:!1,tag:["递归","迭代"],date:"2023-12-15 11:00:00",title:"合并两个有序链表"}},{route:"/blog/leetcode/algorithm/最大子序和.html",meta:{description:"",recommend:!1,tag:["贪心","动态规划"],date:"2023-12-14 17:00:00",title:"最大子序和"}},{route:"/blog/leetcode/algorithm/有序数组的平方.html",meta:{description:"",recommend:!1,tag:["双指针"],date:"2023-12-16 15:00:00",title:"有序数组的平方"}},{route:"/blog/leetcode/algorithm/环形链表.html",meta:{description:"",recommend:!1,tag:["哈希表","快慢指针"],date:"2023-12-15 16:00:00",title:"环形链表"}},{route:"/blog/leetcode/algorithm/移除元素.html",meta:{description:"",recommend:!1,tag:["快慢指针","相向指针"],date:"2023-12-16 10:00:00",title:"移除元素"}},{route:"/blog/leetcode/algorithm/移除链表元素.html",meta:{description:"",recommend:!1,tag:["虚拟头节点"],date:"2023-12-22 14:00:00",title:"移除链表元素"}},{route:"/blog/leetcode/algorithm/螺旋矩阵II.html",meta:{description:"",recommend:!1,tag:["二分查找"],date:"2023-12-18 21:00:00",title:"螺旋矩阵II"}},{route:"/blog/leetcode/algorithm/设计链表.html",meta:{description:"",recommend:!1,tag:["虚拟头节点"],date:"2023-12-22 14:00:00",title:"设计链表"}},{route:"/blog/leetcode/algorithm/长度最小的子数组.html",meta:{description:"",recommend:!1,tag:["双指针"],date:"2023-12-16 16:00:00",title:"长度最小的子数组"}},{route:"/blog/leetcode/database/",meta:{description:`\r
# 困难题\r
| 时间       | 题目                                                    | 难度 |\r
| `,hidden:!0,readingTime:!1,recommend:1,title:"困难题",date:"2023-12-26 18:02:51"}},{route:"/blog/mq/kafka/",meta:{description:`# Kafka\r
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
| `,cover:"/blog/spring/springframework/images/组件依赖注入配置.png",recommend:!1,tag:["SpringFramework","IoC","DI"],date:"2023-12-01 20:00:00",top:1,title:"基于XML配置方式管理Bean"}},{route:"/blog/spring/springframework/基于注解方式管理Bean.html",meta:{description:`# 基于注解方式管理Bean\r
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
  | `,cover:"/blog/spring/springframework/images/Component注解.png",recommend:!1,tag:["SpringFramework","IoC","DI"],date:"2023-12-06 20:00:00",top:1,title:"基于注解方式管理Bean"}},{route:"/blog/spring/springframework/基于配置类方式管理Bean.html",meta:{description:"",cover:"/blog/spring/springframework/images/Component注解.png",hidden:!0,recommend:!1,tag:["SpringFramework","IoC","DI"],date:"2023-12-01 20:00:00",title:"基于配置类方式管理Bean"}},{route:"/blog/spring/springframework/整合Spring5-Test5搭建测试环境.html",meta:{description:"",title:"",date:"2023-12-26 09:08:33"}},{route:"/blog/leetcode/database/medium/最后一个能进入巴士的人.html",meta:{description:`\r
# 最后一个能进入巴士的人\r
\r
表: \`Queue\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 14:30:00",title:"最后一个能进入巴士的人"}},{route:"/blog/leetcode/database/medium/股票的资本损益.html",meta:{description:`\r
# 股票的资本损益\r
\r
\`Stocks\` 表：\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-24 13:00:00",title:"股票的资本损益"}},{route:"/blog/leetcode/database/simple/2020年最后一次登录.html",meta:{description:`\r
# 2020年最后一次登录\r
\r
表: \`Logins\`\r
\r
\`\`\`\r
+`,hidden:!0,recommend:!1,date:"2023-12-26 16:00:00",title:"2020年最后一次登录"}},{route:"/blog/leetcode/database/simple/丢失信息的雇员.html",meta:{description:`\r
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
+`,hidden:!0,recommend:!1,date:"2023-12-26 16:20:00",title:"员工奖金"}},{route:"/blog/leetcode/database/simple/按日期分组销售产品.html",meta:{description:`\r
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
+`,hidden:!0,recommend:!1,date:"2023-12-24 11:30:00",title:"项目员工I"}}]),yu={customSearchQuery:function(e){return e.replace(/[\u4E00-\u9FA5]/g," $& ").replace(/\s+/g," ").trim()}};function ku(t,e="yyyy-MM-dd hh:mm:ss"){t instanceof Date||(t=new Date(t));const n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,`${t.getFullYear()}`.substr(4-RegExp.$1.length)));for(const r in n)new RegExp(`(${r})`).test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length===1?n[r]:`00${n[r]}`.substr(`${n[r]}`.length)));return e}const wu={},$u={width:"594",height:"112",viewBox:"0 0 594 112",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Su=vn('<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',11),Cu=[Su];function Mu(t,e){return c(),h("svg",$u,Cu)}const Lu=I(wu,[["render",Mu]]),Tt=t=>(ie("data-v-3e38d8c7"),t=t(),le(),t),Iu={class:"blog-search","data-pagefind-ignore":"all"},Pu=Tt(()=>p("svg",{width:"14",height:"14",viewBox:"0 0 20 20"},[p("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Vu={key:0,class:"search-tip"},Au={key:1,class:"metaKey"},xu={class:"search-dialog"},Ou={class:"link"},Eu={class:"title"},Tu={key:0,class:"date"},Nu=["innerHTML"],Hu={class:"command-palette-logo"},Du={href:"https://github.com/cloudcannon/pagefind",target:"_blank",rel:"noopener noreferrer"},Bu=Tt(()=>p("span",{class:"command-palette-Label"},"Search by",-1)),Ru=Tt(()=>p("ul",{class:"command-palette-commands"},[p("li",null,[p("kbd",{class:"command-palette-commands-key"},[p("svg",{width:"15",height:"15","aria-label":"Enter key",role:"img"},[p("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[p("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"})])])]),p("span",{class:"command-palette-Label"},"to select")]),p("li",null,[p("kbd",{class:"command-palette-commands-key"},[p("svg",{width:"15",height:"15","aria-label":"Arrow down",role:"img"},[p("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[p("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"})])])]),p("kbd",{class:"command-palette-commands-key"},[p("svg",{width:"15",height:"15","aria-label":"Arrow up",role:"img"},[p("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[p("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"})])])]),p("span",{class:"command-palette-Label"},"to navigate")]),p("li",null,[p("kbd",{class:"command-palette-commands-key"},[p("svg",{width:"15",height:"15","aria-label":"Escape key",role:"img"},[p("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[p("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])])]),p("span",{class:"command-palette-Label"},"to close")])],-1)),Fu=S({__name:"Search",setup(t){lr(V=>({"3fb90223":d.value}));const e=L([]),n=yu,{localeIndex:r,site:a}=ot(),s=M(()=>{var V;return{...n,...((V=n==null?void 0:n.locales)==null?void 0:V[r.value])||{}}}),o=M(()=>{var V;return((V=s.value)==null?void 0:V.showDate)??!0}),i=bu(),l=M(()=>i.width.value<760),d=M(()=>l.value?0:1),m=M(()=>{var V;return(V=s.value)!=null&&V.heading?s.value.heading.replace(/\{\{searchResult\}\}/,e.value.length):`Total: ${e.value.length} search results.`}),b=L("");fe(()=>{b.value=/(Mac|iPhone|iPod|iPad)/i.test(navigator==null?void 0:navigator.platform)?"⌘":"Ctrl"});const v=L(!1),y=L(""),w=hu({passive:!1,onEventFired(V){V.ctrlKey&&V.key==="k"&&V.type==="keydown"&&V.preventDefault()}}),f=w["Meta+K"],g=w["Ctrl+K"],x=w.Escape;G(f,V=>{V&&(v.value=!0)}),G(g,V=>{V&&(v.value=!0)}),G(x,V=>{V&&(v.value=!1)});function P(){if(!y.value){e.value=[];return}e.value=pn.value.filter(V=>`${V.meta.description}${V.meta.title}`.includes(y.value)).map(V=>{var j,Y;return{...V,meta:{...V.meta,description:((Y=(j=V.meta)==null?void 0:j.description)==null?void 0:Y.replace(new RegExp(`(${y.value})`,"g"),"<mark>$1</mark>"))||""}}}),e.value.sort((V,j)=>+new Date(j.meta.date)-+new Date(V.meta.date))}const O=M(()=>{var V;return((V=s.value)==null?void 0:V.resultOptimization)??!0});G(()=>y.value,async()=>{var V,j,Y;if(!((V=window==null?void 0:window.__pagefind__)!=null&&V.search))P();else{const J=typeof s.value.customSearchQuery=="function"?s.value.customSearchQuery(y.value):y.value;await((Y=(j=window==null?void 0:window.__pagefind__)==null?void 0:j.search)==null?void 0:Y.call(j,J).then(async Le=>{const nt=(await Promise.all(Le.results.map(re=>re.data()))).map(re=>{var ye;return{route:re.url.startsWith(a.value.base)?re.url:Ge(re.url),meta:{title:re.meta.title,description:re.excerpt,date:(ye=re==null?void 0:re.meta)==null?void 0:ye.date}}}).filter(re=>!O.value||pn.value.some(ye=>ye.route===re.route));e.value=nt.filter(s.value.filter??(()=>!0))}))}ce(()=>{document.querySelectorAll('div[aria-disabled="true"]').forEach(J=>{J.setAttribute("aria-disabled","false")})})});function H(V){V.target===V.currentTarget&&(v.value=!1)}G(()=>v.value,V=>{var j;V?ce(()=>{var Y;(Y=document.querySelector("div[command-dialog-mask]"))==null||Y.addEventListener("click",H)}):(j=document.querySelector("div[command-dialog-mask]"))==null||j.removeEventListener("click",H)});const U=L(999),X=L(0),Q=M(()=>{const j=X.value%Math.ceil(e.value.length/U.value)*U.value;return e.value.slice(j,j+U.value)}),N=cr(),R=Ee();function ne(V){v.value=!1,R.path!==V.value&&N.go(V.value)}const{lang:he}=ot(),ae=M(()=>s.value.langReload??!0);return G(()=>he.value,()=>{ae.value&&window.location.reload()}),(V,j)=>{var Y;return c(),h("div",Iu,[p("div",{class:"nav-search-btn-wait",onClick:j[0]||(j[0]=J=>v.value=!0)},[Pu,l.value?C("",!0):(c(),h("span",Vu,D(((Y=s.value)==null?void 0:Y.btnPlaceholder)||"Search"),1)),l.value?C("",!0):(c(),h("span",Au,D(b.value)+" K ",1))]),$(u(Ie).Dialog,{visible:v.value,theme:"algolia"},ur({header:k(()=>{var J;return[$(u(Ie).Input,{value:y.value,"onUpdate:value":j[1]||(j[1]=Le=>y.value=Le),placeholder:((J=s.value)==null?void 0:J.placeholder)||"Search Docs"},null,8,["value","placeholder"])]}),body:k(()=>[p("div",xu,[$(u(Ie).List,null,{default:k(()=>[e.value.length?(c(),E(u(Ie).Group,{key:1,heading:m.value},{default:k(()=>[(c(!0),h(W,null,ee(Q.value,J=>(c(),E(u(Ie).Item,{key:J.route,"data-value":J.route,onSelect:ne},{default:k(()=>[p("div",Ou,[p("div",Eu,[p("span",null,D(J.meta.title),1),o.value&&J.meta.date?(c(),h("span",Tu,D(u(ku)(J.meta.date,"yyyy-MM-dd")),1)):C("",!0)]),p("div",{class:"des",innerHTML:J.meta.description},null,8,Nu)])]),_:2},1032,["data-value"]))),128))]),_:1},8,["heading"])):(c(),E(u(Ie).Empty,{key:0},{default:k(()=>{var J;return[te(D(((J=s.value)==null?void 0:J.emptyText)||"No results found."),1)]}),_:1}))]),_:1})])]),_:2},[e.value.length?{name:"footer",fn:k(()=>[p("div",Hu,[p("a",Du,[Bu,$(Lu,{style:{width:"77px"}})])]),Ru]),key:"0"}:void 0]),1032,["visible"])])}}}),ju=I(Fu,[["__scopeId","data-v-3e38d8c7"]]),zu=S({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=B();return(n,r)=>u(e).socialLinks?(c(),E(xt,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):C("",!0)}}),Uu=I(zu,[["__scopeId","data-v-3e8e2c11"]]),Qu=["href"],qu=S({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=B(),{hasSidebar:r}=ve(),{currentLang:a}=Te();return(s,o)=>(c(),h("div",{class:z(["VPNavBarTitle",{"has-sidebar":u(r)}])},[p("a",{class:"title",href:u(n).logoLink??u(St)(u(a).link)},[_(s.$slots,"nav-bar-title-before",{},void 0,!0),u(n).logo?(c(),E(Ue,{key:0,class:"logo",image:u(n).logo},null,8,["image"])):C("",!0),u(n).siteTitle?(c(),h(W,{key:1},[te(D(u(n).siteTitle),1)],64)):u(n).siteTitle===void 0?(c(),h(W,{key:2},[te(D(u(e).title),1)],64)):C("",!0),_(s.$slots,"nav-bar-title-after",{},void 0,!0)],8,Qu)],2))}}),Wu=I(qu,[["__scopeId","data-v-e0604155"]]),Gu={},Ku={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ju=p("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),Xu=p("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),Zu=[Ju,Xu];function Yu(t,e){return c(),h("svg",Ku,Zu)}const Kn=I(Gu,[["render",Yu]]),ed={class:"items"},td={class:"title"},nd=S({__name:"VPNavBarTranslations",setup(t){const{theme:e}=B(),{localeLinks:n,currentLang:r}=Te({correspondingLink:!0});return(a,s)=>u(n).length&&u(r).label?(c(),E(At,{key:0,class:"VPNavBarTranslations",icon:Kn,label:u(e).langMenuLabel||"Change language"},{default:k(()=>[p("div",ed,[p("p",td,D(u(r).label),1),(c(!0),h(W,null,ee(u(n),o=>(c(),E(Xe,{key:o.link,item:o},null,8,["item"]))),128))])]),_:1},8,["label"])):C("",!0)}}),rd=I(nd,[["__scopeId","data-v-417a068e"]]),ad=t=>(ie("data-v-18d4faf0"),t=t(),le(),t),sd={class:"container"},od={class:"title"},id={class:"content"},ld=ad(()=>p("div",{class:"curtain"},null,-1)),cd={class:"content-body"},ud=S({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:e}=fn(),{hasSidebar:n}=ve(),{frontmatter:r}=B(),a=L({});return hn(()=>{a.value={"has-sidebar":n.value,top:r.value.layout==="home"&&e.value===0}}),(s,o)=>(c(),h("div",{class:z(["VPNavBar",a.value])},[p("div",sd,[p("div",od,[$(Wu,null,{"nav-bar-title-before":k(()=>[_(s.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[_(s.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),p("div",id,[ld,p("div",cd,[_(s.$slots,"nav-bar-content-before",{},void 0,!0),$(ju,{class:"search"}),$(ji,{class:"menu"}),$(rd,{class:"translations"}),$(Eo,{class:"appearance"}),$(Uu,{class:"social-links"}),$(Li,{class:"extra"}),_(s.$slots,"nav-bar-content-after",{},void 0,!0),$(Oi,{class:"hamburger",active:s.isScreenOpen,onClick:o[0]||(o[0]=i=>s.$emit("toggle-screen"))},null,8,["active"])])])])],2))}}),dd=I(ud,[["__scopeId","data-v-18d4faf0"]]),pd={key:0,class:"VPNavScreenAppearance"},hd={class:"text"},md=S({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=B();return(r,a)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),h("div",pd,[p("p",hd,D(u(n).darkModeSwitchLabel||"Appearance"),1),$(Pt)])):C("",!0)}}),fd=I(md,[["__scopeId","data-v-0c992459"]]),vd=S({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=Je("close-screen");return(n,r)=>(c(),E(pe,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:k(()=>[te(D(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),gd=I(vd,[["__scopeId","data-v-4af47512"]]),_d={},bd={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},yd=p("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),kd=[yd];function wd(t,e){return c(),h("svg",bd,kd)}const $d=I(_d,[["render",wd]]),Sd=S({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=Je("close-screen");return(n,r)=>(c(),E(pe,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:u(e)},{default:k(()=>[te(D(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Jn=I(Sd,[["__scopeId","data-v-5f784394"]]),Cd={class:"VPNavScreenMenuGroupSection"},Md={key:0,class:"title"},Ld=S({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(c(),h("div",Cd,[e.text?(c(),h("p",Md,D(e.text),1)):C("",!0),(c(!0),h(W,null,ee(e.items,r=>(c(),E(Jn,{key:r.text,item:r},null,8,["item"]))),128))]))}}),Id=I(Ld,[["__scopeId","data-v-18d517aa"]]),Pd=["aria-controls","aria-expanded"],Vd=["innerHTML"],Ad=["id"],xd={key:1,class:"group"},Od=S({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=L(!1),r=M(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function a(){n.value=!n.value}return(s,o)=>(c(),h("div",{class:z(["VPNavScreenMenuGroup",{open:n.value}])},[p("button",{class:"button","aria-controls":r.value,"aria-expanded":n.value,onClick:a},[p("span",{class:"button-text",innerHTML:s.text},null,8,Vd),$($d,{class:"button-icon"})],8,Pd),p("div",{id:r.value,class:"items"},[(c(!0),h(W,null,ee(s.items,i=>(c(),h(W,{key:i.text},["link"in i?(c(),h("div",{key:i.text,class:"item"},[$(Jn,{item:i},null,8,["item"])])):(c(),h("div",xd,[$(Id,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,Ad)],2))}}),Ed=I(Od,[["__scopeId","data-v-b66aaaac"]]),Td={key:0,class:"VPNavScreenMenu"},Nd=S({__name:"VPNavScreenMenu",setup(t){const{theme:e}=B();return(n,r)=>u(e).nav?(c(),h("nav",Td,[(c(!0),h(W,null,ee(u(e).nav,a=>(c(),h(W,{key:a.text},["link"in a?(c(),E(gd,{key:0,item:a},null,8,["item"])):(c(),E(Ed,{key:1,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):C("",!0)}}),Hd=S({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=B();return(n,r)=>u(e).socialLinks?(c(),E(xt,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):C("",!0)}}),Dd={class:"list"},Bd=S({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=Te({correspondingLink:!0}),r=L(!1);function a(){r.value=!r.value}return(s,o)=>u(e).length&&u(n).label?(c(),h("div",{key:0,class:z(["VPNavScreenTranslations",{open:r.value}])},[p("button",{class:"title",onClick:a},[$(Kn,{class:"icon lang"}),te(" "+D(u(n).label)+" ",1),$(Mn,{class:"icon chevron"})]),p("ul",Dd,[(c(!0),h(W,null,ee(u(e),i=>(c(),h("li",{key:i.link,class:"item"},[$(pe,{class:"link",href:i.link},{default:k(()=>[te(D(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):C("",!0)}}),Rd=I(Bd,[["__scopeId","data-v-605851c6"]]),Fd={class:"container"},jd=S({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=L(null),n=kn(Pe?document.body:null);return(r,a)=>(c(),E(We,{name:"fade",onEnter:a[0]||(a[0]=s=>n.value=!0),onAfterLeave:a[1]||(a[1]=s=>n.value=!1)},{default:k(()=>[r.open?(c(),h("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[p("div",Fd,[_(r.$slots,"nav-screen-content-before",{},void 0,!0),$(Nd,{class:"menu"}),$(Rd,{class:"translations"}),$(fd,{class:"appearance"}),$(Hd,{class:"social-links"}),_(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):C("",!0)]),_:3}))}}),zd=I(jd,[["__scopeId","data-v-bd059bce"]]),Ud={key:0,class:"VPNav"},Qd=S({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:r}=po(),{frontmatter:a}=B(),s=M(()=>a.value.navbar!==!1);return wt("close-screen",n),_e(()=>{Pe&&document.documentElement.classList.toggle("hide-nav",!s.value)}),(o,i)=>s.value?(c(),h("header",Ud,[$(dd,{"is-screen-open":u(e),onToggleScreen:u(r)},{"nav-bar-title-before":k(()=>[_(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[_(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[_(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[_(o.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),$(zd,{open:u(e)},{"nav-screen-content-before":k(()=>[_(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[_(o.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):C("",!0)}}),qd=I(Qd,[["__scopeId","data-v-b302a458"]]),Wd=t=>(ie("data-v-13414bb8"),t=t(),le(),t),Gd=["role","tabindex"],Kd=Wd(()=>p("div",{class:"indicator"},null,-1)),Jd={key:1,class:"items"},Xd=S({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:r,isLink:a,isActiveLink:s,hasActiveLink:o,hasChildren:i,toggle:l}=Tr(M(()=>e.item)),d=M(()=>i.value?"section":"div"),m=M(()=>a.value?"a":"div"),b=M(()=>i.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),v=M(()=>a.value?void 0:"button"),y=M(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:n.value},{"is-link":a.value},{"is-active":s.value},{"has-active":o.value}]);function w(g){"key"in g&&g.key!=="Enter"||!e.item.link&&l()}function f(){e.item.link&&l()}return(g,x)=>{const P=Me("VPSidebarItem",!0);return c(),E(we(d.value),{class:z(["VPSidebarItem",y.value])},{default:k(()=>[g.item.text?(c(),h("div",Re({key:0,class:"item",role:v.value},dr(g.item.items?{click:w,keydown:w}:{},!0),{tabindex:g.item.items&&0}),[Kd,g.item.link?(c(),E(pe,{key:0,tag:m.value,class:"link",href:g.item.link,rel:g.item.rel,target:g.item.target},{default:k(()=>[(c(),E(we(b.value),{class:"text",innerHTML:g.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),E(we(b.value),{key:1,class:"text",innerHTML:g.item.text},null,8,["innerHTML"])),g.item.collapsed!=null?(c(),h("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:f,onKeydown:pr(f,["enter"]),tabindex:"0"},[$(It,{class:"caret-icon"})],32)):C("",!0)],16,Gd)):C("",!0),g.item.items&&g.item.items.length?(c(),h("div",Jd,[g.depth<5?(c(!0),h(W,{key:0},ee(g.item.items,O=>(c(),E(P,{key:O.text,item:O,depth:g.depth+1},null,8,["item","depth"]))),128)):C("",!0)])):C("",!0)]),_:1},8,["class"])}}}),Zd=I(Xd,[["__scopeId","data-v-13414bb8"]]),Xn=t=>(ie("data-v-e5410bfe"),t=t(),le(),t),Yd=Xn(()=>p("div",{class:"curtain"},null,-1)),e1={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},t1=Xn(()=>p("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),n1=S({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=ve(),r=t,a=L(null),s=kn(Pe?document.body:null);return G([r,a],()=>{var o;r.open?(s.value=!0,(o=a.value)==null||o.focus()):s.value=!1},{immediate:!0,flush:"post"}),(o,i)=>u(n)?(c(),h("aside",{key:0,class:z(["VPSidebar",{open:o.open}]),ref_key:"navEl",ref:a,onClick:i[0]||(i[0]=hr(()=>{},["stop"]))},[Yd,p("nav",e1,[t1,_(o.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),h(W,null,ee(u(e),l=>(c(),h("div",{key:l.text,class:"group"},[$(Zd,{item:l,depth:0},null,8,["item"])]))),128)),_(o.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):C("",!0)}}),r1=I(n1,[["__scopeId","data-v-e5410bfe"]]),a1=S({__name:"VPSkipLink",setup(t){const e=Ee(),n=L();G(()=>e.path,()=>n.value.focus());function r({target:a}){const s=document.getElementById(decodeURIComponent(a.hash).slice(1));if(s){const o=()=>{s.removeAttribute("tabindex"),s.removeEventListener("blur",o)};s.setAttribute("tabindex","-1"),s.addEventListener("blur",o),s.focus(),window.scrollTo(0,0)}}return(a,s)=>(c(),h(W,null,[p("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),p("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}}),s1=I(a1,[["__scopeId","data-v-e7eff6c1"]]),o1=S({__name:"Layout",setup(t){const{isOpen:e,open:n,close:r}=ve(),a=Ee();G(()=>a.path,r),Er(e,r);const{frontmatter:s}=B(),o=mr(),i=M(()=>!!o["home-hero-image"]);return wt("hero-image-slot-exists",i),(l,d)=>{const m=Me("Content");return u(s).layout!==!1?(c(),h("div",{key:0,class:z(["Layout",u(s).pageClass])},[_(l.$slots,"layout-top",{},void 0,!0),$(s1),$(br,{class:"backdrop",show:u(e),onClick:u(r)},null,8,["show","onClick"]),$(qd,null,{"nav-bar-title-before":k(()=>[_(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[_(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[_(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[_(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":k(()=>[_(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[_(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),$(uo,{open:u(e),onOpenMenu:u(n)},null,8,["open","onOpenMenu"]),$(r1,{open:u(e)},{"sidebar-nav-before":k(()=>[_(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":k(()=>[_(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),$(js,{"data-pagefind-body":""},{"page-top":k(()=>[_(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[_(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":k(()=>[_(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":k(()=>[_(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":k(()=>[_(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":k(()=>[_(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[_(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[_(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[_(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":k(()=>[_(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[_(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[_(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":k(()=>[_(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[_(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":k(()=>[_(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[_(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[_(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[_(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[_(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[_(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),$(Ws),_(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),E(m,{key:1}))}}}),i1=I(o1,[["__scopeId","data-v-ab453002"]]),g1={Layout:i1,enhanceApp:({app:t})=>{t.component("Badge",vr)}};export{Jr as V,Z as a,bu as b,m1 as c,du as d,de as e,c1 as f,Lc as g,u1 as h,Et as i,h1 as j,p1 as k,v1 as l,f1 as m,g1 as n,d1 as o,Ye as t,eu as u};
