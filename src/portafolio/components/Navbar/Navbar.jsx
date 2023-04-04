
import React from 'react'
import { useLocation } from 'react-router-dom';
import { useClick } from '../../hooks/useClick';
import {AiOutlineClose} from 'react-icons/ai'
import {BsList} from 'react-icons/bs'
import './NavBar.css';

export const Navbar = () => {

    const {btnState, handleClick} = useClick();
    const location = useLocation();

    const menuToogle = btnState ? 'bx-x' : '';
    const navbarToogle = btnState ? 'open' : '';

  return (
    <>

        <nav style={{backgroundColor: '#111827d9'}} className='animate__animated animate__fadeInDownBig'>

            <a href="" className='logo'>
                <i class="ri-code-s-slash-line"></i>
                    <span>{'Rafael'}</span>
                <i class="ri-code-s-slash-line"></i>
            </a>

            <ul style={{right: `${btnState ? '0' : ''}`}} className={`navbar ${navbarToogle}`}>

                <div className='ul-content'>

                    <div className='navegation-content'>
                        <p>Navegación</p>
                        <hr />
                    </div>

                    <li>
                        <a href="/#about" onClick={handleClick} className={`${location.hash === '#about' 
                        || location.hash === '' ? 'active' : ''}`}>
                            <p>01.</p> Inicio
                        </a>
                    </li>

                    <li>
                        <a href="/#skills" onClick={handleClick} className={`${location.hash === '#skills' ? 'active' : ''}`}>
                            <p>02.</p> Habilidades
                        </a>
                    </li>

                    <li>
                        <a href="/#projects" onClick={handleClick} className={`${location.hash === '#projects' ? 'active' : ''}`}>
                            <p>03.</p> Proyectos
                        </a>
                    </li>

                    <li>
                        <a href="/#contact" onClick={handleClick} className={`${location.hash === '#contact' ? 'active' : ''}`}>
                            <p>04.</p> Contacto
                        </a>
                    </li>

                    <div className='navegation-content'>
                        <p>Descargas</p>
                        <hr />
                    </div>

                    <li className='cv'>
                        <a href="/" className={`${location.hash === '/' ? 'active' : ''}`}>
                            <p>05.</p>CV.pdf
                        </a>
                    </li>

                </div>


            </ul>

            <div className="main">

                {
                    !menuToogle ? <BsList onClick={handleClick} size={35} cursor='pointer'/> :
                    <AiOutlineClose onClick={handleClick} size={35} cursor='pointer'/>
                }

            </div>

        </nav>
    
    </>
  )
}
