window.addEventListener('scroll', function() {
    var sticky = document.querySelector('.nav');
    var stickyPosition = sticky.getBoundingClientRect().top;
    if (stickyPosition <= 0) {
        sticky.classList.add('grey');
    } else {
        sticky.classList.remove('grey');
    }
});

window.addEventListener('DOMContentLoaded', function() {
    var name = document.querySelector('.banner .title span');
    name.style.backgroundPosition = 'left';
})

document.getElementById('back').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.style.display = 'none';
});

document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.style.display = 'grid';
});