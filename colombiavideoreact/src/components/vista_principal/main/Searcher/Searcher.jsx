import React from 'react'
import './styles.css'

function Searcher(){
    return (
        <section>
        <div className="search">
            <h1>¿Qué quieres ver hoy?</h1>
            <input type="input" placeholder="Buscar..."/>
        </div>
    </section>
    )
}
export default Searcher