const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

const videoContainerAnimation = () => {
  var videoContainer = document.querySelector('#videoContainer');
  var playBtn = document.querySelector('#play');

  videoContainer.addEventListener('mouseenter', () => {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videoContainer.addEventListener('mouseleave', () => {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });
  videoContainer.addEventListener('mousemove', (dets) => {
    gsap.to(playBtn, {
      left: dets.x - 50,
      top: dets.y - 80,
    });
  });
};
videoContainerAnimation();

const loadingAnimation = () => {
  gsap.from('#page1 h1', {
    y: 100,
    opacity: 0,
    delay: 0.8,
    duration: 0.8,
    stagger: 0.4,
  });
  gsap.from('#page1 #videoContainer', {
    scale: 0.9,
    opacity: 0,
    delay: 1.9,
    duration: 0.3,
  });
};
loadingAnimation();

function cursorAnimation() {
  document.addEventListener('mousemove', function (dets) {
    gsap.to('#cursor', {
      left: dets.x,
      top: dets.y,
    });
  });
  // document.querySelector("#child1").addEventListener("mouseenter",function(){

  // })

  // document.querySelector("#child1").addEventListener("mouseleave",function(){
  //   gsap.to("#cursor",{
  //     transform: 'translate(-50%,-50%) scale(0)'
  //   })
  // })
  document.querySelectorAll('.child').forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
      gsap.to('#cursor', {
        transform: 'translate(-50%,-50%) scale(1)',
      });
    });
    elem.addEventListener('mouseleave', function () {
      gsap.to('#cursor', {
        transform: 'translate(-50%,-50%) scale(0)',
      });
    });
  });
}
cursorAnimation();
