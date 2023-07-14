(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))b(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&b(d)}).observe(document,{childList:!0,subtree:!0});function f(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function b(t){if(t.ep)return;t.ep=!0;const r=f(t);fetch(t.href,r)}})();function S(){const i=document.getElementById("lower-screen"),a=document.getElementById("upper-screen"),f=document.querySelectorAll(".num"),b=document.getElementById("reset"),t=document.querySelectorAll(".operator"),r=document.getElementById("del"),d=document.getElementById("equal"),v=14;let e="",s="",E="",m="",c="",o="",p=!1;function y(n){i.innerHTML=n.length<=v?n:String(Number(n).toExponential(5))}function N(n){e=e.concat(n)}function g(){e="",s="",m="",c="",o="",p=!1,a.innerHTML=""}function L(n,u,l){switch(n){case"+":return String(u+l);case"-":return String(u-l);case"x":return String(u*l);case"/":return l===0?(p=!0,"Can't devide by zero"):String(u/l);default:return String(u+l)}}f.forEach(n=>{n.addEventListener("click",()=>{const u=n.dataset.value;p&&g(),e.length!==v&&(u==="."&&e.includes(".")||u==="0"&&e.startsWith("0")&&e[1]!=="."||(E=m,N(u),o=o.concat(u),i.innerHTML=e))})}),t.forEach(n=>{n.addEventListener("click",()=>{s=L(E,Number(c),Number(o)),c=s,m=n.dataset.value,a.innerHTML=c+" "+n.dataset.value,e="",o=""})}),b.addEventListener("click",()=>{g(),i.innerHTML="0"}),r.addEventListener("click",()=>{e=e.slice(0,-1),o=e,i.innerHTML=e}),d.addEventListener("click",()=>{s=L(m,Number(c),Number(o)),a.innerHTML=c+" "+m+" "+Number(o)+" =",y(s),console.log(s),e=""})}document.querySelector("#app").innerHTML=`
  <div class="main">
    <div id="calculator">
      <div id="head">
        <p>Calc</p>
      </div>
      <div id="screen">
        <div id="upper-screen"></div>
        <div id="lower-screen">0</div>
      </div>
      <div id="keyboard">
        <button class="num" data-value="7">7</button>
        <button class="num" data-value="8">8</button>
        <button class="num" data-value="9">9</button>
        <button class="func" id="del">DEL</button>
        <button class="num" data-value="4">4</button>
        <button class="num" data-value="5">5</button>
        <button class="num" data-value="6">6</button>
        <button class="operator" data-value="+">+</button>
        <button class="num" data-value="1">1</button>
        <button class="num" data-value="2">2</button>
        <button class="num" data-value="3">3</button>
        <button class="operator" data-value="-">-</button>
        <button data-value="." class="num">.</button>
        <button class="num" data-value="0">0</button>
        <button class="operator" data-value="/">/</button>
        <button class="operator" data-value="x">x</button>
        <button id="reset" class="span func">Reset</button>
        <button id="equal" class="span equal">=</button>
      </div>
    </div>
  </div>
`;S();
