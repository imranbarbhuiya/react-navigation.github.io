"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["70593"],{77148:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>s});var t=JSON.parse('{"id":"navigation-container","title":"NavigationContainer","description":"The NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment.","source":"@site/versioned_docs/version-6.x/navigation-container.md","sourceDirName":".","slug":"/navigation-container","permalink":"/docs/6.x/navigation-container","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/navigation-container.md","tags":[],"version":"6.x","frontMatter":{"id":"navigation-container","title":"NavigationContainer","sidebar_label":"NavigationContainer"},"sidebar":"docs","previous":{"title":"Drawer Layout","permalink":"/docs/6.x/drawer-layout"},"next":{"title":"ServerContainer","permalink":"/docs/6.x/server-container"}}'),a=i("85893"),o=i("50065");let s={id:"navigation-container",title:"NavigationContainer",sidebar_label:"NavigationContainer"},r=void 0,c={},l=[{value:"Ref",id:"ref",level:2},{value:"Methods on the ref",id:"methods-on-the-ref",level:3},{value:"<code>isReady</code>",id:"isready",level:4},{value:"<code>resetRoot</code>",id:"resetroot",level:4},{value:"<code>getRootState</code>",id:"getrootstate",level:4},{value:"<code>getCurrentRoute</code>",id:"getcurrentroute",level:4},{value:"<code>getCurrentOptions</code>",id:"getcurrentoptions",level:4},{value:"<code>addListener</code>",id:"addlistener",level:4},{value:"<code>state</code>",id:"state",level:5},{value:"<code>options</code>",id:"options",level:5},{value:"Props",id:"props",level:2},{value:"<code>initialState</code>",id:"initialstate",level:3},{value:"<code>onStateChange</code>",id:"onstatechange",level:3},{value:"<code>onReady</code>",id:"onready",level:3},{value:"<code>onUnhandledAction</code>",id:"onunhandledaction",level:3},{value:"<code>linking</code>",id:"linking",level:3},{value:"Options",id:"options-1",level:4},{value:"<code>linking.prefixes</code>",id:"linkingprefixes",level:5},{value:"<code>linking.config</code>",id:"linkingconfig",level:5},{value:"<code>linking.enabled</code>",id:"linkingenabled",level:5},{value:"<code>linking.getInitialURL</code>",id:"linkinggetinitialurl",level:5},{value:"<code>linking.subscribe</code>",id:"linkingsubscribe",level:5},{value:"<code>linking.getStateFromPath</code>",id:"linkinggetstatefrompath",level:5},{value:"<code>linking.getPathFromState</code>",id:"linkinggetpathfromstate",level:5},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"<code>documentTitle</code>",id:"documenttitle",level:3},{value:"<code>documentTitle.enabled</code>",id:"documenttitleenabled",level:4},{value:"<code>documentTitle.formatter</code>",id:"documenttitleformatter",level:4},{value:"<code>theme</code>",id:"theme",level:3},{value:"<code>independent</code>",id:"independent",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"NavigationContainer"})," is responsible for managing your app state and linking your top-level navigator to the app environment."]}),"\n",(0,a.jsx)(n.p,{children:"The container takes care of platform specific integration and provides various useful functionality:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Deep link integration with the ",(0,a.jsx)(n.a,{href:"#linking",children:(0,a.jsx)(n.code,{children:"linking"})})," prop."]}),"\n",(0,a.jsxs)(n.li,{children:["Notify state changes for ",(0,a.jsx)(n.a,{href:"/docs/6.x/screen-tracking",children:"screen tracking"}),", ",(0,a.jsx)(n.a,{href:"/docs/6.x/state-persistence",children:"state persistence"})," etc."]}),"\n",(0,a.jsxs)(n.li,{children:["Handle system back button on Android by using the ",(0,a.jsx)(n.a,{href:"https://reactnative.dev/docs/backhandler",children:(0,a.jsx)(n.code,{children:"BackHandler"})})," API from React Native."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>{/* ... */}</Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ref",children:"Ref"}),"\n",(0,a.jsxs)(n.p,{children:["It's also possible to attach a ",(0,a.jsx)(n.a,{href:"https://react.dev/learn/referencing-values-with-refs",children:(0,a.jsx)(n.code,{children:"ref"})})," to the container to get access to various helper methods, for example, dispatch navigation actions. This should be used in rare cases when you don't have access to the ",(0,a.jsx)(n.code,{children:"navigation"})," prop, such as a Redux middleware."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)("samp",{id:"using-refs"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import {\n  NavigationContainer,\n  useNavigationContainerRef,\n} from '@react-navigation/native';\n\nfunction App() {\n  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`\n\n  return (\n    <View style={{ flex: 1 }}>\n      <Button onPress={() => navigationRef.navigate('Home')}>Go home</Button>\n      <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n    </View>\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you're using a regular ref object, keep in mind that the ref may be initially ",(0,a.jsx)(n.code,{children:"null"})," in some situations (such as when linking is enabled). To make sure that the ref is initialized, you can use the ",(0,a.jsx)(n.a,{href:"#onready",children:(0,a.jsx)(n.code,{children:"onReady"})})," callback to get notified when the navigation container finishes mounting."]}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"/docs/6.x/navigating-without-navigation-prop",children:"Navigating without the navigation prop"})," guide for more details."]}),"\n",(0,a.jsx)(n.h3,{id:"methods-on-the-ref",children:"Methods on the ref"}),"\n",(0,a.jsxs)(n.p,{children:["The ref object includes all of the common navigation methods such as ",(0,a.jsx)(n.code,{children:"navigate"}),", ",(0,a.jsx)(n.code,{children:"goBack"})," etc. See ",(0,a.jsxs)(n.a,{href:"/docs/6.x/navigation-actions",children:["docs for ",(0,a.jsx)(n.code,{children:"CommonActions"})]})," for more details."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"navigationRef.navigate(name, params);\n"})}),"\n",(0,a.jsx)(n.p,{children:"All of these methods will act as if they were called inside the currently focused screen. It's important note that there must be a navigator rendered to handle these actions."}),"\n",(0,a.jsx)(n.p,{children:"In addition to these methods, the ref object also includes the following special methods:"}),"\n",(0,a.jsx)(n.h4,{id:"isready",children:(0,a.jsx)(n.code,{children:"isReady"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"isReady"})," method returns a ",(0,a.jsx)(n.code,{children:"boolean"})," indicating whether the navigation tree is ready. The navigation tree is ready when the ",(0,a.jsx)(n.code,{children:"NavigationContainer"})," contains at least one navigator and all of the navigators have finished mounting."]}),"\n",(0,a.jsxs)(n.p,{children:["This can be used to determine whether it's safe to dispatch navigation actions without getting an error. See ",(0,a.jsx)(n.a,{href:"/docs/6.x/navigating-without-navigation-prop#handling-initialization",children:"handling initialization"})," for more details."]}),"\n",(0,a.jsx)(n.h4,{id:"resetroot",children:(0,a.jsx)(n.code,{children:"resetRoot"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"resetRoot"})," method lets you reset the state of the navigation tree to the specified state object:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"navigationRef.resetRoot({\n  index: 0,\n  routes: [{ name: 'Profile' }],\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Unlike the ",(0,a.jsx)(n.code,{children:"reset"})," method, this acts on the root navigator instead of navigator of the currently focused screen."]}),"\n",(0,a.jsx)(n.h4,{id:"getrootstate",children:(0,a.jsx)(n.code,{children:"getRootState"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"getRootState"})," method returns a ",(0,a.jsx)(n.a,{href:"/docs/6.x/navigation-state",children:"navigation state"})," object containing the navigation states for all navigators in the navigation tree:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const state = navigationRef.getRootState();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that the returned ",(0,a.jsx)(n.code,{children:"state"})," object will be ",(0,a.jsx)(n.code,{children:"undefined"})," if there are no navigators currently rendered."]}),"\n",(0,a.jsx)(n.h4,{id:"getcurrentroute",children:(0,a.jsx)(n.code,{children:"getCurrentRoute"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"getCurrentRoute"})," method returns the route object for the currently focused screen in the whole navigation tree:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const route = navigationRef.getCurrentRoute();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that the returned ",(0,a.jsx)(n.code,{children:"route"})," object will be ",(0,a.jsx)(n.code,{children:"undefined"})," if there are no navigators currently rendered."]}),"\n",(0,a.jsx)(n.h4,{id:"getcurrentoptions",children:(0,a.jsx)(n.code,{children:"getCurrentOptions"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"getCurrentOptions"})," method returns the options for the currently focused screen in the whole navigation tree:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const options = navigationRef.getCurrentOptions();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that the returned ",(0,a.jsx)(n.code,{children:"options"})," object will be ",(0,a.jsx)(n.code,{children:"undefined"})," if there are no navigators currently rendered."]}),"\n",(0,a.jsx)(n.h4,{id:"addlistener",children:(0,a.jsx)(n.code,{children:"addListener"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"addListener"})," method lets you listen to the following events:"]}),"\n",(0,a.jsx)(n.h5,{id:"state",children:(0,a.jsx)(n.code,{children:"state"})}),"\n",(0,a.jsxs)(n.p,{children:["The event is triggered whenever the ",(0,a.jsx)(n.a,{href:"/docs/6.x/navigation-state",children:"navigation state"})," changes in any navigator in the navigation tree:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const unsubscribe = navigationRef.addListener('state', (e) => {\n  // You can get the raw navigation state (partial state object of the root navigator)\n  console.log(e.data.state);\n\n  // Or get the full state object with `getRootState()`\n  console.log(navigationRef.getRootState());\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This is analogous to the ",(0,a.jsx)(n.a,{href:"#onstatechange",children:(0,a.jsx)(n.code,{children:"onStateChange"})})," method. The only difference is that the ",(0,a.jsx)(n.code,{children:"e.data.state"})," object might contain partial state object unlike the ",(0,a.jsx)(n.code,{children:"state"})," argument in ",(0,a.jsx)(n.code,{children:"onStateChange"})," which will always contain the full state object."]}),"\n",(0,a.jsx)(n.h5,{id:"options",children:(0,a.jsx)(n.code,{children:"options"})}),"\n",(0,a.jsx)(n.p,{children:"The event is triggered whenever the options change for the currently focused screen in the navigation tree:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const unsubscribe = navigationRef.addListener('options', (e) => {\n  // You can get the new options for the currently focused screen\n  console.log(e.data.options);\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,a.jsx)(n.h3,{id:"initialstate",children:(0,a.jsx)(n.code,{children:"initialState"})}),"\n",(0,a.jsx)(n.p,{children:"Prop that accepts initial state for the navigator. This can be useful for cases such as deep linking, state persistence etc."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<NavigationContainer initialState={initialState}>\n  {/* ... */}\n</NavigationContainer>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Providing a custom initial state object will override the initial state object obtained via linking configuration or from browser's URL. If you're providing an initial state object, make sure that you don't pass it on web and that there's no deep link to handle."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const initialUrl = await Linking.getInitialURL();\n\nif (Platform.OS !== 'web' && initialUrl == null) {\n  // Only restore state if there's no deep link and we're not on web\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/docs/6.x/state-persistence",children:"state persistence guide"})," for more details on how to persist and restore state."]}),"\n",(0,a.jsx)(n.h3,{id:"onstatechange",children:(0,a.jsx)(n.code,{children:"onStateChange"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",(0,a.jsx)(n.a,{href:"/docs/6.x/navigation-state",children:"navigation state"})," state object except ",(0,a.jsx)(n.code,{children:"index"})," and ",(0,a.jsx)(n.code,{children:"routes"}),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue."]})}),"\n",(0,a.jsxs)(n.p,{children:["Function that gets called every time ",(0,a.jsx)(n.a,{href:"/docs/6.x/navigation-state",children:"navigation state"})," changes. It receives the new navigation state as the argument."]}),"\n",(0,a.jsx)(n.p,{children:"You can use it to track the focused screen, persist the navigation state etc."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<NavigationContainer\n  onStateChange={(state) => console.log('New state is', state)}\n>\n  {/* ... */}\n</NavigationContainer>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"onready",children:(0,a.jsx)(n.code,{children:"onReady"})}),"\n",(0,a.jsx)(n.p,{children:"Function which is called after the navigation container and all its children finish mounting for the first time. You can use it for:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Making sure that the ",(0,a.jsx)(n.code,{children:"ref"})," is usable. See ",(0,a.jsx)(n.a,{href:"/docs/6.x/navigating-without-navigation-prop#handling-initialization",children:"docs regarding initialization of the ref"})," for more details."]}),"\n",(0,a.jsx)(n.li,{children:"Hiding your native splash screen"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<NavigationContainer\n  onReady={() => console.log('Navigation container is ready')}\n>\n  {/* ... */}\n</NavigationContainer>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"onunhandledaction",children:(0,a.jsx)(n.code,{children:"onUnhandledAction"})}),"\n",(0,a.jsx)(n.p,{children:"Function which is called when a navigation action is not handled by any of the navigators."}),"\n",(0,a.jsx)(n.p,{children:"By default, React Navigation will show a development-only error message when an action was not handled. You can override the default behavior by providing a custom function."}),"\n",(0,a.jsx)(n.h3,{id:"linking",children:(0,a.jsx)(n.code,{children:"linking"})}),"\n",(0,a.jsx)(n.p,{children:"Configuration for linking integration used for deep linking, URL support in browsers etc."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { NavigationContainer } from '@react-navigation/native';\n\nfunction App() {\n  const linking = {\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Home: 'feed/:sort',\n      },\n    },\n  };\n\n  return (\n    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/docs/6.x/configuring-links",children:"configuring links guide"})," for more details on how to configure deep links and URL integration."]}),"\n",(0,a.jsx)(n.h4,{id:"options-1",children:"Options"}),"\n",(0,a.jsx)(n.h5,{id:"linkingprefixes",children:(0,a.jsx)(n.code,{children:"linking.prefixes"})}),"\n",(0,a.jsxs)(n.p,{children:["URL prefixes to handle. You can provide multiple prefixes to support custom schemes as well as ",(0,a.jsx)(n.a,{href:"https://developer.apple.com/ios/universal-links/",children:"universal links"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Only URLs matching these prefixes will be handled. The prefix will be stripped from the URL before parsing."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n"})}),"\n",(0,a.jsx)(n.p,{children:"This is only supported on iOS and Android."}),"\n",(0,a.jsx)(n.h5,{id:"linkingconfig",children:(0,a.jsx)(n.code,{children:"linking.config"})}),"\n",(0,a.jsx)(n.p,{children:"Config to fine-tune how to parse the path. The config object should represent the structure of the navigators in the app."}),"\n",(0,a.jsxs)(n.p,{children:["For example, if we have ",(0,a.jsx)(n.code,{children:"Catalog"})," screen inside ",(0,a.jsx)(n.code,{children:"Home"})," screen and want it to handle the ",(0,a.jsx)(n.code,{children:"item/:id"})," pattern:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n  screens: {\n    Home: {\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n      },\n    },\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The options for parsing can be an object or a string:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n  screens: {\n    Catalog: 'item/:id',\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When a string is specified, it's equivalent to providing the ",(0,a.jsx)(n.code,{children:"path"})," option."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"path"})," option is a pattern to match against the path. Any segments starting with ",(0,a.jsx)(n.code,{children:":"})," are recognized as a param with the same name. For example ",(0,a.jsx)(n.code,{children:"item/42"})," will be parsed to ",(0,a.jsx)(n.code,{children:"{ name: 'item', params: { id: '42' } }"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"initialRouteName"})," option ensures that the route name passed there will be present in the state for the navigator, e.g. for config:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n  screens: {\n    Home: {\n      initialRouteName: 'Feed',\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n        Feed: 'feed',\n      },\n    },\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["and URL : ",(0,a.jsx)(n.code,{children:"/item/42"}),", the state will look like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n  routes: [\n    {\n      name: 'Home',\n      state: {\n        index: 1,\n        routes: [\n          {\n            name: 'Feed'\n          },\n          {\n            name: 'Catalog',\n            params: { id: 42 },\n          },\n        ],\n      },\n    },\n  ],\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"parse"})," option controls how the params are parsed. Here, you can provide the name of the param to parse as a key, and a function which takes the string value for the param and returns a parsed value:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n  screens: {\n    Catalog: {\n      path: 'item/:id',\n      parse: {\n        id: id => parseInt(id, 10),\n      },\n    },\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"If no custom function is provided for parsing a param, it'll be parsed as a string."}),"\n",(0,a.jsx)(n.h5,{id:"linkingenabled",children:(0,a.jsx)(n.code,{children:"linking.enabled"})}),"\n",(0,a.jsxs)(n.p,{children:["Optional boolean to enable or disable the linking integration. Defaults to ",(0,a.jsx)(n.code,{children:"true"})," if the ",(0,a.jsx)(n.code,{children:"linking"})," prop is specified."]}),"\n",(0,a.jsx)(n.h5,{id:"linkinggetinitialurl",children:(0,a.jsx)(n.code,{children:"linking.getInitialURL"})}),"\n",(0,a.jsxs)(n.p,{children:["By default, linking integrates with React Native's ",(0,a.jsx)(n.code,{children:"Linking"})," API and uses ",(0,a.jsx)(n.code,{children:"Linking.getInitialURL()"})," to provide built-in support for deep linking. However, you might also want to handle links from other sources, such as ",(0,a.jsx)(n.a,{href:"https://help.branch.io/developers-hub/docs/react-native",children:"Branch"}),", or push notifications using ",(0,a.jsx)(n.a,{href:"https://rnfirebase.io/messaging/notifications",children:"Firebase"})," etc."]}),"\n",(0,a.jsxs)(n.p,{children:["You can provide a custom ",(0,a.jsx)(n.code,{children:"getInitialURL"})," function where you can return the link which we should use as the initial URL. The ",(0,a.jsx)(n.code,{children:"getInitialURL"})," function should return a ",(0,a.jsx)(n.code,{children:"string"})," if there's a URL to handle, otherwise ",(0,a.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, you could do something like following to handle both deep linking and ",(0,a.jsx)(n.a,{href:"https://rnfirebase.io/messaging/notifications",children:"Firebase notifications"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import messaging from '@react-native-firebase/messaging';\n\n<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    async getInitialURL() {\n      // Check if app was opened from a deep link\n      const url = await Linking.getInitialURL();\n\n      if (url != null) {\n        return url;\n      }\n\n      // Check if there is an initial firebase notification\n      const message = await messaging().getInitialNotification();\n\n      // Get the `url` property from the notification which corresponds to a screen\n      // This property needs to be set on the notification payload when sending it\n      return message?.data?.url;\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>;\n"})}),"\n",(0,a.jsx)(n.p,{children:"This option is not available on Web."}),"\n",(0,a.jsx)(n.h5,{id:"linkingsubscribe",children:(0,a.jsx)(n.code,{children:"linking.subscribe"})}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.a,{href:"#linkinggetinitialurl",children:(0,a.jsx)(n.code,{children:"getInitialURL"})}),", you can provide a custom ",(0,a.jsx)(n.code,{children:"subscribe"})," function to handle any incoming links instead of the default deep link handling. The ",(0,a.jsx)(n.code,{children:"subscribe"})," function will receive a listener as the argument and you can call it with a URL string whenever there's a new URL to handle. It should return a cleanup function where you can unsubscribe from any event listeners that you have setup."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, you could do something like following to handle both deep linking and ",(0,a.jsx)(n.a,{href:"https://rnfirebase.io/messaging/notifications",children:"Firebase notifications"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import messaging from '@react-native-firebase/messaging';\n\n<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    subscribe(listener) {\n      const onReceiveURL = ({ url }: { url: string }) => listener(url);\n\n      // Listen to incoming links from deep linking\n      const subscription = Linking.addEventListener('url', onReceiveURL);\n\n      // Listen to firebase push notifications\n      const unsubscribeNotification = messaging().onNotificationOpenedApp(\n        (message) => {\n          const url = message.data?.url;\n\n          if (url) {\n            // Any custom logic to check whether the URL needs to be handled\n            //...\n\n            // Call the listener to let React Navigation handle the URL\n            listener(url);\n          }\n        }\n      );\n\n      return () => {\n        // Clean up the event listeners\n        subscription.remove();\n        unsubscribeNotification();\n      };\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n"})}),"\n",(0,a.jsx)(n.p,{children:"This option is not available on Web."}),"\n",(0,a.jsx)(n.h5,{id:"linkinggetstatefrompath",children:(0,a.jsx)(n.code,{children:"linking.getStateFromPath"})}),"\n",(0,a.jsx)(n.p,{children:"You can optionally override the way React Navigation parses links to a state object by providing your own implementation."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    getStateFromPath(path, config) {\n      // Return a state object here\n      // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n"})}),"\n",(0,a.jsx)(n.h5,{id:"linkinggetpathfromstate",children:(0,a.jsx)(n.code,{children:"linking.getPathFromState"})}),"\n",(0,a.jsxs)(n.p,{children:["You can optionally override the way React Navigation serializes state objects to link by providing your own implementation. This is necessary for proper web support if you have specified ",(0,a.jsx)(n.code,{children:"getStateFromPath"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<NavigationContainer\n  linking={{\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      },\n    },\n    getPathFromState(state, config) {\n      // Return a path string here\n      // You can also reuse the default logic by importing `getPathFromState` from `@react-navigation/native`\n    },\n  }}\n>\n  {/* content */}\n</NavigationContainer>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fallback",children:(0,a.jsx)(n.code,{children:"fallback"})}),"\n",(0,a.jsxs)(n.p,{children:["React Element to use as a fallback while we resolve deep links. Defaults to ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If you have a native splash screen, please use ",(0,a.jsx)(n.a,{href:"#onready",children:(0,a.jsx)(n.code,{children:"onReady"})})," instead of ",(0,a.jsx)(n.code,{children:"fallback"})," prop."]}),"\n",(0,a.jsx)(n.h3,{id:"documenttitle",children:(0,a.jsx)(n.code,{children:"documentTitle"})}),"\n",(0,a.jsxs)(n.p,{children:["By default, React Navigation automatically updates the document title on Web to match the ",(0,a.jsx)(n.code,{children:"title"})," option of the focused screen. You can disable it or customize it using this prop. It accepts a configuration object with the following options:"]}),"\n",(0,a.jsx)(n.h4,{id:"documenttitleenabled",children:(0,a.jsx)(n.code,{children:"documentTitle.enabled"})}),"\n",(0,a.jsxs)(n.p,{children:["Whether document title handling should be enabled. Defaults to ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"documenttitleformatter",children:(0,a.jsx)(n.code,{children:"documentTitle.formatter"})}),"\n",(0,a.jsx)(n.p,{children:"Custom formatter to use if you want to customize the title text. Defaults to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"(options, route) => options?.title ?? route?.name;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { NavigationContainer } from '@react-navigation/native';\n\nfunction App() {\n  return (\n    <NavigationContainer\n      documentTitle={{\n        formatter: (options, route) =>\n          `${options?.title ?? route?.name} - My Cool App`,\n      }}\n    >\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"theme",children:(0,a.jsx)(n.code,{children:"theme"})}),"\n",(0,a.jsxs)(n.p,{children:["Custom theme to use for the navigation components such as the header, tab bar etc. See ",(0,a.jsx)(n.a,{href:"/docs/6.x/themes",children:"theming guide"})," for more details and usage guide."]}),"\n",(0,a.jsx)(n.h3,{id:"independent",children:(0,a.jsx)(n.code,{children:"independent"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"This is an advanced use case. Don't use this unless you are 100% sure that you need it."})}),"\n",(0,a.jsxs)(n.p,{children:["Whether this navigation container should be independent of parent containers. If this is set to ",(0,a.jsx)(n.code,{children:"true"}),", this container cannot be nested inside another container. Setting it to ",(0,a.jsx)(n.code,{children:"true"})," disconnects any children navigators from the parent container and doesn't allow navigation between them."]}),"\n",(0,a.jsxs)(n.p,{children:["You probably don't want to set this to ",(0,a.jsx)(n.code,{children:"true"})," in a typical React Native app. This is only useful if you have navigation trees that work like their own mini-apps and don't need to navigate to the screens outside of them."]}),"\n",(0,a.jsxs)(n.p,{children:["Avoid using this if you need to integrate with third-party components such as modals or bottom sheets. Consider using a ",(0,a.jsx)(n.a,{href:"/docs/6.x/custom-navigators",children:"custom navigator"})," instead."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return s}});var t=i(67294);let a={},o=t.createContext(a);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);