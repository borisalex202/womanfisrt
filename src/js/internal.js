(function($) {
    var elements = {
        header: $('.site-header'),
        headerFixed: $('.site-header-fixed'),
        mainMenu: $('.main-menu'),
        searchBlockFixed: $('.search-block'),
        popup: $('.popup')
        },
        options = {
            widthScroll: scrollbarWidth(),
            headerHeightFixed: elements.headerFixed.height()
        },
        answer = {};

    @@include('./partials/_map.js')
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

        calcHeaderHeight();
    });
    calcHeaderHeight();

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

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - options.headerHeightFixed
                }, 700);
                return false;
            }
        }
    });

    $('.get-answer').on('click', function () {
        var questionNumber = $(this).closest('.question').data('question');
        answer[questionNumber] = $(this).closest('.question').find('input:checked').val();
        if($(this).closest('.question').find('input').is(':checked') && !$(this).closest('.question').is(':last-child')) {
            $(this).closest('.question').removeClass('active').next().addClass('active');
        }
    });

    $('.js-select').each(function(){
        var flag = 0,
            optionHeight = 0;

        $(this).styler({
            onSelectOpened: function(){
                var list = $(this).find('.jq-selectbox__dropdown ul'),
                    jspContainer = $(this).find('.jspContainer'),
                    jsSelect = $(this).closest('.js-select'),
                    dropdown = jsSelect.find('.jq-selectbox__dropdown'),
                    dropdownHeight = dropdown.height();

                if(flag==0) {
                    jsSelect.data('option', dropdownHeight)
                    optionHeight = jsSelect.data('option');
                }
                flag = 1;

                jspContainer.height(optionHeight);
                list.jScrollPane();
            },
            onSelectClosed: function() {
                var list = $(this).find('.jq-selectbox__dropdown ul');

                list.jScrollPane('destroy');
            }
        });
    });

    function scrollbarWidth() {
        var documentWidth = parseInt(document.documentElement.clientWidth);
        var windowsWidth = parseInt(window.innerWidth);
        var scrollbarWidth = windowsWidth - documentWidth;
        return scrollbarWidth;
    }

    function calcHeaderHeight() {
        if($(document).width() >= 992) {
            options.headerHeightFixed = elements.headerFixed.height()
        } else if($(document).width() >= 701 && $(document).width() <= 991) {
            options.headerHeightFixed = elements.header.height();
        } else if ($(document).width() <= 700) {
            options.headerHeightFixed = elements.header.height();
        }
    }

})(jQuery);
