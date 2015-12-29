uw.extend({
    noop: function () {},
    template: function (template, data) {
        return template.replace(/#\{([\s\S]+?)\}/g, function (a, b) {
            return data[b];
        });
    }
});

//动态添加css
(function () {
    var links = [];
    var head = document.getElementsByTagName("head")[0];
    uw.extend({
        loadCss: function (url) {
            if ($.inArray(url, links) < 0) {
                var link = document.createElement('link');
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = url;
                head.appendChild(link);
            }
        }
    });
}());