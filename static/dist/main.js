!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=[5e3,5001,5002,5003],r={5e3:[],5001:[],5002:[],5003:[]},o={5e3:{},5001:{},5002:{},5003:{}},s={5e3:!1,5001:!1,5002:!1,5003:!1};function l(e){return`${e} (${o[e].name})`}function i(e,t){if(o[t]===e)return;o[t]=e;let n=new Set(["peers","name","port","biggest_prime","biggest_prime_sender","msg_id"]),r=[];r.push("<strong>Peers:</strong> "+function(e){if(0===Object.keys(e).length)return"<i>None... node is peerless.</i>";let t="";for(let r in e)t+=`${l(r)}: ${n=e[r],Math.round(Date.now()/1e3-n)+" seconds ago"}</br>`;var n;return t}(e.peers)),r.push("<strong>Biggest Mersenne prime:</strong> "+e.biggest_prime),r.push("<strong>Biggest Mersenne prime sender:</strong> "+l(e.biggest_prime_sender));for(let t in e)n.has(t)||r.push(`<strong>${t}</strong>: ${JSON.stringify(e[t])}`);r=r.map(e=>"<li>"+e+"</li>");let s=t%5e3;$("ul#state-node"+s).html(r.join("")),$("h3#name-node"+s).text(l(t))}new ClipboardJS(".btn-clipboard"),[0,1,2,3].forEach(e=>{let t=5e3+e;$("#sleep"+e).click(()=>{s[t]?($.post(`http://localhost:${t}/wake_up`),$("#sleep"+e).text("Sleep")):($.post(`http://localhost:${t}/sleep`),$("#sleep"+e).text("Wake up")),s[t]=!s[t]}),$("#reset"+e).click(()=>{$.post(`http://localhost:${t}/reset`),$("#logs-node"+e).html("")})}),setInterval(()=>{n.forEach(e=>{$.getJSON(`http://localhost:${e}/state`).done(t=>i(t,e)).fail((t,n,r)=>{$("ul#state-node"+(e-5e3)).text("Node is not responding!")})})},1e3),setInterval(()=>{n.forEach(e=>{$.getJSON("http://localhost:"+e+"/message_log").done(t=>{let n=!1;t.forEach(t=>{let o=JSON.stringify(t);r[e].includes(o)||(r[e].push(o),n=!0)}),n&&function(e){let t=[],n=[];r[e].slice(-20).forEach(r=>{let o=JSON.parse(r),s=!!o.received?"RECEIVED:":"SENT:",l="error"in o;delete o.received;let i=[];for(let e in o)i.push(e+"="+o[e]);l?(n.push(['<li class="line">',i.join(","),"</li>"].join("")),$("div#errors"+e%5e3).html(`<div class="alert alert-danger alert-dismissable">${n.reverse().join("")}</div>`)):t.push(['<li class="line">',s,i.join(","),"</li>"].join(""))}),$("ul#logs-node"+e%5e3).html(t.reverse().join(""))}(e)}).fail((e,t,n)=>{console.log([e,t,n])})})},200)}]);