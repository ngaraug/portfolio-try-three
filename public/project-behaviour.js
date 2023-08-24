console.log("Running")

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
        link2.href = '#projects'
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
        link2.href = '#projects'
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