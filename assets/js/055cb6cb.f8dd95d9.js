"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["33346"],{79864:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return h}});var a=t(66765),o=t(85893),i=t(50065);let s={title:"React Navigation on the Web",authors:"satya",tags:["announcement","web"]},r=void 0,l={authorsImageUrls:[void 0]},h=[{value:"Integration with URLs in browsers",id:"integration-with-urls-in-browsers",level:2},{value:"Improvements to the navigators",id:"improvements-to-the-navigators",level:2},{value:"Anchor tags in tabs and drawer",id:"anchor-tags-in-tabs-and-drawer",level:3},{value:"No gestures and animations",id:"no-gestures-and-animations",level:3},{value:"Hide address bar on scroll",id:"hide-address-bar-on-scroll",level:3},{value:"Permanent drawer",id:"permanent-drawer",level:3},{value:"What&#39;s next?",id:"whats-next",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"React Native has made cross-platform development much easier than before, and with React Native for Web, you can reuse code across Android, iOS and Web too!"}),"\n",(0,o.jsx)(n.p,{children:"One major pain point of reusing code for the web app has been navigation. React Navigation is one of the most widely used navigation libraries for React Native, but it didn\u2019t support web. While you could run apps using React Navigation on the Web, a lot of things were missing, such as proper integration with URLs on the browser."}),"\n",(0,o.jsx)(n.p,{children:"We have finally added preliminary web support to React Navigation. Let's take a look at the changes."}),"\n",(0,o.jsx)(n.h2,{id:"integration-with-urls-in-browsers",children:"Integration with URLs in browsers"}),"\n",(0,o.jsx)(n.p,{children:"The first step for web support is to have proper URL integration. This means:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Users should be able to navigate to a screen in the app using a URL"}),"\n",(0,o.jsx)(n.li,{children:"URL in the browser's address bar should update as users navigate in the app"}),"\n",(0,o.jsx)(n.li,{children:"Users should be able to go backwards and forwards using browser's back/forward buttons"}),"\n",(0,o.jsx)(n.li,{children:"Buttons that navigate to other screens in the app should be links, and users should be able use standard shortcuts with them"}),"\n"]}),"\n",(0,o.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{maxWidth:"100%",marginBottom:32},children:(0,o.jsx)("source",{src:"/assets/blog/web-support/url-integration.mp4",type:"video/mp4"})}),"\n",(0,o.jsxs)(n.p,{children:["In native apps, it's already possible to navigate to a screen in the app using a URL via deep links. React Navigation can handle deep links if you provide a configuration in the ",(0,o.jsx)(n.code,{children:"linking"})," prop of ",(0,o.jsx)(n.code,{children:"NavigationContainer"}),". We now reuse the same configuration for URL integration in browsers. It also works for updating the URL in the browser when users navigates in the app. So if you have configured deep links in your app already, it'll work with URL integration on the web without any changes \uD83E\uDD73"]}),"\n",(0,o.jsxs)(n.p,{children:["By default, we'll reuse the route names as paths if you've provided ",(0,o.jsx)(n.code,{children:"linking={{ enabled: true }}"})," without any extra configuration. However, you can also customize how the paths and params are parsed by providing mappings under the ",(0,o.jsx)(n.code,{children:"config"})," property."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const linking = {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Home: '',\n      Profile: ':id/profile',\n      Settings: ':id/blog',\n    },\n  },\n};\n\nfunction App() {\n  return (\n    <NavigationContainer linking={linking} fallback={<SplashScreen />}>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={Home} />\n        <Stack.Screen name=\"Profile\" component={Profile} />\n        <Stack.Screen name=\"Settings\" component={Settings} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We have a ",(0,o.jsx)(n.a,{href:"/docs/configuring-links/#playground",children:"playground"})," where you can try custom configurations and see how it's parsed. Give it a try, and we hope it'll make it easier for you to configure links in your apps."]}),"\n",(0,o.jsxs)(n.p,{children:["There's a new ",(0,o.jsxs)(n.a,{href:"/docs/link",children:[(0,o.jsx)(n.code,{children:"<Link />"})," component"]})," which lets you use URLs for navigation in the app."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'<Link to="/profile/jane">Go to Jane\'s profile</Link>\n'})}),"\n",(0,o.jsx)(n.p,{children:'When you use this component, it renders anchor tags on the web. This means that users can use the same patterns that they are used to on the web, such as "Open in new tab", "Copy link address" etc.'}),"\n",(0,o.jsxs)(n.p,{children:["Special thanks to ",(0,o.jsx)(n.a,{href:"https://github.com/osdnk",children:"Micha\u0142"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/WoLewicki",children:"Wojciech"})," for their extensive work on URL integration."]}),"\n",(0,o.jsx)(n.h2,{id:"improvements-to-the-navigators",children:"Improvements to the navigators"}),"\n",(0,o.jsx)(n.p,{children:"URL integration isn't enough to have proper web support. The navigators also need to feel at home on the web. We have made several improvements to the built-in navigators so that they behave as you expect on the web."}),"\n",(0,o.jsx)(n.h3,{id:"anchor-tags-in-tabs-and-drawer",children:"Anchor tags in tabs and drawer"}),"\n",(0,o.jsx)(n.p,{children:"The first change is using anchor tags. When you use built-in navigators such as drawer navigator and tab navigator, they render anchor tags for the drawer and tab items respectively when you have linking configured. This means that they behave the same as normal links on the web."}),"\n",(0,o.jsx)("img",{src:"/assets/blog/web-support/link-right-click.png",height:"427",alt:"Demo for Right Click on links"}),"\n",(0,o.jsx)(n.h3,{id:"no-gestures-and-animations",children:"No gestures and animations"}),"\n",(0,o.jsx)(n.p,{children:"Another change is the removal of gestures on the web. Gestures are not commonly used on the web because they conflict with a lot of browser functionality and system gestures. For example, in Safari, you can swipe to go back to the previous page. Android has a system gesture to go back to previous pages too. Because of this, we've removed gestures on the web."}),"\n",(0,o.jsx)(n.p,{children:"We've also disabled animations on the web by default since they are not commonly used and can be jarring, especially on larger screens. The animations in React Native Web also run entirely in JS, and tend not to be very performant on the web. So we've decided to disable them by default to better overall experience."}),"\n",(0,o.jsx)(n.h3,{id:"hide-address-bar-on-scroll",children:"Hide address bar on scroll"}),"\n",(0,o.jsx)(n.p,{children:"Phones have small screens, so it's important to maximize the use of available screen size. One of the ways mobile browsers achieve it is by hiding and showing the address bar when scrolling to give more vertical space to the content."}),"\n",(0,o.jsxs)(n.p,{children:["It's especially important in case of the ",(0,o.jsx)(n.a,{href:"/docs/stack-navigator",children:"stack navigator"})," because not only we have the browser's address bar, but also the header at the top which is taking vertical space. Now we'll automatically adjust the styles of the stack navigator to get this behavior without you having to write any special code."]}),"\n",(0,o.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{maxWidth:"100%"},children:(0,o.jsx)("source",{src:"/assets/blog/web-support/hide-addressbar.mp4",type:"video/mp4"})}),"\n",(0,o.jsx)(n.h3,{id:"permanent-drawer",children:"Permanent drawer"}),"\n",(0,o.jsxs)(n.p,{children:["Another way we can make maximum use of the available screen size is by making our UIs adapt to different screen sizes. For example, we may want to show a sidebar for navigation on large screens while switching to a drawer on smaller screens. You can now specify ",(0,o.jsx)(n.code,{children:"drawerType"})," as ",(0,o.jsx)(n.code,{children:"permanent"})," to show an always visible sidebar. See the ",(0,o.jsxs)(n.a,{href:"/docs/drawer-navigator#drawertype",children:["documentation for ",(0,o.jsx)(n.code,{children:"drawerType"})]})," for example code on how to achieve it."]}),"\n",(0,o.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{maxWidth:"100%"},children:(0,o.jsx)("source",{src:"/assets/blog/web-support/permanent-drawer.mp4",type:"video/mp4"})}),"\n",(0,o.jsxs)(n.p,{children:["Special thanks to ",(0,o.jsx)(n.a,{href:"https://twitter.com/noemi_rozpara",children:"Noemi"})," for implementing this feature."]}),"\n",(0,o.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,o.jsx)(n.p,{children:"This is just a start. We still need to figure out many things, such as SSR, handling of 404 etc. There is still a lot to do, but we\u2019re excited to announce it and looking forward to feedback and bug reports."}),"\n",(0,o.jsxs)(n.p,{children:["Take a look at the ",(0,o.jsx)(n.a,{href:"/docs/web-support",children:"documentation"})," to give it a try and let us know what you think. You can also ",(0,o.jsx)(n.a,{href:"https://react-navigation-example.netlify.app/",children:"check the example app"})," to see a live demo of web support."]})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var a=t(67294);let o={},i=a.createContext(o);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}},66765:function(e){e.exports=JSON.parse('{"permalink":"/blog/2020/05/16/web-support","source":"@site/blog/2020-05-16-web-support.md","title":"React Navigation on the Web","description":"React Native has made cross-platform development much easier than before, and with React Native for Web, you can reuse code across Android, iOS and Web too!","date":"2020-05-16T00:00:00.000Z","tags":[{"inline":true,"label":"announcement","permalink":"/blog/tags/announcement"},{"inline":true,"label":"web","permalink":"/blog/tags/web"}],"readingTime":5.06,"hasTruncateMarker":true,"authors":[{"name":"Satyajit Sahoo","url":"https://satya164.page","title":"Core Team","socials":{"x":"https://x.com/satya164","github":"https://github.com/satya164"},"imageURL":"https://avatars2.githubusercontent.com/u/1174278","key":"satya","page":null}],"frontMatter":{"title":"React Navigation on the Web","authors":"satya","tags":["announcement","web"]},"unlisted":false,"prevItem":{"title":"React Navigation joins GitHub Sponsors","permalink":"/blog/2020/05/19/joining-github-sponsors"},"nextItem":{"title":"React Navigation 5.0 - A new way to navigate","permalink":"/blog/2020/02/06/react-navigation-5.0"}}')}}]);