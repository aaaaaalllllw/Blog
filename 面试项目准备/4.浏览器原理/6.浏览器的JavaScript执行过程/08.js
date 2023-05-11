var a= 2
function add(b,c){
    console.trace()
    return a+b
}

function addAll(b,c){
    var d=10
    var result=add(b,c)
    return a+result+d
}

addAll(3,6)