document.addEventListener('DOMContentLoaded', function() {
  let stars = document.getElementById('star');
  let pic = document.getElementById('pic');

  // document.addEventListener('DOMContentLoaded', function () {
  //   var video = document.getElementById('video');
  
  //   video.addEventListener('loadeddata', function () {
  //     // 動画ロードした後
  //     video.style.display = 'none'; 
  //     document.body.classList.remove('home'); 
  //   });
  // });
  
  
  document.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.transform = 'translateX(' + value * 0.25 + 'px)';
  });
  document.addEventListener('mousemove', function (e) {
    // マウスの座標を計算
    var mouseXPercentage = (e.pageX / window.innerWidth) * 100;
    var mouseYPercentage = (e.pageY / window.innerHeight) * 100;
  
    // マウスによって動く
    stars.style.transform = 'translate(-' + mouseXPercentage / 10 + 'px, -' + mouseYPercentage / 10 + 'px)';
    pic.style.transform = 'translate(-' + mouseXPercentage / 5 + 'px, -' + mouseYPercentage / 5 + 'px)';
  });
});
