import"./assets/styles-a0JohXRX.js";import{i as o}from"./assets/vendor-BbSUbo7J.js";const i=document.querySelector("input[type=number]"),c=document.querySelector(".form");c.addEventListener("submit",e=>{e.preventDefault(),r()});function r(){const e=i.value,s=document.querySelector('input[name="state"]:checked').value;new Promise((t,n)=>{setTimeout(()=>{s==="fulfilled"?t(e):n(e)},e)}).then(t=>{o.success({message:`✅ Fulfilled promise in ${t}ms`,position:"topCenter",icon:!1})}).catch(t=>{o.error({message:`❌ Rejected promise in ${t}ms`,position:"topCenter",icon:!1})}),i.value=""}
//# sourceMappingURL=2-snackbar.js.map
