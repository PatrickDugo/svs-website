/* ═══════════════════════════════════════════════════════════
   SELASIE VISUAL STUDIO · site.js · v2

   ── EDIT HERE — the only place you ever need to touch ──────
   Change a value, save, refresh. Every button on the site
   (galleries, WhatsApp, email, socials) updates automatically.
   ═══════════════════════════════════════════════════════════ */
var CFG = {
  pixieset : "https://selasievisualstudio.pixieset.com",   // your Pixieset address
  whatsapp : "233554637307",                               // digits only, country code first
  email    : "selasievisualstudio@gmail.com",
  instagram: "https://instagram.com/selasievisualstudio",
  tiktok   : "https://www.tiktok.com/@selasievisualstudio"
};
/* ─────────────────────────────────────────────────────────── */

(function(){
"use strict";
var $=function(s,c){return (c||document).querySelector(s);};
var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};
var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* wire config into every CTA */
$$('.js-pixieset').forEach(function(a){a.href=CFG.pixieset;});
$$('.js-wa').forEach(function(a){a.href='https://wa.me/'+CFG.whatsapp;});
$$('.js-mail').forEach(function(a){a.href='mailto:'+CFG.email;});
$$('.js-ig').forEach(function(a){a.href=CFG.instagram;});
$$('.js-tt').forEach(function(a){a.href=CFG.tiktok;});

/* loader */
window.addEventListener('load',function(){setTimeout(function(){var l=$('#loader');if(l)l.classList.add('off');},350);});
setTimeout(function(){var l=$('#loader');if(l)l.classList.add('off');},2600); /* failsafe */

/* year */
var yr=$('#yr');if(yr)yr.textContent=new Date().getFullYear();

/* scroll progress + nav solid */
var nav=$('#nav'),prog=$('#prog');
function onScroll(){
  var st=window.scrollY||document.documentElement.scrollTop;
  var h=document.documentElement.scrollHeight-window.innerHeight;
  if(prog)prog.style.width=(h>0?(st/h*100):0)+'%';
  if(nav)nav.classList.toggle('solid',st>40);
}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();

/* mobile menu */
var mb=$('#menuBtn'),nl=$('#nl');
if(mb&&nl){
  mb.addEventListener('click',function(){var open=nl.classList.toggle('open');mb.setAttribute('aria-expanded',open);});
  $$('.nav-links a').forEach(function(a){a.addEventListener('click',function(){nl.classList.remove('open');mb.setAttribute('aria-expanded','false');});});
}

/* reveal on scroll */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
$$('.reveal').forEach(function(el){io.observe(el);});

/* scroll-spy */
var spy=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){
      $$('.nav-links a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id);});
    }
  });
},{rootMargin:'-42% 0px -52% 0px'});
['about','services','work','pricing','contact'].forEach(function(id){var s=document.getElementById(id);if(s)spy.observe(s);});

/* animated counters */
var cio=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(!e.isIntersecting)return;cio.unobserve(e.target);
    var el=e.target,end=+el.dataset.target,suf=el.dataset.suffix||'';
    if(reduced){el.textContent=end+suf;return;}
    var t0=null;
    function step(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/1400);p=1-Math.pow(1-p,3);
      el.textContent=Math.round(end*p)+suf;if(p<1)requestAnimationFrame(step);}
    requestAnimationFrame(step);
  });
},{threshold:.6});
$$('.stat-n').forEach(function(el){cio.observe(el);});

/* magnetic buttons (pointer devices only) */
if(window.matchMedia('(hover:hover)').matches&&!reduced){
  $$('.mag').forEach(function(b){
    b.addEventListener('mousemove',function(ev){
      var r=b.getBoundingClientRect();
      var x=(ev.clientX-r.left-r.width/2)/r.width,y=(ev.clientY-r.top-r.height/2)/r.height;
      b.style.transform='translate('+(x*8)+'px,'+(y*6)+'px)';
    });
    b.addEventListener('mouseleave',function(){b.style.transform='';});
  });
}

/* portfolio filters */
$$('.fbtn').forEach(function(btn){
  btn.addEventListener('click',function(){
    $$('.fbtn').forEach(function(b){b.classList.remove('on');});btn.classList.add('on');
    var f=btn.dataset.f;
    $$('.tile').forEach(function(t){t.classList.toggle('hide',f!=='all'&&t.dataset.cat!==f);});
  });
});

/* lightbox (focus-trapped, Esc closes) */
var lb=$('#lb'),lbimg=$('#lbimg'),lbcap=$('#lbcap'),lbx=$('#lbx'),lastFocus=null;
function openLB(tile){
  lastFocus=tile;
  var img=tile.querySelector('img');
  lbimg.innerHTML='';lbimg.style.background='';
  if(img){var c=img.cloneNode();lbimg.appendChild(c);}
  else{lbimg.style.background=getComputedStyle(tile).background;}
  lbcap.textContent=tile.dataset.cap||'';
  lb.classList.add('on');lbx.focus();
  document.addEventListener('keydown',lbKeys);
}
function closeLB(){lb.classList.remove('on');document.removeEventListener('keydown',lbKeys);if(lastFocus)lastFocus.focus();}
function lbKeys(e){if(e.key==='Escape')closeLB();if(e.key==='Tab'){e.preventDefault();lbx.focus();}}
$$('.tile').forEach(function(t){t.addEventListener('click',function(){openLB(t);});});
if(lbx)lbx.addEventListener('click',closeLB);
if(lb)lb.addEventListener('click',function(e){if(e.target===lb)closeLB();});

/* testimonial carousel */
var qs=$$('.q'),dots=$('#dots'),qi=0,qTimer=null;
function goQ(i){qi=i;qs.forEach(function(q,k){q.classList.toggle('on',k===i);});$$('button',dots).forEach(function(d,k){d.classList.toggle('on',k===i);});}
function restartQ(){clearInterval(qTimer);if(!reduced)qTimer=setInterval(function(){goQ((qi+1)%qs.length);},6000);}
if(qs.length&&dots){
  qs.forEach(function(_,i){
    var d=document.createElement('button');
    d.setAttribute('role','tab');d.setAttribute('aria-label','Testimonial '+(i+1));
    if(i===0)d.classList.add('on');
    d.addEventListener('click',function(){goQ(i);restartQ();});
    dots.appendChild(d);
  });
  restartQ();
}

/* cookie notice */
var ck=$('#cookie'),ckOk=$('#cookieOk');
try{if(!localStorage.getItem('svs_ck')&&ck)ck.classList.add('on');}catch(e){if(ck)ck.classList.add('on');}
if(ckOk)ckOk.addEventListener('click',function(){try{localStorage.setItem('svs_ck','1');}catch(e){}ck.classList.remove('on');});

})();
