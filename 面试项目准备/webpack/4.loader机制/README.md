# 前言
1. loader的本质是什么?
2. 在Webpack中如何使用自定义Loader?有几种方式？
3. Loader的类型有哪几种？它们的运行顺序是怎样？如何控制它们的运行顺序?
4. 什么是Normal Loader?什么是Pitching Loader？它们的运行机制有哪些？
5. 如果一个文件指定了多个Loader，如何控制使得执行特定的Loader，忽略其他Loader？
6. Loader为什么是从右向左执行的？如何做到的？
7. 项目中对.css 、.less .scess.tsx .vue等文件如何做的解析？原理是什么？
8. Webpack中完整的Loader运行机制是怎样的？
9. 最后Loader处理结果必须是JS类型的字符串？
10. 需要打包过程中移除console.log函数，会通过哪种方式进行处理？是通过Loader还是Babel Plugin？或者是 Webpack Plugin？


# Loader的本质是

Loader本质是导出为函数的JavaScript模块。**接受资源文件或者上一个Loader产生的结果作为入参，也可以用多个Loader函数组成loader chain(链)，最终输出转化后的结果**


```js
/**
 * @param {string/Buffer} content 源文件的内容
 * @param {object}[map]
 * @param {any} [meta] meta数据，可以是任何内容
*/

function webpackLoader (content,map,meta){
    //webpack loader代码
}
```

loader chain(链)：这里拿.less文件举例

```js
module:{
    rules:[
        {
            test:/\.less$/,
            use:[
                "style-loader",//将css内容变成style标签插入到html中
                "css-loader",//解析css文件的路径等
                "less-loader",//将less=》css

            ]
        }
    ]
}

```

它们的执行顺序是从右向左，或者是从下往上。**loader chain**这样设计，**可以保证每个Loader的职责单一**


定义一个简单simpleLoader
```js

function simpleLoader(content,map,meta){
    console.log("我是SimpleLoader")
    return content
}

module.exports=simpleLoader
```

# 三、在Webpack中如何使用自定义Loader


在Webpack中使用自定义Loader三种方式

1. 配置Loader的绝对路径
```js
{
    test:/\.js$/，
    use:[
        {
            loader:path.resolve(__dirname,"./loaders/simpleLoader.js"),
            options:{
                /***^/
            }
        }
    ]
}
```
2. 配置resolveLoader.alias 配置别名

```js
resolveLoader:{
    alias:{
        "simpleLoader":path.resolve(__dirname.,"./loaders/simple.js")
    }
}

module:{
    rules:[
        {
            test:/\.js$/,
            use:[
                {
                    loader:'simpleLoader',
                    options:{
                        /***/
                    }
                }
            ]
        }
    ]
}

```

3. 配置resolveLoader.modules

```js
resolveLoader:{
    //找loader的时候，先去loaders目录下找，找不到再去node_modules下面找
    modules:["loaders","node_modules"]
}

module:{
    rules:[
        {
            test:/\.js$/,
            use:[
                {
                    loader:'simpleLoader',
                    options:{
                        /***/
                    }
                }
            ]
        }
    ]
}

```
如果要使用第三方Loader，直接配置Loader名，即可node_modules下查找


# 四、Loader的四种类型

Loader按类型可以分为四种:**前置(pre)**,**普通(normal)**,**行内(inline)**、**后置(post)**

Loader的类型和它本身没有任何问题，而是和配置的enforce属性有关系

```js
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },

```
css-loader中并没有enforce属性，那这个css-loader中并没有指定enforce属性，
那么这个css-loader就是普通(normal)类型，而当配置enforce:"pre"后，该loader变成
前置(pre)类型的loader

```js
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
        enforce:"pre",//这里可以是post，默写不写就是normal
      },
    ],
  },

```

这**行内(inline)Loader**,平时一般用的比较少，先眼熟一下，后面会详细讲

```js
import xxx from "inline-loader1!inline-loader2!/src/xxx.css"
```

表示用inline-loader1和inline-loader2这两个Loader来解析引入的文件

loader chain提到Loader的执行顺序由右向左，或者由上到下执行（不准确）

所有一个接一个地进入Loader，都有两个阶段
1. Pitching阶段:Loader上的pitch方法，按照**后置(Post)、行内(inline)、普通(normal)
   前置(pre)**的顺序调用

2. Normal阶段:Loader上的常规方法，按照**前置(pre)、普通(normal)、行内(inline)、后置(post)**
   模块源码的转化，发生在这个阶段

3. 同等类型下的Loader执行顺序才是由右向左，或者由下到上执行。
   

在项目开始构建之前，一般会使用eslint进行校验，这个时候前置(pre)Loader,如果前置Loader发现错误
退出构建

```js
module:{
    rules:[
        {
            test:/\.js$/,
            use:["eslint-loader"],
            enforce:"pre",//编译前先对js文件进行校验
        }，
        {
            test:/\.js$/,
            use:["babel-loader"]
        }
    ]
}

```
校验一个编译一个

# 五、Normal Loader和Pitching Loader

## 5.1 Normal Loader