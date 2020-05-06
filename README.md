# Bayes的博客
这里记录了我的前端开发经验和一些前端工程化实践阅历。

## 网络和安全
1. - [x] [从“浏览器输入URL后”说起](https://github.com/coconilu/Blog/issues/120)
1. - [x] [网络模型](https://github.com/coconilu/Blog/issues/97)
2. - [x] [HTTP 协议](https://github.com/coconilu/Blog/issues/135)
3. - [x] [HTTPS 协议](https://github.com/coconilu/Blog/issues/137)
4. - [x] [HTTP2 协议](https://github.com/coconilu/Blog/issues/134)
5. - [x] [认证用户身份](https://github.com/coconilu/Blog/issues/136)
6. - [x] [Web 安全专题](https://github.com/coconilu/Blog/issues/38)
7. - [x] [OAUTH 2.0](https://github.com/coconilu/Blog/issues/58)
8. - [x] [JSON Web Token](https://github.com/coconilu/Blog/issues/110)

## 前端体系

下图参考李兵的《浏览器工作原理与实践》：

[![参考李兵的《浏览器工作原理与实践》.png](https://s1.ax1x.com/2020/03/13/8up6H0.png)](https://imgchr.com/i/8up6H0)

在程序猿鄙视链中，前端工程师是排在后端工程师和客户端工程师后面的，从上图不难看出，前端工程师貌似只需要了解渲染进程就可以了，因为脏活累活都让客户端工程师包揽了，并提供了简单好用的接口给前端工程师即可。

为什么会出现这样的情况呢？因为在互联网时代，客户端和前端其实是共生的局面，用户不希望天天升级客户端，但是又想看到各不一样的页面。没办法，浏览器只能这样设计，把通用的功能抽取出来提供给前端使用，而前端需要基于这些通用功能去实现风格不一样的页面，比如DOM接口，Ajax接口，Promise接口等等，这些都不是JS引擎的东西，是由浏览器注入到JS引擎的。这个局面很像硬件和软件的关系，也很像操作系统和应用的关系。

### 1. 关于浏览器
1. [浏览器运行原理概述](https://github.com/coconilu/Blog/issues/47)
2. [资源加载和页面渲染](https://github.com/coconilu/Blog/issues/48)
3. [浏览器缓存机制](https://github.com/coconilu/Blog/issues/113)
4. [同源策略与跨域请求](https://github.com/coconilu/Blog/issues/59)
5.  [页面生命周期](https://github.com/coconilu/Blog/issues/121)

### 2. 关于JS引擎
1. - [x] [JavaScript 引擎](https://github.com/coconilu/Blog/issues/45)
2. - [x] [V8 引擎](https://github.com/coconilu/Blog/issues/49)
3. - [x] [异步编程与事件循环](https://github.com/coconilu/Blog/issues/7)
4. - [X] [深究Function.prototype.bind](https://github.com/coconilu/Blog/issues/12)
5. - [x] [虚拟DOM与diff算法](https://github.com/coconilu/Blog/issues/65)
6. - [x] [Snabbdom 官方文档翻译](https://github.com/coconilu/Blog/issues/152)
7. - [ ] [抽象语法树](https://github.com/coconilu/Blog/issues/145)
8. - [ ] [JS 切面编程](https://github.com/coconilu/Blog/issues/148)

### 3. 前端基础知识储备
- [x] [前端基础知识储备](https://github.com/coconilu/Blog/issues/162)

### 4. 框架研究

#### 关于VueJS
1. - [x] [VueJS 运行过程](https://github.com/coconilu/Blog/issues/19)
2. - [x] [VueJS 响应式原理及简单实现](https://github.com/coconilu/Blog/issues/75)
3. - [x] [VueJS 的编译阶段到挂载节点](https://github.com/coconilu/Blog/issues/92)
4. - [x] [VueJS 的模板引擎](https://github.com/coconilu/Blog/issues/91)
5. - [x] [VueJS 的VNode](https://github.com/coconilu/Blog/issues/94)
6. - [x] [VueJs 的组件化](https://github.com/coconilu/Blog/issues/93)
6. - [x] [VueJS 的调试](https://github.com/coconilu/Blog/issues/96)
7. - [x] [VueJS API](https://github.com/coconilu/Blog/issues/67)
8. - [x] [VueJS 全家桶](https://github.com/coconilu/Blog/issues/111)

### 关于React
1. - [x] [React 运行过程](https://github.com/coconilu/Blog/issues/99)
2. - [x] [React 进阶](https://github.com/coconilu/Blog/issues/100)
3. - [ ] [React 原理部分](https://github.com/coconilu/Blog/issues/112)



### 5. 优化指南

## 前端工程化

### 1. 前端工程化实践
1. [前端工程化概述](https://zhuanlan.zhihu.com/p/101235426)
2. [前端工程项目结构](https://zhuanlan.zhihu.com/p/101143106)
3. [前端工作流](https://zhuanlan.zhihu.com/p/101080514)
4. [前端开发环境](https://zhuanlan.zhihu.com/p/101185246)
5. [前后端通信](https://zhuanlan.zhihu.com/p/101245303)
6. [提交-构建-部署](https://zhuanlan.zhihu.com/p/101352933)
7. [前端监控](https://zhuanlan.zhihu.com/p/101306616)

### 2. 关于NodeJS
1. - [x] [NodeJS 运行原理](https://github.com/coconilu/Blog/issues/43)
2. - [x] [NodeJS 编程模型](https://github.com/coconilu/Blog/issues/41)
3. - [x] [基础模块](https://github.com/coconilu/Blog/issues/42)
4. - [x] [网络模块](https://github.com/coconilu/Blog/issues/50)
5. - [x] [系统模块](https://github.com/coconilu/Blog/issues/51)
6. - [x] [工具模块](https://github.com/coconilu/Blog/issues/53)
7. - [x] [Express源码解析](https://github.com/coconilu/Blog/issues/82)
8. - [x] [Koa源码解析](https://github.com/coconilu/Blog/issues/81)
9. - [x] [Express和Koa的对比](https://github.com/coconilu/Blog/issues/83)
1. - [x] [NPM 指令大全](https://github.com/coconilu/Blog/issues/78)
1. - [x] [配置 NPM](https://github.com/coconilu/Blog/issues/143)
2. - [x] [NPM 上传自己的项目](https://github.com/coconilu/Blog/issues/79)
3. - [x] [NPM与工作流](https://github.com/coconilu/Blog/issues/77)
4. - [x] [NPM技巧收集（持续更新）](https://github.com/coconilu/Blog/issues/88)
5. - [x] [Yarn 使用手册](https://github.com/coconilu/Blog/issues/142)

### 3. 工具篇
1. - [x] [GraphQL 速记手册](https://github.com/coconilu/Blog/issues/104)
1. - [x] [axios 核心源码解读](https://github.com/coconilu/Blog/issues/116)
1. - [x] [git模型](https://github.com/coconilu/Blog/issues/54)
1. - [x] [git常用API](https://github.com/coconilu/Blog/issues/55)
1. - [x] [git 案例(持续更新)](https://github.com/coconilu/Blog/issues/157)
1. - [x] [GitHub Flow](https://github.com/coconilu/Blog/issues/56)
1. - [x] [Babel 运行过程](https://github.com/coconilu/Blog/issues/102)
1. - [x] [Babel API](https://github.com/coconilu/Blog/issues/156)
1. - [x] [WebPack模型](https://github.com/coconilu/Blog/issues/87)
1. - [x] [Webpack 进阶功能](https://github.com/coconilu/Blog/issues/123)
1. - [x] [webpack-dev-server 原理探讨](https://github.com/coconilu/Blog/issues/115)
1. - [x] [Webpack相关课题（持续更新）](https://github.com/coconilu/Blog/issues/122)
1. - [x] [常用Loaders和Plugins（持续更新）](https://github.com/coconilu/Blog/issues/89)
1. - [x] [Webpack 与内存](https://github.com/coconilu/Blog/issues/147)
1. - [ ] webpack 与定制化编译过程
1. - [x] [source-map实践](https://github.com/coconilu/Blog/issues/160)
1. - [x] [vscode 设置默认终端为bash](https://github.com/coconilu/Blog/issues/80)
1. - [x] [vscode 开发插件](https://github.com/coconilu/Blog/issues/90)
1. - [x] [Jest 简介](https://github.com/coconilu/Blog/issues/103)
1. - [x] [TypeScript 简介](https://github.com/coconilu/Blog/issues/101)
1. - [x] [Google 开发者工具使用指南](https://github.com/coconilu/Blog/issues/119)
1. - [x] [Devtools 设备模式](https://github.com/coconilu/Blog/issues/124)
1. - [x] [Devtools 元素模板](https://github.com/coconilu/Blog/issues/125)
1. - [x] [Devtools 控制台面板](https://github.com/coconilu/Blog/issues/126)
1. - [x] [Devtools 源代码面板](https://github.com/coconilu/Blog/issues/127)
1. - [x] [Devtools 网络面板](https://github.com/coconilu/Blog/issues/128)
1. - [x] [Devtools 性能面板](https://github.com/coconilu/Blog/issues/129)
1. - [ ] [Devtools 内存面板](https://github.com/coconilu/Blog/issues/130)
1. - [ ] [Devtools 应用面板](https://github.com/coconilu/Blog/issues/131)
1. - [ ] [Devtools 安全面板](https://github.com/coconilu/Blog/issues/132)
1. - [x] [Protocol Buffers原理解析](https://github.com/coconilu/Blog/issues/159)
1. - [x] [前端与Nginx](https://github.com/coconilu/Blog/issues/76)


## :trophy: 开源贡献

### 社区活动

#### 翻译活动

1. [参与MDN翻译](https://developer.mozilla.org/en-US/profiles/sunline.bucket)
2. [掘金翻译计划](https://github.com/coconilu/Blog/issues/36)

#### [NPM 开源共享库](https://www.npmjs.com/~coconilu)

1. [@coconilu/mypromise](https://www.npmjs.com/package/@coconilu/mypromise)
2. [my-lazyload-picture](https://www.npmjs.com/package/my-lazyload-picture)
3. [my-flip-animation](https://www.npmjs.com/package/my-flip-animation)
4. [sticky-polyfill](https://www.npmjs.com/package/sticky-polyfill)

### 开源项目

1. [管理GitHub的stars](https://github.com/coconilu/iGitStar)
2. [source-map查看器](https://github.com/coconilu/sourcemap-watch)

# 勘误与改进

如果博客对您有所帮助或启发，期待您的star，同时对作者也是一种鼓励。

# License

所有文章采用[知识共享署名-非商业性使用-相同方式共享 3.0 中国大陆许可协议](http://creativecommons.org/licenses/by-nc-sa/3.0/cn/)进行许可。
