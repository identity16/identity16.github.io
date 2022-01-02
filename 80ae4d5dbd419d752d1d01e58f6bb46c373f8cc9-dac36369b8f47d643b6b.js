"use strict";(self.webpackChunkidentity16_github_io=self.webpackChunkidentity16_github_io||[]).push([[664],{1496:function(e,t,a){var i=a(5318);t.Z=void 0;var r,n=i(a(1506)),s=i(a(5354)),d=i(a(7316)),o=i(a(7154)),l=i(a(7294)),c=i(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=L([].concat(t.fluid))),t.fixed&&(t.fixed=L([].concat(t.fixed))),t},g=function(e){var t=e.media;return!!t&&(S&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=h(t||a||[]);return i&&i.src},h=function(e){if(S&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(g);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),b=function(e){var t=f(e),a=p(t);return m[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,S="undefined"!=typeof window,v=S&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function L(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+d+a+i+t+n+r+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(C,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),d):d})),C=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,g=e.draggable,p=e.ariaHidden,h=(0,d.default)(e,u);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},h,{onLoad:s,onError:c,ref:t,loading:f,draggable:g,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=S&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||S&&(y||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:S}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,w=e.loading,L=e.draggable,x=p||m;if(!x)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,o.default)({opacity:O?1:0,transition:k?"opacity "+y+"ms":"none"},d),N="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},P=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&T,d,u),W={title:t,alt:this.state.isVisible?"":a,style:P,className:g,itemProp:v},j=this.state.isHydrated?h(x):x[0];if(p)return l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),N&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&T)}),j.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:W,imageVariants:x,generateSources:I}),j.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:W,imageVariants:x,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,E(x),l.default.createElement(C,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:w},j,{imageVariants:x}))}}));if(m){var M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},N&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},k&&T)}),j.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:W,imageVariants:x,generateSources:I}),j.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:W,imageVariants:x,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,E(x),l.default.createElement(C,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:w},j,{imageVariants:x}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function T(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}k.propTypes={resolutions:H,sizes:N,fixed:T(c.default.oneOfType([H,c.default.arrayOf(H)])),fluid:T(c.default.oneOfType([N,c.default.arrayOf(N)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=k;t.Z=P},7002:function(e,t,a){a.d(t,{Z:function(){return s}});var i=a(5444),r=a(6125),n=a(7294);var s=function(e){var t=e.pageTitle,s=e.children,d=e.className,o=(0,i.K2)("3159585216");return n.createElement(n.Fragment,null,n.createElement("title",null,t," | ",o.site.siteMetadata.title),n.createElement("nav",{className:"layout-module--gnb--3-Rne"},n.createElement(i.rU,{to:"/",className:"layout-module--logo---3dvO"},n.createElement(r.S,{src:"../images/logo.png",alt:"ㅂㄹㄱ",__imageData:a(2217)}))),n.createElement("main",{className:"layout-module--container--eLBMS "+d},s))}},2217:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/b5bf53c5ebc9b6d54687610cfb32d93a/b2bbd/logo.png","srcSet":"/static/b5bf53c5ebc9b6d54687610cfb32d93a/02c0a/logo.png 19w,\\n/static/b5bf53c5ebc9b6d54687610cfb32d93a/78ac0/logo.png 37w,\\n/static/b5bf53c5ebc9b6d54687610cfb32d93a/b2bbd/logo.png 74w","sizes":"(min-width: 74px) 74px, 100vw"},"sources":[{"srcSet":"/static/b5bf53c5ebc9b6d54687610cfb32d93a/70e44/logo.webp 19w,\\n/static/b5bf53c5ebc9b6d54687610cfb32d93a/c6fd7/logo.webp 37w,\\n/static/b5bf53c5ebc9b6d54687610cfb32d93a/371c9/logo.webp 74w","type":"image/webp","sizes":"(min-width: 74px) 74px, 100vw"}]},"width":74,"height":32}')}}]);
//# sourceMappingURL=80ae4d5dbd419d752d1d01e58f6bb46c373f8cc9-dac36369b8f47d643b6b.js.map