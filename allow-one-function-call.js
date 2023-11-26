const once = function(fn) {
    let isFastTime = true;
	return function(...args){
        if(!isFastTime) return;
        isFastTime = false;
        return fn(...args)
    }
};