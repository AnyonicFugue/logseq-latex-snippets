var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var lsplugin_user = {exports: {}};



const yizhou_debugging=true;



/*! For license information please see lsplugin.user.js.LICENSE.txt */

(function (module, exports) {
	!function(t,e){module.exports=e();}(self,(()=>(()=>{var t={227:(t,e,n)=>{var r=n(155);e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;e.splice(1,0,n,"color: inherit");let r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(t=>{"%%"!==t&&(r++,"%c"===t&&(o=r));})),e.splice(o,0,n);},e.save=function(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug");}catch(t){}},e.load=function(){let t;try{t=e.storage.getItem("debug");}catch(t){}!t&&void 0!==r&&"env"in r&&(t=r.env.DEBUG);return t},e.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return !0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return !1;return "undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=function(){try{return localStorage}catch(t){}}(),e.destroy=(()=>{let t=!1;return ()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.log=console.debug||console.log||(()=>{}),t.exports=n(447)(e);const{formatters:o}=t.exports;o.j=function(t){try{return JSON.stringify(t)}catch(t){return "[UnexpectedJSONParseError]: "+t.message}};},447:(t,e,n)=>{t.exports=function(t){function e(t){let n,o,i,s=null;function a(...t){if(!a.enabled)return;const r=a,o=Number(new Date),i=o-(n||o);r.diff=i,r.prev=n,r.curr=o,n=o,t[0]=e.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");let s=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return "%";s++;const i=e.formatters[o];if("function"==typeof i){const e=t[s];n=i.call(r,e),t.splice(s,1),s--;}return n})),e.formatArgs.call(r,t);(r.log||e.log).apply(r,t);}return a.namespace=t,a.useColors=e.useColors(),a.color=e.selectColor(t),a.extend=r,a.destroy=e.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(o!==e.namespaces&&(o=e.namespaces,i=e.enabled(t)),i),set:t=>{s=t;}}),"function"==typeof e.init&&e.init(a),a}function r(t,n){const r=e(this.namespace+(void 0===n?":":n)+t);return r.log=this.log,r}function o(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}return e.debug=e,e.default=e,e.coerce=function(t){if(t instanceof Error)return t.stack||t.message;return t},e.disable=function(){const t=[...e.names.map(o),...e.skips.map(o).map((t=>"-"+t))].join(",");return e.enable(""),t},e.enable=function(t){let n;e.save(t),e.namespaces=t,e.names=[],e.skips=[];const r=("string"==typeof t?t:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(t=r[n].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")));},e.enabled=function(t){if("*"===t[t.length-1])return !0;let n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return !1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return !0;return !1},e.humanize=n(824),e.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");},Object.keys(t).forEach((n=>{e[n]=t[n];})),e.names=[],e.skips=[],e.formatters={},e.selectColor=function(t){let n=0;for(let e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return e.colors[Math.abs(n)%e.colors.length]},e.enable(e.load()),e};},856:function(t){t.exports=function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,n){return e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(t,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return !1}}function r(t,o,i){return r=n()?Reflect.construct:function(t,n,r){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return r&&e(i,r.prototype),i},r.apply(null,arguments)}function o(t){return i(t)||s(t)||a(t)||l()}function i(t){if(Array.isArray(t))return c(t)}function s(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return "Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,f=Object.setPrototypeOf,p=Object.isFrozen,d=Object.getPrototypeOf,h=Object.getOwnPropertyDescriptor,m=Object.freeze,g=Object.seal,v=Object.create,y="undefined"!=typeof Reflect&&Reflect,b=y.apply,_=y.construct;b||(b=function(t,e,n){return t.apply(e,n)}),m||(m=function(t){return t}),g||(g=function(t){return t}),_||(_=function(t,e){return r(t,o(e))});var w=I(Array.prototype.forEach),x=I(Array.prototype.pop),C=I(Array.prototype.push),O=I(String.prototype.toLowerCase),S=I(String.prototype.match),j=I(String.prototype.replace),A=I(String.prototype.indexOf),k=I(String.prototype.trim),E=I(RegExp.prototype.test),T=F(TypeError);function I(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return b(t,e,r)}}function F(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return _(t,n)}}function L(t,e){f&&f(t,null);for(var n=e.length;n--;){var r=e[n];if("string"==typeof r){var o=O(r);o!==r&&(p(e)||(e[n]=o),r=o);}t[r]=!0;}return t}function N(t){var e,n=v(null);for(e in t)b(u,t,[e])&&(n[e]=t[e]);return n}function M(t,e){for(;null!==t;){var n=h(t,e);if(n){if(n.get)return I(n.get);if("function"==typeof n.value)return I(n.value)}t=d(t);}function r(t){return console.warn("fallback value for",t),null}return r}var P=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),D=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),U=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),$=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),z=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=m(["#text"]),B=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),q=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),W=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),G=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),J=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Z=g(/<%[\w\W]*|[\w\W]*%>/gm),V=g(/^data-[\-\w.\u00B7-\uFFFF]/),K=g(/^aria-[\-\w]+$/),Y=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Q=g(/^(?:\w+script|data):/i),X=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),tt=g(/^html$/i),et=function(){return "undefined"==typeof window?null:window},nt=function(e,n){if("object"!==t(e)||"function"!=typeof e.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function rt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et(),n=function(t){return rt(t)};if(n.version="2.3.8",n.removed=[],!e||!e.document||9!==e.document.nodeType)return n.isSupported=!1,n;var r=e.document,i=e.document,s=e.DocumentFragment,a=e.HTMLTemplateElement,c=e.Node,l=e.Element,u=e.NodeFilter,f=e.NamedNodeMap,p=void 0===f?e.NamedNodeMap||e.MozNamedAttrMap:f,d=e.HTMLFormElement,h=e.DOMParser,g=e.trustedTypes,v=l.prototype,y=M(v,"cloneNode"),b=M(v,"nextSibling"),_=M(v,"childNodes"),I=M(v,"parentNode");if("function"==typeof a){var F=i.createElement("template");F.content&&F.content.ownerDocument&&(i=F.content.ownerDocument);}var ot=nt(g,r),it=ot?ot.createHTML(""):"",st=i,at=st.implementation,ct=st.createNodeIterator,lt=st.createDocumentFragment,ut=st.getElementsByTagName,ft=r.importNode,pt={};try{pt=N(i).documentMode?i.documentMode:{};}catch(t){}var dt={};n.isSupported="function"==typeof I&&at&&void 0!==at.createHTMLDocument&&9!==pt;var ht,mt,gt=J,vt=Z,yt=V,bt=K,_t=Q,wt=X,xt=Y,Ct=null,Ot=L({},[].concat(o(P),o(R),o(D),o($),o(H))),St=null,jt=L({},[].concat(o(B),o(q),o(W),o(G))),At=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),kt=null,Et=null,Tt=!0,It=!0,Ft=!1,Lt=!1,Nt=!1,Mt=!1,Pt=!1,Rt=!1,Dt=!1,Ut=!1,$t=!0,zt=!0,Ht=!1,Bt={},qt=null,Wt=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Gt=null,Jt=L({},["audio","video","img","source","image","track"]),Zt=null,Vt=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Kt="http://www.w3.org/1998/Math/MathML",Yt="http://www.w3.org/2000/svg",Qt="http://www.w3.org/1999/xhtml",Xt=Qt,te=!1,ee=["application/xhtml+xml","text/html"],ne="text/html",re=null,oe=i.createElement("form"),ie=function(t){return t instanceof RegExp||t instanceof Function},se=function(e){re&&re===e||(e&&"object"===t(e)||(e={}),e=N(e),Ct="ALLOWED_TAGS"in e?L({},e.ALLOWED_TAGS):Ot,St="ALLOWED_ATTR"in e?L({},e.ALLOWED_ATTR):jt,Zt="ADD_URI_SAFE_ATTR"in e?L(N(Vt),e.ADD_URI_SAFE_ATTR):Vt,Gt="ADD_DATA_URI_TAGS"in e?L(N(Jt),e.ADD_DATA_URI_TAGS):Jt,qt="FORBID_CONTENTS"in e?L({},e.FORBID_CONTENTS):Wt,kt="FORBID_TAGS"in e?L({},e.FORBID_TAGS):{},Et="FORBID_ATTR"in e?L({},e.FORBID_ATTR):{},Bt="USE_PROFILES"in e&&e.USE_PROFILES,Tt=!1!==e.ALLOW_ARIA_ATTR,It=!1!==e.ALLOW_DATA_ATTR,Ft=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Lt=e.SAFE_FOR_TEMPLATES||!1,Nt=e.WHOLE_DOCUMENT||!1,Rt=e.RETURN_DOM||!1,Dt=e.RETURN_DOM_FRAGMENT||!1,Ut=e.RETURN_TRUSTED_TYPE||!1,Pt=e.FORCE_BODY||!1,$t=!1!==e.SANITIZE_DOM,zt=!1!==e.KEEP_CONTENT,Ht=e.IN_PLACE||!1,xt=e.ALLOWED_URI_REGEXP||xt,Xt=e.NAMESPACE||Qt,e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(At.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(At.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(At.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ht=ht=-1===ee.indexOf(e.PARSER_MEDIA_TYPE)?ne:e.PARSER_MEDIA_TYPE,mt="application/xhtml+xml"===ht?function(t){return t}:O,Lt&&(It=!1),Dt&&(Rt=!0),Bt&&(Ct=L({},o(H)),St=[],!0===Bt.html&&(L(Ct,P),L(St,B)),!0===Bt.svg&&(L(Ct,R),L(St,q),L(St,G)),!0===Bt.svgFilters&&(L(Ct,D),L(St,q),L(St,G)),!0===Bt.mathMl&&(L(Ct,$),L(St,W),L(St,G))),e.ADD_TAGS&&(Ct===Ot&&(Ct=N(Ct)),L(Ct,e.ADD_TAGS)),e.ADD_ATTR&&(St===jt&&(St=N(St)),L(St,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&L(Zt,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(qt===Wt&&(qt=N(qt)),L(qt,e.FORBID_CONTENTS)),zt&&(Ct["#text"]=!0),Nt&&L(Ct,["html","head","body"]),Ct.table&&(L(Ct,["tbody"]),delete kt.tbody),m&&m(e),re=e);},ae=L({},["mi","mo","mn","ms","mtext"]),ce=L({},["foreignobject","desc","title","annotation-xml"]),le=L({},["title","style","font","a","script"]),ue=L({},R);L(ue,D),L(ue,U);var fe=L({},$);L(fe,z);var pe=function(t){var e=I(t);e&&e.tagName||(e={namespaceURI:Qt,tagName:"template"});var n=O(t.tagName),r=O(e.tagName);return t.namespaceURI===Yt?e.namespaceURI===Qt?"svg"===n:e.namespaceURI===Kt?"svg"===n&&("annotation-xml"===r||ae[r]):Boolean(ue[n]):t.namespaceURI===Kt?e.namespaceURI===Qt?"math"===n:e.namespaceURI===Yt?"math"===n&&ce[r]:Boolean(fe[n]):t.namespaceURI===Qt&&!(e.namespaceURI===Yt&&!ce[r])&&!(e.namespaceURI===Kt&&!ae[r])&&!fe[n]&&(le[n]||!ue[n])},de=function(t){C(n.removed,{element:t});try{t.parentNode.removeChild(t);}catch(e){try{t.outerHTML=it;}catch(e){t.remove();}}},he=function(t,e){try{C(n.removed,{attribute:e.getAttributeNode(t),from:e});}catch(t){C(n.removed,{attribute:null,from:e});}if(e.removeAttribute(t),"is"===t&&!St[t])if(Rt||Dt)try{de(e);}catch(t){}else try{e.setAttribute(t,"");}catch(t){}},me=function(t){var e,n;if(Pt)t="<remove></remove>"+t;else {var r=S(t,/^[\r\n\t ]+/);n=r&&r[0];}"application/xhtml+xml"===ht&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var o=ot?ot.createHTML(t):t;if(Xt===Qt)try{e=(new h).parseFromString(o,ht);}catch(t){}if(!e||!e.documentElement){e=at.createDocument(Xt,"template",null);try{e.documentElement.innerHTML=te?"":o;}catch(t){}}var s=e.body||e.documentElement;return t&&n&&s.insertBefore(i.createTextNode(n),s.childNodes[0]||null),Xt===Qt?ut.call(e,Nt?"html":"body")[0]:Nt?e.documentElement:s},ge=function(t){return ct.call(t.ownerDocument||t,t,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ve=function(t){return t instanceof d&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof p)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore)},ye=function(e){return "object"===t(c)?e instanceof c:e&&"object"===t(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},be=function(t,e,r){dt[t]&&w(dt[t],(function(t){t.call(n,e,r,re);}));},_e=function(t){var e;if(be("beforeSanitizeElements",t,null),ve(t))return de(t),!0;if(E(/[\u0080-\uFFFF]/,t.nodeName))return de(t),!0;var r=mt(t.nodeName);if(be("uponSanitizeElement",t,{tagName:r,allowedTags:Ct}),t.hasChildNodes()&&!ye(t.firstElementChild)&&(!ye(t.content)||!ye(t.content.firstElementChild))&&E(/<[/\w]/g,t.innerHTML)&&E(/<[/\w]/g,t.textContent))return de(t),!0;if("select"===r&&E(/<template/i,t.innerHTML))return de(t),!0;if(!Ct[r]||kt[r]){if(!kt[r]&&xe(r)){if(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,r))return !1;if(At.tagNameCheck instanceof Function&&At.tagNameCheck(r))return !1}if(zt&&!qt[r]){var o=I(t)||t.parentNode,i=_(t)||t.childNodes;if(i&&o)for(var s=i.length-1;s>=0;--s)o.insertBefore(y(i[s],!0),b(t));}return de(t),!0}return t instanceof l&&!pe(t)?(de(t),!0):"noscript"!==r&&"noembed"!==r||!E(/<\/no(script|embed)/i,t.innerHTML)?(Lt&&3===t.nodeType&&(e=t.textContent,e=j(e,gt," "),e=j(e,vt," "),t.textContent!==e&&(C(n.removed,{element:t.cloneNode()}),t.textContent=e)),be("afterSanitizeElements",t,null),!1):(de(t),!0)},we=function(t,e,n){if($t&&("id"===e||"name"===e)&&(n in i||n in oe))return !1;if(It&&!Et[e]&&E(yt,e));else if(Tt&&E(bt,e));else if(!St[e]||Et[e]){if(!(xe(t)&&(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,t)||At.tagNameCheck instanceof Function&&At.tagNameCheck(t))&&(At.attributeNameCheck instanceof RegExp&&E(At.attributeNameCheck,e)||At.attributeNameCheck instanceof Function&&At.attributeNameCheck(e))||"is"===e&&At.allowCustomizedBuiltInElements&&(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,n)||At.tagNameCheck instanceof Function&&At.tagNameCheck(n))))return !1}else if(Zt[e]);else if(E(xt,j(n,wt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==A(n,"data:")||!Gt[t])if(Ft&&!E(_t,j(n,wt,"")));else if(n)return !1;return !0},xe=function(t){return t.indexOf("-")>0},Ce=function(t){var e,r,o,i;be("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:St};for(i=s.length;i--;){var c=e=s[i],l=c.name,u=c.namespaceURI;if(r="value"===l?e.value:k(e.value),o=mt(l),a.attrName=o,a.attrValue=r,a.keepAttr=!0,a.forceKeepAttr=void 0,be("uponSanitizeAttribute",t,a),r=a.attrValue,!a.forceKeepAttr&&(he(l,t),a.keepAttr))if(E(/\/>/i,r))he(l,t);else {Lt&&(r=j(r,gt," "),r=j(r,vt," "));var f=mt(t.nodeName);if(we(f,o,r))try{u?t.setAttributeNS(u,l,r):t.setAttribute(l,r),x(n.removed);}catch(t){}}}be("afterSanitizeAttributes",t,null);}},Oe=function t(e){var n,r=ge(e);for(be("beforeSanitizeShadowDOM",e,null);n=r.nextNode();)be("uponSanitizeShadowNode",n,null),_e(n)||(n.content instanceof s&&t(n.content),Ce(n));be("afterSanitizeShadowDOM",e,null);};return n.sanitize=function(o,i){var a,l,u,f,p;if((te=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!ye(o)){if("function"!=typeof o.toString)throw T("toString is not a function");if("string"!=typeof(o=o.toString()))throw T("dirty is not a string, aborting")}if(!n.isSupported){if("object"===t(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof o)return e.toStaticHTML(o);if(ye(o))return e.toStaticHTML(o.outerHTML)}return o}if(Mt||se(i),n.removed=[],"string"==typeof o&&(Ht=!1),Ht){if(o.nodeName){var d=mt(o.nodeName);if(!Ct[d]||kt[d])throw T("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=me("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else {if(!Rt&&!Lt&&!Nt&&-1===o.indexOf("<"))return ot&&Ut?ot.createHTML(o):o;if(!(a=me(o)))return Rt?null:Ut?it:""}a&&Pt&&de(a.firstChild);for(var h=ge(Ht?o:a);u=h.nextNode();)3===u.nodeType&&u===f||_e(u)||(u.content instanceof s&&Oe(u.content),Ce(u),f=u);if(f=null,Ht)return o;if(Rt){if(Dt)for(p=lt.call(a.ownerDocument);a.firstChild;)p.appendChild(a.firstChild);else p=a;return St.shadowroot&&(p=ft.call(r,p,!0)),p}var m=Nt?a.outerHTML:a.innerHTML;return Nt&&Ct["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&E(tt,a.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+m),Lt&&(m=j(m,gt," "),m=j(m,vt," ")),ot&&Ut?ot.createHTML(m):m},n.setConfig=function(t){se(t),Mt=!0;},n.clearConfig=function(){re=null,Mt=!1;},n.isValidAttribute=function(t,e,n){re||se({});var r=mt(t),o=mt(e);return we(r,o,n)},n.addHook=function(t,e){"function"==typeof e&&(dt[t]=dt[t]||[],C(dt[t],e));},n.removeHook=function(t){if(dt[t])return x(dt[t])},n.removeHooks=function(t){dt[t]&&(dt[t]=[]);},n.removeAllHooks=function(){dt={};},n}return rt()}();},729:t=>{var e=Object.prototype.hasOwnProperty,n="~";function r(){}function o(t,e,n){this.fn=t,this.context=e,this.once=n||!1;}function i(t,e,r,i,s){if("function"!=typeof r)throw new TypeError("The listener must be a function");var a=new o(r,i||t,s),c=n?n+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],a]:t._events[c].push(a):(t._events[c]=a,t._eventsCount++),t}function s(t,e){0==--t._eventsCount?t._events=new r:delete t._events[e];}function a(){this._events=new r,this._eventsCount=0;}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),a.prototype.eventNames=function(){var t,r,o=[];if(0===this._eventsCount)return o;for(r in t=this._events)e.call(t,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},a.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return [];if(r.fn)return [r.fn];for(var o=0,i=r.length,s=new Array(i);o<i;o++)s[o]=r[o].fn;return s},a.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},a.prototype.emit=function(t,e,r,o,i,s){var a=n?n+t:t;if(!this._events[a])return !1;var c,l,u=this._events[a],f=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),f){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,r),!0;case 4:return u.fn.call(u.context,e,r,o),!0;case 5:return u.fn.call(u.context,e,r,o,i),!0;case 6:return u.fn.call(u.context,e,r,o,i,s),!0}for(l=1,c=new Array(f-1);l<f;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c);}else {var p,d=u.length;for(l=0;l<d;l++)switch(u[l].once&&this.removeListener(t,u[l].fn,void 0,!0),f){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,e);break;case 3:u[l].fn.call(u[l].context,e,r);break;case 4:u[l].fn.call(u[l].context,e,r,o);break;default:if(!c)for(p=1,c=new Array(f-1);p<f;p++)c[p-1]=arguments[p];u[l].fn.apply(u[l].context,c);}}return !0},a.prototype.on=function(t,e,n){return i(this,t,e,n,!1)},a.prototype.once=function(t,e,n){return i(this,t,e,n,!0)},a.prototype.removeListener=function(t,e,r,o){var i=n?n+t:t;if(!this._events[i])return this;if(!e)return s(this,i),this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||r&&a.context!==r||s(this,i);else {for(var c=0,l=[],u=a.length;c<u;c++)(a[c].fn!==e||o&&!a[c].once||r&&a[c].context!==r)&&l.push(a[c]);l.length?this._events[i]=1===l.length?l[0]:l:s(this,i);}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&s(this,e)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a;},717:t=>{"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}});}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t;};},824:t=>{var e=1e3,n=60*e,r=60*n,o=24*r,i=7*o,s=365.25*o;function a(t,e,n,r){var o=e>=1.5*n;return Math.round(t/n)+" "+r+(o?"s":"")}t.exports=function(t,c){c=c||{};var l=typeof t;if("string"===l&&t.length>0)return function(t){if((t=String(t)).length>100)return;var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(t);if("number"===l&&isFinite(t))return c.long?function(t){var i=Math.abs(t);if(i>=o)return a(t,i,o,"day");if(i>=r)return a(t,i,r,"hour");if(i>=n)return a(t,i,n,"minute");if(i>=e)return a(t,i,e,"second");return t+" ms"}(t):function(t){var i=Math.abs(t);if(i>=o)return Math.round(t/o)+"d";if(i>=r)return Math.round(t/r)+"h";if(i>=n)return Math.round(t/n)+"m";if(i>=e)return Math.round(t/e)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};},520:(t,e,n)=>{var r=n(155),o="win32"===r.platform,i=n(539);function s(t,e){for(var n=[],r=0;r<t.length;r++){var o=t[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():e&&n.push(".."):n.push(o));}return n}function a(t){for(var e=t.length-1,n=0;n<=e&&!t[n];n++);for(var r=e;r>=0&&!t[r];r--);return 0===n&&r===e?t:n>r?[]:t.slice(n,r+1)}var c=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,l=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,u={};function f(t){var e=c.exec(t),n=(e[1]||"")+(e[2]||""),r=e[3]||"",o=l.exec(r);return [n,o[1],o[2],o[3]]}function p(t){var e=c.exec(t),n=e[1]||"",r=!!n&&":"!==n[1];return {device:n,isUnc:r,isAbsolute:r||!!e[2],tail:e[3]}}function d(t){return "\\\\"+t.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}u.resolve=function(){for(var t="",e="",n=!1,o=arguments.length-1;o>=-1;o--){var a;if(o>=0?a=arguments[o]:t?(a=r.env["="+t])&&a.substr(0,3).toLowerCase()===t.toLowerCase()+"\\"||(a=t+"\\"):a=r.cwd(),!i.isString(a))throw new TypeError("Arguments to path.resolve must be strings");if(a){var c=p(a),l=c.device,u=c.isUnc,f=c.isAbsolute,h=c.tail;if((!l||!t||l.toLowerCase()===t.toLowerCase())&&(t||(t=l),n||(e=h+"\\"+e,n=f),t&&n))break}}return u&&(t=d(t)),t+(n?"\\":"")+(e=s(e.split(/[\\\/]+/),!n).join("\\"))||"."},u.normalize=function(t){var e=p(t),n=e.device,r=e.isUnc,o=e.isAbsolute,i=e.tail,a=/[\\\/]$/.test(i);return (i=s(i.split(/[\\\/]+/),!o).join("\\"))||o||(i="."),i&&a&&(i+="\\"),r&&(n=d(n)),n+(o?"\\":"")+i},u.isAbsolute=function(t){return p(t).isAbsolute},u.join=function(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&t.push(n);}var r=t.join("\\");return /^[\\\/]{2}[^\\\/]/.test(t[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),u.normalize(r)},u.relative=function(t,e){t=u.resolve(t),e=u.resolve(e);for(var n=t.toLowerCase(),r=e.toLowerCase(),o=a(e.split("\\")),i=a(n.split("\\")),s=a(r.split("\\")),c=Math.min(i.length,s.length),l=c,f=0;f<c;f++)if(i[f]!==s[f]){l=f;break}if(0==l)return e;var p=[];for(f=l;f<i.length;f++)p.push("..");return (p=p.concat(o.slice(l))).join("\\")},u._makeLong=function(t){if(!i.isString(t))return t;if(!t)return "";var e=u.resolve(t);return /^[a-zA-Z]\:\\/.test(e)?"\\\\?\\"+e:/^\\\\[^?.]/.test(e)?"\\\\?\\UNC\\"+e.substring(2):t},u.dirname=function(t){var e=f(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},u.basename=function(t,e){var n=f(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},u.extname=function(t){return f(t)[3]},u.format=function(t){if(!i.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!i.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);var n=t.dir,r=t.base||"";return n?n[n.length-1]===u.sep?n+r:n+u.sep+r:r},u.parse=function(t){if(!i.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=f(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return {root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},u.sep="\\",u.delimiter=";";var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,m={};function g(t){return h.exec(t).slice(1)}m.resolve=function(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var o=n>=0?arguments[n]:r.cwd();if(!i.isString(o))throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,e="/"===o[0]);}return (e?"/":"")+(t=s(t.split("/"),!e).join("/"))||"."},m.normalize=function(t){var e=m.isAbsolute(t),n=t&&"/"===t[t.length-1];return (t=s(t.split("/"),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t},m.isAbsolute=function(t){return "/"===t.charAt(0)},m.join=function(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(t+=t?"/"+n:n);}return m.normalize(t)},m.relative=function(t,e){t=m.resolve(t).substr(1),e=m.resolve(e).substr(1);for(var n=a(t.split("/")),r=a(e.split("/")),o=Math.min(n.length,r.length),i=o,s=0;s<o;s++)if(n[s]!==r[s]){i=s;break}var c=[];for(s=i;s<n.length;s++)c.push("..");return (c=c.concat(r.slice(i))).join("/")},m._makeLong=function(t){return t},m.dirname=function(t){var e=g(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},m.basename=function(t,e){var n=g(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},m.extname=function(t){return g(t)[3]},m.format=function(t){if(!i.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!i.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);return (t.dir?t.dir+m.sep:"")+(t.base||"")},m.parse=function(t){if(!i.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=g(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return e[1]=e[1]||"",e[2]=e[2]||"",e[3]=e[3]||"",{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},m.sep="/",m.delimiter=":",t.exports=o?u:m,t.exports.posix=m,t.exports.win32=u;},155:t=>{var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o;}catch(t){e=o;}try{n="function"==typeof clearTimeout?clearTimeout:i;}catch(t){n=i;}}();var a,c=[],l=!1,u=-1;function f(){l&&a&&(l=!1,a.length?c=a.concat(c):u=-1,c.length&&p());}function p(){if(!l){var t=s(f);l=!0;for(var e=c.length;e;){for(a=c,c=[];++u<e;)a&&a[u].run();u=-1,e=c.length;}a=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t);}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t);}}function d(t,e){this.fun=t,this.array=e;}function h(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||s(p);},d.prototype.run=function(){this.fun.apply(null,this.array);},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(t){return []},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return "/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};},384:t=>{t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8};},539:(t,e,n)=>{var r=n(155),o=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(t).replace(o,(function(t){if("%%"===t)return "%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return "[Circular]"}default:return t}})),c=r[n];n<i;c=r[++n])m(c)||!_(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(t,o){if(y(n.g.process))return function(){return e.deprecate(t,o).apply(this,arguments)};if(!0===r.noDeprecation)return t;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0;}return t.apply(this,arguments)}};var i,s={};function a(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&e._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,t,r.depth)}function c(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function l(t,e){return t}function u(t,n,r){if(t.customInspect&&n&&C(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return v(o)||(o=u(t,o,r)),o}var i=function(t,e){if(y(e))return t.stylize("undefined","undefined");if(v(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(h(e))return t.stylize(""+e,"boolean");if(m(e))return t.stylize("null","null")}(t,n);if(i)return i;var s=Object.keys(n),a=function(t){var e={};return t.forEach((function(t,n){e[t]=!0;})),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),x(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(n);if(0===s.length){if(C(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(x(n))return f(n)}var l,_="",O=!1,S=["{","}"];(d(n)&&(O=!0,S=["[","]"]),C(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),x(n)&&(_=" "+f(n)),0!==s.length||O&&0!=n.length?r<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=O?function(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)k(e,String(s))?i.push(p(t,e,n,r,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0));})),i}(t,n,r,a,s):s.map((function(e){return p(t,n,r,a,e,O)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,_,S)):S[0]+_+S[1]}function f(t){return "["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var s,a,c;if((c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),k(r,o)||(s="["+o+"]"),a||(t.seen.indexOf(c.value)<0?(a=m(n)?u(t,c.value,null):u(t,c.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return "  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return "   "+t})).join("\n")):a=t.stylize("[Circular]","special")),y(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"));}return s+": "+a}function d(t){return Array.isArray(t)}function h(t){return "boolean"==typeof t}function m(t){return null===t}function g(t){return "number"==typeof t}function v(t){return "string"==typeof t}function y(t){return void 0===t}function b(t){return _(t)&&"[object RegExp]"===O(t)}function _(t){return "object"==typeof t&&null!==t}function w(t){return _(t)&&"[object Date]"===O(t)}function x(t){return _(t)&&("[object Error]"===O(t)||t instanceof Error)}function C(t){return "function"==typeof t}function O(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(y(i)&&(i=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!s[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){var n=r.pid;s[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r);};}else s[t]=function(){};return s[t]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=h,e.isNull=m,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=v,e.isSymbol=function(t){return "symbol"==typeof t},e.isUndefined=y,e.isRegExp=b,e.isObject=_,e.isDate=w,e.isError=x,e.isFunction=C,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(384);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var t=new Date,e=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":");return [t.getDate(),j[t.getMonth()],e].join(" ")}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",A(),e.format.apply(e,arguments));},e.inherits=n(717),e._extend=function(t,e){if(!e||!_(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]});},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});};var r={};return (()=>{n.r(r),n.d(r,{LSPluginUser:()=>Co,setupPluginUserInstance:()=>Oo});var t=n(520);n(856);const e=function(){this.__data__=[],this.size=0;};const o=function(t,e){return t===e||t!=t&&e!=e};const i=function(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return -1};var s=Array.prototype.splice;const a=function(t){var e=this.__data__,n=i(e,t);return !(n<0)&&(n==e.length-1?e.pop():s.call(e,n,1),--this.size,!0)};const c=function(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]};const l=function(t){return i(this.__data__,t)>-1};const u=function(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function f(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}f.prototype.clear=e,f.prototype.delete=a,f.prototype.get=c,f.prototype.has=l,f.prototype.set=u;const p=f;const d=function(){this.__data__=new p,this.size=0;};const h=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};const m=function(t){return this.__data__.get(t)};const g=function(t){return this.__data__.has(t)};const v="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;var y="object"==typeof self&&self&&self.Object===Object&&self;const b=v||y||Function("return this")();const _=b.Symbol;var w=Object.prototype,x=w.hasOwnProperty,C=w.toString,O=_?_.toStringTag:void 0;const S=function(t){var e=x.call(t,O),n=t[O];try{t[O]=void 0;var r=!0;}catch(t){}var o=C.call(t);return r&&(e?t[O]=n:delete t[O]),o};var j=Object.prototype.toString;const A=function(t){return j.call(t)};var k=_?_.toStringTag:void 0;const E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?S(t):A(t)};const T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};const I=function(t){if(!T(t))return !1;var e=E(t);return "[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};const F=b["__core-js_shared__"];var L,N=(L=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";const M=function(t){return !!N&&N in t};var P=Function.prototype.toString;const R=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return ""};var D=/^\[object .+?Constructor\]$/,U=Function.prototype,$=Object.prototype,z=U.toString,H=$.hasOwnProperty,B=RegExp("^"+z.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const q=function(t){return !(!T(t)||M(t))&&(I(t)?B:D).test(R(t))};const W=function(t,e){return null==t?void 0:t[e]};const G=function(t,e){var n=W(t,e);return q(n)?n:void 0};const J=G(b,"Map");const Z=G(Object,"create");const V=function(){this.__data__=Z?Z(null):{},this.size=0;};const K=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var Y=Object.prototype.hasOwnProperty;const Q=function(t){var e=this.__data__;if(Z){var n=e[t];return "__lodash_hash_undefined__"===n?void 0:n}return Y.call(e,t)?e[t]:void 0};var X=Object.prototype.hasOwnProperty;const tt=function(t){var e=this.__data__;return Z?void 0!==e[t]:X.call(e,t)};const et=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Z&&void 0===e?"__lodash_hash_undefined__":e,this};function nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}nt.prototype.clear=V,nt.prototype.delete=K,nt.prototype.get=Q,nt.prototype.has=tt,nt.prototype.set=et;const rt=nt;const ot=function(){this.size=0,this.__data__={hash:new rt,map:new(J||p),string:new rt};};const it=function(t){var e=typeof t;return "string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const st=function(t,e){var n=t.__data__;return it(e)?n["string"==typeof e?"string":"hash"]:n.map};const at=function(t){var e=st(this,t).delete(t);return this.size-=e?1:0,e};const ct=function(t){return st(this,t).get(t)};const lt=function(t){return st(this,t).has(t)};const ut=function(t,e){var n=st(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}ft.prototype.clear=ot,ft.prototype.delete=at,ft.prototype.get=ct,ft.prototype.has=lt,ft.prototype.set=ut;const pt=ft;const dt=function(t,e){var n=this.__data__;if(n instanceof p){var r=n.__data__;if(!J||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new pt(r);}return n.set(t,e),this.size=n.size,this};function ht(t){var e=this.__data__=new p(t);this.size=e.size;}ht.prototype.clear=d,ht.prototype.delete=h,ht.prototype.get=m,ht.prototype.has=g,ht.prototype.set=dt;const mt=ht;const gt=function(){try{var t=G(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();const vt=function(t,e,n){"__proto__"==e&&gt?gt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n;};const yt=function(t,e,n){(void 0!==n&&!o(t[e],n)||void 0===n&&!(e in t))&&vt(t,e,n);};const bt=function(t){return function(e,n,r){for(var o=-1,i=Object(e),s=r(e),a=s.length;a--;){var c=s[t?a:++o];if(!1===n(i[c],c,i))break}return e}}();var _t=exports&&!exports.nodeType&&exports,wt=_t&&"object"=='object'&&module&&!module.nodeType&&module,xt=wt&&wt.exports===_t?b.Buffer:void 0,Ct=xt?xt.allocUnsafe:void 0;const Ot=function(t,e){if(e)return t.slice();var n=t.length,r=Ct?Ct(n):new t.constructor(n);return t.copy(r),r};const St=b.Uint8Array;const jt=function(t){var e=new t.constructor(t.byteLength);return new St(e).set(new St(t)),e};const At=function(t,e){var n=e?jt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};const kt=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e};var Et=Object.create;const Tt=function(){function t(){}return function(e){if(!T(e))return {};if(Et)return Et(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const It=function(t,e){return function(n){return t(e(n))}};const Ft=It(Object.getPrototypeOf,Object);var Lt=Object.prototype;const Nt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Lt)};const Mt=function(t){return "function"!=typeof t.constructor||Nt(t)?{}:Tt(Ft(t))};const Pt=function(t){return null!=t&&"object"==typeof t};const Rt=function(t){return Pt(t)&&"[object Arguments]"==E(t)};var Dt=Object.prototype,Ut=Dt.hasOwnProperty,$t=Dt.propertyIsEnumerable;const zt=Rt(function(){return arguments}())?Rt:function(t){return Pt(t)&&Ut.call(t,"callee")&&!$t.call(t,"callee")};const Ht=Array.isArray;const Bt=function(t){return "number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};const qt=function(t){return null!=t&&Bt(t.length)&&!I(t)};const Wt=function(t){return Pt(t)&&qt(t)};const Gt=function(){return !1};var Jt=exports&&!exports.nodeType&&exports,Zt=Jt&&"object"=='object'&&module&&!module.nodeType&&module,Vt=Zt&&Zt.exports===Jt?b.Buffer:void 0;const Kt=(Vt?Vt.isBuffer:void 0)||Gt;var Yt=Function.prototype,Qt=Object.prototype,Xt=Yt.toString,te=Qt.hasOwnProperty,ee=Xt.call(Object);const ne=function(t){if(!Pt(t)||"[object Object]"!=E(t))return !1;var e=Ft(t);if(null===e)return !0;var n=te.call(e,"constructor")&&e.constructor;return "function"==typeof n&&n instanceof n&&Xt.call(n)==ee};var re={};re["[object Float32Array]"]=re["[object Float64Array]"]=re["[object Int8Array]"]=re["[object Int16Array]"]=re["[object Int32Array]"]=re["[object Uint8Array]"]=re["[object Uint8ClampedArray]"]=re["[object Uint16Array]"]=re["[object Uint32Array]"]=!0,re["[object Arguments]"]=re["[object Array]"]=re["[object ArrayBuffer]"]=re["[object Boolean]"]=re["[object DataView]"]=re["[object Date]"]=re["[object Error]"]=re["[object Function]"]=re["[object Map]"]=re["[object Number]"]=re["[object Object]"]=re["[object RegExp]"]=re["[object Set]"]=re["[object String]"]=re["[object WeakMap]"]=!1;const oe=function(t){return Pt(t)&&Bt(t.length)&&!!re[E(t)]};const ie=function(t){return function(e){return t(e)}};var se=exports&&!exports.nodeType&&exports,ae=se&&"object"=='object'&&module&&!module.nodeType&&module,ce=ae&&ae.exports===se&&v.process,le=function(){try{var t=ae&&ae.require&&ae.require("util").types;return t||ce&&ce.binding&&ce.binding("util")}catch(t){}}();var ue=le&&le.isTypedArray;const fe=ue?ie(ue):oe;const pe=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var de=Object.prototype.hasOwnProperty;const he=function(t,e,n){var r=t[e];de.call(t,e)&&o(r,n)&&(void 0!==n||e in t)||vt(t,e,n);};const me=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=r?r(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?vt(n,a,c):he(n,a,c);}return n};const ge=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r};var ve=/^(?:0|[1-9]\d*)$/;const ye=function(t,e){var n=typeof t;return !!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&ve.test(t))&&t>-1&&t%1==0&&t<e};var be=Object.prototype.hasOwnProperty;const _e=function(t,e){var n=Ht(t),r=!n&&zt(t),o=!n&&!r&&Kt(t),i=!n&&!r&&!o&&fe(t),s=n||r||o||i,a=s?ge(t.length,String):[],c=a.length;for(var l in t)!e&&!be.call(t,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ye(l,c))||a.push(l);return a};const we=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e};var xe=Object.prototype.hasOwnProperty;const Ce=function(t){if(!T(t))return we(t);var e=Nt(t),n=[];for(var r in t)("constructor"!=r||!e&&xe.call(t,r))&&n.push(r);return n};const Oe=function(t){return qt(t)?_e(t,!0):Ce(t)};const Se=function(t){return me(t,Oe(t))};const je=function(t,e,n,r,o,i,s){var a=pe(t,n),c=pe(e,n),l=s.get(c);if(l)yt(t,n,l);else {var u=i?i(a,c,n+"",t,e,s):void 0,f=void 0===u;if(f){var p=Ht(c),d=!p&&Kt(c),h=!p&&!d&&fe(c);u=c,p||d||h?Ht(a)?u=a:Wt(a)?u=kt(a):d?(f=!1,u=Ot(c,!0)):h?(f=!1,u=At(c,!0)):u=[]:ne(c)||zt(c)?(u=a,zt(a)?u=Se(a):T(a)&&!I(a)||(u=Mt(c))):f=!1;}f&&(s.set(c,u),o(u,c,r,i,s),s.delete(c)),yt(t,n,u);}};const Ae=function t(e,n,r,o,i){e!==n&&bt(n,(function(s,a){if(i||(i=new mt),T(s))je(e,n,a,r,t,o,i);else {var c=o?o(pe(e,a),s,a+"",e,n,i):void 0;void 0===c&&(c=s),yt(e,a,c);}}),Oe);};const ke=function(t){return t};const Ee=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)};var Te=Math.max;const Ie=function(t,e,n){return e=Te(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=Te(r.length-e,0),s=Array(i);++o<i;)s[o]=r[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=r[o];return a[e]=n(s),Ee(t,this,a)}};const Fe=function(t){return function(){return t}};const Le=gt?function(t,e){return gt(t,"toString",{configurable:!0,enumerable:!1,value:Fe(e),writable:!0})}:ke;var Ne=Date.now;const Me=function(t){var e=0,n=0;return function(){var r=Ne(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Le);const Pe=function(t,e){return Me(Ie(t,e,ke),t+"")};const Re=function(t,e,n){if(!T(n))return !1;var r=typeof e;return !!("number"==r?qt(n)&&ye(e,n.length):"string"==r&&e in n)&&o(n[e],t)};const De=function(t){return Pe((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,s&&Re(n[0],n[1],s)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var a=n[r];a&&t(e,a,r,i);}return e}))}((function(t,e,n){Ae(t,e,n);}));var Ue=function(){return Ue=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Ue.apply(this,arguments)};function $e(t){return t.toLowerCase()}var ze=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],He=/[^A-Z0-9]+/gi;function Be(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}function qe(t,e){return void 0===e&&(e={}),function(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,r=void 0===n?ze:n,o=e.stripRegexp,i=void 0===o?He:o,s=e.transform,a=void 0===s?$e:s,c=e.delimiter,l=void 0===c?" ":c,u=Be(Be(t,r,"$1\0$2"),i,"\0"),f=0,p=u.length;"\0"===u.charAt(f);)f++;for(;"\0"===u.charAt(p-1);)p--;return u.slice(f,p).split("\0").map(a).join(l)}(t,Ue({delimiter:"."},e))}var We=n(729),Ge=n.n(We);function Je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const Ze="win32"===navigator.platform.toLowerCase()?t.win32:t.posix;const Ve=function(t,e){return void 0===e&&(e={}),qe(t,Ue({delimiter:"_"},e))};const Ke=De;class Ye extends(Ge()){constructor(t,e){super(),Je(this,"_tag",void 0),Je(this,"_opts",void 0),Je(this,"_logs",[]),this._tag=t,this._opts=e;}write(t,e,n){var r;null!=e&&e.length&&!0===e[e.length-1]&&(n=!0,e.pop());const o=e.reduce(((t,e)=>(e&&e instanceof Error?t+=`${e.message} ${e.stack}`:t+=e.toString(),t)),`[${this._tag}][${(new Date).toLocaleTimeString()}] `);var i;(this._logs.push([t,o]),n||null!==(r=this._opts)&&void 0!==r&&r.console)&&(null===(i=console)||void 0===i||i["ERROR"===t?"error":"debug"](`${t}: ${o}`));this.emit("change");}clear(){this._logs=[],this.emit("change");}info(...t){this.write("INFO",t);}error(...t){this.write("ERROR",t);}warn(...t){this.write("WARN",t);}setTag(t){this._tag=t;}toJSON(){return this._logs}}function Qe(t,...e){try{const n=new URL(t);if(!n.origin)throw new Error(null);const r=Ze.join(t.substr(n.origin.length),...e);return n.origin+r}catch(n){return Ze.join(t,...e)}}function Xe(t,e){let n,r,o=!1;const i=e=>n=>{t&&clearTimeout(t),e(n),o=!0;},s=new Promise(((o,s)=>{n=i(o),r=i(s),t&&(t=setTimeout((()=>r(new Error(`[deferred timeout] ${e}`))),t));}));return {created:Date.now(),setTag:t=>e=t,resolve:n,reject:r,promise:s,get settled(){return o}}}const tn=new Map;window.__injectedUIEffects=tn;var en=n(227),nn=n.n(en);function rn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const on="application/x-postmate-v1+json";let sn=0;const an={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},cn=(t,e)=>("string"!=typeof e||t.origin===e)&&(!!t.data&&(("object"!=typeof t.data||"postmate"in t.data)&&(t.data.type===on&&!!an[t.data.postmate])));class ln{constructor(t){rn(this,"parent",void 0),rn(this,"frame",void 0),rn(this,"child",void 0),rn(this,"events",{}),rn(this,"childOrigin",void 0),rn(this,"listener",void 0),this.parent=t.parent,this.frame=t.frame,this.child=t.child,this.childOrigin=t.childOrigin,this.listener=t=>{if(!cn(t,this.childOrigin))return !1;const{data:e,name:n}=((t||{}).data||{}).value||{};"emit"===t.data.postmate&&n in this.events&&this.events[n].forEach((t=>{t.call(this,e);}));},this.parent.addEventListener("message",this.listener,!1);}get(t,...e){return new Promise((n=>{const r=++sn,o=t=>{t.data.uid===r&&"reply"===t.data.postmate&&(this.parent.removeEventListener("message",o,!1),n(t.data.value));};this.parent.addEventListener("message",o,!1),this.child.postMessage({postmate:"request",type:on,property:t,args:e,uid:r},this.childOrigin);}))}call(t,e){this.child.postMessage({postmate:"call",type:on,property:t,data:e},this.childOrigin);}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e);}destroy(){window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame);}}class un{constructor(t){rn(this,"model",void 0),rn(this,"parent",void 0),rn(this,"parentOrigin",void 0),rn(this,"child",void 0),this.model=t.model,this.parent=t.parent,this.parentOrigin=t.parentOrigin,this.child=t.child,this.child.addEventListener("message",(t=>{if(!cn(t,this.parentOrigin))return;const{property:e,uid:n,data:r,args:o}=t.data;"call"!==t.data.postmate?((t,e,n)=>{const r="function"==typeof t[e]?t[e].apply(null,n):t[e];return Promise.resolve(r)})(this.model,e,o).then((r=>{t.source.postMessage({property:e,postmate:"reply",type:on,uid:n,value:r},t.origin);})):e in this.model&&"function"==typeof this.model[e]&&this.model[e](r);}));}emit(t,e){this.parent.postMessage({postmate:"emit",type:on,value:{name:t,data:e}},this.parentOrigin);}}class fn{constructor(t){rn(this,"container",void 0),rn(this,"parent",void 0),rn(this,"frame",void 0),rn(this,"child",void 0),rn(this,"childOrigin",void 0),rn(this,"url",void 0),rn(this,"model",void 0),this.container=t.container,this.url=t.url,this.parent=window,this.frame=document.createElement("iframe"),t.id&&(this.frame.id=t.id),t.name&&(this.frame.name=t.name),this.frame.classList.add.apply(this.frame.classList,t.classListArray||[]),this.container.appendChild(this.frame),this.child=this.frame.contentWindow,this.model=t.model||{};}sendHandshake(t){const e=(t=>{const e=document.createElement("a");e.href=t;const n=e.protocol.length>4?e.protocol:window.location.protocol,r=e.host.length?"80"===e.port||"443"===e.port?e.hostname:e.host:window.location.host;return e.origin||`${n}//${r}`})(t=t||this.url);let n,r=0;return new Promise(((o,i)=>{const s=t=>!!cn(t,e)&&("handshake-reply"===t.data.postmate?(clearInterval(n),this.parent.removeEventListener("message",s,!1),this.childOrigin=t.origin,o(new ln(this))):i("Failed handshake"));this.parent.addEventListener("message",s,!1);const a=()=>{r++,this.child.postMessage({postmate:"handshake",type:on,model:this.model},e),5===r&&clearInterval(n);};this.frame.addEventListener("load",(()=>{a(),n=setInterval(a,500);})),this.frame.src=t;}))}destroy(){this.frame.parentNode.removeChild(this.frame);}}rn(fn,"debug",!1),rn(fn,"Model",void 0);class pn{constructor(t){rn(this,"child",void 0),rn(this,"model",void 0),rn(this,"parent",void 0),rn(this,"parentOrigin",void 0),this.child=window,this.model=t,this.parent=this.child.parent;}sendHandshakeReply(){return new Promise(((t,e)=>{const n=r=>{if(r.data.postmate){if("handshake"===r.data.postmate){this.child.removeEventListener("message",n,!1),r.source.postMessage({postmate:"handshake-reply",type:on},r.origin),this.parentOrigin=r.origin;const e=r.data.model;return e&&Object.keys(e).forEach((t=>{this.model[t]=e[t];})),t(new un(this))}return e("Handshake Reply Failed")}};this.child.addEventListener("message",n,!1);}))}}function dn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const{importHTML:hn,createSandboxContainer:mn}=window.QSandbox||{};function gn(t,e){return t.startsWith("http")?fetch(t,e):(t=t.replace("file://",""),new Promise((async(e,n)=>{try{const n=await window.apis.doAction(["readFile",t]);e({text:()=>n});}catch(t){console.error(t),n(t);}})))}class vn extends(Ge()){constructor(t){super(),dn(this,"_pluginLocal",void 0),dn(this,"_frame",void 0),dn(this,"_root",void 0),dn(this,"_loaded",!1),dn(this,"_unmountFns",[]),this._pluginLocal=t,t._dispose((()=>{this._unmount();}));}async load(){const{name:t,entry:e}=this._pluginLocal.options;if(this.loaded||!e)return;const{template:n,execScripts:r}=await hn(e,{fetch:gn});this._mount(n,document.body);const o=mn(t,{elementGetter:()=>{var t;return null===(t=this._root)||void 0===t?void 0:t.firstChild}}).instance.proxy;o.__shadow_mode__=!0,o.LSPluginLocal=this._pluginLocal,o.LSPluginShadow=this,o.LSPluginUser=o.logseq=new Co(this._pluginLocal.toJSON(),this._pluginLocal.caller);const i=await r(o,!0);this._unmountFns.push(i.unmount),this._loaded=!0;}_mount(t,e){const n=this._frame=document.createElement("div");n.classList.add("lsp-shadow-sandbox"),n.id=this._pluginLocal.id,this._root=n.attachShadow({mode:"open"}),this._root.innerHTML=`<div>${t}</div>`,e.appendChild(n),this.emit("mounted");}_unmount(){for(const t of this._unmountFns)t&&t.call(null);}destroy(){var t,e;null===(t=this.frame)||void 0===t||null===(e=t.parentNode)||void 0===e||e.removeChild(this.frame);}get loaded(){return this._loaded}get document(){var t;return null===(t=this._root)||void 0===t?void 0:t.firstChild}get frame(){return this._frame}}function yn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const bn=nn()("LSPlugin:caller"),_n="#await#response#",wn="#lspmsg#",xn="#lspmsg#error#",Cn=t=>`#lspmsg#${t}`;class On extends(Ge()){constructor(t){super(),yn(this,"_pluginLocal",void 0),yn(this,"_connected",!1),yn(this,"_parent",void 0),yn(this,"_child",void 0),yn(this,"_shadow",void 0),yn(this,"_status",void 0),yn(this,"_userModel",{}),yn(this,"_call",void 0),yn(this,"_callUserModel",void 0),yn(this,"_debugTag",""),this._pluginLocal=t,t&&(this._debugTag=t.debugTag);}async connectToChild(){if(this._connected)return;const{shadow:t}=this._pluginLocal;t?await this._setupShadowSandbox():await this._setupIframeSandbox();}async connectToParent(t={}){if(this._connected)return;const e=this,n=null!=this._pluginLocal;let o=0;const i=new Map,s=Xe(6e4),a=this._extendUserModel({"#lspmsg#ready#":async t=>{a[Cn(null==t?void 0:t.pid)]=({type:t,payload:n})=>{bn(`[host (_call) -> *user] ${this._debugTag}`,t,n),e.emit(t,n);},await s.resolve();},"#lspmsg#beforeunload#":async t=>{const n=Xe(1e4);e.emit("beforeunload",Object.assign({actor:n},t)),await n.promise;},"#lspmsg#settings#":async({type:t,payload:n})=>{e.emit("settings:changed",n);},[wn]:async({ns:t,type:n,payload:r})=>{bn(`[host (async) -> *user] ${this._debugTag} ns=${t} type=${n}`,r),t&&t.startsWith("hook")?e.emit(`${t}:${n}`,r):e.emit(n,r);},"#lspmsg#reply#":({_sync:t,result:e})=>{if(bn(`[sync host -> *user] #${t}`,e),i.has(t)){const n=i.get(t);n&&(null!=e&&e.hasOwnProperty(xn)?n.reject(e[xn]):n.resolve(e),i.delete(t));}},...t});var c;if(n)return await s.promise,JSON.parse(JSON.stringify(null===(c=this._pluginLocal)||void 0===c?void 0:c.toJSON()));const l=new pn(a).sendHandshakeReply();return this._status="pending",await l.then((t=>{this._child=t,this._connected=!0,this._call=async(e,n={},r)=>{if(r){const t=++o;i.set(t,r),n._sync=t,r.setTag(`async call #${t}`),bn(`async call #${t}`);}return t.emit(Cn(a.baseInfo.id),{type:e,payload:n}),null==r?void 0:r.promise},this._callUserModel=async(t,e)=>{try{a[t](e);}catch(e){bn(`[model method] #${t} not existed`);}},setInterval((()=>{if(i.size>100)for(const[t,e]of i)e.settled&&i.delete(t);}),18e5);})).finally((()=>{this._status=void 0;})),await s.promise,a.baseInfo}async call(t,e={}){var n;return null===(n=this._call)||void 0===n?void 0:n.call(this,t,e)}async callAsync(t,e={}){var n;const r=Xe(1e4);return null===(n=this._call)||void 0===n?void 0:n.call(this,t,e,r)}async callUserModel(t,...e){var n;return null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[t,...e])}async callUserModelAsync(t,...e){var n;return t=`${_n}${t}`,null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[t,...e])}async _setupIframeSandbox(){const t=this._pluginLocal,e=t.id,n=`${e}_lsp_main`,r=new URL(t.options.entry);r.searchParams.set("__v__",t.options.version);const o=document.querySelector(`#${n}`);o&&o.parentElement.removeChild(o);const i=document.createElement("div");i.classList.add("lsp-iframe-sandbox-container"),i.id=n,i.dataset.pid=e;try{var s;const t=null===(s=await this._pluginLocal._loadLayoutsData())||void 0===s?void 0:s.$$0;if(t){i.dataset.inited_layout="true";let{width:e,height:n,left:r,top:o,vw:s,vh:a}=t;r=Math.max(r,0),r="number"==typeof s?`${Math.min(100*r/s,99)}%`:`${r}px`,o=Math.max(o,45),o="number"==typeof a?`${Math.min(100*o/a,99)}%`:`${o}px`,Object.assign(i.style,{width:e+"px",height:n+"px",left:r,top:o});}}catch(t){console.error("[Restore Layout Error]",t);}document.body.appendChild(i);const a=new fn({id:e+"_iframe",container:i,url:r.href,classListArray:["lsp-iframe-sandbox"],model:{baseInfo:JSON.parse(JSON.stringify(t.toJSON()))}});let c,l=a.sendHandshake();return this._status="pending",new Promise(((e,n)=>{c=setTimeout((()=>{n(new Error("handshake Timeout")),a.destroy();}),4e3),l.then((n=>{this._parent=n,this._connected=!0,this.emit("connected"),n.on(Cn(t.id),(({type:t,payload:e})=>{var n,r;bn("[user -> *host] ",t,e),null===(n=this._pluginLocal)||void 0===n||n.emit(t,e||{}),null===(r=this._pluginLocal)||void 0===r||r.caller.emit(t,e||{});})),this._call=async(...e)=>{await n.call(Cn(t.id),{type:e[0],payload:Object.assign(e[1]||{},{$$pid:t.id})});},this._callUserModel=async(t,...e)=>{if(t.startsWith(_n))return await n.get(t.replace(_n,""),...e);n.call(t,null==e?void 0:e[0]);},e(null);})).catch((t=>{n(t);})).finally((()=>{clearTimeout(c);}));})).catch((t=>{throw bn("[iframe sandbox] error",t),t})).finally((()=>{this._status=void 0;}))}async _setupShadowSandbox(){const t=this._pluginLocal,e=this._shadow=new vn(t);try{this._status="pending",await e.load(),this._connected=!0,this.emit("connected"),this._call=async(e,n={},r)=>{var o;return r&&(n.actor=r),null===(o=this._pluginLocal)||void 0===o||o.emit(e,Object.assign(n,{$$pid:t.id})),null==r?void 0:r.promise},this._callUserModel=async(...t)=>{var e;let n=t[0];null!==(e=n)&&void 0!==e&&e.startsWith(_n)&&(n=n.replace(_n,""));const r=t[1]||{},o=this._userModel[n];"function"==typeof o&&await o.call(null,r);};}catch(t){throw bn("[shadow sandbox] error",t),t}finally{this._status=void 0;}}_extendUserModel(t){return Object.assign(this._userModel,t)}_getSandboxIframeContainer(){var t;return null===(t=this._parent)||void 0===t?void 0:t.frame.parentNode}_getSandboxShadowContainer(){var t;return null===(t=this._shadow)||void 0===t?void 0:t.frame.parentNode}_getSandboxIframeRoot(){var t;return null===(t=this._parent)||void 0===t?void 0:t.frame}_getSandboxShadowRoot(){var t;return null===(t=this._shadow)||void 0===t?void 0:t.frame}set debugTag(t){this._debugTag=t;}async destroy(){var t;let e=null;this._parent&&(e=this._getSandboxIframeContainer(),await this._parent.destroy()),this._shadow&&(e=this._getSandboxShadowContainer(),this._shadow.destroy()),null===(t=e)||void 0===t||t.parentNode.removeChild(e);}}function Sn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class jn{constructor(t,e){Sn(this,"ctx",void 0),Sn(this,"opts",void 0),this.ctx=t,this.opts=e;}get ctxId(){return this.ctx.baseInfo.id}setItem(t,e){var n;return this.ctx.caller.callAsync("api:call",{method:"write-plugin-storage-file",args:[this.ctxId,t,e,null===(n=this.opts)||void 0===n?void 0:n.assets]})}getItem(t){var e;return this.ctx.caller.callAsync("api:call",{method:"read-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}removeItem(t){var e;return this.ctx.caller.call("api:call",{method:"unlink-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}allKeys(){var t;return this.ctx.caller.callAsync("api:call",{method:"list-plugin-storage-files",args:[this.ctxId,null===(t=this.opts)||void 0===t?void 0:t.assets]})}clear(){var t;return this.ctx.caller.call("api:call",{method:"clear-plugin-storage-files",args:[this.ctxId,null===(t=this.opts)||void 0===t?void 0:t.assets]})}hasItem(t){var e;return this.ctx.caller.callAsync("api:call",{method:"exist-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}}class An{constructor(t){var e,n,r;r=void 0,(n="ctx")in(e=this)?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,this.ctx=t;}get React(){return this.ensureHostScope().React}get ReactDOM(){return this.ensureHostScope().ReactDOM}get pluginLocal(){return this.ensureHostScope().LSPluginCore.ensurePlugin(this.ctx.baseInfo.id)}invokeExperMethod(t,...e){var n,r;const o=this.ensureHostScope();return t=null===(n=Ve(t))||void 0===n?void 0:n.toLowerCase(),null===(r=o.logseq.api["exper_"+t])||void 0===r?void 0:r.apply(o,e)}async loadScripts(...t){(t=t.map((t=>null!=t&&t.startsWith("http")?t:this.ctx.resolveResourceFullUrl(t)))).unshift(this.ctx.baseInfo.id),await this.invokeExperMethod("loadScripts",...t);}registerFencedCodeRenderer(t,e){return this.ensureHostScope().logseq.api.exper_register_fenced_code_renderer(this.ctx.baseInfo.id,t,e)}registerExtensionsEnhancer(t,e){const n=this.ensureHostScope();if("katex"===t)n.katex&&e(n.katex).catch(console.error);return n.logseq.api.exper_register_extensions_enhancer(this.ctx.baseInfo.id,t,e)}ensureHostScope(){if(window===top)throw new Error("Can not access host scope!");return top}}function kn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const En=t=>`task_callback_${t}`;class Tn{constructor(t,e,n={}){kn(this,"_client",void 0),kn(this,"_requestId",void 0),kn(this,"_requestOptions",void 0),kn(this,"_promise",void 0),kn(this,"_aborted",!1),this._client=t,this._requestId=e,this._requestOptions=n,this._promise=new Promise(((t,e)=>{if(!this._requestId)return e(null);this._client.once(En(this._requestId),(n=>{n&&n instanceof Error?e(n):t(n);}));}));const{success:r,fail:o,final:i}=this._requestOptions;this._promise.then((t=>{null==r||r(t);})).catch((t=>{null==o||o(t);})).finally((()=>{null==i||i();}));}abort(){this._requestOptions.abortable&&!this._aborted&&(this._client.ctx._execCallableAPI("http_request_abort",this._requestId),this._aborted=!0);}get promise(){return this._promise}get client(){return this._client}get requestId(){return this._requestId}}class In extends We.EventEmitter{constructor(t){super(),kn(this,"_ctx",void 0),this._ctx=t,this.ctx.caller.on("#lsp#request#callback",(t=>{const e=null==t?void 0:t.requestId;e&&this.emit(En(e),null==t?void 0:t.payload);}));}static createRequestTask(t,e,n){return new Tn(t,e,n)}async _request(t){const e=this.ctx.baseInfo.id,{success:n,fail:r,final:o,...i}=t,s=this.ctx.Experiments.invokeExperMethod("request",e,i),a=In.createRequestTask(this.ctx.Request,s,t);return i.abortable?a:a.promise}get ctx(){return this._ctx}}const Fn=It(Object.keys,Object);var Ln=Object.prototype.hasOwnProperty;const Nn=function(t){if(!Nt(t))return Fn(t);var e=[];for(var n in Object(t))Ln.call(t,n)&&"constructor"!=n&&e.push(n);return e};const Mn=function(t){return qt(t)?_e(t):Nn(t)};const Pn=function(t,e){return t&&bt(t,e,Mn)};const Rn=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};const Dn=function(t){return this.__data__.has(t)};function Un(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new pt;++e<n;)this.add(t[e]);}Un.prototype.add=Un.prototype.push=Rn,Un.prototype.has=Dn;const $n=Un;const zn=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return !0;return !1};const Hn=function(t,e){return t.has(e)};const Bn=function(t,e,n,r,o,i){var s=1&n,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return !1;var l=i.get(t),u=i.get(e);if(l&&u)return l==e&&u==t;var f=-1,p=!0,d=2&n?new $n:void 0;for(i.set(t,e),i.set(e,t);++f<a;){var h=t[f],m=e[f];if(r)var g=s?r(m,h,f,e,t,i):r(h,m,f,t,e,i);if(void 0!==g){if(g)continue;p=!1;break}if(d){if(!zn(e,(function(t,e){if(!Hn(d,e)&&(h===t||o(h,t,n,r,i)))return d.push(e)}))){p=!1;break}}else if(h!==m&&!o(h,m,n,r,i)){p=!1;break}}return i.delete(t),i.delete(e),p};const qn=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t];})),n};const Wn=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t;})),n};var Gn=_?_.prototype:void 0,Jn=Gn?Gn.valueOf:void 0;const Zn=function(t,e,n,r,i,s,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return !1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return !(t.byteLength!=e.byteLength||!s(new St(t),new St(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var c=qn;case"[object Set]":var l=1&r;if(c||(c=Wn),t.size!=e.size&&!l)return !1;var u=a.get(t);if(u)return u==e;r|=2,a.set(t,e);var f=Bn(c(t),c(e),r,i,s,a);return a.delete(t),f;case"[object Symbol]":if(Jn)return Jn.call(t)==Jn.call(e)}return !1};const Vn=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};const Kn=function(t,e,n){var r=e(t);return Ht(t)?r:Vn(r,n(t))};const Yn=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var s=t[n];e(s,n,t)&&(i[o++]=s);}return i};const Qn=function(){return []};var Xn=Object.prototype.propertyIsEnumerable,tr=Object.getOwnPropertySymbols;const er=tr?function(t){return null==t?[]:(t=Object(t),Yn(tr(t),(function(e){return Xn.call(t,e)})))}:Qn;const nr=function(t){return Kn(t,Mn,er)};var rr=Object.prototype.hasOwnProperty;const or=function(t,e,n,r,o,i){var s=1&n,a=nr(t),c=a.length;if(c!=nr(e).length&&!s)return !1;for(var l=c;l--;){var u=a[l];if(!(s?u in e:rr.call(e,u)))return !1}var f=i.get(t),p=i.get(e);if(f&&p)return f==e&&p==t;var d=!0;i.set(t,e),i.set(e,t);for(var h=s;++l<c;){var m=t[u=a[l]],g=e[u];if(r)var v=s?r(g,m,u,e,t,i):r(m,g,u,t,e,i);if(!(void 0===v?m===g||o(m,g,n,r,i):v)){d=!1;break}h||(h="constructor"==u);}if(d&&!h){var y=t.constructor,b=e.constructor;y==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(d=!1);}return i.delete(t),i.delete(e),d};const ir=G(b,"DataView");const sr=G(b,"Promise");const ar=G(b,"Set");const cr=G(b,"WeakMap");var lr="[object Map]",ur="[object Promise]",fr="[object Set]",pr="[object WeakMap]",dr="[object DataView]",hr=R(ir),mr=R(J),gr=R(sr),vr=R(ar),yr=R(cr),br=E;(ir&&br(new ir(new ArrayBuffer(1)))!=dr||J&&br(new J)!=lr||sr&&br(sr.resolve())!=ur||ar&&br(new ar)!=fr||cr&&br(new cr)!=pr)&&(br=function(t){var e=E(t),n="[object Object]"==e?t.constructor:void 0,r=n?R(n):"";if(r)switch(r){case hr:return dr;case mr:return lr;case gr:return ur;case vr:return fr;case yr:return pr}return e});const _r=br;var wr="[object Arguments]",xr="[object Array]",Cr="[object Object]",Or=Object.prototype.hasOwnProperty;const Sr=function(t,e,n,r,o,i){var s=Ht(t),a=Ht(e),c=s?xr:_r(t),l=a?xr:_r(e),u=(c=c==wr?Cr:c)==Cr,f=(l=l==wr?Cr:l)==Cr,p=c==l;if(p&&Kt(t)){if(!Kt(e))return !1;s=!0,u=!1;}if(p&&!u)return i||(i=new mt),s||fe(t)?Bn(t,e,n,r,o,i):Zn(t,e,c,n,r,o,i);if(!(1&n)){var d=u&&Or.call(t,"__wrapped__"),h=f&&Or.call(e,"__wrapped__");if(d||h){var m=d?t.value():t,g=h?e.value():e;return i||(i=new mt),o(m,g,n,r,i)}}return !!p&&(i||(i=new mt),or(t,e,n,r,o,i))};const jr=function t(e,n,r,o,i){return e===n||(null==e||null==n||!Pt(e)&&!Pt(n)?e!=e&&n!=n:Sr(e,n,r,o,t,i))};const Ar=function(t,e,n,r){var o=n.length,i=o,s=!r;if(null==t)return !i;for(t=Object(t);o--;){var a=n[o];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return !1}for(;++o<i;){var c=(a=n[o])[0],l=t[c],u=a[1];if(s&&a[2]){if(void 0===l&&!(c in t))return !1}else {var f=new mt;if(r)var p=r(l,u,c,t,e,f);if(!(void 0===p?jr(u,l,3,r,f):p))return !1}}return !0};const kr=function(t){return t==t&&!T(t)};const Er=function(t){for(var e=Mn(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,kr(o)];}return e};const Tr=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};const Ir=function(t){var e=Er(t);return 1==e.length&&e[0][2]?Tr(e[0][0],e[0][1]):function(n){return n===t||Ar(n,t,e)}};const Fr=function(t){return "symbol"==typeof t||Pt(t)&&"[object Symbol]"==E(t)};var Lr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nr=/^\w*$/;const Mr=function(t,e){if(Ht(t))return !1;var n=typeof t;return !("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Fr(t))||(Nr.test(t)||!Lr.test(t)||null!=e&&t in Object(e))};function Pr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var s=t.apply(this,r);return n.cache=i.set(o,s)||i,s};return n.cache=new(Pr.Cache||pt),n}Pr.Cache=pt;const Rr=Pr;var Dr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ur=/\\(\\)?/g;const $r=function(t){var e=Rr(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Dr,(function(t,n,r,o){e.push(r?o.replace(Ur,"$1"):n||t);})),e}));const zr=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var Hr=_?_.prototype:void 0,Br=Hr?Hr.toString:void 0;const qr=function t(e){if("string"==typeof e)return e;if(Ht(e))return zr(e,t)+"";if(Fr(e))return Br?Br.call(e):"";var n=e+"";return "0"==n&&1/e==-Infinity?"-0":n};const Wr=function(t){return null==t?"":qr(t)};const Gr=function(t,e){return Ht(t)?t:Mr(t,e)?[t]:$r(Wr(t))};const Jr=function(t){if("string"==typeof t||Fr(t))return t;var e=t+"";return "0"==e&&1/t==-Infinity?"-0":e};const Zr=function(t,e){for(var n=0,r=(e=Gr(e,t)).length;null!=t&&n<r;)t=t[Jr(e[n++])];return n&&n==r?t:void 0};const Vr=function(t,e,n){var r=null==t?void 0:Zr(t,e);return void 0===r?n:r};const Kr=function(t,e){return null!=t&&e in Object(t)};const Yr=function(t,e,n){for(var r=-1,o=(e=Gr(e,t)).length,i=!1;++r<o;){var s=Jr(e[r]);if(!(i=null!=t&&n(t,s)))break;t=t[s];}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Bt(o)&&ye(s,o)&&(Ht(t)||zt(t))};const Qr=function(t,e){return null!=t&&Yr(t,e,Kr)};const Xr=function(t,e){return Mr(t)&&kr(e)?Tr(Jr(t),e):function(n){var r=Vr(n,t);return void 0===r&&r===e?Qr(n,t):jr(e,r,3)}};const to=function(t){return function(e){return null==e?void 0:e[t]}};const eo=function(t){return function(e){return Zr(e,t)}};const no=function(t){return Mr(t)?to(Jr(t)):eo(t)};const ro=function(t){return "function"==typeof t?t:null==t?ke:"object"==typeof t?Ht(t)?Xr(t[0],t[1]):Ir(t):no(t)};const oo=function(t,e){var n={};return e=ro(e),Pn(t,(function(t,r,o){vt(n,e(t,r,o),t);})),n};function io(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class so{constructor(t,e){io(this,"ctx",void 0),io(this,"serviceHooks",void 0),this.ctx=t,this.serviceHooks=e,t._execCallableAPI("register-search-service",t.baseInfo.id,e.name,e.options);Object.entries({query:{f:"onQuery",args:["graph","q",!0],reply:!0,transformOutput:t=>(Ht(null==t?void 0:t.blocks)&&(t.blocks=t.blocks.map((t=>t&&oo(t,((t,e)=>`block/${e}`))))),t)},rebuildBlocksIndice:{f:"onIndiceInit",args:["graph","blocks"]},transactBlocks:{f:"onBlocksChanged",args:["graph","data"]},truncateBlocks:{f:"onIndiceReset",args:["graph"]},removeDb:{f:"onGraph",args:["graph"]}}).forEach((([n,r])=>{const o=(t=>`service:search:${t}:${e.name}`)(n);t.caller.on(o,(async n=>{if(I(null==e?void 0:e[r.f])){let i=null;try{i=await e[r.f].apply(e,(r.args||[]).map((t=>{if(n){if(!0===t)return n;if(n.hasOwnProperty(t)){const e=n[t];return delete n[t],e}}}))),r.transformOutput&&(i=r.transformOutput(i));}catch(t){console.error("[SearchService] ",t),i=t;}finally{r.reply&&t.caller.call(`${o}:reply`,i);}}}));}));}}function ao(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const co=Symbol.for("proxy-continue"),lo=nn()("LSPlugin:user"),uo=new Ye("",{console:!0});function fo(t,e,n){var r;if("function"!=typeof n)return !1;const{key:o,label:i,desc:s,palette:a,keybinding:c,extras:l}=e,u=`SimpleCommandHook${o}${++vo}`;this.Editor["on"+u](n),null===(r=this.caller)||void 0===r||r.call("api:call",{method:"register-plugin-simple-command",args:[this.baseInfo.id,[{key:o,label:i,type:t,desc:s,keybinding:c,extras:l},["editor/hook",u]],a]});}function po(t){return !("string"!=typeof(e=t)||36!==e.length||!/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(e))||(uo.error(`#${t} is not a valid UUID string.`),!1);var e;}let ho=null,mo=new Map;const go={async getInfo(t){return ho||(ho=await this._execCallableAPIAsync("get-app-info")),"string"==typeof t?ho[t]:ho},registerCommand:fo,registerSearchService(t){if(mo.has(t.name))throw new Error(`SearchService: #${t.name} has registered!`);mo.set(t.name,new so(this,t));},registerCommandPalette(t,e){const{key:n,label:r,keybinding:o}=t;return fo.call(this,"$palette$",{key:n,label:r,palette:!0,keybinding:o},e)},registerCommandShortcut(t,e){const{binding:n}=t,r="$shortcut$",o=r+Ve(n);return fo.call(this,r,{key:o,palette:!1,keybinding:t},e)},registerUIItem(t,e){var n;const r=this.baseInfo.id;null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-ui-item",args:[r,t,e]});},registerPageMenuItem(t,e){if("function"!=typeof e)return !1;const n=t+"_"+this.baseInfo.id,r=t;fo.call(this,"page-menu-item",{key:n,label:r},e);},onBlockRendererSlotted(t,e){if(!po(t))return;const n=this.baseInfo.id,r=`hook:editor:${Ve(`slot:${t}`)}`;return this.caller.on(r,e),this.App._installPluginHook(n,r),()=>{this.caller.off(r,e),this.App._uninstallPluginHook(n,r);}},invokeExternalPlugin(t,...e){var n;if(!(t=null===(n=t)||void 0===n?void 0:n.trim()))return;let[r,o]=t.split(".");if(!["models","commands"].includes(null==o?void 0:o.toLowerCase()))throw new Error("Type only support '.models' or '.commands' currently.");const i=t.replace(`${r}.${o}.`,"");if(!r||!o||!i)throw new Error(`Illegal type of #${t} to invoke external plugin.`);return this._execCallableAPIAsync("invoke_external_plugin_cmd",r,o.toLowerCase(),i,e)},setFullScreen(t){const e=(...t)=>this._callWin("setFullScreen",...t);"toggle"===t?this._callWin("isFullScreen").then((t=>{t?e():e(!0);})):t?e(!0):e();}};let vo=0;const yo={newBlockUUID(){return this._execCallableAPIAsync("new_block_uuid")},registerSlashCommand(t,e){var n;lo("Register slash command #",this.baseInfo.id,t,e),"function"==typeof e&&(e=[["editor/clear-current-slash",!1],["editor/restore-saved-cursor"],["editor/hook",e]]),e=e.map((t=>{const[e,...n]=t;if("editor/hook"===e){let r=n[0],o=()=>{var t;null===(t=this.caller)||void 0===t||t.callUserModel(r);};"function"==typeof r&&(o=r);const i=`SlashCommandHook${e}${++vo}`;t[1]=i,this.Editor["on"+i](o);}return t})),null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-slash-command",args:[this.baseInfo.id,[t,e]]});},registerBlockContextMenuItem(t,e){if("function"!=typeof e)return !1;const n=t+"_"+this.baseInfo.id;fo.call(this,"block-context-menu-item",{key:n,label:t},e);},registerHighlightContextMenuItem(t,e,n){if("function"!=typeof e)return !1;const r=t+"_"+this.baseInfo.id;fo.call(this,"highlight-context-menu-item",{key:r,label:t,extras:n},e);},scrollToBlockInPage(t,e,n){const r="block-content-"+e;null!=n&&n.replaceState?this.App.replaceState("page",{name:t},{anchor:r}):this.App.pushState("page",{name:t},{anchor:r});}},bo={onBlockChanged(t,e){if(!po(t))return;const n=this.baseInfo.id,r=`hook:db:${Ve(`block:${t}`)}`,o=({block:n,txData:r,txMeta:o})=>{n.uuid===t&&e(n,r,o);};return this.caller.on(r,o),this.App._installPluginHook(n,r),()=>{this.caller.off(r,o),this.App._uninstallPluginHook(n,r);}},datascriptQuery(t,...e){if(e.pop(),null!=e&&e.some((t=>"function"==typeof t))){return this.Experiments.ensureHostScope().logseq.api.datascript_query(t,...e)}return this._execCallableAPIAsync("datascript_query",t,...e)}},_o={},wo={},xo={makeSandboxStorage(){return new jn(this,{assets:!0})}};class Co extends(Ge()){constructor(t,e){super(),ao(this,"_baseInfo",void 0),ao(this,"_caller",void 0),ao(this,"_version","0.0.14"),ao(this,"_debugTag",""),ao(this,"_settingsSchema",void 0),ao(this,"_connected",!1),ao(this,"_ui",new Map),ao(this,"_mFileStorage",void 0),ao(this,"_mRequest",void 0),ao(this,"_mExperiments",void 0),ao(this,"_beforeunloadCallback",void 0),this._baseInfo=t,this._caller=e,e.on("sys:ui:visible",(t=>{null!=t&&t.toggle&&this.toggleMainUI();})),e.on("settings:changed",(t=>{const e=Object.assign({},this.settings),n=Object.assign(this._baseInfo.settings,t);this.emit("settings:changed",{...n},e);})),e.on("beforeunload",(async t=>{const{actor:n,...r}=t,o=this._beforeunloadCallback;try{o&&await o(r),null==n||n.resolve(null);}catch(t){console.debug(`${e.debugTag} [beforeunload] `,t),null==n||n.reject(t);}}));}async ready(t,e){if(!this._connected)try{var n;"function"==typeof t&&(e=t,t={});let r=await this._caller.connectToParent(t);this._connected=!0,r=Ke(this._baseInfo,r),null!==(n=r)&&void 0!==n&&n.id&&(this._debugTag=this._caller.debugTag=`#${r.id} [${r.name}]`,this.logger.setTag(this._debugTag)),this._settingsSchema&&(r.settings=function(t,e){const n=(e||[]).reduce(((t,e)=>("default"in e&&(t[e.key]=e.default),t)),{});return Object.assign(n,t)}(r.settings,this._settingsSchema),await this.useSettingsSchema(this._settingsSchema));try{await this._execCallableAPIAsync("setSDKMetadata",{version:this._version});}catch(t){console.warn(t);}e&&e.call(this,r);}catch(t){console.error(`${this._debugTag} [Ready Error]`,t);}}ensureConnected(){if(!this._connected)throw new Error("not connected")}beforeunload(t){"function"==typeof t&&(this._beforeunloadCallback=t);}provideModel(t){return this.caller._extendUserModel(t),this}provideTheme(t){return this.caller.call("provider:theme",t),this}provideStyle(t){return this.caller.call("provider:style",t),this}provideUI(t){return this.caller.call("provider:ui",t),this}useSettingsSchema(t){return this.connected&&this.caller.call("settings:schema",{schema:t,isSync:!0}),this._settingsSchema=t,this}updateSettings(t){this.caller.call("settings:update",t);}onSettingsChanged(t){const e="settings:changed";return this.on(e,t),()=>this.off(e,t)}showSettingsUI(){this.caller.call("settings:visible:changed",{visible:!0});}hideSettingsUI(){this.caller.call("settings:visible:changed",{visible:!1});}setMainUIAttrs(t){this.caller.call("main-ui:attrs",t);}setMainUIInlineStyle(t){this.caller.call("main-ui:style",t);}hideMainUI(t){const e={key:0,visible:!1,cursor:null==t?void 0:t.restoreEditingCursor};this.caller.call("main-ui:visible",e),this.emit("ui:visible:changed",e),this._ui.set(e.key,e);}showMainUI(t){const e={key:0,visible:!0,autoFocus:null==t?void 0:t.autoFocus};this.caller.call("main-ui:visible",e),this.emit("ui:visible:changed",e),this._ui.set(e.key,e);}toggleMainUI(){const t=0,e=this._ui.get(t);e&&e.visible?this.hideMainUI():this.showMainUI();}get version(){return this._version}get isMainUIVisible(){const t=this._ui.get(0);return Boolean(t&&t.visible)}get connected(){return this._connected}get baseInfo(){return this._baseInfo}get effect(){return (t=this)&&((null===(e=t.baseInfo)||void 0===e?void 0:e.effect)||!(null!==(n=t.baseInfo)&&void 0!==n&&n.iir));var t,e,n;}get logger(){return uo}get settings(){var t;return null===(t=this.baseInfo)||void 0===t?void 0:t.settings}get caller(){return this._caller}resolveResourceFullUrl(t){if(this.ensureConnected(),t)return t=t.replace(/^[.\\/]+/,""),Qe(this._baseInfo.lsr,t)}_makeUserProxy(t,e){const n=this,r=this.caller;return new Proxy(t,{get(t,o,i){const s=t[o];return function(...t){if(s){const r=s.apply(n,t.concat(e));if(r!==co)return r}if(e){const i=o.toString().match(/^(once|off|on)/i);if(null!=i){const o=i[0].toLowerCase(),s=i.input.slice(o.length),a="off"===o,c=n.baseInfo.id,l=`hook:${e}:${Ve(s)}`,u=t[0];r[o](l,u);const f=()=>{r.off(l,u),r.listenerCount(l)||n.App._uninstallPluginHook(c,l);};return a?void f():(n.App._installPluginHook(c,l),f)}}let i=o;return ["git","ui","assets"].includes(e)&&(i=e+"_"+i),r.callAsync("api:call",{tag:e,method:i,args:t})}}})}_execCallableAPIAsync(t,...e){return this._caller.callAsync("api:call",{method:t,args:e})}_execCallableAPI(t,...e){this._caller.call("api:call",{method:t,args:e});}_callWin(...t){return this._execCallableAPIAsync("_callMainWin",...t)}get App(){return this._makeUserProxy(go,"app")}get Editor(){return this._makeUserProxy(yo,"editor")}get DB(){return this._makeUserProxy(bo,"db")}get Git(){return this._makeUserProxy(_o,"git")}get UI(){return this._makeUserProxy(wo,"ui")}get Assets(){return this._makeUserProxy(xo,"assets")}get FileStorage(){let t=this._mFileStorage;return t||(t=this._mFileStorage=new jn(this)),t}get Request(){let t=this._mRequest;return t||(t=this._mRequest=new In(this)),t}get Experiments(){let t=this._mExperiments;return t||(t=this._mExperiments=new An(this)),t}}function Oo(t,e){return new Co(t,e)}if(null==window.__LSP__HOST__){const t=new On(null);window.logseq=Oo({},t);}})(),r})()));
} (lsplugin_user, lsplugin_user.exports));

const DEFAULT_LOCALE = "en";
let locale$1 = DEFAULT_LOCALE;
let translations = {};
async function setup({ defaultLocale = DEFAULT_LOCALE, builtinTranslations, }) {
    locale$1 = (await logseq.App.getUserConfigs()).preferredLanguage;
    if (locale$1 === defaultLocale)
        return;
    if (builtinTranslations?.[locale$1] != null) {
        translations = builtinTranslations;
    }
}
function t(key, args) {
    const template = translations[locale$1]?.[key] ?? key;
    if (args == null)
        return template;
    return Object.entries(args).reduce((str, [name, val]) => str.replaceAll(`\${${name}}`, val), template);
}

function generateTriggerSchema() {
    const schema = [];
    for(let i = 1; i <= 100; i++){
        schema.push({
            key: `trigger${i}`,
            type: "string",
            default: "",
            description: t("Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex, triggered on space.")
        }, {
            key: `replacement${i}`,
            type: "string",
            inputAs: "textarea",
            default: "",
            description: t("Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.")
        });
    }
    return schema;
}

var zhCN = {
	"Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex, triggered on space.": "触发字符。以空格结尾会以标点或空格触发；以双空格结尾会以空格触发，但不输入空格；以三个空格结尾启用正则，以空格触发。",
	"Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.": "替换文字。可在双花括号里写JS表达式，例如`{{time()}}`。`|`代表光标位置。",
	"Reload user functions": "重新加载用户函数",
	"User defined functions reloaded.": "用户函数已重新加载。",
	"Enable or not Chinese double-colon replacement.": "是否开启：：替换。",
	"Enable or not Chinese double-bracket replacement.": "是否开启【【替换。"
};

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

function _typeof$E(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$E = function _typeof(obj) { return typeof obj; }; } else { _typeof$E = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$E(obj); }


var defaultOptions = {};
function getDefaultOptions$1() {
  return defaultOptions;
}
function setDefaultOptions$1(newOptions) {
  defaultOptions = newOptions;
}


function _typeof$C(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$C = function _typeof(obj) { return typeof obj; }; } else { _typeof$C = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$C(obj); }
/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */



function _typeof$B(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$B = function _typeof(obj) { return typeof obj; }; } else { _typeof$B = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$B(obj); }
/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} - the earliest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */



function _typeof$A(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$A = function _typeof(obj) { return typeof obj; }; } else { _typeof$A = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$A(obj); }






function _typeof$y(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$y = function _typeof(obj) { return typeof obj; }; } else { _typeof$y = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$y(obj); }

function _inherits$v(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$v(subClass, superClass); }

function _setPrototypeOf$v(o, p) { _setPrototypeOf$v = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$v(o, p); }

function _createSuper$v(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$v(); return function _createSuperInternal() { var Super = _getPrototypeOf$v(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$v(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$v(this, result); }; }

function _possibleConstructorReturn$v(self, call) { if (call && (_typeof$y(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$v(self); }

function _assertThisInitialized$v(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$v() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$v(o) { _getPrototypeOf$v = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$v(o); }

function _classCallCheck$w(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$w(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$w(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$w(Constructor.prototype, protoProps); if (staticProps) _defineProperties$w(Constructor, staticProps); return Constructor; }

function _defineProperty$v(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /*#__PURE__*/function () {
  function Setter() {
    _classCallCheck$w(this, Setter);

    _defineProperty$v(this, "subPriority", 0);
  }

  _createClass$w(Setter, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);

  return Setter;
}();
var ValueSetter = /*#__PURE__*/function (_Setter) {
  _inherits$v(ValueSetter, _Setter);

  var _super = _createSuper$v(ValueSetter);

  function ValueSetter(value, validateValue, setValue, priority, subPriority) {
    var _this;

    _classCallCheck$w(this, ValueSetter);

    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;

    if (subPriority) {
      _this.subPriority = subPriority;
    }

    return _this;
  }

  _createClass$w(ValueSetter, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);

  return ValueSetter;
}(Setter);
var DateToSystemTimezoneSetter = /*#__PURE__*/function (_Setter2) {
  _inherits$v(DateToSystemTimezoneSetter, _Setter2);

  var _super2 = _createSuper$v(DateToSystemTimezoneSetter);

  function DateToSystemTimezoneSetter() {
    var _this2;

    _classCallCheck$w(this, DateToSystemTimezoneSetter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty$v(_assertThisInitialized$v(_this2), "priority", TIMEZONE_UNIT_PRIORITY);

    _defineProperty$v(_assertThisInitialized$v(_this2), "subPriority", -1);

    return _this2;
  }

  _createClass$w(DateToSystemTimezoneSetter, [{
    key: "set",
    value: function set(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }

      var convertedDate = new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);

  return DateToSystemTimezoneSetter;
}(Setter);

function _classCallCheck$v(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$v(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$v(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$v(Constructor.prototype, protoProps); if (staticProps) _defineProperties$v(Constructor, staticProps); return Constructor; }
var Parser = /*#__PURE__*/function () {
  function Parser() {
    _classCallCheck$v(this, Parser);
  }

  _createClass$v(Parser, [{
    key: "run",
    value: function run(dateString, token, match, options) {
      var result = this.parse(dateString, token, match, options);

      if (!result) {
        return null;
      }

      return {
        setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);

  return Parser;
}();

function _typeof$x(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$x = function _typeof(obj) { return typeof obj; }; } else { _typeof$x = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$x(obj); }

function _classCallCheck$u(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$u(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$u(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$u(Constructor.prototype, protoProps); if (staticProps) _defineProperties$u(Constructor, staticProps); return Constructor; }

function _inherits$u(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$u(subClass, superClass); }

function _setPrototypeOf$u(o, p) { _setPrototypeOf$u = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$u(o, p); }

function _createSuper$u(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$u(); return function _createSuperInternal() { var Super = _getPrototypeOf$u(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$u(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$u(this, result); }; }

function _possibleConstructorReturn$u(self, call) { if (call && (_typeof$x(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$u(self); }

function _assertThisInitialized$u(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$u() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$u(o) { _getPrototypeOf$u = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$u(o); }

function _defineProperty$u(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var EraParser = /*#__PURE__*/function (_Parser) {
  _inherits$u(EraParser, _Parser);

  var _super = _createSuper$u(EraParser);

  function EraParser() {
    var _this;

    _classCallCheck$u(this, EraParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$u(_assertThisInitialized$u(_this), "priority", 140);

    _defineProperty$u(_assertThisInitialized$u(_this), "incompatibleTokens", ['R', 'u', 't', 'T']);

    return _this;
  }

  _createClass$u(EraParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(dateString, {
            width: 'abbreviated'
          }) || match.era(dateString, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(dateString, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(dateString, {
            width: 'wide'
          }) || match.era(dateString, {
            width: 'abbreviated'
          }) || match.era(dateString, {
            width: 'narrow'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return EraParser;
}(Parser);



var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }

  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex$1(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function _typeof$w(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$w = function _typeof(obj) { return typeof obj; }; } else { _typeof$w = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$w(obj); }

function _classCallCheck$t(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$t(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$t(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$t(Constructor.prototype, protoProps); if (staticProps) _defineProperties$t(Constructor, staticProps); return Constructor; }

function _inherits$t(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$t(subClass, superClass); }

function _setPrototypeOf$t(o, p) { _setPrototypeOf$t = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$t(o, p); }

function _createSuper$t(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$t(); return function _createSuperInternal() { var Super = _getPrototypeOf$t(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$t(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$t(this, result); }; }

function _possibleConstructorReturn$t(self, call) { if (call && (_typeof$w(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$t(self); }

function _assertThisInitialized$t(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$t() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$t(o) { _getPrototypeOf$t = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$t(o); }

function _defineProperty$t(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
var YearParser = /*#__PURE__*/function (_Parser) {
  _inherits$t(YearParser, _Parser);

  var _super = _createSuper$t(YearParser);

  function YearParser() {
    var _this;

    _classCallCheck$t(this, YearParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$t(_assertThisInitialized$t(_this), "priority", 130);

    _defineProperty$t(_assertThisInitialized$t(_this), "incompatibleTokens", ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$t(YearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return mapValue(parseNDigits(4, dateString), valueCallback);

        case 'yo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'year'
          }), valueCallback);

        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return YearParser;
}(Parser);

function _typeof$v(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$v = function _typeof(obj) { return typeof obj; }; } else { _typeof$v = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$v(obj); }

function _classCallCheck$s(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$s(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$s(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$s(Constructor.prototype, protoProps); if (staticProps) _defineProperties$s(Constructor, staticProps); return Constructor; }

function _inherits$s(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$s(subClass, superClass); }

function _setPrototypeOf$s(o, p) { _setPrototypeOf$s = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$s(o, p); }

function _createSuper$s(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$s(); return function _createSuperInternal() { var Super = _getPrototypeOf$s(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$s(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$s(this, result); }; }

function _possibleConstructorReturn$s(self, call) { if (call && (_typeof$v(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$s(self); }

function _assertThisInitialized$s(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$s() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$s(o) { _getPrototypeOf$s = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$s(o); }

function _defineProperty$s(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// Local week-numbering year
var LocalWeekYearParser = /*#__PURE__*/function (_Parser) {
  _inherits$s(LocalWeekYearParser, _Parser);

  var _super = _createSuper$s(LocalWeekYearParser);

  function LocalWeekYearParser() {
    var _this;

    _classCallCheck$s(this, LocalWeekYearParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$s(_assertThisInitialized$s(_this), "priority", 130);

    _defineProperty$s(_assertThisInitialized$s(_this), "incompatibleTokens", ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);

    return _this;
  }

  _createClass$s(LocalWeekYearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return mapValue(parseNDigits(4, dateString), valueCallback);

        case 'Yo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'year'
          }), valueCallback);

        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    }
  }]);

  return LocalWeekYearParser;
}(Parser);

function _typeof$u(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$u = function _typeof(obj) { return typeof obj; }; } else { _typeof$u = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$u(obj); }

function _classCallCheck$r(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$r(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$r(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$r(Constructor.prototype, protoProps); if (staticProps) _defineProperties$r(Constructor, staticProps); return Constructor; }

function _inherits$r(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$r(subClass, superClass); }

function _setPrototypeOf$r(o, p) { _setPrototypeOf$r = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$r(o, p); }

function _createSuper$r(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$r(); return function _createSuperInternal() { var Super = _getPrototypeOf$r(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$r(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$r(this, result); }; }

function _possibleConstructorReturn$r(self, call) { if (call && (_typeof$u(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$r(self); }

function _assertThisInitialized$r(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$r() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$r(o) { _getPrototypeOf$r = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$r(o); }

function _defineProperty$r(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISOWeekYearParser = /*#__PURE__*/function (_Parser) {
  _inherits$r(ISOWeekYearParser, _Parser);

  var _super = _createSuper$r(ISOWeekYearParser);

  function ISOWeekYearParser() {
    var _this;

    _classCallCheck$r(this, ISOWeekYearParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$r(_assertThisInitialized$r(_this), "priority", 130);

    _defineProperty$r(_assertThisInitialized$r(_this), "incompatibleTokens", ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$r(ISOWeekYearParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      if (token === 'R') {
        return parseNDigitsSigned(4, dateString);
      }

      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    }
  }]);

  return ISOWeekYearParser;
}(Parser);

function _typeof$t(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$t = function _typeof(obj) { return typeof obj; }; } else { _typeof$t = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$t(obj); }

function _classCallCheck$q(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$q(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$q(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$q(Constructor.prototype, protoProps); if (staticProps) _defineProperties$q(Constructor, staticProps); return Constructor; }

function _inherits$q(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$q(subClass, superClass); }

function _setPrototypeOf$q(o, p) { _setPrototypeOf$q = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$q(o, p); }

function _createSuper$q(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$q(); return function _createSuperInternal() { var Super = _getPrototypeOf$q(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$q(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$q(this, result); }; }

function _possibleConstructorReturn$q(self, call) { if (call && (_typeof$t(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$q(self); }

function _assertThisInitialized$q(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$q() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$q(o) { _getPrototypeOf$q = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$q(o); }

function _defineProperty$q(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ExtendedYearParser = /*#__PURE__*/function (_Parser) {
  _inherits$q(ExtendedYearParser, _Parser);

  var _super = _createSuper$q(ExtendedYearParser);

  function ExtendedYearParser() {
    var _this;

    _classCallCheck$q(this, ExtendedYearParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$q(_assertThisInitialized$q(_this), "priority", 130);

    _defineProperty$q(_assertThisInitialized$q(_this), "incompatibleTokens", ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$q(ExtendedYearParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      if (token === 'u') {
        return parseNDigitsSigned(4, dateString);
      }

      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return ExtendedYearParser;
}(Parser);

function _typeof$s(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$s = function _typeof(obj) { return typeof obj; }; } else { _typeof$s = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$s(obj); }

function _classCallCheck$p(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$p(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$p(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$p(Constructor.prototype, protoProps); if (staticProps) _defineProperties$p(Constructor, staticProps); return Constructor; }

function _inherits$p(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$p(subClass, superClass); }

function _setPrototypeOf$p(o, p) { _setPrototypeOf$p = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$p(o, p); }

function _createSuper$p(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$p(); return function _createSuperInternal() { var Super = _getPrototypeOf$p(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$p(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$p(this, result); }; }

function _possibleConstructorReturn$p(self, call) { if (call && (_typeof$s(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$p(self); }

function _assertThisInitialized$p(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$p() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$p(o) { _getPrototypeOf$p = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$p(o); }

function _defineProperty$p(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var QuarterParser = /*#__PURE__*/function (_Parser) {
  _inherits$p(QuarterParser, _Parser);

  var _super = _createSuper$p(QuarterParser);

  function QuarterParser() {
    var _this;

    _classCallCheck$p(this, QuarterParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$p(_assertThisInitialized$p(_this), "priority", 120);

    _defineProperty$p(_assertThisInitialized$p(_this), "incompatibleTokens", ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$p(QuarterParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, dateString);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(dateString, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return QuarterParser;
}(Parser);

function _typeof$r(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$r = function _typeof(obj) { return typeof obj; }; } else { _typeof$r = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$r(obj); }

function _classCallCheck$o(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$o(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$o(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$o(Constructor.prototype, protoProps); if (staticProps) _defineProperties$o(Constructor, staticProps); return Constructor; }

function _inherits$o(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$o(subClass, superClass); }

function _setPrototypeOf$o(o, p) { _setPrototypeOf$o = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$o(o, p); }

function _createSuper$o(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$o(); return function _createSuperInternal() { var Super = _getPrototypeOf$o(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$o(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$o(this, result); }; }

function _possibleConstructorReturn$o(self, call) { if (call && (_typeof$r(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$o(self); }

function _assertThisInitialized$o(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$o() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$o(o) { _getPrototypeOf$o = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$o(o); }

function _defineProperty$o(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var StandAloneQuarterParser = /*#__PURE__*/function (_Parser) {
  _inherits$o(StandAloneQuarterParser, _Parser);

  var _super = _createSuper$o(StandAloneQuarterParser);

  function StandAloneQuarterParser() {
    var _this;

    _classCallCheck$o(this, StandAloneQuarterParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$o(_assertThisInitialized$o(_this), "priority", 120);

    _defineProperty$o(_assertThisInitialized$o(_this), "incompatibleTokens", ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$o(StandAloneQuarterParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, dateString);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(dateString, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return StandAloneQuarterParser;
}(Parser);

function _typeof$q(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$q = function _typeof(obj) { return typeof obj; }; } else { _typeof$q = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$q(obj); }

function _classCallCheck$n(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$n(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$n(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$n(Constructor.prototype, protoProps); if (staticProps) _defineProperties$n(Constructor, staticProps); return Constructor; }

function _inherits$n(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$n(subClass, superClass); }

function _setPrototypeOf$n(o, p) { _setPrototypeOf$n = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$n(o, p); }

function _createSuper$n(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$n(); return function _createSuperInternal() { var Super = _getPrototypeOf$n(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$n(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$n(this, result); }; }

function _possibleConstructorReturn$n(self, call) { if (call && (_typeof$q(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$n(self); }

function _assertThisInitialized$n(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$n() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$n(o) { _getPrototypeOf$n = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$n(o); }

function _defineProperty$n(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var MonthParser = /*#__PURE__*/function (_Parser) {
  _inherits$n(MonthParser, _Parser);

  var _super = _createSuper$n(MonthParser);

  function MonthParser() {
    var _this;

    _classCallCheck$n(this, MonthParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$n(_assertThisInitialized$n(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);

    _defineProperty$n(_assertThisInitialized$n(_this), "priority", 110);

    return _this;
  }

  _createClass$n(MonthParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return mapValue(parseNDigits(2, dateString), valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'month'
          }), valueCallback);
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return MonthParser;
}(Parser);

function _typeof$p(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$p = function _typeof(obj) { return typeof obj; }; } else { _typeof$p = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$p(obj); }

function _classCallCheck$m(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$m(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$m(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$m(Constructor.prototype, protoProps); if (staticProps) _defineProperties$m(Constructor, staticProps); return Constructor; }

function _inherits$m(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$m(subClass, superClass); }

function _setPrototypeOf$m(o, p) { _setPrototypeOf$m = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$m(o, p); }

function _createSuper$m(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$m(); return function _createSuperInternal() { var Super = _getPrototypeOf$m(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$m(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$m(this, result); }; }

function _possibleConstructorReturn$m(self, call) { if (call && (_typeof$p(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$m(self); }

function _assertThisInitialized$m(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$m() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$m(o) { _getPrototypeOf$m = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$m(o); }

function _defineProperty$m(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var StandAloneMonthParser = /*#__PURE__*/function (_Parser) {
  _inherits$m(StandAloneMonthParser, _Parser);

  var _super = _createSuper$m(StandAloneMonthParser);

  function StandAloneMonthParser() {
    var _this;

    _classCallCheck$m(this, StandAloneMonthParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$m(_assertThisInitialized$m(_this), "priority", 110);

    _defineProperty$m(_assertThisInitialized$m(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$m(StandAloneMonthParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return mapValue(parseNDigits(2, dateString), valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'month'
          }), valueCallback);
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return StandAloneMonthParser;
}(Parser);

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

function _typeof$o(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$o = function _typeof(obj) { return typeof obj; }; } else { _typeof$o = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$o(obj); }

function _classCallCheck$l(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$l(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$l(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$l(Constructor.prototype, protoProps); if (staticProps) _defineProperties$l(Constructor, staticProps); return Constructor; }

function _inherits$l(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$l(subClass, superClass); }

function _setPrototypeOf$l(o, p) { _setPrototypeOf$l = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$l(o, p); }

function _createSuper$l(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$l(); return function _createSuperInternal() { var Super = _getPrototypeOf$l(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$l(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$l(this, result); }; }

function _possibleConstructorReturn$l(self, call) { if (call && (_typeof$o(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$l(self); }

function _assertThisInitialized$l(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$l() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$l(o) { _getPrototypeOf$l = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$l(o); }

function _defineProperty$l(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LocalWeekParser = /*#__PURE__*/function (_Parser) {
  _inherits$l(LocalWeekParser, _Parser);

  var _super = _createSuper$l(LocalWeekParser);

  function LocalWeekParser() {
    var _this;

    _classCallCheck$l(this, LocalWeekParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$l(_assertThisInitialized$l(_this), "priority", 100);

    _defineProperty$l(_assertThisInitialized$l(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);

    return _this;
  }

  _createClass$l(LocalWeekParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, dateString);

        case 'wo':
          return match.ordinalNumber(dateString, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    }
  }]);

  return LocalWeekParser;
}(Parser);

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

function _typeof$n(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$n = function _typeof(obj) { return typeof obj; }; } else { _typeof$n = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$n(obj); }

function _classCallCheck$k(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$k(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$k(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$k(Constructor.prototype, protoProps); if (staticProps) _defineProperties$k(Constructor, staticProps); return Constructor; }

function _inherits$k(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$k(subClass, superClass); }

function _setPrototypeOf$k(o, p) { _setPrototypeOf$k = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$k(o, p); }

function _createSuper$k(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$k(); return function _createSuperInternal() { var Super = _getPrototypeOf$k(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$k(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$k(this, result); }; }

function _possibleConstructorReturn$k(self, call) { if (call && (_typeof$n(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$k(self); }

function _assertThisInitialized$k(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$k() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$k(o) { _getPrototypeOf$k = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$k(o); }

function _defineProperty$k(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISOWeekParser = /*#__PURE__*/function (_Parser) {
  _inherits$k(ISOWeekParser, _Parser);

  var _super = _createSuper$k(ISOWeekParser);

  function ISOWeekParser() {
    var _this;

    _classCallCheck$k(this, ISOWeekParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$k(_assertThisInitialized$k(_this), "priority", 100);

    _defineProperty$k(_assertThisInitialized$k(_this), "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$k(ISOWeekParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, dateString);

        case 'Io':
          return match.ordinalNumber(dateString, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value));
    }
  }]);

  return ISOWeekParser;
}(Parser);

function _typeof$m(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$m = function _typeof(obj) { return typeof obj; }; } else { _typeof$m = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$m(obj); }

function _classCallCheck$j(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$j(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$j(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$j(Constructor.prototype, protoProps); if (staticProps) _defineProperties$j(Constructor, staticProps); return Constructor; }

function _inherits$j(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$j(subClass, superClass); }

function _setPrototypeOf$j(o, p) { _setPrototypeOf$j = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$j(o, p); }

function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function _createSuperInternal() { var Super = _getPrototypeOf$j(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$j(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$j(this, result); }; }

function _possibleConstructorReturn$j(self, call) { if (call && (_typeof$m(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$j(self); }

function _assertThisInitialized$j(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$j(o) { _getPrototypeOf$j = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$j(o); }

function _defineProperty$j(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Day of the month

var DateParser = /*#__PURE__*/function (_Parser) {
  _inherits$j(DateParser, _Parser);

  var _super = _createSuper$j(DateParser);

  function DateParser() {
    var _this;

    _classCallCheck$j(this, DateParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$j(_assertThisInitialized$j(_this), "priority", 90);

    _defineProperty$j(_assertThisInitialized$j(_this), "subPriority", 1);

    _defineProperty$j(_assertThisInitialized$j(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$j(DateParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, dateString);

        case 'do':
          return match.ordinalNumber(dateString, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return DateParser;
}(Parser);

function _typeof$l(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$l = function _typeof(obj) { return typeof obj; }; } else { _typeof$l = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$l(obj); }

function _classCallCheck$i(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$i(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$i(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$i(Constructor.prototype, protoProps); if (staticProps) _defineProperties$i(Constructor, staticProps); return Constructor; }

function _inherits$i(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$i(subClass, superClass); }

function _setPrototypeOf$i(o, p) { _setPrototypeOf$i = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$i(o, p); }

function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function _createSuperInternal() { var Super = _getPrototypeOf$i(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$i(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$i(this, result); }; }

function _possibleConstructorReturn$i(self, call) { if (call && (_typeof$l(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$i(self); }

function _assertThisInitialized$i(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$i(o) { _getPrototypeOf$i = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$i(o); }

function _defineProperty$i(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DayOfYearParser = /*#__PURE__*/function (_Parser) {
  _inherits$i(DayOfYearParser, _Parser);

  var _super = _createSuper$i(DayOfYearParser);

  function DayOfYearParser() {
    var _this;

    _classCallCheck$i(this, DayOfYearParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$i(_assertThisInitialized$i(_this), "priority", 90);

    _defineProperty$i(_assertThisInitialized$i(_this), "subpriority", 1);

    _defineProperty$i(_assertThisInitialized$i(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$i(DayOfYearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, dateString);

        case 'Do':
          return match.ordinalNumber(dateString, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return DayOfYearParser;
}(Parser);

function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(2, arguments);
  var defaultOptions = getDefaultOptions$1();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

function _typeof$k(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$k = function _typeof(obj) { return typeof obj; }; } else { _typeof$k = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$k(obj); }

function _classCallCheck$h(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$h(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$h(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$h(Constructor.prototype, protoProps); if (staticProps) _defineProperties$h(Constructor, staticProps); return Constructor; }

function _inherits$h(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$h(subClass, superClass); }

function _setPrototypeOf$h(o, p) { _setPrototypeOf$h = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$h(o, p); }

function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function _createSuperInternal() { var Super = _getPrototypeOf$h(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$h(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$h(this, result); }; }

function _possibleConstructorReturn$h(self, call) { if (call && (_typeof$k(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$h(self); }

function _assertThisInitialized$h(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$h(o) { _getPrototypeOf$h = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$h(o); }

function _defineProperty$h(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DayParser = /*#__PURE__*/function (_Parser) {
  _inherits$h(DayParser, _Parser);

  var _super = _createSuper$h(DayParser);

  function DayParser() {
    var _this;

    _classCallCheck$h(this, DayParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$h(_assertThisInitialized$h(_this), "priority", 90);

    _defineProperty$h(_assertThisInitialized$h(_this), "incompatibleTokens", ['D', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$h(DayParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return DayParser;
}(Parser);

function _typeof$j(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$j = function _typeof(obj) { return typeof obj; }; } else { _typeof$j = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$j(obj); }

function _classCallCheck$g(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$g(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$g(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$g(Constructor.prototype, protoProps); if (staticProps) _defineProperties$g(Constructor, staticProps); return Constructor; }

function _inherits$g(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$g(subClass, superClass); }

function _setPrototypeOf$g(o, p) { _setPrototypeOf$g = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$g(o, p); }

function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf$g(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$g(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$g(this, result); }; }

function _possibleConstructorReturn$g(self, call) { if (call && (_typeof$j(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$g(self); }

function _assertThisInitialized$g(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$g(o) { _getPrototypeOf$g = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$g(o); }

function _defineProperty$g(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LocalDayParser = /*#__PURE__*/function (_Parser) {
  _inherits$g(LocalDayParser, _Parser);

  var _super = _createSuper$g(LocalDayParser);

  function LocalDayParser() {
    var _this;

    _classCallCheck$g(this, LocalDayParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$g(_assertThisInitialized$g(_this), "priority", 90);

    _defineProperty$g(_assertThisInitialized$g(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']);

    return _this;
  }

  _createClass$g(LocalDayParser, [{
    key: "parse",
    value: function parse(dateString, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
        // 3rd

        case 'eo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'day'
          }), valueCallback);
        // Tue

        case 'eee':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return LocalDayParser;
}(Parser);

function _typeof$i(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$i = function _typeof(obj) { return typeof obj; }; } else { _typeof$i = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$i(obj); }

function _classCallCheck$f(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$f(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$f(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$f(Constructor.prototype, protoProps); if (staticProps) _defineProperties$f(Constructor, staticProps); return Constructor; }

function _inherits$f(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$f(subClass, superClass); }

function _setPrototypeOf$f(o, p) { _setPrototypeOf$f = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$f(o, p); }

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf$f(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$f(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$f(this, result); }; }

function _possibleConstructorReturn$f(self, call) { if (call && (_typeof$i(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$f(self); }

function _assertThisInitialized$f(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$f(o) { _getPrototypeOf$f = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$f(o); }

function _defineProperty$f(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StandAloneLocalDayParser = /*#__PURE__*/function (_Parser) {
  _inherits$f(StandAloneLocalDayParser, _Parser);

  var _super = _createSuper$f(StandAloneLocalDayParser);

  function StandAloneLocalDayParser() {
    var _this;

    _classCallCheck$f(this, StandAloneLocalDayParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$f(_assertThisInitialized$f(_this), "priority", 90);

    _defineProperty$f(_assertThisInitialized$f(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']);

    return _this;
  }

  _createClass$f(StandAloneLocalDayParser, [{
    key: "parse",
    value: function parse(dateString, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
        // 3rd

        case 'co':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'day'
          }), valueCallback);
        // Tue

        case 'ccc':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return StandAloneLocalDayParser;
}(Parser);

function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

function _typeof$h(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$h = function _typeof(obj) { return typeof obj; }; } else { _typeof$h = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$h(obj); }

function _classCallCheck$e(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$e(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$e(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$e(Constructor.prototype, protoProps); if (staticProps) _defineProperties$e(Constructor, staticProps); return Constructor; }

function _inherits$e(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$e(subClass, superClass); }

function _setPrototypeOf$e(o, p) { _setPrototypeOf$e = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$e(o, p); }

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf$e(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$e(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$e(this, result); }; }

function _possibleConstructorReturn$e(self, call) { if (call && (_typeof$h(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$e(self); }

function _assertThisInitialized$e(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$e(o) { _getPrototypeOf$e = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$e(o); }

function _defineProperty$e(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISODayParser = /*#__PURE__*/function (_Parser) {
  _inherits$e(ISODayParser, _Parser);

  var _super = _createSuper$e(ISODayParser);

  function ISODayParser() {
    var _this;

    _classCallCheck$e(this, ISODayParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$e(_assertThisInitialized$e(_this), "priority", 90);

    _defineProperty$e(_assertThisInitialized$e(_this), "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$e(ISODayParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, dateString);
        // 2nd

        case 'io':
          return match.ordinalNumber(dateString, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return mapValue(match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // T

        case 'iiiii':
          return mapValue(match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // Tu

        case 'iiiiii':
          return mapValue(match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // Tuesday

        case 'iiii':
        default:
          return mapValue(match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 7;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date = setUTCISODay(date, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return ISODayParser;
}(Parser);

function _typeof$g(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$g = function _typeof(obj) { return typeof obj; }; } else { _typeof$g = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$g(obj); }

function _classCallCheck$d(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$d(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$d(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$d(Constructor.prototype, protoProps); if (staticProps) _defineProperties$d(Constructor, staticProps); return Constructor; }

function _inherits$d(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$d(subClass, superClass); }

function _setPrototypeOf$d(o, p) { _setPrototypeOf$d = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$d(o, p); }

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf$d(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$d(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$d(this, result); }; }

function _possibleConstructorReturn$d(self, call) { if (call && (_typeof$g(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$d(self); }

function _assertThisInitialized$d(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$d(o) { _getPrototypeOf$d = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$d(o); }

function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var AMPMParser = /*#__PURE__*/function (_Parser) {
  _inherits$d(AMPMParser, _Parser);

  var _super = _createSuper$d(AMPMParser);

  function AMPMParser() {
    var _this;

    _classCallCheck$d(this, AMPMParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$d(_assertThisInitialized$d(_this), "priority", 80);

    _defineProperty$d(_assertThisInitialized$d(_this), "incompatibleTokens", ['b', 'B', 'H', 'k', 't', 'T']);

    return _this;
  }

  _createClass$d(AMPMParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);

  return AMPMParser;
}(Parser);

function _typeof$f(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$f = function _typeof(obj) { return typeof obj; }; } else { _typeof$f = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$f(obj); }

function _classCallCheck$c(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$c(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$c(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$c(Constructor.prototype, protoProps); if (staticProps) _defineProperties$c(Constructor, staticProps); return Constructor; }

function _inherits$c(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$c(subClass, superClass); }

function _setPrototypeOf$c(o, p) { _setPrototypeOf$c = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$c(o, p); }

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf$c(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$c(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$c(this, result); }; }

function _possibleConstructorReturn$c(self, call) { if (call && (_typeof$f(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$c(self); }

function _assertThisInitialized$c(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$c(o) { _getPrototypeOf$c = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$c(o); }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var AMPMMidnightParser = /*#__PURE__*/function (_Parser) {
  _inherits$c(AMPMMidnightParser, _Parser);

  var _super = _createSuper$c(AMPMMidnightParser);

  function AMPMMidnightParser() {
    var _this;

    _classCallCheck$c(this, AMPMMidnightParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$c(_assertThisInitialized$c(_this), "priority", 80);

    _defineProperty$c(_assertThisInitialized$c(_this), "incompatibleTokens", ['a', 'B', 'H', 'k', 't', 'T']);

    return _this;
  }

  _createClass$c(AMPMMidnightParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);

  return AMPMMidnightParser;
}(Parser);

function _typeof$e(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$e = function _typeof(obj) { return typeof obj; }; } else { _typeof$e = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$e(obj); }

function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$b(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$b(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$b(Constructor.prototype, protoProps); if (staticProps) _defineProperties$b(Constructor, staticProps); return Constructor; }

function _inherits$b(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$b(subClass, superClass); }

function _setPrototypeOf$b(o, p) { _setPrototypeOf$b = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$b(o, p); }

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf$b(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$b(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$b(this, result); }; }

function _possibleConstructorReturn$b(self, call) { if (call && (_typeof$e(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$b(self); }

function _assertThisInitialized$b(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$b(o) { _getPrototypeOf$b = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$b(o); }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DayPeriodParser = /*#__PURE__*/function (_Parser) {
  _inherits$b(DayPeriodParser, _Parser);

  var _super = _createSuper$b(DayPeriodParser);

  function DayPeriodParser() {
    var _this;

    _classCallCheck$b(this, DayPeriodParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$b(_assertThisInitialized$b(_this), "priority", 80);

    _defineProperty$b(_assertThisInitialized$b(_this), "incompatibleTokens", ['a', 'b', 't', 'T']);

    return _this;
  }

  _createClass$b(DayPeriodParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);

  return DayPeriodParser;
}(Parser);

function _typeof$d(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$d = function _typeof(obj) { return typeof obj; }; } else { _typeof$d = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$d(obj); }

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }

function _inherits$a(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$a(subClass, superClass); }

function _setPrototypeOf$a(o, p) { _setPrototypeOf$a = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$a(o, p); }

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf$a(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$a(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$a(this, result); }; }

function _possibleConstructorReturn$a(self, call) { if (call && (_typeof$d(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$a(self); }

function _assertThisInitialized$a(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$a(o) { _getPrototypeOf$a = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$a(o); }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Hour1to12Parser = /*#__PURE__*/function (_Parser) {
  _inherits$a(Hour1to12Parser, _Parser);

  var _super = _createSuper$a(Hour1to12Parser);

  function Hour1to12Parser() {
    var _this;

    _classCallCheck$a(this, Hour1to12Parser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$a(_assertThisInitialized$a(_this), "priority", 70);

    _defineProperty$a(_assertThisInitialized$a(_this), "incompatibleTokens", ['H', 'K', 'k', 't', 'T']);

    return _this;
  }

  _createClass$a(Hour1to12Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, dateString);

        case 'ho':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 12;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    }
  }]);

  return Hour1to12Parser;
}(Parser);

function _typeof$c(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$c = function _typeof(obj) { return typeof obj; }; } else { _typeof$c = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$c(obj); }

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }

function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$9(subClass, superClass); }

function _setPrototypeOf$9(o, p) { _setPrototypeOf$9 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$9(o, p); }

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf$9(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$9(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$9(this, result); }; }

function _possibleConstructorReturn$9(self, call) { if (call && (_typeof$c(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$9(self); }

function _assertThisInitialized$9(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$9(o) { _getPrototypeOf$9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$9(o); }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Hour0to23Parser = /*#__PURE__*/function (_Parser) {
  _inherits$9(Hour0to23Parser, _Parser);

  var _super = _createSuper$9(Hour0to23Parser);

  function Hour0to23Parser() {
    var _this;

    _classCallCheck$9(this, Hour0to23Parser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$9(_assertThisInitialized$9(_this), "priority", 70);

    _defineProperty$9(_assertThisInitialized$9(_this), "incompatibleTokens", ['a', 'b', 'h', 'K', 'k', 't', 'T']);

    return _this;
  }

  _createClass$9(Hour0to23Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, dateString);

        case 'Ho':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 23;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  }]);

  return Hour0to23Parser;
}(Parser);

function _typeof$b(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$b = function _typeof(obj) { return typeof obj; }; } else { _typeof$b = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$b(obj); }

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$8(subClass, superClass); }

function _setPrototypeOf$8(o, p) { _setPrototypeOf$8 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$8(o, p); }

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf$8(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$8(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$8(this, result); }; }

function _possibleConstructorReturn$8(self, call) { if (call && (_typeof$b(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$8(self); }

function _assertThisInitialized$8(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$8(o) { _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$8(o); }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Hour0To11Parser = /*#__PURE__*/function (_Parser) {
  _inherits$8(Hour0To11Parser, _Parser);

  var _super = _createSuper$8(Hour0To11Parser);

  function Hour0To11Parser() {
    var _this;

    _classCallCheck$8(this, Hour0To11Parser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$8(_assertThisInitialized$8(_this), "priority", 70);

    _defineProperty$8(_assertThisInitialized$8(_this), "incompatibleTokens", ['h', 'H', 'k', 't', 'T']);

    return _this;
  }

  _createClass$8(Hour0To11Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, dateString);

        case 'Ko':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    }
  }]);

  return Hour0To11Parser;
}(Parser);

function _typeof$a(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$a = function _typeof(obj) { return typeof obj; }; } else { _typeof$a = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$a(obj); }

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$7(subClass, superClass); }

function _setPrototypeOf$7(o, p) { _setPrototypeOf$7 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$7(o, p); }

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf$7(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$7(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$7(this, result); }; }

function _possibleConstructorReturn$7(self, call) { if (call && (_typeof$a(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$7(self); }

function _assertThisInitialized$7(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$7(o) { _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$7(o); }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Hour1To24Parser = /*#__PURE__*/function (_Parser) {
  _inherits$7(Hour1To24Parser, _Parser);

  var _super = _createSuper$7(Hour1To24Parser);

  function Hour1To24Parser() {
    var _this;

    _classCallCheck$7(this, Hour1To24Parser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$7(_assertThisInitialized$7(_this), "priority", 70);

    _defineProperty$7(_assertThisInitialized$7(_this), "incompatibleTokens", ['a', 'b', 'h', 'H', 'K', 't', 'T']);

    return _this;
  }

  _createClass$7(Hour1To24Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, dateString);

        case 'ko':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 24;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  }]);

  return Hour1To24Parser;
}(Parser);

function _typeof$9(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$9 = function _typeof(obj) { return typeof obj; }; } else { _typeof$9 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$9(obj); }

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }

function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$6(subClass, superClass); }

function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf$6(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$6(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$6(this, result); }; }

function _possibleConstructorReturn$6(self, call) { if (call && (_typeof$9(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$6(self); }

function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$6(o) { _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$6(o); }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var MinuteParser = /*#__PURE__*/function (_Parser) {
  _inherits$6(MinuteParser, _Parser);

  var _super = _createSuper$6(MinuteParser);

  function MinuteParser() {
    var _this;

    _classCallCheck$6(this, MinuteParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$6(_assertThisInitialized$6(_this), "priority", 60);

    _defineProperty$6(_assertThisInitialized$6(_this), "incompatibleTokens", ['t', 'T']);

    return _this;
  }

  _createClass$6(MinuteParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, dateString);

        case 'mo':
          return match.ordinalNumber(dateString, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  }]);

  return MinuteParser;
}(Parser);

function _typeof$8(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$8 = function _typeof(obj) { return typeof obj; }; } else { _typeof$8 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$8(obj); }

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf$5(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$5(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$5(this, result); }; }

function _possibleConstructorReturn$5(self, call) { if (call && (_typeof$8(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var SecondParser = /*#__PURE__*/function (_Parser) {
  _inherits$5(SecondParser, _Parser);

  var _super = _createSuper$5(SecondParser);

  function SecondParser() {
    var _this;

    _classCallCheck$5(this, SecondParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$5(_assertThisInitialized$5(_this), "priority", 50);

    _defineProperty$5(_assertThisInitialized$5(_this), "incompatibleTokens", ['t', 'T']);

    return _this;
  }

  _createClass$5(SecondParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, dateString);

        case 'so':
          return match.ordinalNumber(dateString, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  }]);

  return SecondParser;
}(Parser);

function _typeof$7(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$7 = function _typeof(obj) { return typeof obj; }; } else { _typeof$7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$7(obj); }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf$4(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$4(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$4(this, result); }; }

function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$7(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var FractionOfSecondParser = /*#__PURE__*/function (_Parser) {
  _inherits$4(FractionOfSecondParser, _Parser);

  var _super = _createSuper$4(FractionOfSecondParser);

  function FractionOfSecondParser() {
    var _this;

    _classCallCheck$4(this, FractionOfSecondParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$4(_assertThisInitialized$4(_this), "priority", 30);

    _defineProperty$4(_assertThisInitialized$4(_this), "incompatibleTokens", ['t', 'T']);

    return _this;
  }

  _createClass$4(FractionOfSecondParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      var valueCallback = function valueCallback(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMilliseconds(value);
      return date;
    }
  }]);

  return FractionOfSecondParser;
}(Parser);

function _typeof$6(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$3(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$3(this, result); }; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$6(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISOTimezoneWithZParser = /*#__PURE__*/function (_Parser) {
  _inherits$3(ISOTimezoneWithZParser, _Parser);

  var _super = _createSuper$3(ISOTimezoneWithZParser);

  function ISOTimezoneWithZParser() {
    var _this;

    _classCallCheck$3(this, ISOTimezoneWithZParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$3(_assertThisInitialized$3(_this), "priority", 10);

    _defineProperty$3(_assertThisInitialized$3(_this), "incompatibleTokens", ['t', 'T', 'x']);

    return _this;
  }

  _createClass$3(ISOTimezoneWithZParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, dateString);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    }
  }]);

  return ISOTimezoneWithZParser;
}(Parser);

function _typeof$5(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$5(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISOTimezoneParser = /*#__PURE__*/function (_Parser) {
  _inherits$2(ISOTimezoneParser, _Parser);

  var _super = _createSuper$2(ISOTimezoneParser);

  function ISOTimezoneParser() {
    var _this;

    _classCallCheck$2(this, ISOTimezoneParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$2(_assertThisInitialized$2(_this), "priority", 10);

    _defineProperty$2(_assertThisInitialized$2(_this), "incompatibleTokens", ['t', 'T', 'X']);

    return _this;
  }

  _createClass$2(ISOTimezoneParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, dateString);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    }
  }]);

  return ISOTimezoneParser;
}(Parser);

function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$4(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var TimestampSecondsParser = /*#__PURE__*/function (_Parser) {
  _inherits$1(TimestampSecondsParser, _Parser);

  var _super = _createSuper$1(TimestampSecondsParser);

  function TimestampSecondsParser() {
    var _this;

    _classCallCheck$1(this, TimestampSecondsParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$1(_assertThisInitialized$1(_this), "priority", 40);

    _defineProperty$1(_assertThisInitialized$1(_this), "incompatibleTokens", '*');

    return _this;
  }

  _createClass$1(TimestampSecondsParser, [{
    key: "parse",
    value: function parse(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    }
  }]);

  return TimestampSecondsParser;
}(Parser);

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var TimestampMillisecondsParser = /*#__PURE__*/function (_Parser) {
  _inherits(TimestampMillisecondsParser, _Parser);

  var _super = _createSuper(TimestampMillisecondsParser);

  function TimestampMillisecondsParser() {
    var _this;

    _classCallCheck(this, TimestampMillisecondsParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "priority", 20);

    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", '*');

    return _this;
  }

  _createClass(TimestampMillisecondsParser, [{
    key: "parse",
    value: function parse(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);

  return TimestampMillisecondsParser;
}(Parser);

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */

var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps



window.random = (from, to)=>{
    if (from > to) return from;
    return ~~(Math.random() * (to + 1 - from)) + from;
};
window.choose = (...choices)=>{
    if (choices.length <= 0) return "";
    const index = random(0, choices.length - 1);
    return choices[index];
};
window.clipboard = async ()=>{
    return await parent.navigator.clipboard.readText() ?? "";
};
window.callPlugin = (key, ...args)=>{
    // HACK: Wait some time to allow text update to run first.
    setTimeout(()=>logseq.App.invokeExternalPlugin(key, ...args), 50);
    return "";
};
window.callCommand = (key, ...args)=>{
    // HACK: Wait some time to allow text update to run first.
    setTimeout(()=>logseq.App.invokeExternalCommand(key, ...args), 50);
    return "";
};

const TRIGGER_IMMEDIATE = 1;
const TRIGGER_WORD = 2;
const TRIGGER_SPACE = 3;
const TRIGGER_REGEX = 4;
const PairOpenChars = '{"（「『《〈“‘«';
const PairCloseChars = '}"）」』》〉”’»';
const WrapIdenChars = "$\"'([¥￥（【「《·“‘”’～«『";
const WrapOpenChars = "$\"'([$$（【「《`“‘“‘~«";
const WrapCloseChars = "$\"')]$$）】」》`”’”’~»";
const BuiltInSpecialKeys = [
    {
        trigger: "：：",
        type: TRIGGER_IMMEDIATE,
        repl: "::"
    },
    {
        trigger: "···",
        type: TRIGGER_IMMEDIATE,
        repl: "```|```"
    },
    {
        trigger: "～～",
        type: TRIGGER_IMMEDIATE,
        repl: "~~|~~"
    },
    {
        trigger: "〉》",
        type: TRIGGER_IMMEDIATE,
        repl: ">"
    },
    {
        trigger: "》〉",
        type: TRIGGER_IMMEDIATE,
        repl: ">"
    },
    {
        trigger: "》》",
        type: TRIGGER_IMMEDIATE,
        repl: ">"
    },
    {
        trigger: "【",
        type: TRIGGER_SPACE,
        repl: "[|]"
    }
];
let specialKeys = [
    ...BuiltInSpecialKeys
];
const evaluate = eval;
const WordBoundaryR = /[^\u2E80-\u2FFF\u31C0-\u31EF\u3300-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4FA-Za-z_]/;
const Punc = /^[!@#$%^&*\-+=_,./?;:！¥…—，。？；：]|\s$/;
let beforeInputTextArea = {};

function init() { // sets up a function that will be called whenever the specified event is delivered to the target.
    const appContainer = parent.document.getElementById("app-container");
    appContainer.addEventListener("keydown", keydownHandler);
    appContainer.addEventListener("beforeinput", beforeInputHandler);
    appContainer.addEventListener("input", inputHandler);
    appContainer.addEventListener("compositionend", inputHandler);
}

function cleanUp() {
    const appContainer = parent.document.getElementById("app-container");
    appContainer.removeEventListener("compositionend", inputHandler);
    appContainer.removeEventListener("input", inputHandler);
    appContainer.removeEventListener("beforeinput", beforeInputHandler);
    appContainer.removeEventListener("keydown", keydownHandler);
}

function reloadUserRules() {
    const userRules = getUserRules();
    if (userRules.length > 0) {
        specialKeys = [
            ...logseq.settings?.enableColon ? BuiltInSpecialKeys : BuiltInSpecialKeys.filter((rule)=>rule.trigger !== "：："),
            ...userRules
        ];
    }
}

async function reloadUserFns() {
    const fnStrings = (await logseq.DB.datascriptQuery(`[:find (pull ?b [:block/content])
      :where
      [?t :block/name ".fn"]
      [?b :block/refs ?t]]`) ?? []).map((item)=>item[0].content.match(/```.+\n((?:.|\n)+)\n```/)[1]);
    for (const fnStr of fnStrings){
        evaluate(fnStr);
    }
}

async function keydownHandler(e) {
    if (e.target.nodeName !== "TEXTAREA" || !e.target.parentElement.classList.contains("block-editor") || e.isComposing || e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
    const textarea = e.target;
    // Prevent Logseq's default '(', '（', '[' and '【' behavior for selections.
    if ((e.shiftKey && e.code === "Digit9" || !e.shiftKey && e.code === "BracketLeft") && textarea.selectionStart !== textarea.selectionEnd) {
        e.stopPropagation();
    }
    if (textarea.selectionStart === textarea.selectionEnd) {
        if (e.key === "Backspace") {
            // Pair deletion behavior.
            const prevChar = textarea.value[textarea.selectionStart - 1];
            const nextChar = textarea.value[textarea.selectionStart];
            const openIndex = PairOpenChars.indexOf(prevChar);
            if (openIndex > -1 && nextChar === PairCloseChars[openIndex]) {
                e.preventDefault();
                const blockUUID = textarea.closest("[blockid]").getAttribute("blockid");
                await updateText(textarea, blockUUID, "", -1, 1, 0);
            }
        }
    }
}


function beforeInputHandler(e) {
    if (e.target.nodeName !== "TEXTAREA" || !e.target.parentElement.classList.contains("block-editor") || e.data == null) return;
    // HACK: Workaround for Windows IME
    if (e.data.length === 1 && e.data === beforeInputTextArea.data) return;
    beforeInputTextArea = {
        data: e.data,
        value: e.target.value,
        selectionStart: e.target.selectionStart,
        selectionEnd: e.target.selectionEnd,
        focus: e.target.focus.bind(e.target),
        setSelectionRange: e.target.setSelectionRange.bind(e.target)
    };
}

async function inputHandler(e) {
    if (e.data == null || e.target.nodeName !== "TEXTAREA" || !e.target.parentElement.classList.contains("block-editor") || e.isComposing) return;
    const textarea = e.target;
    const before = beforeInputTextArea;
    // reset every beforeinput -> input/compositionend cycle.
    beforeInputTextArea = {};
    if (before.selectionStart !== before.selectionEnd && e.data.length === 1 && WrapIdenChars.includes(e.data) && before.value.substring(before.selectionStart, before.selectionEnd) !== e.data) {
        await handleSelection(before, e);
    } else {
        await handleSpecialKeys(textarea, e) || await handlePairs(textarea, e);
    }
}

async function handleSpecialKeys(textarea, e) {

    // The handleSpecialKeys function is an asynchronous function that processes special key inputs in a textarea. 
    // It takes two arguments: textarea, which is the textarea element where the input is being entered, and e, which is the event object associated with the input event.

    const char = e.data[e.data.length - 1];
    for (const { trigger , type , repl  } of specialKeys){ // Each element of specialkeys is a rule object with trigger, type, and repl properties.
        switch(type){
            case TRIGGER_IMMEDIATE:
                {
                    if (char === trigger[trigger.length - 1] && matchSpecialKey(textarea.value, textarea.selectionStart, trigger, 1)) {
                        const [barPos, replacement] = await processReplacement(repl);
                        // replacement=replacement.concat("extra text");
                        const cursor = barPos < 0 ? 0 : barPos - replacement.length + 1;
                        const blockUUID = getBlockUUID(e.target);
                        await updateText(textarea, blockUUID, barPos < 0 ? `${replacement}` : `${replacement.substring(0, barPos)}${replacement.substring(barPos + 1)}`, -trigger.length, 0, trigger !== "：：" ? cursor : null);
                        return true;
                    }
                    break;
                    
                }
            case TRIGGER_WORD:
                {
                    if (WordBoundaryR.test(char) && matchSpecialKey(textarea.value, textarea.selectionStart, trigger)) {
                        const [barPos1, replacement1] = await processReplacement(repl);
                        const cursor1 = barPos1 < 0 ? 0 : barPos1 - replacement1.length;
                        const blockUUID1 = getBlockUUID(e.target);
                        await updateText(textarea, blockUUID1, barPos1 < 0 ? `${replacement1}${char}` : `${replacement1.substring(0, barPos1)}${replacement1.substring(barPos1 + 1)}${char}`, -(trigger.length + 1), 0, cursor1);
                        return true;
                    }
                    break;
                }
            case TRIGGER_SPACE:
                {
                    if (char === " " && matchSpecialKey(textarea.value, textarea.selectionStart, trigger)) {
                        const [barPos2, replacement2] = await processReplacement(repl);
                        const cursor2 = barPos2 < 0 ? 0 : barPos2 - replacement2.length + 1;
                        const blockUUID2 = getBlockUUID(e.target);
                        await updateText(textarea, blockUUID2, barPos2 < 0 ? `${replacement2}` : `${replacement2.substring(0, barPos2)}${replacement2.substring(barPos2 + 1)}`, -(trigger.length + 1), 0, cursor2);
                        return true;
                    }
                    break;
                }
            case TRIGGER_REGEX:
                {
                  if (char === " ") {
                    // const text = textarea.value

                    const text = textarea.value.substring(0, textarea.selectionStart - 1).concat(textarea.value.substring(textarea.selectionStart));

                    const match = text.match(trigger);
                    if (match != null) {
                        const matchEnd = match.index + match[0].length; // index is the character where the first match starts. matchEnd is the end of the matched string.
                        const regexRepl = text.substring(match.index, matchEnd).replace(trigger, repl); // Perform the regex replacement to the substring
                        const [barPos3, replacement3] = await processReplacement(`${regexRepl}${text.substring(matchEnd)}`); // The dollar sign plugs in variables in {}
                        const cursor3 = barPos3 < 0 ? 0 : barPos3 - replacement3.length + 1;

                        if(yizhou_debugging){                        console.log(`REGEX match \n text=${text} \n str_to_match_start=${text.substring(0,match.index)} \n matchedtext=${text.substring(match.index, matchEnd)} \n barPos3=${barPos3} \n replacement3=${replacement3} \n cursor3=${cursor3} \n delstartoffset = ${-(text.length - match.index - 1)}`);}


                        const blockUUID3 = getBlockUUID(e.target);

                        //await updateText(textarea, blockUUID3, barPos3 < 0 ? `${replacement3}` : `${replacement3}`, -(text.length - match.index - 1), 0, cursor3);
                        await updateText(textarea, blockUUID3, barPos3 < 0 ? `${replacement3}` : `${replacement3}`, -(textarea.selectionStart - match.index), 0, cursor3);
                        
                        return true;
                    }
                  }
                    break;
                }
        }
    }
    return false;
}
async function handlePairs(textarea, e) {
    if (e.data.length > 1) return false;
    const char = getChar(e.data[0]);
    const i = getOpenPosition(char);
    const nextChar = textarea.value[textarea.selectionStart];
    const prevChar = textarea.value[textarea.selectionStart - 2];
    if (char === " " && prevChar === "（" && nextChar === "）") {
        const blockUUID = getBlockUUID(e.target);
        await updateText(textarea, blockUUID, "()", -2, 1, -1);
        return true;
    } else if (char === nextChar && PairCloseChars.includes(char)) {
        const blockUUID1 = getBlockUUID(e.target);
        await updateText(textarea, blockUUID1, "", -1, 0, 1);
        return true;
    } else if (i > -1) {
        if (char === "（" && prevChar === char && nextChar === PairCloseChars[i]) {
            const blockUUID2 = getBlockUUID(e.target);
            await updateText(textarea, blockUUID2, `((`, -2, 1, 0);
            return true;
        }
        if ((char === "〈" || char === "《") && (prevChar === "《" || prevChar === "〈") && (nextChar === "》" || nextChar === "〉")) {
            const blockUUID3 = getBlockUUID(e.target);
            await updateText(textarea, blockUUID3, `<`, -2, 1, 0);
            return true;
        }
        if ((char === "『" || char === "「") && prevChar === "「" && nextChar === "」") {
            const blockUUID4 = getBlockUUID(e.target);
            await updateText(textarea, blockUUID4, `{{}}`, -2, 1, -2);
            return true;
        }
        if (nextChar == null || PairCloseChars.includes(nextChar) || Punc.test(nextChar)) {
            const blockUUID5 = getBlockUUID(e.target);
            await updateText(textarea, blockUUID5, `${PairOpenChars[i]}${PairCloseChars[i]}`, -1, 0, -1);
            return true;
        }
    }
    return false;
}

async function handleSelection(textarea, e) {
    if (e.data.length > 1) return;
    const char = e.data[0];
    let i = WrapIdenChars.indexOf(char);
    if (i > -1) {
        const prevChar = textarea.value[textarea.selectionStart - 1];
        const nextChar = textarea.value[textarea.selectionEnd];
        if (prevChar === "「" && nextChar === "」" && (char === "「" || char === "『")) {
            const blockUUID = getBlockUUID(e.target);
            const text = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
            await updateText(textarea, blockUUID, `{{${text}}}`, -1, 1, 0, 2);
        } else if (prevChar === char && nextChar === WrapCloseChars[i]) {
            if (char === "（" || char === "(") {
                const blockUUID1 = getBlockUUID(e.target);
                const text1 = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
                await updateText(textarea, blockUUID1, `((${text1}))`, -1, 1, 0, 2);
            } else if (char === "【" || char === "[") {
                const blockUUID2 = getBlockUUID(e.target);
                const text2 = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
                await updateText(textarea, blockUUID2, `[[${text2}]]`, -1, 1, 0, 2);
            }
        } else {
            const blockUUID3 = getBlockUUID(e.target);
            const text3 = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
            await updateText(textarea, blockUUID3, `${WrapOpenChars[i]}${text3}${WrapCloseChars[i]}`);
        }
    }
}


function getBlockUUID(el) {
    return el.id.replace(/^edit-block-[0-9]+-/, "");
}


async function updateText(textarea, blockUUID, text, delStartOffset = 0, delEndOffset = 0, cursorOffset = 0, numWrapChars = 1) {
    // First, It calculates the start and end positions of the selection in the textarea, adjusted by delStartOffset and delEndOffset respectively.

    const collapsed = textarea.selectionStart === textarea.selectionEnd;
    const startPos = textarea.selectionStart + delStartOffset; // Start deletion from startPos, which is selectionStart (the cursor position) adjusted by the delStartOffset.
    const endPos = textarea.selectionEnd + delEndOffset;


    const newPos = startPos + text.length + cursorOffset; // It calculates the new cursor position by adding the length of the replacing text and cursorOffset to the start position.
    const content = textarea.value;

    if(yizhou_debugging){
    console.log(`\n Updatingtext \n string_sel_start = ${content.substring(0,textarea.selectionStart)} \n startPos=${startPos} \n string_start_pos = ${content.substring(0,startPos)} \n endPos=${endPos} \n newPos=${newPos} \n content=${content} \n replacingtext=${text}`)
    }

    try {
        await logseq.Editor.updateBlock(blockUUID, startPos < content.length ? `${content.substring(0, startPos)}${text}` : startPos === content.length ? `${content}${text}` : `${content} ${text}`);

      /* 
        updateBlock: ((srcBlock: BlockIdentity, content: string, opts?: Partial<{
            properties: {};
        }>) => Promise<void>)

      */
    } catch (err) {
        reject(err);
    }

    textarea.focus();
    if (cursorOffset != null) {
        textarea.setSelectionRange(collapsed ? newPos : startPos + numWrapChars, collapsed ? newPos : newPos - numWrapChars); // A general Javascript function, to select which text is selected. If not collapsed, the cursor is places at newPos (by setting the selectionRange to have zeo length.)
    }
}


function matchSpecialKey(text, start, trigger, skip = 0) {
    for(let i = trigger.length - 1 - skip, j = -2; i >= 0; i--, j--){
        if (text[start + j] !== trigger[i]) return false;
    }
    return true;
}


function findBarPos(str, calls) {
    chars: for(let i = str.length - 1; i >= 0; i--){
        if (str[i] === "@") {
            for (const call of calls){
                if (i >= call.start && i <= call.end) {
                    continue chars;
                }
            }
            return i;
        }
    }
    return -1;
}

function getUserRules() {
    const settings = logseq.settings;
    const ret = []; // It initializes an empty array ret to store the parsed rules.
    for (const key of Object.keys(settings)){
        const match = key.match(/([^0-9]+)(\d+)$/); // Looks for a sequence of non-digits followed by one or more digits at the end of the key.

        if (!match) {
          // If the key doesn't match the regex, it adds the corresponding setting to ret and ... 
            ret[key] = settings[key]; 
            continue; // ... continues to the next key.
        }

        const [, k, n] = match;
        const i = +n - 1;

        if (ret[i] == null) {
            ret[i] = {};
        }

        if (k === "trigger") { // 'trigger1' 'trigger2' ...
            const value = settings[key];
            if (value.length > 3 && value.endsWith("   ")) {

            ret[i].trigger = value.substring(0, value.length - 3);
            ret[i].type = TRIGGER_WORD;

            } else if (value.length > 2 && value.endsWith("  ")) {
                ret[i].trigger = value.substring(0, value.length - 2);
                ret[i].type = TRIGGER_SPACE;
            } else if (value.length > 1 && value.endsWith("\#")) {

            let str = value.substring(0, value.length - 1);
            if (str[str.length - 1] !== "$" || str[str.length - 2] === "\\") {
                str = `${str}$`;
            }
            ret[i].trigger = new RegExp(str);
            ret[i].type = TRIGGER_REGEX;

            } else {

              // This contains many built-in rules. Be careful.
              
              ret[i].trigger = value.substring(0, value.length);
              ret[i].type = TRIGGER_IMMEDIATE;

            }

        } else if (k === "replacement") {
            ret[i].repl = settings[key];
        }
    }
    return ret.filter((rule)=>rule.trigger); // this line of code is essentially filtering out any elements (rules) in the ret array that don't have a trigger property, or where the trigger property is falsy. The resulting array is then returned by the function.
}

function getChar(c) {
    switch(c){
        case "“":
            return "”";
        case "‘":
            return "’";
        default:
            return c;
    }
}
function getOpenPosition(c) {
    switch(c){
        case "”":
            return PairOpenChars.indexOf("“");
        case "’":
            return PairOpenChars.indexOf("‘");
        default:
            return PairOpenChars.indexOf(c);
    }
}

async function processReplacement(repl) {
    const calls = await Promise.all(Array.from(repl.matchAll(/\{\{((?:[^\{\}]|\{(?!\{)|\}(?!\}))+)\}\}/g)).map(async (m)=>{
        return {
            start: m.index,
            end: m.index + m[0].length,
            repl: await evaluate(m[1])
        };
    }));

    /*
    `The pattern it's looking for is text enclosed in double curly braces {{...}}. 
    The matched text (excluding the braces) is then passed to the evaluate function.`
    */

    let barPos = findBarPos(repl, calls);
    
    if(barPos > 0){
    barPos = barPos-1 //-1 accounts for the @ sign
    }
        
    if(yizhou_debugging){}
  
    /* 
    It seems I do not need any calls.


    if (calls.length > 0) {
      let i = 0;
      const segments = [];
      for (const call of calls){
          segments.push(repl.substring(i, call.start));
          segments.push(call.repl);
          i = call.end;
          if (call.end < barPos) {
              barPos += segments.join("").length - i;
          }
      }
      segments.push(repl.substring(i));
      return [
          barPos,
          segments.join("")
      ];
    }
    */
  

    return [
        barPos,
        repl.replace('@', '')
    ];
}

async function main() {
    await setup({
        builtinTranslations: {
            "zh-CN": zhCN
        }
    });
    await reloadUserFns();
    init();
    logseq.useSettingsSchema([
        {
            key: "enableColon",
            type: "boolean",
            default: true,
            description: t("Enable or not Chinese double-colon replacement.")
        },
        ...generateTriggerSchema()
    ]);
    const settingsOff = logseq.onSettingsChanged(reloadUserRules);
    logseq.App.registerCommandPalette({
        key: "reload-user-fns",
        label: t("Reload user functions")
    }, async ()=>{
        await reloadUserFns();
        await logseq.UI.showMsg(t("User defined functions reloaded."));
    });
    logseq.beforeunload(()=>{
        settingsOff();
        cleanUp();
    });
    console.log("#smart-typing loaded");
}

logseq.ready(main).catch(console.error);
