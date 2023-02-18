"use strict";(self.webpackChunkdaikon=self.webpackChunkdaikon||[]).push([[2520],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(i),h=r,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return i?a.createElement(f,o(o({ref:t},d),{},{components:i})):a.createElement(f,o({ref:t},d))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<n;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},7512:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=i(7462),r=(i(7294),i(3905));const n={sidebar_position:5},o="Gene specific organization's private data",s={unversionedId:"user-guide/Genes/private-data",id:"user-guide/Genes/private-data",title:"Gene specific organization's private data",description:"Use Case",source:"@site/docs/user-guide/Genes/private-data.md",sourceDirName:"user-guide/Genes",slug:"/user-guide/Genes/private-data",permalink:"/daikon/docs/user-guide/Genes/private-data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/Genes/private-data.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Editing and Versioning Public data",permalink:"/daikon/docs/user-guide/Genes/editing-public-data"},next:{title:"Adding Private Data",permalink:"/daikon/docs/user-guide/Genes/adding-private-data"}},l={},c=[{value:"Use Case",id:"use-case",level:2},{value:"A Deep Dive",id:"a-deep-dive",level:2},{value:"What is essentiality?",id:"what-is-essentiality",level:4},{value:"Protein Production List",id:"protein-production-list",level:4},{value:"Protein Activity Assay List",id:"protein-activity-assay-list",level:4},{value:"What is Hypomorph?",id:"what-is-hypomorph",level:4},{value:"CRISPRi Strain",id:"crispri-strain",level:4},{value:"Resistance Mutations",id:"resistance-mutations",level:4},{value:"Vulnerability",id:"vulnerability",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gene-specific-organizations-private-data"},"Gene specific organization's private data"),(0,r.kt)("h2",{id:"use-case"},"Use Case"),(0,r.kt)("p",null,"Daikon recognizes that many organizations generate data that is specific to them and may not be published or shared publicly. To address this, Daikon provides a private section of genes where organizations can record and tag their own private data."),(0,r.kt)("p",null,"If Daikon is hosted on a private server within the organization, all data entered into the private section of genes remains within that server and is never shared outside the organization."),(0,r.kt)("p",null,"The private section of genes in Daikon includes the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Essentiality"),(0,r.kt)("li",{parentName:"ul"},"Protein Production List"),(0,r.kt)("li",{parentName:"ul"},"Protein Activity Assay List"),(0,r.kt)("li",{parentName:"ul"},"Hypomorph"),(0,r.kt)("li",{parentName:"ul"},"CRISPRi Strain"),(0,r.kt)("li",{parentName:"ul"},"Resistance Mutations"),(0,r.kt)("li",{parentName:"ul"},"Vulnerability"),(0,r.kt)("li",{parentName:"ul"},"Unpublished Structural Information")),(0,r.kt)("p",null,"By providing these fields for private data, Daikon offers organizations a comprehensive platform for managing and analyzing all relevant data in drug discovery. This feature allows organizations to keep all their data in one place, regardless of whether it is public or private, ensuring that researchers have access to all the information they need to make informed decisions."),(0,r.kt)("h2",{id:"a-deep-dive"},"A Deep Dive"),(0,r.kt)("h4",{id:"what-is-essentiality"},"What is essentiality?"),(0,r.kt)("p",null,"Essentiality in drug discovery refers to the biological importance of a gene, usually in the context of its role in cell survival and growth. Essential genes are those that are required for the survival of a cell or organism, while non-essential genes are not strictly necessary for survival."),(0,r.kt)("p",null,"In drug discovery, understanding the essentiality of a target gene is crucial for developing effective therapies. Essential genes may be attractive targets for drugs, as inhibiting their function can lead to cell death or growth arrest, making them potentially useful for treating diseases such as cancer. However, it is important to be aware that targeting essential genes can also have adverse effects on normal cells, leading to toxicity and other side effects."),(0,r.kt)("h4",{id:"protein-production-list"},"Protein Production List"),(0,r.kt)("p",null,"This List allows organizations to keep track of proteins that have been produced for a particular gene or target."),(0,r.kt)("p",null,"In order to study the function of a protein or develop drugs that target it, it is often necessary to produce the protein in large quantities for analysis. The Protein Production List allows researchers to record which proteins have been successfully produced, along with information about the production method, purity, and other relevant details. This information can be useful for identifying potential issues with protein production and refining production methods, as well as for tracking which proteins have been used in various experiments and assays. Overall, the Protein Production List is an important tool for managing and organizing data related to protein production in drug discovery."),(0,r.kt)("h4",{id:"protein-activity-assay-list"},"Protein Activity Assay List"),(0,r.kt)("p",null,"Protein Activity Assay List is a field in drug discovery that allows organizations to keep track of experiments that measure the activity of a particular protein."),(0,r.kt)("p",null,"Protein activity assays are a critical tool in drug discovery, as they allow researchers to test the effectiveness of potential drugs and understand the function of target proteins. The Protein Activity Assay List allows researchers to record the results of these experiments, including information about the assay method, substrate, controls, and other relevant details.By keeping a detailed record of protein activity assays, organizations can better understand the function of target proteins and the potential effects of drugs that target them. This information can also be used to identify potential issues with assay methods and refine experimental protocols."),(0,r.kt)("h4",{id:"what-is-hypomorph"},"What is Hypomorph?"),(0,r.kt)("p",null,"In drug discovery, a hypomorph refers to a mutation in a gene that reduces the function of the corresponding protein, but does not completely eliminate it."),(0,r.kt)("p",null,"Hypomorphic mutations can have a variety of effects on protein function, depending on the nature of the mutation and the specific protein involved. In some cases, a hypomorphic mutation may cause a protein to be produced at lower levels, resulting in reduced activity. In other cases, the mutation may alter the structure of the protein in a way that impairs its function."),(0,r.kt)("p",null,"Hypomorphic mutations can be important in drug discovery, as they may provide insights into the normal function of proteins and the effects of drugs that target them. By recording information about hypomorphic mutations in genes of interest, drug discovery organizations can better understand the potential effects of different drugs and develop more targeted therapeutic approaches."),(0,r.kt)("h4",{id:"crispri-strain"},"CRISPRi Strain"),(0,r.kt)("p",null,"CRISPRi (clustered regularly interspaced short palindromic repeats interference) is a technology that allows researchers to precisely control the expression of genes in cells. In drug discovery, CRISPRi strains are cells that have been genetically modified to express the CRISPRi system, which can be used to selectively silence or downregulate the expression of specific genes."),(0,r.kt)("p",null,"CRISPRi strains are important in drug discovery because they can be used to study the function of genes and their role in disease. By selectively inhibiting the expression of a particular gene, researchers can study the effects of that gene on various cellular processes and understand its potential as a drug target. CRISPRi strains can also be used to screen potential drug compounds and identify those that have the desired effects on specific gene targets."),(0,r.kt)("h4",{id:"resistance-mutations"},"Resistance Mutations"),(0,r.kt)("p",null,"Resistance mutations are genetic alterations that result in a reduced susceptibility to a particular drug or treatment. In the context of drug discovery, resistance mutations are mutations that occur in the target molecule of a drug or in other proteins or pathways that affect the drug's efficacy. These mutations can decrease the ability of the drug to bind to its target or increase the rate at which the drug is metabolized or excreted, leading to reduced efficacy of the drug. The identification and tracking of resistance mutations is important in drug discovery to help inform the development of new drugs or to guide the selection of appropriate therapies for patients."),(0,r.kt)("h4",{id:"vulnerability"},"Vulnerability"),(0,r.kt)("p",null,"In the context of drug discovery, vulnerability refers to a characteristic or feature of a biological target that makes it more susceptible to modulation by a drug or therapeutic intervention. Targets that are vulnerable to drug action are typically those that play a key role in disease pathology or are critical to the survival or replication of a pathogen. By identifying vulnerabilities in these targets, drug discovery researchers can focus their efforts on developing drugs that specifically target these vulnerabilities, leading to more effective and selective treatments. Vulnerabilities may be discovered through a variety of methods, including genetic screens, biochemical assays, and structural studies."))}p.isMDXComponent=!0}}]);