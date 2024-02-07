"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[268],{629:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=i(5893),r=i(1151),o=i(4866),a=i(5162);const s={sidebar_position:2},l="Creating a Curio",c={id:"curios/Developing with Curios/curio-creation",title:"Creating a Curio",description:"A tutorial on how to attach curio capabilities to your items.",source:"@site/docs/curios/Developing with Curios/curio-creation.mdx",sourceDirName:"curios/Developing with Curios",slug:"/curios/Developing with Curios/curio-creation",permalink:"/curios/Developing with Curios/curio-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/docs/curios/Developing with Curios/curio-creation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting Up the Development Environment",permalink:"/curios/Developing with Curios/getting-started"},next:{title:"Slot Modifiers",permalink:"/curios/Developing with Curios/slot-modifiers"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Attaching an <code>ICurio</code> capability",id:"attaching-an-icurio-capability",level:2},{value:"Implementing the <code>ICurioItem</code> interface",id:"implementing-the-icurioitem-interface",level:2},{value:"Registering an <code>ICurioItem</code> implementation",id:"registering-an-icurioitem-implementation",level:2},{value:"Priority",id:"priority",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"creating-a-curio",children:"Creating a Curio"}),"\n",(0,n.jsx)(t.p,{children:"A tutorial on how to attach curio capabilities to your items."}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Curios comes with interfaces that you can attach to your items in order to define certain behaviors for those items when\ninteracting with curios slots. This includes events such as ticking while in a curio slot or triggering certain actions\nwhen equipped or unequipped into a curio slot."}),"\n",(0,n.jsxs)(t.p,{children:["There are three main ways to implement the capability on your item: directly attaching an ",(0,n.jsx)(t.code,{children:"ICurio"})," implementation as a\ncapability, extending the ",(0,n.jsx)(t.code,{children:"ICurioItem"})," interface on your item, or registering an ",(0,n.jsx)(t.code,{children:"ICurioItem"})," implementation to an item."]}),"\n",(0,n.jsxs)(t.p,{children:["Only ",(0,n.jsx)(t.strong,{children:"one"})," of these methods needs to be implemented for the curio item to work."]}),"\n",(0,n.jsxs)(t.h2,{id:"attaching-an-icurio-capability",children:["Attaching an ",(0,n.jsx)(t.code,{children:"ICurio"})," capability"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(o.Z,{groupId:"modloader",children:[(0,n.jsxs)(a.Z,{value:"forge",label:"Forge",default:!0,children:[(0,n.jsx)(t.p,{children:"This is recommended for mods that are Forge-oriented, due to the use of capabilities, and want to attach the\ncapability optionally to their own items or another mod's items."}),(0,n.jsxs)(t.p,{children:["To attach the capability to your own items, override the ",(0,n.jsx)(t.code,{children:"IForgeItem#initCapabilities"})," method:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"@Override\npublic ICapabilityProvider initCapabilities(ItemStack stack, CompoundTag unused) {\n    return CuriosApi.createCurioProvider(new ICurio() {\n    \n        @Override\n        public ItemStack getStack() {\n          return stack;\n        }\n\n        @Override\n        public void curioTick(SlotContext slotContext) {\n          // ticking logic here\n        }\n    });\n}\n"})}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ICurio"})," implementation in the example can be replaced or extended by your own custom implementation. The\nimplementation can also exist in a separate class altogether as long as the instantiation is still done in the\n",(0,n.jsx)(t.code,{children:"IForgeItem#initCapabilities"})," method."]}),(0,n.jsxs)(t.p,{children:["To attach the capability to any item, including vanilla's and other mods', subscribe to the\n",(0,n.jsx)(t.code,{children:"AttachCapabilitiesEvent<ItemStack>"})," and use its methods:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"@SubscribeEvent\npublic void attachCapabilities(AttachCapabilitiesEvent<ItemStack> evt) {\n    ItemStack stack = evt.getObject();\n    Item item = stack.getItem();\n    evt.addCapability(CuriosCapability.ID_ITEM, CuriosApi.createCurioProvider(new ICurio() {\n    \n        @Override\n        public ItemStack getStack() {\n          return stack;\n        }\n        \n        @Override\n        public void curioTick(SlotContext slotContext) {\n          // ticking logic here\n        }\n    }));\n}\n"})}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["You will need to pass in the ",(0,n.jsx)(t.code,{children:"ItemStack"})," from the ",(0,n.jsx)(t.code,{children:"IForgeItem#initCapabilities"})," argument or the\n",(0,n.jsx)(t.code,{children:"AttachCapabilitiesEvent#getObject"})," result to the return of ",(0,n.jsx)(t.code,{children:"ICurio#getStack"})," as shown in the example. This makes sure\nthat the implementation receives the correct ",(0,n.jsx)(t.code,{children:"ItemStack"})," for further curios logic. Technically, ",(0,n.jsx)(t.code,{children:"ICurio#getStack"})," can\nreturn any stack if proxies are needed, but the use-case for that is outside the scope of this documentation."]})})]}),(0,n.jsxs)(a.Z,{value:"neoforge-2",label:"NeoForge 1.20.3+",default:!0,children:[(0,n.jsx)(t.p,{children:"This is recommended for mods that are NeoForge-oriented, due to the use of capabilities, and want to attach the\ncapability optionally to their own items or another mod's items."}),(0,n.jsxs)(t.p,{children:["To attach the capability to any item, including vanilla's and other mods', subscribe to the\n",(0,n.jsx)(t.code,{children:"RegisterCapabilitiesEvent"})," on the mod event bus and use its methods:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'@Mod("examplemod")\npublic class ExampleMod {\n\n    public ExampleMod(IEventBus modEventBus) {\n        modEventBus.addListener(this::registerCapabilities);\n    }\n\n    public void registerCapabilities(final RegisterCapabilitiesEvent evt) {\n        evt.registerItem(\n            CuriosCapability.ITEM,\n            (stack, context) -> new ICurio() {\n\n                @Override\n                public ItemStack getStack() {\n                  return stack;\n                }\n\n                @Override\n                public void curioTick(SlotContext slotContext) {\n                  // ticking logic here\n            },\n            ExampleMod.ITEM);\n    }\n'})}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ICurio"})," implementation in the example can be replaced or extended by your own custom implementation."]}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["You will need to pass in the ",(0,n.jsx)(t.code,{children:"ItemStack"})," from the ",(0,n.jsx)(t.code,{children:"(stack, context)"})," lambda in the ",(0,n.jsx)(t.code,{children:"RegisterCapabilitiesEvent#registerItem"}),"\nmethod to the return of ",(0,n.jsx)(t.code,{children:"ICurio#getStack"})," as shown in the example. This makes sure that the implementation receives the\ncorrect ",(0,n.jsx)(t.code,{children:"ItemStack"})," for further curios logic. Technically, ",(0,n.jsx)(t.code,{children:"ICurio#getStack"})," can return any stack if proxies are needed,\nbut the use-case for that is outside the scope of this documentation."]})})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"implementing-the-icurioitem-interface",children:["Implementing the ",(0,n.jsx)(t.code,{children:"ICurioItem"})," interface"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"This is recommended for mods that want the simplest and most straightforward method, do not mind having Curios as a\nrequired dependency, and are only working with their own items."}),"\n",(0,n.jsxs)(t.p,{children:["To implement the ",(0,n.jsx)(t.code,{children:"ICurioItem"})," interface, simply implement it on your item class:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"public class CurioItem extends Item implements ICurioItem {\n\n  public CurioItem() {\n    super(new Item.Properties().stacksTo(1).defaultDurability(0));\n  }\n\n  @Override\n  public void curioTick(SlotContext slotContext, ItemStack stack) {\n    // ticking logic here\n  }\n}\n"})}),"\n",(0,n.jsxs)(t.h2,{id:"registering-an-icurioitem-implementation",children:["Registering an ",(0,n.jsx)(t.code,{children:"ICurioItem"})," implementation"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"This is recommended for multi-loader mods as a platform-agnostic method of registering Curios behavior to their own\nitems or another mod's items that can be loaded optionally."}),"\n",(0,n.jsxs)(t.p,{children:["To register an ",(0,n.jsx)(t.code,{children:"ICurioItem"})," implementation, first create the implementation:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"public class CurioItem implements ICurioItem {\n\n  @Override\n  public void curioTick(SlotContext slotContext, ItemStack stack) {\n    // ticking logic here\n  }\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["And then register it by using ",(0,n.jsx)(t.code,{children:"CurioApi#registerCurio"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"CuriosApi.registerCurio(CurioModItems.MY_ITEM, new CurioItem());\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Registration can occur at any time, but for simplicity can be called during the ",(0,n.jsx)(t.code,{children:"FMLCommonSetupEvent"})," phase during mod\nloading:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'@Mod("CurioMod")\npublic class CurioMod {\n\n  public CurioMod() {\n    final IEventBus eventBus = FMLJavaModLoadingContext.get().getModEventBus();\n    eventBus.addListener(this::setup);\n  }\n\n  private void setup(final FMLCommonSetupEvent evt) {\n    CuriosApi.registerCurio(CurioModItems.MY_ITEM, new CurioItem());\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"priority",children:"Priority"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"In situations where multiple implementations are registered to the same item, there a few things to take note of:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Only one implementation will be used on any one item, any other implementations found will be ignored."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ICurio"})," capabilities initialized through ",(0,n.jsx)(t.code,{children:"IForgeItem#initCapabilities"})," will always be prioritized and other\nimplementations will be ignored."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ICurioItem"})," implementations registered through ",(0,n.jsx)(t.code,{children:"CuriosApi#registerCurio"})," will be prioritized over ",(0,n.jsx)(t.code,{children:"ICurioItem"}),"\nimplementations directly on the item class."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,i)=>{i.d(t,{Z:()=>a});i(7294);var n=i(512);const r={tabItem:"tabItem_Ymn6"};var o=i(5893);function a(e){let{children:t,hidden:i,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,a),hidden:i,children:t})}},4866:(e,t,i)=>{i.d(t,{Z:()=>I});var n=i(7294),r=i(512),o=i(2466),a=i(6550),s=i(469),l=i(1980),c=i(7392),u=i(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:r}}=e;return{value:t,label:i,attributes:n,default:r}}))}(i);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function m(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:i}=e;const r=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:i=!1,groupId:r}=e,o=h(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,d]=p({queryString:i,groupId:r}),[g,b]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(i);return[r,(0,n.useCallback)((e=>{i&&o.set(e)}),[i,o])]}({groupId:r}),v=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=i(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(5893);function f(e){let{className:t,block:i,selectedValue:n,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,i=l.indexOf(t),r=s[i].value;r!==n&&(c(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},t),children:s.map((e=>{let{value:t,label:i,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function j(e){let{lazy:t,children:i,selectedValue:r}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function C(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(f,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function I(e){const t=(0,b.Z)();return(0,x.jsx)(C,{...e,children:d(e.children)},String(t))}},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>a});var n=i(7294);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);