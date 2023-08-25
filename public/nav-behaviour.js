// Plus icon start

const backgroundCircle = document.querySelector('.backgroundCircle')
const hamburgerMenu = document.querySelector('.hamburgerMenu')
const plusIcon = document.querySelector('.plus-icon')
const links = document.querySelectorAll(".link")
const navCheckbox = document.querySelector('#toggle-nav')
backgroundCircle.style.transform = "scale(0,0)";

const introContainer = document.querySelector('#intro-container')

const cardsContainer = document.querySelector('#nav-listContainer')
const linksContainer = document.querySelector('.nav-list')
const toggleNav = document.querySelector('#toggle-nav')


hamburgerMenu.addEventListener('mouseenter',()=>{
    backgroundCircle.style.transform = "scale(1,1)"
    // backgroundCircle.style.backgroundColor = 'white'

    plusIcon.style.filter = 'none'
    
} )
hamburgerMenu.addEventListener('mouseleave',()=>{
    backgroundCircle.style.transform = "scale(0,0)"
    // backgroundCircle.style.backgroundColor = 'black'
    
    plusIcon.style.filter = 'invert(1)'
} )

hamburgerMenu.addEventListener("mousemove", (e) => {
    const xPos = (-e.offsetX + 27.5)* 0.2;
    const yPos = (-e.offsetY + 27.5)*0.2;
    const xPosPlusIcon = xPos*0.5;
    backgroundCircle.style.transform = "scale(1,1) translate3d(" + xPos + "px, " + yPos + "px, 0)"
    plusIcon.style.transform = "translateX(" + xPosPlusIcon + "px";
});

let isFirstClick = true

let introContZIndexvalue = 1
hamburgerMenu.addEventListener('click', ()=>{
    // hamburgerMenu.style.transform = 'rotateZ(225deg)' 
    hamburgerMenu.classList.toggle('hamburgerMenuClicked')
    setTimeout(()=>{
        if(introContZIndexvalue == 1){
            introContainer.style.zIndex = -1
            introContZIndexvalue = -1
        }else{
            introContainer.style.zIndex = 1
            introContZIndexvalue = 1
        }
    }, 400)
    
    if(isFirstClick){
        const linksPostition = linksContainer.offsetHeight 
        setTimeout(loadCardsAtStart, 100)
        linksContainer.scrollTo(0, linksPostition)
        isFirstClick = false
    }
    
})

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        hamburgerMenu.classList.toggle('hamburgerMenuClicked')
        navCheckbox.checked = false;
        console.log(navCheckbox.checked)
        console.log('hamburger clicked')
        setTimeout(()=>{
            if(introContZIndexvalue == 1){
                introContainer.style.zIndex = -1
                introContZIndexvalue = -1
            }else{
                introContainer.style.zIndex = 1
                introContZIndexvalue = 1
            }
        }, 400)
        
    })
})



// plus icon end

// -- Infinite scroll start
linksContainer.onscroll = ()=> {
    firstCardObserver.observe(document.querySelector('.link:first-child'))
    lastCardObserver.observe(document.querySelector('.link:last-child'))
}

const firstOptions = {
    root: linksContainer,
    threshold: 1,
    rootMargin: '1200px'
}

function loadCardsAtStart(){
    console.log("Loaded at start")
    for(let i=0; i<5; i++){
        const link = document.createElement('a');
        link.textContent = '// ABOUT'
        link.href = '#about'
        link.classList.add('link')
        linksContainer.prepend(link)
        link.addEventListener('click',()=>{
            hamburgerMenu.classList.toggle('hamburgerMenuClicked')
            navCheckbox.checked = false;
            setTimeout(()=>{
                if(introContZIndexvalue == 1){
                    introContainer.style.zIndex = -1
                    introContZIndexvalue = -1
                }else{
                    introContainer.style.zIndex = 1
                    introContZIndexvalue = 1
                }
            }, 400)
        })

        const link1 = document.createElement('a');
        link1.textContent = '// SKILLS'
        link1.href = '#skills'
        link1.classList.add('link')
        linksContainer.prepend(link1)
        link1.addEventListener('click',()=>{
            hamburgerMenu.classList.toggle('hamburgerMenuClicked')
            navCheckbox.checked = false;
            setTimeout(()=>{
                if(introContZIndexvalue == 1){
                    introContainer.style.zIndex = -1
                    introContZIndexvalue = -1
                }else{
                    introContainer.style.zIndex = 1
                    introContZIndexvalue = 1
                }
            }, 400)
        })

        const link2 = document.createElement('a');
        link2.textContent = '// PROJECTS'
        link2.href = '#projetcs'
        link2.classList.add('link')
        linksContainer.prepend(link2)
        link2.addEventListener('click',()=>{
            hamburgerMenu.classList.toggle('hamburgerMenuClicked')
            navCheckbox.checked = false;
            setTimeout(()=>{
                if(introContZIndexvalue == 1){
                    introContainer.style.zIndex = -1
                    introContZIndexvalue = -1
                }else{
                    introContainer.style.zIndex = 1
                    introContZIndexvalue = 1
                }
            }, 400)
        })
        
    }
}

