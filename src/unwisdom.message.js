(function () {
<<<<<<< HEAD
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
=======

    //消息的情况
    var remove = {
        lowerright: function (obj) {
            obj.find('.uw-message-box').addClass('tada');
            setTimeout(function () {
                obj.remove();
            }, 299);
        },
        lowerleft: function (obj) {
            obj.addClass('uw-message-lowerleft-out');
            setTimeout(function () {
                obj.remove();
            }, 2000);
        },
        topright: function (obj) {
            obj.find('.uw-message-box').addClass('flipOutX');
            setTimeout(function () {
                obj.remove();
            }, 2000);
        }
    };

    var move = {
        topright: function (height, oldEls, template) {
            template.find('.uw-message-box').addClass('flipInX');
            oldEls.each(function () {
                var my = $(this);
                var top = my.position().top;
                top += height + 10;
                my.stop(true).animate({
                    top: top
                }, 300);
            });

        },
        lowerleft: function (height, oldEls) {
            oldEls.each(function () {
                var my = $(this);
                var bottom = my.css('bottom').replace(/\D+/, '');
                bottom = bottom - -10 + height;
                my.stop(true).animate({
                    bottom: bottom
                }, 170);
            });
        },
        lowerright: function (height, oldEls) {
            remove.lowerright(oldEls);
>>>>>>> origin/master
        }
    };

    Message.prototype.appendBox = function (opt) {
        var box = $(this.creatBox(opt)).appendTo('body');
        if (opt.position === 'lowerleft') {
            box.css('top', $(window).height() - box.outerHeight() - 20);
        };
        return box;
    };

<<<<<<< HEAD
    //返回Html字符串
    Message.prototype.creatBox = function (opt) {
        var tpl = '<div class="uw-message uw-message-#{position}"><div class="animated uw-message-box uw-message-#{color} #{inClass}">';
        tpl += opt.title ? '<div class="uw-message-h2">#{title}</div>' : '';
        tpl += opt.content ? '<div class="uw-message-nav">#{content}</div>' : '';
        tpl += '<div></div>';
        return uw.template(tpl, opt);
    };
=======
    function creat(opt) {
        var oldEls = $('.uw-message-' + opt.position);
        var timer = timerFun();
        var template = ['<div class="uw-message"><div class="uw-message-box">'];
        opt.title && template.push('<div class="uw-message-h2">' + opt.title + '</div>');
        opt.content && template.push('<div class="uw-message-nav">' + opt.content + '</div>');
        template.push('</div></div>');
        template = $(template.join(''));

        template
            .addClass('uw-message-' + opt.position)
            .find('.uw-message-box')
            .addClass('uw-message-' + opt.color)
            .end()
            .appendTo('body')
            .hover(function () {
                clearTimeout(timer);
            }, function () {
                timer = timerFun();
            });


        var height = template.outerHeight();
        move[opt.position](height, oldEls, template); //先把之前的移动一下

        function timerFun() {
            return setTimeout(function () {
                remove[opt.position](template);
            }, 3000);
        }
>>>>>>> origin/master

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