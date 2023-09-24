import React from 'react'
import Navbar from '../components/Navbar'
import Question from '../components/Question'
import styled from 'styled-components'

function Exam() {

  const submitAnswer = (e)=>{

  }

  return (
    <>
        <Form typeof='submit'>
          <Question/>
          <Question/>
          <Submit type='submit' onClick={(e)=> submitAnswer(e)}>Submit</Submit>
        </Form>
        
    </>
  )
}

export default Exam



const Submit = styled.button`
`
const Form = styled.form`
`