import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
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
        <Main icon="home" title="inicio" subtitle="Segundo Projeto">
            <div className="display-4">Bem Vindo</div>
            <hr />
            <p className="mb-0"> blb asadmsakdnasjdnsdsa

            </p>
        </Main>
        
        <Footer />

    </div>

