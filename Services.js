//part1
$(document).ready(function(){
    $('.item2').addClass('text-info1'),
    $('.bi-search').mouseenter(function(){
        $(this).removeClass('text-info1'),
        $(this).addClass('text-silver1');
    }),
    $('.bi-search').mouseleave(function(){
        $(this).removeClass('text-silver1'),
        $(this).addClass('text-info1');
    }),
    $('.btn-navbar').mouseenter(function(){
        $(this).removeClass('btn-info'),
        $(this).addClass('btn-silver1');
    }),
    $('.btn-navbar').mouseleave(function(){
        $(this).removeClass('btn-silver1'),
        $(this).addClass('btn-info');
    })
})
//part3
$(document).ready(function(){
    $('.btn-card-part3').mouseenter(function(){
        $(this).removeClass('btn-secondary'),
        $(this).addClass('btn-info');
    }),
    $('.btn-card-part3').mouseleave(function(){
        $(this).removeClass('btn-info'),
        $(this).addClass('btn-secondary');
    })
})
//part4
$(document).ready(function(){
    $('.link-card1').mouseenter(function(){
        $('.img-card1-part4').css('transform','rotateY(180deg)');
    }),
    $('.link-card1').mouseleave(function(){
        $('.img-card1-part4').css('transform','rotateY(0deg)');
    }),
    $('.link-card2').mouseenter(function(){
        $('.img-card2-part4').css('transform','rotateY(180deg)');
    }),
    $('.link-card2').mouseleave(function(){
        $('.img-card2-part4').css('transform','rotateY(0deg)');
    }),
    $('.link-card3').mouseenter(function(){
        $('.img-card3-part4').css('transform','rotateY(180deg)');
    }),
    $('.link-card3').mouseleave(function(){
        $('.img-card3-part4').css('transform','rotateY(0deg)');
    }),
    $('.link-card4').mouseenter(function(){
        $('.img-card4-part4').css('transform','rotateY(180deg)');
    }),
    $('.link-card4').mouseleave(function(){
        $('.img-card4-part4').css('transform','rotateY(0deg)');
    })
})
//part5
$(document).ready(function(){
    $('.box1-part5').mouseenter(function(){
        $('.box1').removeClass('text-warning'),
        $('.box1').addClass('bg-warning text-light');
    }),
    $('.box1-part5').mouseleave(function(){
        $('.box1').removeClass('text-light bg-warning'),
        $('.box1').addClass('text-warning');
    }),
    $('.box2-part5').mouseenter(function(){
        $('.box2').removeClass('text-white bg-warning'),
        $('.box2').addClass('bg-transparent text-warning');
    }),
    $('.box2-part5').mouseleave(function(){
        $('.box2').removeClass('text-warning bg-transparent'),
        $('.box2').addClass('text-white bg-warning');
    }),
    $('.box3-part5').mouseenter(function(){
        $('.box3').removeClass('text-warning'),
        $('.box3').addClass('bg-warning text-light');
    }),
    $('.box3-part5').mouseleave(function(){
        $('.box3').removeClass('text-light bg-warning'),
        $('.box3').addClass('text-warning');
    })
})
//part6//footer
$(document).ready(function(){
    $('.item1-footer').mouseenter(function(){
        $(this).removeClass('text-light1'),
        $(this).addClass('text-info');
    }),
    $('.item1-footer').mouseleave(function(){
        $(this).removeClass('text-info'),
        $(this).addClass('text-light1');
    }),
    $('.item2-footer').mouseenter(function(){
        $(this).removeClass('text-light1'),
        $(this).addClass('text-info');
    }),
    $('.item2-footer').mouseleave(function(){
        $(this).removeClass('text-info'),
        $(this).addClass('text-light1');
    }),
    $('.item3-footer').mouseenter(function(){
        $(this).removeClass('text-light1'),
        $(this).addClass('text-info');
    }),
    $('.item3-footer').mouseleave(function(){
        $(this).removeClass('text-info'),
        $(this).addClass('text-light1');
    }),
    $('.item4-footer').mouseenter(function(){
        $(this).removeClass('text-light1'),
        $(this).addClass('text-info');
    }),
    $('.item4-footer').mouseleave(function(){
        $(this).removeClass('text-info'),
        $(this).addClass('text-light1');
    }),
    $('.item5-footer').mouseenter(function(){
        $(this).removeClass('text-light1'),
        $(this).addClass('text-info');
    }),
    $('.item5-footer').mouseleave(function(){
        $(this).removeClass('text-info'),
        $(this).addClass('text-light1');
    })
})