function loadCardsAtEnd(){
    console.log('end')
    for(let i=0; i<5; i++){
        const link = document.createElement('a');
        link.textContent = '// ABOUT'
        link.href = '#about'
        link.classList.add('link')
        linksContainer.append(link)
        link.addEventListener('click',()=>{
            hamburgerMenu.classList.toggle('hamburgerMenuClicked')
            navCheckbox.checked = false;
            setTimeout(()=>{
                if(introContZIndexvalue == 1){
                    introContainer.style.zIndex = -1
                    introContZIndexvalue = -1
                }else{
                    introContainer.style.zIndex = 1
                    introContZIndexvalue = 1
                }
            }, 400)
        })

        const link1 = document.createElement('a');
        link1.textContent = '// SKILLS'
        link1.href = '#skills'
        link1.classList.add('link')
        linksContainer.append(link1)
        link1.addEventListener('click',()=>{
            hamburgerMenu.classList.toggle('hamburgerMenuClicked')
            navCheckbox.checked = false;
            setTimeout(()=>{
                if(introContZIndexvalue == 1){
                    introContainer.style.zIndex = -1
                    introContZIndexvalue = -1
                }else{
                    introContainer.style.zIndex = 1
                    introContZIndexvalue = 1
                }
            }, 400)
        })

        const link2 = document.createElement('a');
        link2.textContent = '// PROJECTS'
        link2.href = '#projetcs'
        link2.classList.add('link')
        linksContainer.append(link2)
        link2.addEventListener('click',()=>{
            hamburgerMenu.classList.toggle('hamburgerMenuClicked')
            navCheckbox.checked = false;
            setTimeout(()=>{
                if(introContZIndexvalue == 1){
                    introContainer.style.zIndex = -1
                    introContZIndexvalue = -1
                }else{
                    introContainer.style.zIndex = 1
                    introContZIndexvalue = 1
                }
            }, 400)   
        })
        
    }
}

const firstCardObserver = new IntersectionObserver((entries)=>{
    const firstCard  = entries[0]
    if(!firstCard.isIntersecting) return
    
    loadCardsAtStart()
    firstCardObserver.unobserve(firstCard.target)
    firstCardObserver.observe(document.querySelector('.link:first-child'))
    console.log(document.querySelector('.link:first-child'))
}, firstOptions)


const lastCardObserver = new IntersectionObserver((entries)=>{
    const firstCard  = entries[0]
    if(!firstCard.isIntersecting) return
    
    loadCardsAtEnd()
    firstCardObserver.unobserve(firstCard.target)
    firstCardObserver.observe(document.querySelector('.link:last-child'))
    console.log(document.querySelector('.link:last-child'))
}, firstOptions)

// -- Infinite scroll END

// -- About 

// -myphoto
const myPhoto = document.querySelector('.my-photo')
myPhoto.addEventListener("mousemove", (e) => {
    const xPos = (-e.offsetX + 160)* 0.1;
    const yPos = (-e.offsetY + 160)*0.1;
    myPhoto.style.transform = "scale(1, 1) translate3d(" + xPos + "px, " + yPos + "px, 0)"
});
myPhoto.addEventListener('mouseleave', ()=>{
    myPhoto.style.transform = 'scale(1, 1) translate3d(0px, 0px, 0px)'
})


// -git icon
const hamburgerMenuGit = document.querySelector('.hamburgerMenuGit')
const backgroundCircleGit = document.querySelector('.backgroundCircleGit')
const gitIcon = document.querySelector('.git-icon')

gitIcon.addEventListener('click', ()=> window.open('https://github.com/ngaraug', '_blank'))

hamburgerMenuGit.addEventListener('mouseenter',()=>{
    backgroundCircleGit.style.transform = "scale(1,1)"
    // backgroundCircle.style.backgroundColor = 'white'

    gitIcon.style.filter = 'invert(1)'
    gitIcon.style.transform = "scale(0.5, 0.5)"
    
} )
hamburgerMenuGit.addEventListener('mouseleave',()=>{
    backgroundCircleGit.style.transform = "scale(0,0)"
    // backgroundCircle.style.backgroundColor = 'black'
    gitIcon.style.filter = 'none'
    gitIcon.style.transform = "scale(0.5, 0.5)"
} )

hamburgerMenuGit.addEventListener("mousemove", (e) => {
    const xPos = (-e.offsetX + 27.5)* 0.2;
    const yPos = (-e.offsetY + 27.5)*0.2;
    const xPosPlusIcon = xPos*0.5;
    backgroundCircleGit.style.transform = "scale(1, 1) translate3d(" + xPos + "px, " + yPos + "px, 0)"
    gitIcon.style.transform = "scale(0.5, 0.5) translateX(" + xPosPlusIcon + "px";
});

