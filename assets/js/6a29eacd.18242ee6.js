"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[21513],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),v=a,d=p["".concat(l,".").concat(v)]||p[v]||f[v]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=v;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294),a=r(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(83117),a=r(67294),o=r(86010),i=r(12466),u=r(16550),l=r(91980),s=r(67392),c=r(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function v(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,r,n,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,p=f(e),m=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!v({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),b=m[0],h=m[1],g=d({queryString:l,groupId:s}),y=g[0],w=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=k[0],E=k[1],O=function(){var e=null!=y?y:N;return v({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){O&&h(O)}),[O]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!v({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),w(e),E(e)}),[w,E,p]),tabValues:p}}var b=r(72389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(p(t),l(n))},v=function(e){var t,r=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;r=null!=(o=c[i])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:v,onClick:f},i,{className:(0,o.Z)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var o=r.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function k(e){var t=(0,b.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},20454:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=(r(74866),r(85162),["components"]),u={id:"supported-react-native-versions",title:"Supported React Native versions",sidebar_label:"Supported React Native versions"},l=void 0,s={unversionedId:"supported-react-native-versions",id:"version-2.x/supported-react-native-versions",title:"Supported React Native versions",description:"Currently at the time of writing, react-navigation@2.x will work on most of the previous react-native versions, until the lean core effort finally removes AsyncStorage out of react-native.",source:"@site/versioned_docs/version-2.x/supported-react-native-versions.md",sourceDirName:".",slug:"/supported-react-native-versions",permalink:"/docs/2.x/supported-react-native-versions",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/supported-react-native-versions.md",tags:[],version:"2.x",frontMatter:{id:"supported-react-native-versions",title:"Supported React Native versions",sidebar_label:"Supported React Native versions"},sidebar:"version-2.x-docs",previous:{title:"Hello React Navigation",permalink:"/docs/2.x/hello-react-navigation"},next:{title:"Moving between screens",permalink:"/docs/2.x/navigating"}},c={},p=[],f={toc:p},v="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(v,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Currently at the time of writing, ",(0,o.kt)("inlineCode",{parentName:"p"},"react-navigation@2.x")," will work on most of the previous ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," versions, until the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/23313"},"lean core effort")," finally removes ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," out of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native"),"."),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/react-native-screens"},"react-native-screens")," (supported in ",(0,o.kt)("inlineCode",{parentName:"p"},"react-navigation@^2.14.0"),"), you will need to be aware of its own supported ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," version too."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note that the statements above may not be correct for a particular ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," version. If you notice a version that is not working properly, feel free to either file an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation.github.io/issues/new"},"issue")," or correct it in this page.")))}d.isMDXComponent=!0}}]);