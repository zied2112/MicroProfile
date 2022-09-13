var menuBtn = document.getElementById('menu-btn');
var closeBtn = document.getElementById('close-btn');
var menu = document.getElementById('menu');
menuBtn.addEventListener('click', function () {
    // console.log('Clicked');
    menu.classList.add('menu-show');
    closeBtn.style.display = 'block';
}
); 
closeBtn.addEventListener('click', function () {
    menu.classList.remove('menu-show');
    closeBtn.style.display = 'none';
}
); 
menu.addEventListener('click', function () { 
    menu.classList.remove('menu-show');
    closeBtn.style.display = 'none';
 });