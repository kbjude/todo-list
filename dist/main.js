!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=1)}([function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=(()=>{const e=(e,t)=>{t.forEach(t=>{e.classList.add(t)})};return{createHtmlElement:({tag:t,parentElement:a,arrayClassNames:r=[],newId:n="",text:l=""})=>{const s=document.createElement(t);return r!==[]&&e(s,r),""!==n&&((e,t)=>{e.id=t})(s,n),""!==l&&(s.innerHTML=l),a.appendChild(s),s},createImage:(t,a,r=[])=>{const n=new Image;return n.src=t,n.alt=a,r!==[]&&e(n,r),n}}})();a(0);let n=0;const l={list:[],currentProjectId:null,getCurrent(){return this.list[this.currentProjectId]}},s=document.getElementById("btn-add-project"),o=document.getElementById("btn-show-form"),c=document.getElementById("btn-add-todo"),i=document.getElementById("project-container"),d=()=>{const e=document.getElementById("todo-section");document.querySelector(".cards-container").remove(),r.createHtmlElement({tag:"div",parentElement:e,arrayClassNames:["cards-container"]})},m=(e,t,a,n,l,s,o)=>{const c=document.querySelector(".cards-container"),i=s.getTodo().indexOf(o),d=r.createHtmlElement({tag:"div",parentElement:c,arrayClassNames:["card","column","is-3"]});d.setAttribute("data-index",i);const m=r.createHtmlElement({tag:"header",parentElement:d,arrayClassNames:["card-header"]}),u=r.createHtmlElement({tag:"h5",parentElement:m,arrayClassNames:["card-header-title"],text:e});switch(n){case"High":u.classList.add("priority-high");break;case"Mid":u.classList.add("priority-mid");break;case"Low":u.classList.add("priority-low")}const g=r.createHtmlElement({tag:"div",parentElement:d,arrayClassNames:["card-content"]}),E=r.createHtmlElement({tag:"div",parentElement:g,arrayClassNames:["content"]}),p=r.createHtmlElement({tag:"div",parentElement:E,arrayClassNames:["is-hidden"]});r.createHtmlElement({tag:"label",parentElement:E,arrayClassNames:["label"],text:"Due Date"}),r.createHtmlElement({tag:"small",parentElement:E,text:t}),r.createHtmlElement({tag:"label",parentElement:p,arrayClassNames:["label"],text:"Description"}),r.createHtmlElement({tag:"small",parentElement:p,text:a}),r.createHtmlElement({tag:"label",parentElement:p,arrayClassNames:["label"],text:"Notes"}),r.createHtmlElement({tag:"small",parentElement:p,text:l});const y=r.createHtmlElement({tag:"footer",parentElement:d,arrayClassNames:["card-footer"]});r.createHtmlElement({tag:"div",parentElement:y,arrayClassNames:["card-footer-item"],text:'<i class="fas fa-info-circle"></i>'}).addEventListener("click",()=>{p.classList.toggle("is-hidden")});r.createHtmlElement({tag:"div",parentElement:y,arrayClassNames:["card-footer-item"],text:'<i class="fas fa-edit"></i>'}).addEventListener("click",()=>{});r.createHtmlElement({tag:"div",parentElement:y,arrayClassNames:["card-footer-item"],text:'<i class="fas fa-trash"></i>'}).addEventListener("click",()=>{const e=s.getTodo().indexOf(o);d.setAttribute("data-index",e);const t=d.getAttribute("data-index");s.getTodo().splice(t,1),d.remove()})};s.addEventListener("click",()=>{const e=((e,t)=>{const a=[];return{getTitle:()=>e,getId:()=>t,setTitle:t=>{e=t},setId:e=>{t=e},getTodo:()=>a,appendTodo:e=>{a.push(e)}}})(document.getElementById("project-title").value,n);l.list.push(e);const t=e.getTitle(),a=r.createHtmlElement({tag:"button",parentElement:i,arrayClassNames:["button","project-btn"],text:t});document.querySelectorAll(".project-btn").forEach(e=>{e.classList.contains("active")&&e.classList.remove("active")}),a.setAttribute("id",n),l.currentProjectId=n,a.classList.add("active"),d(),n+=1}),i.addEventListener("click",e=>{const t=e.target;if("BUTTON"===t.nodeName){l.currentProjectId=t.getAttribute("id");const e=l.getCurrent(),a=e.getTodo();d(),a.forEach(t=>{const a=t.getTitle(),r=t.getDueDate(),n=t.getDescription(),l=t.getPriority(),s=t.getNotes();m(a,r,n,l,s,e,t)});document.querySelectorAll(".project-btn").forEach(e=>e!==t||e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active"))}}),o.addEventListener("click",e=>{const t=e.target;document.querySelector(".form").classList.toggle("is-hidden"),"Click Here to add To-Do's"===t.innerHTML?t.innerHTML="Hide Form":t.innerHTML="Click Here to add To-Do's"}),c.addEventListener("click",()=>{const e=l.getCurrent(),t=document.getElementById("to-do-title").value,a=document.getElementById("to-do-description").value,r=document.getElementById("to-do-date").value,n=document.getElementById("priority").value,s=document.getElementById("to-do-notes").value,o=(c=t,i=a,d=r,u=n,g=s,{getTitle:()=>c,getDescription:()=>i,getDueDate:()=>d,getPriority:()=>u,getNotes:()=>g,setTitle:e=>{c=e},setDescription:e=>{i=e},setDueDate:e=>{d=e},setPriority:e=>{u=e},setNotes:e=>{g=e}});var c,i,d,u,g;e.appendTodo(o),m(o.getTitle(),o.getDueDate(),o.getDescription(),o.getPriority(),o.getNotes(),e,o)})}]);