import React from 'react'
import Header from '../../components/header/Header'
import MenuPerfil from '../../components/vista_principal/MenuPerfil/MenuPerfil'
import Searcher from '../../components/vista_principal/main/Searcher/Searcher'
import Carousel from '../../components/vista_principal/main/Carousel/Carousel'
import Footer from '../../components/footer/Footer'

import './styles.css'

function Index(){
    return(
        <>
            <Header>
                <MenuPerfil/>
            </Header>
            <Searcher/>
            <Carousel/>
            <Carousel/>
            <Carousel/>
            <Footer/>    
        </>    
    )
}
export default Index