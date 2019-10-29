// Your code goes here


// Prevent Page link default action
const navLinks = document.querySelectorAll(".nav-link").forEach( e => {
    e.addEventListener('click', e => {
        
        
        e.preventDefault();
        e.stopPropagation();
    });
});
const nav = document.querySelector(".nav");
nav.addEventListener('click', e =>{
    e.target.style.background = "brown";
});

// * [ ] `mouseover`

const images = document.querySelectorAll('img');
console.log(images);
images.forEach(e =>{e.addEventListener('mouseover', e =>{
    e.target.style.transform = 'scale(0.7)';
})});
images.forEach(e => {e.addEventListener('mouseleave', e =>{
    e.target.style.transform = '';
})});

const logoHeading = document.querySelector('.logo-heading');
    
logoHeading.addEventListener('dblclick', e => {
      
        e.target.style.transform = 'rotate(180deg)';

    });


const thisWindow = document.querySelector("body");
thisWindow.addEventListener('keydown', e => {
    e.target.style.background = "green";
})

// * [ ] `wheel`

// * [ ] `load`

// * [ ] `resize`
// * [ ] `scroll`

