import{g}from"./main-DIW74Dt-.js";function s(e,o){for(var n=0;n<o.length;n++){const r=o[n];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const u=Object.getOwnPropertyDescriptor(r,t);u&&Object.defineProperty(e,t,u.get?u:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,l;function i(){if(l)return a;l=1,a=e,e.displayName="goModule",e.aliases=[];function e(o){o.languages["go-mod"]=o.languages["go-module"]={comment:{pattern:/\/\/.*/,greedy:!0},version:{pattern:/(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,lookbehind:!0,alias:"number"},"go-version":{pattern:/((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,lookbehind:!0,alias:"number"},keyword:{pattern:/^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,lookbehind:!0},operator:/=>/,punctuation:/[()[\],]/}}return a}var d=i();const c=g(d),f=s({__proto__:null,default:c},[d]);export{f as g};
