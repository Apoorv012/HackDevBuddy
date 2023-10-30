import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Result from "../images/result.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebase_configs";
import { useSelector, useDispatch } from "react-redux";

function Sturesult() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { isFetching, error } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state?.data?.user);

  return (
    <>
      <WrapContainer src={Result}>
        <Body>
          <Vertical>
            <SKILLER>SKILLER</SKILLER>
            <Ribbon>
              <Title>Test Report</Title>
              <Text1>{currentUser?.user?.username}</Text1>
            </Ribbon>

            <Top>
              <Text onClick={(e) => navigate("/home")}>Dashboard</Text>
            </Top>
            <Bottom>
              <Text>Settings</Text>
              <Text>Log Out</Text>
            </Bottom>
          </Vertical>
          <Division>
            <div>
              <TopDiv>
                <Heading>
                  Your result will be out <br /> soon.
                </Heading>
                <Text2>Based on the answers you gave</Text2>
              </TopDiv>
              <TwoDivsContainer>
                <TwoDiv>
                  <Text3>Number of Questions</Text3>
                  <Marks2>4</Marks2>
                </TwoDiv>
                <TwoDiv>
                  <Text3>
                    Number of Attempted <br /> Questions
                  </Text3>
                  <Marks2>4</Marks2>
                </TwoDiv>
              </TwoDivsContainer>
            </div>
          </Division>
        </Body>
      </WrapContainer>
    </>
  );
}

export default Sturesult;

const Division = styled.div`
  margin-top: 5%;
  margin-left: 3%;
`;

const Division2 = styled.div`
  margin-top: 7%;
`;

const Body = styled.div`
  display: flex;
`;
const Score = styled.div`
  border: solid red;
  width: 55vw;
  height: 30vh;

  margin-left: 5%;
  margin-top: 7%;
`;

const Ribbon = styled.div`
  width: 85vw;
  height: 8vh;
  align-items: center;
  margin-top: -35%;
  margin-left: 100%;
  justify-content: space-between;
  display: flex;
  background-color: #feb442;
`;
const Title = styled.h1`
  font-size: 30px;

  margin-left: 20px;
`;

const WrapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props?.src});
  background-size: cover;
  padding-bottom: 2%;
`;

const Vertical = styled.div`
  background-color: white;
  width: 15vw;
  height: 104vh;
`;

const SKILLER = styled.h1`
  margin-top: 0px;
  padding-top: 10%;
  margin-left: 10%;
`;
const Text = styled.button`
  align-items: center;
  appearance: none;
  background-color: #0e21a0;
  background-size: calc(100% + 20px) calc(100% + 20px);
  border-radius: 100px;
  border-width: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: CircularStd, sans-serif;
  font-size: 1rem;
  height: auto;
  justify-content: center;
  line-height: 1.5;
  padding: 10px 80px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, background-position 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  margin-left: -3.5%;
  font-size: 20px;
  margin-top: 3%;
`;
const Text1 = styled.p`
  margin-right: 10%;
`;

const Bottom = styled.div`
  margin-top: 150%;
  text-align: center;
`;
const Top = styled.div`
  pointer: cursor;
  margin-top: 0px;
  text-align: center;
  margin-top: 20%;
`;

const TopDiv = styled.div`
  margin-top: 20000px;
  padding: 10px;
  margin: 10px;
  height: 30vh;
  width: 60vw;
  background-color: #0e21a0;
  border-radius: 20px 20px 20px 20px;
  color: white;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const TwoDivsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20vh;

  border-radius: 20px 20px 20px 20px;
`;

const TwoDiv = styled.div`
  flex: 1;
  padding: 10px;
  margin: 10px;
  height: 20vh;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
  padding-top: 3%;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const BottomDiv = styled.div`
  margin-bottom: 0px;
  padding: 10px;
  margin: 10px;
  height: 20vh;
  width: 29vw;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
  padding-top: 3%;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

const Text2 = styled.p`
  font-size: 35px;
  letter-spacing: 2px;
  margin-left: 4%;
  margin-top: -2%;
  font-weight: 500;
`;
const Heading = styled.h1`
  font-size: 50px;
  margin-left: 5%;
  letter-spacing: 3px;
  margin-top: 3%;
`;
const Marks = styled.p`
  font-size: 80px;
  margin-right: 12%;
  letter-spacing: 3px;
  text-align: right;
  margin-top: -13%;
`;
const Text3 = styled.p`
  font-size: 35px;
  letter-spacing: 2px;
  margin-left: 4%;
  margin-top: -2%;
  font-weight: 500;
`;

const Marks2 = styled.p`
  font-size: 50px;
  margin-right: 7%;
  letter-spacing: 3px;
  text-align: right;
  margin-top: -6%;
  margin-bottom: 2%;
`;
