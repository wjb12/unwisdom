uw.extend({
    router: function () {
        var
            hash = '~', //hash的缓存

            lib = {}, //方法的缓存

            def = function () {}; //找不到路由的时候调用

        //获取hash里的参数部分
        function getPrams(hash) {
            var prams = {},
                i,
                curr;

            for (i in hash) {
                curr = hash[i].split('=');
                prams[curr[0]] = curr[1];
            }

            return prams;
        }

        //状态处理
        function popstate() {
            var
                laHash,
                h1,
                h2,
                func;

            laHash = location.hash;

            if (hash !== laHash) {

                hash = laHash;
                h1 = laHash.match(/\/.*\//);
                h2 = laHash.replace(/^#!?.*\//, '').split(/;|&/);

                func = typeof lib[h1] === 'function' ? lib[h1] : def;

                func.call(this, getPrams(h2));
            }
        }

        return {

            //添加一个路由
            add: function (key, func) {
                lib[key] = func;
                return this;
            },

            //路由跳转
            go: function (key) {
                location.hash = key;
            },

            //默认路由
            def: function (cb) {
                def = cb;
                return this;
            },

            //初始化
            init: function () {
                popstate();

                if ('onhashchange' in w) {
                    w.onhashchange = popstate;
                } else {
                    setInterval(function () {
                        popstate();
                    }, 100);
                }
            }
        };
    }
});