console.log(Object.prototype.toString.call('hello'))
Object.prototype.toString.call([1,3])
Object.prototype.toString.call(3)
Object.prototype.toString.call(true)


const obj={}

//定义属性
Object.defineProperty(obj,Symbol.toStringTag,{value:'Module'})


//查看自定义类型
console.log(Object.prototype.toString.call(obj))