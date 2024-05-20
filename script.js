document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#555'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Original background color
    }
});
