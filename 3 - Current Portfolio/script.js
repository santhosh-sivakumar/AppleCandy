document.getElementById('back').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.style.display = 'none';
});

document.getElementById('menu').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.style.display = 'grid';
});