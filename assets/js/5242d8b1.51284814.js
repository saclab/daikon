"use strict";(self.webpackChunkdaikon=self.webpackChunkdaikon||[]).push([[4055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6695:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Quick Start",p={unversionedId:"deployment-guide/daikon-core-server/quick-start",id:"deployment-guide/daikon-core-server/quick-start",title:"Quick Start",description:"Clone the daikon-core-server github to your local workspace",source:"@site/docs/deployment-guide/daikon-core-server/quick-start.md",sourceDirName:"deployment-guide/daikon-core-server",slug:"/deployment-guide/daikon-core-server/quick-start",permalink:"/daikon/docs/deployment-guide/daikon-core-server/quick-start",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deployment-guide/daikon-core-server/quick-start.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Daikon Core Server",permalink:"/daikon/docs/category/daikon-core-server"},next:{title:"Daikon Core Web Client",permalink:"/daikon/docs/category/daikon-core-web-client"}},s={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("strong",{parentName:"p"},"daikon-core-server")," github to your local workspace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/saclab/daikon-core-server.git\n")),(0,a.kt)("p",null,"In the project directory create a .env file\nThe env file should contain the following params."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"AZURE_VAILD_AUDIENCE=api://<azure audience id>\nAZURE_AUTHORITY=https://login.microsoftonline.com/<authority id>\nPGPASSWORD=<?>\nPGPGUSER=tpt_user\nPGSQL_CONNECTION_STRING=Host=project_db;Port=5432;Database=tpt_db;\nCORS_ORIGINS=http://localhost:3000\n")),(0,a.kt)("p",null,"User authorization is done using an AD/SSO.",(0,a.kt)("br",{parentName:"p"}),"\n","Out of the box, the server is configured to use Microsoft Azure AD and the app needs to be registerd with the provider."),(0,a.kt)("p",null,"To register an application with Azure AD and create a service principal sign in to your Azure Account through the Azure portal.",(0,a.kt)("br",{parentName:"p"}),"\n",'Select Azure Active Directory > Select App registrations > Select New registration.\nName the application, for example "example-app". Select a supported account type, which determines who can use the application. Under Redirect URI, select Web for the type of application you want to create. Enter the URI where the access token is sent to.',(0,a.kt)("br",{parentName:"p"}),"\n","After setting the values, select Register. More information can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal"},"Azure Docs")),(0,a.kt)("admonition",{title:"PostgresSQL Server",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The docker-compose.dev script automatically creates a PostgresSQL Server container with default values and using PGPGUSER, PGPASSWORD from the .env file")),(0,a.kt)("p",null,"Add yourself as a user, default users are maintained in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Data/Sample/appUsers.yaml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: InitialAppUsers\nType: AppUsers\nData:\n  - DisplayName : John Doe\n    UserName: john\n    Email: john@example.com\n")),(0,a.kt)("p",null,"Add yourself to the Administrator group, which is maintained in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Data/Sample/appAdmins.yaml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: InitialAppAdmins\nType: string\nData:\n  - john@example.com\n")),(0,a.kt)("admonition",{title:"Data/Sample",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Files inside Data/Sample are sourced by the app to create default values on the first run.",(0,a.kt)("br",{parentName:"p"}),"\n","This is a good place to define super admins who need to access the app as soon as it is setup")),(0,a.kt)("p",null,"The container is ready to be built up.",(0,a.kt)("br",{parentName:"p"}),"\n","Start up with docker.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f docker-compose-dev.yml up\n")),(0,a.kt)("p",null,"Daikon Server Core should start up in a development environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"daikon_server_core_dev  | info: Microsoft.Hosting.Lifetime[0]\ndaikon_server_core_dev  |       Hosting environment: Development\ndaikon_server_core_dev  | info: Microsoft.Hosting.Lifetime[0]\ndaikon_server_core_dev  |       Content root path: /daikon-server\n")),(0,a.kt)("admonition",{title:"API Documentation",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The server generates a SWAGGER UI to expose the APIs offered at\n",(0,a.kt)("a",{parentName:"p",href:"http://localhost:5005/swagger/index.html"},"http://localhost:5005/swagger/index.html"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"At this point, the daikon-server-core runs with the bare minimum configurations in a development env.",(0,a.kt)("br",{parentName:"p"}),"\n","You can test the APIS using Postman or move to deploying the daikon-web-client.")))}d.isMDXComponent=!0}}]);