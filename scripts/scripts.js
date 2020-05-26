function scrollFooter(scrollY, heightFooter) {

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

$( document ).ready(function() {

    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    $('.header-container').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
    
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $(".overlay").toggleClass("open");
        $(".overlay a").toggleClass("open");
        
    });

    $("#work").click(function() {
        $("#nav-icon").removeClass("open");
        $(".overlay").removeClass("open");
        $(".overlay a").removeClass("open");
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#content").offset().top
        }, 1000);
    });

    window.addEventListener('click', function(e){   
        if (document.getElementById('overlay').contains(e.target) || document.getElementById('menu-container').contains(e.target)){
            
        } else{
            $("#nav-icon").removeClass("open");
            $(".overlay").removeClass("open");
            $(".overlay a").removeClass("open");
        }
    });
    
});