"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["57790"],{93939:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>l,assets:()=>c,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"navigation-options-resolution","title":"Navigation options resolution","description":"Each screen can configure various aspects about how it gets presented in the navigator that renders it. In the Configuring the header bar section of the fundamentals documentation we explain the basics of how this works.","source":"@site/versioned_docs/version-3.x/navigation-options-resolution.md","sourceDirName":".","slug":"/navigation-options-resolution","permalink":"/docs/3.x/navigation-options-resolution","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/navigation-options-resolution.md","tags":[],"version":"3.x","frontMatter":{"id":"navigation-options-resolution","title":"Navigation options resolution","sidebar_label":"Navigation options resolution"},"sidebar":"version-3.x-docs","previous":{"title":"Different status bar configuration based on route","permalink":"/docs/3.x/status-bar"},"next":{"title":"Custom Android back button behavior","permalink":"/docs/3.x/custom-android-back-button-handling"}}'),o=t("85893"),i=t("50065");let r={id:"navigation-options-resolution",title:"Navigation options resolution",sidebar_label:"Navigation options resolution"},s=void 0,c={},d=[{value:"getActiveChildNavigationOptions",id:"getactivechildnavigationoptions",level:2},{value:"<strong>Note</strong>: the navigationOptions property vs navigator configuration",id:"note-the-navigationoptions-property-vs-navigator-configuration",level:2},{value:"A stack contains a tab navigator and you want to set the title on the stack header",id:"a-stack-contains-a-tab-navigator-and-you-want-to-set-the-title-on-the-stack-header",level:2},{value:"A tab navigator contains a stack and you want to hide the tab bar on specific screens",id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",level:2},{value:"A drawer has a stack inside of it and you want to lock the drawer on certain screens",id:"a-drawer-has-a-stack-inside-of-it-and-you-want-to-lock-the-drawer-on-certain-screens",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Each screen can configure various aspects about how it gets presented in the navigator that renders it. In the ",(0,o.jsx)(n.a,{href:"/docs/3.x/headers",children:"Configuring the header bar"})," section of the fundamentals documentation we explain the basics of how this works."]}),"\n",(0,o.jsxs)(n.p,{children:["In this document we'll explain how this works when there are multiple navigators. It's important to understand this so that you put your ",(0,o.jsx)(n.code,{children:"navigationOptions"})," in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen. Thankfully, the logic for this could not be any easier to understand:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens."})}),"\n",(0,o.jsxs)(n.p,{children:["Let's take for example a tab navigator that contains a stack in each tab. What happens if we set the ",(0,o.jsx)(n.code,{children:"navigationOptions"})," on a screen inside of the stack?"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"class A extends React.Component {\n  static navigationOptions = {\n    tabBarLabel: 'Home!',\n  };\n\n  // etc..\n}\n\nclass B extends React.Component {\n  static navigationOptions = {\n    tabBarLabel: 'Settings!',\n  };\n\n  // etc..\n}\n\nconst HomeStack = createStackNavigator({ A });\nconst SettingsStack = createStackNavigator({ B });\n\nexport default createAppContainer(\n  createBottomTabNavigator({\n    HomeStack,\n    SettingsStack,\n  })\n);\n"})}),"\n",(0,o.jsx)("a",{href:"https://snack.expo.io/@react-navigation/nested-navigationoptions-wrong-v3",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,o.jsxs)(n.p,{children:["As we mentioned earlier, you can only modify navigation options for a navigator from one of its screen components. ",(0,o.jsx)(n.code,{children:"A"})," and ",(0,o.jsx)(n.code,{children:"B"})," above are screen components in ",(0,o.jsx)(n.code,{children:"HomeStack"})," and ",(0,o.jsx)(n.code,{children:"SettingsStack"})," respectively, not in the tab navigator. So the result will be that the ",(0,o.jsx)(n.code,{children:"tabBarLabel"})," property is not applied to the tab navigator. We can fix this though!"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const HomeStack = createStackNavigator({ A });\nconst SettingsStack = createStackNavigator({ B });\n\nHomeStack.navigationOptions = {\n  tabBarLabel: 'Home!',\n};\n\nSettingsStack.navigationOptions = {\n  tabBarLabel: 'Settings!',\n};\n\nexport default createAppContainer(\n  createBottomTabNavigator({\n    HomeStack,\n    SettingsStack,\n  })\n);\n"})}),"\n",(0,o.jsx)("a",{href:"https://snack.expo.io/@react-navigation/nested-navigationoptions-correct-v3",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,o.jsxs)(n.p,{children:["To understand what is going on here, first recall that in the following example, ",(0,o.jsx)(n.code,{children:"MyComponent"})," and ",(0,o.jsx)(n.code,{children:"MyOtherComponent"})," are identical:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"class MyComponent extends React.Component {\n  static navigationOptions = {\n    title: 'Hello!',\n  };\n  // etc.\n}\n\nclass MyOtherComponent extends React.Component {\n  // etc.\n}\n\nMyOtherComponent.navigationOptions = {\n  title: 'Hello!',\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We also know that ",(0,o.jsx)(n.code,{children:"createStackNavigator"})," and related functions return React components. So when we set the ",(0,o.jsx)(n.code,{children:"navigationOptions"})," directly on the ",(0,o.jsx)(n.code,{children:"HomeStack"})," and ",(0,o.jsx)(n.code,{children:"SettingsStack"})," component, it allows us to control the ",(0,o.jsx)(n.code,{children:"navigationOptions"})," for its parent navigator when its used as a screen component. In this case, the ",(0,o.jsx)(n.code,{children:"navigationOptions"})," on our stack components configure the label in the tab navigator that renders the stacks."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const HomeStack = createStackNavigator(\n  { A },\n  {\n    // This is the default for screens in the stack, so `A` will\n    // use this title unless it overrides it\n    defaultNavigationOptions: {\n      title: 'Welcome',\n    },\n  }\n);\n\n// These are the options that are used by the navigator that renders\n// the HomeStack, in our example above this is a tab navigator.\nHomeStack.navigationOptions = {\n  tabBarLabel: 'Home!',\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Another way you could write this is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const HomeStack = createStackNavigator(\n  { A },\n  {\n    // This applies to the parent navigator\n    navigationOptions: {\n      tabBarLabel: 'Home!',\n    },\n    // This applies to child routes\n    defaultNavigationOptions: {\n      title: 'Welcome',\n    },\n  }\n);\n"})}),"\n",(0,o.jsx)("a",{href:"https://snack.expo.io/@react-navigation/nested-navigationoptions-title-v3",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,o.jsx)(n.h2,{id:"getactivechildnavigationoptions",children:"getActiveChildNavigationOptions"}),"\n",(0,o.jsxs)(n.p,{children:["If you would like to get the ",(0,o.jsx)(n.code,{children:"navigationOptions"})," from the active child of a navigator, you can do that with ",(0,o.jsx)(n.code,{children:"getActiveChildNavigationOptions"}),". This makes it possible for you to set the ",(0,o.jsx)(n.code,{children:"tabBarLabel"})," directly on a screen inside of a stack that is inside of a tab, for example."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"class A extends React.Component {\n  static navigationOptions = {\n    title: 'Welcome',\n    tabBarLabel: 'Home!',\n  };\n\n  render() {\n    return <Placeholder text=\"A!\" />;\n  }\n}\n\nconst HomeStack = createStackNavigator(\n  { A },\n  {\n    navigationOptions: ({ navigation, screenProps }) => ({\n      // you can put fallback values before here, eg: a default tabBarLabel\n      ...getActiveChildNavigationOptions(navigation, screenProps),\n      // put other navigationOptions that you don't want the active child to\n      // be able to override here!\n    }),\n  }\n);\n"})}),"\n",(0,o.jsx)("a",{href:"https://snack.expo.io/@react-navigation/nested-navigationoptions-active-child-v3",target:"blank",class:"run-code-button",children:"\u2192 Run this code"}),"\n",(0,o.jsxs)(n.h2,{id:"note-the-navigationoptions-property-vs-navigator-configuration",children:[(0,o.jsx)(n.strong,{children:"Note"}),": the navigationOptions property vs navigator configuration"]}),"\n",(0,o.jsxs)(n.p,{children:["Navigators are initialized with ",(0,o.jsx)(n.code,{children:"create*Navigator(routeConfig, navigatorConfig)"}),". Inside of ",(0,o.jsx)(n.code,{children:"navigatorConfig"})," we can add a ",(0,o.jsx)(n.code,{children:"defaultNavigationOptions"})," property. These ",(0,o.jsx)(n.code,{children:"defaultNavigationOptions"})," are the default options for screens within that navigator (",(0,o.jsx)(n.a,{href:"/docs/3.x/headers#sharing-common-navigationoptions-across-screens",children:"read more about sharing common navigationOptions"}),"), they do not refer to the ",(0,o.jsx)(n.code,{children:"navigationOptions"})," for that navigator \u2014 as we have seen above, we set the ",(0,o.jsx)(n.code,{children:"navigationOptions"})," property directly on the navigator for that use case."]}),"\n",(0,o.jsx)(n.h2,{id:"a-stack-contains-a-tab-navigator-and-you-want-to-set-the-title-on-the-stack-header",children:"A stack contains a tab navigator and you want to set the title on the stack header"}),"\n",(0,o.jsx)(n.p,{children:"Imagine the following configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const TabNavigator = createBottomTabNavigator({\n  Feed: FeedScreen,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createStackNavigator({\n  Home: TabNavigator,\n  Settings: SettingsScreen,\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If we were to set the ",(0,o.jsx)(n.code,{children:"headerTitle"})," with ",(0,o.jsx)(n.code,{children:"navigationOptions"})," on the ",(0,o.jsx)(n.code,{children:"FeedScreen"}),", this would not work. This is because the ",(0,o.jsx)(n.code,{children:"AppNavigator"})," stack will only look at its immediate children for configuration: ",(0,o.jsx)(n.code,{children:"TabNavigator"})," and ",(0,o.jsx)(n.code,{children:"SettingsScreen"}),". So we can set the ",(0,o.jsx)(n.code,{children:"headerTitle"})," on the ",(0,o.jsx)(n.code,{children:"TabNavigator"})," instead, like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const TabNavigator = createBottomTabNavigator({\n  Feed: FeedScreen,\n  Profile: ProfileScreen,\n});\n\nTabNavigator.navigationOptions = ({ navigation }) => {\n  const { routeName } = navigation.state.routes[navigation.state.index];\n\n  // You can do whatever you like here to pick the title based on the route name\n  const headerTitle = routeName;\n\n  return {\n    headerTitle,\n  };\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Another option is to re-organize your navigators, such that each tab has its own stack. You can then hide the top-level stack's header when the tab screen is focused."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* other routes here */\n});\n\nconst ProfileStack = createStackNavigator({\n  ProfileHome: ProfileScreen,\n  /* other routes here */\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileStack,\n});\n\nTabNavigator.navigationOptions = {\n  // Hide the header from AppNavigator stack\n  header: null,\n};\n\nconst AppNavigator = createStackNavigator({\n  Home: TabNavigator,\n  Settings: SettingsScreen,\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Using this configuration, the ",(0,o.jsx)(n.code,{children:"headerTitle"})," or ",(0,o.jsx)(n.code,{children:"title"})," from ",(0,o.jsx)(n.code,{children:"navigationOptions"})," on ",(0,o.jsx)(n.code,{children:"FeedScreen"})," and ",(0,o.jsx)(n.code,{children:"ProfileScreen"})," will not determine the title in their headers."]}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, you can push new screens to the feed and profile stacks without hiding the tab bar by adding more routes to those stacks. If you want to push screens on top of the tab bar, then you can add them to the ",(0,o.jsx)(n.code,{children:"AppNavigator"})," stack."]}),"\n",(0,o.jsx)(n.h2,{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",children:"A tab navigator contains a stack and you want to hide the tab bar on specific screens"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to the example above where a stack contains a tab navigator, we can solve this in two ways: add ",(0,o.jsx)(n.code,{children:"navigationOptions"})," to our tab navigator to set the tab bar to hidden depending on which route is active in the child stack, or we can move the tab navigator inside of the stack."]}),"\n",(0,o.jsx)(n.p,{children:"Imagine the following configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: TabNavigator,\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If we want to hide the tab bar when we navigate from the feed home to a details screen without shuffling navigators, we cannot set the ",(0,o.jsx)(n.code,{children:"tabBarVisible: false"})," configuration in ",(0,o.jsx)(n.code,{children:"navigationOptions"})," on ",(0,o.jsx)(n.code,{children:"DetailsScreen"}),", because those options will only apply to the ",(0,o.jsx)(n.code,{children:"FeedStack"}),". Instead, we can do the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nFeedStack.navigationOptions = ({ navigation }) => {\n  let tabBarVisible = true;\n  if (navigation.state.index > 0) {\n    tabBarVisible = false;\n  }\n\n  return {\n    tabBarVisible,\n  };\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will hide the tab bar any time we navigate away from the feed home. We could switch visibility based on route name, but it would be strange to have the tab bar be hidden and then appear again when pushing another route \u2014 it should only be visible when returning to a route where it was previously visible."}),"\n",(0,o.jsx)(n.p,{children:"Another option here would be to add another stack navigator as a parent of the tab navigator, and put the details screen there. This is recommended."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* any other route you want to render under the tab bar */\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst HomeStack = createStackNavigator({\n  Tabs: TabNavigator,\n  Details: DetailsScreen,\n  /* any other route you want to render above the tab bar */\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: HomeStack,\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"a-drawer-has-a-stack-inside-of-it-and-you-want-to-lock-the-drawer-on-certain-screens",children:"A drawer has a stack inside of it and you want to lock the drawer on certain screens"}),"\n",(0,o.jsxs)(n.p,{children:["This is conceptually identical to having a tab with a stack inside of it (read that above if you have not already), where you want to hide the tab bar on certain screens. The only difference is that rather than using ",(0,o.jsx)(n.code,{children:"tabBarVisible"})," you will use ",(0,o.jsx)(n.code,{children:"drawerLockMode"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Imagine the following configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nconst DrawerNavigator = createDrawerNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: DrawerNavigator,\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In order to hide the drawer when we push the details screen to the feed stack, we need to set ",(0,o.jsx)(n.code,{children:"navigationOptions"})," on the ",(0,o.jsx)(n.code,{children:"FeedStack"}),". If we were to set ",(0,o.jsx)(n.code,{children:"navigationOptions"})," on the ",(0,o.jsx)(n.code,{children:"DetailsScreen"}),", they would be configuring the feed stack (its direct parent) and not the drawer."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nFeedStack.navigationOptions = ({ navigation }) => {\n  let drawerLockMode = 'unlocked';\n  if (navigation.state.index > 0) {\n    drawerLockMode = 'locked-closed';\n  }\n\n  return {\n    drawerLockMode,\n  };\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Another option here would be to add another stack navigator as a parent of the drawer navigator, and put the details screen there. This is recommended."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* any other route where you want the drawer to remain available */\n  /* keep in mind that it will conflict with the swipe back gesture on ios */\n});\n\nconst DrawerNavigator = createDrawerNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst HomeStack = createStackNavigator({\n  Drawer: DrawerNavigator,\n  Details: DetailsScreen,\n  /* add routes here where you want the drawer to be locked */\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: HomeStack,\n});\n"})})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(67294);let o={},i=a.createContext(o);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);