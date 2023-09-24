import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {Search, ShoppingBasketOutlined, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Navbar(props) {
    const Navigate = useNavigate()

    const goTo = (e)=>{
       Navigate(`/${e.target.name}`)
    }

  return (
    <Container>
        
         <Ribbon></Ribbon>
        <Wrapper>
       
            <Left>
            
            <Logo>{props?.id==='main'? 'LOGO' : props?.id==='student'? 'Login' : 'Organizer'}</Logo>
           
            </Left>
            <Center>
                
            </Center>
            <Right>
                <MenuItem>About us</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Contact</MenuItem>
                <Button2 name = {props?.id==='main'? 'student' : 'register'} onClick={(e)=> goTo(e)}>{props?.id==='main'? 'LOGIN' : 'SIGNUP'} </Button2>
                <Button1 name={props?.id==='main'? 'organizer' : 'login'} onClick={(e)=> goTo(e)}>{props?.id==='main'? 'SIGNUP' : 'LOGIN'}</Button1>
                
            </Right>
      
        </Wrapper>
       
    </Container>
  )
}


const Container = styled.div`
    height: 30%;
    background-color:#F1F0E8;    

`
const Wrapper = styled.div`
    padding: 15px 20px ;
    display:flex;
    justify-content:space-between;
    align-items:center ;
    height: 120px;
 

`
const Language = styled.span`
    font-size: 15px ;
    cursor: pointer;
`
const Input = styled.input`
    border: none ;
    outline:none ;
    width:90% ;
`
const SearchContainer = styled.div`
    border: 0.5px lightgray solid ;
    margin-left: 30px ;
    width:60% ;
    display:flex;
    align-items:center;
    justify-content:space-between ;
    padding: 5px 15px ;
`
const Left = styled.div`
    background-color: #FEB442;
    align-items:center ;
    margin-left:30px ;
    width:230px;
    height: 140px;
    border-radius:10%;
    margin-top:-100px;
    text-align: center;
    
`
const MenuItem = styled.div`
    cursor: pointer;
    font-size:18px ;
    margin-left:30px ;
    margin-right:10px ;
    color:#787874;
`
const Right = styled.div`
    flex: 1.2 ;
    display:flex;
    justify-content: space-between;
    margin-top: -60px;
    align-items: center ;
    margin-right:40px;
`
const Logo = styled.h1`
    font-weight:900;
    margin: auto;
    justify-content:center;
    margin-top:25%;
`
const Center = styled.div`
    flex: 1 ;
    text-align:center ;
`



export default Navbar



const Button1 = styled.button`
  appearance: none;
  backface-visibility: hidden;
  background-color: #FEB442;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 15px 40px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;`


  


const Button2 = styled.button`
    appearance: none;
    backface-visibility: hidden;
    background-color: white;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    overflow: hidden;
    padding: 15px 30px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;`

const Ribbon = styled.div`
    height: 3px
    width: 1000px;
    background-color: #0E21A0;
    border-top: 30px solid #0E21A0;
    
`