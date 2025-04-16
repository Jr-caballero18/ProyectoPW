 const toggleButton = document.getElementById('menu-toggle');
 const menu = document.getElementById('navbarNavDropdown');

 toggleButton.addEventListener('click', () => {
   menu.classList.toggle('show');
 });

 const dropdownToggle = document.getElementById('dropdown-toggle');
 const dropdownMenu = document.getElementById('dropdown-menu');

 dropdownToggle.addEventListener('click', (e) => {
   e.preventDefault(); 
   dropdownMenu.classList.toggle('show');
 });

 
 window.addEventListener('click', (e) => {
   if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
     dropdownMenu.classList.remove('show');
   }
 });