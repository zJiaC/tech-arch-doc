const e=JSON.parse('{"key":"v-4a9ee4b5","path":"/posts/coding-related/typescript/electron-base.html","title":"Electron React Typescript Antd 环境搭建","lang":"zh-CN","frontmatter":{"title":"Electron React Typescript Antd 环境搭建","icon":"java","date":"2022-06-29T00:00:00.000Z","category":["编程"],"tag":["Electron","React","Typescript","Antd","Node"],"description":"Electron React Typescript Antd 环境搭建 前言 最近打算 Electron React Typescript Antd 结合学习,网上搜索事例优点问题重新整理了下。 注意事项： main.ts nodeIntegration 和 contextIsolation 配置不对会导致编译时提示 react 导入 node 代码出错 未创建 preload.js 文件 导致 electron 启动界面加载空白 不同版本 electron 的 dialog 存在使用差异 旧事例使用 remote 若继续使用需要添加 @electron/remote 新事例 dialog 只能在主线程进行调用,可通过事件监听显现效果 electron 下载慢,虽然 yrm 切换不同的镜像源仍然较慢,需单独设置 ELECTRON_MIRROR yarn config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/","head":[["meta",{"property":"og:url","content":"https://zjiac.github.io/tech-arch-doc/tech-arch-doc/posts/coding-related/typescript/electron-base.html"}],["meta",{"property":"og:site_name","content":"zJiac 个人知识体系"}],["meta",{"property":"og:title","content":"Electron React Typescript Antd 环境搭建"}],["meta",{"property":"og:description","content":"Electron React Typescript Antd 环境搭建 前言 最近打算 Electron React Typescript Antd 结合学习,网上搜索事例优点问题重新整理了下。 注意事项： main.ts nodeIntegration 和 contextIsolation 配置不对会导致编译时提示 react 导入 node 代码出错 未创建 preload.js 文件 导致 electron 启动界面加载空白 不同版本 electron 的 dialog 存在使用差异 旧事例使用 remote 若继续使用需要添加 @electron/remote 新事例 dialog 只能在主线程进行调用,可通过事件监听显现效果 electron 下载慢,虽然 yrm 切换不同的镜像源仍然较慢,需单独设置 ELECTRON_MIRROR yarn config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-08T07:11:55.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Electron"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:tag","content":"Typescript"}],["meta",{"property":"article:tag","content":"Antd"}],["meta",{"property":"article:tag","content":"Node"}],["meta",{"property":"article:published_time","content":"2022-06-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-08T07:11:55.000Z"}]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"基本环境搭建","slug":"基本环境搭建","link":"#基本环境搭建","children":[{"level":3,"title":"创建 react + typescript 项目","slug":"创建-react-typescript-项目","link":"#创建-react-typescript-项目","children":[]},{"level":3,"title":"安装 react-app-rewired 以及 cross-env","slug":"安装-react-app-rewired-以及-cross-env","link":"#安装-react-app-rewired-以及-cross-env","children":[]},{"level":3,"title":"创建 react-app-rewired 配置文件 config-overrides.js 用于扩展 webpack 配置","slug":"创建-react-app-rewired-配置文件-config-overrides-js-用于扩展-webpack-配置","link":"#创建-react-app-rewired-配置文件-config-overrides-js-用于扩展-webpack-配置","children":[]},{"level":3,"title":"安装 electron 环境","slug":"安装-electron-环境","link":"#安装-electron-环境","children":[]},{"level":3,"title":"创建 electron 环境","slug":"创建-electron-环境","link":"#创建-electron-环境","children":[]},{"level":3,"title":"添加相关脚本","slug":"添加相关脚本","link":"#添加相关脚本","children":[]},{"level":3,"title":"添加 electron 及 node.js 相关代码，用于测试是否集成完毕","slug":"添加-electron-及-node-js-相关代码-用于测试是否集成完毕","link":"#添加-electron-及-node-js-相关代码-用于测试是否集成完毕","children":[]},{"level":3,"title":"运行测试","slug":"运行测试","link":"#运行测试","children":[]},{"level":3,"title":"项目打包","slug":"项目打包","link":"#项目打包","children":[]}]},{"level":2,"title":"开始打包","slug":"开始打包","link":"#开始打包","children":[]},{"level":2,"title":"Github","slug":"github","link":"#github","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1657264315000,"updatedTime":1657264315000,"contributors":[{"name":"zJiaC","email":"425226133@qq.com","commits":1}]},"readingTime":{"minutes":4.4,"words":1321},"filePathRelative":"posts/coding-related/typescript/electron-base.md","localizedDate":"2022年6月29日","excerpt":"<h1> Electron React Typescript Antd 环境搭建</h1>\\n<h2> 前言</h2>\\n<p>最近打算 Electron React Typescript Antd 结合学习,网上搜索事例优点问题重新整理了下。</p>\\n<ul>\\n<li>注意事项：\\n<ul>\\n<li>main.ts nodeIntegration 和 contextIsolation 配置不对会导致编译时提示 react 导入 node 代码出错</li>\\n<li>未创建 preload.js 文件 导致 electron 启动界面加载空白</li>\\n<li>不同版本 electron 的 dialog 存在使用差异\\n<ul>\\n<li>旧事例使用 remote 若继续使用需要添加 @electron/remote</li>\\n<li>新事例 dialog 只能在主线程进行调用,可通过事件监听显现效果</li>\\n</ul>\\n</li>\\n<li>electron 下载慢,虽然 yrm 切换不同的镜像源仍然较慢,需单独设置 ELECTRON_MIRROR\\n<ul>\\n<li>yarn config set ELECTRON_MIRROR <a href=\\"https://npm.taobao.org/mirrors/electron/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://npm.taobao.org/mirrors/electron/</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
