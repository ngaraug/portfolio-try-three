const backgroundCircle = document.querySelector('.project-backgroundCircle')
const hamburgerMenu = document.querySelector('.project-hamburgerMenu')
const plusIcon = document.querySelector('.project-back-icon')
const navCheckbox = document.querySelector('#toggle-nav')
backgroundCircle.style.transform = "scale(0,0)";

plusIcon.addEventListener('click', ()=>{
    window.location.href = '/';
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


// animations
const options = {
    threshold: 0.5,
}

const multipleIntersectionObserver = new IntersectionObserver((entries)=>{
    entries.forEach((card)=>{
        if(card.isIntersecting){
            card.target.classList.add('reveal')
        }else{
            // card.target.classList.remove('reveal')
        }
        
    })
}, options)

function observeElementsOfClass(classArray){
    classArray.forEach((className)=>{
        multipleIntersectionObserver.observe(className);
    })
}

const singleIntersectionObserver = new IntersectionObserver((entries)=>{
    const card = entries[0]
    if(card.isIntersecting){
        card.target.classList.add('reveal')
    }
})


// IObserve for project-page-title class
const projectPageTitle = document.querySelector('.project-page-title')
singleIntersectionObserver.observe(projectPageTitle)

// IObserve for project-page-date class 
const projectPageDate = document.querySelector('.project-page-date')
setTimeout(() => {
    singleIntersectionObserver.observe(projectPageDate)
}, 200);

// IObserve for project-page-desc class 
const projectPageDesc = document.querySelector('.project-page-desc')
setTimeout(() => {
    singleIntersectionObserver.observe(projectPageDesc)
}, 300);


// IObserve for project-page-tech-container class 
const projectPageTechContainer = document.querySelector('.project-page-tech-container')
setTimeout(() => {
    singleIntersectionObserver.observe(projectPageTechContainer)
}, 400);

// IObserve for project-page-link class 
const projectPageLink = document.querySelectorAll('.project-page-link')
setTimeout(() => {
    observeElementsOfClass(projectPageLink)
}, 500);

// IObserver for images class
const images = document.querySelectorAll(".project-page-image")
setTimeout(() => {
    observeElementsOfClass(images)
}, 650);


// IObserver for project-page-screenshots class
const projectPageScreenshots = document.querySelectorAll('.project-page-screenshots')
setTimeout(() => {
    observeElementsOfClass(projectPageScreenshots)
}, 600);

