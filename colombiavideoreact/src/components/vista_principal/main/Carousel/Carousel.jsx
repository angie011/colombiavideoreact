import React from 'react'
import Items from '../Items/Items' 
import './styles.css'

function Carousel(){
    return(
        <>
        <h3>Mi lista</h3>
        <div className="covers">
            <ul>
                <li><Items/></li>
                <li><Items/></li>
                <li><Items/></li>
                <li><Items/></li>
                <li><Items/></li>
                <li><Items/></li>
                <li><Items/></li>
                <li><Items/></li>
            </ul>
            
         </div>   
         </>
    )
}
export default Carousel