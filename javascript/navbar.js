$(window).scroll(function(){
            if($(this).scrollTop() > 100){
                $('header').addClass('sticky')
            } else{
                $('header').removeClass('sticky')
            }
        });