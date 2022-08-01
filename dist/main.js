(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"47efc579abd50332ac96.svg",n=(e,t,n)=>({name:e,lowercase:t,selector:n,makeTitle:()=>{const r=document.querySelector("#container");r.replaceChildren("");const c=document.createElement("h2");c.textContent=e;const d=document.createElement("div");d.id=t+"-content",r.appendChild(c),r.appendChild(d),"inbox"!==n.id&&"new-project"!==n.id||(t=>{const n=document.createElement("button");n.setAttribute("id","add-list-item"),n.textContent="Add List Item",t.appendChild(n);const r=o(e,t,n);n.addEventListener("click",(()=>{r.makeItem()}))})(d)},handleRemoveButton:r}),o=(e,t,n)=>({makeItem:()=>{const e=()=>{const e=document.createElement("div");e.className="new-item-prompt",e.innerHTML+='\n              <form>\n                <input type="text" id="item-name" name="item-name" required>\n                <input type="date" id="item-due-date" required>\n                <label for="item-due-date">Due Date</label> \n                <button type="submit" id = "add-item">Add</button>\n                <button id = "cancel-item">Cancel</button>\n              </form>\n          ',t.append(e),n(e)},n=e=>{const t=document.querySelector("#add-item"),n=document.querySelector("#cancel-item"),r=document.querySelector("#item-name");document.querySelector("#item-due-date"),t.addEventListener("click",(()=>{c(r.value),o(e)})),n.addEventListener("click",(()=>{o(e)}))},o=n=>{const o=document.createElement("button");o.className="add",o.setAttribute("id","add-list-item"),o.textContent="Add List Item",t.appendChild(o),n.remove(),o.addEventListener("click",(()=>{e()}))},c=e=>{const n=document.createElement("button");n.setAttribute("id","new-item"),n.textContent=e,t.appendChild(n),r(n)};return e(),{newItemPrompt:e,newItemButtons:n,replaceItem:o,handleAdd:c}},sortItem:()=>{},deleteItem:()=>{}});function r(e){const n=document.createElement("img");n.src=t,n.setAttribute("id","remove-image"),e.addEventListener("focus",(()=>{e.appendChild(n)})),e.addEventListener("blur",(()=>{e.removeChild(n)})),n.addEventListener("click",(()=>{!function(e){e.remove()}(e)}))}o("inbox",document.querySelector("#inbox-content"));const c=document.querySelector("#inbox"),d=document.querySelector("#today"),i=document.querySelector("#this-week"),a=document.querySelector("#archived"),m=n("Inbox","inbox",c),u=n("Today","today",d),l=n("This Week","this-week",i);n("Archived","archive",a),c.addEventListener("click",(()=>{m.makeTitle()})),d.addEventListener("click",(()=>{u.makeTitle()})),i.addEventListener("click",(()=>{l.makeTitle()}));const s=document.querySelector("#add-project"),p=(e=>{const t=()=>{const t=document.querySelector("#project-container");e.remove();const n=document.createElement("div");n.className="new-proj-prompt",n.innerHTML+='\n            <input type="text" id="proj-name" name="proj-name" required>\n            <button type="submit" id = "add-proj">Add</button>\n            <button id = "cancel-proj">Cancel</button>\n        ',t.append(n),o()},o=()=>{const e=document.querySelector("#add-proj"),t=document.querySelector("#cancel-proj"),n=document.querySelector("#proj-name");e.addEventListener("click",(()=>{d(n.value),c()})),t.addEventListener("click",(()=>{c()}))},c=()=>{const e=document.querySelector(".new-proj-prompt"),n=document.querySelector("#project-container"),o=document.createElement("button");o.className="add",o.setAttribute("id","add-project"),o.textContent="Add Project",n.appendChild(o),e.remove(),o.addEventListener("click",(()=>{t()}))},d=e=>{const t=document.querySelector("#project-container"),o=document.createElement("button");o.setAttribute("id","new-project"),o.innerHTML=e,t.appendChild(o);const c=n(e,e.toLowerCase(),o.id);c.makeTitle(),o.addEventListener("click",(()=>{c.makeTitle()})),r(o)};return{addProj:e,newProjButtons:o,replaceProj:c,newProjPrompt:t,handleAdd:d}})(s);s.addEventListener("click",(()=>{p.newProjPrompt()}))})();