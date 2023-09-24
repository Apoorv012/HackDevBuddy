import React from 'react'
import styled from 'styled-components'


function Card(props) {


    return (
        <>
          
            <Container>
              <Wrapper>
                
                <Icon color={props.bg}>
                  {props.icon}  
                </Icon>
                <Heading>{props.heading}</Heading>
                <Body>{props.desc}</Body>
              </Wrapper>
            </Container>
    
        </>
        
      )
    }         
    
    export default Card
    
    
    const Container = styled.div`
    height:40vh ;
    display:flex ;
    justify-content:center ;
    width: 550px;
    border-radius: 20px;
    background-color: #F9FEFE;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    `
    
    const Wrapper = styled.div`
    text-align:center;
    height:40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    `
    const Heading = styled.h1`
      text-align:center;
      font-size: 30px;
      margin-top:-8%;

    
    `
    const Body = styled.h3`
      text-align:center;
      font-size: 15px;
      padding: 0 20px 20px 40px;
    
    `
    const Icon = styled.div`
    display: flex;
    justify-content: center;
    background-color : ${(props) => props.color};
    height:100px;
    width:100px;
    border-radius: 50%;
    align-items: center;
    text-align: center;
    margin-bottom: 5%;
}
    `
  