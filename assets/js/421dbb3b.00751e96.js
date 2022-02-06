"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2782],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24356:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"handling-iphonex",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},c=void 0,l={unversionedId:"handling-iphonex",id:"version-3.x/handling-iphonex",isDocsHomePage:!1,title:"Supporting safe areas",description:'By default, React Navigation aids in ensuring your application displays correctly on the iPhone X and other devices with notches and "safe areas". It does so by using SafeAreaView inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.',source:"@site/versioned_docs/version-3.x/handling-iphonex.md",sourceDirName:".",slug:"/handling-iphonex",permalink:"/docs/3.x/handling-iphonex",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/handling-iphonex.md",tags:[],version:"3.x",frontMatter:{id:"handling-iphonex",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},sidebar:"version-3.x-docs",previous:{title:"Authentication flows",permalink:"/docs/3.x/auth-flow"},next:{title:"Different status bar configuration based on route",permalink:"/docs/3.x/status-bar"}},p=[{value:"Hidden/Custom Navigation Bar or Tab Bar",id:"hiddencustom-navigation-bar-or-tab-bar",children:[],level:2},{value:"Landscape Mode",id:"landscape-mode",children:[],level:2},{value:"Use <code>forceInset</code> to get more control",id:"use-forceinset-to-get-more-control",children:[],level:2},{value:"Android notches",id:"android-notches",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'By default, React Navigation aids in ensuring your application displays correctly on the iPhone X and other devices with notches and "safe areas". It does so by using ',(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView"),' inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.'),(0,o.kt)("p",null,"The goal is to (a) maximize usage of the screen (b) without hiding content or making it difficult to interact with by having it obscured by a physical display cutout or some operating system UI."),(0,o.kt)("p",null,"It's tempting to solve (a) by wrapping your entire app in a container with padding that ensures all content will not be occluded. But in doing so, we waste a bunch of space on the screen, as pictured in the image on the left below. What we ideally want is the image pictured on the right. We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," for this. The rest of this guide gives more information on how to support safe areas in React Navigation."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(93656).Z})),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/boring-safe-area",target:"blank",class:"run-code-button"},"\u2192 Run the example pictured on the left")," or, preferably, ",(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/nice-safe-area",target:"blank",class:"run-code-button"},"run the example pictured on the right."),(0,o.kt)("h2",{id:"hiddencustom-navigation-bar-or-tab-bar"},"Hidden/Custom Navigation Bar or Tab Bar"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Default React Navigation Behavior",src:n(87760).Z})),(0,o.kt)("p",null,"However, if you're overriding the default navigation bar, it's important to ensure your UI doesn't interfere with either of those hardware elements."),(0,o.kt)("p",null,"For example, if I render nothing for the ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tabBarComponent"),", nothing renders"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const Tabs = createBottomTabNavigator({\n  ...\n}, {\n  tabBarComponent: () => null,\n});\n\nexport default createStackNavigator({\n  ...\n}, {\n  headerMode: 'none',\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Text hidden by iPhoneX UI elements",src:n(84588).Z})),(0,o.kt)("p",null,"To fix this issue you can wrap your content in a ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView"),", which can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"react-navigation"),". Recall that ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," should not wrap entire navigators, just the screen components or any content in them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { SafeAreaView } from 'react-navigation'\n\nclass MyHomeScreen extends Component {\n  render() {\n    return (\n      <SafeAreaView style={styles.container}>\n        <Text style={styles.paragraph}>This is top text.</Text>\n        <Text style={styles.paragraph}>This is bottom text.</Text>\n      </SafeAreaView>\n    )\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Content spaced correctly with SafeAreaView",src:n(89059).Z})),(0,o.kt)("p",null,"This will detect if the app is running on an iPhoneX and, if so, ensure the content isn't hidden behind any hardware elements."),(0,o.kt)("h2",{id:"landscape-mode"},"Landscape Mode"),(0,o.kt)("p",null,"Even if you're using the default navigation bar and tab bar if your application works in landscape mode it's important to ensure you content isn't hidden behind the sensor cluster."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App in landscape mode with text hidden",src:n(80145).Z})),(0,o.kt)("p",null,"To fix this you can, once again, wrap your content in a ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView"),". This will not conflict with the navigation bar nor the tab bar's default behavior in portrait mode."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App in landscape mode with text visible",src:n(1061).Z})),(0,o.kt)("p",null,"In conclusion, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," component on the screens you register with a React Navigation navigator."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/react-navigation-docs:-iphonex-demo-v3"},"Snack")," is available with the code used in this overview."),(0,o.kt)("h2",{id:"use-forceinset-to-get-more-control"},"Use ",(0,o.kt)("inlineCode",{parentName:"h2"},"forceInset")," to get more control"),(0,o.kt)("p",null,"In some cases you might need more control over which paddings are applied. For example, you can remove bottom padding by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"forceInset")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>\n  <Text style={styles.paragraph}>This is top text.</Text>\n  <Text style={styles.paragraph}>This is bottom text.</Text>\n</SafeAreaView>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"forceInset")," takes an object with the keys ",(0,o.kt)("inlineCode",{parentName:"p"},"top | bottom | left | right | vertical | horizontal")," and the values ",(0,o.kt)("inlineCode",{parentName:"p"},"'always' | 'never'"),". Or you can override the padding altogether by passing an integer."),(0,o.kt)("p",null,"There is also a ",(0,o.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/react-navigation-docs:-safeareaview-demo-v3"},"Snack")," available to demonstrate how ",(0,o.kt)("inlineCode",{parentName:"p"},"forceInset")," behaves."),(0,o.kt)("h2",{id:"android-notches"},"Android notches"),(0,o.kt)("p",null,"React Native does not currently expose an API to access information about device cutouts on Android devices. If your app has an opaque status bar (the default in React Native), that may handle the area where the device has its cutout without any further work required. If not, to workaround this you may want to use the following temporary workaround:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-community/react-native-device-info"},"react-native-device-info"),"."),(0,o.kt)("li",{parentName:"ul"},"Check if the device has a notch with ",(0,o.kt)("inlineCode",{parentName:"li"},"DeviceInfo.hasNotch()")," - this compares the device brand and model to a list of devices with notches - a crude but effective workaround."),(0,o.kt)("li",{parentName:"ul"},"If the device has a notch, you may want to increase the status bar height known to the SafeAreaView by doing something like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Platform } from 'react-native'\nimport { SafeAreaView } from 'react-navigation'\nimport DeviceInfo from 'react-native-device-info'\n\nif (Platform.OS === 'android' && DeviceInfo.hasNotch()) {\n  SafeAreaView\n    .setStatusBarHeight\n    /* Some value for status bar height + notch height */\n    ()\n}\n")),(0,o.kt)("p",null,"Work is in progress on a longer term solution, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/pull/20999"},"this pull request")," for more information."))}u.isMDXComponent=!0},93656:function(e,t,n){t.Z=n.p+"assets/images/00-intro-4709ed78711b21c7bd54d2a1385262bb.png"},87760:function(e,t,n){t.Z=n.p+"assets/images/01-iphonex-default-2588bf4cb73433282b14319e54ea4815.png"},84588:function(e,t,n){t.Z=n.p+"assets/images/02-iphonex-content-hidden-2a5db62e9fa6340cfb3e8f5a4250b7d4.png"},89059:function(e,t,n){t.Z=n.p+"assets/images/03-iphonex-content-fixed-cb656e6a268a30af3f9aae2b6f3d4c64.png"},80145:function(e,t,n){t.Z=n.p+"assets/images/04-iphonex-landscape-hidden-113cbaf522b57ff8fbfdf4b1b39411d3.png"},1061:function(e,t,n){t.Z=n.p+"assets/images/05-iphonex-landscape-fixed-0d90c3fe5813cdd8664946c5873d7f57.png"}}]);