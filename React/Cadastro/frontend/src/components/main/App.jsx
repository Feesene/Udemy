import './App.css'
import React from 'react'
import Footer from '../templates/Footer'
import Logo from '../templates/Logo'
import Main from '../templates/Main'
import Nav from '../templates/Nav'


export default props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />

    </div>

