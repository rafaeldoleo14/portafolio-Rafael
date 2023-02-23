
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../../public/style/navBarStyle.css';

export const Navbar = () => {

    const [btnState, setBtnState] = useState(false);
    const location = useLocation();

    const handleClick = ()=>{
        setBtnState(btnState => !btnState)
    }

    const menuToogle = btnState ? 'bx-x' : '';
    const navbarToogle = btnState ? 'open' : '';

  return (
    <>

        <header style={{backgroundColor: '#111827'}} className='animate__animated animate__fadeInDownBig'>

            <a href="" className='logo'>
                <i class="ri-code-s-slash-line"></i>
                    <span>{'Rafael'}</span>
                <i class="ri-code-s-slash-line"></i>
            </a>

            <ul style={{right: `${btnState ? '0' : ''}`}} className={`navbar ${navbarToogle}`}>

                <li>
                    <p>01.</p>
                    <a href="/#about" className={`${location.hash === '#about' ? 'active' : ''}`}>
                    Inicio
                    </a>
                </li>

                <li>
                    <p>02.</p>
                    <a href="/#skills" className={`${location.hash === '#skills' ? 'active' : ''}`}>
                    Habilidades
                    </a>
                </li>

                <li>
                    <p>03.</p>
                    <a href="#contact">Contacto</a>
                </li>

            </ul>

            <div className="main">
                <div onClick={handleClick} className={`bx bx-menu ${menuToogle}`} id='menu-icons'>
                </div>
            </div>

        </header>
    
    </>
  )
}
