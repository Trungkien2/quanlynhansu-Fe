import{r as b,_ as m,R as n,a,c as v,P as o,b as u}from"./index-CbTo-eTW.js";var P=b.forwardRef(function(e,l){var r,c=e.children,p=e.className,t=e.color,i=m(e,["children","className","color"]);return n.createElement("thead",a({className:v((r={},r["table-".concat(t)]=t,r),p)||void 0},i,{ref:l}),c)});P.propTypes={children:o.node,className:o.string,color:u};P.displayName="CTableHead";var O=b.forwardRef(function(e,l){var r,c=e.children,p=e.className,t=e.color,i=m(e,["children","className","color"]);return n.createElement("th",a({className:v((r={},r["table-".concat(t)]=t,r),p)||void 0},i,{ref:l}),c)});O.propTypes={children:o.node,className:o.string,color:u};O.displayName="CTableHeaderCell";var w=b.forwardRef(function(e,l){var r,c=e.children,p=e.className,t=e.color,i=m(e,["children","className","color"]);return n.createElement("tbody",a({className:v((r={},r["table-".concat(t)]=t,r),p)||void 0},i,{ref:l}),c)});w.propTypes={children:o.node,className:o.string,color:u};w.displayName="CTableBody";var E=b.forwardRef(function(e,l){var r,c=e.children,p=e.active,t=e.align,i=e.className,f=e.color,d=m(e,["children","active","align","className","color"]),h=d.scope?"th":"td";return n.createElement(h,a({className:v((r={},r["align-".concat(t)]=t,r["table-active"]=p,r["table-".concat(f)]=f,r),i)||void 0},d,{ref:l}),c)});E.propTypes={active:o.bool,align:o.oneOf(["bottom","middle","top"]),children:o.node,className:o.string,color:u};E.displayName="CTableDataCell";var N=b.forwardRef(function(e,l){var r,c=e.children,p=e.active,t=e.align,i=e.className,f=e.color,d=m(e,["children","active","align","className","color"]);return n.createElement("tr",a({className:v((r={},r["align-".concat(t)]=t,r["table-active"]=p,r["table-".concat(f)]=f,r),i)||void 0},d,{ref:l}),c)});N.propTypes={active:o.bool,align:o.oneOf(["bottom","middle","top"]),children:o.node,className:o.string,color:u};N.displayName="CTableRow";var R=b.forwardRef(function(e,l){var r,c=e.children,p=e.className,t=e.color,i=m(e,["children","className","color"]);return n.createElement("tfoot",a({className:v((r={},r["table-".concat(t)]=t,r),p)||void 0},i,{ref:l}),c)});R.propTypes={children:o.node,className:o.string,color:u};R.displayName="CTableFoot";var x=b.forwardRef(function(e,l){var r=e.children,c=m(e,["children"]);return n.createElement("caption",a({},c,{ref:l}),r)});x.propTypes={children:o.node};x.displayName="CTableCaption";var F=function(e){var l=e.children,r=e.responsive,c=m(e,["children","responsive"]);return r?n.createElement("div",a({className:typeof r=="boolean"?"table-responsive":"table-responsive-".concat(r)},c),l):n.createElement(n.Fragment,null,l)};F.propTypes={children:o.node,responsive:o.oneOfType([o.bool,o.oneOf(["sm","md","lg","xl","xxl"])])};F.displayName="CTableResponsiveWrapper";var A=function(e){return e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map(function(l){return l.charAt(0).toUpperCase()+l.slice(1)}).join(" ")},G=function(e){var l;return typeof e=="object"?(l=e.label)!==null&&l!==void 0?l:A(e.key):A(e)},J=function(e,l){return e?e.map(function(r){return typeof r=="object"?r.key:r}):l&&K(l)},K=function(e){return Object.keys(e[0]||{}).filter(function(l){return l.charAt(0)!=="_"})},B=b.forwardRef(function(e,l){var r,c=e.children,p=e.align,t=e.borderColor,i=e.bordered,f=e.borderless,d=e.caption,h=e.captionTop,D=e.className,H=e.color,C=e.columns,k=e.footer,W=e.hover,T=e.items,$=e.responsive,z=e.small,I=e.striped,L=e.stripedColumns,M=e.tableFootProps,U=e.tableHeadProps,Z=m(e,["children","align","borderColor","bordered","borderless","caption","captionTop","className","color","columns","footer","hover","items","responsive","small","striped","stripedColumns","tableFootProps","tableHeadProps"]),j=b.useMemo(function(){return J(C,T)},[C,T]);return n.createElement(F,{responsive:$},n.createElement("table",a({className:v("table",(r={},r["align-".concat(p)]=p,r["border-".concat(t)]=t,r["caption-top"]=h||d==="top",r["table-bordered"]=i,r["table-borderless"]=f,r["table-".concat(H)]=H,r["table-hover"]=W,r["table-sm"]=z,r["table-striped"]=I,r["table-striped-columns"]=L,r),D)},Z,{ref:l}),(d&&d!=="top"||h)&&n.createElement(x,null,d||h),C&&n.createElement(P,a({},U),n.createElement(N,null,C.map(function(s,y){return n.createElement(O,a({},s._props&&a({},s._props),s._style&&{style:a({},s._style)},{key:y}),G(s))}))),T&&n.createElement(w,null,T.map(function(s,y){return n.createElement(N,a({},s._props&&a({},s._props),{key:y}),j&&j.map(function(g,q){return s[g]!==void 0?n.createElement(E,a({},s._cellProps&&a(a({},s._cellProps.all&&a({},s._cellProps.all)),s._cellProps[g]&&a({},s._cellProps[g])),{key:q}),s[g]):null}))})),c,k&&n.createElement(R,a({},M),n.createElement(N,null,k.map(function(s,y){return n.createElement(E,a({},typeof s=="object"&&s._props&&a({},s._props),{key:y}),typeof s=="object"?s.label:s)})))))});B.propTypes={align:o.oneOf(["bottom","middle","top"]),borderColor:o.string,bordered:o.bool,borderless:o.bool,caption:o.oneOfType([o.string,o.oneOf(["top"])]),captionTop:o.string,children:o.node,className:o.string,color:u,columns:o.array,footer:o.array,hover:o.bool,items:o.array,responsive:o.oneOfType([o.bool,o.oneOf(["sm","md","lg","xl","xxl"])]),small:o.bool,striped:o.bool,stripedColumns:o.bool,tableFootProps:o.shape(a({},R.propTypes)),tableHeadProps:o.shape(a({},P.propTypes))};B.displayName="CTable";export{B as C,P as a,N as b,O as c,w as d,E as e,x as f};
