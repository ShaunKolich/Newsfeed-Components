// menuTest = document.querySelectorAll('.menu');
// console.log(menuTest);
// console.log(toggleMenu);
// Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
// const menuButton;
// Using your menuButton reference, add a click handler that calls toggleMenu

const menuButton = document.querySelector(".menu-button");
// console.log(menuButton);
// const menu = document.querySelector(".menu");

class Menu {
  constructor(menu, menuButton) {
    this.menu = menu;
    this.menuButton = menuButton;
    this.menuButton.addEventListener('click', () => this.toggleMenu());

  }
  toggleMenu = () => {
    // console.log('Button');
    this.menu.classList.toggle('menu--open');
    // Toggle the "menu--open" class on your menu refence.

  }
}
const menu = document.querySelector(".menu");
// console.log(menu);
let instance1 = new Menu(menu, menuButton);
// console.log(instance1);