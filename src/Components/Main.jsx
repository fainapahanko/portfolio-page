import React from 'react';
import AboutSection from './AboutSection'
import Portfolio from './Portfolio'
import Contacts from './Contacts'
import NavBar from './NavBar'
import '../index.css'

const Main = () => {
    return (
        <div className="main-div">
            <NavBar />
            <AboutSection />
            <Portfolio />
            <Contacts />
        </div>
    )
}

export default Main