const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let n=null;function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",(function(){n=setInterval(a,1e3),t.startBtn.disabled=!0,t.startBtn.classList.add("btn-link"),t.startBtn.classList.remove("btn-primary")})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1,t.startBtn.classList.remove("btn-link"),t.startBtn.classList.add("btn-primary")}));
//# sourceMappingURL=01-color-switcher.f4fa8a02.js.map
