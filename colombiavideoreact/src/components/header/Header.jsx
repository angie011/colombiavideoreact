import React from 'react'
import Logo from '../../assets/images/logo-colombia.png'
/*import UserIcon from '../../../assets/images/user-icon.png'*/
import '../../assets/css/header.css'

function Header({children}){
    return(
        <header>
            <div className="name-logo">
                <img className= "logo" src={Logo}/>              
                <p>Colombia Video</p>
                {children}
            </div>
          { /*<div className= "profile-logo" > 
                <div className="menu">   
                    <div className="menu-profile">
                        <img src={UserIcon} alt=""/>
                        <p>Perfil</p>
                    </div>
                    <ul>
                        <li><a href="">Cuenta</a></li>
                        <li><a href="">Cerrar Sesión</a></li>
                    </ul>
                </div>

    </div> */}
    </header>
    )
}
export default Header