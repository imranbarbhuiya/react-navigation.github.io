"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["33775"],{99840:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>m,assets:()=>u,toc:()=>d,frontMatter:()=>c});var a=JSON.parse('{"id":"params","title":"Passing parameters to routes","description":"Remember when I said \\"more on that later when we talk about params!\\"? Well, the time has come.","source":"@site/versioned_docs/version-7.x/params.md","sourceDirName":".","slug":"/params","permalink":"/docs/params","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/params.md","tags":[],"version":"7.x","frontMatter":{"id":"params","title":"Passing parameters to routes","sidebar_label":"Passing parameters to routes"},"sidebar":"docs","previous":{"title":"Moving between screens","permalink":"/docs/navigating"},"next":{"title":"Configuring the header bar","permalink":"/docs/headers"}}'),s=t("85893"),r=t("50065"),i=t("47902"),o=t("5525");let c={id:"params",title:"Passing parameters to routes",sidebar_label:"Passing parameters to routes"},l=void 0,u={},d=[{value:"Initial params",id:"initial-params",level:2},{value:"Updating params",id:"updating-params",level:2},{value:"Passing params to a previous screen",id:"passing-params-to-a-previous-screen",level:2},{value:"Passing params to a nested screen",id:"passing-params-to-a-nested-screen",level:2},{value:"What should be in params",id:"what-should-be-in-params",level:2},{value:"Summary",id:"summary",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:['Remember when I said "more on that later when we talk about ',(0,s.jsx)(n.code,{children:"params"}),'!"? Well, the time has come.']}),"\n",(0,s.jsxs)(n.p,{children:["Now that we know how to create a stack navigator with some routes and ",(0,s.jsx)(n.a,{href:"/docs/navigating",children:"navigate between those routes"}),", let's look at how we can pass data to routes when we navigate to them."]}),"\n",(0,s.jsx)(n.p,{children:"There are two pieces to this:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Pass params to a route by putting them in an object as a second parameter to the ",(0,s.jsx)(n.code,{children:"navigation.navigate"})," function: ",(0,s.jsx)(n.code,{children:"navigation.navigate('RouteName', { /* params go here */ })"})]}),"\n",(0,s.jsxs)(n.li,{children:["Read the params in your screen component: ",(0,s.jsx)(n.code,{children:"route.params"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["We recommend that the params you pass are JSON-serializable. That way, you'll be able to use ",(0,s.jsx)(n.a,{href:"/docs/state-persistence",children:"state persistence"})," and your screen components will have the right contract for implementing ",(0,s.jsx)(n.a,{href:"/docs/deep-linking",children:"deep linking"}),"."]})}),"\n",(0,s.jsx)(n.pre,{"data-name":"Passing params","data-snack":"true",children:(0,s.jsx)(n.code,{className:"language-js",metastring:'name="Passing params" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\n// codeblock-focus-start\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        onPress={() => {\n          /* 1. Navigate to the Details route with params */\n          // highlight-start\n          navigation.navigate('Details', {\n            itemId: 86,\n            otherParam: 'anything you want here',\n          });\n          // highlight-end\n        }}\n      >\n        Go to Details\n      </Button>\n    </View>\n  );\n}\n\nfunction DetailsScreen({ route }) {\n  const navigation = useNavigation();\n\n  /* 2. Get the param */\n  // highlight-next-line\n  const { itemId, otherParam } = route.params;\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Text>itemId: {JSON.stringify(itemId)}</Text>\n      <Text>otherParam: {JSON.stringify(otherParam)}</Text>\n      <Button\n        onPress={\n          () =>\n            // highlight-start\n            navigation.push('Details', {\n              itemId: Math.floor(Math.random() * 100),\n            })\n          // highlight-end\n        }\n      >\n        Go to Details... again\n      </Button>\n      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>\n      <Button onPress={() => navigation.goBack()}>Go back</Button>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Details: DetailsScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})}),"\n",(0,s.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,s.jsx)("source",{src:"/assets/navigators/passing-params.mp4"})}),"\n",(0,s.jsx)(n.h2,{id:"initial-params",children:"Initial params"}),"\n",(0,s.jsxs)(n.p,{children:["You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified in ",(0,s.jsx)(n.code,{children:"initialParams"}),":"]}),"\n",(0,s.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,s.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  Details: {\n    screen: DetailsScreen,\n    // highlight-next-line\n    initialParams: { itemId: 42 },\n  },\n}\n"})})}),(0,s.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Details"\n  component={DetailsScreen}\n  // highlight-next-line\n  initialParams={{ itemId: 42 }}\n/>\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"updating-params",children:"Updating params"}),"\n",(0,s.jsxs)(n.p,{children:["Screens can also update their params, like they can update their state. The ",(0,s.jsx)(n.code,{children:"navigation.setParams"})," method lets you update the params of a screen. Refer to the ",(0,s.jsxs)(n.a,{href:"/docs/navigation-object#setparams",children:["API reference for ",(0,s.jsx)(n.code,{children:"setParams"})]})," for more details."]}),"\n",(0,s.jsx)(n.p,{children:"Basic usage:"}),"\n",(0,s.jsx)(n.pre,{"data-name":"Updating params","data-snack":"true",children:(0,s.jsx)(n.code,{className:"language-js",metastring:'name="Updating params" snack',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\nfunction HomeScreen({ route }) {\n  const navigation = useNavigation();\n  const { itemId } = route.params;\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Text>itemId: {JSON.stringify(itemId)}</Text>\n      <Button\n        onPress={\n          () =>\n            // codeblock-focus-start\n            navigation.setParams({\n              itemId: Math.floor(Math.random() * 100),\n            })\n          // codeblock-focus-end\n        }\n      >\n        Update param\n      </Button>\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      initialParams: { itemId: 42 },\n    },\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Avoid using ",(0,s.jsx)(n.code,{children:"setParams"})," to update screen options such as ",(0,s.jsx)(n.code,{children:"title"})," etc. If you need to update options, use ",(0,s.jsx)(n.a,{href:"/docs/navigation-object#setoptions",children:(0,s.jsx)(n.code,{children:"setOptions"})})," instead."]})}),"\n",(0,s.jsx)(n.h2,{id:"passing-params-to-a-previous-screen",children:"Passing params to a previous screen"}),"\n",(0,s.jsx)(n.p,{children:"Params aren't only useful for passing some data to a new screen, but they can also be useful to pass data to a previous screen as well. For example, let's say you have a screen with a \"Create post\" button, and the button opens a new screen to create a post. After creating the post, you want to pass the data for the post back to the previous screen."}),"\n",(0,s.jsxs)(n.p,{children:["To achieve this, you can use the ",(0,s.jsx)(n.code,{children:"popTo"})," method to go back to the previous screen as well as pass params to it:"]}),"\n",(0,s.jsx)(n.pre,{"data-name":"Passing params back","data-snack":"true",children:(0,s.jsx)(n.code,{className:"language-js",metastring:'name="Passing params back" snack',children:"import * as React from 'react';\nimport { Text, View, TextInput } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\n// codeblock-focus-start\nfunction HomeScreen({ route }) {\n  const navigation = useNavigation();\n\n  // Use an effect to monitor the update to params\n  // highlight-start\n  React.useEffect(() => {\n    if (route.params?.post) {\n      // Post updated, do something with `route.params.post`\n      // For example, send the post to the server\n      alert('New post: ' + route.params?.post);\n    }\n  }, [route.params?.post]);\n  // highlight-end\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('CreatePost')}>\n        Create post\n      </Button>\n      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>\n    </View>\n  );\n}\n\nfunction CreatePostScreen({ route }) {\n  const navigation = useNavigation();\n  const [postText, setPostText] = React.useState('');\n\n  return (\n    <>\n      <TextInput\n        multiline\n        placeholder=\"What's on your mind?\"\n        style={{ height: 200, padding: 10, backgroundColor: 'white' }}\n        value={postText}\n        onChangeText={setPostText}\n      />\n      <Button\n        onPress={() => {\n          // Pass params back to home screen\n          // highlight-next-line\n          navigation.popTo('Home', { post: postText });\n        }}\n      >\n        Done\n      </Button>\n    </>\n  );\n}\n// codeblock-focus-end\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    CreatePost: CreatePostScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})}),"\n",(0,s.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,s.jsx)("source",{src:"/assets/navigators/params-to-parent.mp4"})}),"\n",(0,s.jsxs)(n.p,{children:['Here, after you press "Done", the home screen\'s ',(0,s.jsx)(n.code,{children:"route.params"})," will be updated to reflect the post text that you passed in ",(0,s.jsx)(n.code,{children:"navigate"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"passing-params-to-a-nested-screen",children:"Passing params to a nested screen"}),"\n",(0,s.jsxs)(n.p,{children:["If you have nested navigators, you need to pass params a bit differently. For example, say you have a navigator inside the ",(0,s.jsx)(n.code,{children:"More"})," screen and want to pass params to the ",(0,s.jsx)(n.code,{children:"Settings"})," screen inside that navigator. Then you can pass params as the following:"]}),"\n",(0,s.jsx)(n.pre,{"data-name":"Passing params to nested screen","data-snack":"true",children:(0,s.jsx)(n.code,{className:"language-js",metastring:'name="Passing params to nested screen" snack',children:"import * as React from 'react';\nimport { Text, View, TextInput } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { Button } from '@react-navigation/elements';\n\nfunction SettingsScreen({ route }) {\n  const navigation = useNavigation();\n  const { user } = route.params;\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Settings Screen</Text>\n      <Text>userParam: {JSON.stringify(user)}</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n    </View>\n  );\n}\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        onPress={\n          () =>\n            // codeblock-focus-start\n            navigation.navigate('More', {\n              screen: 'Settings',\n              params: { user: 'jane' },\n            })\n          // codeblock-focus-end\n        }\n      >\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nconst MoreStack = createNativeStackNavigator({\n  screens: {\n    Settings: SettingsScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst RootTabs = createBottomTabNavigator({\n  screens: {\n    Home: HomeScreen,\n    More: MoreStack,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootTabs);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/nesting-navigators",children:"Nesting navigators"})," for more details on nesting."]}),"\n",(0,s.jsx)(n.h2,{id:"what-should-be-in-params",children:"What should be in params"}),"\n",(0,s.jsx)(n.p,{children:"Params are essentially options for a screen. They should contain the minimal data required to show a screen, nothing more. If the data is used by multiple screens, it should be in a global store or global cache. Params is not designed for state management."}),"\n",(0,s.jsx)(n.p,{children:"You can think of the route object as a URL. If your screen had a URL, what should be in the URL? The same principles apply to params. Think of visiting a shopping website; when you see product listings, the URL usually contains category name, type of sort, any filters etc., not the actual list of products displayed on the screen."}),"\n",(0,s.jsxs)(n.p,{children:["For example, say if you have a ",(0,s.jsx)(n.code,{children:"Profile"})," screen. When navigating to it, you might be tempted to pass the user object in the params:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Don't do this\nnavigation.navigate('Profile', {\n  user: {\n    id: 'jane',\n    firstName: 'Jane',\n    lastName: 'Done',\n    age: 25,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This looks convenient and lets you access the user objects with ",(0,s.jsx)(n.code,{children:"route.params.user"})," without any extra work."]}),"\n",(0,s.jsx)(n.p,{children:"However, this is an anti-pattern. There are many reasons why this is a bad idea:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The same data is duplicated in multiple places. This can lead to bugs such as the profile screen showing outdated data even if the user object has changed after navigation."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Each screen that navigates to the ",(0,s.jsx)(n.code,{children:"Profile"})," screen now needs to know how to fetch the user object - which increases the complexity of the code."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"URLs to the screen (browser URL on the web, or deep links on native) will contain the user object. This is problematic:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Since the user object is in the URL, it's possible to pass a random user object representing a user that doesn't exist or has incorrect data in the profile."}),"\n",(0,s.jsx)(n.li,{children:"If the user object isn't passed or improperly formatted, this could result in crashes as the screen won't know how to handle it."}),"\n",(0,s.jsx)(n.li,{children:"The URL can become very long and unreadable."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A better way is to pass only the ID of the user in params:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"navigation.navigate('Profile', { userId: 'jane' });\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, you can use the passed ",(0,s.jsx)(n.code,{children:"userId"})," to grab the user from your global store. This eliminates a host of issues such as outdated data, or problematic URLs."]}),"\n",(0,s.jsx)(n.p,{children:"Some examples of what should be in params are:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["IDs like user id, item id etc., e.g. ",(0,s.jsx)(n.code,{children:"navigation.navigate('Profile', { userId: 'Jane' })"})]}),"\n",(0,s.jsxs)(n.li,{children:["Params for sorting, filtering data etc. when you have a list of items, e.g. ",(0,s.jsx)(n.code,{children:"navigation.navigate('Feeds', { sortBy: 'latest' })"})]}),"\n",(0,s.jsxs)(n.li,{children:["Timestamps, page numbers or cursors for pagination, e.g. ",(0,s.jsx)(n.code,{children:"navigation.navigate('Chat', { beforeTime: 1603897152675 })"})]}),"\n",(0,s.jsxs)(n.li,{children:["Data to fill inputs on a screen to compose something, e.g. ",(0,s.jsx)(n.code,{children:"navigation.navigate('ComposeTweet', { title: 'Hello world!' })"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In essence, pass the least amount of data required to identify a screen in params, for a lot of cases, this simply means passing the ID of an object instead of passing a full object. Keep your application data separate from the navigation state."}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"navigate"})," and ",(0,s.jsx)(n.code,{children:"push"})," accept an optional second argument to let you pass parameters to the route you are navigating to. For example: ",(0,s.jsx)(n.code,{children:"navigation.navigate('RouteName', { paramName: 'value' })"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["You can read the params through ",(0,s.jsx)(n.code,{children:"route.params"})," inside a screen"]}),"\n",(0,s.jsxs)(n.li,{children:["You can update the screen's params with ",(0,s.jsx)(n.code,{children:"navigation.setParams"})]}),"\n",(0,s.jsxs)(n.li,{children:["Initial params can be passed via the ",(0,s.jsx)(n.code,{children:"initialParams"})," prop on ",(0,s.jsx)(n.code,{children:"Screen"})]}),"\n",(0,s.jsx)(n.li,{children:"Params should contain the minimal data required to show a screen, nothing more"}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5525:function(e,n,t){t.d(n,{Z:()=>i});var a=t("85893");t("67294");var s=t("67026");let r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r,i),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>b});var a=t("85893"),s=t("67294"),r=t("67026"),i=t("69599"),o=t("16550"),c=t("32000"),l=t("4520"),u=t("38341"),d=t("76009");function h(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("7227");let g="tabList__CuJ",v="tabItem_LNqP";function f(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:c}=e,l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,t=c[l.indexOf(n)].value;t!==s&&(u(n),o(t))},h=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=l.indexOf(e.currentTarget)+1;a=null!==(n=l[t])&&void 0!==n?n:l[0];break}case"ArrowLeft":{let n=l.indexOf(e.currentTarget)-1;a=null!==(t=l[n])&&void 0!==t?t:l[l.length-1]}}null==a||a.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:c.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)})})}function x(e){let{lazy:n,children:t,selectedValue:i}=e,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,r=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=null!=n?n:h(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,t])}(e),[i,p]=(0,s.useState)(()=>(function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(a.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}let s=null!==(n=a.find(e=>e.default))&&void 0!==n?n:a[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:r})),[g,v]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t}),i=(0,l._X)(r);return[i,(0,s.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})},[r,a])]}({queryString:t,groupId:a}),[f,x]=function(e){var n;let{groupId:t}=e;let a=(n=t)?"docusaurus.tab.".concat(n):null,[r,i]=(0,d.Nk)(a);return[r,(0,s.useCallback)(e=>{if(!!a)i.set(e)},[a,i])]}({groupId:a}),j=(()=>{let e=null!=g?g:f;return m({value:e,tabValues:r})?e:null})();return(0,c.Z)(()=>{j&&p(j)},[j]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!m({value:e,tabValues:r}))throw Error("Can't select invalid tab value=".concat(e));p(e),v(e),x(e)},[v,x,r]),tabValues:r}}(e);return(0,a.jsxs)("div",{className:(0,r.Z)("tabs-container",g),children:[(0,a.jsx)(f,{...n,...e}),(0,a.jsx)(x,{...n,...e})]})}function b(e){let n=(0,p.Z)();return(0,a.jsx)(j,{...e,children:h(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(67294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);