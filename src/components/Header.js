import './Header.css';
import React,{useEffect} from 'react';

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll =() => {
    const offset = window.scrollY;
    if(offset > 1 ) {
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses=['header-cont'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }

  return (
  <div className={navbarClasses.join(" ")}>
    <div className="welcome-cont">
      <p>Welcome</p>
    </div>
    <div className="nav-cont">
      <ul>
        <a href="/" className='nav'>Home</a>
        <a href="/" className='nav'>About me</a>
        <a href="/" className='nav'>Projects</a>
      </ul>
    </div>
  </div>
  );
}

export default Header;
