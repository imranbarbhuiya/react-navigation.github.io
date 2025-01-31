---
title: React Navigation 1.0 (goodbye, beta!)
authors: brent
tags: [release, announcement]
---

As of today, React Navigation version 1.0 has been released! To see a list of recent improvements leading up to the release, refer to the “[Renewed Path to React Navigation V1.0](https://github.com/react-navigation/react-navigation/issues/2585)” issue. Thank you to everybody who has filed high-quality bug reports, submitted pull requests, and helped out fellow developers while we were in beta!

<!--truncate-->

This release isn’t meant to be interpreted as a signal that React Navigation is “finished" &mdash; work is already underway on a number of significant changes to the API that aim to make React Navigation easier to use and more powerful. These changes will be run through our [new RFC process](https://github.com/react-navigation/rfcs). For example, the [Navigator View API RFC](https://github.com/react-navigation/rfcs/blob/master/text/0002-navigator-view-api.md) outlines a plan to decouple views from the router in order to make it easier for other navigation APIs, such as [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) and [react-router-native](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-native), to build on top of the same navigation views. We’re also very excited about a plan (no RFC is open yet, but keep an eye out for it) to use [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) to run navigation gestures (sliding a drawer open, or swiping back on a stack, for example) on the UI thread using the Animated native driver.

Last week we released an updated version of our [documentation website](/docs/1.x/getting-started), built using [Docusaurus](https://docusaurus.io/). We hope that the new documentation will help newcomers get onboarded with the fundamentals of React Navigation, and serve as an ongoing resource to handle specific use cases as you come across them (under the “How do I do..?” section). [Contributions to the documentation are very welcome](https://github.com/react-navigation/react-navigation.github.io).

[Give React Navigation 1.0 a try](/docs/1.x/getting-started), [post a feature request](https://react-navigation.canny.io/feature-requests) if you think something is missing, [open a RFC](https://github.com/react-navigation/rfcs) if you have an idea of how to implement it, [file a detailed bug report](https://github.com/react-navigation/react-navigation/issues) when you encounter problems (or [open a pull request](https://github.com/react-navigation/react-navigation/pulls) if you know how to fix them)! Updating your existing installation should be easy if you have tracked releases over recent months &mdash; [read the brief release notes](https://github.com/react-navigation/react-navigation/releases/tag/1.0.0) for more information.
