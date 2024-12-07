const once = function(fn) {
    let isFirstTime = true;
	return function(...args){
        if(!isFirstTime) return;
        isFirstTime = false;
        return fn(...args)
    }
};