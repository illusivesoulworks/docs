"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Register a Slot Type",o={unversionedId:"curios/slot-register",id:"curios/slot-register",title:"Register a Slot Type",description:"A tutorial on how to register a slot type that is recognized by Curios.",source:"@site/docs/curios/slot-register.md",sourceDirName:"curios",slug:"/curios/slot-register",permalink:"/curios/slot-register",draft:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/docs/curios/slot-register.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Curios",permalink:"/category/curios"},next:{title:"Add a Slot Type to an Entity",permalink:"/curios/entity-register"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Directory",id:"directory",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Modifying a Slot Type",id:"modifying-a-slot-type",level:2},{value:"Example",id:"example-1",level:3}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"register-a-slot-type"},"Register a Slot Type"),(0,r.kt)("p",null,"A tutorial on how to register a slot type that is recognized by Curios."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Beginning in 1.20, the recommended way to register a slot type is through a datapack. If you are unfamiliar with\ndatapacks, it is recommended to read through the ",(0,r.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Data_pack"},"wiki page")," in order to\nunderstand the concept and structure before proceeding to the rest of this page."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If using one of the ",(0,r.kt)("a",{parentName:"p",href:"./preset-slots"},"Preset Slot Types"),", this step can be skipped since Curios natively provides the\nneeded datapack registration.")),(0,r.kt)("h2",{id:"directory"},"Directory"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The file should be a ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file with the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," for the slot type to be registered as the name. This file\nshould be located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/data/(namespace)/curios/slots/")," folder of the datapack."),(0,r.kt)("p",null,"Example: Registering a ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," slot type requires creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"head.json")," file located in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/data/(namespace)/curios/slots/"),"\nso the final path should look like ",(0,r.kt)("inlineCode",{parentName:"p"},"~/data/(namespace)/curios/slots/head.json"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"(namespace)")," field should be replaced by the namespace chosen for this portion of the datapack. If this is a part\nof a mod, the namespace is usually the mod ID. If this is part of a user-defined datapack, then the namespace can be\nanything that is lowercased with no special characters.")),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file for the slot type consists of a top-level JSON object that holds various fields\nrelated to that slot type."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Merge Behavior"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", replaces data from lower-priority datapacks"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of slots of this slot type to give by default"),(0,r.kt)("td",{parentName:"tr",align:null},"The highest size will be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"operation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"SET"'),"|",(0,r.kt)("inlineCode",{parentName:"td"},'"ADD"'),"|",(0,r.kt)("inlineCode",{parentName:"td"},'"REMOVE"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"SET"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use ",(0,r.kt)("inlineCode",{parentName:"td"},"size")," to set, add, or remove from the total number of slots"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"order")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"The order the slots will appear in the native Curios GUI, lower numbers appear higher"),(0,r.kt)("td",{parentName:"tr",align:null},"The lowest order will be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"curios:slot/empty_curios_slot")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"The location of the icon to use for the slot type"),(0,r.kt)("td",{parentName:"tr",align:null},"The last icon will be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"add_cosmetic")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", adds a cosmetic slot next to the original that does not provide function but still renders its contents"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if any add a cosmetic slot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"use_native_gui")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", does not add the slot type to the native Curios GUI"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")," if any do not use the native GUI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"render_toggle")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", does not allow the slot type to toggle its rendering"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")," if any do not allow render toggling")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "order": 20,\n  "size": 4,\n  "icon": "curios:slot/empty_custom_slot",\n  "add_cosmetic": true\n}\n')),(0,r.kt)("p",null,"This slot type will have a relatively low order of 20, which will make it appear higher than most slots. It also has\nsize of 4 which means that it will register 4 slots to any given entity by default. For the GUI, it uses an icon\nlocated at ",(0,r.kt)("inlineCode",{parentName:"p"},"curios:slot/empty_custom_slot"),". It also has added a cosmetic slot so there will be an additional slot for\ncosmetic items next to it in the Curios GUI."),(0,r.kt)("h2",{id:"modifying-a-slot-type"},"Modifying a Slot Type"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The process of modifying a slot type is identical to registering a new slot type, except using the same ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," as\nthe existing slot type. All slot types that share an ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," will be merged according to the ",(0,r.kt)("strong",{parentName:"p"},"Merge Behavior")," of\neach field as outlined above."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"Curios natively provides data for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ring")," slot, which defaults the size to 1. In order to increase the size to 2,\ncreate a ",(0,r.kt)("inlineCode",{parentName:"p"},"ring.json")," slot registration file in the datapack with the contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "size": 2\n}\n')),(0,r.kt)("p",null,"This will merge the size data of this registration with the existing registration provided by Curios, keeping all of the\nother data intact while increasing the number of slots to 2."))}u.isMDXComponent=!0}}]);