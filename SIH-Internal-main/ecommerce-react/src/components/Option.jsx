import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

function Option(props) {
   const [checked,setChecked] = useState("")

    
    console.log(checked)

  return (
    <>
        <Container>
            <Input type="radio" value= 'Java script' onChange={(e)=> setChecked(e.target.value)} checked = {checked === 'Java script'}/>
            <Label for='javascipt'>Java script</Label>
            <Input type="radio" value= 'type script' onChange={(e)=> setChecked(e.target.value)} checked = {checked === 'type script'}/>
            <Label for='typescipt'>type script</Label>
            <Input type="radio" value='hello script' onChange={(e)=> setChecked(e.target.value)} checked = {checked === 'hello script'}/>
            <Label for='helloscipt'>hello script</Label>
        </Container>
    </>
  )
}

export default Option


const Container = styled.div`
`
const Input = styled.input`
  
`
const Label = styled.label`
`