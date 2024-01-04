"use strict";(self.webpackChunkillusivesoulworks_docs=self.webpackChunkillusivesoulworks_docs||[]).push([[512],{8407:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var t=n(5893),s=n(1151);const d={sidebar_position:1},r="ICurioRenderer",c={id:"curios/Developing with Curios/APIs/renderer-interface",title:"ICurioRenderer",description:"Methods",source:"@site/docs/curios/Developing with Curios/APIs/renderer-interface.md",sourceDirName:"curios/Developing with Curios/APIs",slug:"/curios/Developing with Curios/APIs/renderer-interface",permalink:"/curios/Developing with Curios/APIs/renderer-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/illusivesoulworks/docs/edit/main/docs/curios/Developing with Curios/APIs/renderer-interface.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Rendering a Curio",permalink:"/curios/Developing with Curios/rendering-registry"},next:{title:"Diet",permalink:"/category/diet"}},l={},o=[{value:"Methods",id:"methods",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>render()</code>",id:"render",level:3},{value:"<code>static translateIfSneaking()</code>",id:"static-translateifsneaking",level:3},{value:"<code>static rotateIfSneaking()</code>",id:"static-rotateifsneaking",level:3},{value:"<code>static followHeadRotations()</code>",id:"static-followheadrotations",level:3},{value:"<code>static followBodyRotations()</code>",id:"static-followbodyrotations",level:3}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"icuriorenderer",children:(0,t.jsx)(i.code,{children:"ICurioRenderer"})}),"\n",(0,t.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#reference",children:"Reference"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#render",children:"render()"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#static-translateifsneaking",children:"static translateIfSneaking()"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#static-rotateifsneaking",children:"static rotateIfSneaking()"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#static-followheadrotations",children:"static followHeadRotations()"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#static-followbodyrotations",children:"static followBodyRotations()"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(i.h3,{id:"render",children:(0,t.jsx)(i.code,{children:"render()"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.p,{children:"Runs the rendering code when an associated item is equipped in a curio slot and the visibility of the rendering is\nenabled. An equipped cosmetic item will override the rendering of its related functional item."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"stack"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ItemStack"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"ItemStack"})," being rendered"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"slotContext"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"SlotContext"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"SlotContext"})," for the slot with the ",(0,t.jsx)(i.code,{children:"ItemStack"})," being rendered"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"poseStack"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"PoseStack"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"PoseStack"})," passed from the parent ",(0,t.jsx)(i.code,{children:"RenderLayer"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"renderLayerParent"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"RenderLayerParent"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"RenderLayerParent"})," passed from the parent ",(0,t.jsx)(i.code,{children:"RenderLayer"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"light"})}),(0,t.jsx)(i.td,{children:"integer"}),(0,t.jsx)(i.td,{children:"Light value"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"limbSwing"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"Limb swing value"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"limbSwingAmount"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"Limb swing amount value"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"partialTicks"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"Partial ticks value"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ageInTicks"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"Age in ticks value"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"netHeadYaw"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"Net head yaw value"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"headPitch"})}),(0,t.jsx)(i.td,{children:"float"}),(0,t.jsx)(i.td,{children:"Head pitch value"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"static-translateifsneaking",children:(0,t.jsx)(i.code,{children:"static translateIfSneaking()"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(i.p,{children:["Applies a translation to the given ",(0,t.jsx)(i.code,{children:"PoseStack"})," if the given ",(0,t.jsx)(i.code,{children:"LivingEntity"})," is crouching. This is called to have the\nrender appropriately adjust its positioning up or down based on the crouching status of the entity."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"poseStack"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"PoseStack"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"PoseStack"})," passed from the parent ",(0,t.jsx)(i.code,{children:"RenderLayer"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"livingEntity"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"LivingEntity"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"LivingEntity"})," to check ",(0,t.jsx)(i.code,{children:"isCrouching()"})]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"static-rotateifsneaking",children:(0,t.jsx)(i.code,{children:"static rotateIfSneaking()"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(i.p,{children:["Applies a rotation to the given ",(0,t.jsx)(i.code,{children:"PoseStack"})," if the given ",(0,t.jsx)(i.code,{children:"LivingEntity"})," is crouching. This is called to have the\nrender appropriately adjust its rotations based on the crouching status of the entity. Specifically, these rotations\nare based on the body/torso rotations of the entity."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"poseStack"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"PoseStack"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"PoseStack"})," passed from the parent ",(0,t.jsx)(i.code,{children:"RenderLayer"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"livingEntity"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"LivingEntity"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"LivingEntity"})," to check ",(0,t.jsx)(i.code,{children:"isCrouching()"})," and rotate around"]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"static-followheadrotations",children:(0,t.jsx)(i.code,{children:"static followHeadRotations()"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(i.p,{children:["Applies rotations to the given ",(0,t.jsx)(i.code,{children:"ModelPart"}),"s based on the given ",(0,t.jsx)(i.code,{children:"LivingEntity"})," and its head rotations. This is called to\nrender the model parts in alignment with the entity's head. This does nothing if the entity's renderer does not\nimplement ",(0,t.jsx)(i.code,{children:"LivingEntityRenderer"})," or if the model does not have a head inherited from the ",(0,t.jsx)(i.code,{children:"HumanoidModel"})," class."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"livingEntity"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"LivingEntity"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"LivingEntity"})," to align the rotations around"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"modelParts"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ModelPart..."})}),(0,t.jsx)(i.td,{children:"List of model parts to align to the head movement"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"static-followbodyrotations",children:(0,t.jsx)(i.code,{children:"static followBodyRotations()"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(i.p,{children:["Applies rotations to the given ",(0,t.jsx)(i.code,{children:"HumanoidModel"}),"s based on the given ",(0,t.jsx)(i.code,{children:"LivingEntity"})," and its rotations. This is called to\nrender the model parts in alignment with the entity's movements, such as their leg and arm movements when walking or\ninteracting with objects."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"livingEntity"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"LivingEntity"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"LivingEntity"})," to align the rotations around"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"models"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"HumanoidModel..."})}),(0,t.jsx)(i.td,{children:"List of model parts to align to the body movement"})]})]})]})]})}function a(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>r});var t=n(7294);const s={},d=t.createContext(s);function r(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);