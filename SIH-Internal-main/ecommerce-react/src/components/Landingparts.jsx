import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import {PhoneAndroidOutlined,LanguageSharp, NetworkCheckSharp, ComputerSharp,Headset} from '@material-ui/icons'

function Landingparts(props) {
  return (
    <>  {props.card=='1'?
            <Container>
            <Bgcolor1>
            <Wrapper>
            <Margin>
                <Title>{props.title}</Title>
            <Middle1>
                <Card bg = "rgba(33, 255, 107, 0.54)" icon = {<ComputerSharp fontSize='large'/>} heading = "PC or laptop with webcam" desc="A special software is used to run the proctoring tests. You will need a computer or laptop with Windows, MacOS or Linux OS and a webcam with microphone. If you are using a laptop, make sure that it's plugged to a socket, so that the battery does not run out during the test."/>
                <Card bg = "rgba(31, 94, 255, 0.54)" icon = {<PhoneAndroidOutlined fontSize='large'/>} heading = "Smartphone or Tablet" desc="Sometimes it may be necessary to connect the camera of your Android or iOS smartphone for a better view of the workplace and the room. It is recommended that the smartphone is connected to a charger so that the battery does not run out during the process."/>
                
            </Middle1>
            <Middle2>
                <Card bg = "rgba(255, 217, 0, 0.54)" icon = {<LanguageSharp fontSize='large'/>} heading = "An up to date Web browser" desc="Proctoring system works in Chrome, Edge, Opera, Firefox or Safari browser. You need to update the web browser on your computer to the latest version. No additional software, extensions or plug-ins required."/>
                <Card bg = "pink" icon = {<NetworkCheckSharp fontSize='large'/>} heading = "A stable internet connection" desc="The proctoring test is conducted online, therefore a computer (and smartphone if using a second camera) requires a stable internet connection with a speed of at least 256 kbps (both directions). You can check your internet speed here."/>
                
            </Middle2>
            </Margin>
            <Bottom>

            </Bottom>
            </Wrapper>
            </Bgcolor1>
            </Container>: 
        props.card=='2'?
            <Container>
             <Bgcolor2>
          <Wrapper>
            <Margin>
              <Title>{props.title}</Title>
            <Middle1>
              <Card bg = "rgba(33, 255, 107, 0.54)" icon = {<ComputerSharp fontSize='large'/>} heading = "Make sure that your room is well lit" desc="You should always be clearly visible. You will be able to see how you are seen through your webcam when you connect the proctor. Make sure the lighting is adequate and that the light source is not directed at the camera (no glare)."/>
              <Card bg = "rgba(31, 94, 255, 0.54)" icon = {<PhoneAndroidOutlined fontSize='large'/>} heading = "Ensure that you are alone in the room" desc="You must be the only person taking the examination, the presence of someone else in the room is a serious violation. Make sure that you locked up any irrelevant personal information that you do not want to show, such as photographs or personal belongings."/>
              
            </Middle1>
            <Middle2>
              <Card bg = "rgba(255, 217, 0, 0.54)" icon = {<LanguageSharp fontSize='large'/>} heading = "The camera is installed correctly" desc="On both your computer webcam and your smartphone camera, we need to be able to see your face and your workspace clearly. Check the videos that are displayed on your screen after the test has started, it will tell you exactly what is being recorded and how it is being recorded, whether the camera needs to be corrected."/>
              <Card bg = "pink" icon = {<NetworkCheckSharp fontSize='large'/>} heading = "A stable internet connection" desc="The proctoring test is conducted online, therefore a computer (and smartphone if using a second camera) requires a stable internet connection with a speed of at least 256 kbps (both directions). You can check your internet speed here."/>
              
            </Middle2>
            </Margin>
            <Bottom>

            </Bottom>
          </Wrapper>
          </Bgcolor2>
        </Container> :

            <Container>
            <Bgcolor3>
            <Wrapper>
                <Margin>
                <Title>{props.title}</Title>
                <Middle1>
                <Card bg = "rgba(33, 255, 107, 0.54)" icon = {<Headset fontSize='large'/>} heading = "No additional devices" desc="During the test, you are not allowed to use additional devices such as second screens or phones/tablets. Except when a smartphone is used as a second camera."/>
                <Card bg = "rgba(31, 94, 255, 0.54)" icon = {<PhoneAndroidOutlined fontSize='large'/>} heading = "No headphones/headsets" desc="We must be able to hear what you hear for the exam to be valid. Therefore do not use headphones, headsets or other similar devices."/>
                
                </Middle1>
                <Middle2>
                <Card bg = "rgba(255, 217, 0, 0.54)" icon = {<LanguageSharp fontSize='large'/>} heading = "No talking (or singing)." desc="Any noise and talking will be analysed for suspicious behaviour, so make sure you are in a quiet environment and refrain from talking."/>
                <Card bg = "pink" icon = {<NetworkCheckSharp fontSize='large'/>} heading = "No interruptions" desc="You will need to stay on camera throughout the test, so no interruptions (including for toilet breaks) are allowed."/>
                
                </Middle2>
                </Margin>
                <Bottom>

                </Bottom>
            </Wrapper>
            </Bgcolor3>
            </Container>
             }
    </>
  )
}

export default Landingparts




const Container = styled.div`
margin-bottom:12%;

`

const Wrapper = styled.div`

`
const Title = styled.h2`
font-size:80px ;
font-weight:550 ;
text-align: center;
margin-bottom: 5%;
`

const Middle1 = styled.div`
display: flex; 
justify-content:space-evenly;

`
const Middle2 = styled.div`
margin-top:3%;
display: flex;
justify-content: space-evenly;


`
const Bottom = styled.div`
`

const Margin = styled.div`
  margin-top:5%;
 
`
const Bgcolor1 = styled.div`
  background-color:#EDEFFF;
  margin-top:-5%;
  
  padding-top:2%;
  padding-bottom: 5%;
`
const Bgcolor2 = styled.div`
  margin-top:-12%;
 
  padding-top:1px;
  padding-bottom:5%;
`
const Bgcolor3 = styled.div`
  
  margin-top:-5%;
  padding-bottom:5%;
  
`