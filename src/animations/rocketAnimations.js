import anime from 'animejs';



export const generateRocketTimeline = (target) => anime.timeline({
  targets: target,
  easing: 'easeInCubic',
  autoplay: false,
})
.add({
  translateX: [0, -20],
  translateY: [0,-80],
  rotate: [0, -90],
  duration: 650,
  easing: 'linear'
})
.add({
  translateX: [-20, -2000],
  duration: 850,
})
.add({
  translateX: [-2000, 2000],
  translateY: [200, 200],
  scale: [3, 3],
  rotate: [90, 90],
  duration: 2000,
})
.add({
  translateX: [400, 0],
  translateY: [200, -100],
  rotate: [-50, 0],
  scale: [0.001,1],
  duration: 3500,
})
.add({
  translateY: [-100, 0],
  easing: 'easeOutQuad',
  duration: 2500
})

export const generateSmokeAnimation = (target, right, loopCount) => anime.timeline({
    targets: target,
    easing: 'easeInCubic',
    autoplay: false,
    duration: 400,
    loop: loopCount,
  }).add({
      opacity: [0, 1],
      translateX: [0, right ? 10 : -10],
      translateY: [0, 10]
}).add({
    opacity: 0
});