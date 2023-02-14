import"color-name";import n from"./conversions.js";var t={};const e=n;function buildGraph(){const n={};const t=Object.keys(e);for(let e=t.length,o=0;o<e;o++)n[t[o]]={distance:-1,parent:null};return n}function deriveBFS(n){const t=buildGraph();const o=[n];t[n].distance=0;while(o.length){const n=o.pop();const r=Object.keys(e[n]);for(let e=r.length,c=0;c<e;c++){const e=r[c];const s=t[e];if(-1===s.distance){s.distance=t[n].distance+1;s.parent=n;o.unshift(e)}}}return t}function link(n,t){return function(e){return t(n(e))}}function wrapConversion(n,t){const o=[t[n].parent,n];let r=e[t[n].parent][n];let c=t[n].parent;while(t[c].parent){o.unshift(t[c].parent);r=link(e[t[c].parent][c],r);c=t[c].parent}r.conversion=o;return r}t=function(n){const t=deriveBFS(n);const e={};const o=Object.keys(t);for(let n=o.length,r=0;r<n;r++){const n=o[r];const c=t[n];null!==c.parent&&(e[n]=wrapConversion(n,t))}return e};var o=t;var r={};const c=n;const s=o;const i={};const a=Object.keys(c);function wrapRaw(n){const wrappedFn=function(...t){const e=t[0];if(void 0===e||null===e)return e;e.length>1&&(t=e);return n(t)};"conversion"in n&&(wrappedFn.conversion=n.conversion);return wrappedFn}function wrapRounded(n){const wrappedFn=function(...t){const e=t[0];if(void 0===e||null===e)return e;e.length>1&&(t=e);const o=n(t);if("object"===typeof o)for(let n=o.length,t=0;t<n;t++)o[t]=Math.round(o[t]);return o};"conversion"in n&&(wrappedFn.conversion=n.conversion);return wrappedFn}a.forEach(n=>{i[n]={};Object.defineProperty(i[n],"channels",{value:c[n].channels});Object.defineProperty(i[n],"labels",{value:c[n].labels});const t=s(n);const e=Object.keys(t);e.forEach(e=>{const o=t[e];i[n][e]=wrapRounded(o);i[n][e].raw=wrapRaw(o)})});r=i;var l=r;export default l;

