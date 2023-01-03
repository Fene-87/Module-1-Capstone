const menuList = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const removeMenu = document.querySelector('.remove-icon');
const featuredSpeakers = document.querySelector('.featured-speakers')

menuIcon.addEventListener('click', () => {
    menuList.classList.add('active');
})

removeMenu.addEventListener('click', () => {
    menuList.classList.remove('active');
})