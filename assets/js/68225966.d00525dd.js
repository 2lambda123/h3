"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[6585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={id:"errors",title:"Error handling",sidebar_label:"Error handling",slug:"/library/errors"},i=void 0,o={unversionedId:"library/errors",id:"library/errors",title:"Error handling",description:"H3 does it's best to be robust to system failures or unexpected inputs, but",source:"@site/docs/library/errors.md",sourceDirName:"library",slug:"/library/errors",permalink:"/docs/library/errors",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/library/errors.md",tags:[],version:"current",frontMatter:{id:"errors",title:"Error handling",sidebar_label:"Error handling",slug:"/library/errors"},sidebar:"someSidebar",previous:{title:"Terminology",permalink:"/docs/library/terminology"},next:{title:"Tables of cell stats",permalink:"/docs/core-library/restable"}},d={},s=[{value:"Example",id:"example",level:2},{value:"H3Error type",id:"h3error-type",level:2},{value:"Table of error codes",id:"table-of-error-codes",level:2},{value:"Bindings",id:"bindings",level:3},{value:"References",id:"references",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"H3 does it's best to be robust to system failures or unexpected inputs, but\nsome times these cannot be recovered from. H3's way of doing this is to return\nan error code to the caller."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This code example checks for an error when calling an H3 function and prints a message if the call did not succeed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'H3Error err;\nH3Index result;\n\nerr = latLngToCell(lat, lng, res, &result);\nif (err) {\n    fprintf(stderr, "Error: %d", err);\n}\n')),(0,a.kt)("h2",{id:"h3error-type"},"H3Error type"),(0,a.kt)("p",null,"The type returned by most H3 functions is ",(0,a.kt)("inlineCode",{parentName:"p"},"H3Error"),", a 32 bit integer type with the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"H3Error")," will be an integer type of 32 bits, i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"uint32_t"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"H3Error")," with value 0 indicates success (no error)."),(0,a.kt)("li",{parentName:"ul"},"No ",(0,a.kt)("inlineCode",{parentName:"li"},"H3Error")," value will set the most significant bit."),(0,a.kt)("li",{parentName:"ul"},"As a result of these properties, no ",(0,a.kt)("inlineCode",{parentName:"li"},"H3Error")," value will set the bits that correspond with the ",(0,a.kt)("strong",{parentName:"li"},"Mode")," bit field in an ",(0,a.kt)("inlineCode",{parentName:"li"},"H3Index"),".")),(0,a.kt)("p",null,"32 bit return codes with the high bit never set allows for mixing error codes and resulting indexes if desired by the application, after copying the error codes into the result buffer."),(0,a.kt)("h2",{id:"table-of-error-codes"},"Table of error codes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"E_SUCCESS"),(0,a.kt)("td",{parentName:"tr",align:null},"Success (no error)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"E_FAILED"),(0,a.kt)("td",{parentName:"tr",align:null},"The operation failed but a more specific error is not available")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"E_DOMAIN"),(0,a.kt)("td",{parentName:"tr",align:null},"Argument was outside of acceptable range (when a more specific error code is not available)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"E_LATLNG_DOMAIN"),(0,a.kt)("td",{parentName:"tr",align:null},"Latitude or longitude arguments were outside of acceptable range")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"E_RES_DOMAIN"),(0,a.kt)("td",{parentName:"tr",align:null},"Resolution argument was outside of acceptable range")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"E_CELL_INVALID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"H3Index")," cell argument was not valid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"E_DIR_EDGE_INVALID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"H3Index")," directed edge argument was not valid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"E_UNDIR_EDGE_INVALID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"H3Index")," undirected edge argument was not valid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"E_VERTEX_INVALID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"H3Index")," vertex argument was not valid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"E_PENTAGON"),(0,a.kt)("td",{parentName:"tr",align:null},"Pentagon distortion was encountered which the algorithm could not handle it")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"E_DUPLICATE_INPUT"),(0,a.kt)("td",{parentName:"tr",align:null},"Duplicate input was encountered in the arguments and the algorithm could not handle it")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"E_NOT_NEIGHBORS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"H3Index")," cell arguments were not neighbors")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null},"E_RES_MISMATCH"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"H3Index")," cell arguments had incompatible resolutions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"13"),(0,a.kt)("td",{parentName:"tr",align:null},"E_MEMORY_ALLOC"),(0,a.kt)("td",{parentName:"tr",align:null},"Necessary memory allocation failed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"14"),(0,a.kt)("td",{parentName:"tr",align:null},"E_MEMORY_BOUNDS"),(0,a.kt)("td",{parentName:"tr",align:null},"Bounds of provided memory were not large enough")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"E_OPTION_INVALID"),(0,a.kt)("td",{parentName:"tr",align:null},"Mode or flags argument was not valid")))),(0,a.kt)("p",null,"The H3 library may always add additional error messages. Error messages not recognized by the application should be treated as ",(0,a.kt)("inlineCode",{parentName:"p"},"E_FAILED"),"."),(0,a.kt)("h3",{id:"bindings"},"Bindings"),(0,a.kt)("p",null,"Bindings translate error codes into the error handling mechanism appropriate to their language. For example, Java will convert error codes into Java Exceptions."),(0,a.kt)("p",null,"When possible, it is preferable to retain the error code. When this is not possible it is fine to elide them. Language bindings should include error messages that are formatted as is usual in their language."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/uber/h3/blob/master/dev-docs/RFCs/v4.0.0/error-handling-rfc.md"},"Technical RFC on error handling"))))}u.isMDXComponent=!0}}]);