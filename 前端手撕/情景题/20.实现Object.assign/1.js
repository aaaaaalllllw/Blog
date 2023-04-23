Object.defineProperty(Object,'assign',{
    value:function(target,...args){
        if(target==null){
            return new TypeError('Cannoy convert undefined or null to object')
        }
        //目标对象需要统一是引用数据类型，若不是会自动转换
        const to=Object(target)

        for(let i=0;i<args.length;i++){
            //每个源对象
            const nextSource=args[i]
            if(nextSource!=null){
                for(const nextKey in nextSource){
                    if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){
                        to[nextKey]=nextSource[nextKey]
                    }
                }
            }
        }
        return to;
    },
    //不可枚举
    enumerable:false,
    writable:true,
    configurable:true
})