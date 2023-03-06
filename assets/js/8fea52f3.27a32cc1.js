"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[91499],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),b=r,m=p["".concat(u,".").concat(b)]||p[b]||d[b]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(83117),r=a(67294),i=a(86010),o=a(12466),l=a(16550),u=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function b(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,a,n,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),h=f[0],v=f[1],k=m({queryString:u,groupId:s}),g=k[0],N=k[1],C=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,c.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),y=C[0],w=C[1],T=function(){var e=null!=g?g:y;return b({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&v(T)}),[T]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!b({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),N(e),w(e)}),[N,w,p]),tabValues:p}}var h=a(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,a=e.block,l=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(p(t),u(n))},b=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;a=null!=(i=c[o])?i:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:b,onClick:d},o,{className:(0,i.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function g(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var i=a.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function C(e){var t=(0,h.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},78875:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=(a(74866),a(85162),["components"]),l={id:"tab-navigator",title:"TabNavigator reference",sidebar_label:"TabNavigator"},u=void 0,s={unversionedId:"tab-navigator",id:"version-1.x/tab-navigator",title:"TabNavigator reference",description:"RouteConfigs",source:"@site/versioned_docs/version-1.x/tab-navigator.md",sourceDirName:".",slug:"/tab-navigator",permalink:"/docs/1.x/tab-navigator",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/tab-navigator.md",tags:[],version:"1.x",frontMatter:{id:"tab-navigator",title:"TabNavigator reference",sidebar_label:"TabNavigator"},sidebar:"api",previous:{title:"SwitchNavigator",permalink:"/docs/1.x/switch-navigator"},next:{title:"DrawerNavigator",permalink:"/docs/1.x/drawer-navigator"}},c={},p=[{value:"RouteConfigs",id:"routeconfigs",level:2},{value:"TabNavigatorConfig",id:"tabnavigatorconfig",level:2},{value:"<code>tabBarOptions</code> for <code>TabBarBottom</code> (default tab bar on iOS)",id:"tabbaroptions-for-tabbarbottom-default-tab-bar-on-ios",level:3},{value:"<code>tabBarOptions</code> for <code>TabBarTop</code> (default tab bar on Android)",id:"tabbaroptions-for-tabbartop-default-tab-bar-on-android",level:3},{value:"<code>navigationOptions</code> used by <code>TabNavigator</code>",id:"navigationoptions-used-by-tabnavigator",level:2},{value:"<code>title</code>",id:"title",level:4},{value:"<code>tabBarVisible</code>",id:"tabbarvisible",level:4},{value:"<code>swipeEnabled</code>",id:"swipeenabled",level:4},{value:"<code>tabBarIcon</code>",id:"tabbaricon",level:4},{value:"<code>tabBarLabel</code>",id:"tabbarlabel",level:4},{value:"<code>tabBarOnPress</code>",id:"tabbaronpress",level:4},{value:"Navigator props",id:"navigator-props",level:2}],d={toc:p},b="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(b,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"TabNavigator(RouteConfigs, TabNavigatorConfig)\n")),(0,i.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,i.kt)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.x/stack-navigator#routeconfigs"},"example")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"StackNavigator"),"."),(0,i.kt)("h2",{id:"tabnavigatorconfig"},"TabNavigatorConfig"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarComponent")," - Component to use as the tab bar, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"TabBarBottom"),"\n(this is the default on iOS), ",(0,i.kt)("inlineCode",{parentName:"li"},"TabBarTop"),"\n(this is the default on Android)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarPosition")," - Position of the tab bar, can be ",(0,i.kt)("inlineCode",{parentName:"li"},"'top'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swipeEnabled")," - Whether to allow swiping between tabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"animationEnabled")," - Whether to animate when changing tabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lazy")," - Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". If ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", all tabs are rendered immediately. When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", tabs are rendered only when they are made active."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"removeClippedSubviews")," - Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". An optimization to reduce memory usage by freeing resources used by inactive tabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configureTransition")," - a function that, given ",(0,i.kt)("inlineCode",{parentName:"li"},"currentTransitionProps")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nextTransitionProps"),", returns a configuration object that describes the animation between tabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialLayout")," - Optional object containing the initial ",(0,i.kt)("inlineCode",{parentName:"li"},"height")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"width"),", can be passed to prevent the one frame delay in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/react-native-tab-view#avoid-one-frame-delay"},"react-native-tab-view")," rendering."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarOptions")," - Configure the tab bar, see below.")),(0,i.kt)("p",null,"Several options get passed to the underlying router to modify navigation logic:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the tabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"backBehavior")," - Should the back button cause a tab switch to the initial tab? If yes, set to ",(0,i.kt)("inlineCode",{parentName:"li"},"initialRoute"),", otherwise ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),". Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"initialRoute")," behavior.")),(0,i.kt)("h3",{id:"tabbaroptions-for-tabbarbottom-default-tab-bar-on-ios"},(0,i.kt)("inlineCode",{parentName:"h3"},"tabBarOptions")," for ",(0,i.kt)("inlineCode",{parentName:"h3"},"TabBarBottom")," (default tab bar on iOS)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeBackgroundColor")," - Background color of the active tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inactiveBackgroundColor")," - Background color of the inactive tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"tabBarOptions: {\n  activeTintColor: '#e91e63',\n  labelStyle: {\n    fontSize: 12,\n  },\n  style: {\n    backgroundColor: 'blue',\n  },\n}\n")),(0,i.kt)("h3",{id:"tabbaroptions-for-tabbartop-default-tab-bar-on-android"},(0,i.kt)("inlineCode",{parentName:"h3"},"tabBarOptions")," for ",(0,i.kt)("inlineCode",{parentName:"h3"},"TabBarTop")," (default tab bar on Android)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upperCaseLabel")," - Whether to make label uppercase, default is true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pressColor")," - Color for material ripple (Android >= 5.0 only)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pressOpacity")," - Opacity for pressed tab (iOS and Android < 5.0 only)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scrollEnabled")," - Whether to enable scrollable tabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"indicatorStyle")," - Style object for the tab indicator (line at the bottom of the tab)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iconStyle")," - Style object for the tab icon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"tabBarOptions: {\n  labelStyle: {\n    fontSize: 12,\n  },\n  tabStyle: {\n    width: 100,    \n  },\n  style: {\n    backgroundColor: 'blue',\n  },\n}\n")),(0,i.kt)("h2",{id:"navigationoptions-used-by-tabnavigator"},(0,i.kt)("inlineCode",{parentName:"h2"},"navigationOptions")," used by ",(0,i.kt)("inlineCode",{parentName:"h2"},"TabNavigator")),(0,i.kt)("h4",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")),(0,i.kt)("p",null,"Generic title that can be used as a fallback for ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,i.kt)("h4",{id:"tabbarvisible"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarVisible")),(0,i.kt)("p",null,"True or false to show or hide the tab bar, if not set then defaults to true."),(0,i.kt)("h4",{id:"swipeenabled"},(0,i.kt)("inlineCode",{parentName:"h4"},"swipeEnabled")),(0,i.kt)("p",null,"True or false to enable or disable swiping between tabs, if not set then defaults to TabNavigatorConfig option swipeEnabled."),(0,i.kt)("h4",{id:"tabbaricon"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,i.kt)("p",null,"React Element or a function that given ",(0,i.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in tab bar."),(0,i.kt)("h4",{id:"tabbarlabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,i.kt)("p",null,"Title string of a tab displayed in the tab bar or React Element or a function that given ",(0,i.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),(0,i.kt)("h4",{id:"tabbaronpress"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarOnPress")),(0,i.kt)("p",null,"Callback to handle tap events; the argument is an object containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"previousScene: { route, index }")," which is the scene we are leaving"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"scene: { route, index }")," that was tapped"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"jumpToIndex")," method that can perform the navigation for you")),(0,i.kt)("p",null,"Useful for adding a custom logic before the transition to the next scene (the tapped one) starts."),(0,i.kt)("p",null,"Define this callback without ever invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"jumpToIndex")," to prevent any navigation from occurring."),(0,i.kt)("h2",{id:"navigator-props"},"Navigator props"),(0,i.kt)("p",null,"The navigator component created by ",(0,i.kt)("inlineCode",{parentName:"p"},"TabNavigator(...)")," takes the following props:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenProps")," - Pass down extra options to child screens and navigation options, for example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const TabNav = TabNavigator({\n  // config\n});\n\n<TabNav\n  screenProps={/* this prop will get passed to the screen components as this.props.screenProps */}\n/>\n")))}m.isMDXComponent=!0}}]);