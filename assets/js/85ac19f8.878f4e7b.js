"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[5755],{8153:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=s(5893),i=s(1151);const a={sidebar_position:17},o="Example Datapack",l={id:"curios/slots/datapack-example",title:"Example Datapack",description:"An example datapack for configuring various curio mechanics, including adding slot types to entities and modifying",source:"@site/docs/curios/slots/datapack-example.md",sourceDirName:"curios/slots",slug:"/curios/slots/datapack-example",permalink:"/curios/slots/datapack-example",draft:!1,unlisted:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/docs/curios/slots/datapack-example.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Data Generation",permalink:"/curios/slots/data-generation"},next:{title:"Items",permalink:"/category/items"}},r={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Registering a New Slot Type",id:"registering-a-new-slot-type",level:2},{value:"Modifying an Existing Slot Type",id:"modifying-an-existing-slot-type",level:2},{value:"Adding Slot Types to One or More Entities",id:"adding-slot-types-to-one-or-more-entities",level:2},{value:"Adding an Item to a Curio Slot",id:"adding-an-item-to-a-curio-slot",level:2},{value:"Activating the Datapack",id:"activating-the-datapack",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"example-datapack",children:"Example Datapack"}),"\n",(0,n.jsx)(t.p,{children:"An example datapack for configuring various curio mechanics, including adding slot types to entities and modifying\nexisting slot types."}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(t.p,{children:["First, download the ",(0,n.jsx)(t.a,{target:"_blank",href:s(1121).Z+"",children:"example datapack"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Unzip the file and there will be the following folder structure:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"|data\n--|curios\n  --|tags\n    --|items\n      --|ring.json\n--|curios_example\n  --|curios\n    --|entities\n      --|entities.json\n    --|slots\n      --|ring.json\n|pack.mcmeta\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:".mcmeta"})," file and ",(0,n.jsx)(t.code,{children:".json"})," files can be opened and edited in any text editor, such as Notepad."]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Why are there two folders for ",(0,n.jsx)(t.em,{children:"curios"})," and ",(0,n.jsx)(t.em,{children:"curios_example"}),"?"]})}),(0,n.jsxs)(t.p,{children:["The namespace used for this datapack is ",(0,n.jsx)(t.code,{children:"curios_example"}),". The ",(0,n.jsx)(t.code,{children:"curios_example"})," folder has a sub-folder called ",(0,n.jsx)(t.code,{children:"curios"}),"\nwhich houses the ",(0,n.jsx)(t.code,{children:"entities"})," and ",(0,n.jsx)(t.code,{children:"slots"})," folder. This is the custom data that is specifically for the Curios mod. On the\nother hand, the ",(0,n.jsx)(t.code,{children:"curios"})," folder that houses the ",(0,n.jsx)(t.code,{children:"tags"})," folder is using the name as a separate namespace for the purposes\nof adding item tags, which are read by vanilla."]})]}),"\n",(0,n.jsx)(t.h2,{id:"registering-a-new-slot-type",children:"Registering a New Slot Type"}),"\n",(0,n.jsxs)(t.p,{children:["Adding a new slot type is controlled by the ",(0,n.jsx)(t.code,{children:"data/curios_example/curios/slots/example.json"})," file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "size": 1,\n  "add_cosmetic": true\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"The file and file name specifies these properties for the slot type:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The identifier for the slot type is ",(0,n.jsx)(t.code,{children:"example"}),", as denoted by the file name"]}),"\n",(0,n.jsxs)(t.li,{children:["The number of slots available is ",(0,n.jsx)(t.code,{children:"1"}),", as denoted by the ",(0,n.jsx)(t.code,{children:'"size"'})," field"]}),"\n",(0,n.jsxs)(t.li,{children:["Each slot of this slot type has an associated cosmetic slot, as denoted by the ",(0,n.jsx)(t.code,{children:'"add_cosmetic"'})," field"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For more information on the fields and customization of slot types, please refer to ",(0,n.jsx)(t.a,{href:"/curios/slots/slot-register",children:"the slot types page"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"modifying-an-existing-slot-type",children:"Modifying an Existing Slot Type"}),"\n",(0,n.jsxs)(t.p,{children:["Modifying an existing slot type is controlled by the ",(0,n.jsx)(t.code,{children:"data/curios_example/curios/slots/ring.json"})," file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "size": 2,\n  "add_cosmetic": true\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"The file and file name specifies these properties for the slot type:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The identifier for the slot type to change is ",(0,n.jsx)(t.code,{children:"ring"}),", as denoted by the file name"]}),"\n",(0,n.jsxs)(t.li,{children:["The number of slots available is ",(0,n.jsx)(t.code,{children:"2"}),", as denoted by the ",(0,n.jsx)(t.code,{children:'"size"'})," field"]}),"\n",(0,n.jsxs)(t.li,{children:["Each slot of this slot type has an associated cosmetic slot, as denoted by the ",(0,n.jsx)(t.code,{children:'"add_cosmetic"'})," field"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Note that this is exactly the same syntax as registering a new slot type. This is because modifying and registering a\nslot type both have the exact same process, the difference solely being whether multiple files exist for the same slot\ntype or not."}),"\n",(0,n.jsxs)(t.p,{children:["For more information on how slot types are modified from multiple files, please refer to ",(0,n.jsx)(t.a,{href:"/curios/slots/slot-register",children:"the slot types page"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"adding-slot-types-to-one-or-more-entities",children:"Adding Slot Types to One or More Entities"}),"\n",(0,n.jsxs)(t.p,{children:["Just creating the slot type isn't enough, as now it has to be added to one or more entities in order to appear anywhere.\nThis is configured by the ",(0,n.jsx)(t.code,{children:"data/curios_example/curios/entities/entities.json"})," file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "entities": [\n    "minecraft:player",\n    "minecraft:armor_stand"\n  ],\n  "slots": [\n    "back",\n    "body",\n    "belt",\n    "bracelet",\n    "charm",\n    "curio",\n    "example",\n    "hands",\n    "head",\n    "necklace",\n    "ring"\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"The file specifies these properties:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The slots being given are all the ",(0,n.jsx)(t.a,{href:"/curios/slots/preset-slots",children:"preset slot types"})," and the ",(0,n.jsx)(t.code,{children:"example"})," slot type created by this\ndatapack, as denoted by the ",(0,n.jsx)(t.code,{children:'"slots"'})," list"]}),"\n",(0,n.jsxs)(t.li,{children:["The entities being given slots are all players and armor stands, as denoted by the ",(0,n.jsx)(t.code,{children:'"entities"'})," list"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For more information on the fields and customization of entity slots, please refer to ",(0,n.jsx)(t.a,{href:"/curios/slots/entity-register",children:"the entity slots page"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"adding-an-item-to-a-curio-slot",children:"Adding an Item to a Curio Slot"}),"\n",(0,n.jsxs)(t.p,{children:["Items are added to slot types by adding them to the relevant item tag. In the example datapack, an item tag for the\n",(0,n.jsx)(t.code,{children:"ring"})," slot type is created at ",(0,n.jsx)(t.code,{children:"data/curios/tags/items/ring.json"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "replace": false,\n  "values": [\n    "minecraft:diamond"\n  ]\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The file name is the same as the identifier for the slot type and will be the name of the tag that is created. By\nsetting ",(0,n.jsx)(t.code,{children:"replace"})," to ",(0,n.jsx)(t.code,{children:"false"}),", the values are added to the tag instead of replacing them. Listing ",(0,n.jsx)(t.code,{children:"minecraft:diamond"})," in\nthe ",(0,n.jsx)(t.code,{children:"values"})," array will add the diamond item to the tag and consequently diamonds will be equippable in the ",(0,n.jsx)(t.code,{children:"ring"})," slots."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information on tags and item tags, please refer to the ",(0,n.jsx)(t.a,{href:"https://minecraft.wiki/w/Tag",children:"page on the Minecraft wiki"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"activating-the-datapack",children:"Activating the Datapack"}),"\n",(0,n.jsxs)(t.p,{children:["Datapacks are created on a per-world basis and need to be placed in the ",(0,n.jsx)(t.code,{children:"datapacks"})," folder of the ",(0,n.jsx)(t.code,{children:"world"})," folder on a\ndedicated server or the ",(0,n.jsx)(t.code,{children:"saves/(World Name)"})," folder in single player. They should automatically be enabled upon loading\nthe datapack for the first time in the world."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1121:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/files/curios_example-b9398f30472c661860955db867e85daa.zip"},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(7294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);