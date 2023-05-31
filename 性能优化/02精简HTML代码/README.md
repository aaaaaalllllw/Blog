# 精简HTML代码

- 减少HTML的嵌套
- 减少DOM节点数
- 减少无语义的代码(比如:<div class="clear"></div> 消除浮动)
- 删除http或者https，如果URL的协议头和当前页面的协议头一致的，或者此URL在多个协议头都是可用的，则可以考虑删除协议头
- 删除多余的空格、换行符、缩进和不必要的注释
- 省略冗余标签和属性
- 使用相对路径的URL


# 文件放在合适位置

- CSS样式文件链接尽量放在页面头部
   - CSS加载不会阻塞DOM tree解析，但是会阻塞DOM tree渲染，也会阻塞后面JS执行。任何body元素之前，可以确保在文档部分中解析了所有CSS样式(内联和外联)，从而减少浏览器必须重排文档的次数，如果放置页面底部，就需要等待最后一个CSS文件下载完成，此时出现“白屏”，影响用户体验
- JS引用放在HTML底部
    - 防止JS的加载、解析、执行对阻塞页面后续元素的正常渲染



#  增强用户体验

- 设置favicon.ico
    - 网站如果不设置favicon.ico，控制台会报错，另外页面加载过程也没有图标loading过程，同时也不利于记忆网站品牌，建议统一添加
- 增加首屏必要的CSS和JS
  -  页面如果需要等待所的依赖的JS和CSS加载完成才显示，则在渲染过程中页面会一直显示空白，影响用户体验，建议增加首屏必要的CSS和JS，比如页面框架背景图片或者loading图标，内联在HTML页面中。这样做，首屏能快速显示出来，相对减少用户对页面加载等待过程。(比如新浪微博M站页面框架)

# 提升CSS渲染性能

## 订单、、
- 谨慎使用expensive属性
  - 如nth-child 伪类；position:fixed定位
- 减少样式层级数
  - 如div ul span i {color：bule}
- 尽量避免使用占用过多CUP和内存属性
  - text-indnt：-99999px
- 尽量避免使用耗电量大的属性
  - 如CSS 3D transforms,CSS3 transitions、Opacity

## 合适使用CSS选择器
- 尽量避免使用CSS表达式
    - background-color: expression((new Date()).getHours()%2 ? "#FFF":"#OOo");
- 尽量避免使用通配选择器
    - body > a {font-weight:blod;}
- 尽量避免类正则的属性选择器
    - *=，=，^=，$=


## 提升CSS文件加载性能

- 使用外链的CSS
- 尽量避免使用@import


## CSS动画优化





# JS优化



## JS变量和函数优化


- 尽量使用id选择器
- 尽量避免使用eval
- JS函数尽可能保持简洁
- 使用事件节流函数
- 使用事件委托




## JS动画优化


- JS动画优化
- 避免添加大量JS动画
- 尽量使用CSS3动画
- 尽量使用Canvas动画
- 合理使用requestAnimationFrame动画代替setTimeout、setlnterval
- requestAnimationFrame可以在正确的时间进行渲染，setTimeout (callback)和setinterval (callback）无法保证callback回调函数的执行时机










# 缓存


## Cookie
- 会话存储：登录名、购物车商品
- 个性化：用户首选项、主题或者其他设置
- 跟踪:记录和分析用户行为，比如埋点

## sessionStorage
- 创建一个本地存储的键/zhi对
- 页面之间传值


## indexedDB

- 索引数据库
- 应用于：
  - 客户端存储大量结构化数据
  - 没有网络连接的情况下使用（比如Google Doc、石墨文档)
  - 将冗余、很少修改、但经常访问的数据，以避免随时从服务器获取数据


## LocalStroage
