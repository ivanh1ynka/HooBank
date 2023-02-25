// Custom Scripts
function burgerMenu() {
  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.header__menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


function fixedNav() {
  const nav = document.querySelector('.header__nav')

  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed')
  } else {
    nav.classList.remove('fixed')
  }
}
window.addEventListener('scroll', fixedNav);

