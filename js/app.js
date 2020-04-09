var app = (function() {
    var $font_li = $('ul').find('li[data-x="2"]'),
    $font = $('#font'),
    $menus = $('.menus'),
    $family = $('#family'),
    $size = $('#size'),
    $ok = $('.btn-ok'),
    $shape = $('#shape');

    $font_li.click(function() {
        $font.css({ display: 'inline-block' });
        $menus.css({ display: 'none' });
    })

    $ok.click(function() {
        console.log($shape.val());
        console.log($("textarea").css("font-family"));

        switch($shape.val()) {
            case '常规' :
                $('textarea').css({"font-family":$family.val(),"font-size":$size.val()+"pt","font-weight":"100","font-style":"normal"});
                break;
            case '粗体' :
                $('textarea').css({"font-family":$family.val(),"font-size":$size.val()+"pt","font-weight":"600","font-style":"normal"});
                break;
            case '斜体' :
                $('textarea').css({"font-family":$family.val(),"font-size":$size.val()+"pt","font-style":"italic","font-weight":"100"});
                break;
            default :
                $('textarea').css({"font-family":$family.val(),"font-size":$size.val()+"pt","font-style":"italic","font-weight":"600"});
                break;
        }
        $font.css({ display: 'none' });
    })
})
