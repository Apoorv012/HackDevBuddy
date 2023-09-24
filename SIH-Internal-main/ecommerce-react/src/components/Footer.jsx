import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <> 
        <Container>
            <Wrapper>
                <Left> 
                    <Logo>SCHY.</Logo>
                    <Desc>
                        Quia voluptas aspernatur aut odit aut fugit, sed consequuntur magni dolores eos qui ratione nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </Desc>
                    <Social>
                        <Circle color={'3B5999'}>
                            <Facebook style={{color:'white'}}/>
                        </Circle>
                        <Circle color={'E4405F'}>
                            <Instagram style={{color:'white'}}/>
                        </Circle>
                        <Circle color={'55ACEE'}>
                            <Twitter style={{color:'white'}}/>
                        </Circle>
                        <Circle color={'E60023'}>
                            <Pinterest style={{color:'white'}}/>
                        </Circle>
                    </Social>
                </Left>
                <Center>
                    <Title>Usefull Links</Title>
                    <CenterBottom>
                        <BottomL>
                            <Links>Home</Links>
                            <Links>Man Fashion</Links>
                            <Links>Accessories</Links>
                            <Links>Order Tracking</Links>
                            <Links>Wishlish</Links>
                        </BottomL>
                        <BottomR>
                            <Links>Cart</Links>
                            <Links>Woman Fashion</Links>
                            <Links>My Account</Links>
                            <Links>Wishlist</Links>
                            <Links>Terms</Links>
                        </BottomR>
                    </CenterBottom>
                </Center>
                <Right>
                    <Title>Contact</Title>
                    <ContactItem><Room style={{marginRight:'10px'}}/>G-1204 Assotech 201305</ContactItem>
                    <ContactItem><Phone style={{marginRight:'10px'}}/>+919871944389</ContactItem>
                    <ContactItem><Mail style={{marginRight:'10px'}}/>choudharysarthak@gmail.com</ContactItem>
                    <Payment src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MKNwAx38iSpdjyDI7Mk3-7g8J8lfIUF-tA&usqp=CAU'/>
                </Right>
            </Wrapper>
        </Container>
    </>
  )
}

export default Footer

const Container = styled.div`
    height:30vh ;
`
const Wrapper = styled.div`
    height:100% ;
    width:100% ;
    display:flex ;
`
const Left = styled.div`
    flex:1;
    padding:20px ;
`
const Logo = styled.h2`
    font-size:25px ;
    margin-left:10px ;
`
const Desc = styled.p`
    margin:20px 10px ;
    text-align:left ;
`
const Social = styled.div`
    display:flex;
    width:100% ;
    height:20% ;
`
const Circle = styled.div`
    height:40px;
    width:40px;
    border-radius:50%;
    margin:0 10px;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    background-color: #${(props)=>props.color};
`
const Center = styled.div`
    flex:1;
    display:flex ;
    flex-direction:column ;
    padding:20px ;
`
const Title = styled.h3`
    margin-bottom: 30px;
    font-weight:600 ;
`

const CenterBottom = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:space-around ;
`
const BottomL = styled.div`
    flex:1 ;
    display:flex ;
    flex-direction:column ;
    align-items:flex-start ;
`
const BottomR = styled.div`
    flex:1 ;
    display:flex ;
    flex-direction:column ;
    align-items:flex-start ;
`
const Links = styled.span`
    margin:10px 0;
    cursor: pointer;
`
const Right = styled.div`
    flex:1;
    padding:20px ;

`
const ContactItem = styled.div`
    display:flex ;
    align-items:center ;
    margin-bottom:20px ;
`
const Payment = styled.img`
    object-fit:contain;
    width:7vw;
    height:7vh;
`