function tokenizer(input){
    let current=0;//记录当前访问的位置
    let tokens=[];//最终生成的tokens

    //循环遍历input
    while(current<input.length){
        let char=input[current]

        if(char==='('){
            tokens.push({
                type:"paren",
                value:'('
            });
            current++
            continue
        }


        if(char===')'){
            tokens.push({
                type:"paren",
                value:')'
            });
            current++
            continue
        }

        //空格直接省略
        let WHITESPACE=/\s/
        if(WHITESPACE.test(char)){
            current++
            continue
        }

        //数字如果是连续的一串字符代表一个数字
        let NUMBERS=/[0-9]/
        if(NUMBERS.test(char)){
            let value=""
            while(NUMBERS.test(char)){
                value+=char
                char=input[++current]
            }
            tokens.push({
                type:'number',
                value
            })
            continue
        }

        //字符串连续的
        if(char==='"'){
            let value=''
            char=input[++current]
            while(char!=='"'){
                value+=char
                char=input[++current]
            }
            tokens.push({
                type:'string',
                value
            })
            continue
        }

        //字母连续
        let LETTERS=/[a-z]/i
        if(LETTERS.test(char)){
            let value=""
            while(LETTERS.test(char)){
                value+=char
                char=input[++current]
            }
            tokens.push({
                type:'name',
                value
            })
            continue
        }
            // 容错处理，如果我们什么都没有匹配到，说明这个token不在我们的解析范围内
            throw new TypeError('I dont know what this character is: ' + char);
    }
    return tokens
}


function parser(tokens){
    let current=0;//当期遍历tokens的下标
    
    //walk函数辅助我们遍历整个tokens
    function walk(){
        let token=tokens[current]
        //  现在就是遍历出每个token，根据其类型生成对应的节点
        if(token.type==="number"){
            current++
            return{
                type:'NumberLiteral',
                value:token.value
            }
        }

        if(token.type==='string'){
            current++;
            return{
                type:'StringLiteral',
                value:token.value,
            }
        }

        //这里处理调用语句
        if(token.type==='paren'&&token.value==="("){
            token=tokens[++current]
            //这里以一个例子解释(add 2 3)这样的代码“（”就是paren token
            let node={
                type:"CallExpression",
                value:token.value,
                params:[]
            }
            //获取name后我们需要继续获取接下来调用语句中参数，直到我们遇到了")"",这里会存在嵌套现象 
            //(add 2(substract 4 2))
            /*
            [
                {type:'paren',value:'()}
                  { type: 'name', value: 'add' },      
          { type: 'number', value: '2' },      
          { type: 'paren', value: '(' },       
          { type: 'name', value: 'subtract' }, 
          { type: 'number', value: '4' },      
          { type: 'number', value: '2' },      
          { type: 'paren', value: ')' },       
          { type: 'paren', value: ')' },  
            ]
            
            */
            token=tokens[++current]
            while((token.type!=="paren")||(token.type==="paren"&&token.value!==")")){
                node.params.push(walk())
                token=tokens[current]
            }
            //当while中断后说明参数读取完，现在下一个应该是")",所以++越过
            current++
            return node
        }

        throw new TypeError(token.type)

    }
    let ast={
        type:'Program',
        body:[]
    }

    //然后我们通过调用walk遍历tokens将tokens内的对象，转化为AST节点，完成AST构建
    while(current<tokens.length){
        ast.body.push(walk())
    }

    return ast

}


