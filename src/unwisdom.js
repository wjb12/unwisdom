(function (w, __) {

    __.extend = function (o) {
        if (Object.prototype.toString.call(o) === "[object Object]") {
            for (var i in o) {
                this[i] = o[i];
            }
        }
    };

    w.uw = __;

})(window, function () {});