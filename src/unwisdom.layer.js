(function () {

    function setDivCenter(obj) {
        obj.css({
            marginLeft: -obj.outerWidth() / 2,
            marginTop: -obj.outerHeight() / 2,
        });
    }

    uw.extend({
        tip: function (msg) {
            $('div.uw-layer-tip').remove();
            var tipDiv = $('<div class="uw-layer-tip zoomIn"></div>')
                .text(msg)
                .appendTo('body');
            setDivCenter(tipDiv);
            setTimeout(function () {
                tipDiv.fadeOut();
            }, 3000);
        },
        alert: function (msg) {

        },
        confirm: function (msg, callback) {

        },
        box: function () {

        },
        form: function () {

        },
        iframe: function () {

        }
    });
}());