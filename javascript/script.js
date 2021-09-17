// menu highlighter
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.menu-nav-ul li a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (sectionTop - sectionHeight/3)){
            current = section.getAttribute('id'); 
        }
    })
    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    });
});
if(screen.width <= 800 ){
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.menu-nav-ul li a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(scrollY >= (sectionTop - sectionHeight/3) ){
                current = section.getAttribute('id'); 
            }
        })
        navLi.forEach( li => {
            li.classList.remove('mactive');
            if(li.classList.contains(current)){
                li.classList.add('mactive');
            }
        });
    });
}
// nav menu highlighter end

// ipad menu opener 
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const opener = document.querySelector('.opener');
const navlinks = document.querySelector('.menu-nav-ul');
const links = document.querySelectorAll('.menu-nav-ul li');
let jalwa = 1 ;
let closeBug = null ;
opener.addEventListener("click", function(){
    if(jalwa == 1 ){
        line1.classList.add('hide');
        line2.style.transform = "rotate(45deg)";
        line3.style.transform = "rotate(-45deg) translate(8px,-9px)";
        navlinks.classList.remove("mobile-hide");
        jalwa = 0;
        closeBug = jalwa;
    }
    else{
        line1.classList.remove('hide');
        line2.style.transform = "rotate(0deg)";
        line3.style.transform = "rotate(0deg) translate(0px,0px)";
        navlinks.classList.add("mobile-hide");
        jalwa = 1;
    }
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    links.forEach(element => element.addEventListener("click", function(){
        navlinks.classList.remove("open");
        links.forEach(link => {
            link.classList.remove('fade');
        });
        line1.classList.remove('hide');
        line2.style.transform = "rotate(0deg)";
        line3.style.transform = "rotate(0deg) translate(0px,0px)";
        navlinks.classList.add("mobile-hide");
        jalwa = 1;
    }));
});

// ipad menu opener ends

const skillCardInner = document.querySelector('.experience-card-inner');
const rotateBtn = document.querySelector('.experience-info-button');
rotateBtn.addEventListener("click", function(){
    skillCardInner.style.transform = "rotateY(180deg)";
});

const rotateBtnBack = document.querySelector('.experience-info-button-back');
rotateBtnBack.addEventListener("click", function(){
    skillCardInner.style.transform = "rotateY(360deg)";
});
// carsoule slider script

$('.owl-carousel').owlCarousel({
    margin:0,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    atuoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1200:{
            items:3,
            nav:false
        }
    }
});
// carsoule slider script ends
