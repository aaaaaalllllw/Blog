## 题干

关于缓存，有个常见的例子是，当用户访问不同站点，浏览器需要缓存对应站点的一些信息，这样
当下次访问同一个站点的时候，就可以使访问速度变快(因为一部分数据可以直接从缓存读取)。但是
想想内存空间是有限的，所以必须有一些规则来管理缓存的使用，而LRU(Least Recently Used)
Cache就是其中之一，直接翻译就是“最不经常使用的数据，重要性是最低的，应该优先删除”

## 需求分析

假设我们要实现一个简化版这个功能，先整理下需求
- 需要提供put方法，用于写入不同的缓存数据，假设每条数据形式是{'域名','info'},例如{'https://segmentfault.com': '一些关键信息'}（如果是同一站点重复写入，就覆盖）;
- 当缓存达到上限，调用put写入缓存之前，要删除最近最少使用的数据
- 提供get方法，用于读取缓存数据，同时需要被读取的数据，移动到最近使用数据
- 考虑到读取性能，希望get操作的复杂度是o(1)


## 算法实现

1. 首先是最基本的构造函数

```js
class LRUCache{
    constructor(n){//初始化最大缓存数据条数n
        this.size=n;
        this.data=new Map()//初始化缓存空间map

    }
}
```

2. 接下来是put方法
- 有几种情况分析一下，本来就有，把它删除再放置到最后
- 本来没有，把第一个删除，它放置到最后
```js
class LRUCahce{
    constructor(n){
        this.size=n
        this.data=new Map()
    }

    put(domain,info){
        if(this.data.has(domain)){
            this.data.delete(domain)
            this.data.set(domain,info)
            return
        }
        if(this.data.size>=this.size){
            let firstKey=this.data.keys().next().value
            this.data.delete(firstKey)
        }
        this.data.set(domain,info)
    }
}

```

3. 接下来get方法
- 没有返回false
- 有把它先赋值，删除，再移动在最后

```js
class LRUCahce{
    constructor(n){
        this.size=n
        this.data=new Map()
    }

    put(domain,info){
        if(this.data.has(domain)){
            this.data.delete(domain)
            this.data.set(domain,info)
            return
        }
        if(this.data.size>=this.size){
            let firstKey=this.data.keys().next().value
            this.data.delete(firstKey)
        }
        this.data.set(domain,info)
    }

    get(domain){
        if(!this.data.has(domain)){
            return false
        }

        let info=this.data.get(domain)
        this.data.delete(domain)
        this.data.set(domain,info)
        return info
    }
}
```