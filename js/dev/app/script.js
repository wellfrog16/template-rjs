// 剧本

define(['jquery', 'swiper', 'text!../../template/test.html!strip', 'jquery.cookie', 'jquery.hammer'], function ($, swiper, testHtml) {
    var self = {}

    self.open = function () {
        console.log('加载完成！');

        $.cookie('QQ', '123456');


        console.log($.cookie('QQ'));

        $('#qq').hammer().on('tap', function () {
            $('body').append(testHtml);
        })
        

        // $.Deferred
    }

    return self;
});

















