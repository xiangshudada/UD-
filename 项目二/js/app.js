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
    const re = document.createElement('li')
    re.style.color='black'
    re.style.margin='20px'
    re.style.fontWeight='700'
    re.setAttribute('id','returnTop')
    re.style.display = 'none'
    re.textContent = 'TOP'
    ul.appendChild(re)
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
    //section4
    let tag3 = section[3].getElementsByTagName('h2')
    let content3 = tag3[0].textContent
    const li3 = document.createElement('li')
    li3.style.color='black'
    li3.style.margin='20px'
    li3.style.fontWeight='700'
    li3.setAttribute('id','nav-section4')
    li3.textContent=content3
    ul.appendChild(li3)

}

// Add class 'active' to section when near top of viewport
chooseAvtive=function(){
    let top = window.scrollY  + window.screen.availHeight/2
    let listLi = ul.getElementsByTagName('li')
    if (top >section[0].offsetTop && top <section[0].offsetHeight + section[0].offsetTop ){
        section[0].classList.add('your-active-class')
        section[1].classList.remove('your-active-class')
        section[2].classList.remove('your-active-class')
        section[3].classList.remove('your-active-class')
        listLi[1].style.background='lightblue'
        listLi[2].style.background=''
        listLi[3].style.background=''
        listLi[4].style.background=''


    }
    else if(top >section[1].offsetTop && top <section[1].offsetHeight + section[1].offsetTop){
        section[0].classList.remove('your-active-class')
        section[1].classList.add('your-active-class')
        section[2].classList.remove('your-active-class')
        section[3].classList.remove('your-active-class')
        listLi[1].style.background=''
        listLi[2].style.background='lightblue'
        listLi[3].style.background=''
        listLi[4].style.background=''
    }
    else if(top >section[2].offsetTop && top <section[2].offsetHeight + section[2].offsetTop ){
        section[0].classList.remove('your-active-class')
        section[1].classList.remove('your-active-class')
        section[2].classList.add('your-active-class')
        section[3].classList.remove('your-active-class')
        listLi[1].style.background=''
        listLi[2].style.background=''
        listLi[3].style.background='lightblue'
        listLi[4].style.background=''
    }
    else if(top >section[3].offsetTop && top <section[3].offsetHeight + section[3].offsetTop ){
        section[0].classList.remove('your-active-class')
        section[1].classList.remove('your-active-class')
        section[2].classList.remove('your-active-class')
        section[3].classList.add('your-active-class')
        listLi[1].style.background=''
        listLi[2].style.background=''
        listLi[3].style.background=''
        listLi[4].style.background='lightblue'
    }
    else{
        section[0].classList.remove('your-active-class')
        section[1].classList.remove('your-active-class')
        section[2].classList.remove('your-active-class')
        section[3].classList.remove('your-active-class')
        listLi[1].style.border=''
        listLi[2].style.border=''
        listLi[3].style.border=''
        listLi[4].style.border=''
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
scrollToSection4=function(){
    window.location.href = "#section4";
}
scrollToTop=function(){
   
    window.scrollTo(0,0)
    
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
const navSection4 = document.getElementById('nav-section4')
const navTop = document.getElementById('returnTop')
navSection1.addEventListener('click',function(){
    scrollToSection1()
})
navSection2.addEventListener('click',function(){
    scrollToSection2()
})
navSection3.addEventListener('click',function(){
    scrollToSection3()
})
navSection4.addEventListener('click',function(){
    scrollToSection4()
})
navTop.addEventListener('click',function(){
    scrollToTop()
})
// Set sections as active and hide menu
let test1=setTimeout(function(){
    ul.style.display='none'
},3000)
window.onscroll = function(){
    window.clearTimeout(test1)
    ul.style.display=''
    chooseAvtive()
    if(window.scrollY + this.document.documentElement.clientHeight >= this.document.documentElement.offsetHeight-100){
        navTop.style.display=''
    }
    else{
        navTop.style.display='none'
    }
    let test2=setTimeout(function(){
        ul.style.display='none'
    },3000)
    test1=test2
}
//

