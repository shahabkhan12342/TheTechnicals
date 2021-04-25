import React from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css'
import web from './i2.png';
import Common from './Common';
function Home() {
    return (
        <>
        <Common name='Grow your Bussiness with' imgsrc={web} visit='/services' btname='Get Started'/>
        </>
    )
}

export default Home
