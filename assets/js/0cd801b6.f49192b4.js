(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[4554],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=r,m=h["".concat(d,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),r=n(80944),i=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var d=37,s=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,c=e.values,h=e.groupId,u=e.className,m=(0,r.Z)(),k=m.tabGroupChoices,f=m.setTabGroupChoices,g=(0,a.useState)(p),b=g[0],N=g[1],C=a.Children.toArray(e.children),v=[];if(null!=h){var y=k[h];null!=y&&y!==b&&c.some((function(e){return e.value===y}))&&N(y)}var w=function(e){var t=e.currentTarget,n=v.indexOf(t),a=c[n].value;N(a),null!=h&&(f(h,a),setTimeout((function(){var e,n,a,r,i,o,d,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,d=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&r<=d&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case s:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case d:var r=v.indexOf(e.target)-1;n=v[r]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},u)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(C.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},C.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},24559:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=n(41395),l=n(58215),d={id:"elements",title:"Elements Library",sidebar_label:"Elements Library"},s={unversionedId:"elements",id:"version-6.x/elements",isDocsHomePage:!1,title:"Elements Library",description:"A component library containing the UI elements and helpers used in React Navigation. It can be useful if you're building your own navigator, or want to reuse a default functionality in your app.",source:"@site/versioned_docs/version-6.x/elements.md",sourceDirName:".",slug:"/elements",permalink:"/docs/6.x/elements",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/elements.md",version:"6.x",sidebar_label:"Elements Library",frontMatter:{id:"elements",title:"Elements Library",sidebar_label:"Elements Library"},sidebar:"version-6.x/docs",previous:{title:"Developer tools",permalink:"/docs/6.x/devtools"},next:{title:"Stack Navigator",permalink:"/docs/6.x/stack-navigator"}},p=[{value:"Components",id:"components",children:[{value:"<code>Header</code>",id:"header",children:[]},{value:"<code>HeaderBackground</code>",id:"headerbackground-1",children:[]},{value:"<code>HeaderTitle</code>",id:"headertitle-1",children:[]},{value:"<code>HeaderBackButton</code>",id:"headerbackbutton",children:[]},{value:"<code>MissingIcon</code>",id:"missingicon",children:[]},{value:"<code>PlatformPressable</code>",id:"platformpressable",children:[]},{value:"<code>ResourceSavingView</code>",id:"resourcesavingview",children:[]}]},{value:"Utilities",id:"utilities",children:[{value:"<code>SafeAreaProviderCompat</code>",id:"safeareaprovidercompat",children:[]},{value:"<code>HeaderBackContext</code>",id:"headerbackcontext",children:[]},{value:"<code>HeaderShownContext</code>",id:"headershowncontext",children:[]},{value:"<code>HeaderHeightContext</code>",id:"headerheightcontext",children:[]},{value:"<code>useHeaderHeight</code>",id:"useheaderheight",children:[]},{value:"<code>getDefaultHeaderHeight</code>",id:"getdefaultheaderheight",children:[]},{value:"<code>getHeaderTitle</code>",id:"getheadertitle",children:[]}]}],c={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A component library containing the UI elements and helpers used in React Navigation. It can be useful if you're building your own navigator, or want to reuse a default functionality in your app."),(0,i.kt)("p",null,"To use this package, ensure that you have ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/getting-started"},(0,i.kt)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/elements"},(0,i.kt)("inlineCode",{parentName:"a"},"@react-navigation/bottom-tabs")),":"),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @react-navigation/elements@next\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @react-navigation/elements@next\n")))),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("h3",{id:"header"},(0,i.kt)("inlineCode",{parentName:"h3"},"Header")),(0,i.kt)("p",null,"A component that can be used as a header. It accepts the following props:"),(0,i.kt)("h4",{id:"headertitle"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerTitle")),(0,i.kt)("p",null,"String or a function that returns a React Element to be used by the header. Defaults to scene ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),". When a function is specified, it receives an object containing ",(0,i.kt)("inlineCode",{parentName:"p"},"allowFontScaling"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tintColor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," properties. The ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," property contains the title string."),(0,i.kt)("h4",{id:"headertitlealign"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerTitleAlign")),(0,i.kt)("p",null,"How to align the header title. Possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"left")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"center"))),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"center")," on iOS and ",(0,i.kt)("inlineCode",{parentName:"p"},"left")," on Android."),(0,i.kt)("h4",{id:"headertitleallowfontscaling"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerTitleAllowFontScaling")),(0,i.kt)("p",null,"Whether header title font should scale to respect Text Size accessibility settings. Defaults to false."),(0,i.kt)("h4",{id:"headerleft"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerLeft")),(0,i.kt)("p",null,"Function which returns a React Element to display on the left side of the header. You can use it to implement your custom left button, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Home"\n  component={HomeScreen}\n  options={{\n    headerLeft: (props) => (\n      <MyButton\n        {...props}\n        onPress={() => {\n          // Do something\n        }}\n      />\n    ),\n  }}\n/>;\n')),(0,i.kt)("h4",{id:"headerright"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerRight")),(0,i.kt)("p",null,"Function which returns a React Element to display on the right side of the header."),(0,i.kt)("h4",{id:"headerstyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerStyle")),(0,i.kt)("p",null,"Style object for the header. You can specify a custom background color here, for example."),(0,i.kt)("h4",{id:"headertitlestyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerTitleStyle")),(0,i.kt)("p",null,"Style object for the title component"),(0,i.kt)("h4",{id:"headerleftcontainerstyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerLeftContainerStyle")),(0,i.kt)("p",null,"Customize the style for the container of the ",(0,i.kt)("inlineCode",{parentName:"p"},"headerLeft")," component, for example to add padding."),(0,i.kt)("h4",{id:"headerrightcontainerstyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerRightContainerStyle")),(0,i.kt)("p",null,"Customize the style for the container of the ",(0,i.kt)("inlineCode",{parentName:"p"},"headerRight")," component, for example to add padding."),(0,i.kt)("h4",{id:"headertitlecontainerstyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerTitleContainerStyle")),(0,i.kt)("p",null,"Customize the style for the container of the ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," component, for example to add padding."),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitleContainerStyle")," is with an absolute position style and offsets both ",(0,i.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"right"),". This may lead to white space or overlap between ",(0,i.kt)("inlineCode",{parentName:"p"},"headerLeft")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," if a customized ",(0,i.kt)("inlineCode",{parentName:"p"},"headerLeft")," is used. It can be solved by adjusting ",(0,i.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"right")," style in ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitleContainerStyle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"marginHorizontal")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitleStyle"),"."),(0,i.kt)("h4",{id:"headerbackgroundcontainerstyle"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerBackgroundContainerStyle")),(0,i.kt)("p",null,"Style object for the container of the ",(0,i.kt)("inlineCode",{parentName:"p"},"headerBackground")," element."),(0,i.kt)("h4",{id:"headertintcolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerTintColor")),(0,i.kt)("p",null,"Tint color for the header"),(0,i.kt)("h4",{id:"headerpresscolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerPressColor")),(0,i.kt)("p",null,"Color for material ripple (Android >= 5.0 only)"),(0,i.kt)("h4",{id:"headerpressopacity"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerPressOpacity")),(0,i.kt)("p",null,"Press opacity for the buttons in header (Android < 5.0, and iOS)"),(0,i.kt)("h4",{id:"headertransparent"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerTransparent")),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the header will not have a background unless you explicitly provide it with ",(0,i.kt)("inlineCode",{parentName:"p"},"headerBackground"),". The header will also float over the screen so that it overlaps the content underneath."),(0,i.kt)("p",null,"This is useful if you want to render a semi-transparent header or a blurred background."),(0,i.kt)("p",null,"Note that if you don't want your content to appear under the header, you need to manually add a top margin to your content. React Navigation won't do it automatically."),(0,i.kt)("p",null,"To get the height of the header, you can use ",(0,i.kt)("a",{parentName:"p",href:"#headerheightcontext"},(0,i.kt)("inlineCode",{parentName:"a"},"HeaderHeightContext"))," with ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#contextconsumer"},"React's Context API")," or ",(0,i.kt)("a",{parentName:"p",href:"#useheaderheight"},(0,i.kt)("inlineCode",{parentName:"a"},"useHeaderHeight")),"."),(0,i.kt)("h4",{id:"headerbackground"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerBackground")),(0,i.kt)("p",null,"Function which returns a React Element to render as the background of the header. This is useful for using backgrounds such as an image or a gradient."),(0,i.kt)("p",null,"For example, you can use this with ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTransparent")," to render a blur view to create a translucent header."),(0,i.kt)("samp",{id:"header-blur"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { BlurView } from \'expo-blur\';\n\n// ...\n\n<Stack.Screen\n  name="Home"\n  component={HomeScreen}\n  options={{\n    headerTransparent: true,\n    headerBackground: () => (\n      <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />\n    ),\n  }}\n/>;\n')),(0,i.kt)("h4",{id:"headerstatusbarheight"},(0,i.kt)("inlineCode",{parentName:"h4"},"headerStatusBarHeight")),(0,i.kt)("p",null,"Extra padding to add at the top of header to account for translucent status bar. By default, it uses the top value from the safe area insets of the device. Pass 0 or a custom value to disable the default behavior, and customize the height."),(0,i.kt)("h3",{id:"headerbackground-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"HeaderBackground")),(0,i.kt)("p",null,"A component containing the styles used in the background of the header, such as the background color and shadow. It's the default for ",(0,i.kt)("a",{parentName:"p",href:"#headerbackground"},(0,i.kt)("inlineCode",{parentName:"a"},"headerBackground")),". It accepts the same props as an ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view"},(0,i.kt)("inlineCode",{parentName:"a"},"View")),"."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<HeaderBackground style={{ backgroundColor: 'tomato' }} />\n")),(0,i.kt)("h3",{id:"headertitle-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"HeaderTitle")),(0,i.kt)("p",null,"A component used to show the title text in header. It's the default for ",(0,i.kt)("a",{parentName:"p",href:"#headerTitle"},(0,i.kt)("inlineCode",{parentName:"a"},"headerTitle")),". It accepts the same props as an ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/Text"},(0,i.kt)("inlineCode",{parentName:"a"},"Text")),"."),(0,i.kt)("p",null,"The color of title defaults to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/themes"},"theme text color"),". You can override it by passing a ",(0,i.kt)("inlineCode",{parentName:"p"},"tintColor")," prop."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<HeaderTitle>Hello</HeaderTitle>\n")),(0,i.kt)("h3",{id:"headerbackbutton"},(0,i.kt)("inlineCode",{parentName:"h3"},"HeaderBackButton")),(0,i.kt)("p",null,"A component used to show the back button header. It's the default for ",(0,i.kt)("a",{parentName:"p",href:"#headerLeft"},(0,i.kt)("inlineCode",{parentName:"a"},"headerLeft"))," in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/stack-navigator"},"stack navigator"),". It accepts the following props:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disabled")," - Boolean which controls Whether the button is disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onPress")," - Callback to call when the button is pressed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pressColor")," - Color for material ripple (Android >= 5.0 only)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"backImage")," - Function which returns a React Element to display custom image in header's back button."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tintColor")," - Tint color for the header."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label")," - Label text for the button. Usually the title of the previous screen. By default, this is only shown on iOS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"truncatedLabel")," - Label text to show when there isn't enough space for the full label."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"labelVisible")," - Whether the label text is visible. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," on iOS and ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," on Android."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the label."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onLabelLayout")," - Callback to trigger when the size of the label changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenLayout")," - Layout of the screen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"titleLayout")," - Layout of the title element in the header."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canGoBack")," - Boolean to indicate whether it's possible to navigate back in stack."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accessibilityLabel")," - Accessibility label for the button for screen readers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testID")," - ID to locate this button in tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"style")," - Style object for the button.")),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<HeaderTitle>Hello</HeaderTitle>\n")),(0,i.kt)("h3",{id:"missingicon"},(0,i.kt)("inlineCode",{parentName:"h3"},"MissingIcon")),(0,i.kt)("p",null,"A component that renders a missing icon symbol. It can be used as a fallback for icons to show that there's a missing icon. It accepts the following props:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color")," - Color of the icon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size")," - Size of the icon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"style")," - Additional styles for the icon.")),(0,i.kt)("h3",{id:"platformpressable"},(0,i.kt)("inlineCode",{parentName:"h3"},"PlatformPressable")),(0,i.kt)("p",null,"A component which provides an abstraction on top of ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/Pressable"},(0,i.kt)("inlineCode",{parentName:"a"},"Pressable"))," to handle platform differences. In addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"Pressable"),"'s props, it accepts following additional props:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pressColor")," - Color of material ripple on Android when it's pressed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pressOpacity")," - Opacity when it's pressed if material ripple isn't supported by the platform")),(0,i.kt)("h3",{id:"resourcesavingview"},(0,i.kt)("inlineCode",{parentName:"h3"},"ResourceSavingView")),(0,i.kt)("p",null,"A component which aids in improving performance for inactive screens by utilizing ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#removeclippedsubviews"},(0,i.kt)("inlineCode",{parentName:"a"},"removeClippedSubviews")),". It accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," prop to indicate whether a screen should be clipped."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<ResourceSavingView visible={0}>\n  {/* Content */}\n</ResourceSavingView>\n")),(0,i.kt)("h2",{id:"utilities"},"Utilities"),(0,i.kt)("h3",{id:"safeareaprovidercompat"},(0,i.kt)("inlineCode",{parentName:"h3"},"SafeAreaProviderCompat")),(0,i.kt)("p",null,"A wrapper over the ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaProvider")," component from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},"`react-native-safe-area-context")," which includes initial values."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<SafeAreaProviderCompat>\n  {/* Your components */}\n</SafeAreaProviderCompat>\n")),(0,i.kt)("h3",{id:"headerbackcontext"},(0,i.kt)("inlineCode",{parentName:"h3"},"HeaderBackContext")),(0,i.kt)("p",null,"React context that can be used to get the back title of the parent screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { HeaderBackContext } from '@react-navigation/elements';\n\n// ...\n\n<HeaderBackContext.Consumer>\n  {headerBack => {\n    if (headerBack) {\n      const backTitle = headerBack.title;\n\n      /* render something */\n    }\n\n    /* render something */\n  }}\n</HeaderBackContext.Consumer>\n")),(0,i.kt)("h3",{id:"headershowncontext"},(0,i.kt)("inlineCode",{parentName:"h3"},"HeaderShownContext")),(0,i.kt)("p",null,"React context that can be used to check if a header is visible in a parent screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { HeaderShownContext } from '@react-navigation/elements';\n\n// ...\n\n<HeaderShownContext.Consumer>\n  {headerShown => {\n    /* render something */\n  }}\n</HeaderShownContext.Consumer>\n")),(0,i.kt)("h3",{id:"headerheightcontext"},(0,i.kt)("inlineCode",{parentName:"h3"},"HeaderHeightContext")),(0,i.kt)("p",null,"React context that can be used to get the height of the nearest visible header in a parent screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { HeaderHeightContext } from '@react-navigation/elements';\n\n// ...\n\n<HeaderHeightContext.Consumer>\n  {headerHeight => {\n    /* render something */\n  }}\n</HeaderHeightContext.Consumer>\n")),(0,i.kt)("h3",{id:"useheaderheight"},(0,i.kt)("inlineCode",{parentName:"h3"},"useHeaderHeight")),(0,i.kt)("p",null,"Hook that returns the height of the nearest visible header in the parent screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useHeaderHeight } from '@react-navigation/elements';\n\n// ...\n\nconst headerHeight = useHeaderHeight();\n")),(0,i.kt)("h3",{id:"getdefaultheaderheight"},(0,i.kt)("inlineCode",{parentName:"h3"},"getDefaultHeaderHeight")),(0,i.kt)("p",null,"Helper that returns the default header height. It takes the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"layout")," - Layout of the screen, i.e. an object containing ",(0,i.kt)("inlineCode",{parentName:"li"},"height")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"width")," properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"statusBarHeight")," - height of the statusbar")),(0,i.kt)("h3",{id:"getheadertitle"},(0,i.kt)("inlineCode",{parentName:"h3"},"getHeaderTitle")),(0,i.kt)("p",null,"Helper that returns the title text to use in header. It takes the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," - The options object of the screen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fallback")," - Fallback title string if no title was found in options.")))}h.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);