"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?i.createElement(f,a(a({ref:t},c),{},{components:r})):i.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_position:12},a="Curio Item NBT",s={unversionedId:"curios/curios-nbt",id:"curios/curios-nbt",title:"Curio Item NBT",description:"A tutorial on how to edit a curio item's NBT data to add attribute modifiers when the item is worn in a curio slot.",source:"@site/docs/curios/curios-nbt.md",sourceDirName:"curios",slug:"/curios/curios-nbt",permalink:"/curios/curios-nbt",draft:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/docs/curios/curios-nbt.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Preset Slot Types",permalink:"/curios/preset-slots"},next:{title:"Diet",permalink:"/category/diet"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Syntax",id:"syntax",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"curio-item-nbt"},"Curio Item NBT"),(0,n.kt)("p",null,"A tutorial on how to edit a curio item's NBT data to add attribute modifiers when the item is worn in a curio slot."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Attribute modifiers used in item NBT for regular equipment slots will not work with curio slots. This is because the\nattribute modifiers are coded to work only in specific slots, and it will not recognize the custom curio slots. In order\nto grant this functionality, Curios adds its own method of adding NBT attribute modifiers in items."),(0,n.kt)("p",null,"The format for Curios is almost exactly the same as Minecraft, so it is recommended to look through this ",(0,n.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Attribute"},"Attribute Guide"),"\nfor extended information about attribute names, syntax, and possible fields. This guide will only go over the\ndifferences in Curios."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This is the vanilla way of adding an attribute modifier to the chest slot in an item's NBT:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'/give @s netherite_chestplate{AttributeModifiers:[{Slot:"chest", AttributeName:"generic.attack_damage", Name:"generic.attack_damage", Amount:20.0, Operation:0, UUID:[I; 42853, 1689024593, -201178, -1559272105]}]} 1\n')),(0,n.kt)("p",null,"This is the Curios way of achieving the same in the body slot:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'/give @s netherite_chestplate{CurioAttributeModifiers:[{Slot:"body", AttributeName:"generic.attack_damage", Name:"generic.attack_damage", Amount:20.0, Operation:0}]} 1\n')),(0,n.kt)("p",null,"Note that the main differences are the change from ",(0,n.kt)("inlineCode",{parentName:"p"},"AttributeModifiers")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"CurioAttributeModifiers")," and the change in\nthe slot name. The slot name should be the ",(0,n.kt)("inlineCode",{parentName:"p"},"identifier")," of a registered slot type."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"It is recommended that the UUID be left out except for special circumstances. When absent, Curios will give the attribute\nmodifier a UUID based on the slot context which will prevent any stacking issues that could arise when multiple slots\nof the same type exist and the same attribute modifier is applied multiple times.")))}p.isMDXComponent=!0}}]);