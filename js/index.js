const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  // console.log('Clicked');
  menu.classList.add('menu-show');
  closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  menu.classList.remove('menu-show');
  closeBtn.style.display = 'none';
});
menu.addEventListener('click', () => {
  menu.classList.remove('menu-show');
  closeBtn.style.display = 'none';
});