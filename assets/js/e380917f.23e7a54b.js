"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[335],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>u});var o=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=o.createContext({}),p=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},m=function(n){var e=p(n.components);return o.createElement(s.Provider,{value:e},n.children)},c="mdxType",h={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,m=l(n,["components","mdxType","originalType","parentName"]),c=p(t),f=i,u=c["".concat(s,".").concat(f)]||c[f]||h[f]||a;return t?o.createElement(u,r(r({ref:e},m),{},{components:t})):o.createElement(u,r({ref:e},m))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,r=new Array(a);r[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[c]="string"==typeof n?n:i,r[1]=l;for(var p=2;p<a;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},415:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(7462),i=(t(7294),t(3905));const a={sidebar_position:5},r="Loot",l={unversionedId:"champions/loottable",id:"version-1.18.x/champions/loottable",title:"Loot",description:"All champions get their drops from the Champions loot table, which is enabled when the lootSource configuration value in the",source:"@site/versioned_docs/version-1.18.x/champions/loottable.md",sourceDirName:"champions",slug:"/champions/loottable",permalink:"/1.18.x/champions/loottable",draft:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/versioned_docs/version-1.18.x/champions/loottable.md",tags:[],version:"1.18.x",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Champions",permalink:"/1.18.x/category/champions"},next:{title:"Commands",permalink:"/1.18.x/champions/commands"}},s={},p=[{value:"Default Loot Table",id:"default-loot-table",level:2},{value:"Loot Condition",id:"loot-condition",level:2},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],m={toc:p},c="wrapper";function h(n){let{components:e,...t}=n;return(0,i.kt)(c,(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loot"},"Loot"),(0,i.kt)("p",null,"All champions get their drops from the Champions loot table, which is enabled when the ",(0,i.kt)("inlineCode",{parentName:"p"},"lootSource")," configuration value in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"champions-server.toml")," configuration file is set to either ",(0,i.kt)("inlineCode",{parentName:"p"},'"LOOT_TABLE"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"CONFIG_AND_LOOT_TABLE"'),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This page does not go over how to set up loot tables in general, it's assumed that the reader has basic knowledge about how to\ncreate and configure loot tables. If this is not the case, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Loot_table"},"this page"),"\nfirst for an introduction.")),(0,i.kt)("h2",{id:"default-loot-table"},"Default Loot Table"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"By default, Champions provides the following loot table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="champion_loot.json"',title:'"champion_loot.json"'},'{\n  "pools": [\n    {\n      "name": "tier#1",\n      "rolls": 1,\n      "entries": [\n        {\n          "type": "item",\n          "name": "minecraft:book",\n          "weight": 1,\n          "conditions": [\n            {\n              "condition": "champions:champion_properties",\n              "entity": "this"\n            },\n            {\n              "condition": "killed_by_player"\n            }\n          ],\n          "functions": [\n            {\n              "function": "enchant_randomly"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "name": "tier#2",\n      "rolls": 1,\n      "entries": [\n        {\n          "type": "item",\n          "name": "minecraft:book",\n          "weight": 1,\n          "conditions": [\n            {\n              "condition": "champions:champion_properties",\n              "entity": "this",\n              "tier": {\n                "min": 2\n              }\n            },\n            {\n              "condition": "killed_by_player"\n            }\n          ],\n          "functions": [\n            {\n              "function": "enchant_randomly"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "name": "tier#3",\n      "rolls": 1,\n      "entries": [\n        {\n          "type": "item",\n          "name": "minecraft:book",\n          "weight": 1,\n          "conditions": [\n            {\n              "condition": "champions:champion_properties",\n              "entity": "this",\n              "tier": {\n                "min": 3\n              }\n            },\n            {\n              "condition": "killed_by_player"\n            }\n          ],\n          "functions": [\n            {\n              "function": "enchant_randomly"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "name": "tier#4",\n      "rolls": 1,\n      "entries": [\n        {\n          "type": "item",\n          "name": "minecraft:book",\n          "weight": 1,\n          "conditions": [\n            {\n              "condition": "champions:champion_properties",\n              "entity": "this",\n              "tier": {\n                "min": 4\n              }\n            },\n            {\n              "condition": "killed_by_player"\n            }\n          ],\n          "functions": [\n            {\n              "function": "enchant_randomly"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"The result is that killing a champion drops a book with a random enchantment, dropping an additional book for each higher rank."),(0,i.kt)("h2",{id:"loot-condition"},"Loot Condition"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In order to specify loot drops for champions, Champions provides a new loot condition: ",(0,i.kt)("inlineCode",{parentName:"p"},'"champions:champion_properties"'),"."),(0,i.kt)("p",null,"With this, loot tables can provide conditions for loot drops and specify various properties from Champions such as champion\nrank or affixes that need to be present."),(0,i.kt)("p",null,"The condition can be added as part of a loot entry's ",(0,i.kt)("inlineCode",{parentName:"p"},'"conditions"')," array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"conditions": [\n  {\n    "condition": "champions:champion_properties",\n    "entity": "this"\n  }\n]\n')),(0,i.kt)("p",null,"The condition, without any other parameters, will pass for any champion entity."),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("p",null,"With additional fields, conditions can be further narrowed down depending on the specific rank or affixes on the champion entity."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tier"),": The tier of the rank of the champion entity. Can be an integer or an object with the following structure:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min"),": The minimum tier of the rank of the champion entity. Must be equal to or lower than ",(0,i.kt)("strong",{parentName:"li"},"max"),". If absent, there is no minimum."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max"),": The maximum tier of the rank of the champion entity. Must be equal to or higher than ",(0,i.kt)("strong",{parentName:"li"},"min"),". If absent, there is no maximum."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"affixes"),": The affixes on the champion entity. Can be a list of affix identifiers as strings or an object with the following structure:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"values"),": A list of affix identifiers for affixes on the champion entity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"matches"),": The number of affixes from the ",(0,i.kt)("strong",{parentName:"li"},"values")," list that need to be present. If absent, only one of the affixes from the list need to be present to pass. Can be an integer or an object with the following structure:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min"),": The minimum number of affixes that need to match. If absent, there is no minimum."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max"),": The maximum number of affixes that need to match. If absent, there is no maximum."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"count"),": The number of affixes on the champion entity. If absent, any number of affixes will pass. Can be an integer or an object with the following structure:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min"),": The minimum number of affixes that need to be present. If absent, there is no minimum."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max"),": The maximum number of affixes that need to be present. If absent, there is no maximum.")))))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("strong",{parentName:"p"},"entity")," field is the same as the one used for vanilla loot contexts. For further information, please refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},'"entity"')," section\nof ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Loot_table#Loot_context_types"},"this page"),".")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"A condition that will pass if the champion entity is tier 3 or above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"conditions": [\n  {\n    "condition": "champions:champion_properties",\n    "entity": "this",\n    "tier": {\n      "min": 3\n    }\n  }\n]\n')),(0,i.kt)("p",null,"A condition that will pass if the champion entity is tier 2 and has either the Enkindling affix or the Hasty affix:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"conditions": [\n  {\n    "condition": "champions:champion_properties",\n    "entity": "this",\n    "tier": 2,\n    "affixes": ["enkindling", "hasty"]\n  }\n]\n')),(0,i.kt)("p",null,"A condition that will pass if the champion entity is between tier 1 and 3, and has the Arctic affix, and has at least 3 total affixes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"conditions": [\n  {\n    "condition": "champions:champion_properties",\n    "entity": "this",\n    "tier": {\n      "min": 1,\n      "max": 3\n    },\n    "affixes": {\n      "values": ["arctic"],\n      "count": {\n        "min": 3\n      }\n    }\n  }\n]\n')))}h.isMDXComponent=!0}}]);