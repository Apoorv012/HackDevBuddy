import React from 'react'
import styled from 'styled-components'
import Aboutus from '../images/aboutus.png'

function About() {
  return (
    
            <>
        <Container>
            <Wrapper>
                <Top>
                
                    <Left>
                         <Image><img src={Aboutus} style={{maxWidth: '100%',maxHeight:'100%',objectFit:'contain'}}/></Image> 
                    </Left>
                    <Right>
                    
                       
                        <Title> What We Do....</Title>
                        <Box1>
                        <Desc>We help companies develop the strongest tech teams around.We help candidates sharpen their tech skills and pursue job opportunities.</Desc>
                        </Box1>
                        <Box2>
                        <Desc>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</Desc>
                        </Box2>
                        <Box3>
                        <Desc>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job  opportunities.</Desc>
                        </Box3>
                    </Right>

                   
                   
                </Top>
                
            </Wrapper>
        </Container>
    
    </>
  )
}

export default About




const Container = styled.div`
    height:850px ;
    display:flex ;
    
    background-color: #F1F0E8;
    
`
const Box1 = styled.div`
    
padding:10px ;
margin:20px 0px;
height: 100px;
width: 500px;
border-radius: 50px 50px 50px 50px;
border: 0px solid white;
background-color:#FEB442;
font-size:20px;
padding-left: 200px;
text-align: center;
padding-bottom: 20px;
margin-left:-10%;
`
const Box2 = styled.div`
    
padding:10px ;
margin:10px 0px;
height: 100px;
width: 500px;
border-radius: 50px 50px 50px 50px;
border: 0px solid white;
background-color:#FEB442;
font-size:20px;
padding-left: 200px;
margin-left:-10%;
text-align: center;
padding-bottom: 20px;
margin-left:-20%;
`
const Box3 = styled.div`
    
padding:10px ;
margin:20px 0px;
height: 100px;
width: 500px;
border-radius: 50px 50px 50px 50px;
border: 0px solid white;
background-color:#FEB442;
font-size:20px;
padding-left: 200px;
padding-bottom: 20px;
margin-left:-20%;
text-align: center;
margin-left:-30%;
`
const Wrapper = styled.div`
    width:130vw ;
    height:100% ;
    display:flex;
    flex-direction:column;
    margin-left: -35%;
    margin-top: -10%;
    
    
`
const Title = styled.h2`
    margin-top: 20%;
    font-size:80px ;
    font-weight:650 ;
    text-align: right;
    
    white-space: nowrap;
    overflow: hidden;
  
    
    
`
const Desc = styled.p`
    margin-top:20px;
    color:gray;
    font-size:20px ;
    word-spacing:5px ;
    margin-right: 15%;
    margin-left:-19%;
    text-align: left;
    word-wrap: break-word
    width: fit-content;
    block-size: fit-content;
    
    
`

const Top = styled.div`
    
    display:flex;    
    margin:3px;
    align-items:left ;
    margin-left:18%;

`
const Left = styled.div`
width:900px;
height: 70px:
margin-left: 20%;


`
const Right = styled.div`
margin-top: 7%;
width: 40%;
margin-bottom:-12%; 
margin-right: -10%;
`



const Input = styled.input`
    height:30px ;
    width:40vw ;
    border:1px lightgray solid ;
    outline:none ;
    padding:5px 18px;
    margin:13px 0;
`


  const Image = styled.div`
    margin-top: 15%;
    padding-left:15%;
    
  `


  


