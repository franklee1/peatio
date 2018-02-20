$(function() {
    jQuery.noConflict();
    $('.coin--table-body button').click(function() {
        var curFrame = $(this).attr('data-target');
        if(curFrame != 'stu-frame') {
            $('#' + curFrame).show('slider');
            $('.insert-title')
                .html('<h4>'+ $(this).attr('data-title') + ' <span style=\"text-transform: capitalize;\">' + $(this).attr('data-name') + '</span></h4>').css('text-transform', 'uppercase');
        } else {
            $('#' + curFrame).show('slider');
            $('.insert-title')
                .html('<h4><span style="text-transform: capitalize;">'+ $(this).attr('data-name') + '</span></h4>').css('text-transform', 'uppercase');
        }

    });

    $('.close-btn').click(function() {
        $('.balance--window').hide('slider');
    });

    $('.carousel').carousel({
        interval: 5000000
    });

    // Coins modal coming-soon
    var cModal = $('.market-main-content table > tbody > tr > td:first-child');
    var cBox = $('.market-content .market-top-coin-boxes .m-coin-box');
    cModal.css('cursor', 'pointer');
    var coinsWin = [cBox, cModal];
    coinsWin.forEach(function(item) {
        $(item).click(function() {
            $('#coinsModalCs').modal('show');
        })
    })
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