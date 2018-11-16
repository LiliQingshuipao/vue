export default {
    set:function(target,key,val){
        var isValidArrayIndex = function(key){
            if(target&&target[key]){
                return true
            }else{
                return false
            }
        }
        if(Array.isArray(target)&&isValidArrayIndex(key)){
            target.length = Math.max(target.length,key)
            target.splice(key,1,val)
            return val
        }
        if(key in target && !(key in Object.prototype)){
            target[key] = val
            return val
        }
        var ob = (target).__ob__
        if(!ob){
            target[key] = val
            return val
        }
    }
}