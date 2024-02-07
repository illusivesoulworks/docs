"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[844],{9938:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var t=n(5893),r=n(1151);const d={sidebar_position:4},s="Data Generation",o={id:"curios/Developing with Curios/data-generation",title:"Data Generation",description:"A tutorial on how to programmatically generate the Curios data files.",source:"@site/docs/curios/Developing with Curios/data-generation.md",sourceDirName:"curios/Developing with Curios",slug:"/curios/Developing with Curios/data-generation",permalink:"/curios/Developing with Curios/data-generation",draft:!1,unlisted:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/docs/curios/Developing with Curios/data-generation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Slot Modifiers",permalink:"/curios/Developing with Curios/slot-modifiers"},next:{title:"Rendering a Curio",permalink:"/curios/Developing with Curios/rendering-registry"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Slot Generation",id:"slot-generation",level:2},{value:"Example",id:"example",level:3},{value:"Entities Generation",id:"entities-generation",level:2},{value:"Example",id:"example-1",level:3},{value:"Criterion Triggers",id:"criterion-triggers",level:2},{value:"Example",id:"example-2",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"data-generation",children:"Data Generation"}),"\n",(0,t.jsx)(i.p,{children:"A tutorial on how to programmatically generate the Curios data files."}),"\n",(0,t.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(i.p,{children:["The documentation on this page was written with the assumption that readers are already familiar with basic data\ngeneration and its usages. If you are not, please prime yourself by learning about data generation on either ",(0,t.jsx)(i.a,{href:"https://forge.gemwire.uk/wiki/Datageneration",children:"Forge"}),"\nor ",(0,t.jsx)(i.a,{href:"https://docs.neoforged.net/docs/datagen/",children:"NeoForge"})," before proceeding further."]}),"\n",(0,t.jsx)(i.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(i.p,{children:["Slots and entities can be generated for a mod by constructing a new implementation of the\n",(0,t.jsx)(i.code,{children:"top.theillusivec4.curios.api.CuriosDataProvider"})," class, making sure to override the ",(0,t.jsx)(i.code,{children:"generate"})," method to run the\ngeneration code."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"public class CuriosTestProvider extends CuriosDataProvider {\n\n  public CuriosTestProvider(String modId, PackOutput output,\n                            ExistingFileHelper fileHelper,\n                            CompletableFuture<HolderLookup.Provider> registries) {\n    super(modId, output, fileHelper, registries);\n  }\n\n  @Override\n  public void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) {\n    // Generation code here\n  }\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["A new instance of the implementation should be constructed in the ",(0,t.jsx)(i.code,{children:"GatherDataEvent"})," event on the MOD event bus."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'// On the MOD event bus\n@SubscribeEvent\npublic void gatherData(GatherDataEvent event) {\n    event.getGenerator().addProvider(\n        // Tell generator to run only when server data are generating\n        event.includeServer(),\n        new CuriosTestProvider(\n            "mod_id",\n            event.getGenerator().getPackOutput(),\n            event.getExistingFileHelper(),\n            event.getLookupProvider()\n        )\n    );\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"slot-generation",children:"Slot Generation"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"CuriosDataProvider"})," has a ",(0,t.jsx)(i.code,{children:"createSlot"})," method to facilitate easy data generation of slot types, by taking in an initial\n",(0,t.jsx)(i.code,{children:"String"})," identifier/file name and allowing developers to chain additional parameters as needed."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'@Override\npublic void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) {\n    this.createSlot("test_slot"); // Create a slot with the identifier and file name "test_slot"\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Additional parameters can be added by calling methods on the ",(0,t.jsx)(i.code,{children:"ISlotData"})," returned by the ",(0,t.jsx)(i.code,{children:"createSlot"})," method call. Most\nof these parameters are linked to fields for ",(0,t.jsx)(i.code,{children:"ISlotType"}),", more information on how these fields are constructed and what\nthey represent can be found on the page for ",(0,t.jsx)(i.a,{href:"/curios/slot-register#-syntax",children:"slot registration"}),"."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Method"}),(0,t.jsx)(i.th,{children:"Parameters"}),(0,t.jsx)(i.th,{children:"Field"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"replace"})}),(0,t.jsx)(i.td,{children:"boolean"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"replace"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"size"})}),(0,t.jsx)(i.td,{children:"integer"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"size"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"operation"})}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"operation"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"order"})}),(0,t.jsx)(i.td,{children:"integer"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"order"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"icon"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ResourceLocation"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"icon"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"addCosmetic"})}),(0,t.jsx)(i.td,{children:"boolean"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"add_cosmetic"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"useNativeGui"})}),(0,t.jsx)(i.td,{children:"boolean"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"use_native_gui"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"renderToggle"})}),(0,t.jsx)(i.td,{children:"boolean"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"render_toggle"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"dropRule"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ICurio$DropRule"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"drop_rule"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"addCondition"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ICondition"})}),(0,t.jsx)(i.td,{children:"N/A"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(i.p,{children:["The following example creates a slot file with the file name and identifier ",(0,t.jsx)(i.code,{children:"test_slot"}),", gives it a size of ",(0,t.jsx)(i.code,{children:"4"}),", sets the\ndrop rule to ",(0,t.jsx)(i.code,{children:'"ALWAYS_KEEP"'})," so that it is never dropped upon death, and gives it a cosmetic slot by setting ",(0,t.jsx)(i.code,{children:"addCosmetic"}),"\nto ",(0,t.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'@Override\npublic void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) {\n    this.createSlot("test_slot")\n        .size(4)\n        .dropRule(ICurio.DropRule.ALWAYS_KEEP)\n        .addCosmetic(true);\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"entities-generation",children:"Entities Generation"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"CuriosDataProvider"})," has a ",(0,t.jsx)(i.code,{children:"createEntities"})," method to facilitate easy data generation of adding slot types to entities,\nby taking in an initial ",(0,t.jsx)(i.code,{children:"String"})," file name and allowing developers to chain additional parameters as needed."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'@Override\npublic void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) {\n    this.createEntities("test_entities"); // Create an entities file with the name "test_entities"\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Additional parameters can be added by calling methods on the ",(0,t.jsx)(i.code,{children:"IEntitiesData"})," returned by the ",(0,t.jsx)(i.code,{children:"createEntities"})," method\ncall. All of these parameters correspond to JSON fields, more information on these can be found on the page for\n",(0,t.jsx)(i.a,{href:"/curios/entity-register#-syntax",children:"entity registration"}),"."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Method"}),(0,t.jsx)(i.th,{children:"Parameters"}),(0,t.jsx)(i.th,{children:"Field"}),(0,t.jsx)(i.th,{children:"Notes"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"replace"})}),(0,t.jsx)(i.td,{children:"boolean"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"replace"})}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"addPlayer"})}),(0,t.jsx)(i.td,{children:"N/A"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"entities"})}),(0,t.jsxs)(i.td,{children:["Adds ",(0,t.jsx)(i.code,{children:'"minecraft:player"'})," to the ",(0,t.jsx)(i.code,{children:"entities"})," array"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"addEntities"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"EntityType<?>[]"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"entities"})}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"addSlots"})}),(0,t.jsx)(i.td,{children:"string[]"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"slots"})}),(0,t.jsxs)(i.td,{children:["Adds each string as a slot identifier to the ",(0,t.jsx)(i.code,{children:"slots"})," array"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"addCondition"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ICondition"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"conditions"})}),(0,t.jsx)(i.td,{})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(i.p,{children:["The following example creates an entities file with the file name ",(0,t.jsx)(i.code,{children:"test_entities"}),", and assigns the ",(0,t.jsx)(i.code,{children:'"head"'}),", ",(0,t.jsx)(i.code,{children:'"ring"'}),",\nand ",(0,t.jsx)(i.code,{children:'"necklace"'})," slot types to the ",(0,t.jsx)(i.code,{children:'"minecraft:player"'})," and ",(0,t.jsx)(i.code,{children:'"minecraft:zombie"'})," entities."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'@Override\npublic void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) {\n    this.createEntities("test_entities")\n        .addPlayer()\n        .addEntities(EntityType.ZOMBIE)\n        .addSlots("head", "ring", "necklace");\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"criterion-triggers",children:"Criterion Triggers"}),"\n",(0,t.jsxs)(i.p,{children:["Curios provides several helper methods in the ",(0,t.jsx)(i.code,{children:"top.theillusivec4.curios.api.CuriosTriggers"})," class to generate data\nassociated with criterion triggers used for advancements and other similar files."]}),"\n",(0,t.jsxs)(i.p,{children:["Currently, the only triggers available are ",(0,t.jsx)(i.code,{children:"equip"})," and ",(0,t.jsx)(i.code,{children:"equipAtLocation"})," for triggering when a certain item is equipped\ninto a curio slot."]}),"\n",(0,t.jsx)(i.h3,{id:"example-2",children:"Example"}),"\n",(0,t.jsxs)(i.p,{children:["The following example will create an advancement file, ",(0,t.jsx)(i.code,{children:"curiostest/test"}),", that adds a criteration called ",(0,t.jsx)(i.code,{children:'"test"'}),", that\nis triggered when a ",(0,t.jsx)(i.code,{children:'"minecraft:diamond"'})," item is equipped in the Badlands biome."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'Advancement.Builder.advancement()\n    .addCriterion("test",\n        CuriosTriggers.equipAtLocation(\n            ItemPredicate.Builder.item().of(Items.DIAMOND),\n            LocationPredicate.Builder.location().setBiome(Biomes.BADLANDS)))\n    .save(saver, new ResourceLocation("curiostest", "test"), existingFileHelper);\n'})})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>s});var t=n(7294);const r={},d=t.createContext(r);function s(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);