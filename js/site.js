/* ── CONFIG — set this once ──────────────────────────────────────
   Replace with YOUR Pixieset address (or any gallery link). Every
   "View galleries / Enter the galleries / Client Gallery" button uses it. */
var PIXIESET_URL = "https://selasievisualstudio.pixieset.com";
document.querySelectorAll('.js-pixieset').forEach(function(a){a.href=PIXIESET_URL;});
/* ─────────────────────────────────────────────────────────────── */

document.getElementById('yr').textContent=new Date().getFullYear();
addEventListener('load',function(){setTimeout(function(){document.getElementById('loader').classList.add('done');},350);});

var nav=document.getElementById('nav'),prog=document.getElementById('prog');
addEventListener('scroll',function(){nav.classList.toggle('solid',scrollY>40);var h=document.documentElement;prog.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';});

/* reveal + scroll-spy + counters */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var id=e.target.id;document.querySelectorAll('.nav-links a').forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+id);});}});},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(function(s){spy.observe(s);});
var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target,t=+el.dataset.target,sf=el.dataset.suffix||'',st=performance.now();(function step(n){var p=Math.min((n-st)/1500,1);el.textContent=Math.floor(p*t)+sf;if(p<1)requestAnimationFrame(step);})(st);cio.unobserve(el);}});},{threshold:.6});
document.querySelectorAll('.stat-n').forEach(function(el){cio.observe(el);});

/* magnetic buttons (fine pointers only) */
if(matchMedia('(hover:hover)').matches){document.querySelectorAll('.mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.2)+'px,'+((e.clientY-r.top-r.height/2)*.3)+'px)';});b.addEventListener('mouseleave',function(){b.style.transform='';});});}

/* portfolio filter + lightbox */
function filt(cat,btn){document.querySelectorAll('.fbtn').forEach(function(b){b.classList.remove('on');});btn.classList.add('on');document.querySelectorAll('.tile').forEach(function(t){t.style.display=(cat==='all'||t.dataset.cat===cat)?'':'none';});}
function openLB(t){document.getElementById('lbimg').style.backgroundImage=getComputedStyle(t).backgroundImage;document.getElementById('lbcap').innerHTML=t.dataset.cap;document.getElementById('lb').classList.add('on');}
function closeLB(){document.getElementById('lb').classList.remove('on');}
addEventListener('keydown',function(e){if(e.key==='Escape')closeLB();});

/* testimonials */
var qs=document.querySelectorAll('.q'),dots=document.getElementById('dots'),ti=0;
qs.forEach(function(_,i){var d=document.createElement('div');d.className='dot'+(i===0?' on':'');d.onclick=function(){showT(i);};dots.appendChild(d);});
function showT(i){qs[ti].classList.remove('on');dots.children[ti].classList.remove('on');ti=i;qs[ti].classList.add('on');dots.children[ti].classList.add('on');}
setInterval(function(){showT((ti+1)%qs.length);},5500);
document.querySelectorAll('.nav-links a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('nl').classList.remove('open');});});

/* cookie notice (safe if storage is blocked) */
function store(k,v){try{localStorage.setItem(k,v);}catch(e){}}
function get(k){try{return localStorage.getItem(k);}catch(e){return null;}}
if(get('svs_cookie')!=='1'){setTimeout(function(){document.getElementById('cookie').classList.add('on');},1200);}
function okCookie(){store('svs_cookie','1');document.getElementById('cookie').classList.remove('on');}