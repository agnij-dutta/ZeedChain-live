(()=>{var e={};e.id=901,e.ids=[901],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},77737:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),r(23045),r(11506),r(35866);var a=r(23191),n=r(88716),o=r(37922),s=r.n(o),i=r(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["ai-agent",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,23045)),"/home/agnij/Desktop/ZeedChain-live/app/ai-agent/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,11506)),"/home/agnij/Desktop/ZeedChain-live/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/agnij/Desktop/ZeedChain-live/app/ai-agent/page.tsx"],u="/ai-agent/page",m={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/ai-agent/page",pathname:"/ai-agent",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},90471:(e,t,r)=>{Promise.resolve().then(r.bind(r,42454))},85579:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},37491:()=>{},42454:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(10326),n=r(17577),o=r(62881);let s=(0,o.Z)("CirclePause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]),i=(0,o.Z)("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]),l=(0,o.Z)("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);function c(){let[e,t]=(0,n.useState)([{role:"assistant",content:"Hi, I'm your AI assistant. How can I help you today?",timestamp:new Date().toLocaleTimeString()}]),[r,o]=(0,n.useState)(""),[c,d]=(0,n.useState)(!1),[u,m]=(0,n.useState)(!1),h=(0,n.useRef)(null),x=async a=>{if(a.preventDefault(),!r.trim())return;let n={role:"user",content:r,timestamp:new Date().toLocaleTimeString()};t(e=>[...e,n]),o(""),d(!0);try{let a=await fetch("/api/ai-advisor",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:r,history:e})});if(!a.ok)throw Error("API request failed");let n=await a.json(),o={role:"assistant",content:n.response,timestamp:new Date().toLocaleTimeString()};t(e=>[...e,o])}catch(r){console.error("Error:",r);let e={role:"assistant",content:"Sorry, I encountered an error while processing your request. Please try again later.",timestamp:new Date().toLocaleTimeString(),isError:!0};t(t=>[...t,e])}finally{d(!1)}};return a.jsx("div",{className:"flex min-h-screen bg-gray-50 dark:bg-gray-900",children:(0,a.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,a.jsxs)("header",{className:"flex items-center justify-between p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsxs)(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"h-10 w-10",children:[a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{src:"https://api.placeholder.com/400/320",alt:"Jordan Belfort"}),a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{children:"JB"})]}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"font-medium text-gray-900 dark:text-gray-100",children:"WallStreetAI"}),a.jsx("p",{className:"text-xs text-green-500",children:"Online"})]})]}),(0,a.jsxs)("div",{className:"flex gap-2",children:[a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{variant:"outline",size:"sm",children:"Share"}),a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{variant:"outline",size:"sm",children:"Settings"})]})]}),a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/scroll-area'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"flex-1 p-4 bg-gray-50 dark:bg-gray-900",children:(0,a.jsxs)("div",{className:"max-w-3xl mx-auto space-y-4",children:[e.map((e,t)=>(0,a.jsxs)("div",{className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("flex items-start gap-3","user"===e.role?"justify-end":"justify-start"),children:["assistant"===e.role&&(0,a.jsxs)(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"h-8 w-8 mt-1",children:[a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{src:"https://api.placeholder.com/400/320",alt:"Jordan Belfort"}),a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{children:"JB"})]}),a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/card'");throw e.code="MODULE_NOT_FOUND",e}()),{className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("max-w-[80%]","user"===e.role?"bg-blue-500 text-white border-blue-600":e.isError?"bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800":"bg-white dark:bg-gray-800"),children:(0,a.jsxs)(Object(function(){var e=Error("Cannot find module '@/components/ui/card'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"p-3",children:[a.jsx("p",{className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("text-sm","user"===e.role?"text-white":e.isError?"text-red-700 dark:text-red-300":"text-gray-700 dark:text-gray-300"),children:e.content}),a.jsx("p",{className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("text-xs mt-1","user"===e.role?"text-blue-100":e.isError?"text-red-400 dark:text-red-400":"text-gray-400"),children:e.timestamp})]})}),"user"===e.role&&(0,a.jsxs)(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"h-8 w-8 mt-1",children:[a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{src:"/user-avatar.png",alt:"You"}),a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{children:"U"})]})]},t)),c&&(0,a.jsxs)("div",{className:"flex items-start gap-3",children:[(0,a.jsxs)(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"h-8 w-8 mt-1",children:[a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{src:"https://api.placeholder.com/400/320",alt:"Jordan Belfort"}),a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}()),{children:"JB"})]}),a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/card'");throw e.code="MODULE_NOT_FOUND",e}()),{children:(0,a.jsxs)(Object(function(){var e=Error("Cannot find module '@/components/ui/card'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"p-3",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)("div",{className:"flex space-x-1",children:[a.jsx("div",{className:"h-2 w-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),a.jsx("div",{className:"h-2 w-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),a.jsx("div",{className:"h-2 w-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]}),a.jsx("span",{className:"text-sm text-gray-500",children:"Generating response"})]}),(0,a.jsxs)("div",{className:"mt-3 space-y-2",children:[a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/skeleton'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"h-4 w-full"}),a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/skeleton'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"h-4 w-3/4"})]})]})})]}),a.jsx("div",{ref:h})]})}),a.jsx("footer",{className:"p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700",children:(0,a.jsxs)("form",{onSubmit:x,className:"max-w-3xl mx-auto flex flex-col",children:[(0,a.jsxs)("div",{className:"relative",children:[a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/textarea'");throw e.code="MODULE_NOT_FOUND",e}()),{value:r,onChange:e=>o(e.target.value),placeholder:"Type your message...",className:"min-h-20 resize-none pr-14 bg-gray-50 dark:bg-gray-900",disabled:c,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),x(e))}}),(0,a.jsxs)("div",{className:"absolute right-3 bottom-3 flex items-center gap-2",children:[a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{type:"button",size:"icon",variant:"ghost",onClick:()=>{m(!u)},className:u?"text-red-500":"text-gray-500",children:u?a.jsx(s,{}):a.jsx(i,{})}),a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{type:"submit",size:"icon",disabled:!r.trim()||c,className:"bg-blue-500 hover:bg-blue-600 text-white",children:a.jsx(l,{className:"h-4 w-4"})})]})]}),a.jsx("div",{className:"mt-2 text-xs text-gray-500 dark:text-gray-400 text-center",children:"WallStreetAI may produce inaccurate information about investments and markets. Always verify with professional advice."})]})})]})})}(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/components/ui/card'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/components/ui/avatar'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/components/ui/scroll-area'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/components/ui/skeleton'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/components/ui/textarea'");throw e.code="MODULE_NOT_FOUND",e}()},62881:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(17577);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,a.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:l,iconNode:c,...d},u)=>(0,a.createElement)("svg",{ref:u,...s,width:t,height:t,stroke:e,strokeWidth:n?24*Number(r)/Number(t):r,className:o("lucide",i),...d},[...c.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let r=(0,a.forwardRef)(({className:r,...s},l)=>(0,a.createElement)(i,{ref:l,iconNode:t,className:o(`lucide-${n(e)}`,r),...s}));return r.displayName=`${e}`,r}},23045:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(68570).createProxy)(String.raw`/home/agnij/Desktop/ZeedChain-live/app/ai-agent/page.tsx#default`)},11506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>s});var a=r(19510),n=r(85384),o=r.n(n);r(67272),function(){var e=Error("Cannot find module '@/components/ui/navbar'");throw e.code="MODULE_NOT_FOUND",e}();let s={title:"ZeedChain - Startup Equity NFT Platform",description:"Decentralized platform for startup equity NFTs"};function i({children:e}){return(0,a.jsxs)("html",{lang:"en",children:[(0,a.jsxs)("head",{children:[a.jsx("title",{children:"ZeedChain - Startup Equity NFT Platform"}),a.jsx("meta",{name:"description",content:"Decentralized platform for startup equity NFTs"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),a.jsx("body",{className:`${o().className} dark`,children:a.jsx("div",{className:"relative flex min-h-svh flex-col bg-background",children:(0,a.jsxs)("div",{"data-wrapper":"",className:"border-grid flex flex-1 flex-col",children:[a.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/navbar'");throw e.code="MODULE_NOT_FOUND",e}()),{}),a.jsx("main",{className:"flex flex-1 flex-col",children:e})]})})})]})}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var a=r(66621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,892,621],()=>r(77737));module.exports=a})();