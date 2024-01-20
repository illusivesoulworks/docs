"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[270],{1119:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(5893),l=s(1151);const r={sidebar_position:14},t="Commands",c={id:"curios/commands",title:"Commands",description:"A tutorial on the various commands available through Curios.",source:"@site/docs/curios/commands.md",sourceDirName:"curios",slug:"/curios/commands",permalink:"/curios/commands",draft:!1,unlisted:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/docs/curios/commands.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Curios Attribute Modifiers (NBT)",permalink:"/curios/curios-nbt"},next:{title:"Setting Up the Development Environment",permalink:"/curios/Developing with Curios/getting-started"}},d={},o=[{value:"Command Guide",id:"command-guide",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2},{value:"Entity Selector Options",id:"entity-selector-options",level:2},{value:"Tag Format",id:"tag-format",level:3},{value:"Inverting",id:"inverting",level:3},{value:"Examples",id:"examples-1",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"commands",children:"Commands"}),"\n",(0,i.jsx)(n.p,{children:"A tutorial on the various commands available through Curios."}),"\n",(0,i.jsx)(n.h2,{id:"command-guide",children:"Command Guide"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Syntax"}),(0,i.jsx)(n.th,{children:"Meaning"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"plain text"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"Enter this literally"}),", exactly as shown."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<argumentsName>"})}),(0,i.jsxs)(n.td,{children:["An ",(0,i.jsx)(n.strong,{children:"argument"})," that should be replaced with an appropriate value."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[entry]"})}),(0,i.jsxs)(n.td,{children:["This entry is ",(0,i.jsx)(n.strong,{children:"optional"}),"."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["All the commands begin with ",(0,i.jsx)(n.code,{children:"curios"})," and have the following options:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"list"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Outputs a list of slot identifiers, categorized by mod."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"replace <slotId> <index> <player> with <item> [amount]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Places the specified item in the specified slot on the target player."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"set <slotId> <player> [amount]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sets a number of slots for the specified slot type on the target player."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"add <slotId> <player> [amount]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Adds a number of slots for the specified slot type on the target player."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"remove <slotId> <player> [amount]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Removes a number of slots for the specified slot type on the target player."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clear <player> [slotId]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Clears the specified slot type of all its items. If no slot type is specified, all curios items will be cleared."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"drop <player> [slotId]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Drops all the items in the specified slot type. If no slot type is specified, all curios items will be dropped."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"reset <player>"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Resets the target player's curios inventory to its default slots, also clears all curios items."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<player>"}),": ",(0,i.jsx)(n.a,{href:"https://minecraft.fandom.com/wiki/Argument_types#minecraft:entity",children:"player"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Specifies the player to perform the command on."}),"\n",(0,i.jsx)(n.li,{children:"Must be a player name, a target selector, or a UUID."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<amount>"}),": ",(0,i.jsx)(n.a,{href:"https://minecraft.fandom.com/wiki/Argument_types#int",children:"int"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Specifies the quantity of slots or items."}),"\n",(0,i.jsx)(n.li,{children:"Must be a whole number greater than or equal to 1."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<index>"}),": ",(0,i.jsx)(n.a,{href:"https://minecraft.fandom.com/wiki/Argument_types#int",children:"int"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Specifies the index within the slot type."}),"\n",(0,i.jsx)(n.li,{children:"Must be a whole number greater than or equal to 0."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<slotId>"}),": ",(0,i.jsx)(n.a,{href:"slot-register",children:"slot_identifier"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Specifies a slot type."}),"\n",(0,i.jsx)(n.li,{children:"Must be an identifier of a registered slot type."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To add 3 ",(0,i.jsx)(n.code,{children:'"ring"'})," slots to a player:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"curios add ring Player123 1"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To place a ",(0,i.jsx)(n.code,{children:'"minecraft:totem_of_undying"'})," item in the first ",(0,i.jsx)(n.code,{children:'"charm"'})," slot found on a player:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"curios replace charm 0 Player123 with minecraft:totem_of_undying 1"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"entity-selector-options",children:"Entity Selector Options"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Curios has a custom entity selector option to use with commands that target entities, such as @a or @p."}),"\n",(0,i.jsxs)(n.p,{children:["The option starts with curios= and takes in a single ",(0,i.jsx)(n.strong,{children:"CompoundTag"})," as an argument. A blank tag would be ",(0,i.jsx)(n.code,{children:"curios={}"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"tag-format",children:"Tag Format"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"CompoundTag"})," has the following fields:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"item"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"required:"})," false"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:"CompoundTag"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"description:"})," Denotes an item to match in the target's curios inventory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'curios={item:{id:"minecraft:glass_bottle"}}'})}),"\n",(0,i.jsxs)(n.li,{children:["This will search for a ",(0,i.jsx)(n.code,{children:"minecraft:glass_bottle"})," in the target's curios inventory."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"slot"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"required:"})," false"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"type:"})," string[]"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"description:"})," Denotes a slot type to search in the target's curios inventory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'curios={slot:["ring"]}'})}),"\n",(0,i.jsxs)(n.li,{children:["This will search for ",(0,i.jsx)(n.code,{children:'"ring"'})," slots in the target's curios inventory."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"index"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"required:"})," false"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"type:"})," int[min, max]"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"description:"})," Denotes the indices in slots to search in the target's curios inventory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"curios={index:[0,1]}"})}),"\n",(0,i.jsx)(n.li,{children:"This will search for the first index of each slot type in the target's curios inventory."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"exclusive"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"required:"})," false"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"type:"})," boolean"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"description:"})," Denotes whether the selector is searching for only one match."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'curios={slot:["ring"],exclusive:true}'})}),"\n",(0,i.jsxs)(n.li,{children:["This will search for ",(0,i.jsx)(n.code,{children:'"ring"'})," slots in the target's curios inventory but will not return a match if any other slot type is found in the inventory as well."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"inverting",children:"Inverting"}),"\n",(0,i.jsxs)(n.p,{children:["The selector option also supports inverting. Placing a ",(0,i.jsx)(n.code,{children:"!"})," before the ",(0,i.jsx)(n.strong,{children:"CompoundTag"})," will invert the search.\nFor example, ",(0,i.jsx)(n.code,{children:'curios=!{slot:["ring"]}'})," will search for targets that do ",(0,i.jsx)(n.em,{children:"not"})," have ",(0,i.jsx)(n.code,{children:'"ring"'})," slots in their curios inventory."]}),"\n",(0,i.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To kill all players who have a ",(0,i.jsx)(n.code,{children:"minecraft:glass_bottle"})," in a ",(0,i.jsx)(n.code,{children:'"ring"'})," slot of the curios inventory:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'/kill @a[curios={item:{id:"minecraft:glass_bottle"},slot:["ring"]}]'})}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var i=s(7294);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);