(function () {

    var settings = {
        inClass: 'bounce',
        outClass: 'bounceOut',
        position: 'lowerright',
        color: 'black'
    };

    function Message(opt) {
        opt = $.extend({}, settings, opt);
        var oldEls = $('.uw-message-' + opt.position); //老的Div
        var box = this.appendBox(opt);
        var boxHeight = box.outerHeight();
        this.bindClose(box, opt);
        this.move(oldEls, boxHeight, opt);
    }

    //移动之前产生的div
    Message.prototype.move = function (oldEls, boxHeight, opt) {
        var that = this;
        oldEls.each(function () {
            var my = $(this);
            if (opt.position === 'lowerright') {
                that.close(my, opt);
            } else {
                moveOne(my, opt);
            }
        });

        function moveOne(my, opt) {
            var top = my.position().top;
            var height = boxHeight + 10;
            height = opt.position === 'topright' ? height : -height
            my.stop(true).animate({
                top: top + height
            }, 200);
        }
    }


    Message.prototype.appendBox = function (opt) {
        var box = $(this.creatBox(opt)).appendTo('body');
        if (opt.position === 'lowerleft') {
            box.css('top', $(window).height() - box.outerHeight() - 20);
        };
        return box;
    };


    //返回Html字符串
    Message.prototype.creatBox = function (opt) {
        var tpl = '<div class="uw-message uw-message-#{position}"><div class="animated uw-message-box uw-message-#{color} #{inClass}">';
        tpl += opt.title ? '<div class="uw-message-h2">#{title}</div>' : '';
        tpl += opt.content ? '<div class="uw-message-nav">#{content}</div>' : '';
        tpl += '<div></div>';
        return uw.template(tpl, opt);
    };



    Message.prototype.bindClose = function (box, opt) {
        var that = this;
        setTimeout(function () {
            that.close(box, opt);
        }, 3000);
    }

    //绑定关闭事件
    Message.prototype.close = function (box, opt) {
        box.find('.uw-message-box').addClass(opt.outClass);
        setTimeout(function () {
            box.remove();
        }, 6000);
    };

    uw.extend({
        message: function (opt) {
            return new Message(opt);
        }
    });
}());