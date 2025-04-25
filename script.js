
const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('navbarNavDropdown');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

function setupDropdown(toggleId, menuId) {
  const toggle = document.getElementById(toggleId);
  const menu = document.getElementById(menuId);

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('show');
  });

  window.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
}
setupDropdown('dropdown-noticias', 'dropdown-menu-noticias'); 
setupDropdown('dropdown-articulos', 'dropdown-menu-articulos'); 
setupDropdown('dropdown-misterios', 'dropdown-menu-misterios'); 
setupDropdown('dropdown-juegos', 'dropdown-menu-juegos'); 
setupDropdown('dropdown-archivos', 'dropdown-menu-archivos'); 
setupDropdown('dropdown-obsequios', 'dropdown-menu-obsequios'); 
setupDropdown('createDropdown', 'createMenu');



const searchToggle = document.getElementById('search-toggle');
const searchContainer = document.getElementById('search-container');
const closeBtn = document.getElementById('close-btn');
const searchInput = document.getElementById('search-input');

searchToggle.addEventListener('click', () => {
  searchContainer.classList.add('active');
  searchToggle.style.display = 'none';
  searchInput.focus();
});

closeBtn.addEventListener('click', () => {
  searchContainer.classList.remove('active');
  searchToggle.style.display = 'block';
  searchInput.value = '';
});


const toggleSwitch = document.getElementById('toggle-switch');
toggleSwitch.addEventListener('click', () => {
  toggleSwitch.classList.toggle('active');
});

/*Flechas*/

document.querySelectorAll('.gift-carousel').forEach((carousel, index) => {
  const leftBtn = carousel.parentElement.querySelector('.carousel-arrow.left');
  const rightBtn = carousel.parentElement.querySelector('.carousel-arrow.right');

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
});


const steamCarousel = document.getElementById('steam-carousel');
document.getElementById('steam-left').addEventListener('click', () => {
  steamCarousel.scrollBy({ left: -300, behavior: 'smooth' });
});
document.getElementById('steam-right').addEventListener('click', () => {
  steamCarousel.scrollBy({ left: 300, behavior: 'smooth' });
});
