const e=document.querySelector("button"),o=document.querySelector('[name="delay"]'),t=document.querySelector('[name="step"]'),n=document.querySelector('[name="amount"]');function l(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{t?n({position:e,delay:o}):l({position:e,delay:o})}),o)}))}e.addEventListener("click",(function(e){e.preventDefault();for(let e=0;e<n.value;e+=1){const n=Number(o.value)+t.value*e;l(e+1,n).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.9ae2dde8.js.map
