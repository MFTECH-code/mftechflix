import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from './components/ButtonLink';
import { Link } from 'react-router-dom' // Para que funcione o nosso SPA devemos importar o Link

function Menu() {
    return (
        <nav className = "Menu">
            <Link to = "/" >
            <img className = "Logo" src = {Logo} alt = "MFtechFlix logo" />
            </Link>
            <Button as = {Link} className = "ButtonLink" to = "/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; // Exportando nosso componente