// -linkedIn icon
const hamburgerMenuLI = document.querySelector('.hamburgerMenuLinkedIn')
const backgroundCircleLI = document.querySelector('.backgroundCircleLinkedId')
const LIIcon = document.querySelector('.LI-icon')

LIIcon.addEventListener('click', ()=> window.open('https://www.linkedin.com/in/gaurang-mestry-6b84a0230', '_blank'))

hamburgerMenuLI.addEventListener('mouseenter',()=>{
    backgroundCircleLI.style.transform = "scale(1,1)"
    // backgroundCircle.style.backgroundColor = 'white'
    LIIcon.style.filter = 'invert(1)'
} )
hamburgerMenuLI.addEventListener('mouseleave',()=>{
    backgroundCircleLI.style.transform = "scale(0,0)"
    // backgroundCircle.style.backgroundColor = 'black'
    LIIcon.style.filter = 'none'  
} )
hamburgerMenuLI.addEventListener("mousemove", (e) => {
    const xPos = (-e.offsetX + 27.5)* 0.2;
    const yPos = (-e.offsetY + 27.5)*0.2;
    const xPosPlusIcon = xPos*0.5;
    backgroundCircleLI.style.transform = "scale(1,1) translate3d(" + xPos + "px, " + yPos + "px, 0)"
    LIIcon.style.transform = "scale(0.5, 0.5) translateX(" + xPosPlusIcon + "px";
});

// -leetcode icon
const hamburgerMenuLeet = document.querySelector('.hamburgerMenuLeet')
const backgroundCircleLeet = document.querySelector('.backgroundCircleLeet')
const LeetIcon = document.querySelector('.leet-icon')

LeetIcon.addEventListener('click', ()=> window.open('https://leetcode.com/ngaraug/', '_blank'))

hamburgerMenuLeet.addEventListener('mouseenter',()=>{
    backgroundCircleLeet.style.transform = "scale(1,1)"
    // backgroundCircle.style.backgroundColor = 'white'
    LeetIcon.style.filter = 'invert(1)'
} )
hamburgerMenuLeet.addEventListener('mouseleave',()=>{
    backgroundCircleLeet.style.transform = "scale(0,0)"
    // backgroundCircle.style.backgroundColor = 'black'
    LeetIcon.style.filter = 'none'  
} )
hamburgerMenuLeet.addEventListener("mousemove", (e) => {
    const xPos = (-e.offsetX + 27.5)* 0.2;
    const yPos = (-e.offsetY + 27.5)*0.2;
    const xPosPlusIcon = xPos*0.5;
    backgroundCircleLeet.style.transform = "scale(1,1) translate3d(" + xPos + "px, " + yPos + "px, 0)"
    LeetIcon.style.transform = "scale(0.5, 0.5) translateX(" + xPosPlusIcon + "px";
});

// -instagram icon
const hamburgerMenuInsta = document.querySelector('.hamburgerMenuInstagram')
const backgroundCircleInsta = document.querySelector('.backgroundCircleInstagram')
const instaIcon = document.querySelector('.insta-icon')

instaIcon.addEventListener('click', (e)=> {
    window.open('https://instagram.com/ngaraug?igshid=ZDdkNTZiNTM=', '_blank') 
    console.log(e.target)
})

hamburgerMenuInsta.addEventListener('mouseenter',()=>{
    backgroundCircleInsta.style.transform = "scale(1,1)"
    // backgroundCircle.style.backgroundColor = 'white'
    instaIcon.style.filter = 'invert(1)'
} )
hamburgerMenuInsta.addEventListener('mouseleave',()=>{
    backgroundCircleInsta.style.transform = "scale(0,0)"
    // backgroundCircle.style.backgroundColor = 'black'
    instaIcon.style.filter = 'none'  
} )
hamburgerMenuInsta.addEventListener("mousemove", (e) => {
    const xPos = (-e.offsetX + 27.5)* 0.2;
    const yPos = (-e.offsetY + 27.5)*0.2;
    const xPosPlusIcon = xPos*0.5;
    backgroundCircleInsta.style.transform = "scale(1,1) translate3d(" + xPos + "px, " + yPos + "px, 0)"
    instaIcon.style.transform = "scale(0.5, 0.5) translateX(" + xPosPlusIcon + "px";
});

// Animations
const options = {
    threshold: 0.5,
}

const intersectionObserver = new IntersectionObserver((entries)=>{
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
        intersectionObserver.observe(className);
    })
}

// IObserver for skills class
const skills = document.querySelectorAll(".skill")
observeElementsOfClass(skills)

// IObserver for projects class
const projects = document.querySelectorAll('.project-form')
observeElementsOfClass(projects)

// IObserver for socials class
const socials = document.querySelectorAll('.socials')
observeElementsOfClass(socials)

// IObserver for about class
const about = document.querySelectorAll('.about')
observeElementsOfClass(about)

// IObserver for headings class
const headings = document.querySelectorAll('.about-me')
observeElementsOfClass(headings)