
import React, { useState } from 'react'
import '../../../public/style/navBarStyle.css';

export const Navbar = () => {

    const [btnState, setBtnState] = useState(false);

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

            <ul style={{right: `${btnState ? '3%' : ''}`}} className={`navbar hola ${navbarToogle}`}>
                <li><a href="" className='active'>Inicio</a></li>
                <li><a href="">Proyectos</a></li>
                <li><a href="">Contacto</a></li>
            </ul>

            <div className="main">
                <div onClick={handleClick} className={`bx bx-menu ${menuToogle}`} id='menu-icons'>
                </div>
            </div>

        </header>
    
    </>
  )
}
