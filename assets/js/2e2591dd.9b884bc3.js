"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1393],{96471:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=i(85893),t=i(11151);const o={id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},r=void 0,s={id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",description:"Sometimes you need to trigger a navigation action from places where you do not have access to the navigation prop, such as a Redux middleware. For such cases, you can dispatch navigation actions use a ref on the navigation container.",source:"@site/versioned_docs/version-6.x/navigating-without-navigation-prop.md",sourceDirName:".",slug:"/navigating-without-navigation-prop",permalink:"/docs/navigating-without-navigation-prop",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/navigating-without-navigation-prop.md",tags:[],version:"6.x",frontMatter:{id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},sidebar:"docs",previous:{title:"Access the navigation prop from any component",permalink:"/docs/connecting-navigation-prop"},next:{title:"Deep linking",permalink:"/docs/deep-linking"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Handling initialization",id:"handling-initialization",level:2}];function h(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["Sometimes you need to trigger a navigation action from places where you do not have access to the ",(0,a.jsx)(e.code,{children:"navigation"})," prop, such as a Redux middleware. For such cases, you can dispatch navigation actions use a ",(0,a.jsxs)(e.a,{href:"/docs/navigation-container#ref",children:[(0,a.jsx)(e.code,{children:"ref"})," on the navigation container"]}),"."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Do not"})," use the ",(0,a.jsx)(e.code,{children:"ref"})," if:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["You need to navigate from inside a component without needing to pass the ",(0,a.jsx)(e.code,{children:"navigation"})," prop down, see ",(0,a.jsx)(e.a,{href:"/docs/use-navigation",children:(0,a.jsx)(e.code,{children:"useNavigation"})})," instead. The ",(0,a.jsx)(e.code,{children:"ref"})," behaves differently, and many helper methods specific to screens aren't available."]}),"\n",(0,a.jsxs)(e.li,{children:["You need to handle deep links or universal links. Doing this with the ",(0,a.jsx)(e.code,{children:"ref"})," has many edge cases. See ",(0,a.jsx)(e.a,{href:"/docs/configuring-links",children:"configuring links"})," for more information on handling deep linking."]}),"\n",(0,a.jsxs)(e.li,{children:["You need to integrate with third party libraries, such as push notifications, branch etc. See ",(0,a.jsx)(e.a,{href:"/docs/deep-linking#third-party-integrations",children:"third party integrations for deep linking"})," instead."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Do"})," use the ",(0,a.jsx)(e.code,{children:"ref"})," if:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"You use a state management library such as Redux, where you need to dispatch navigation actions from a middleware."}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Note that it's usually better to trigger navigation from user actions such as button presses, rather than from a Redux middleware. Navigating on user action makes the app feel more responsive and provides better UX. So consider this before using the ",(0,a.jsx)(e.code,{children:"ref"})," for navigation. The ",(0,a.jsx)(e.code,{children:"ref"})," is an escape hatch for scenarios that can't be handled with the existing APIs and should only be used in rare situations."]}),"\n",(0,a.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(e.p,{children:["You can get access to the root navigation object through a ",(0,a.jsx)(e.code,{children:"ref"})," and pass it to the ",(0,a.jsx)(e.code,{children:"RootNavigation"})," which we will later use to navigate."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// App.js\n\nimport { NavigationContainer } from '@react-navigation/native';\nimport { navigationRef } from './RootNavigation';\n\nexport default function App() {\n  return (\n    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n  );\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["In the next step, we define ",(0,a.jsx)(e.code,{children:"RootNavigation"}),", which is a simple module with functions that dispatch user-defined navigation actions."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// RootNavigation.js\n\nimport { createNavigationContainerRef } from '@react-navigation/native';\n\nexport const navigationRef = createNavigationContainerRef();\n\nexport function navigate(name, params) {\n  if (navigationRef.isReady()) {\n    navigationRef.navigate(name, params);\n  }\n}\n\n// add other navigation functions that you need and export them\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Then, in any of your javascript modules, import the ",(0,a.jsx)(e.code,{children:"RootNavigation"})," and call functions which you exported from it. You may use this approach outside of your React components and, in fact, it works as well when used from within them."]}),"\n",(0,a.jsx)("samp",{id:"no-nav-prop"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// any js module\nimport * as RootNavigation from './path/to/RootNavigation.js';\n\n// ...\n\nRootNavigation.navigate('ChatScreen', { userName: 'Lucy' });\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Apart from ",(0,a.jsx)(e.code,{children:"navigate"}),", you can add other navigation actions:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { StackActions } from '@react-navigation/native';\n\n// ...\n\nexport function push(...args) {\n  if (navigationRef.isReady()) {\n    navigationRef.dispatch(StackActions.push(...args));\n  }\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Note that a stack navigators needs to be rendered to handle this action. You may want to check the ",(0,a.jsx)(e.a,{href:"/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator",children:"docs for nesting"})," for more details."]}),"\n",(0,a.jsx)(e.p,{children:"When writing tests, you may mock the navigation functions, and make assertions on whether the correct functions are called with the correct parameters."}),"\n",(0,a.jsx)(e.h2,{id:"handling-initialization",children:"Handling initialization"}),"\n",(0,a.jsx)(e.p,{children:"When using this pattern, you need to keep few things in mind to avoid navigation from failing in your app."}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["The ",(0,a.jsx)(e.code,{children:"ref"})," is set only after the navigation container renders, this can be async when handling deep links"]}),"\n",(0,a.jsxs)(e.li,{children:["A navigator needs to be rendered to be able to handle actions, the ",(0,a.jsx)(e.code,{children:"ref"})," won't be ready without a navigator"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"If you try to navigate without rendering a navigator or before the navigator finishes mounting, it will print an error and do nothing. So you'll need to add an additional check to decide what to do until your app mounts."}),"\n",(0,a.jsxs)(e.p,{children:["For an example, consider the following scenario, you have a screen somewhere in the app, and that screen dispatches a redux action on ",(0,a.jsx)(e.code,{children:"useEffect"}),"/",(0,a.jsx)(e.code,{children:"componentDidMount"}),". You are listening for this action in your middleware and try to perform navigation when you get it. This will throw an error, because by this time, the parent navigator hasn't finished mounting and isn't ready. Parent's ",(0,a.jsx)(e.code,{children:"useEffect"}),"/",(0,a.jsx)(e.code,{children:"componentDidMount"})," is always called ",(0,a.jsx)(e.strong,{children:"after"})," child's ",(0,a.jsx)(e.code,{children:"useEffect"}),"/",(0,a.jsx)(e.code,{children:"componentDidMount"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["To avoid this, you can use the ",(0,a.jsx)(e.code,{children:"isReady()"})," method available on the ref as shown in the above examples."]}),"\n",(0,a.jsx)("samp",{id:"handling-navigation-init"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// RootNavigation.js\n\nimport * as React from 'react';\n\nexport const navigationRef = createNavigationContainerRef();\n\nexport function navigate(name, params) {\n  if (navigationRef.isReady()) {\n    // Perform navigation if the react navigation is ready to handle actions\n    navigationRef.navigate(name, params);\n  } else {\n    // You can decide what to do if react navigation is not ready\n    // You can ignore this, or add these actions to a queue you can call later\n  }\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["If you're unsure if a navigator is rendered, you can call ",(0,a.jsx)(e.code,{children:"navigationRef.current.getRootState()"}),", and it'll return a valid state object if any navigators are rendered, otherwise it will return ",(0,a.jsx)(e.code,{children:"undefined"}),"."]})]})}function l(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>r});var a=i(67294);const t={},o=a.createContext(t);function r(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);