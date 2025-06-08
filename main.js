const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () => {
       navMenu.classList.add('show-menu');
    });

}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');

    });
}

//////////////////////////////////////////////////////////
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is heigher than 350 viweport height, ..
    this.scrollY >= 360 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

///////////////////
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    //reset: true // Animations repeat
})

sr.reveal(``)
sr.reveal(`.FindTheBest`, {delay: 700, distance:'100px', origin:'left'})
sr.reveal(`.background-image`, {delay: 700, distance:'100px', origin:'right'})

sr.reveal(`.background-up`, {delay: 700, distance:'100px', origin:'left'})
sr.reveal(`.Title-NewArrived`, {delay:700, distance:'100px', origin:'right'})
sr.reveal(`.background-look`, {delay: 700, distance:'100px', origin:'right'})
sr.reveal(`.Relaxed`, {delay: 700, distance:'100px', origin:'left'})

// sr.reveal(`.`, {delay: 700, distance:'100px', origin:'bottom', rotate:{z: -180} })
sr.reveal(`.home__ingredient`, {delay: 2000, interval: 100})
sr.reveal(`.about__data, .recipe__list, .contact__data`, {origin: 'right'})
sr.reveal(`.about__img, .recipe__img, .contact__image`, {origin: 'left'})
// sr.reveal(``, {interval: 100, })
// const sections = document.querySelectorAll('.fade-in-up');

//   const appearOnScroll = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//         observer.unobserve(entry.target); // Animate only once
//       }
//     });
//   }, {
//     threshold: 0.1
//   });

//   sections.forEach(section => {
//     appearOnScroll.observe(section);
//   });