import React, { useState } from 'react'
import styled from 'styled-components'
import {publicRequest} from '../Axios'
import {useNavigate} from 'react-router-dom'
import signupBG from '../images/signupBG.png'
import DatePicker from "react-date-picker";

function Register() {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [email, setEmail] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [dateValue, onDateChange] = useState(new Date());
    const [date, setDate] = useState(new Date());
    
    

    const register = async (e)=>{
        e.preventDefault()
        try {    
            
            if(confirmPass!==password){
                setError('Password Do Not Match')
                setTimeout(()=>{
                    setError('')
                },2000)
            }else{
                const res = await publicRequest.post('/auth/register',{
                    username,
                    email,
                    password
                })
                console.log(res.data)
                setMessage('User Registered')
                setTimeout(()=>{
                        navigate('/login')
                },2000)
            }    
            
        } catch (error) {
            setError(error.response.data.message)
                    setTimeout(()=>{
                        setError('')
                    },2000)
        }
    }
    
   return (
    <>
        <WrapContainer src={signupBG}>
            <Wrapper>
                <Title>Sign Up</Title>
                <Form>
                <Input placeholder='Userame' onChange={(e)=> setUsername(e.target.value)}/>
                        <Input type="email" placeholder='Email' />
                        <Input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                        <Input type="password" placeholder='Confirm Password' onChange={(e)=> setPassword(e.target.value)}/>
                        <Input type="Gender" placeholder='Gender'/>
                        <Input type="date" placeholder='Date of Birth'/>
                    <Extra><Links><input type="checkbox"  /> Remember passworod                                            </Links>
                  
                    </Extra>
                    <Button onClick={(e)=> Register(e)}>SIGN UP</Button>

                    {error && <Error>{error}</Error>}
                    
                    <Text>Already have an account? Sign In</Text>
                </Form>
            </Wrapper>
        </WrapContainer>
    </>
  )
}

export default Register



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
    
    height: 90%;

    justify-content:center;
    border-radius:5%;
    
`
const Title = styled.h1`
    margin-top:5%;
    margin-bottom:5% ;
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
    height: 30px;
    width: 90%;
    border-radius: 50px 50px 50px 50px;
    border: 0px solid white;
    background-color:#F0F5FA;
    font-size:15px;
    padding-left: 20px;
`
const Button = styled.button`
    margin-top:7% ;
    color:white;
    cursor: pointer;
    width:90%;
    font-size:15px;
    padding:14px 15px;
    font-weight:700;
    letter-spacing:3px ;
    background-color:#0E21A0;
    border:none;
    &:disabled{
        color: teal;
        cursor: not-allowed;
    }
    border-radius: 50px 50px 50px 50px;
    margin-bottom: 3%;
    
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
    font-size: 15px;
    letter-spacing: 1px;
    
`