"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["17448"],{64999:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>o});var a=JSON.parse('{"id":"status-bar","title":"Different status bar configuration based on route","description":"If you don\'t have a navigation header, or your navigation header changes color based on the route, you\'ll want to ensure that the correct color is used for the content.","source":"@site/versioned_docs/version-4.x/status-bar.md","sourceDirName":".","slug":"/status-bar","permalink":"/docs/4.x/status-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/status-bar.md","tags":[],"version":"4.x","frontMatter":{"id":"status-bar","title":"Different status bar configuration based on route","sidebar_label":"Different status bar configuration based on route"},"sidebar":"version-4.x-docs","previous":{"title":"Supporting safe areas","permalink":"/docs/4.x/handling-iphonex"},"next":{"title":"Navigation options resolution","permalink":"/docs/4.x/navigation-options-resolution"}}'),r=t("85893"),s=t("50065");let o={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},i=void 0,c={},d=[{value:"Stack and drawer navigators",id:"stack-and-drawer-navigators",level:2},{value:"Tabs and Drawer",id:"tabs-and-drawer",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."}),"\n",(0,r.jsx)(n.h2,{id:"stack-and-drawer-navigators",children:"Stack and drawer navigators"}),"\n",(0,r.jsxs)(n.p,{children:["This is a simple task when using a stack or drawer. You can simply render the ",(0,r.jsx)(n.code,{children:"StatusBar"})," component, which is exposed by React Native, and set your config."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"class Screen1 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>\n        <StatusBar barStyle=\"light-content\" backgroundColor=\"#6a51ae\" />\n        <Text style={[styles.paragraph, { color: '#fff' }]}>Light Screen</Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen2')}\n          color={isAndroid ? 'blue' : '#fff'}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n\nclass Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>\n        <StatusBar barStyle=\"dark-content\" backgroundColor=\"#ecf0f1\" />\n        <Text style={styles.paragraph}>Dark Screen</Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen1')}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"export default createStackNavigator(\n  {\n    Screen1: {\n      screen: Screen1,\n    },\n    Screen2: {\n      screen: Screen2,\n    },\n  },\n  {\n    headerMode: 'none',\n  }\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"StackNavigator with different StatusBar configs",src:t(15810).Z+"",width:"895",height:"843"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"export default createDrawerNavigator({\n  Screen1: {\n    screen: Screen1,\n  },\n  Screen2: {\n    screen: Screen2,\n  },\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"DrawerNavigator with different StatusBar configs",src:t(77974).Z+"",width:"895",height:"843"})}),"\n",(0,r.jsx)(n.h2,{id:"tabs-and-drawer",children:"Tabs and Drawer"}),"\n",(0,r.jsxs)(n.p,{children:["If you're using a tab or drawer navigator, it's a bit more complex because all of the screens in the navigator might be rendered at once and kept rendered - that means that the last ",(0,r.jsx)(n.code,{children:"StatusBar"})," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."]}),"\n",(0,r.jsxs)(n.p,{children:["To fix this, we'll have to do make the status bar component aware of screen focus and render it only when the screen is focused. We can achieve this by using the ",(0,r.jsxs)(n.a,{href:"/docs/4.x/with-navigation-focus",children:[(0,r.jsx)(n.code,{children:"withNavigationFocus"})," HOC"]})," and creating a wrapper component:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { StatusBar } from 'react-native';\nimport { withNavigationFocus } from 'react-navigation';\n\nconst FocusAwareStatusBar = withNavigationFocus(({ isFocused, ...rest }) =>\n  isFocused ? <StatusBar {...rest} /> : null\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now, our screens (both ",(0,r.jsx)(n.code,{children:"Screen1.js"})," and ",(0,r.jsx)(n.code,{children:"Screen2.js"}),") will use the ",(0,r.jsx)(n.code,{children:"FocusAwareStatusBar"})," component instead of the ",(0,r.jsx)(n.code,{children:"StatusBar"})," component from React Native:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"class Screen1 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>\n        <FocusAwareStatusBar\n          barStyle=\"light-content\"\n          backgroundColor=\"#6a51ae\"\n        />\n        <Text style={[styles.paragraph, { color: '#fff' }]}>Light Screen</Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen2')}\n          color={isAndroid ? 'blue' : '#fff'}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n\nclass Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>\n        <FocusAwareStatusBar\n          barStyle=\"dark-content\"\n          backgroundColor=\"#ecf0f1\"\n        />\n        <Text style={styles.paragraph}>Dark Screen</Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen1')}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Although not necessary, you can use the ",(0,r.jsx)(n.code,{children:"FocusAwareStatusBar"})," component in the screens of the stack navigator as well."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"TabNavigator with different StatusBar configs",src:t(65444).Z+"",width:"879",height:"862"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},77974:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/statusbar-drawer-demo-3f6ce5c56a2086d8aba8ab2f1f3f513e.gif"},15810:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/statusbar-stack-demo-695c18cfc1489cd5c4c18827bc66befb.gif"},65444:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/statusbar-tab-demo-c5f932fea901d54665ed07f921ad8322.gif"},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var a=t(67294);let r={},s=a.createContext(r);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);