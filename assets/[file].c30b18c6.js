import{d as t,c as e,P as n,o as s,b as o,e as a,f as r,s as l}from"./vendor.03142c15.js";import{u as p}from"./index.bdc8acd3.js";import{_ as c,m as i}from"./SourceButton.vue_vue&type=script&setup=true&lang.5cdff170.js";const u={class:"\n\t\t\tprose prose-discord\n\t\t\tdark:prose-light\n\t\t\tmx-auto\n\t\t\tpy-16\n\t\t\tpx-4\n\t\t\tbreak-words-legacy\n\t\t\tsm:px-8\n\t\t\tlg:py-8\n\t\t\tw-full\n\t\t\tmax-w-4xl\n\t\t\tlg:max-w-full\n\t\t"};var m=t({expose:[],setup(t){const m=l(),d=p(),f=e((()=>d.state.docs)),v=e((()=>d.state.file)),x=e((()=>{var t;const e=null==(t=f.value)?void 0:t.custom[m.params.category].files[m.params.file];if(!e)return;let n;return d.commit({type:"setFile",file:e}),n="md"===e.type?e.content:`# ${e.name}\n\`\`\`${e.type}\n${e.content}\n\`\`\``,i(n)}));return n((()=>{const t=document.getElementById("container");t&&t.scrollTop>200&&t.scrollTo({top:0,behavior:"smooth"})})),(t,e)=>{var n;return s(),o("div",u,[a(c,{class:"float-right mt-2",path:null==(n=r(v))?void 0:n.path},null,8,["path"]),a("div",{innerHTML:r(x)},null,8,["innerHTML"])])}}});export default m;
