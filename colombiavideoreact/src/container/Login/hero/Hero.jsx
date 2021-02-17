import React from 'react'
import './styles.css'
import Google from '../../../assets/images/google-icon.png'
import Twitter from '../../../assets/images/twitter-icon.png'

function Hero(){
    return (
            <section>
                    <div className="div-form">
                                <h2>Inicia sesión</h2>
                                    <form>                            
                                        <input type="text" placeholder="Correo"/>
                                        <input type="password" placeholder="Contraseña"/>
                                        <button>Iniciar sesión</button> 
                                    </form>
                                <div className="options">
                                    <input type="checkbox"/>
                                    <label>Recuérdame</label>
                                    <a href="/">Olvidé mi contraseña</a>
                                </div>
                               <div className="google">
                                    <img src={Google}/> 
                                    <p>Inicia sesión con Google</p>
                                </div>
                                <div className="twitter">
                                    <img src={Twitter}/>
                                    <p>Inicia sesión con Twitter</p>
                                </div>
                                <p>No tienes ninguna cuenta
                                    <a href="/"> Regístrate</a>
                                </p>
                    </div>
             </section>
    )
}
export default Hero