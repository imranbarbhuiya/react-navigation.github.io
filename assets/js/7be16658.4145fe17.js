"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[20694],{38630:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=t(85893),r=t(11151),s=t(74866),o=t(85162);const i={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Status bar configuration"},c=void 0,u={id:"status-bar",title:"Different status bar configuration based on route",description:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.",source:"@site/versioned_docs/version-7.x/status-bar.md",sourceDirName:".",slug:"/status-bar",permalink:"/docs/7.x/status-bar",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/status-bar.md",tags:[],version:"7.x",frontMatter:{id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Status bar configuration"},sidebar:"docs",previous:{title:"Hiding tab bar in screens",permalink:"/docs/7.x/hiding-tabbar-in-screens"},next:{title:"Opening a modal",permalink:"/docs/7.x/modal"}},l={},d=[{value:"Stack",id:"stack",level:2},{value:"Tabs and Drawer",id:"tabs-and-drawer",level:2}];function g(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."}),"\n",(0,a.jsx)(e.h2,{id:"stack",children:"Stack"}),"\n",(0,a.jsxs)(e.p,{children:["This is a simple task when using a stack. You can render the ",(0,a.jsx)(e.code,{children:"StatusBar"})," component, which is exposed by React Native, and set your config."]}),"\n",(0,a.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Different status bar","data-snack":"true","data-version":"7",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Different status bar" snack version=7',children:"import * as React from 'react';\nimport { View, Text, StatusBar, StyleSheet } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\nimport { useSafeAreaInsets } from 'react-native-safe-area-context';\n\nfunction Screen1() {\n  const navigation = useNavigation();\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#6a51ae',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      // highlight-start\n      <StatusBar barStyle=\"light-content\" backgroundColor=\"#6a51ae\" />\n      // highlight-end\n      <Text style={{ color: '#fff' }}>Light Screen</Text>\n      <Button onPress={() => navigation.navigate('Screen2')}>\n        Next screen\n      </Button>\n    </View>\n  );\n}\n\nfunction Screen2() {\n  const navigation = useNavigation();\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#ecf0f1',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      // highlight-start\n      <StatusBar barStyle=\"dark-content\" backgroundColor=\"#ecf0f1\" />\n      // highlight-end\n      <Text>Dark Screen</Text>\n      <Button onPress={() => navigation.navigate('Screen1')}>\n        Next screen\n      </Button>\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator({\n  screenOptions: {\n    headerShown: false,\n  },\n  screens: {\n    Screen1: Screen1,\n    Screen2: Screen2,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n});\n"})})}),(0,a.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Different status bar","data-snack":"true","data-version":"7",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Different status bar" snack version=7',children:"import * as React from 'react';\nimport { View, Text, StatusBar, StyleSheet } from 'react-native';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\nimport {\n  SafeAreaProvider,\n  useSafeAreaInsets,\n} from 'react-native-safe-area-context';\n\nfunction Screen1() {\n  const navigation = useNavigation();\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#6a51ae',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      // highlight-start\n      <StatusBar barStyle=\"light-content\" backgroundColor=\"#6a51ae\" />\n      // highlight-end\n      <Text style={{ color: '#fff' }}>Light Screen</Text>\n      <Button onPress={() => navigation.navigate('Screen2')}>\n        Next screen\n      </Button>\n    </View>\n  );\n}\n\nfunction Screen2() {\n  const navigation = useNavigation();\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#ecf0f1',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      // highlight-start\n      <StatusBar barStyle=\"dark-content\" backgroundColor=\"#ecf0f1\" />\n      // highlight-end\n      <Text>Dark Screen</Text>\n      <Button onPress={() => navigation.navigate('Screen1')}>\n        Next screen\n      </Button>\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>\n        <Stack.Navigator screenOptions={{ headerShown: false }}>\n          <Stack.Screen name=\"Screen1\" component={Screen1} />\n          <Stack.Screen name=\"Screen2\" component={Screen2} />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n"})})})]}),"\n",(0,a.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,a.jsx)("source",{src:"/assets/statusbar/status-stack-ios.mp4"})}),"\n",(0,a.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,a.jsx)("source",{src:"/assets/statusbar/status-stack-android.mp4"})}),"\n",(0,a.jsx)(e.h2,{id:"tabs-and-drawer",children:"Tabs and Drawer"}),"\n",(0,a.jsxs)(e.p,{children:["If you're using a tab or drawer navigator, it's a bit more complex because all of the screens in the navigator might be rendered at once and kept rendered - that means that the last ",(0,a.jsx)(e.code,{children:"StatusBar"})," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."]}),"\n",(0,a.jsxs)(e.p,{children:["To fix this, we'll have to do make the status bar component aware of screen focus and render it only when the screen is focused. We can achieve this by using the ",(0,a.jsxs)(e.a,{href:"/docs/7.x/use-is-focused",children:[(0,a.jsx)(e.code,{children:"useIsFocused"})," hook"]})," and creating a wrapper component:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import * as React from 'react';\nimport { StatusBar } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction FocusAwareStatusBar(props) {\n  const isFocused = useIsFocused();\n\n  return isFocused ? <StatusBar {...props} /> : null;\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Now, our screens (both ",(0,a.jsx)(e.code,{children:"Screen1.js"})," and ",(0,a.jsx)(e.code,{children:"Screen2.js"}),") will use the ",(0,a.jsx)(e.code,{children:"FocusAwareStatusBar"})," component instead of the ",(0,a.jsx)(e.code,{children:"StatusBar"})," component from React Native:"]}),"\n",(0,a.jsx)("samp",{id:"focus-status-bar"}),"\n",(0,a.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Different status bar based on tabs","data-snack":"true","data-version":"7",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Different status bar based on tabs" snack version=7',children:"import * as React from 'react';\nimport { View, Text, StatusBar, StyleSheet } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\nimport { useSafeAreaInsets } from 'react-native-safe-area-context';\n\nfunction FocusAwareStatusBar(props) {\n  const isFocused = useIsFocused();\n\n  return isFocused ? <StatusBar {...props} /> : null;\n}\n\n// codeblock-focus-start\nfunction Screen1() {\n  const navigation = useNavigation();\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#6a51ae',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <FocusAwareStatusBar barStyle=\"light-content\" backgroundColor=\"#6a51ae\" />\n      <Text style={{ color: '#fff' }}>Light Screen</Text>\n      <Button onPress={() => navigation.navigate('Screen2')}>\n        Next screen\n      </Button>\n    </View>\n  );\n}\n\nfunction Screen2() {\n  const navigation = useNavigation();\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#ecf0f1',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <FocusAwareStatusBar barStyle=\"dark-content\" backgroundColor=\"#ecf0f1\" />\n      <Text>Dark Screen</Text>\n      <Button onPress={() => navigation.navigate('Screen1')}>\n        Next screen\n      </Button>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nconst RootStack = createNativeStackNavigator({\n  screenOptions: {\n    headerShown: false,\n  },\n  screens: {\n    Screen1: Screen1,\n    Screen2: Screen2,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n"})})}),(0,a.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Different status bar based on tabs","data-snack":"true","data-version":"7",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Different status bar based on tabs" snack version=7',children:"import * as React from 'react';\nimport { View, Text, StatusBar, StyleSheet } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\nimport {\n  SafeAreaProvider,\n  useSafeAreaInsets,\n} from 'react-native-safe-area-context';\n\nfunction FocusAwareStatusBar(props) {\n  const isFocused = useIsFocused();\n\n  return isFocused ? <StatusBar {...props} /> : null;\n}\n\n// codeblock-focus-start\nfunction Screen1() {\n  const navigation = useNavigation();\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#6a51ae',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <FocusAwareStatusBar barStyle=\"light-content\" backgroundColor=\"#6a51ae\" />\n      <Text style={{ color: '#fff' }}>Light Screen</Text>\n      <Button onPress={() => navigation.navigate('Screen2')}>\n        Next screen\n      </Button>\n    </View>\n  );\n}\n\nfunction Screen2() {\n  const navigation = useNavigation();\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={[\n        styles.container,\n        {\n          backgroundColor: '#ecf0f1',\n          paddingTop: insets.top,\n          paddingBottom: insets.bottom,\n          paddingLeft: insets.left,\n          paddingRight: insets.right,\n        },\n      ]}\n    >\n      <FocusAwareStatusBar barStyle=\"dark-content\" backgroundColor=\"#ecf0f1\" />\n      <Text>Dark Screen</Text>\n      <Button onPress={() => navigation.navigate('Screen1')}>\n        Next screen\n      </Button>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nconst Stack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>\n        <Stack.Navigator screenOptions={{ headerShown: false }}>\n          <Stack.Screen name=\"Screen1\" component={Screen1} />\n          <Stack.Screen name=\"Screen2\" component={Screen2} />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["Although not necessary, you can use the ",(0,a.jsx)(e.code,{children:"FocusAwareStatusBar"})," component in the screens of the native stack navigator as well."]}),"\n",(0,a.jsxs)("div",{children:[(0,a.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,a.jsx)("source",{src:"/assets/statusbar/status-drawer-ios.mp4"})}),(0,a.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,a.jsx)("source",{src:"/assets/statusbar/status-drawer-android.mp4"})}),(0,a.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,a.jsx)("source",{src:"/assets/statusbar/status-tab-ios.mp4"})}),(0,a.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,a.jsx)("source",{src:"/assets/statusbar/status-tab-android.mp4"})})]})]})}function f(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(g,{...n})}):g(n)}},85162:(n,e,t)=>{t.d(e,{Z:()=>o});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(n){let{children:e,hidden:t,className:o}=n;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:e})}},74866:(n,e,t)=>{t.d(e,{Z:()=>k});var a=t(67294),r=t(86010),s=t(12466),o=t(16550),i=t(20469),c=t(91980),u=t(67392),l=t(50012);function d(n){var e,t;return null!=(e=null==(t=a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?e:[]}function g(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=null!=e?e:function(n){return d(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:r}}=n;return{value:e,label:t,attributes:a,default:r}}))}(t);return function(n){const e=(0,u.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((n=>n.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[e,t])}function f(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function p(n){let{queryString:e=!1,groupId:t}=n;const r=(0,o.k6)(),s=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c._X)(s),(0,a.useCallback)((n=>{if(!s)return;const e=new URLSearchParams(r.location.search);e.set(s,n),r.replace({...r.location,search:e.toString()})}),[s,r])]}function h(n){const{defaultValue:e,queryString:t=!1,groupId:r}=n,s=g(n),[o,c]=(0,a.useState)((()=>function(n){var e;let{defaultValue:t,tabValues:a}=n;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((n=>n.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(e=a.find((n=>n.default)))?e:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:s}))),[u,d]=p({queryString:t,groupId:r}),[h,v]=function(n){let{groupId:e}=n;const t=function(n){return n?"docusaurus.tab."+n:null}(e),[r,s]=(0,l.Nk)(t);return[r,(0,a.useCallback)((n=>{t&&s.set(n)}),[t,s])]}({groupId:r}),m=(()=>{const n=null!=u?u:h;return f({value:n,tabValues:s})?n:null})();(0,i.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((n=>{if(!f({value:n,tabValues:s}))throw new Error("Can't select invalid tab value="+n);c(n),d(n),v(n)}),[d,v,s]),tabValues:s}}var v=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function S(n){let{className:e,block:t,selectedValue:a,selectValue:o,tabValues:i}=n;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),l=n=>{const e=n.currentTarget,t=c.indexOf(e),r=i[t].value;r!==a&&(u(e),o(r))},d=n=>{var e;let t=null;switch(n.key){case"Enter":l(n);break;case"ArrowRight":{var a;const e=c.indexOf(n.currentTarget)+1;t=null!=(a=c[e])?a:c[0];break}case"ArrowLeft":{var r;const e=c.indexOf(n.currentTarget)-1;t=null!=(r=c[e])?r:c[c.length-1];break}}null==(e=t)||e.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e),children:i.map((n=>{let{value:e,label:t,attributes:s}=n;return(0,b.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>c.push(n),onKeyDown:d,onClick:l,...s,className:(0,r.Z)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===e}),children:null!=t?t:e},e)}))})}function x(n){let{lazy:e,children:t,selectedValue:r}=n;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=s.find((n=>n.props.value===r));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==r})))})}function y(n){const e=h(n);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(S,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function k(n){const e=(0,v.Z)();return(0,b.jsx)(y,{...n,children:d(n.children)},String(e))}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>o});var a=t(67294);const r={},s=a.createContext(r);function o(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);