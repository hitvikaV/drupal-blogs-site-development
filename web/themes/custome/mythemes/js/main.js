jQuery(document).ready(function($) {
    $('#block-mythemes-main-menu li').hover(function(){
        $(this).find('.sub-menu').toggle()
        console.log('hiii')
    })

    $(".my-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true
    });

    $(".test").find("a").addClass('fa fa-bars')


    // $(".slick-prev").click(function(){
    //   $(".slick-prev").addClass("border-none")
    //   console.log("hello")
    // })


   
    // $(function() {

    //   var inWrap = $('.inner-wrapper'),
    //   $slide = $('.slide');
    
    
    //   function slideNext() {
    
    //     inWrap.animate({left: '-200%'}, 200, function() {
      
    //       inWrap.css('left', '-100%');
      
    //       $('.slide').last().after($('.slide').first());
      
    //     });
      
    //   }
    
    
    //    //Enabling auto scroll
    //    sliderInterval = setInterval(slideNext, 4000);
    
    
    
    //   $('.prev').on('click', function() {
    
    //     inWrap.animate({left: '0%'}, 200, function() {
    
    //       inWrap.css('left', '-100%');
    
    //       $('.slide').first().before($('.slide').last());
    
    //     });
    //   });
    
    
    //   $('.next').on('click', function() {
    
    //     clearInterval(sliderInterval);
    
    //     slideNext();
    //     console.log($slide)
    
    //   });
    
    
    // });
    // $('.my-slider').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    // });
      
});



