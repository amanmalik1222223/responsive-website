const navbar = document.getElementById('nav-bar');
const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');

function handlemenu() {
    navbar.classList.toggle('hidden');
    if (navbar.classList.contains('hidden')) {
        hamburger.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        hamburger.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}
