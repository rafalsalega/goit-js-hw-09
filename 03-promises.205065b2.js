!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=u);var o,i,a=u("6JpON"),c=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),f=document.querySelector('input[name="amount"]'),d=document.querySelector(".form"),s=0,p=function(e,n){return new Promise((function(t,r){o=Number.parseInt(c.value),i=Number.parseInt(l.value),setTimeout((function(){Math.random()>.3?t("Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("Rejected promise ".concat(e," in ").concat(n,"ms"))}),o+i*s)}))};d.addEventListener("submit",(function(n){for(n.preventDefault(),o=Number.parseInt(c.value),i=Number.parseInt(l.value);s<Number.parseInt(f.value);s+=1)p(s+1,o+i*s).then((function(n){return e(a).Notify.success(n)})).catch((function(n){return e(a).Notify.failure(n)}));s=0}))}();
//# sourceMappingURL=03-promises.205065b2.js.map