import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from '../container/Login/Login'
import Index from '../container/Index/Index'

const App = ()=>(
    <BrowserRouter>
       <Switch>
           <Route exact path = "/" component={Login}/>
           <Route exact path = "/index" component={Index}/>
       </Switch>
    </BrowserRouter>
)

export default App