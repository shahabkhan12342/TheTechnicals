import React from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css'
import web from './i2.png';
import Common from './Common';
import i from './i3.png';
function About() {
    return (
        <>  <Common name='Welcome to About Page' imgsrc={i} visit='/contact' btname='Contact Now'/>
        </>
    )
}

export default About
