jQuery('document').ready(function($)){

    var menuBtn= $('.menu-icon'),
    menu = $('nav li a');
    menuBtn.click(function(){
        if(menu.hasClass('nav')){
            menu.removeClass('nav');
        }
        else{
            menu.addClass('nav');
        }
        
    });
});