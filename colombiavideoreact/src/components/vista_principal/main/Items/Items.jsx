import React from 'react'
import Cover from '../../../../assets/images/1.jpg'
import Play from '../../../../assets/images/play-icon.png'
import Plus from '../../../../assets/images/plus-icon.png'
import './styles.css'


function Items(){
    return(
        <div className="covers">
                <ul>
                        <li>
                            <a>
                                <img src={Cover}/>
                            </a> 
                            <div className="icons">
                                <div className="buttons">
                                        <div className="div-buttons">   
                                            <img className="imagesIcon" src={Play} alt="Play"/> 
                                            <img className="imagesIcon" src={Plus} alt="Plus"/> 
                                        </div>   
                                            <p className="imagesText">Título descriptivo</p>
                                            <p className="imagesSubText">2019 16+ 114 minutos</p>
                                </div>
                                
                            </div>
                        </li>
                </ul>       
        </div>
    )
}
export default Items