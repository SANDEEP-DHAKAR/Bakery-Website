const navlist = document.getElementById('navlist');
const hambuger = document.getElementById('hambuger');

// Click Event

hambuger.addEventListener('click', () => {

    navlist.classList.toggle('navlist-active')
})