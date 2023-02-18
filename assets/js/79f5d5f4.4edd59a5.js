"use strict";(self.webpackChunkdaikon=self.webpackChunkdaikon||[]).push([[5595],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(g,i(i({ref:r},l),{},{components:t})):n.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7272:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const o={},i="Add a screen",c={unversionedId:"user-guide/Screens/add-screen",id:"user-guide/Screens/add-screen",title:"Add a screen",description:"Typically, a large number of screening efforts are performed frequently for a target. There are many screening techniques used to perform a screen. DAIKON stores target-based and phenotypic screens in the Screen component.",source:"@site/docs/user-guide/Screens/add-screen.md",sourceDirName:"user-guide/Screens",slug:"/user-guide/Screens/add-screen",permalink:"/daikon/docs/user-guide/Screens/add-screen",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/Screens/add-screen.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add a phenotypic screen",permalink:"/daikon/docs/user-guide/Screens/add-phenotypic-screen"},next:{title:"Add validated hits",permalink:"/daikon/docs/user-guide/Screens/add-validated-hits"}},s={},d=[],l={toc:d},u="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-a-screen"},"Add a screen"),(0,a.kt)("p",null,"Typically, a large number of screening efforts are performed frequently for a target. There are many screening techniques used to perform a screen. DAIKON stores target-based and phenotypic screens in the Screen component."),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/daikon/img/UserGuide/Screens/ScreenPanel.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To add a target-based screen, go to Targets, and click on  ",(0,a.kt)("strong",{parentName:"li"},'"Add a Screen"')," in ",(0,a.kt)("strong",{parentName:"li"},'"Actions"'),".")),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/daikon/img/UserGuide/Screens/AddScreenOption.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Fill the new screen form using ",(0,a.kt)("strong",{parentName:"li"},'"Add a new Screen | ',"[Target Name]",'"')," adding the promotion date, the screening organization, screening method, and additional notes if any. The Target Name is generated automatically by the app.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The promotion date is the date when the screening started."),(0,a.kt)("li",{parentName:"ul"},"Screening organization is where the screening takes place"),(0,a.kt)("li",{parentName:"ul"},"Method is the screening technique used such as Virtual, Fragment, Biochemical, Hypomorph or DNA Encoded Del.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},'"Add Screen"')," to submit")),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/daikon/img/UserGuide/Screens/AddScreenForm.png"}),(0,a.kt)("br",null),(0,a.kt)("br",null))}p.isMDXComponent=!0}}]);