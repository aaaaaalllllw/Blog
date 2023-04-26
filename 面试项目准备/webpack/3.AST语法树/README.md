

# 三、手写编译器


## 3.1设计篇

### 3.1.1整体流程

一个完整的编译器整体执行过程分为三个步骤

1. Parsing(解析过程):这个过程要经词法分析、语法分析、构建AST(抽象语法树)一系列操作
2. Transform(转化过程):这个过程就是把上一步解析后的内容，按照编译器指定的规则进行处理，
形成一个新的表现形式
3. Code Generation(代码生成):将上一步处理好的内容转化为新的代码

![这是图片](1.webp)

将lisp的函数编译成类似C的函数

```jw
    LISP 代码： (add 2 (subtract 4 2))
    C    代码  add(2, subtract(4, 2))
    释义： 2 + （ 4 - 2 ）
```

### 3.1.2 Parsing(解析)

解析过程分为2个步骤：**词法分析**，**语法分析**

词法分析使用tokenizer(分词器)或者lexer(词法分析器)，将源码拆分成tokens，
**tokens是一个放置对象的数组，其中的每一个对象都看成是一个单元(数字、标签、操作符……)的描述信息**

(add 2 (substract(4 2)))
```js
[
    {type:"parser",value:"("},
    {type:"name",value:"add"},
    {type:"number",value:"2"},
    {type:"paren",value:"("},
    {type:"name".value:"subtract"},
    {type:"number",value:"4"},
    {type:"number",value:"2"},
    {type:"paren",value:")"},
    {type:"paren",value:")"}
]
```
得到tokens，还要进行语法分析

**语法分析**则是将tokens重新整理成语法相互关联的表达式，这种表达式一般成为
中间层或者AST(语法树)

(add 2 (subtratct(4 2)))进行语法解析得到AST:
```js
{
    type:'Program',
    body:[{
        type:'CallExpression',
        name:'add',
        params:
        [{
            type:'NumberLiteral',
            value:'2'
        }，{
            type:'CallExpression',
            name:'subtract',
            params:[{
                type:'NumberLiteral'，
                value：'4'
            },{
                  type:'NumberLiteral'，
                value：'2'
            }]
        }]
    }]
}

```

### 3.1.3 Transformation(转化)

这个过程只要是**改写AST(抽象语法树)，或者根据当前AST(抽象语法树)生成一个新的AST(抽象语法树)**，这个过程可以是相同语言，或者可以直接将AST(抽象语法树)翻译为其他语言


```json
// 数字片段节点
{
   type: 'NumberLiteral',
   value: '2',
}

// 调用语句节点
 {
   type: 'CallExpression',
   name: 'subtract',
   params: [{
     type: 'NumberLiteral', // 数字片段节点
     value: '4',
   }, {
     type: 'NumberLiteral', // 数字片段节点
     value: '2',
   }]
 }

```

想要将lisp语言转化为C语言，因此需要构建一个新的AST(抽象语法树)，这个创建过程
**需要遍历这个树的节点**，因此引出**Traversal(遍历)**和**Vistor(访问器)**

Traversal(遍历)：顾名思义这个过程就是，遍历这个AST(抽象语法树)的所有节点，这个
过程使用**深度优先原则**

![这是图片](2.webp)


**Visitor(访问器)**:访问器最基本的思想创建一个“访问器”对象，这个对象可以处理不同类型的节点函数，如下

```js
const vistor={
    NumberLiteral(node,parent){},//处理数字类型节点
    CallExpression(node,parent){}//处理调用语句；类型节点
}
```
在遍历节点的时候，当enter(进入)该节点，我们会调用访问器，然后调用针对于这个节点的相关函数，同时这个节点和其父节点作为参数传入

同时在exit(离开)的时候也希望能调用访问器，当enter一个节点的时候，最外层节点相当于一个分支，他是一个节点，这个分支的内部依然存在若干节点，就像上边遍历一样。

我们会按照深度优先的原则，依次遍历这个分支的最内层，当达到最内层的时候，针对当前分支的回访也就完成了，接着会依次exit(退出)节点，这个过程是由