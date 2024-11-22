"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["23322"],{70112:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>l,assets:()=>c,toc:()=>p,frontMatter:()=>r});var a=JSON.parse('{"id":"app-containers","title":"App containers","description":"We\'ve been taking createAppContainer for granted so far, so let\'s explain them quickly. Containers are responsible for managing your app state and linking your top-level navigator to the app environment. On Android, the app container uses the Linking API to handle the back button. The container can also be configured to persist your navigation state. On web, you\'d use different containers than React Native. As we\'ve seen already, app container usage looks like this:","source":"@site/versioned_docs/version-4.x/app-containers.md","sourceDirName":".","slug":"/app-containers","permalink":"/docs/4.x/app-containers","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/app-containers.md","tags":[],"version":"4.x","frontMatter":{"id":"app-containers","title":"App containers","sidebar_label":"App containers"},"sidebar":"version-4.x-docs","previous":{"title":"Header buttons","permalink":"/docs/4.x/header-buttons"},"next":{"title":"Opening a full-screen modal","permalink":"/docs/4.x/modal"}}'),o=t("85893"),i=t("50065");let r={id:"app-containers",title:"App containers",sidebar_label:"App containers"},s=void 0,c={},p=[{value:"Props of <code>createAppContainer</code> on React Native",id:"props-of-createappcontainer-on-react-native",level:2},{value:"<code>onNavigationStateChange(prevState, newState, action)</code>",id:"onnavigationstatechangeprevstate-newstate-action",level:3},{value:"<code>uriPrefix</code>",id:"uriprefix",level:3},{value:"Calling <code>dispatch</code> or <code>navigate</code> on a container ref",id:"calling-dispatch-or-navigate-on-a-container-ref",level:2},{value:"On the web",id:"on-the-web",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["We've been taking ",(0,o.jsx)(n.code,{children:"createAppContainer"})," for granted so far, so let's explain them quickly. Containers are responsible for managing your app state and linking your top-level navigator to the app environment. On Android, the app container uses the ",(0,o.jsx)(n.code,{children:"Linking"})," API to handle the back button. The container can also be configured to persist your navigation state. On web, you'd use different containers than React Native. As we've seen already, app container usage looks like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { createAppContainer } from 'react-navigation';\nimport { createStackNavigator } from 'react-navigation-stack';\n\nconst RootStack = createStackNavigator({\n  /* your routes here */\n});\nconst AppContainer = createAppContainer(RootStack);\n\n// Now AppContainer is the main component for React to render\nexport default AppContainer;\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"props-of-createappcontainer-on-react-native",children:["Props of ",(0,o.jsx)(n.code,{children:"createAppContainer"})," on React Native"]}),"\n",(0,o.jsx)(n.p,{children:"There are a couple of props worth knowing about on the app container."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'<AppContainer\n  onNavigationStateChange={handleNavigationChange}\n  uriPrefix="/app"\n/>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"onnavigationstatechangeprevstate-newstate-action",children:(0,o.jsx)(n.code,{children:"onNavigationStateChange(prevState, newState, action)"})}),"\n",(0,o.jsx)(n.p,{children:"Function that gets called every time navigation state managed by the navigator changes. It receives the previous state, the new state of the navigation and the action that issued state change. By default it prints state changes to the console."}),"\n",(0,o.jsx)(n.h3,{id:"uriprefix",children:(0,o.jsx)(n.code,{children:"uriPrefix"})}),"\n",(0,o.jsxs)(n.p,{children:["The prefix of the URIs that the app might handle. This will be used when handling a ",(0,o.jsx)(n.a,{href:"/docs/4.x/deep-linking",children:"deep link"})," to extract the path passed to the router."]}),"\n",(0,o.jsxs)(n.h2,{id:"calling-dispatch-or-navigate-on-a-container-ref",children:["Calling ",(0,o.jsx)(n.code,{children:"dispatch"})," or ",(0,o.jsx)(n.code,{children:"navigate"})," on a container ref"]}),"\n",(0,o.jsxs)(n.p,{children:["In some cases you may want to perform navigation actions from the root of your app, outside of any of the screens. To do this you can use a React ",(0,o.jsx)(n.a,{href:"https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute",children:(0,o.jsx)(n.code,{children:"ref"})})," to call the ",(0,o.jsx)(n.code,{children:"dispatch"})," method on it:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const AppContainer = createAppContainer(AppNavigator);\n\nclass App extends React.Component {\n  someEvent() {\n    // call navigate for AppNavigator here:\n    this.navigator &&\n      this.navigator.dispatch(\n        NavigationActions.navigate({ routeName: someRouteName })\n      );\n  }\n  render() {\n    return (\n      <AppContainer\n        ref={(nav) => {\n          this.navigator = nav;\n        }}\n      />\n    );\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"on-the-web",children:"On the web"}),"\n",(0,o.jsxs)(n.p,{children:["To learn about how to use React Navigation the web (still very experimental), see the ",(0,o.jsx)(n.a,{href:"/docs/4.x/web-support",children:"web support"})," guide."]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(67294);let o={},i=a.createContext(o);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);