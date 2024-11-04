let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let ufo = document.getElementById('ufo');
let header = document.querySelector('header');
let h2 = document.querySelector('.sec h2');
let video = document.getElementById('video');
let videoContainer = document.getElementById('video-container');

document.addEventListener('mousemove', function (e) {
  // マウスの座標を計算
  var mouseXPercentage = (e.pageX / window.innerWidth) * 100;
  var mouseYPercentage = (e.pageY / window.innerHeight) * 100;
  // マウスによって動く
  ufo.style.transform = 'translate(-' + mouseXPercentage / 10 + 'px, -' + mouseYPercentage / 10 + 'px)';
  
});

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 0 + 'px';
  ufo.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value + 'px';
  header.style.top = value * 0.5 + 'px';

  let h2Value = value * 0.3;
  h2.style.transform = 'translateX(' + h2Value + 'px)';

  // let videoThreshold = window.innerHeight * 0.8; // Adjust as needed
  // let videoPosition = videoContainer.getBoundingClientRect();

  // if (videoPosition.top < videoThreshold && videoPosition.bottom > 0) {
  //   video.style.opacity = 1;
  // } else {
  //   video.style.opacity = 0;
  // }
}
)