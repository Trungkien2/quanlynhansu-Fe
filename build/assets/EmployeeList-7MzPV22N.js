import{r as t,o as j,j as e}from"./index-CYrbnSnq.js";import{g as C,D as y}from"./employeeApi-CP8vq-43.js";import{a as f}from"./index.es-CIlLp79v.js";import{C as g,a as D,b as p,c as o,d as u,e as r}from"./CTable-Bs4wQdx3.js";import{h as w,j as b,k as T,l as x}from"./DefaultLayout-yfeXIb9M.js";import"./axiosClient-DO8HkJzh.js";import"./index-BWBikUGW.js";import"./cil-user-Gk0A8xKO.js";import"./CConditionalPortal-TIAxCLL-.js";const N=()=>{const[a,h]=t.useState([]),n=j(),c=async()=>{try{const s=await C({fields:["$all",{department:["name"]}]});console.log("🚀 ~ getList ~ res:",s),h(s==null?void 0:s.rows)}catch(s){alert(s.response.data.message)}},i=async s=>{try{await y(s),c()}catch(l){alert(l.response.data.message)}};return t.useEffect(()=>{c()},[]),e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"10px"},children:e.jsx(f,{color:"primary",onClick:()=>n("/employee/create"),children:"Add"})}),e.jsxs(g,{children:[e.jsx(D,{children:e.jsxs(p,{children:[e.jsx(o,{scope:"col",children:"#"}),e.jsx(o,{scope:"col",children:"Email"}),e.jsx(o,{scope:"col",children:"name"}),e.jsx(o,{scope:"col",children:"Phone"}),e.jsx(o,{scope:"col",children:"Department Name"}),e.jsx(o,{scope:"col",children:"Action"})]})}),e.jsx(u,{children:a&&(a==null?void 0:a.map((s,l)=>{var d;return e.jsxs(p,{children:[e.jsx(o,{scope:"row",children:l+1}),e.jsx(r,{children:s==null?void 0:s.email}),e.jsx(r,{children:s==null?void 0:s.name}),e.jsx(r,{children:(s==null?void 0:s.phone)||"-"}),e.jsx(r,{children:((d=s==null?void 0:s.department)==null?void 0:d.name)||"-"}),e.jsx(r,{children:e.jsxs(w,{children:[e.jsx(b,{color:"secondary",children:"Action"}),e.jsxs(T,{children:[e.jsx(x,{onClick:()=>n(`/employee/${s==null?void 0:s.id}`),children:"Edit"}),e.jsx(x,{onClick:()=>i(s==null?void 0:s.id),children:"Delete"})]})]})})]},s.id)}))})]})]})};export{N as default};