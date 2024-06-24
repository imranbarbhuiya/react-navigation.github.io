"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[44266],{20997:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=a(85893),r=a(11151),i=a(74866),o=a(85162);const s={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},c=void 0,l={id:"troubleshooting",title:"Troubleshooting",description:"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself.",source:"@site/versioned_docs/version-7.x/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/7.x/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/troubleshooting.md",tags:[],version:"7.x",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Type checking with TypeScript",permalink:"/docs/7.x/typescript"},next:{title:"Upgrading from 6.x",permalink:"/docs/7.x/upgrading-from-6.x"}},d={},h=[{value:"I&#39;m getting an error &quot;Unable to resolve module&quot; after updating to the latest version",id:"im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version",level:2},{value:"Stale cache of Metro bundler",id:"stale-cache-of-metro-bundler",level:3},{value:"Missing peer dependency",id:"missing-peer-dependency",level:3},{value:"Missing extensions in metro configuration",id:"missing-extensions-in-metro-configuration",level:3},{value:"I&#39;m getting &quot;SyntaxError in @react-navigation/xxx/xxx.tsx&quot; or &quot;SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token&quot;",id:"im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token",level:2},{value:"I&#39;m getting &quot;Module &#39;[...]&#39; has no exported member &#39;xxx&#39; when using TypeScript",id:"im-getting-module--has-no-exported-member-xxx-when-using-typescript",level:2},{value:"I&#39;m getting an error &quot;null is not an object (evaluating &#39;RNGestureHandlerModule.default.Direction&#39;)&quot;",id:"im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection",level:2},{value:"I&#39;m getting an error &quot;requireNativeComponent: &quot;RNCSafeAreaProvider&quot; was not found in the UIManager&quot;",id:"im-getting-an-error-requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager",level:2},{value:"I&#39;m getting an error &quot;Tried to register two views with the same name RNCSafeAreaProvider&quot;",id:"im-getting-an-error-tried-to-register-two-views-with-the-same-name-rncsafeareaprovider",level:2},{value:"Nothing is visible on the screen after adding a <code>View</code>",id:"nothing-is-visible-on-the-screen-after-adding-a-view",level:2},{value:"I get the warning &quot;Non-serializable values were found in the navigation state&quot;",id:"i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state",level:2},{value:"I&#39;m getting &quot;Invalid hook call. Hooks can only be called inside of the body of a function component&quot;",id:"im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component",level:2},{value:"Screens are unmounting/remounting during navigation",id:"screens-are-unmountingremounting-during-navigation",level:2},{value:"App is not working properly when connected to Chrome Debugger",id:"app-is-not-working-properly-when-connected-to-chrome-debugger",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself."}),"\n",(0,t.jsxs)(n.p,{children:["Before troubleshooting an issue, make sure that you have upgraded to ",(0,t.jsx)(n.strong,{children:"the latest available versions"})," of the packages. You can install the latest versions by installing the packages again (e.g. ",(0,t.jsx)(n.code,{children:"npm install package-name"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version",children:'I\'m getting an error "Unable to resolve module" after updating to the latest version'}),"\n",(0,t.jsx)(n.p,{children:"This might happen for 3 reasons:"}),"\n",(0,t.jsx)(n.h3,{id:"stale-cache-of-metro-bundler",children:"Stale cache of Metro bundler"}),"\n",(0,t.jsxs)(n.p,{children:["If the module points to a local file (i.e. the name of the module starts with ",(0,t.jsx)(n.code,{children:"./"}),"), then it's probably due to stale cache. To fix this, try the following solutions."]}),"\n",(0,t.jsx)(n.p,{children:"If you're using Expo, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"expo start -c\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you're not using Expo, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx react-native start --reset-cache\n"})}),"\n",(0,t.jsx)(n.p,{children:"If that doesn't work, you can also try the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rm -rf $TMPDIR/metro-bundler-cache-*\n"})}),"\n",(0,t.jsx)(n.h3,{id:"missing-peer-dependency",children:"Missing peer dependency"}),"\n",(0,t.jsxs)(n.p,{children:["If the module points to an npm package (i.e. the name of the module doesn't with ",(0,t.jsx)(n.code,{children:"./"}),"), then it's probably due to a missing dependency. To fix this, install the dependency in your project:"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install name-of-the-module\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add name-of-the-module\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add name-of-the-module\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes it might even be due to a corrupt installation. If clearing cache didn't work, try deleting your ",(0,t.jsx)(n.code,{children:"node_modules"})," folder and run ",(0,t.jsx)(n.code,{children:"npm install"})," again."]}),"\n",(0,t.jsx)(n.h3,{id:"missing-extensions-in-metro-configuration",children:"Missing extensions in metro configuration"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes the error may look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'Error: While trying to resolve module "@react-navigation/native" from file "/path/to/src/App.js", the package "/path/to/node_modules/@react-navigation/native/package.json" was successfully found. However, this package itself specifies a "main" module field that could not be resolved ("/path/to/node_modules/@react-navigation/native/src/index.tsx"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This can happen if you have a custom configuration for metro and haven't specified ",(0,t.jsx)(n.code,{children:"ts"})," and ",(0,t.jsx)(n.code,{children:"tsx"})," as valid extensions. These extensions are present in the default configuration. To check if this is the issue, look for a ",(0,t.jsx)(n.code,{children:"metro.config.js"})," file in your project and check if you have specified the ",(0,t.jsx)(n.a,{href:"https://facebook.github.io/metro/docs/en/configuration#sourceexts",children:(0,t.jsx)(n.code,{children:"sourceExts"})})," option. It should at least have the following configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"sourceExts: ['js', 'json', 'ts', 'tsx'];\n"})}),"\n",(0,t.jsx)(n.p,{children:"If it's missing these extensions, add them and then clear metro cache as shown in the section above."}),"\n",(0,t.jsx)(n.h2,{id:"im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token",children:'I\'m getting "SyntaxError in @react-navigation/xxx/xxx.tsx" or "SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token"'}),"\n",(0,t.jsxs)(n.p,{children:["This might happen if you have an old version of the ",(0,t.jsx)(n.code,{children:"metro-react-native-babel-preset"})," package. Try upgrading it to the latest version."]}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev metro-react-native-babel-preset\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev metro-react-native-babel-preset\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev metro-react-native-babel-preset\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["If you have ",(0,t.jsx)(n.code,{children:"@babel/core"})," installed, also upgrade it to latest version."]}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @babel/core\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @babel/core\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @babel/core\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["If upgrading the packages don't help, you can also try deleting your ",(0,t.jsx)(n.code,{children:"node_modules"})," as well as lock the file and reinstall your dependencies."]}),"\n",(0,t.jsxs)(n.p,{children:["If you use ",(0,t.jsx)(n.code,{children:"npm"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rm -rf node_modules\nrm package-lock.json\nnpm install\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you use ",(0,t.jsx)(n.code,{children:"yarn"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rm -rf node_modules\nrm yarn.lock\nyarn\n"})}),"\n",(0,t.jsx)(n.p,{children:"After upgrading or reinstalling the packages, you should also clear Metro bundler's cache following the instructions earlier in the page."}),"\n",(0,t.jsx)(n.h2,{id:"im-getting-module--has-no-exported-member-xxx-when-using-typescript",children:"I'm getting \"Module '[...]' has no exported member 'xxx' when using TypeScript"}),"\n",(0,t.jsx)(n.p,{children:"This might happen if you have an old version of TypeScript in your project. You can try upgrading it:"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev typescript\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev typescript\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev typescript\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection",children:"I'm getting an error \"null is not an object (evaluating 'RNGestureHandlerModule.default.Direction')\""}),"\n",(0,t.jsxs)(n.p,{children:["This and some similar errors might occur if you have a bare React Native project and the library ",(0,t.jsx)(n.a,{href:"https://github.com/software-mansion/react-native-gesture-handler",children:(0,t.jsx)(n.code,{children:"react-native-gesture-handler"})})," library isn't linked."]}),"\n",(0,t.jsx)(n.p,{children:"Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"react-native unlink react-native-gesture-handler\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you're testing on iOS and use Mac, make sure you have run ",(0,t.jsx)(n.code,{children:"pod install"})," in the ",(0,t.jsx)(n.code,{children:"ios/"})," folder:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ios\npod install\ncd ..\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now rebuild the app and test on your device or simulator."}),"\n",(0,t.jsx)(n.h2,{id:"im-getting-an-error-requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager",children:'I\'m getting an error "requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager"'}),"\n",(0,t.jsxs)(n.p,{children:["This and some similar errors might occur if you have a bare React Native project and the library ",(0,t.jsx)(n.a,{href:"https://github.com/th3rdwave/react-native-safe-area-context",children:(0,t.jsx)(n.code,{children:"react-native-safe-area-context"})})," library isn't linked."]}),"\n",(0,t.jsx)(n.p,{children:"Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"react-native unlink react-native-safe-area-context\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you're testing on iOS and use Mac, make sure you have run ",(0,t.jsx)(n.code,{children:"pod install"})," in the ",(0,t.jsx)(n.code,{children:"ios/"})," folder:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ios\npod install\ncd ..\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now rebuild the app and test on your device or simulator."}),"\n",(0,t.jsx)(n.h2,{id:"im-getting-an-error-tried-to-register-two-views-with-the-same-name-rncsafeareaprovider",children:'I\'m getting an error "Tried to register two views with the same name RNCSafeAreaProvider"'}),"\n",(0,t.jsxs)(n.p,{children:["This might occur if you have multiple versions of ",(0,t.jsx)(n.a,{href:"https://github.com/th3rdwave/react-native-safe-area-context",children:(0,t.jsx)(n.code,{children:"react-native-safe-area-context"})})," installed."]}),"\n",(0,t.jsx)(n.p,{children:"If you're using Expo managed workflow, it's likely that you have installed an incompatible version. To install the correct version, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx expo install react-native-safe-area-context\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If it didn't fix the error or you're not using Expo managed workflow, you'll need to check which package depends on a different version of ",(0,t.jsx)(n.code,{children:"react-native-safe-area-context"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you use ",(0,t.jsx)(n.code,{children:"yarn"}),", run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn why react-native-safe-area-context\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you use ",(0,t.jsx)(n.code,{children:"npm"}),", run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm ls react-native-safe-area-context\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will tell you if a package you use has a dependency on ",(0,t.jsx)(n.code,{children:"react-native-safe-area-context"}),". If it's a third-party package, you should open an issue on the relevant repo's issue tracker explaining the problem. Generally for libraries, dependencies containing native code should be defined in ",(0,t.jsx)(n.code,{children:"peerDependencies"})," instead of ",(0,t.jsx)(n.code,{children:"dependencies"})," to avoid such issues."]}),"\n",(0,t.jsxs)(n.p,{children:["If it's already in ",(0,t.jsx)(n.code,{children:"peerDependencies"})," and not in ",(0,t.jsx)(n.code,{children:"dependencies"}),", and you use ",(0,t.jsx)(n.code,{children:"npm"}),", it might be because of incompatible version range defined for the package. The author of the library will need to relax the version range in such cases to allow a wider range of versions to be installed."]}),"\n",(0,t.jsxs)(n.p,{children:["If you use ",(0,t.jsx)(n.code,{children:"yarn"}),", you can also temporarily override the version being installed using ",(0,t.jsx)(n.code,{children:"resolutions"}),". Add the following in your ",(0,t.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"resolutions": {\n  "react-native-safe-area-context": "<version you want to use>"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"And then run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you're on iOS and not using Expo managed workflow, also run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ios\npod install\ncd ..\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now rebuild the app and test on your device or simulator."}),"\n",(0,t.jsxs)(n.h2,{id:"nothing-is-visible-on-the-screen-after-adding-a-view",children:["Nothing is visible on the screen after adding a ",(0,t.jsx)(n.code,{children:"View"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you wrap the container in a ",(0,t.jsx)(n.code,{children:"View"}),", make sure the ",(0,t.jsx)(n.code,{children:"View"})," stretches to fill the container using ",(0,t.jsx)(n.code,{children:"flex: 1"}),":"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,t.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\n\n/* ... */\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1 }}>\n      <Navigation />\n    </View>\n  );\n}\n"})})}),(0,t.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1 }}>\n      <NavigationContainer>{/* ... */}</NavigationContainer>\n    </View>\n  );\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state",children:'I get the warning "Non-serializable values were found in the navigation state"'}),"\n",(0,t.jsxs)(n.p,{children:["This can happen if you are passing non-serializable values such as class instances, functions etc. in params. React Navigation warns you in this case because this can break other functionality such ",(0,t.jsx)(n.a,{href:"/docs/7.x/state-persistence",children:"state persistence"}),", ",(0,t.jsx)(n.a,{href:"/docs/7.x/deep-linking",children:"deep linking"})," etc."]}),"\n",(0,t.jsx)(n.p,{children:"Example of some use cases for passing functions in params are the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To pass a callback to use in a header button. This can be achieved using ",(0,t.jsx)(n.code,{children:"navigation.setOptions"})," instead. See the ",(0,t.jsx)(n.a,{href:"/docs/7.x/header-buttons#header-interaction-with-its-screen-component",children:"guide for header buttons"})," for examples."]}),"\n",(0,t.jsxs)(n.li,{children:["To pass a callback to the next screen which it can call to pass some data back. You can usually achieve it using ",(0,t.jsx)(n.code,{children:"navigate"})," instead. See the ",(0,t.jsx)(n.a,{href:"/docs/7.x/params",children:"guide for params"})," for examples."]}),"\n",(0,t.jsxs)(n.li,{children:["To pass complex data to another screen. Instead of passing the data ",(0,t.jsx)(n.code,{children:"params"}),", you can store that complex data somewhere else (like a global store), and pass an id instead. Then the screen can get the data from the global store using the id. See ",(0,t.jsx)(n.a,{href:"/docs/7.x/params#what-should-be-in-params",children:"what should be in params"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Pass data, callbacks etc. from a parent to child screens. You can either use React Context, or pass a children callback to pass these down instead of using params. See ",(0,t.jsx)(n.a,{href:"/docs/7.x/hello-react-navigation#passing-additional-props",children:"passing additional props"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you don't use state persistence or deep link to the screen which accepts functions in params, then the warning doesn't affect you and you can safely ignore it. To ignore the warning, you can use ",(0,t.jsx)(n.code,{children:"LogBox.ignoreLogs"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { LogBox } from 'react-native';\n\nLogBox.ignoreLogs([\n  'Non-serializable values were found in the navigation state',\n]);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component",children:'I\'m getting "Invalid hook call. Hooks can only be called inside of the body of a function component"'}),"\n",(0,t.jsxs)(n.p,{children:["This can happen when you pass a React component to an option that accepts a function returning a react element. For example, the ",(0,t.jsxs)(n.a,{href:"/docs/7.x/native-stack-navigator#headerTitle",children:[(0,t.jsx)(n.code,{children:"headerTitle"})," option in native stack navigator"]})," expects a function returning a react element:"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,t.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: Home,\n      options: {\n        headerTitle: (props) => <MyTitle {...props} />,\n      },\n    },\n  },\n});\n"})})}),(0,t.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Home"\n  component={Home}\n  option={{ headerTitle: (props) => <MyTitle {...props} /> }}\n/>\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"If you directly pass a function here, you'll get this error when using hooks:"}),"\n",(0,t.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,t.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: Home,\n      options: {\n        // This is not correct\n        headerTitle: MyTitle,\n      },\n    },\n  },\n});\n"})})}),(0,t.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Home"\n  component={Home}\n  option={{\n    // This is not correct\n    headerTitle: MyTitle,\n  }}\n/>\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The same applies to other options like ",(0,t.jsx)(n.code,{children:"headerLeft"}),", ",(0,t.jsx)(n.code,{children:"headerRight"}),", ",(0,t.jsx)(n.code,{children:"tabBarIcon"})," etc. as well as props such as ",(0,t.jsx)(n.code,{children:"tabBar"}),", ",(0,t.jsx)(n.code,{children:"drawerContent"})," etc."]}),"\n",(0,t.jsx)(n.h2,{id:"screens-are-unmountingremounting-during-navigation",children:"Screens are unmounting/remounting during navigation"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes you might have noticed that your screens unmount/remount, or your local component state or the navigation state resets when you navigate. This might happen if you are creating React components during render."}),"\n",(0,t.jsx)(n.p,{children:"The simplest example is something like following:"}),"\n",(0,t.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,t.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const RootStack = createNativeStackNavigator({\n  screens: {\n    Home: () => {\n      return <SomeComponent />;\n    },\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nfunction App() {\n  return <Navigation />;\n}\n"})})}),(0,t.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={() => {\n          return <SomeComponent />;\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"component"})," prop expects a React Component, but in the example, it's getting a function returning an React Element. While superficially a component and a function returning a React Element look the exact same, they don't behave the same way when used."]}),"\n",(0,t.jsxs)(n.p,{children:["Here, every time the component re-renders, a new function will be created and passed to the ",(0,t.jsx)(n.code,{children:"component"})," prop. React will see a new component and unmount the previous component before rendering the new one. This will cause any local state in the old component to be lost. React Navigation will detect and warn for this specific case but there can be other ways you might be creating components during render which it can't detect."]}),"\n",(0,t.jsx)(n.p,{children:"Another easy to identify example of this is when you create a component inside another component:"}),"\n",(0,t.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,t.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function App() {\n  const Home = () => {\n    return <SomeComponent />;\n  };\n\n  const RootStack = createNativeStackNavigator({\n    screens: {\n      Home: Home,\n    },\n  });\n\n  const Navigation = createStaticNavigation(RootStack);\n\n  return <Navigation />;\n}\n"})})}),(0,t.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'function App() {\n  const Home = () => {\n    return <SomeComponent />;\n  };\n\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n    </Stack.Navigator>\n  );\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Or when you use a higher order component (such as ",(0,t.jsx)(n.code,{children:"connect"})," from Redux, or ",(0,t.jsx)(n.code,{children:"withX"})," functions that accept a component) inside another component:"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,t.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function App() {\n  const Home = () => {\n    return <SomeComponent />;\n  };\n\n  const RootStack = createNativeStackNavigator({\n    screens: {\n      Home: withSomeData(Home),\n    },\n  });\n\n  const Navigation = createStaticNavigation(RootStack);\n\n  return <Navigation />;\n}\n"})})}),(0,t.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={withSomeData(Home)} />\n    </Stack.Navigator>\n  );\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"If you're unsure, it's always best to make sure that the components you are using as screens are defined outside of a React component. They could be defined in another file and imported, or defined at the top level scope in the same file:"}),"\n",(0,t.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,t.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const Home = () => {\n  return <SomeComponent />;\n};\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: Home,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nfunction App() {\n  return <Navigation />;\n}\n"})})}),(0,t.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const Home = () => {\n  return <SomeComponent />;\n};\n\nfunction App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n    </Stack.Navigator>\n  );\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"This is not React Navigation specific, but related to React in general. You should always avoid creating components during render, whether you are using React Navigation or not."}),"\n",(0,t.jsx)(n.h2,{id:"app-is-not-working-properly-when-connected-to-chrome-debugger",children:"App is not working properly when connected to Chrome Debugger"}),"\n",(0,t.jsxs)(n.p,{children:["When the app is connected to Chrome Debugger (or other tools that use Chrome Debugger such as ",(0,t.jsx)(n.a,{href:"https://github.com/jhen0409/react-native-debugger",children:"React Native Debugger"}),") you might encounter various issues related to timing."]}),"\n",(0,t.jsxs)(n.p,{children:["This can result in issues such as button presses taking a long time to register or not working at all, ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/react-native/issues/2367",children:"gestures and animations being slow and buggy"})," etc. There can be other functional issues such as promises not resolving, ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/react-native/issues/4470",children:"timeouts and intervals not working correctly"})," etc. as well."]}),"\n",(0,t.jsx)(n.p,{children:"The issues are not related to React Navigation, but due to the nature of how the Chrome Debugger works. When connected to Chrome Debugger, your whole app runs on Chrome and communicates with the native app via sockets over the network, which can introduce latency and timing related issues."}),"\n",(0,t.jsxs)(n.p,{children:["So, unless you are trying to debug something, it's better to test the app without being connected to the Chrome Debugger. If you are using iOS, you can alternatively use ",(0,t.jsx)(n.a,{href:"https://reactnative.dev/docs/debugging#safari-developer-tools",children:"Safari to debug your app"})," which debugs the app on the device directly and does not have these issues, though it has other downsides."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>o});a(67294);var t=a(86010);const r={tabItem:"tabItem_Ymn6"};var i=a(85893);function o(e){let{children:n,hidden:a,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,o),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>w});var t=a(67294),r=a(86010),i=a(12466),o=a(16550),s=a(20469),c=a(91980),l=a(67392),d=a(50012);function h(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,c._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,i=u(e),[o,c]=(0,t.useState)((()=>function(e){var n;let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,h]=g({queryString:a,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(n),[r,i]=(0,d.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),v=(()=>{const e=null!=l?l:m;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);c(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(85893);function j(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),r=s[a].value;r!==t&&(l(n),o(r))},h=e=>{var n;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const n=c.indexOf(e.currentTarget)+1;a=null!=(t=c[n])?t:c[0];break}case"ArrowLeft":{var r;const n=c.indexOf(e.currentTarget)-1;a=null!=(r=c[n])?r:c[c.length-1];break}}null==(n=a)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=a?a:n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(j,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>o});var t=a(67294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);