function traverse(ast,visitor){
    //遍历数组，在遍历数组的同时会调用traverseNode来遍历节点
    function traverseArray(array,parent){
        array.forEach(chid => {
            traverseNode(chid,parent)
        });
    }

    function traverseNode(node,parent){
        //判断访问器中是否有合适处理该节点的函数
        let methods=visitor[node.type]
        //如果有就执行enter函数，因为此时已经进入这个节点了
        if(methods&&methods.enter){
            methods.enter(node,parent)
        }
        //接下来根据node节点来处理
        switch(node.type){
            case 'Program':
                traverseArray(node.body,node)//如果你是ast的根部，就相当于树根，body中的每一项都是一个分支
            break;
            case 'CallExpression':
                traverseArray(node.params,node)
            break;
            case 'NumberLiteral':
            case 'StringLiteral':
                break;
            
            //最后容错处理
            default:
                throw new TypeError(node.type)
        }
        //当执行到这里时，说明该节点(分支)已经遍历到尽头了，执行exit
        if(methods&&methods.exit){
            methods.exit(node,parent)
        }
    }

    //我们从ast开始进行节点遍历，因为ast没有父节点所以传入null
    traverseNode(ast,null)
}



function transformer (ast) {
    // 将要被返回的新的AST
    let newAst = {
      type: 'Program',
      body: [],
    };
    // 这里相当于将在旧的AST上创建一个_content,这个属性就是新AST的body，因为是引用，所以后面可以直接操作就的AST
    ast._context = newAst.body;
    // 用之前创建的访问器来访问这个AST的所有节点
    traverse(ast, {
      // 针对于数字片段的处理
      NumberLiteral: {
        enter (node, parent) {
          // 创建一个新的节点，其实就是创建新AST的节点，这个新节点存在于父节点的body中
          parent._context.push({
            type: 'NumberLiteral',
            value: node.value,
          });
        },
      },
  
      // 针对于文字片段的处理
      StringLiteral: {
        enter (node, parent) {
          parent._context.push({
            type: 'StringLiteral',
            value: node.value,
          });
        },
      },
  
      // 对调用语句的处理
      CallExpression: {
        enter (node, parent) {
          // 在新的AST中如果是调用语句，type是`CallExpression`，同时他还有一个`Identifier`，来标识操作
          let expression = {
            type: 'CallExpression',
            callee: {
              type: 'Identifier',
              name: node.value,
            },
            arguments: [],
          };
          // 在原来的节点上再创建一个新的属性，用于存放参数 这样当子节点修改_context时，会同步到expression.arguments中，这里用的是同一个内存地址
          node._context = expression.arguments;
          // 这里需要判断父节点是否是调用语句，如果不是，那么就使用`ExpressionStatement`将`CallExpression`包裹，因为js中顶层的`CallExpression`是有效语句
          if (parent.type !== 'CallExpression') {
            expression = {
              type: 'ExpressionStatement',
              expression: expression,
            };
          }
          parent._context.push(expression);
        },
      }
    });
    return newAst;
  }

  function codeGenerator(node) {
    // 我们以节点的种类拆解(语法树)
    switch (node.type) {
      // 如果是Progame,那么就是AST的最根部了，他的body中的每一项就是一个分支，我们需要将每一个分支都放入代码生成器中
      case 'Program':
        return node.body.map(codeGenerator)
          .join('\n');
      // 如果是声明语句注意看新的AST结构，那么在声明语句中expression，就是声明的标示，我们以他为参数再次调用codeGenerator
      case 'ExpressionStatement':
        return (
          codeGenerator(node.expression) + ';'
        );
      // 如果是调用语句，我们需要打印出调用者的名字加括号，中间放置参数如生成这样"add(2,2)",
      case 'CallExpression':
        return (
          codeGenerator(node.callee) +  '(' + node.arguments.map(codeGenerator).join(', ') + ')'
        );
        
      // 如果是识别就直接返回值 如： (add 2 2),在新AST中 add就是那个identifier节点
      case 'Identifier':
        return node.name;
      // 如果是数字就直接返回值
      case 'NumberLiteral':
        return node.value;
      // 如果是文本就给值加个双引号
      case 'StringLiteral':
        return '"' + node.value + '"';
      // 容错处理
      default:
        throw new TypeError(node.type);
    }
  }

  function compiler(input) {
    let tokens = tokenizer(input); //生成tokens
    let ast    = parser(tokens); //生成ast
    let newAst = transformer(ast); //拿到新的ast
    let output = codeGenerator(newAst); //生成新代码
    return output;
  }
  

  console.log(compiler("(add 2 (substract 4 3))"))