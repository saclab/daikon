"use strict";(self.webpackChunkdaikon=self.webpackChunkdaikon||[]).push([[8448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Quick Start",l={unversionedId:"deployment-guide/daikon-core-webclient/quick-start",id:"deployment-guide/daikon-core-webclient/quick-start",title:"Quick Start",description:"Clone the daikon-web-client-core github to your local workspace",source:"@site/docs/deployment-guide/daikon-core-webclient/quick-start.md",sourceDirName:"deployment-guide/daikon-core-webclient",slug:"/deployment-guide/daikon-core-webclient/quick-start",permalink:"/daikon/docs/deployment-guide/daikon-core-webclient/quick-start",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deployment-guide/daikon-core-webclient/quick-start.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Daikon Core Web Client",permalink:"/daikon/docs/category/daikon-core-web-client"},next:{title:"Cloud Orchestration",permalink:"/daikon/docs/deployment-guide/Cloud-Orchestration"}},c={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("strong",{parentName:"p"},"daikon-web-client-core")," github to your local workspace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/saclab/daikon-core-webapp.git\n")),(0,a.kt)("p",null,"The webclient needs to be configured with the following minimum details  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft AD paramaters"),(0,a.kt)("li",{parentName:"ul"},"Address of daikon server core web api")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Paramater"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"REACT_APP_MSAL_CLIENT_ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Azure AD App client id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"REACT_APP_MSAL_CLIENT_SCOPE"),(0,a.kt)("td",{parentName:"tr",align:null},"Azure AD App client scope")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"REACT_APP_MSAL_TENANT_AUTHORITY_URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Azure AD App client tenant authority uri")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"REACT_APP_MSAL_CACHE_LOCATION"),(0,a.kt)("td",{parentName:"tr",align:null},"Cookie or Session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"REACT_APP_MSAL_LOGIN_REDIRECT_URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Root of domain where web-client is hosted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"REACT_APP_WEB_API_BASE_URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of daikon server /api")))),(0,a.kt)("p",null,"The configuration must be places in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"src/config.js")),(0,a.kt)("br",{parentName:"p"}),"\n","Example Configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'export const appConfig = {\n  REACT_APP_MSAL_CLIENT_ID: "",\n  REACT_APP_MSAL_CLIENT_SCOPE: "",\n  REACT_APP_MSAL_TENANT_AUTHORITY_URI: "",\n  REACT_APP_MSAL_CACHE_LOCATION: "",\n  REACT_APP_MSAL_AUTH_STATE_IN_COOKIE: "",\n  REACT_APP_MSAL_LOGIN_REDIRECT_URI: "",\n  REACT_APP_WEB_API_BASE_URI: "",\n};\n')),(0,a.kt)("p",null,"The container is ready to be built up.",(0,a.kt)("br",{parentName:"p"}),"\n","Start up with docker.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f docker-compose-dev.yml up\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"At this point, the daikon-core-webapp runs with the bare minimum configurations in a development env.",(0,a.kt)("br",{parentName:"p"}),"\n","Note that an instance of daikon-core-server must be running to make API calls.")))}d.isMDXComponent=!0}}]);