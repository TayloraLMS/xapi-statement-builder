!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.xApiStatementBuilder=t():e.xApiStatementBuilder=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){function n(e,t,n,i){return{...e,[t]:{[n]:i}}}e.exports=e=>({actor(t){return e={...e,actor:t.getStatement()},this},when(t){return e={...e,timestamp:t},this},activityId(t){return e={...e,object:{...e.object,id:t}},this},activityName({value:t,locale:i="en-US"}){return e={...e,object:{...e.object,definition:{...n(e.object?e.object.definition:{},"name",i,t)}}},this},activityDescription({value:t,locale:i="en-US"}){return e={...e,object:{...e.object,definition:{...n(e.object?e.object.definition:{},"description",i,t)}}},this},authority({name:t,IFI:n}){return e={...e,authority:{objectType:"Agent",[n.key]:n.getStatement(),name:t}},this},getStatement:()=>({version:"1.0.3",...e})})},function(e,t,n){const i=n(10);e.exports={cmi5:{registered:{object:{objectType:"Activity",type:"http://adlnet.gov/expapi/activities/cmi.interaction"},verb:i.registered},completed:{object:{objectType:"Activity",type:"http://adlnet.gov/expapi/activities/cmi.interaction"},verb:i.completed}},link:{registered:{object:{objectType:"Activity",type:"http://adlnet.gov/expapi/activities/link"},verb:i.registered}}}},function(e,t,n){const i={IFI:n(3),cmi5:n(7)};e.exports=i},function(e,t,n){const i={account:n(4),mbox:n(5),opeinId:n(6)};e.exports=i},function(e,t){e.exports=({name:e,homePage:t})=>({key:"account",getStatement:()=>({name:e,homePage:t})})},function(e,t){e.exports=(e,t=!1)=>({key:t?"mbox_sha1sum":"mbox",getStatement:()=>e})},function(e,t){e.exports=e=>({key:"openid",getStatement:()=>e})},function(e,t,n){const i={actor:n(8),registered:n(9),completed:n(11)};e.exports=i},function(e,t){e.exports=e=>{if("account"!==e.key)throw new Error("Actor must be identified by account https://github.com/AICC/CMI-5_Spec_Current/blob/quartz/cmi5_spec.md#92-actor");let t={objectType:"Agent",[e.key]:e.getStatement()};return{key:"actor",name(e){return t={...t,name:e},this},getStatement:()=>t}}},function(e,t,n){const i=n(0),{cmi5:r}=n(1);e.exports=()=>{let e={...r.registered};return{...i(e)}}},function(e,t){e.exports={answered:{id:"http://adlnet.gov/expapi/verbs/answered",display:{"en-US":"answered"}},attempted:{id:"http://adlnet.gov/expapi/verbs/attempted",display:{"en-US":"attempted"}},attended:{id:"http://adlnet.gov/expapi/verbs/attended",display:{"en-US":"attended"}},commented:{id:"http://adlnet.gov/expapi/verbs/commented",display:{"en-US":"commented"}},completed:{id:"http://adlnet.gov/expapi/verbs/completed",display:{"en-US":"completed"}},failed:{id:"http://adlnet.gov/expapi/verbs/failed",display:{"en-US":"failed"}},initialized:{id:"http://adlnet.gov/expapi/verbs/initialized",display:{"en-US":"initialized"}},interacted:{id:"http://adlnet.gov/expapi/verbs/interacted",display:{"en-US":"interacted"}},launched:{id:"http://adlnet.gov/expapi/verbs/launched",display:{"en-US":"launched"}},mastered:{id:"http://adlnet.gov/expapi/verbs/mastered",display:{"en-US":"mastered"}},passed:{id:"http://adlnet.gov/expapi/verbs/passed",display:{"en-US":"passed"}},progressed:{id:"http://adlnet.gov/expapi/verbs/progressed",display:{"en-US":"progressed"}},registered:{id:"http://adlnet.gov/expapi/verbs/registered",display:{"en-US":"registered"}},resumed:{id:"http://adlnet.gov/expapi/verbs/resumed",display:{"en-US":"resumed"}},scored:{id:"http://adlnet.gov/expapi/verbs/scored",display:{"en-US":"scored"}},shared:{id:"http://adlnet.gov/expapi/verbs/shared",display:{"en-US":"shared"}},suspended:{id:"http://adlnet.gov/expapi/verbs/suspended",display:{"en-US":"suspended"}},terminated:{id:"http://adlnet.gov/expapi/verbs/terminated",display:{"en-US":"terminated"}},voided:{id:"http://adlnet.gov/expapi/verbs/voided",display:{"en-US":"voided"}}}},function(e,t,n){const i=n(0),{cmi5:r}=n(1);e.exports=()=>{let e={};const t=i(r.completed);return{...t,result(t){return e={result:{duration:t}},this},getStatement:()=>({...t.getStatement(),...e})}}}])}));