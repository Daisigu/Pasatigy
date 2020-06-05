
var cart = {}; //моя корзина

$('document').ready(function(){
    loadGoods();
          
});
function loadGoods() {
    //загружаю товары на страницу
    
    $.getJSON('goods.json', function (data) {
        //console.log(data);
        var out = '';
        for (var key in data){
            out+= '<div id="goods__item" class="goods__item">'
            out+='<img class="goods__img pt-3"src="'+data[key].image+'">';
             out+='<div class="pl-4 pt-4 row align-items-center justify-content-start">'
             out+='<ul class="d-flex justify-content-start">'
               out+= '<li><i class="fa fa-star" aria-hidden="true"></i>'
             out+='</li>'
             out+='<li><i class="fa fa-star" aria-hidden="true"></i>'
             out+='</li>'
             out+='<li><i class="fa fa-star" aria-hidden="true"></i>'
             out+='</li>'
             out+='<li><i class="fa fa-star" aria-hidden="true"></i>'
             out+='</li>'
             out+='<li><i class="fa fa-star" aria-hidden="true"></i>'
             out+='</li></ul>'
             out+='<i class="fa fa-comment-o ml-2" aria-hidden="true"> 8</i>'
          out+='</div>'
          out+='<div class="row pl-4">'
            out+= '<p class="text-left goods__card-title">'+data[key].name+'</p>'
             
          out+='</div>'
          out+='<p class="goods__price text-left row pl-4">'+data[key].cost+'<span>₽</span>'
          out+='</p>'
        out+= '<button class="goods__buy-button"><i class="fa fa-shopping-cart " aria-hidden="true"></i> Добавить в корзину</button>'
       out+='</div>'
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart() {
    //добавляем товар в корзину
    var articul = $(this).attr('data-art');
    if (cart[articul]!=undefined) {
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }

    console.log(cart);


}
$('.categories__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<i class="fa fa-angle-right fa-3x categories__right" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left fa-3x categories__left" aria-hidden="true"></i>'
  });
  $('.brands__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '<i class="fa fa-angle-right fa-3x brands__right" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left fa-3x brands__left" aria-hidden="true"></i>'
  });
  $('.banner__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '<i class="fa fa-angle-right fa-3x banner__right" aria-hidden="true"></i>',
      prevArrow: '<i class="fa fa-angle-left fa-3x banner__left" aria-hidden="true"></i>'
  });
      