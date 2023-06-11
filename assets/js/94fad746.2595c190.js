"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||c[f]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7},o="NBT Tags",s={unversionedId:"champions/nbt",id:"version-1.18.x/champions/nbt",title:"NBT Tags",description:"As an alternative to the convenient but limited summoning methods outlined in Commands, Champions provides a way to specify rank and affix data directly through NBT tags.",source:"@site/versioned_docs/version-1.18.x/champions/nbt.md",sourceDirName:"champions",slug:"/champions/nbt",permalink:"/1.18.x/champions/nbt",draft:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/versioned_docs/version-1.18.x/champions/nbt.md",tags:[],version:"1.18.x",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/1.18.x/champions/commands"},next:{title:"Mod Integrations",permalink:"/1.18.x/category/mod-integrations"}},l={},m=[{value:"NBT Structure",id:"nbt-structure",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nbt-tags"},"NBT Tags"),(0,r.kt)("p",null,"As an alternative to the convenient but limited summoning methods outlined in ",(0,r.kt)("a",{parentName:"p",href:"commands"},"Commands"),", Champions provides a way to specify rank and affix data directly through NBT tags."),(0,r.kt)("p",null,"Upon spawning, the Champions data from the NBT tags will be read, applied, and then removed."),(0,r.kt)("h2",{id:"nbt-structure"},"NBT Structure"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ForgeData"),": Serves as the root tag.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ChampionsData"),": Serves as the sub-root tag.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tier"),": The tier of the rank to assign to the champion entity. Can be an integer or an object with the following structure:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"min"),": The minimum tier of the rank to assign to the champion entity. Must be equal to or lower than ",(0,r.kt)("strong",{parentName:"li"},"max"),". If absent, there is no minimum."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"max"),": The maximum tier of the rank to assign to the champion entity. Must be equal to or higher than ",(0,r.kt)("strong",{parentName:"li"},"min"),". If absent, there is no maximum."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"affixes"),": The affixes to assign to the champion entity. Can be a list of affix identifiers as strings or an object with the following structure:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"values"),": A list of affix identifiers for affixes to assign to the champion entity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"count"),": The total number of affixes to assign to the champion entity. If absent, the default number from the rank configuration will be used.")))))))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To summon a tier 3 champion ",(0,r.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Spider"},"spider")," entity with the Enkindling affix:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'summon spider ~ ~ ~ {ForgeData:{ChampionsData:{tier:3,affixes:{values:["enkindling"],count:1}}}}')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To summon a tier 2 champion ",(0,r.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Skeleton"},"skeleton")," entity with the Hasty affix and 2 random affixes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'summon skeleton ~ ~ ~ {ForgeData:{ChampionsData:{tier:2,affixes:{values:["hasty"],count:3}}}}')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To summon a tier 4 champion ",(0,r.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Zombie"},"zombie")," entity with random affixes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"summon zombie ~ ~ ~ {ForgeData:{ChampionsData:{tier:4}}}"))))))}c.isMDXComponent=!0}}]);