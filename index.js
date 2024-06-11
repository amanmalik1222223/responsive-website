const navbar = document.getElementById('nav-bar');
const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');
const main = document.getElementById('main');

function handlemenu() {
    navbar.classList.toggle('hidden');
    if (navbar.classList.contains('hidden')) {
        hamburger.style.display = 'block';
        main.style.display = 'block'; // Display the main content when the navbar is hidden
        closeIcon.style.display = 'none';
    } else {
        hamburger.style.display = 'none';
        main.style.display = 'none'; // Hide the main content when the navbar is visible
        closeIcon.style.display = 'block';
    }
}
const intialtranslateltr= -48*4;
const intialtranslatertl= 36*4;
function scrollobserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting=entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler);
        }
        else{
            document.removeEventListener('scroll',scrollHandler);
        }
    }
    const intersectionobserver= new IntersectionObserver(intersectionCallback);
    
    intersectionobserver.observe(element);
    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totaltranslate=0;
        if(isLTR){
            totaltranslate=translateX+intialtranslateltr;
        }
        else{
            totaltranslate=-(translateX+intialtranslatertl);
        }
        element.style.transform=`translateX(${totaltranslate}px)`;
    }
}

const line1=document.getElementById('line1');
const line2=document.getElementById('line2');
const line3=document.getElementById('line3');
const line4=document.getElementById('line4');
const line5=document.getElementById('line5');

scrollobserver(line1,true,0.15);
scrollobserver(line2,false,0.15);
scrollobserver(line3,true,0.15);
scrollobserver(line4,true,0.15);
scrollobserver(line5,false,0.15);

