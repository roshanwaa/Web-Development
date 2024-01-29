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
