import React from 'react'
import { useState } from 'react';
import MilitaryTechSharp from '@mui/icons-material/MilitaryTechSharp';
import BadgeSharpIcon from '@mui/icons-material/BadgeSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import HandshakeSharpIcon from '@mui/icons-material/HandshakeSharp';
import styled from 'styled-components';
import {publicRequest} from '../Axios';
import {useDispatch, useSelector} from 'react-redux'
import {loginFailure,loginStart, loginSuccess} from '../redux/userRedux'
import loginBG from '../images/loginBG.png'
import { useNavigate } from 'react-router-dom';

function Type(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {isFetching, error} = useSelector((state)=> state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (e)=>{
        e.preventDefault();
        // dispatch(loginStart())
        try {
            const res = await publicRequest.post('/auth/login',{
                username,
                password
            })
            console.log(res.data)     
            dispatch(loginSuccess(res.data))   
        } catch (error) {
            dispatch(loginFailure(error.response.data.message))
        }
    }


  return (
        <>
        <Body>
            {props?.id==='login'?(<Title1>Log-In Options <br /></Title1>):(<Title1>Sign-Up Options <br /></Title1>)}
        <WrapContainer src={loginBG}>
       
            <Wrapper>
                <Title>As a Student</Title>
                <Form>
                <Top>
                    <BadgeSharpIcon fontSize='large'/>
                    <Text>Access to our features<br /></Text>
                    <MilitaryTechSharp fontSize='large'/>
                    <Text>Cool prizes for Winners <br /></Text>
                    <GroupsSharpIcon fontSize='large'/>
                    <Text>Partner with great Companies and Teams<br/>for exciting Haclathons <br /></Text>
                    <HandshakeSharpIcon fontSize='large'/>
                    <Text>Mentorship and Support to Beginners from Leaders</Text>
                    
                </Top>
                    <Button id = {props?.id} onClick={(e)=> {props?.id==='login'?(navigate('/login')):(navigate('/register'))}} disabled={isFetching}>{props?.id==='login'?(<>Login</>):(<>Signup</>)}</Button>

                    {error && <Error>{error}</Error>}
                    
                    
                </Form>
            </Wrapper>
            <Wrapper>
                <Title>As an Organiser</Title>
                
                <Form>
                <Top>
                    <BadgeSharpIcon fontSize='large'/>
                    <Text>Access to our features an platform <br /></Text>
                    <ListSharpIcon fontSize='large'/>
                    <Text>Get listed on the Hackathons page for more reach <br /></Text>
                    <GroupsSharpIcon fontSize='large'/>
                    <Text>Support from our team <br /></Text> 
                </Top>
                    <Button id= {props?.id } onClick={(e)=> {props?.id==='login'?(navigate('/login')):(navigate('/register'))}} disabled={isFetching}>{props?.id==='login'?(<>Login</>):(<>Signup</>)}</Button>

                    {error && <Error>{error}</Error>}
                </Form>
              
            </Wrapper>
        </WrapContainer>
        </Body>
    </>
    
  )
}

export default Type



const Title1 = styled.h1`
    margin-top:10%;
    margin-bottom:10% ;
    font-weight:610px;
    font-size:70px ;
    letter-spacing:2px ;
    text-align:center;
    
`


const Body = styled.div`
    
    background-color:#E2E9EF;
    margin-top: -12%;

    padding-top:5%;
    
    
`
const WrapContainer = styled.div`
    
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:100vw;
    height:100vh;
    margin-top:-13%;
    
`
const Wrapper = styled.div`
    background-color: #F9FEFE;
    width:35vw ;
    padding:20px ;
    
    height: 70%;

    justify-content:center;
    border-radius:5%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    
`

const Title = styled.h1`
    margin-top:10%;
    margin-bottom:10% ;
    font-weight:600;
    font-size:50px ;
    letter-spacing:2px ;
    text-align:center;
`
const Form = styled.form`
    display:flex ;
    flex-direction:column ;
    text-align:center;
    align-items: center;
    text-align:left;

`
const Input = styled.input`
    
    padding:10px ;
    margin:10px 0px;
    height: 50px;
    width: 90%;
    border-radius: 50px 50px 50px 50px;
    border: 0px solid white;
    background-color:#F0F5FA;
    font-size:20px;
    padding-left: 20px;
`
const Button = styled.button`
    margin-top:10% ;
    color:white;
    cursor: pointer;
    width:500px;
    font-size:20px;
    padding:20px 15px;
    font-weight:700;
    letter-spacing:3px ;
    background-color:${(props)=> props?.id==='login'?('#FEB442'):('blue')};
    border:none;
    &:disabled{
        color: teal;
        cursor: not-allowed;
    }
    border-radius: 50px 50px 50px 50px;
    margin-bottom: 5%;
    
`
const Links = styled.div`
    font-size:15px;
    cursor: pointer;
    font-weight:200 ;
    margin-top:20px;
    white-space: pre-wrap;
    letter-spacing: 1px;
    

`
const Error = styled.span`
    color:red ;
    margin-top:10px ;
`
const Extra = styled.div`
    margin-left:-1%;
   
   
    display: flex;
    justify-content: space-evenly;

`
const Text = styled.a`
    font-size: 20px;
    letter-spacing: 1px;
    
`
const Top = styled.a`
    font-size: 25px;
    letter-spacing: 1px;
    line-height: 1.6;
    
    
`