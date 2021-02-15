import React from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import './App.css'
import Header from './semantics/header/Header'
import Footer from './semantics/footer/Footer'
const App = () => {
    
    return (
        <div className="App">
            <Header headLine = "Redux Contacts V2"/>
            <ContactForm />
            <ContactList />
            <Footer/>
        </div>
      )
    }

export default App;
