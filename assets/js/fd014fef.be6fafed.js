"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[56917],{39920:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var a=t(85893),o=t(11151),i=t(74866),r=t(85162);const c={id:"stack-actions",title:"StackActions reference",sidebar_label:"StackActions"},s=void 0,l={id:"stack-actions",title:"StackActions reference",description:"StackActions is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in CommonActions.",source:"@site/versioned_docs/version-7.x/stack-actions.md",sourceDirName:".",slug:"/stack-actions",permalink:"/docs/7.x/stack-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/stack-actions.md",tags:[],version:"7.x",frontMatter:{id:"stack-actions",title:"StackActions reference",sidebar_label:"StackActions"},sidebar:"docs",previous:{title:"CommonActions",permalink:"/docs/7.x/navigation-actions"},next:{title:"DrawerActions",permalink:"/docs/7.x/drawer-actions"}},u={},p=[{value:"replace",id:"replace",level:3},{value:"push",id:"push",level:3},{value:"pop",id:"pop",level:3},{value:"popTo",id:"popto",level:3},{value:"popToTop",id:"poptotop",level:3}];function d(n){const e={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"StackActions"})," is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in ",(0,a.jsx)(e.a,{href:"/docs/7.x/navigation-actions",children:(0,a.jsx)(e.code,{children:"CommonActions"})}),"."]}),"\n",(0,a.jsx)(e.p,{children:"The following actions are supported:"}),"\n",(0,a.jsx)(e.h3,{id:"replace",children:"replace"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"replace"})," action allows to replace a route in the ",(0,a.jsx)(e.a,{href:"/docs/7.x/navigation-state",children:"navigation state"}),". It takes the following arguments:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"name"})," - ",(0,a.jsx)(e.em,{children:"string"})," - A destination name of the route that has been registered somewhere."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"params"})," - ",(0,a.jsx)(e.em,{children:"object"})," - Params to pass to the destination route."]}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Stack actions replace","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Stack actions replace" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  createStaticNavigation,\n  useNavigation,\n  StackActions,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push Profile on the stack\n      </Button>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(\n            StackActions.replace('Profile', { user: 'Wojtek' })\n          );\n          // codeblock-focus-end\n        }}\n      >\n        Replace with Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  const navigation = useNavigation();\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route.params.user}'s profile</Text>\n      <Button onPress={() => navigation.dispatch(StackActions.pop(1))}>\n        Pop one screen from stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push same screen on the stack\n      </Button>\n      <Button onPress={() => navigation.dispatch(StackActions.popToTop())}>\n        Pop to top\n      </Button>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Stack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Stack actions replace","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Stack actions replace" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  NavigationContainer,\n  StackActions,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push Profile on the stack\n      </Button>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(\n            StackActions.replace('Profile', { user: 'Wojtek' })\n          );\n          // codeblock-focus-end\n        }}\n      >\n        Replace with Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ navigation, route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route.params.user}'s profile</Text>\n      <Button onPress={() => navigation.dispatch(StackActions.pop(1))}>\n        Pop one screen from stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push same screen on the stack\n      </Button>\n      <Button onPress={() => navigation.dispatch(StackActions.popToTop())}>\n        Pop to top\n      </Button>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n        <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["If you want to replace a particular route, you can add a ",(0,a.jsx)(e.code,{children:"source"})," property referring to the route key and ",(0,a.jsx)(e.code,{children:"target"})," property referring to the navigation state key:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { StackActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...StackActions.replace('Profile', {\n    user: 'jane',\n  }),\n  source: route.key,\n  target: navigation.getState().key,\n});\n"})}),"\n",(0,a.jsxs)(e.p,{children:["If the ",(0,a.jsx)(e.code,{children:"source"})," property is explicitly set to ",(0,a.jsx)(e.code,{children:"undefined"}),", it'll replace the focused route."]}),"\n",(0,a.jsx)(e.h3,{id:"push",children:"push"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"push"})," action adds a route on top of the stack and navigates forward to it. This differs from ",(0,a.jsx)(e.code,{children:"navigate"})," in that ",(0,a.jsx)(e.code,{children:"navigate"})," will pop back to earlier in the stack if a route of the given name is already present there. ",(0,a.jsx)(e.code,{children:"push"})," will always add on top, so a route can be present multiple times."]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"name"})," - ",(0,a.jsx)(e.em,{children:"string"})," - Name of the route to push onto the stack."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"params"})," - ",(0,a.jsx)(e.em,{children:"object"})," - Screen params to pass to the destination route."]}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Stack actions push","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Stack actions push" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  createStaticNavigation,\n  useNavigation,\n  StackActions,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n          // codeblock-focus-end\n        }}\n      >\n        Push Profile on the stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(\n            StackActions.replace('Profile', { user: 'Wojtek' })\n          );\n        }}\n      >\n        Replace with Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  const navigation = useNavigation();\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route.params.user}'s profile</Text>\n      <Button onPress={() => navigation.dispatch(StackActions.pop(1))}>\n        Pop one screen from stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push same screen on the stack\n      </Button>\n      <Button onPress={() => navigation.dispatch(StackActions.popToTop())}>\n        Pop to top\n      </Button>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Stack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Stack actions push","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Stack actions push" snack',children:"import * as React from 'react';\nimport { Button } from '@react-navigation/elements';\nimport { View, Text } from 'react-native';\nimport {\n  NavigationContainer,\n  StackActions,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n          // codeblock-focus-end\n        }}\n      >\n        Push Profile on the stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(\n            StackActions.replace('Profile', { user: 'Wojtek' })\n          );\n        }}\n      >\n        Replace with Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ navigation, route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route.params.user}'s profile</Text>\n      <Button onPress={() => navigation.dispatch(StackActions.pop(1))}>\n        Pop one screen from stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push same screen on the stack\n      </Button>\n      <Button onPress={() => navigation.dispatch(StackActions.popToTop())}>\n        Pop to top\n      </Button>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n        <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsx)(e.h3,{id:"pop",children:"pop"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"pop"})," action takes you back to a previous screen in the stack. It takes one optional argument (",(0,a.jsx)(e.code,{children:"count"}),"), which allows you to specify how many screens to pop back by."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Stack actions pop","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Stack actions pop" snack',children:"import * as React from 'react';\nimport { Button } from '@react-navigation/elements';\nimport { View, Text } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n  StackActions,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push Profile on the stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(\n            StackActions.replace('Profile', { user: 'Wojtek' })\n          );\n        }}\n      >\n        Replace with Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  const navigation = useNavigation();\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route.params.user}'s profile</Text>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(StackActions.pop(1));\n          // codeblock-focus-end\n        }}\n      >\n        Pop one screen from stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push same screen on the stack\n      </Button>\n      <Button onPress={() => navigation.dispatch(StackActions.popToTop())}>\n        Pop to top\n      </Button>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Stack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Stack actions pop","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Stack actions pop" snack',children:"import * as React from 'react';\nimport { Button } from '@react-navigation/elements';\nimport { View, Text } from 'react-native';\nimport {\n  NavigationContainer,\n  StackActions,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push Profile on the stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(\n            StackActions.replace('Profile', { user: 'Wojtek' })\n          );\n        }}\n      >\n        Replace with Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ navigation, route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route.params.user}'s profile</Text>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(StackActions.pop(1));\n          // codeblock-focus-end\n        }}\n      >\n        Pop one screen from stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push same screen on the stack\n      </Button>\n      <Button onPress={() => navigation.dispatch(StackActions.popToTop())}>\n        Pop to top\n      </Button>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n        <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsx)(e.h3,{id:"popto",children:"popTo"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"popTo"})," action takes you back to a previous screen in the stack by the name. It also allows you to pass params to the route."]}),"\n",(0,a.jsxs)(e.p,{children:["If a matching screen is not found in the stack, this will pop the current screen and add a new screen with the specified name and params - essentially behaving like a ",(0,a.jsx)(e.a,{href:"#replace",children:(0,a.jsx)(e.code,{children:"replace"})}),". This ensures that the app doesn't break if a previous screen with the name did not exist - which can happen when the screen was opened from a deep link or push notification, or when used on the web etc."]}),"\n",(0,a.jsx)(e.p,{children:"The method accepts the following arguments:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"name"})," - ",(0,a.jsx)(e.em,{children:"string"})," - Name of the route to navigate to."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"params"})," - ",(0,a.jsx)(e.em,{children:"object"})," - Screen params to pass to the destination route."]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { StackActions } from '@react-navigation/native';\n\nconst popToAction = StackActions.popTo('Profile', { user: 'jane' });\n\nnavigation.dispatch(popToAction);\n"})}),"\n",(0,a.jsx)(e.h3,{id:"poptotop",children:"popToTop"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"popToTop"})," action takes you back to the first screen in the stack, dismissing all the others. It's functionally identical to ",(0,a.jsx)(e.code,{children:"StackActions.pop({n: currentIndex})"}),"."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Stack actions popToTop","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Stack actions popToTop" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  createStaticNavigation,\n  useNavigation,\n  StackActions,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push Profile on the stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(\n            StackActions.replace('Profile', { user: 'Wojtek' })\n          );\n        }}\n      >\n        Replace with Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  const navigation = useNavigation();\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route.params.user}'s profile</Text>\n      <Button onPress={() => navigation.dispatch(StackActions.pop(1))}>\n        Pop one screen from stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push same screen on the stack\n      </Button>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(StackActions.popToTop());\n          // codeblock-focus-end\n        }}\n      >\n        Pop to top\n      </Button>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Stack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Stack actions pop","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Stack actions pop" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  createStaticNavigation,\n  useNavigation,\n  StackActions,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push Profile on the stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(\n            StackActions.replace('Profile', { user: 'Wojtek' })\n          );\n        }}\n      >\n        Replace with Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen({ navigation, route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile!</Text>\n      <Text>{route.params.user}'s profile</Text>\n      <Button onPress={() => navigation.dispatch(StackActions.pop(1))}>\n        Pop one screen from stack\n      </Button>\n      <Button\n        onPress={() => {\n          navigation.dispatch(StackActions.push('Profile', { user: 'Wojtek' }));\n        }}\n      >\n        Push same screen on the stack\n      </Button>\n      <Button\n        onPress={() => {\n          // codeblock-focus-start\n          navigation.dispatch(StackActions.popToTop());\n          // codeblock-focus-end\n        }}\n      >\n        Pop to top\n      </Button>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n        <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},85162:(n,e,t)=>{t.d(e,{Z:()=>r});t(67294);var a=t(86010);const o={tabItem:"tabItem_Ymn6"};var i=t(85893);function r(n){let{children:e,hidden:t,className:r}=n;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t,children:e})}},74866:(n,e,t)=>{t.d(e,{Z:()=>P});var a=t(67294),o=t(86010),i=t(12466),r=t(16550),c=t(20469),s=t(91980),l=t(67392),u=t(50012);function p(n){var e,t;return null!=(e=null==(t=a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?e:[]}function d(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=null!=e?e:function(n){return p(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:o}}=n;return{value:e,label:t,attributes:a,default:o}}))}(t);return function(n){const e=(0,l.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((n=>n.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[e,t])}function h(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function m(n){let{queryString:e=!1,groupId:t}=n;const o=(0,r.k6)(),i=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,s._X)(i),(0,a.useCallback)((n=>{if(!i)return;const e=new URLSearchParams(o.location.search);e.set(i,n),o.replace({...o.location,search:e.toString()})}),[i,o])]}function f(n){const{defaultValue:e,queryString:t=!1,groupId:o}=n,i=d(n),[r,s]=(0,a.useState)((()=>function(n){var e;let{defaultValue:t,tabValues:a}=n;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((n=>n.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(e=a.find((n=>n.default)))?e:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:e,tabValues:i}))),[l,p]=m({queryString:t,groupId:o}),[f,g]=function(n){let{groupId:e}=n;const t=function(n){return n?"docusaurus.tab."+n:null}(e),[o,i]=(0,u.Nk)(t);return[o,(0,a.useCallback)((n=>{t&&i.set(n)}),[t,i])]}({groupId:o}),v=(()=>{const n=null!=l?l:f;return h({value:n,tabValues:i})?n:null})();(0,c.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:r,selectValue:(0,a.useCallback)((n=>{if(!h({value:n,tabValues:i}))throw new Error("Can't select invalid tab value="+n);s(n),p(n),g(n)}),[p,g,i]),tabValues:i}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(85893);function x(n){let{className:e,block:t,selectedValue:a,selectValue:r,tabValues:c}=n;const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),u=n=>{const e=n.currentTarget,t=s.indexOf(e),o=c[t].value;o!==a&&(l(e),r(o))},p=n=>{var e;let t=null;switch(n.key){case"Enter":u(n);break;case"ArrowRight":{var a;const e=s.indexOf(n.currentTarget)+1;t=null!=(a=s[e])?a:s[0];break}case"ArrowLeft":{var o;const e=s.indexOf(n.currentTarget)-1;t=null!=(o=s[e])?o:s[s.length-1];break}}null==(e=t)||e.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},e),children:c.map((n=>{let{value:e,label:t,attributes:i}=n;return(0,k.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>s.push(n),onKeyDown:p,onClick:u,...i,className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===e}),children:null!=t?t:e},e)}))})}function S(n){let{lazy:e,children:t,selectedValue:o}=n;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=i.find((n=>n.props.value===o));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:i.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==o})))})}function j(n){const e=f(n);return(0,k.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,k.jsx)(x,{...n,...e}),(0,k.jsx)(S,{...n,...e})]})}function P(n){const e=(0,g.Z)();return(0,k.jsx)(j,{...n,children:p(n.children)},String(e))}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);