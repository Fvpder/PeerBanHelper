import"./index-C_5TEIut.js";import{f as U,a6 as x,am as A,r as y,q as P,j as h,k as S,y as a,t as d,a2 as n,v as u,x as i,s as k,u as q,p as C,F as R}from"./libs-D-uoNQCp.js";import{q as T,G as I,az as N,aA as E,aD as F,aB as D,v as G}from"./arcoDesign-BIo_4ded.js";const H={href:"https://docs.pbh-btn.com/docs/downloader/qBittorrentEE"},z=U({__name:"qbittorrentee",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(_){var f,V;const{t}=x(),l=A(_,"modelValue"),c={type:"string",required:!0,validator:(r,e)=>{if(!r)return e("Please input URL");!r.startsWith("http://")&&!r.startsWith("https://")&&e(t("page.dashboard.editModal.label.endpoint.error.invalidSchema"));try{new URL(r),e()}catch{e(t("page.dashboard.editModal.label.endpoint.error.invalidUrl"))}}},p=y(!1);return((f=l.value)!=null&&f.basicAuth.pass||(V=l.value)!=null&&V.basicAuth.pass)&&(p.value=!0),(r,e)=>{const m=T,s=I,v=N,w=E,g=F,M=D,b=G,B=P("i18n-t");return h(),S(R,null,[a(s,{field:"config.endpoint",label:n(t)("page.dashboard.editModal.label.endpoint"),"validate-trigger":"blur",required:"",rules:c},{default:d(()=>[a(m,{modelValue:l.value.endpoint,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.endpoint=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(s,{field:"config.username",label:n(t)("page.dashboard.editModal.label.username")},{default:d(()=>[a(m,{modelValue:l.value.username,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.username=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(s,{field:"config.password",label:n(t)("page.dashboard.editModal.label.password")},{default:d(()=>[a(v,{modelValue:l.value.password,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.password=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(s,null,{default:d(()=>[a(w,{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=o=>p.value=o)},{default:d(()=>[u(i(n(t)("page.dashboard.editModal.label.useBasicAuth")),1)]),_:1},8,["modelValue"])]),_:1}),p.value?(h(),k(s,{key:0,"content-flex":!1},{default:d(()=>[a(s,{field:"config.basicAuth.user",label:"User"},{default:d(()=>[a(m,{modelValue:l.value.basicAuth.user,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.basicAuth.user=o)},null,8,["modelValue"])]),_:1}),a(s,{field:"config.basicAuth.pass",label:"Pass"},{default:d(()=>[a(v,{modelValue:l.value.basicAuth.pass,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.basicAuth.pass=o)},null,8,["modelValue"])]),_:1})]),_:1})):q("",!0),a(s,{field:"config.httpVersion",label:n(t)("page.dashboard.editModal.label.httpVersion")},{extra:d(()=>[u(i(n(t)("page.dashboard.editModal.label.httpVersion.description")),1)]),default:d(()=>[a(M,{modelValue:l.value.httpVersion,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value.httpVersion=o)},{default:d(()=>[a(g,{value:"HTTP_1_1"},{default:d(()=>e[11]||(e[11]=[u("1.1")])),_:1}),a(g,{value:"HTTP_2"},{default:d(()=>e[12]||(e[12]=[u("2.0")])),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(s,{field:"config.incrementBan","default-checked":"",label:n(t)("page.dashboard.editModal.label.incrementBan")},{extra:d(()=>[u(i(n(t)("page.dashboard.editModal.label.incrementBan.description")),1)]),default:d(()=>[a(b,{modelValue:l.value.incrementBan,"onUpdate:modelValue":e[7]||(e[7]=o=>l.value.incrementBan=o)},null,8,["modelValue"])]),_:1},8,["label"]),a(s,{field:"config.shadowBan","default-checked":"",label:n(t)("page.dashboard.editModal.label.shadowBan")},{extra:d(()=>[a(B,{keypath:"page.dashboard.editModal.label.shadowBan.description"},{learnMore:d(()=>[C("a",H,i(n(t)("page.dashboard.editModal.label.shadowBan.description.learnMore")),1)]),_:1})]),default:d(()=>[a(b,{modelValue:l.value.useShadowBan,"onUpdate:modelValue":e[8]||(e[8]=o=>l.value.useShadowBan=o)},null,8,["modelValue"])]),_:1},8,["label"]),a(s,{field:"config.ignorePrivate",label:n(t)("page.dashboard.editModal.label.ignorePrivate")},{extra:d(()=>[u(i(n(t)("page.dashboard.editModal.label.ignorePrivate.description")),1)]),default:d(()=>[a(b,{modelValue:l.value.ignorePrivate,"onUpdate:modelValue":e[9]||(e[9]=o=>l.value.ignorePrivate=o)},null,8,["modelValue"])]),_:1},8,["label"]),a(s,{field:"config.verifySsl","default-checked":"",label:n(t)("page.dashboard.editModal.label.verifySsl")},{default:d(()=>[a(b,{modelValue:l.value.verifySsl,"onUpdate:modelValue":e[10]||(e[10]=o=>l.value.verifySsl=o)},null,8,["modelValue"])]),_:1},8,["label"])],64)}}});export{z as default};
