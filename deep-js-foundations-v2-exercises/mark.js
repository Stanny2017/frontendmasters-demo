var method = (function defineMethod() {
    var instance = new WeakMap();

    return function method(obj, methodName, fn) {
        Object.defineProperty(obj, methodName, {
            get() {
                if (!instance.has(this)) {
                    instance.set(this, {});
                }

                var methods = instance.get(this);

                if (!(methodName in methods)) {
                    methods[methodName] = fn.bind(this);
                }

                return methods[methodName];
            }
        })
    }
})();

function bindMethods(obj) {
    for (let ownProp of Object.getOwnPropertyNames(obj)) {
        if (typeof obj[ownProp] === 'function') {
            method(obj, ownProp, obj[ownProp]);
        }
    }
}

var obj = {
    name:'dp',
    age:23,
    job:'front-end',
    weigth:150,
}

console.log(Object.getOwnPropertyNames(obj))