(self.webpackChunkidentity16_github_io=self.webpackChunkidentity16_github_io||[]).push([[7],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),l=r(7316),u=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,u),c=f(t),d=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:p},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(d,s({},a))}},7002:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5444),o=r(7294),a="layout-module--nav-link-item--pfCo2",l="layout-module--nav-link-text--ac2nV";var u=function(e){var t=e.pageTitle,r=e.children,u=(0,n.K2)("3159585216");return o.createElement("div",{className:"layout-module--container--eLBMS"},o.createElement("title",null,t," | ",u.site.siteMetadata.title),o.createElement("header",{className:"layout-module--site-title--5N6mf"},u.site.siteMetadata.title),o.createElement("nav",null,o.createElement("ul",{className:"layout-module--nav-links--EROwB"},o.createElement("li",{className:a},o.createElement(n.rU,{to:"/",className:l},"Home")),o.createElement("li",{className:a},o.createElement(n.rU,{to:"/about",className:l},"About")),o.createElement("li",{className:a},o.createElement(n.rU,{to:"/blog",className:l},"Blog")))),o.createElement("main",null,o.createElement("h1",{className:"layout-module--heading--8VjLO"},t),r))}},223:function(e,t,r){"use strict";r.r(t);var n=r(6725),o=r(7294),a=r(7002);t.default=function(e){var t=e.data;return o.createElement(a.Z,{pageTitle:"Blog Posts"},t.allMdx.nodes.map((function(e){return o.createElement("article",{key:e.id},o.createElement("h2",null,e.frontmatter.title),o.createElement("p",null,"Posted: ",e.frontmatter.date),o.createElement(n.MDXRenderer,null,e.body))})))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-c5aec02ce7c27d023614.js.map