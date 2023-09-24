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
            <Label for='javascipt'>Option1</Label> <br />
            <Input type="radio" value= 'type script' onChange={(e)=> setChecked(e.target.value)} checked = {checked === 'type script'}/>
            <Label for='typescipt'>Option1</Label> <br />
            <Input type="radio" value='hello script' onChange={(e)=> setChecked(e.target.value)} checked = {checked === 'hello script'}/>
            <Label for='helloscipt'>Option1</Label> <br />
            <Input type="radio" value='bye script' onChange={(e)=> setChecked(e.target.value)} checked = {checked === 'bye script'}/>
            <Label for='helloscipt'>Option1</Label>
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
  line-height: 1.6;
  font-size: 25px;
  margin-left:1%;
  
`