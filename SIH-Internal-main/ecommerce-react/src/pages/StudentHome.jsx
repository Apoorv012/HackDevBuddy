import React, {useRef} from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Landingparts from '../components/Landingparts'
import Card from '../components/Card'
import styled from 'styled-components'



function StudentHome() {


  return (
    <>
        <Navbar id='student'/>
        <Landing id='student'/>
        <Landingparts title ='What you Need' card='1'/>
        <Landingparts title ='How to Prepare' card='2'/>
        <Landingparts title ='Avoid the Following' card='3'/>
        <Footer/>

    </>
    
  )
}

export default StudentHome


