import React from 'react'
import UserIcon from '../../../assets/images/user-icon.png'
import '../../../assets/css/header.css'

function MenuPerfil(){
    return(
        <div className= "profile-logo" > 
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

            </div> 
    )
}
export default MenuPerfil