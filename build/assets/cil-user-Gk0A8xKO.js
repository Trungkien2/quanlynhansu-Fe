import{r as g,R as E,q as x,_ as R,a as D,c as M,P as b}from"./index-CYrbnSnq.js";function V(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];return g.useMemo(function(){return n.every(function(o){return o==null})?null:function(o){n.forEach(function(i){_(i,o)})}},n)}function _(n,a){if(n!=null)if(L(n))n(a);else try{n.current=a}catch{throw new Error('Cannot assign value "'.concat(a,'" to ref "').concat(n,'"'))}}function L(n){return!!(n&&{}.toString.call(n)=="[object Function]")}function P(n,a){if(n==null)return{};var o={},i=Object.keys(n),e,t;for(t=0;t<i.length;t++)e=i[t],!(a.indexOf(e)>=0)&&(o[e]=n[e]);return o}function N(n,a){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,e){return i.__proto__=e,i},N(n,a)}function w(n,a){n.prototype=Object.create(a.prototype),n.prototype.constructor=n,N(n,a)}var S={disabled:!1},k=E.createContext(null),I=function(a){return a.scrollTop},m="unmounted",c="exited",p="entering",h="entered",T="exiting",l=function(n){w(a,n);function a(i,e){var t;t=n.call(this,i,e)||this;var r=e,s=r&&!r.isMounting?i.enter:i.appear,u;return t.appearStatus=null,i.in?s?(u=c,t.appearStatus=p):u=h:i.unmountOnExit||i.mountOnEnter?u=m:u=c,t.state={status:u},t.nextCallback=null,t}a.getDerivedStateFromProps=function(e,t){var r=e.in;return r&&t.status===m?{status:c}:null};var o=a.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var r=this.state.status;this.props.in?r!==p&&r!==h&&(t=p):(r===p||r===h)&&(t=T)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e=this.props.timeout,t,r,s;return t=r=s=e,e!=null&&typeof e!="number"&&(t=e.exit,r=e.enter,s=e.appear!==void 0?e.appear:r),{exit:t,enter:r,appear:s}},o.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this);r&&I(r)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:m})},o.performEnter=function(e){var t=this,r=this.props.enter,s=this.context?this.context.isMounting:e,u=this.props.nodeRef?[s]:[x.findDOMNode(this),s],f=u[0],v=u[1],y=this.getTimeouts(),O=s?y.appear:y.enter;if(!e&&!r||S.disabled){this.safeSetState({status:h},function(){t.props.onEntered(f)});return}this.props.onEnter(f,v),this.safeSetState({status:p},function(){t.props.onEntering(f,v),t.onTransitionEnd(O,function(){t.safeSetState({status:h},function(){t.props.onEntered(f,v)})})})},o.performExit=function(){var e=this,t=this.props.exit,r=this.getTimeouts(),s=this.props.nodeRef?void 0:x.findDOMNode(this);if(!t||S.disabled){this.safeSetState({status:c},function(){e.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:T},function(){e.props.onExiting(s),e.onTransitionEnd(r.exit,function(){e.safeSetState({status:c},function(){e.props.onExited(s)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,r=!0;return this.nextCallback=function(s){r&&(r=!1,t.nextCallback=null,e(s))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this),s=e==null&&!this.props.addEndListener;if(!r||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],f=u[0],v=u[1];this.props.addEndListener(f,v)}e!=null&&setTimeout(this.nextCallback,e)},o.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,r=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var s=P(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return E.createElement(k.Provider,{value:null},typeof r=="function"?r(e,s):E.cloneElement(E.Children.only(r),s))},a}(E.Component);l.contextType=k;l.propTypes={};function d(){}l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};l.UNMOUNTED=m;l.EXITED=c;l.ENTERING=p;l.ENTERED=h;l.EXITING=T;var j=l,C=g.forwardRef(function(n,a){var o=n.className,i=n.dark,e=n.disabled,t=n.white,r=R(n,["className","dark","disabled","white"]);return E.createElement("button",D({type:"button",className:M("btn","btn-close",{"btn-close-white":t},e,o),"aria-label":"Close",disabled:e},i&&{"data-coreui-theme":"dark"},r,{ref:a}))});C.propTypes={className:b.string,dark:b.bool,disabled:b.bool,white:b.bool};C.displayName="CCloseButton";var A=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"],G=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"];export{C,j as T,w as _,A as a,P as b,G as c,I as f,V as u};