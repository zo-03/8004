//comingsoon
var comingsoon = anime({
  targets: '.c-comingsoon_bg',
  rotate:60,
  scale:[1,0.95,1],
  easing:'easeInOutElastic',
  dulation:10000,
  loop: true
});
//animation
//変数定義
var count = 0;
var icons = ['cart_l','cart_r','chart_l','chart_r','docs_l','docs_r','gift_l','gift_r','headphone_l','headphone_r','heart_l','heart_r','idea_l','idea_r','like_l','like_r','paperplane_l','paperplane_r','photo_l','photo_r','star_l','star_r','ticket_l','ticket_r'];
var eases = ['easeInOutQuad','easeInOutQuart','easeInOutQuint','easeInOutSine','easeInOutExpo','easeInOutElastic'];
function randomImage() {
  var icon = icons[Math.floor(Math.random() * icons.length)];
  var imgsrc = '<img src="assets/images/animation/img_' + icon + '.png" alt="" class="c-anime_parts">';
  return imgsrc;
};
var canimePlay = anime({//icon animation
  targets: '.c-anime_placeholder',
  easing: function(){
    var easingVal = eases[Math.floor(Math.random() * eases.length)];
    return easingVal;
  },
  delay: function() { return anime.random(0, 2000); },
  duration: function() { return anime.random(3000, 5000); },
  translateY: -800,//function() { return anime.random(-300, -200); },
  opacity:[0,0.7],
  autoplay: false
});
var canimeReverse = anime({//icon animation
  targets: '.c-anime_placeholder',
  easing: function(){
    var easingVal = eases[Math.floor(Math.random() * eases.length)];
    return easingVal;
  },
  delay: function() { return anime.random(0, 2000); },
  duration: function() { return anime.random(3000, 5000); },
  translateY: -800,//function() { return anime.random(-300, -200); },
  opacity:[0,0.7],
  direction: 'reverse',
  autoplay: false
});
//初回処理
$(function() {
  $('.c-anime_placeholder').each(function() {
      $(this).append(randomImage);//icon randamize
      $(this).ready(canimePlay.play);
  });
});
//ループ処理
  $(function() {
    $('.c-anime_placeholder').each(function() {
      canimePlay.complete = function() {
        $('.c-anime_placeholder').empty();
        $('.c-anime_placeholder').append(randomImage);
        canimeReverse.restart();
      };
      canimeReverse.complete = function() {
        $('.c-anime_placeholder').empty();
        $('.c-anime_placeholder').append(randomImage);
        canimePlay.restart();
      };
    });
  });
