"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["33401"],{57778:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return l}});var a=t(94668),i=t(85893),o=t(50065);let r={title:"React Navigation 6.0",authors:"satya",tags:["release","announcement"]},s=void 0,c={authorsImageUrls:[void 0]},l=[{value:"Highlights",id:"highlights",level:2},{value:"More flexible navigators",id:"more-flexible-navigators",level:3},{value:"Elements library",id:"elements-library",level:3},{value:"Simplified APIs for existing functionality",id:"simplified-apis-for-existing-functionality",level:3},{value:"New <code>Group</code> component for organization",id:"new-group-component-for-organization",level:3},{value:"Headers by default in Bottom Tabs &amp; Drawer",id:"headers-by-default-in-bottom-tabs--drawer",level:3},{value:"Native navigation by default",id:"native-navigation-by-default",level:3},{value:"Better type-safety",id:"better-type-safety",level:3},{value:"Flipper plugin",id:"flipper-plugin",level:3},{value:"Upgrading",id:"upgrading",level:2},{value:"Sponsor us",id:"sponsor-us",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The documentation is now live at ",(0,i.jsx)(n.a,{href:"https://reactnavigation.org/6.x/getting-started",children:"reactnavigation.org"}),", and v5 lives ",(0,i.jsx)(n.a,{href:"/docs/5.x/getting-started",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"React Navigation 6 keeps mostly the same core API as React Navigation 5, and you can think of it as further polishing what was in React Navigation 5. Let's talk about the highlights of this release in this blog post."}),"\n",(0,i.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,i.jsx)(n.h3,{id:"more-flexible-navigators",children:"More flexible navigators"}),"\n",(0,i.jsx)(n.p,{children:"Navigators accept many of their customization options as props, which means we can\u2019t customize them based on the active screen. To make this level of control possible, we needed to move these props to options that you can configure per screen."}),"\n",(0,i.jsxs)(n.p,{children:["In React Navigation 6, many of these props are now screen options. The most significant changes are ",(0,i.jsx)(n.code,{children:"tabBarOptions"})," and ",(0,i.jsx)(n.code,{children:"drawerContentOptions"}),", which now all live on ",(0,i.jsx)(n.code,{children:"options"})," instead. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// Before (v5)\n<Tab.Navigator\n  tabBarOptions={{\n    inactiveTintColor: 'rgba(255, 255, 255, 0.5)',\n    activeTintColor: '#fff',\n    style: {\n      position: 'absolute',\n      borderTopColor: 'rgba(0, 0, 0, .2)',\n    },\n  }}\n>\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// After (v6)\n<Tab.Navigator\n  screenOptions={{\n    tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',\n    tabBarActiveTintColor: '#fff',\n    tabBarStyle: {\n      position: 'absolute',\n      borderTopColor: 'rgba(0, 0, 0, .2)',\n    },\n  }}\n>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/6.x/upgrading-from-5.x#deprecations",children:"deprecations"})," for more details."]}),"\n",(0,i.jsx)(n.h3,{id:"elements-library",children:"Elements library"}),"\n",(0,i.jsxs)(n.p,{children:["We extracted some of the components and helpers used across various navigators in React Navigation and published them under a new package called ",(0,i.jsx)(n.a,{href:"/docs/6.x/elements",children:(0,i.jsx)(n.code,{children:"@react-navigation/elements"})}),". It can be useful if you're building your own navigator, or just want to reuse some of the components in your app."]}),"\n",(0,i.jsx)(n.p,{children:"Currently only a small set of components are exported, but there are more to come."}),"\n",(0,i.jsx)(n.h3,{id:"simplified-apis-for-existing-functionality",children:"Simplified APIs for existing functionality"}),"\n",(0,i.jsx)(n.p,{children:"We simplified many APIs with React Navigation 6 to address common use cases. For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Single option to use a modal presentation style and transparent modal with ",(0,i.jsx)(n.a,{href:"/docs/6.x/stack-navigator#presentation",children:(0,i.jsx)(n.code,{children:"presentation"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Custom header doesn't require setting ",(0,i.jsx)(n.code,{children:'headerMode="screen"'})," manually anymore"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"useHeaderHeight"})," hook now ignores hidden headers and returns the height of the closest visible header in parent"]}),"\n",(0,i.jsxs)(n.li,{children:["New option to set a ",(0,i.jsx)(n.a,{href:"/docs/6.x/bottom-tab-navigator#tabbarbackground",children:"custom background"})," (such as ",(0,i.jsx)(n.code,{children:"BlurView"}),") for tab bar without having to use a custom tab bar"]}),"\n",(0,i.jsxs)(n.li,{children:["New API to manage ref on the container ",(0,i.jsxs)(n.a,{href:"/docs/6.x/navigating-without-navigation-prop",children:["(",(0,i.jsx)(n.code,{children:"createNavigationContainerRef"})," and ",(0,i.jsx)(n.code,{children:"useNavigationContainerRef"}),")"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"new-group-component-for-organization",children:["New ",(0,i.jsx)(n.code,{children:"Group"})," component for organization"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/docs/6.x/group",children:(0,i.jsx)(n.code,{children:"Group"})})," component helps you organize screens inside your navigators and share common ",(0,i.jsx)(n.code,{children:"screenOptions"})," between the ",(0,i.jsx)(n.code,{children:"Group"}),"s. Passing ",(0,i.jsx)(n.code,{children:"screenOptions"})," to a group configures all the screens inside that group to use these options. You can override ",(0,i.jsx)(n.code,{children:"Group"})," options by passing ",(0,i.jsx)(n.code,{children:"options"})," to each Screen component, similar to how you can with ",(0,i.jsx)(n.code,{children:"screenOptions"})," on Navigator. You can also nest ",(0,i.jsx)(n.code,{children:"Group"})," components inside other ",(0,i.jsx)(n.code,{children:"Group"})," components. They are lightweight and don\u2019t render anything - like fragments, so they won\u2019t affect performance."]}),"\n",(0,i.jsx)(n.p,{children:"In this code snippet, you can see that we group regular screens under one group and modal screens under another group:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Group>\n        <Stack.Screen name="Home" component={HomeScreen} />\n        <Stack.Screen name="Details" component={DetailsScreen} />\n      </Stack.Group>\n      <Stack.Group screenOptions={{ presentation: \'modal\' }}>\n        <Stack.Screen name="CreatePost" component={CreatePostScreen} />\n      </Stack.Group>\n    </Stack.Navigator>\n  );\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"headers-by-default-in-bottom-tabs--drawer",children:"Headers by default in Bottom Tabs & Drawer"}),"\n",(0,i.jsx)(n.p,{children:"Developers often want to show a header for screens inside of drawers and bottom tabs. To do this, we had to nest a stack navigator which provides a header, even if it was a navigator with just one screen. So we now show headers by default in screens of drawer and bottom tabs. No nesting necessary."}),"\n",(0,i.jsxs)(n.p,{children:["We also export a ",(0,i.jsx)(n.a,{href:"/docs/6.x/elements#header",children:(0,i.jsx)(n.code,{children:"Header"})})," component in the new elements library to use anywhere in your components."]}),"\n",(0,i.jsx)(n.h3,{id:"native-navigation-by-default",children:"Native navigation by default"}),"\n",(0,i.jsxs)(n.p,{children:["Historically, React Navigation has been mostly JS based, with animations and gestures written in JavaScript on top of ",(0,i.jsx)(n.code,{children:"react-native-gesture-handler"}),", and ",(0,i.jsx)(n.code,{children:"react-native-reanimated"})," or ",(0,i.jsx)(n.code,{children:"Animated"}),". While this works for a lot of apps, apps with heavy screens can suffer from poor performance, and some native features are difficult to re-create exactly (such as the large header on iOS). So, we wanted to address this by using native primitives for navigation."]}),"\n",(0,i.jsxs)(n.p,{children:["With React Navigation 5, we introduced ",(0,i.jsx)(n.a,{href:"/docs/6.x/native-stack-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/native-stack"})})," package powered by ",(0,i.jsx)(n.a,{href:"https://github.com/software-mansion/react-native-screens",children:(0,i.jsx)(n.code,{children:"react-native-screens"})}),", as well as a native backend for ",(0,i.jsx)(n.a,{href:"/docs/6.x/material-top-tab-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/material-top-tabs"})})," powered by ",(0,i.jsx)(n.a,{href:"https://github.com/callstack/react-native-pager-view",children:(0,i.jsx)(n.code,{children:"react-native-pager-view"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In React Navigation 6, we made ",(0,i.jsx)(n.code,{children:"@react-navigation/native-stack"})," the default choice for setting up Stack navigation. It uses ",(0,i.jsx)(n.code,{children:"UINavigationController"})," on iOS and Fragments on Android to implement navigation natively. We also focused a lot on aligning the API of ",(0,i.jsx)(n.code,{children:"@react-navigation/native-stack"})," with ",(0,i.jsx)(n.code,{children:"@react-navigation/stack"})," so that it\u2019ll be easier to switch between them."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["While ",(0,i.jsx)(n.code,{children:"@react-navigation/native-stack"})," is now used as the default choice in the documentation, it doesn't replace ",(0,i.jsx)(n.code,{children:"@react-navigation/stack"}),". Both packages are maintained and are valid options for your projects. If you're currently using ",(0,i.jsx)(n.code,{children:"@react-navigation/stack"}),", you can keep using it. You don't need to move to ",(0,i.jsx)(n.code,{children:"@react-navigation/native-stack"})," unless you really want to."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, we switched ",(0,i.jsx)(n.code,{children:"@react-navigation/material-top-tabs"})," to use ",(0,i.jsx)(n.code,{children:"react-native-pager-view"})," by default."]}),"\n",(0,i.jsx)(n.h3,{id:"better-type-safety",children:"Better type-safety"}),"\n",(0,i.jsxs)(n.p,{children:["React Navigation 5\u2019s TypeScript support was much better than React Navigation 4; but, some things such as ",(0,i.jsx)(n.code,{children:"useNavigation"})," were still untyped by default."]}),"\n",(0,i.jsxs)(n.p,{children:["In React Navigation 6, you don\u2019t need to annotate ",(0,i.jsx)(n.code,{children:"useNavigation"})," to get autocompletion and type checking. This is possible by defining a type for the screens globally using declaration merging:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"declare global {\n  namespace ReactNavigation {\n    interface RootParamList {\n      Home: undefined;\n      Profile: { userId: string };\n      NotFound: undefined;\n    }\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can read ",(0,i.jsx)(n.a,{href:"/docs/6.x/typescript#specifying-default-types-for-usenavigation-link-ref-etc",children:"more about it in our TypeScript docs"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"flipper-plugin",children:"Flipper plugin"}),"\n",(0,i.jsxs)(n.p,{children:["Our new ",(0,i.jsx)(n.a,{href:"https://fbflipper.com/",children:"Flipper"})," plugin includes similar functionality to the currently available Redux Devtools Extensions integration. You can see all navigation actions, and jump back and forth between earlier and new navigation states. In addition, it also includes a tab to test your linking configuration."]}),"\n",(0,i.jsx)(n.p,{children:"Since the dev tools is built from scratch, we\u2019re now free to add new features to make debugging easier in future."}),"\n",(0,i.jsx)(n.p,{children:"One advantage of the Flipper plugin over Redux Devtools Extension is that it doesn\u2019t need Chrome Debugger to work. Since Chrome Debugger can sometimes affect performance and even potentially change behavior, we think this is a more reliable solution."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"React Navigation Logs",src:t(20968).Z+"",width:"2188",height:"1424"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"React Navigation Linking",src:t(15764).Z+"",width:"2188",height:"1424"})}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/docs/6.x/devtools#useflipper",children:"guide for setting it up"})," for more details. Note that Flipper support in Expo managed apps requires a ",(0,i.jsx)(n.a,{href:"https://docs.expo.dev/clients/introduction/",children:"Custom Development Client"})," and it does not work in Expo Go at the time of writing."]}),"\n",(0,i.jsx)(n.h2,{id:"upgrading",children:"Upgrading"}),"\n",(0,i.jsx)(n.p,{children:"While React Navigation 6 doesn't introduce changes of the same magnitude as React Navigation 5, there are still some breaking changes. It is possible, however, to mix packages from React Navigation 5 and React Navigation 6 (with a few caveats) so that you can gradually upgrade packages."}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/docs/6.x/upgrading-from-5.x",children:"upgrade guide"})," for a full list of changes and more details."]}),"\n",(0,i.jsx)(n.h2,{id:"sponsor-us",children:"Sponsor us"}),"\n",(0,i.jsx)(n.p,{children:"If React Navigation helps you to deliver value to your customers, it'd awesome a lot if you could sponsor us. Sponsorships will help us to move more quickly towards our goal of building the best cross-platform navigation library and continue to provide timely support for bug reports in our GitHub issues."}),"\n",(0,i.jsxs)(n.p,{children:["\uD83D\uDC49 ",(0,i.jsx)(n.a,{href:"https://github.com/sponsors/react-navigation",children:"Visit our GitHub Sponsors page"})," \uD83D\uDC48"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},15764:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/flipper-plugin-linking-5f9ec9cba7913ada028e6314f1bef395.png"},20968:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/flipper-plugin-logs-220cf869c9f44eceb1e62f9eefbf0c7c.png"},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(67294);let i={},o=a.createContext(i);function r(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}},94668:function(e){e.exports=JSON.parse('{"permalink":"/blog/2021/08/14/react-navigation-6.0","source":"@site/blog/2021-08-14-react-navigation-6.0.md","title":"React Navigation 6.0","description":"The documentation is now live at reactnavigation.org, and v5 lives here.","date":"2021-08-14T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"announcement","permalink":"/blog/tags/announcement"}],"readingTime":5.65,"hasTruncateMarker":true,"authors":[{"name":"Satyajit Sahoo","url":"https://satya164.page","title":"Core Team","socials":{"x":"https://x.com/satya164","github":"https://github.com/satya164"},"imageURL":"https://avatars2.githubusercontent.com/u/1174278","key":"satya","page":null}],"frontMatter":{"title":"React Navigation 6.0","authors":"satya","tags":["release","announcement"]},"unlisted":false,"prevItem":{"title":"Introducing Static API","permalink":"/blog/2024/03/25/introducing-static-api"},"nextItem":{"title":"On the way to React Navigation 6.0","permalink":"/blog/2021/03/12/react-navigation-6.0-next"}}')}}]);