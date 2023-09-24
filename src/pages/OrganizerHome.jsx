import React, {useRef} from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Landingparts from '../components/Landingparts'
import Card from '../components/Card'
import styled from 'styled-components'



function OrganizerHome() {


  return (
    <>
        <Navbar id='organizer'/>
        <Landing id='organizer'/>
        <Footer/>

    </>
    
  )
}

export default OrganizerHome


