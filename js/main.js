$(function(){
    // 메뉴
    $("nav>ul li").mouseenter(function(){
        $(this).children(".sub").stop().slideDown();
    })
    $("nav>ul li").mouseleave(function(){
        $(this).children(".sub").stop().slideUp();
    })

    

});
