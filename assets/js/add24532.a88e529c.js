"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[422],{2272:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=i(5893),s=i(1151);const n={sidebar_position:12},r="Curios Attribute Modifiers (NBT)",a={id:"curios/curios-nbt",title:"Curios Attribute Modifiers (NBT)",description:"A tutorial on how to edit a curio item's NBT data to add attribute modifiers when the item is worn in a curio slot.",source:"@site/docs/curios/curios-nbt.md",sourceDirName:"curios",slug:"/curios/curios-nbt",permalink:"/curios/curios-nbt",draft:!1,unlisted:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/docs/curios/curios-nbt.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Preset Slot Types",permalink:"/curios/preset-slots"},next:{title:"Commands",permalink:"/curios/commands"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Syntax",id:"syntax",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"curios-attribute-modifiers-nbt",children:"Curios Attribute Modifiers (NBT)"}),"\n",(0,o.jsx)(t.p,{children:"A tutorial on how to edit a curio item's NBT data to add attribute modifiers when the item is worn in a curio slot."}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"Attribute modifiers used in item NBT for regular equipment slots will not work with curio slots. This is because the\nattribute modifiers are coded to work only in specific slots, and it will not recognize the custom curio slots. In order\nto grant this functionality, Curios adds its own method of adding NBT attribute modifiers in items."}),"\n",(0,o.jsxs)(t.p,{children:["The format for Curios is almost exactly the same as Minecraft, so it is recommended to look through this ",(0,o.jsx)(t.a,{href:"https://minecraft.fandom.com/wiki/Attribute",children:"Attribute Guide"}),"\nfor extended information about attribute names, syntax, and possible fields. This guide will only go over the\ndifferences in Curios."]}),"\n",(0,o.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"This is the vanilla way of adding an attribute modifier to the chest slot in an item's NBT:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'/give @s netherite_chestplate{AttributeModifiers:[{Slot:"chest", AttributeName:"generic.attack_damage", Name:"generic.attack_damage", Amount:20.0, Operation:0, UUID:[I; 42853, 1689024593, -201178, -1559272105]}]} 1\n'})}),"\n",(0,o.jsx)(t.p,{children:"This is the Curios way of achieving the same in the body slot:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'/give @s netherite_chestplate{CurioAttributeModifiers:[{Slot:"body", AttributeName:"generic.attack_damage", Name:"generic.attack_damage", Amount:20.0, Operation:0}]} 1\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Note that the main differences are the change from ",(0,o.jsx)(t.code,{children:"AttributeModifiers"})," to ",(0,o.jsx)(t.code,{children:"CurioAttributeModifiers"})," and the change in\nthe slot name. The slot name should be the ",(0,o.jsx)(t.code,{children:"identifier"})," of a registered slot type."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"It is recommended that the UUID be left out except for special circumstances. When absent, Curios will give the attribute\nmodifier a UUID based on the slot context which will prevent any stacking issues that could arise when multiple slots\nof the same type exist and the same attribute modifier is applied multiple times."})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var o=i(7294);const s={},n=o.createContext(s);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);