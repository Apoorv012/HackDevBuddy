import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import {publicRequest} from '../Axios';
import {useDispatch, useSelector} from 'react-redux'
import {loginFailure,loginStart, loginSuccess} from '../redux/userRedux'
import loginBG from '../images/loginBG.png'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {isFetching, error} = useSelector((state)=> state.user)
    const dispatch = useDispatch();

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
        <WrapContainer src={loginBG}>
            <Wrapper>
                <Title>Log In</Title>
                <Form>
                    <Input placeholder='Userame' onChange={(e)=> setUsername(e.target.value)}/>
                    <Input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                    <Extra><Links><input type="checkbox"  /> Remember password                      </Links>
                    <Links>Forgot passoword?</Links>
                    </Extra>
                    <Button onClick={(e)=> login(e)} disabled={isFetching}>LOGIN</Button>

                    {error && <Error>{error}</Error>}
                    
                    <Text>Don't have an account? Sign Up</Text>
                </Form>
            </Wrapper>
        </WrapContainer>
    </>
  )
}

export default Login



const WrapContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
    background-image: url(${props => props?.src});
    background-size: cover;
`
const Wrapper = styled.div`
    background-color:white ;
    width:30vw ;
    padding:20px ;
    
    height: 80%;

    justify-content:center;
    border-radius:5%;
    
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
    width:90%;
    font-size:20px;
    padding:20px 15px;
    font-weight:700;
    letter-spacing:3px ;
    background-color:#FEB442;
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
    font-size: 17px;
    letter-spacing: 1px;
    
`