import{A as y,C as h,G as t,L as l}from"./index-B834FtM9.js";import{f as S}from"./axios-o2DBmFyx.js";const D=y("repositories",()=>{const s=h([]);async function u(e){s.value.push(e)}async function c(){const e=await S.get("/test/repos.json");s.value=e.data.repositories.map(o=>{const r=o.versions.reduce((n,a)=>!n||new Date(a.uploadTime)>new Date(n.uploadTime)?a:n,null),i=r?r.uploadTime:null,w=r?r.uploader:null;return{...o,version:r?r.version:null,lastModified:i,uploader:w}})}async function p(e){const o=s.value.find(r=>r.id===e);o&&(o.favorite=!o.favorite)}async function d(e){s.value=s.value.find(o=>o.id!==e)}const f=t(()=>s.value),v=t(()=>s.value.filter(e=>e.favorite===!0)),m=t(()=>{const e=l().user.email,o="owner";return s.value.filter(r=>r.users.some(i=>i.email===e&&i.role===o))}),R=t(()=>{const e=l().user.email,o=["modeler","reviewer","viewer"];return s.value.filter(r=>r.users.some(i=>i.email===e&&o.includes(i.role)))});return{repositories:s,createRepository:u,fetchRepositories:c,invertFavorite:p,deleteRepository:d,allRepositories:f,favoriteRepositories:v,ownedRepositories:m,sharedRepositories:R}});export{D as u};
