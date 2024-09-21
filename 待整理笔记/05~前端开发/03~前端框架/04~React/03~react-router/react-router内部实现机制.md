https://blog.csdn.net/tangzhl/article/details/79696055

所有的组件都是从` react-router-dom`上获取的


依赖基础： history

1. Routers
React 路由应用的核心，为应用提供`<BrowserRouter> and <HashRouter>`，创建一个history对象用于响应路由。
  - `<BrowserRouter>`使用HTML5 history API 保持UI与URL的同步
  - `<HashRouter>`使用URL的hash部分保持UI与URL的同步
  - `<MemoryRouter>`在内存中保持URL历史（不对地址栏读写），在测试或者无浏览器环境中使用

2. 路由匹配的组件 ` <Route> and <Switch>.`
  - 通过对比`<Route>`的 path 属性与当前地址栏的path匹配，如果匹配成功，则渲染响应的组件。
    > 有三种渲染的组件的方式：component(对应的组件)、render(是一个函数，函数里渲染组件)、children(无论哪种路由都会渲染)
  - `<Switch>` 组件用于包裹 `<Route>`组件。匹配到一个Route子组件就返回不再继续匹配其他组件

3. 路由跳转组件 Link
  - 跳转路由时的组件，调用history.push改变url

4. 重定向组件 Redirect，有 from 和 to 两个属性