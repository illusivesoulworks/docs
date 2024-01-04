"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[183],{1159:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(5893),o=t(1151);const c={sidebar_position:10},n="Preset Slot Types",i={id:"curios/preset-slots",title:"Preset Slot Types",description:"A list of commonly used slot types that are already defined in Curios for developers to use.",source:"@site/docs/curios/preset-slots.md",sourceDirName:"curios",slug:"/curios/preset-slots",permalink:"/curios/preset-slots",draft:!1,unlisted:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/docs/curios/preset-slots.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Adding Custom Slot Textures",permalink:"/curios/slot-textures"},next:{title:"Curios Attribute Modifiers (NBT)",permalink:"/curios/curios-nbt"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Slot Types",id:"slot-types",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"preset-slot-types",children:"Preset Slot Types"}),"\n",(0,r.jsx)(s.p,{children:"A list of commonly used slot types that are already defined in Curios for developers to use."}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.p,{children:["One of the benefits of using Curios is that multiple developers can share slot types between each other, allowing\nmechanics and items to cooperate seamlessly. As long as the ",(0,r.jsx)(s.code,{children:"identifier"})," for the slot type is the same, the slot types\nwill be merged together upon registration. To reduce the need for redundant code and data, Curios provides a preset\nlist of slot types that are commonly used in the modded community and should be favored over creating wholly unique slot\ntypes when applicable."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"Although these slot types are provided by Curios, they are not active by default. A developer or user will still need to\ntake the proper steps to register the slot type(s) that they want in order to add them to the game."})}),"\n",(0,r.jsx)(s.h2,{id:"slot-types",children:"Slot Types"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Identifier"}),(0,r.jsx)(s.th,{children:"Usage"}),(0,r.jsx)(s.th,{children:"Examples"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"curio"})}),(0,r.jsx)(s.td,{children:"Universal, able to equip or be equipped into any slot type"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/botania",children:"Botania"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"back"})}),(0,r.jsx)(s.td,{children:"Items worn on the back, such as capes or backpacks"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/backpacked",children:"Backpacked"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/bountifulbaubles",children:"BountifulBaubles"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/curious-elytra",children:"Elytra Slot"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/curious-shulker-boxes",children:"Shulker Box Slot"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"belt"})}),(0,r.jsx)(s.td,{children:"Items worn around the waist, such as belts or pouches"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/artifacts",children:"Artifacts"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/cyclic",children:"Cyclic"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/natures-aura",children:"Nature's Aura"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"body"})}),(0,r.jsx)(s.td,{children:"Items worn around the torso, such as cloaks or shirts"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/engineers-tools",children:"Engineer's Tools"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/reliquary-v1-3",children:"Reliquary"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"bracelet"})}),(0,r.jsx)(s.td,{children:"Items worn around the wrist, such as bands or bracelets"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"charm"})}),(0,r.jsx)(s.td,{children:"Miscellaneous items, either held or not associated with a body part"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/angel-ring",children:"Angel Ring"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/curio-of-undying",children:"Charm of Undying"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/dark-utilities",children:"Dark Utilities"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"head"})}),(0,r.jsx)(s.td,{children:"Items worn on top of the head, such as crowns or hats"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/vanillatweaks",children:"VanillaTweaks"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"hands"})}),(0,r.jsx)(s.td,{children:"Items worn on hands, such as gloves or gauntlets"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/artifacts",children:"Artifacts"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/cyclic",children:"Cyclic"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"necklace"})}),(0,r.jsx)(s.td,{children:"Items worn around the neck, such as amulets or necklaces"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/azure-rpg-items",children:"Azure RPG Items"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/potion-capsule",children:"Potion Capsule"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ring"})}),(0,r.jsx)(s.td,{children:'Items worn on the "fingers", such as rings'}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/enigmatic-legacy",children:"Enigmatic Legacy"}),", ",(0,r.jsx)(s.a,{href:"https://www.curseforge.com/minecraft/mc-mods/gobber",children:"Gobber"})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>n});var r=t(7294);const o={},c=r.createContext(o);function n(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);