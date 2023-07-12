(()=>{var e={890:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* IMPORTS & UTILS*/\n/* ---------------------------------------------- */\n\n:root {\n\t--header-color: #f5f4f8;\n\t--light-green-hover: #c7f0db;\n\t--card-background: #fde68a;\n\t--more-info-color: #22d3ee;\n\t--hover-color: #dbd1ff\n}\n\nbody {\n\tbackground-color: var(--header-color);\n}\n\n/* HEADER */\n/* ---------------------------------------------- */\n\nheader {\n\twidth: 100vw;\n\theight: 12.5rem;\n\tbox-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n#logo {\n\tpadding: 1rem;\n\tmargin: 1rem;\n\tborder-radius: 15px;\n    font-family: 'roboto', cursive;\n    font-size: 2.5rem;\n\tfont-weight: 700;\n\tcolor: rgb(0, 0, 0);\n}\n\n/* NAVBAR */\n/* ---------------------------------------------- */\n\n.navbar {\n\tmargin-top: 1rem;\n\twidth: 85vw;\n\n    display: flex;\n\tjustify-content: space-between;\n}\n\n.navbar a {\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n\tbackground-color: var(--header-color);\n\tborder: 1px solid black;\n\tpadding: 0.6rem 1rem;\n\tfont-size: 2rem;\n\ttext-decoration: none;\n\tcolor: rgb(0, 0, 0);\n\ttransition: 0.3s ease;\n}\n\n.navbar a:hover {\n\ttransform: translateY(5px);\n\tbackground-color: var(--hover-color);\n}\n\n/* HOME */\n/* ---------------------------------------------- */\n\n.wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n#mainTitle {\n\ttext-align: center;\n\tmargin: 2rem 0;\n\tfont-size: 2.5rem;\n}\n\n.food-grid {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n\twidth: 85vw;\n\tgap: 2rem;\n}\n\n.food-card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-top-left-radius: 15px;\n\tborder-top-right-radius: 15px;\n\tbackground-color: var(--card-background);\n\tbox-shadow:\n    0px 0px 10px rgba(0, 0, 0, 0.4),\n    0px 2px 8px rgba(0, 0, 0, 0.8),\n    0px 6px 10px rgba(0, 0, 0, 0.4);\n}\n\n.food-card > * {\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.food-image {\n\twidth: 100%;\n\theight: 15rem;\n}\n\n.food-image img {\n\twidth: 100%;\n\theight: 100%;\n\tborder-top-left-radius: 15px;\n\tborder-top-right-radius: 15px;\n}\n\n\n.food-info h1 {\n\tpadding: 10px;\n\tfont-size: 2rem;\n\tfont-weight: bold;\n\tfont-family: 'Playfair Display', serif;\n\tborder-bottom: 1px solid black;\n}\n\n.food-info h2 {\n\tpadding: 10px;\n\tfont-size: 1.2rem;\n\tfont-family: 'Open Sans', sans-serif;\n}\n  \n.food-info p {\n\tpadding: 10px;\n\tfont-family: 'Arial', sans-serif;\n}\n\n.food-button:hover {\n\tcursor: pointer;\n\tbackground-color: var(--hover-color);\n}\n\n.food-button {\n\tpadding: 10px 0;\n\tbackground-color: var(--more-info-color);\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tmargin-top: auto;\n\tborder-top: 1px solid black;\n\ttext-decoration: none;\n\tcolor: black;\n}",""]);const s=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},31:(e,n,t)=>{e.exports=t.p+"assets/imgs/cilantro.a9eb6b2f7e8fb73417a1b5d3ade0dd70.jpg"},963:(e,n,t)=>{e.exports=t.p+"assets/imgs/coffee.b4da390a86c2f4929872c07e3d7a59da.jpg"},500:(e,n,t)=>{e.exports=t.p+"assets/imgs/cumin.1750f6d236aa73e92d77f9aae4bb502e.jpg"},411:(e,n,t)=>{e.exports=t.p+"assets/imgs/egg.bd6360c1286342b6eb0e0b9c5fe762a3.jpg"},458:(e,n,t)=>{e.exports=t.p+"assets/imgs/garlic.e7a2137666537f541afdfb6a3122205b.jpg"},744:(e,n,t)=>{e.exports=t.p+"assets/imgs/lamb-meat.554a6101887ce0739ff7fb4cc983315a.jpg"},711:(e,n,t)=>{e.exports=t.p+"assets/imgs/milk.f83f3dc0e753f5abab8353c655c5c7b0.jpg"},442:(e,n,t)=>{e.exports=t.p+"assets/imgs/olive-oil.e5d9db7306f80d125a7f3ca6eca1c23d.jpg"},371:(e,n,t)=>{e.exports=t.p+"assets/imgs/onion.5e18a784e4d0c88098aa8c74bc3f7c69.jpg"},763:(e,n,t)=>{e.exports=t.p+"assets/imgs/spinach.81e543515cdabadefb31ed3eee966c5a.jpg"},418:(e,n,t)=>{e.exports=t.p+"assets/imgs/tomatoes.919b9061e5871c3901fc88e9a2977335.jpg"},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),f=t(890),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var g=t(31),h=t.n(g),b=t(963),v=t.n(b),x=t(500),w=t.n(x),y=t(411),k=t.n(y),C=t(458),I=t.n(C),T=t(744),E=t.n(T),j=t(711),M=t.n(j),S=t(442),L=t.n(S),q=t(371),O=t.n(q),A=t(763),z=t.n(A),N=t(418),P=t.n(N);const H={cilantroImage:h(),coffeeImage:v(),cuminImage:w(),eggImage:k(),garlicImage:I(),lambMeatImage:E(),milkImage:M(),oliveOilImage:L(),onionImage:O(),spinachImage:z(),tomatoImage:P()};function _(e,n,t,r){const o=document.createElement("div");o.classList.add("food-card");const a=document.createElement("div");a.classList.add("food-image");const i=document.createElement("img");i.src=e,a.appendChild(i);const s=document.createElement("div");s.classList.add("food-info");const d=document.createElement("h1");d.textContent=n;const c=document.createElement("h2");c.textContent=t,s.appendChild(d),s.appendChild(c);const l=document.createElement("a");return l.classList.add("food-button"),l.textContent="More Info",l.href=r,o.appendChild(a),o.appendChild(s),o.appendChild(l),o}const R=_(H.cilantroImage,"Cilantro","The zesty green daredevil, lending a fresh and vibrant twist to dishes, delighting taste buds and dividing opinions with its unique flavor.","https://en.wikipedia.org/wiki/Coriander"),Z=_(H.coffeeImage,"Coffee","The aromatic elixir of the gods, awakening senses and bestowing caffeinated bliss upon mortals, the nectar of productivity.","https://en.wikipedia.org/wiki/Coffee"),F=_(H.cuminImage,"Cumin","The spice whisperer, sprinkling its warm, earthy essence into dishes, transporting taste buds to far-off lands.","https://en.wikipedia.org/wiki/Cumin"),U=_(H.eggImage,"Egg","The culinary chameleons, transforming from delicate omelettes to hearty scrambles, the ultimate breakfast heroes.","https://en.wikipedia.org/wiki/Egg_as_food"),B=_(H.garlicImage,"Garlic","Nature's aromatic ninja, adding flavor and warding off vampires with its pungent prowess.","https://en.wikipedia.org/wiki/Garlic"),D=_(H.lambMeatImage,"Lamb Meat","The regal meat, gracing tables with its tender succulence and commanding presence, fit for kings and queens.","https://en.wikipedia.org/wiki/Lamb_and_mutton"),$=_(H.milkImage,"Milk","Nature's white elixir, nurturing bones and fueling dreams with its creamy goodness, a staple in kitchens and bedtime stories.","https://en.wikipedia.org/wiki/Milk"),G=_(H.oliveOilImage,"Olive Oil","Liquid gold from Mediterranean shores, drizzling its smooth richness, elevating dishes to gourmet status.","https://en.wikipedia.org/wiki/Olive_oil"),J=_(H.onionImage,"Onion","The multitasking tearjerker, effortlessly enhancing dishes while making you weep in appreciation.","https://en.wikipedia.org/wiki/Onion"),V=_(H.spinachImage,"Spinach","Popeye's secret weapon, these leafy green powerhouses pack a punch of nutrients, transforming ordinary meals into superfood feats.","https://en.wikipedia.org/wiki/Spinach"),Y=_(H.tomatoImage,"Tomato","Juicy orbs of summer delight, bursting with tangy sweetness, lending their vibrant hue to salads and sauces alike.","https://en.wikipedia.org/wiki/Tomato"),K=document.createElement("div"),Q=document.createElement("div");K.classList.add("food-grid"),Q.setAttribute("id","mainTitle"),Q.innerText="Here are some of our favorite ingredients that we cook with everyday :)",K.appendChild(R),K.appendChild(Z),K.appendChild(F),K.appendChild(U),K.appendChild(B),K.appendChild(D),K.appendChild($),K.appendChild(G),K.appendChild(J),K.appendChild(V),K.appendChild(Y);const W=K,X=document.querySelector("header"),ee=function(){const e=document.createElement("div");e.setAttribute("id","logo"),e.innerText="Mohamed & Sophia's Foods";const n=document.createElement("nav");n.classList.add("navbar");const t=document.createElement("a");t.href="#",t.innerText="Home";const r=document.createElement("a");r.href="#",r.innerText="About";const o=document.createElement("a");o.href="#",o.innerText="Cooked";const a=document.createElement("a");return a.href="#",a.innerText="Uncooked",n.appendChild(t),n.appendChild(r),n.appendChild(o),n.appendChild(a),X.appendChild(e),X.appendChild(n),X}(),ne=document.querySelector("main");document.body.insertBefore(ee,ne),ne.classList.add("wrapper"),ne.appendChild(W)})()})();