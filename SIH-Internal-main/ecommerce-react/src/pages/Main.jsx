import React, {useRef} from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import Landingparts from '../components/Landingparts'
import Card from '../components/Card'
import styled from 'styled-components'
import About from './About.jsx';



function Main() {


  return (
    <>
        <Navbar id='main'/>
        <Landing id='main'/>
        <About id='main'/>
        <Footer/>

    </>
    
  )
}

export default Main


