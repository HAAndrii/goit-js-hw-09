!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=null;function d(){t.disabled=!t.disabled,e.disabled=!e.disabled}function o(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.disabled=!0,d(),t.addEventListener("click",(function(){if(a)return;a=setInterval(o,1e3),d()})),e.addEventListener("click",(function(){clearInterval(a),d(),a=null}))}();
//# sourceMappingURL=01-color-switcher.84989653.js.map