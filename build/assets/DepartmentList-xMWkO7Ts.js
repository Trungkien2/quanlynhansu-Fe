import{r as t,o as h,j as e}from"./index-CbTo-eTW.js";import{g as j,D as C}from"./departmentApi-WFj6Ri5T.js";import{a as f}from"./index.es-CCXWf--J.js";import{C as g,a as m,b as c,c as a,d as y,e as d}from"./CTable-DYHfoMzw.js";import{h as D,j as u,k as w,l as i}from"./DefaultLayout-D0qzeeSA.js";import"./axiosClient-BIXGjfOH.js";import"./index-BWBikUGW.js";import"./cil-user-iTA6MnlZ.js";import"./CConditionalPortal-Zg4eh6Ga.js";const H=()=>{const[r,p]=t.useState([]),n=h(),l=async()=>{try{const s=await j({fields:["$all"]});console.log("🚀 ~ getList ~ res:",s),p(s==null?void 0:s.rows)}catch(s){alert(s.response.data.message)}},x=async s=>{try{await C(s),l()}catch(o){alert(o.response.data.message)}};return t.useEffect(()=>{l()},[]),e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"10px"},children:e.jsx(f,{color:"primary",onClick:()=>n("/department/create"),children:"Add"})}),e.jsxs(g,{children:[e.jsx(m,{children:e.jsxs(c,{children:[e.jsx(a,{scope:"col",children:"#"}),e.jsx(a,{scope:"col",children:"name"}),e.jsx(a,{scope:"col",children:"Action"})]})}),e.jsx(y,{children:r&&(r==null?void 0:r.map((s,o)=>e.jsxs(c,{children:[e.jsx(a,{scope:"row",children:o+1}),e.jsx(d,{children:s==null?void 0:s.name}),e.jsx(d,{children:e.jsxs(D,{children:[e.jsx(u,{color:"secondary",children:"Action"}),e.jsxs(w,{children:[e.jsx(i,{onClick:()=>n(`/department/${s==null?void 0:s.id}`),children:"Edit"}),e.jsx(i,{onClick:()=>x(s==null?void 0:s.id),children:"Delete"})]})]})})]},s.id)))})]})]})};export{H as default};
