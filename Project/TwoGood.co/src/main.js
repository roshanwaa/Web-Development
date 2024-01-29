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
      top: dets.y - 60,
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
    scale: 0.8,
    opacity: 0,
    delay: 1.5,
    duration: 0.3,
  });
};
loadingAnimation();
