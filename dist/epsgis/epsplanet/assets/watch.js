(function () {
    //给对象增加watch和unwatch方法 by ruir
    //直接引用该js会导致earthSdk无法使用
    //因为它内部也是用得类似方法
    if (!Object.prototype.watch)
        Object.prototype.watch = function (prop, handler) {
            var oldval = this[prop], newval = oldval,
                getter = function () {
                    return newval;
                },
                setter = function (val) {
                    oldval = newval;
                    return newval = handler.call(this, prop, oldval, val);
                };
            if (delete this[prop]) { // 不能监控常量
                if (Object.defineProperty) // ECMAScript 5
                    Object.defineProperty(this, prop, {
                        get: getter,
                        set: setter
                    });
                else if (Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__) { // legacy
                    Object.prototype.__defineGetter__.call(this, prop, getter);
                    Object.prototype.__defineSetter__.call(this, prop, setter);
                }
            }
        };

    // object.unwatch
    if (!Object.prototype.unwatch)
        Object.prototype.unwatch = function (prop) {
            var val = this[prop];
            //移除监控
            delete this[prop];
            //重新赋值
            this[prop] = val;
        };
})();