"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["59995"],{68244:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>s,toc:()=>l,frontMatter:()=>a});var t=JSON.parse('{"id":"drawer-navigator","title":"createDrawerNavigator","description":"RouteConfigs","source":"@site/versioned_docs/version-2.x/drawer-navigator.md","sourceDirName":".","slug":"/drawer-navigator","permalink":"/docs/2.x/drawer-navigator","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/drawer-navigator.md","tags":[],"version":"2.x","frontMatter":{"id":"drawer-navigator","title":"createDrawerNavigator","sidebar_label":"createDrawerNavigator"},"sidebar":"version-2.x-api","previous":{"title":"createSwitchNavigator","permalink":"/docs/2.x/switch-navigator"},"next":{"title":"createTabNavigator","permalink":"/docs/2.x/tab-navigator"}}'),o=r("85893"),i=r("50065");let a={id:"drawer-navigator",title:"createDrawerNavigator",sidebar_label:"createDrawerNavigator"},c=void 0,s={},l=[{value:"RouteConfigs",id:"routeconfigs",level:3},{value:"DrawerNavigatorConfig",id:"drawernavigatorconfig",level:3},{value:"Providing a custom <code>contentComponent</code>",id:"providing-a-custom-contentcomponent",level:3},{value:"<code>contentOptions</code> for <code>DrawerItems</code>",id:"contentoptions-for-draweritems",level:3},{value:"Example",id:"example",level:4},{value:"Screen Navigation Options",id:"screen-navigation-options",level:3},{value:"<code>title</code>",id:"title",level:4},{value:"<code>drawerLabel</code>",id:"drawerlabel",level:4},{value:"<code>drawerIcon</code>",id:"drawericon",level:4},{value:"<code>drawerLockMode</code>",id:"drawerlockmode",level:4},{value:"Nesting drawer navigators inside others",id:"nesting-drawer-navigators-inside-others",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"routeconfigs",children:"RouteConfigs"}),"\n",(0,o.jsxs)(n.p,{children:["The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",(0,o.jsx)(n.a,{href:"/docs/2.x/stack-navigator#routeconfigs",children:"example"})," from ",(0,o.jsx)(n.code,{children:"createStackNavigator"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"drawernavigatorconfig",children:"DrawerNavigatorConfig"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"drawerWidth"})," - Width of the drawer or a function returning it."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"drawerPosition"})," - Options are ",(0,o.jsx)(n.code,{children:"left"})," or ",(0,o.jsx)(n.code,{children:"right"}),". Default is ",(0,o.jsx)(n.code,{children:"left"})," position."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"contentComponent"})," - Component used to render the content of the drawer, for example, navigation items. Receives the ",(0,o.jsx)(n.code,{children:"navigation"})," prop for the drawer. Defaults to ",(0,o.jsx)(n.code,{children:"DrawerItems"}),". For more information, see below."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"contentOptions"})," - Configure the drawer content, see below."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"useNativeAnimations"})," - Enable native animations. Default is ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"drawerBackgroundColor"})," - Use the Drawer background for some color. The Default is ",(0,o.jsx)(n.code,{children:"white"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Several options get passed to the underlying router to modify navigation logic:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"initialRouteName"})," - The routeName for the initial route."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"order"})," - Array of routeNames which defines the order of the drawer items."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"paths"})," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"backBehavior"})," - Should the back button cause switch to the initial route? If yes, set to ",(0,o.jsx)(n.code,{children:"initialRoute"}),", otherwise ",(0,o.jsx)(n.code,{children:"none"}),". Defaults to ",(0,o.jsx)(n.code,{children:"initialRoute"})," behavior."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"providing-a-custom-contentcomponent",children:["Providing a custom ",(0,o.jsx)(n.code,{children:"contentComponent"})]}),"\n",(0,o.jsx)(n.p,{children:"The default component for the drawer is scrollable and only contains links for the routes in the RouteConfig. You can easily override the default component to add a header, footer, or other content to the drawer. By default the drawer is scrollable and supports iPhone X safe area. If you customize the content, be sure to wrap the content in a SafeAreaView:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { DrawerItems, SafeAreaView } from 'react-navigation';\n\nconst CustomDrawerContentComponent = (props) => (\n  <ScrollView>\n    <SafeAreaView\n      style={styles.container}\n      forceInset={{ top: 'always', horizontal: 'never' }}\n    >\n      <DrawerItems {...props} />\n    </SafeAreaView>\n  </ScrollView>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"contentoptions-for-draweritems",children:[(0,o.jsx)(n.code,{children:"contentOptions"})," for ",(0,o.jsx)(n.code,{children:"DrawerItems"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"items"})," - the array of routes, can be modified or overridden"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"activeItemKey"})," - key identifying the active route"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"activeTintColor"})," - label and icon color of the active label"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"activeBackgroundColor"})," - background color of the active label"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"inactiveTintColor"})," - label and icon color of the inactive label"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"inactiveBackgroundColor"})," - background color of the inactive label"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"onItemPress(route)"})," - function to be invoked when an item is pressed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"itemsContainerStyle"})," - style object for the content section"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"itemStyle"})," - style object for the single item, which can contain an Icon and/or a Label"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"labelStyle"})," - style object to overwrite ",(0,o.jsx)(n.code,{children:"Text"})," style inside content section, when your label is a string"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"activeLabelStyle"})," - style object to overwrite ",(0,o.jsx)(n.code,{children:"Text"})," style of the active label, when your label is a string (merged with ",(0,o.jsx)(n.code,{children:"labelStyle"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"inactiveLabelStyle"})," - style object to overwrite ",(0,o.jsx)(n.code,{children:"Text"})," style of the inactive label, when your label is a string (merged with ",(0,o.jsx)(n.code,{children:"labelStyle"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"iconContainerStyle"})," - style object to overwrite ",(0,o.jsx)(n.code,{children:"View"})," icon container styles."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"contentOptions: {\n  activeTintColor: '#e91e63',\n  itemsContainerStyle: {\n    marginVertical: 0,\n  },\n  iconContainerStyle: {\n    opacity: 1\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"screen-navigation-options",children:"Screen Navigation Options"}),"\n",(0,o.jsx)(n.h4,{id:"title",children:(0,o.jsx)(n.code,{children:"title"})}),"\n",(0,o.jsxs)(n.p,{children:["Generic title that can be used as a fallback for ",(0,o.jsx)(n.code,{children:"headerTitle"})," and ",(0,o.jsx)(n.code,{children:"drawerLabel"})]}),"\n",(0,o.jsx)(n.h4,{id:"drawerlabel",children:(0,o.jsx)(n.code,{children:"drawerLabel"})}),"\n",(0,o.jsxs)(n.p,{children:["String, React Element or a function that given ",(0,o.jsx)(n.code,{children:"{ focused: boolean, tintColor: string }"})," returns a React.Node, to display in drawer sidebar. When undefined, scene ",(0,o.jsx)(n.code,{children:"title"})," is used"]}),"\n",(0,o.jsx)(n.h4,{id:"drawericon",children:(0,o.jsx)(n.code,{children:"drawerIcon"})}),"\n",(0,o.jsxs)(n.p,{children:["React Element or a function, that given ",(0,o.jsx)(n.code,{children:"{ focused: boolean, tintColor: string }"})," returns a React.Node, to display in drawer sidebar"]}),"\n",(0,o.jsx)(n.h4,{id:"drawerlockmode",children:(0,o.jsx)(n.code,{children:"drawerLockMode"})}),"\n",(0,o.jsxs)(n.p,{children:["Specifies the ",(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/drawerlayoutandroid.html#drawerlockmode",children:"lock mode"})," of the drawer. This can also update dynamically by using screenProps.drawerLockMode on your top level router."]}),"\n",(0,o.jsx)(n.h3,{id:"nesting-drawer-navigators-inside-others",children:"Nesting drawer navigators inside others"}),"\n",(0,o.jsx)(n.p,{children:"If a drawer navigator is nested inside of another navigator that provides some UI, for example a tab navigator or stack navigator, then the drawer will be rendered below the UI from those navigators. The drawer will appear below the tab bar and below the header of the stack. You will need to make the drawer navigator the parent of any navigator where the drawer should be rendered on top of its UI."})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return a}});var t=r(67294);let o={},i=t.createContext(o);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);