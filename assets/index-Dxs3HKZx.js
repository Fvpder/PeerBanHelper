import{_ as u,g as d,i as k}from"./arcoDesign-BIo_4ded.js";import{f as m,c as l,j as f,k as p,n as v,m as h,p as a}from"./libs-D-uoNQCp.js";const g=m({name:"IconLock",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=d("icon"),i=l(()=>[n,`${n}-lock`,{[`${n}-spin`]:e.spin}]),r=l(()=>{const o={};return e.size&&(o.fontSize=k(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:i,innerStyle:r,onClick:o=>{t("click",o)}}}}),y=["stroke-width","stroke-linecap","stroke-linejoin"],C=a("rect",{x:"7",y:"21",width:"34",height:"20",rx:"1"},null,-1),_=a("path",{d:"M15 21v-6a9 9 0 1 1 18 0v6M24 35v-8"},null,-1),b=[C,_];function w(e,t,n,i,r,c){return f(),p("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:v(e.cls),style:h(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o))},b,14,y)}var s=u(g,[["render",w]]);const L=Object.assign(s,{install:(e,t)=>{var n;const i=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(i+s.name,s)}});export{L as I};
