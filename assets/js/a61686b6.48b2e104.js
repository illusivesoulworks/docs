"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[2922],{3610:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=s(5893),i=s(1151);const r={sidebar_position:3},o="Entity Slot Types",l={id:"curios/slots/entity-register",title:"Entity Slot Types",description:"A tutorial on how to add registered slot types to entities.",source:"@site/docs/curios/slots/entity-register.md",sourceDirName:"curios/slots",slug:"/curios/slots/entity-register",permalink:"/curios/slots/entity-register",draft:!1,unlisted:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/docs/curios/slots/entity-register.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Slot Types",permalink:"/curios/slots/slot-register"},next:{title:"Preset Slot Types",permalink:"/curios/slots/preset-slots"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Directory",id:"directory",level:2},{value:"Syntax",id:"syntax",level:2},{value:"<strong>replace</strong> (boolean)",id:"replace-boolean",level:3},{value:"<strong>entities</strong> (string[])",id:"entities-string",level:3},{value:"<strong>slots</strong> (string[])",id:"slots-string",level:3},{value:"<strong>conditions</strong> (string[])",id:"conditions-string",level:3},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"entity-slot-types",children:"Entity Slot Types"}),"\n",(0,n.jsx)(t.p,{children:"A tutorial on how to add registered slot types to entities."}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["The recommended way to add a registered slot type to an entity is through a datapack. If you are unfamiliar with\ndatapacks, it is recommended to read through the ",(0,n.jsx)(t.a,{href:"https://minecraft.fandom.com/wiki/Data_pack",children:"wiki page"})," in order to\nunderstand the concept and structure before proceeding to the rest of this page."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/curios/slots/slot-register",children:"Registered slot types"})," will all be available for use but will not appear in-game until they are\nadded to one or more entities."]}),"\n",(0,n.jsxs)(t.p,{children:["Alternatively, users can instead choose to use the ",(0,n.jsx)(t.a,{href:"../configuration#slot-configuration",children:"Curios configuration"})," to create\nand assign slot types to ",(0,n.jsx)(t.strong,{children:"players only"}),". There are fewer features than those offered in the datapack method, but some\nusers may find the process to be more straightforward."]}),"\n",(0,n.jsx)(t.h2,{id:"directory",children:"Directory"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["The file should be a ",(0,n.jsx)(t.code,{children:".json"})," file located in the ",(0,n.jsx)(t.code,{children:"~/data/(namespace)/curios/entities/"})," folder of the datapack."]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"The file can be named anything."}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"(namespace)"})," field should be replaced by the namespace chosen for this portion of the datapack. If this is a part\nof a mod, the namespace is usually the mod ID. If this is part of a user-defined datapack, then the namespace can be\nanything that is lowercased with no special characters."]})]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["The structure of the ",(0,n.jsx)(t.code,{children:".json"})," file for the entity configuration consists of a top-level JSON object that holds several\npotential fields."]}),"\n",(0,n.jsx)(t.p,{children:"All fields are optional unless otherwise noted."}),"\n",(0,n.jsxs)(t.h3,{id:"replace-boolean",children:[(0,n.jsx)(t.strong,{children:"replace"})," (boolean)"]}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.code,{children:"true"}),", replaces data from lower-priority datapacks."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"default:"})," ",(0,n.jsx)(t.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"entities-string",children:[(0,n.jsx)(t.strong,{children:"entities"})," (string[])"]}),"\n",(0,n.jsx)(t.p,{children:"An array of registry names of entity types or entity type tags."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"default:"})," ",(0,n.jsx)(t.code,{children:"[]"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"slots-string",children:[(0,n.jsx)(t.strong,{children:"slots"})," (string[])"]}),"\n",(0,n.jsxs)(t.p,{children:["An array of ",(0,n.jsx)(t.code,{children:"identifier"})," names for registered slot types."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"default:"})," ",(0,n.jsx)(t.code,{children:"[]"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"conditions-string",children:[(0,n.jsx)(t.strong,{children:"conditions"})," (string[])"]}),"\n",(0,n.jsxs)(t.p,{children:["An array of ",(0,n.jsx)(t.code,{children:"ICondition"})," implementations that must all pass before these slots are loaded into these entities."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"default:"})," ",(0,n.jsx)(t.code,{children:"[]"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"All the listed slots will be associated to all the listed entities."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Adding multiple of the same ",(0,n.jsx)(t.code,{children:"identifier"})," to the ",(0,n.jsx)(t.code,{children:"slots"})," array will ",(0,n.jsx)(t.strong,{children:"not"})," add multiple slots. Each entry in the ",(0,n.jsx)(t.code,{children:"slots"}),"\narray represents a ",(0,n.jsx)(t.a,{href:"/curios/slots/slot-register",children:"registered slot type"})," and the entries do not stack, please refer to that page in\norder to change slot type behavior including default size."]})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "entities": ["player", "minecraft:zombie"],\n  "slots": ["head", "back"]\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This configuration will give two slot types, ",(0,n.jsx)(t.code,{children:"head"})," and ",(0,n.jsx)(t.code,{children:"back"}),", to all players and all zombies."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(7294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);