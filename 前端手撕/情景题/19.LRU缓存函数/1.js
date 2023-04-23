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