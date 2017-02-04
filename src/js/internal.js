(function($) {
    var elements = {
        header: $('.site-header'),
        headerFixed: $('.site-header-fixed'),
        mainMenu: $('.main-menu'),
        searchBlockFixed: $('.search-block'),
        popup: $('.popup')
        },
        options = {
            widthScroll: scrollbarWidth()
        };

    $(window).scroll(function () {
        var headerHeight = elements.header.height();

        if($(window).scrollTop() > headerHeight) {
            elements.headerFixed.addClass('show');
        } else {
            elements.headerFixed.removeClass('show');
        }
    });
    $(window).resize(function () {
        if($(document).width() >= 1200 && $(document).width() <= 1439) {
            var widthRow = $('.site-header-fixed .row').width();
            $('.site-header-fixed .search-block.active .search-input').width(widthRow - 289);
        } else {
            $('.site-header-fixed .search-input').attr('style', '');
        }
    });

    $(document).mouseup(function (e){
        var el = $('.icon-menu, .main-menu');
        if (!el.is(e.target)
            && el.has(e.target).length === 0) {
            el.removeClass('active');
        }
    });

    $(document).mouseup(function (e){
        var el = $('.search-icon, .search-input');
        if (!el.is(e.target)
            && el.has(e.target).length === 0) {
            elements.searchBlockFixed.removeClass('active');
        }
    });

    $('[data-toggle]').on('click', function(){
        var el = $(this).data('toggle'),
            className = $(this).data('class-name');

        if(className){
            $(el).toggleClass(className);
        } else {
            $(el).toggleClass('active');
        }
    });

    $('.icon-menu, .search-icon').on('click', function () {
        if($(document).width() <= 991) {
            $('body').addClass('no-scroll').css('padding-right', options.widthScroll);
            $('.site-header').css('padding-right', options.widthScroll);
        }
    });
    $('.popup-close').on('click', function () {
        $('.popup').removeClass('active');
        $('body').removeClass('no-scroll').css('padding-right', 0);
        $('.site-header').css('padding-right', 0);
    });
    $('.icon-menu').on('click', function () {
        $(this).toggleClass('active');
        elements.mainMenu.toggleClass('active');
    });

    $('.search-icon').on('click', function (e) {
        e.preventDefault();
        $(this).closest(elements.searchBlockFixed).addClass('active');

        if($(document).width() >= 1200 && $(document).width() <= 1439) {
            var widthRow = $('.site-header-fixed .row').width();
            $('.site-header-fixed .search-input').width(widthRow - 289);
        }
    });

    function scrollbarWidth() {
        var documentWidth = parseInt(document.documentElement.clientWidth);
        var windowsWidth = parseInt(window.innerWidth);
        var scrollbarWidth = windowsWidth - documentWidth;
        return scrollbarWidth;
    }

})(jQuery);
