import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'

import App from './Router/App'


const Root = ()=>(
    <Router>
        <Router path = "/" component={Login}/>
        <Router path = "/vista_principal" component={Index}/>
    </Router>
)
export default Router