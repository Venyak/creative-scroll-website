gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    '.hero-section',
    { y: 0, opacity: 1 },
    {
      opacity: 0,
      y: -300,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '820',
        scrub: true,
      },
    },
  );

  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');

  itemsL.forEach((item) => {
    gsap.fromTo(item, { x: -100, opacity: 0 }, {
      x: 0, opacity: 1,
      scrollTrigger: {
        start: '-850',
        end: '-100',
        trigger: item,
  
        scrub: true,
      }
     })
  });
}
