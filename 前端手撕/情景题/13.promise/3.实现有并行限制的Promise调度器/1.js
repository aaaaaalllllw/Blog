class Scheduler{
    constructor(){
        this.queue=[]
        this.maxCount=2
        this.runCounts=0
    }
    add(promiseCreator){
        this.queue.push(promiseCreator)
    }
    
}