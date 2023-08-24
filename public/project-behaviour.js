const backgroundCircle = document.querySelector('.project-backgroundCircle')
const hamburgerMenu = document.querySelector('.project-hamburgerMenu')
const plusIcon = document.querySelector('.project-back-icon')
const navCheckbox = document.querySelector('#toggle-nav')
backgroundCircle.style.transform = "scale(0,0)";

plusIcon.addEventListener('click', ()=>{
    window.location.href = '/'
})


hamburgerMenu.addEventListener('mouseenter',()=>{
    backgroundCircle.style.transform = "scale(1,1)"
    // backgroundCircle.style.backgroundColor = 'white'
    plusIcon.style.filter = 'invert(1)'
    
    
} )
hamburgerMenu.addEventListener('mouseleave',()=>{
    backgroundCircle.style.transform = "scale(0,0)"
    // backgroundCircle.style.backgroundColor = 'black'
    plusIcon.style.filter = 'none'
    
} )

hamburgerMenu.addEventListener("mousemove", (e) => {
    const xPos = (-e.offsetX + 27.5)* 0.2;
    const yPos = (-e.offsetY + 27.5)*0.2;
    const xPosPlusIcon = xPos*0.5;
    backgroundCircle.style.transform = "scale(1,1) translate3d(" + xPos + "px, " + yPos + "px, 0)"
    plusIcon.style.transform = "translateX(" + xPosPlusIcon + "px";
});
