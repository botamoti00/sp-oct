const isMobile = !!new MobileDetect(window.navigator.userAgent).mobile();

// スクロールするとヘッダーナビの大きさが変化
if (isMobile) {
    $(function() {
        $(window).on('load scroll', function() {
            var scrollPos = $(this).scrollTop();
            if ( scrollPos > 60 ) { //　見出しと被らないように調整
		        $('.header-wrap').addClass('is-animation');
	        } else {
		        $('.header-wrap').removeClass('is-animation');
	    }
        });
    });	
}else{
    $(function() {
        $(window).on('load scroll', function() {
            var scrollPos = $(this).scrollTop();
            if ( scrollPos > 90 ) { //　見出しと被らないように調整
		        $('.header-wrap').addClass('is-animation');
	        } else {
		        $('.header-wrap').removeClass('is-animation');
	        }
        });
    });	
}
// ヘッダーの高さ分だけコンテンツを下げる
$(function() {
    var height=$("#header").height();
    $(".content-wrap").css("margin-top", height + 20);//20pxだけ余裕をもたせる
});

// スムーススクロール
$(function(){
    const headerHight = 150;
    $('a[href^="#"]').click(function(){ 
        const speed = 900; 
        const href= $(this).attr("href"); 
        const target = $(href == "#" || href == "" ? 'html' : href); 
        const position = target.offset().top-headerHight; 
        $("html, body").animate({scrollTop:position}, 'slow', 'swing'); 
        return false; 
    });
});

//メニューをクリックでcollapseを閉じる
$('.navbar-nav>li>a , .dropdown-menu>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// totopアニメーション
$('.footer-to-top').on('click',(e) => {
    e.preventDefault();
    $('.standby').addClass('fadeOut');
    $('.flying')
        .css('display','block')
        .addClass('fadeIn-bounceOutUp');
        
    setTimeout(()=> {
        const speed = 1500; 
        $("html, body").animate({scrollTop:0}, speed, "swing"); 
    }
        ,1100);
    setTimeout(()=> {
        $('.standby').removeClass('fadeOut');
        $('.flying')
            .css('display','none')
            .removeClass('fadeIn-bounceOutUp');  
    }
        ,2000);
});