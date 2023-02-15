"use strict";(self.webpackChunkdaikon=self.webpackChunkdaikon||[]).push([[5482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6},o="Adding Private Data",s={unversionedId:"user-guide/Genes/adding-private-data",id:"user-guide/Genes/adding-private-data",title:"Adding Private Data",description:'To access the private data section of genes in Daikon, navigate to the "Private Data" tab in the gene section. This section includes various tables, such as:',source:"@site/docs/user-guide/Genes/adding-private-data.md",sourceDirName:"user-guide/Genes",slug:"/user-guide/Genes/adding-private-data",permalink:"/daikon/docs/user-guide/Genes/adding-private-data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/Genes/adding-private-data.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Gene specific organization's private data",permalink:"/daikon/docs/user-guide/Genes/private-data"},next:{title:"Screens",permalink:"/daikon/docs/category/screens"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-private-data"},"Adding Private Data"),(0,r.kt)("p",null,'To access the private data section of genes in Daikon, navigate to the "Private Data" tab in the gene section. This section includes various tables, such as:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Essentiality"),(0,r.kt)("li",{parentName:"ul"},"Protein Production List"),(0,r.kt)("li",{parentName:"ul"},"Protein Activity Assay List"),(0,r.kt)("li",{parentName:"ul"},"Hypomorph"),(0,r.kt)("li",{parentName:"ul"},"CRISPRi Strain"),(0,r.kt)("li",{parentName:"ul"},"Resistance Mutations"),(0,r.kt)("li",{parentName:"ul"},"Vulnerability"),(0,r.kt)("li",{parentName:"ul"},"Unpublished Structural Information",(0,r.kt)("img",{src:"/daikon/img/UserGuide/Genes/Essentiality.png",style:{margin:"1em",filter:"brightness(100%) contrast(100%)"}}),(0,r.kt)("img",{src:"/daikon/img/UserGuide/Genes/Vulnerability.png",style:{margin:"1em",filter:"brightness(100%) contrast(100%)"}}))),(0,r.kt)("p",null,'To add a new record to any of these tables, click on the "Add" button located at the top of the respective table. To modify an existing record, use the inline row editor in the table. You can modify any field in the table by simply clicking on the corresponding cell and typing in the new value. Once you have made your changes, be sure to click the "Save" button to update the record.'),(0,r.kt)("img",{src:"/daikon/img/UserGuide/Genes/AddEssentiality.png",style:{margin:"1em",filter:"brightness(100%) contrast(100%)"}}),(0,r.kt)("p",null,'Note that any changes you make to private data are automatically versioned by Daikon and can be viewed at any time by clicking on the "Fetch History" option in the context menu. This ensures that you always have a record of previous versions of the data in case you need to roll back to a previous state. At some places the "Fetch history" is not available, but will be built in the future versions. However the data is versioned.'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This Concludes the Gene Section. Now What?\nHit Next to Start exploring ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Targets")))))}p.isMDXComponent=!0}}]);