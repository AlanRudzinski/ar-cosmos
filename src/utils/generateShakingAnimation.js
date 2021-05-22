import anime from 'animejs';

export const generateShakingAnimation = (steps) => {
    const timeline = anime.timeline({
        target: '.rocket',
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
    for (let index = 0; index < steps; index++) {
        timeline.add({ 
            translateX: getRandomInt(-3, 3),
            rotate: getRandomInt(-3, 3)        
    })}

    return timeline;
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
  