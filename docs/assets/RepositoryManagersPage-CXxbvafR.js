import{s as R,a as x,b as $,c as k,d as D}from"./dialog.esm-CFNFig2j.js";import{E as p,o as h,a as b,w as u,d as c,g as o,j as M,C as E,I as S,n as V,J as B}from"./index-BqvE5ap6.js";import{s as I,e as T}from"./axios-wRHvC6Go.js";import"./index.esm-B5wNrobB.js";const U={class:"p-fluid"},A={class:"p-field"},j=c("label",{for:"emailInput"},"Email",-1),L={class:"p-dialog-footer"},N={__name:"CreateRepositoryManagerDialog",emits:["createEvent"],setup(n,{expose:s,emit:r}){const a=p(!1),e=p(""),l=r,t=()=>{a.value=!0},m=()=>{a.value=!1,e.value=""},_=()=>{e.value&&(l("createEvent",e.value),a.value=!1,e.value="")};return s({show:t}),(y,i)=>{const v=I,f=M,g=R;return h(),b(g,{visible:a.value,"onUpdate:visible":i[1]||(i[1]=d=>a.value=d),header:"Add Repository Manager",style:{width:"25rem"}},{default:u(()=>[c("div",U,[c("div",A,[j,o(v,{id:"emailInput",modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=d=>e.value=d)},null,8,["modelValue"])])]),c("div",L,[o(f,{label:"Cancel",class:"p-button-text",onClick:m}),o(f,{label:"Add",disabled:!e.value,onClick:_},null,8,["disabled"])])]),_:1},8,["visible"])}}},P=E("repositoryManagers",()=>{const n=p([]);function s(e){const l=n.value;l.some(t=>t.email===e.email)||l.push(e)}function r(e){const l=new Set(e.map(t=>t.email));n.value=n.value.filter(t=>!l.has(t.email))}async function a(){const e=await T.get("/test/rm.json");n.value=e.data.repositoryManagers}return{repositoryManagers:n,add:s,remove:r,fetchRepositoryManagers:a}}),H=c("h1",null,"Repository managers",-1),J={class:"flex flex-row gap-2 mb-5"},G={__name:"RepositoryManagersPage",setup(n){const s=P(),r=p(null),a=p([]),e=()=>{r.value.show()},l=m=>{s.add({id:self.crypto.randomUUID(),email:m})},t=()=>{s.remove(a.value),a.value.length=0};return S(async()=>{await s.fetchRepositoryManagers()}),(m,_)=>{const y=N,i=M,v=x,f=$,g=k,d=D,w=V("MainLayout");return h(),b(w,null,{default:u(()=>[o(y,{ref_key:"dialog",ref:r,onCreateEvent:l},null,512),H,o(d,null,{default:u(()=>[o(g,{header:"All managers"},{default:u(()=>[c("div",J,[o(i,{label:"Add",icon:"pi pi-user-plus",onClick:e}),o(i,{label:"Remove",icon:"pi pi-trash",onClick:t,severity:"danger",disabled:!a.value||!a.value.length},null,8,["disabled"])]),o(f,{value:B(s).repositoryManagers,selection:a.value,"onUpdate:selection":_[0]||(_[0]=C=>a.value=C),dataKey:"id",stripedRows:"",tableStyle:"min-width: 50rem",scrollable:"",scrollHeight:"calc(100vh - 280px)"},{default:u(()=>[o(v,{selectionMode:"multiple",headerStyle:"width: 3rem"}),o(v,{field:"email",header:"Email",sortable:""})]),_:1},8,["value","selection"])]),_:1})]),_:1})]),_:1})}}};export{G as default};
