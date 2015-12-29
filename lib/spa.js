function Spa(opt) {
    this.el = $(opt.el);
    this.convert = opt.convert;
    // this.router = router;

    //容器
    this.vessel = {};

}

//绑定事件
Spa.prototype.evt = function () {

    var that = this;

    this.el.on('click', '[v-click]', function () {
        var my = $(this);
        var hash = my.attr('v-click');
        var data = my.data();
        var options = that.vessel[hash];

        if (options.submit) {
            var loadStr = options.submit.split(':');
            var type = loadStr[0];
            var url = loadStr[1];
            $.ajax({
                type: type,
                data: data,
                url: url,
                success: function (res) {
                    console.log(res);
                }
            });
        } else {
            next(hash, data);
        }
    });



    function next(hash, data) {
        var url = [];
        for (i in data) {
            url.push(i + '=' + data[i]);
        }

        router.go('!' + hash + url.join('&'));
    }


    $(document).on('submit', 'form[v-form]', function () {


        alert('form');
        return false;
    });

};

//绑定路由 -> 加载模板
Spa.prototype.router = function (url, opt) {
    var that = this;
    router.add(url, function (o) {
        that.require(url, opt, o);
    });

    this.vessel[url] = opt;
};

//加载模板 -> 请求数据
Spa.prototype.require = function (url, opt, o) {

    var that = this;
    var template = opt.template ? ['text!' + opt.template] : [];
    var hasLoadUrl = !!opt.load;



    //请求模板
    require(template, function (text) {

        if (text) {
            //需要请求数据
            if (hasLoadUrl) {
                loadAjax(opt, o, function (res) {
                    getHtml(opt, text, o, res);
                });
            }

            //不需要请求数据
            else {
                getHtml(opt, text, o);
            }
        }
    });



    //获取html
    function getHtml(opt, text, o, res) {
        var html = that.convert.call(null, text, o, res);
        that.el.html(html);

        if (opt.callback) {
            opt.callback.call(null, text, o, res);
        }
    }
};


Spa.prototype.init = function () {
    router.init();
    this.evt();
};

//请求数据
function loadAjax(opt, o, callback) {
    var loadStr = opt.load.split(':');
    var type = loadStr[0];
    var url = loadStr[1];
    $.ajax({
        type: type,
        data: o,
        url: url,
        success: function (res) {
            callback.call(null, res);
        }
    });
}