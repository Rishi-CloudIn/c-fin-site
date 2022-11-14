const hamburger_menu = document.querySelector( '.hamburger-menu' );
const navbar = document.querySelector( '.nav-main' );
const links = document.querySelectorAll( '.links a' );

const changeColor = () =>
{
  if ( window.scrollY >= 100 )
  {
    navbar.classList.add( 'nav_bg' );
  } else
  {
    navbar.classList.remove( 'nav_bg' );
  }
};

window.addEventListener( 'scroll', changeColor );

function closeMenu ()
{
  navbar.classList.remove( 'open' );
  document.body.classList.remove( 'stop-scrolling' );
}

hamburger_menu.addEventListener( 'click', () =>
{
  if ( !navbar.classList.contains( 'open' ) )
  {
    navbar.classList.add( 'open' );
    document.body.classList.add( 'stop-scrolling' );
  } else
  {
    closeMenu();
  }
} );

links.forEach( link => link.addEventListener( 'click', () => closeMenu() ) );
