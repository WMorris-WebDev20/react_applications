import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Home from './component/Home'
import Footer from './component/footer/Footer'
import AllBounties from './component/AllBounties'
import CompletedBounties from './component/CompletedBounties'
import './styles/App.css'

 const App = () =>{    
  
    return(
        <div className = "App" >            
            <Navbar/>
            <Switch className = "main">
                <Route 
                    exact path="/" 
                    render={()=> <Home/>}
                />
                <Route 
                    path="/allbounties"
                    render = {() => <AllBounties/>}
                    />
                <Route 
                    path="/completed"
                    render = {() => <CompletedBounties/>}
                />
            </Switch>                
            <Footer/>
        </div>        
    )
}

export default App