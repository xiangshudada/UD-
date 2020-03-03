/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let ul = document.getElementById('navbar__list')
let section = document.querySelectorAll("section")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav 
buildNav = function(){
    //section1
    let tag0 = section[0].getElementsByTagName('h2')
    let content0 = tag0[0].textContent
    const li0 = document.createElement('li')
    li0.style.color='black'
    li0.style.margin='20px'
    li0.style.fontWeight='700'
    li0.setAttribute('id','nav-section1')
    li0.textContent=content0
    ul.appendChild(li0)

    //section2
    let tag1 = section[1].getElementsByTagName('h2')
    let content1 = tag1[0].textContent
    const li1 = document.createElement('li')
    li1.style.color='black'
    li1.style.margin='20px'
    li1.style.fontWeight='700'
    li1.setAttribute('id','nav-section2')
    li1.textContent=content1
    ul.appendChild(li1)
    //section3
    let tag2 = section[2].getElementsByTagName('h2')
    let content2 = tag2[0].textContent
    const li2 = document.createElement('li')
    li2.style.color='black'
    li2.style.margin='20px'
    li2.style.fontWeight='700'
    li2.setAttribute('id','nav-section3')
    li2.textContent=content2
    ul.appendChild(li2)

}

// Add class 'active' to section when near top of viewport
chooseAvtive=function(){
    let top = window.scrollY  + window.screen.availHeight/2
    console.log(top)
    if (top >section[0].offsetTop && top <section[0].offsetHeight + section[0].offsetTop ){
        section[0].classList.add('your-active-class')
        section[1].classList.remove('your-active-class')
        section[2].classList.remove('your-active-class')
    }
    else if(top >section[1].offsetTop && top <section[1].offsetHeight + section[1].offsetTop){
        section[0].classList.remove('your-active-class')
        section[1].classList.add('your-active-class')
        section[2].classList.remove('your-active-class')
    }
    else if(top >section[2].offsetTop && top <section[2].offsetHeight + section[2].offsetTop ){
        section[0].classList.remove('your-active-class')
        section[1].classList.remove('your-active-class')
        section[2].classList.add('your-active-class')
    }
    else{
        section[0].classList.remove('your-active-class')
        section[1].classList.remove('your-active-class')
        section[2].classList.remove('your-active-class')
    }
}

// Scroll to anchor ID using scrollTO event
scrollToSection1=function(){
    window.location.href = "#section1";
}
scrollToSection2=function(){
    window.location.href = "#section2";
}
scrollToSection3=function(){
    window.location.href = "#section3";
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav()

// Scroll to section on link click
const navSection1 = document.getElementById('nav-section1')
const navSection2 = document.getElementById('nav-section2')
const navSection3 = document.getElementById('nav-section3')
navSection1.addEventListener('click',function(){
    scrollToSection1()
})
navSection2.addEventListener('click',function(){
    scrollToSection2()
})
navSection3.addEventListener('click',function(){
    scrollToSection3()
})
// Set sections as active
window.onscroll = function(){
    chooseAvtive()
}

