$(window).load(function(){
    jQuery.noConflict();
    $('#csModal').modal('show');

    $('a[href="#logout"]').click(function(e) {
        e.preventDefault();
            $('#myModal-logout').modal('show');
    });
});

$(function() {
    $( "#tabs" ).tabs();

    var sb = $('#sub-menu a');
    sb.click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('#tabvanilla > ul').tabs({ fx: { height: 'toggle', opacity: 'toggle' } });
    $('#featuredvid > ul').tabs();

    $('#tabvanilla-1 > ul').tabs({ fx: { height: 'toggle', opacity: 'toggle' } });
    $('#featuredvid-1 > ul').tabs();

    $('#tabvanilla-5 > ul').tabs({ fx: { height: 'toggle', opacity: 'toggle' } });
    $('#featuredvid-5 > ul').tabs();

    $('#tabvanilla-6 > ul').tabs({ fx: { height: 'toggle', opacity: 'toggle' } });
    $('#featuredvid-6 > ul').tabs();

    $('#tabvanilla-7 > ul').tabs({ fx: { height: 'toggle', opacity: 'toggle' } });
    $('#featuredvid-7 > ul').tabs();

    var imh = $('a[href="#markets"]');
    imh.hover(function() {
        $('img[src="assets2/img/img-market.svg"]').attr('src', 'assets/img/img-markets-on.svg');
    }, function() {
        $('img[src="assets2/img/img-markets-on.svg"]').attr('src', 'assets/img/img-market.svg');
    });

    var imhL = $('a[href="#news"]');
    imhL.hover(function() {
        $('img[src="assets2/img/img-list.svg"]').attr('src', 'assets/img/img-list-on.svg');
    }, function() {
        $('img[src="assets2/img/img-list-on.svg"]').attr('src', 'assets/img/img-list.svg');
    });

    var imh = $('a[href="#dice"]');
    imh.hover(function() {
        $('img[src="assets2/img/img-bone.svg"]').attr('src', 'assets/img/img-bone-on.svg');
    }, function() {
        $('img[src="assets2/img/img-bone-on.svg"]').attr('src', 'assets/img/img-bone.svg');
    });

    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    var gen = $('#re-generate');
    var field = $('.form-control');
    gen.click(function(e) {
        e.preventDefault();
        var rand = function() {
            return Math.random().toString(36).substr(2);
        };
        var token = function() {
            return rand() + rand();
        };
        field.attr('placeholder', token());
    });

    $('a:contains("copy")').click(function() {
        $('textarea').each(function() {
            $(this).select();
            document.execCommand('copy');
        })
    });

    //
    $('a:contains("copy")').click(function() {
       var mess = $('textarea').val();
        alert(mess);
    });

});
var $demo1 = $('table.demo1');
$demo1.floatThead({
    scrollContainer: function($table){
        return $table.closest('.wrapper');
    }
});
$('a#change-dom').click(function(){ //click to remove
    $(this).parent().remove();
    //DOM has changed. must reflow floatThead
    $demo1.floatThead('reflow');
});