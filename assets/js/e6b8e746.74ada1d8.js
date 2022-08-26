"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[28],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),l=t(6010);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),l=t(7294),r=t(6010),o=t(2389),i=t(7392),c=t(7094),s=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:o,block:d,defaultValue:m,values:g,groupId:f,className:v}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,i.l)(h,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(n=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?n:b[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:x}=(0,c.U)(),[N,L]=(0,l.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=T[f];null!=e&&e!==N&&h.some((n=>n.value===e))&&L(e)}const I=e=>{const n=e.currentTarget,t=j.indexOf(n),a=h[t].value;a!==N&&(E(n),L(a),null!=f&&x(f,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=j.indexOf(e.currentTarget)+1;t=null!=(a=j[n])?a:j[0];break}case"ArrowLeft":{var l;const n=j.indexOf(e.currentTarget)-1;t=null!=(l=j[n])?l:j[j.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>j.push(e),onKeyDown:C,onFocus:I,onClick:I},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(n)},e))}},7472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),l=(t(7294),t(3905)),r=t(5488),o=t(5162);const i={id:"indexing",title:"Indexing functions",sidebar_label:"Indexing",slug:"/api/indexing"},c=void 0,s={unversionedId:"api/indexing",id:"api/indexing",title:"Indexing functions",description:"These functions are used for finding the H3 cell index containing coordinates, and for finding the center and boundary of H3 indexes.",source:"@site/docs/api/indexing.mdx",sourceDirName:"api",slug:"/api/indexing",permalink:"/docs/api/indexing",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/indexing.mdx",tags:[],version:"current",frontMatter:{id:"indexing",title:"Indexing functions",sidebar_label:"Indexing",slug:"/api/indexing"},sidebar:"someSidebar",previous:{title:"Tables of cell stats",permalink:"/docs/core-library/restable"},next:{title:"Inspection",permalink:"/docs/api/inspection"}},u={},p=[{value:"latLngToCell",id:"latlngtocell",level:2},{value:"cellToLatLng",id:"celltolatlng",level:2},{value:"cellToBoundary",id:"celltoboundary",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"These functions are used for finding the H3 cell index containing coordinates, and for finding the center and boundary of H3 indexes."),(0,l.kt)("h2",{id:"latlngtocell"},"latLngToCell"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error latLngToCell(const LatLng *g, int res, H3Index *out);\n"))),(0,l.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.latlng_to_cell(lat, lng, resolution)\n"))),(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"long latLngToCell(double lat, double lng, int res);\nString latLngToCellAddress(double lat, double lng, int res);\n"))),(0,l.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.latLngToCell(lat, lng, res)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const lat = 45;\n  const lng = 40;\n  const res = 2;\n  return h3.latLngToCell(lat, lng, res);\n}\n")))),(0,l.kt)("p",null,"Indexes the location at the specified resolution, returning the index of the cell containing the location. This buckets\nthe geographic point into the H3 grid. See the ",(0,l.kt)("a",{parentName:"p",href:"../core-library/latLngToCellDesc"},"algorithm description")," for more information."),(0,l.kt)("p",null,"Returns 0 (",(0,l.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,l.kt)("h2",{id:"celltolatlng"},"cellToLatLng"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error cellToLatLng(H3Index cell, LatLng *g);\n"))),(0,l.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_latlng(cell)\n"))),(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"LatLng cellToLatLng(long cell);\nLatLng cellToLatLng(String cellAddress);\n"))),(0,l.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.cellToLatLng(cell)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToLatLng(cell);\n}\n")))),(0,l.kt)("p",null,"Finds the center of the cell in grid space. See the\n",(0,l.kt)("a",{parentName:"p",href:"../core-library/cellToLatLngDesc"},"algorithm description")," for\nmore information."),(0,l.kt)("p",null,"The center will drift versus the centroid\nof the cell on Earth due to distortion from the gnomonic\nprojection within the icosahedron face it resides on and its\ndistance from the center of the icosahedron face."),(0,l.kt)("p",null,"Returns 0 (",(0,l.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,l.kt)("h2",{id:"celltoboundary"},"cellToBoundary"),(0,l.kt)(r.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error cellToBoundary(H3Index cell, CellBoundary *bndry);\n"))),(0,l.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_boundary(cell, geo_json=False)\n"))),(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<LatLng> cellToBoundary(long cell);\nList<LatLng> cellToBoundary(String cellAddress);\n"))),(0,l.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.cellToBoundary(cell, [formatAsGeoJson])\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToBoundary(cell);\n}\n")))),(0,l.kt)("p",null,"Finds the boundary of the cell. See the\n",(0,l.kt)("a",{parentName:"p",href:"../core-library/cellToBoundaryDesc"},"algorithm description"),"\nfor more information."),(0,l.kt)("p",null,"Returns 0 (",(0,l.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."))}m.isMDXComponent=!0}}]);