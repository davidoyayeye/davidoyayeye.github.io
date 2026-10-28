(function(){
var root=document.documentElement,$=function(s){return document.querySelector(s)};
/* Theme */
var tb=$('#theme');
function sync(){var d=root.getAttribute('data-theme')==='dark';tb.setAttribute('aria-label',d?'Switch to light mode':'Switch to dark mode');tb.setAttribute('aria-pressed',String(d))}
tb.addEventListener('click',function(){var n=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}sync()});
sync();$('#yr').textContent=new Date().getFullYear();
/* Mobile nav */
var nav=$('#nav'),mb=$('#menu');
function menu(o){nav.classList.toggle('open',o);mb.setAttribute('aria-expanded',String(o));mb.setAttribute('aria-label',o?'Close menu':'Open menu')}
mb.addEventListener('click',function(){menu(!nav.classList.contains('open'))});
nav.addEventListener('click',function(e){if(e.target.closest('a'))menu(false)});
/* Image fallback label (portrait / projects) */
function fb(img){var t=img.getAttribute('data-fallback')||'Image not found: '+decodeURI(img.getAttribute('src'));var s=document.createElement('div');s.className='ph';s.textContent=t;img.replaceWith(s)}
document.addEventListener('error',function(e){if(e.target.tagName==='IMG')fb(e.target)},true);
document.querySelectorAll('img[data-fallback]').forEach(function(i){if(i.complete&&!i.naturalWidth)fb(i)});
/* Projects: edit this list. Paths are relative to index.html (your existing images/ folder). */
var B='images/BRAND/',S='images/SOCIAL%20MEDIA/',K='images/books/',P='images/POSTER%20%26%20FLYER/';
var C={s:'Social Media Design',d:'Digital Communication',c:'Campaign Creatives',p:'Promotional Materials',b:'Branding and Identity'};
var D={s:'Scroll-stopping visuals made for the feed.',d:'Clear, purposeful content that connects with its audience.',c:'Event and product campaigns with one clear message.',p:'Flyers, posters and covers that stand out in print.',b:'Identities applied across real-world touchpoints.'};
var projects=[
{t:"Loreh Collectionz Anniversary Sale",c:'s',l:"Product campaign",d:"Loreh Collectionz anniversary sale social campaign.",i:[S+"66bcc8251957175.6a439c7fdad68.jpg"]},
{t:"Tonie Jewelry",c:'s',l:"Product promotion",d:"Social media promotional design for Tonie Jewelry.",i:[S+"Tonie%20Jewelry.jfif"]},
{t:"Travel & Medical Insurance",c:'s',l:"Service promotion",d:"Meridian travel and medical insurance promotional flyer.",i:[S+"42ee1b251953613.6a438f828c529.jpg"]},
{t:"IT Fundamentals & AI Awareness",c:'s',l:"Course promotion",d:"TechAvac IT fundamentals and AI awareness training flyer.",i:[S+"fe386e248057199.69e8d624e92d3.png"]},
{t:"GRC: The Lucrative Side of Security",c:'d',l:"Educational content",d:"TechAvac cybersecurity GRC educational campaign graphic.",i:[S+"30a4df248058121.69e8d9857f5e2.jpg"]},
{t:"Project Writing Webinar",c:'d',l:"Educational content",d:"Testimony Edu-Consult project writing webinar flyer.",i:[S+"63cae7c4ffe8d73596d936fe0260ed7b.jpg"]},
{t:"Soft Skills vs. Hard Skills",c:'d',l:"Educational content",d:"TechAvac soft skills versus hard skills social graphic.",i:[S+"994010248058121.69e8d9857fa85.png"]},
{t:"Light Conference",c:'c',l:"Event campaign",d:"Promotional flyer for the Light Conference.",i:[S+"15320b6791016e2e3840f5cb82293c77.jpg"]},
{t:"Why Church Still Matters",c:'c',l:"Event campaign",d:"Church Without Walls conversation Sunday event flyer.",i:[S+"32fa59251956719.6a439aff71d4b.jpg"]},
{t:"Rescue Night",c:'c',l:"Event campaign",d:"Flyer for a national interdenominational Rescue Night.",i:[S+"341658231890511.6891da995a7a5.jpg"]},
{t:"Fasting According to Scriptures",c:'c',l:"Event campaign",d:"Church Without Walls fasting according to scriptures flyer.",i:[S+"35fdeb0fb18b3097e8bb7108945d3287.jpg"]},
{t:"Prayer",c:'c',l:"Event campaign",d:"Church Without Walls prayer service flyer.",i:[S+"9ecb4b251953613.6a438f828be03.jpg"]},
{t:"Apostolos",c:'c',l:"Event campaign",d:"Church Without Walls Apostolos event flyer.",i:[S+"a3602b251953613.6a438f828c87e.jpg"]},
{t:"Freedom Under",c:'c',l:"Event campaign",d:"Freedom Under church event flyer.",i:[S+"cc66398a5fcc259da175fd1f41582a7a.jpg"]},
{t:"Converse 25: Church Journey",c:'c',l:"Event campaign",d:"Converse 25 Church Journey campaign flyer.",i:[S+"e58ac2239278203.6925f1a9bb9e6.webp"]},
{t:"Poster & Flyer Design 01",c:'p',l:"Poster and flyer design",d:"Composition, typography and imagery built to make an important message stand out.",i:[P+"811768248058121.69e8d9857feb0.jpg"]},
{t:"Poster & Flyer Design 02",c:'p',l:"Poster and flyer design",d:"Composition, typography and imagery built to make an important message stand out.",i:[P+"25e7da231890511.6891da995997a.jpg"]},
{t:"Poster & Flyer Design 03",c:'p',l:"Poster and flyer design",d:"Composition, typography and imagery built to make an important message stand out.",i:[P+"a7d0e6251956719.6a439aff7180d.png"]},
{t:"Poster & Flyer Design 04",c:'p',l:"Poster and flyer design",d:"Composition, typography and imagery built to make an important message stand out.",i:[P+"5e82ec239278321.6925f22d87f71.webp"]},
{t:"Poster & Flyer Design 05",c:'p',l:"Poster and flyer design",d:"Composition, typography and imagery built to make an important message stand out.",i:[P+"76cc69ced0e0ba923d2b454486d614ff.jpg"]},
{t:"Poster & Flyer Design 06",c:'p',l:"Poster and flyer design",d:"Composition, typography and imagery built to make an important message stand out.",i:[P+"f6246d231892343.6891dffd12ae0.jpg"]},
{t:"Poster & Flyer Design 07",c:'p',l:"Poster and flyer design",d:"Composition, typography and imagery built to make an important message stand out.",i:[P+"5711a1c7f843c1ceb8b22e52f41cc2b1.jpg"]},
{t:"Poster & Flyer Design 08",c:'p',l:"Poster and flyer design",d:"Composition, typography and imagery built to make an important message stand out.",i:[P+"bc7eee248058551.69e8db2146b05.png"]},
{t:"Human Becoming",c:'p',l:"Book cover",d:"Book cover mockup for Human Becoming.",i:[K+"02fb1d251956473.6a439a2659e58.webp"]},
{t:"Divine Direction",c:'p',l:"Book cover",d:"Book cover mockup for Divine Direction.",i:[K+"1673ab251956473.6a439a2659a86.webp"]},
{t:"Gang of Bad Boys",c:'p',l:"Book cover",d:"Book cover mockup for Gang of Bad Boys in Gospel Ministry.",i:[K+"641609251956473.6a439a265927b.webp"]},
{t:"Loving Him Right",c:'p',l:"Book cover",d:"Book review artwork featuring Loving Him Right.",i:[K+"6a0b52251953613.6a438f828c195.jpg"]},
{t:"Beyond Goosebumps",c:'p',l:"Book cover",d:"Book cover mockup for Beyond Goosebumps.",i:[K+"982af7252048795.6a45733175c1b.png"]},
{t:"Yieldedness",c:'p',l:"Book cover",d:"Book cover mockup for Yieldedness.",i:[K+"a0432c251956473.6a439a26596b0.webp"]},
{t:"Christ Is Enough",c:'p',l:"Book cover",d:"Book cover mockup for Christ Is Enough.",i:[K+"bae2b7252048795.6a457331761da.png"]},
{t:"Courtship Decoded",c:'p',l:"Book cover",d:"Book cover mockup for Courtship Decoded.",i:[K+"ffad93252048795.6a45733176784.png"]},
{t:"Prime Haven Realty",c:'b',l:"Identity application",d:"Prime Haven Realty branding on apparel, stationery and promotional items.",i:[B+"bram.jpg"]},
{t:"The Thrift Guy",c:'b',l:"Retail identity",d:"The Thrift Guy retail identity applied to merchandise and apparel.",i:[B+"WhatsApp%20Image%202026-10-06%20at%2016.33.50.jpeg"]},
{t:"Chidosin Oil & Gas",c:'b',l:"Environmental graphics",d:"Chidosin Oil and Gas outdoor signage design mockups.",i:[B+"WhatsApp%20Image%202026-10-06%20at%2016.39.47.jpeg"]},
{t:"Fidelity Brand Experience",c:'b',l:"Exhibition design",d:"Fidelity-branded exhibition booth and campaign display.",i:[B+"WhatsApp%20Image%202026-10-06%20at%2016.39.48.jpeg"]}
];
var grid=$('#grid'),cats=$('#cats'),res=$('#result'),prev=$('#cat-prev'),next=$('#cat-next'),cur=null;
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function count(k){return projects.filter(function(p){return p.c===k}).length}
var CV={
s:'<div class="cover cv-s"><span class="m tl">Category 01</span><span class="disc"></span><div class="hd">Stop<br>the<br>scroll.</div><span class="m br">Social-first</span></div>',
d:'<div class="cover cv-d"><span class="m tl">Category 02</span><div class="hd">Make<br>it <i>clear.</i></div><div class="dots"><b></b><b></b><b></b><b></b></div><span class="m br">A consistent<br>digital presence</span></div>',
c:'<div class="cover cv-c"><span class="m tl">Category 03</span><span class="ring"></span><div class="hd">Create<br>the<br>shift</div><span class="m vt">Event visuals / 2026</span><span class="m bl">Concept · Composition</span></div>',
p:'<div class="cover cv-p"><span class="m tl">Category 04</span><span class="shadow"></span><div class="book"><div class="hd">The<br>power<br>of <i>words</i></div><span class="sub">A study in form &amp; feeling</span></div><span class="m vt">Editorial design</span><span class="m bl">Print &amp; editorial</span></div>',
b:'<div class="cover cv-b"><span class="m tl">Category 05</span><span class="mark"></span><div class="hd">Make<br>the <i>mark.</i></div><span class="m bl">Identity systems</span></div>'};
function drawCats(){cats.innerHTML=Object.keys(C).map(function(k){var n=count(k);
return '<button type="button" class="cat" data-c="'+k+'" aria-pressed="'+(k===cur)+'"><span class="cover-wrap" aria-hidden="true">'+CV[k]+'</span><span class="cat-info"><span class="cat-n">'+n+(n===1?' project':' projects')+'</span><span class="cat-t">'+C[k]+'</span><span class="cat-d">'+D[k]+'</span><span class="cat-go">'+(k===cur?'Showing now':'View projects')+'</span></span></button>'}).join('')}
function render(){var list=projects.map(function(p,n){return{p:p,n:n}}).filter(function(x){return cur&&x.p.c===cur});
grid.innerHTML=list.map(function(x){var p=x.p,id='det-'+x.n;return '<article class="card"><div class="thumb"><img src="'+p.i[0]+'" alt="'+esc(p.t)+'" loading="lazy" width="640" height="480"></div><div class="card-body"><p class="kicker">'+esc(p.l)+'</p><h3>'+esc(p.t)+'</h3><p>'+esc(C[p.c])+'</p><button type="button" class="btn btn-ghost toggle" aria-expanded="false" aria-controls="'+id+'">View Project</button><div class="details" id="'+id+'" hidden><p>'+esc(p.d)+'</p>'+p.i.slice(1).map(function(s,k){return '<img src="'+s+'" alt="'+esc(p.t)+' image '+(k+2)+'" loading="lazy">'}).join('')+'</div></div></article>'}).join('');
res.textContent=cur?'Showing '+list.length+' '+C[cur]+(list.length===1?' project':' projects'):'';}
function select(k){cur=(k===cur)?null:k;drawCats();render();arrows()}
cats.addEventListener('click',function(e){var c=e.target.closest('.cat');if(c)select(c.dataset.c)});
/* Arrows */
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function step(){var c=cats.querySelector('.cat');return c?c.offsetWidth+16:300}
function arrows(){var max=cats.scrollWidth-cats.clientWidth-2;prev.disabled=cats.scrollLeft<=2;next.disabled=cats.scrollLeft>=max}
prev.addEventListener('click',function(){cats.scrollBy({left:-step(),behavior:reduce?'auto':'smooth'})});
next.addEventListener('click',function(){cats.scrollBy({left:step(),behavior:reduce?'auto':'smooth'})});
cats.addEventListener('scroll',arrows,{passive:true});window.addEventListener('resize',arrows);
cats.addEventListener('focusin',function(e){var c=e.target.closest('.cat');if(c)c.scrollIntoView({block:'nearest',inline:'nearest',behavior:reduce?'auto':'smooth'})});
drawCats();render();arrows();
/* Expand / collapse project details */
grid.addEventListener('click',function(e){var b=e.target.closest('.toggle');if(!b)return;
var open=b.getAttribute('aria-expanded')==='true',d=document.getElementById(b.getAttribute('aria-controls'));
d.hidden=open;b.setAttribute('aria-expanded',String(!open));b.textContent=open?'View Project':'Hide Project'});
/* Reveal on scroll */
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.section,.hero-copy,.portrait').forEach(function(el){el.classList.add('reveal')});
if(rm||!('IntersectionObserver' in window)){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')})}
else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}
})();
