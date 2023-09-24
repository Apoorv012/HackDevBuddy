import React, { useState } from 'react'
import styled from 'styled-components'
import Option from './Option'


function Question() {
 
  

  return (
    <>
        <Container>
            <Wrapper>

                <Top>
                    <Qno>1</Qno>
                    <Qtext>Full form of js</Qtext>
                </Top>
                <Bottom>
                  <Option/>
                  
                </Bottom>
                
                
            </Wrapper>
        </Container>
    </>
  )
}

export default Question


const Container = styled.div`
height: 100%;

`
const Wrapper = styled.div`
`
const Top = styled.div`
`
const Qno = styled.span`
`
const Qtext = styled.h2`
`
const Bottom = styled.div`
`
