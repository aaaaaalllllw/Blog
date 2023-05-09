# 需求分析

Vue.js 技术栈开发组件，有哪些方面的需求

1. 丰富的 feature:丰富的组件，自定义主题，国际化
2. 文档&demo:提供友好的文档和 demo，维护成本小，支持多语言
3. 安装&引入:支持 npm 方式和 cdn 方式，并支持按需引入
4. 工程化:开发、测试、构建、部署、持续集成

# 丰富的 feature

## 丰富的组件

## 自定义主题

element-ui 的一大特色是支持自定义主题，可以使用在线主题编辑器，修改定制 Element 所有全局和组件的 Design Tokens，并可以方便地实时预览样式改变后的视觉，同时它还可以基于新的定制样式生成完整的样式文件包，供直接下载使用

**本质是发请求，覆盖原来的样式**

## 国际化

语言包

## 文档&demo

都一个.md 文件

## 安装和引入

- CDN，全部引入
- Vue-cli 的 npm 是。按需引入 babel-plugin-component 这个 webpack 插件，并配置了.babelrc

```js
import { Button } from "element-ui";
require("element-ui/lib/theme-chalk/button.css");
```

冗余引入，实际只是部分解决了，它的 webpack 配置文件 externals,在 build/config.js


来源掘金