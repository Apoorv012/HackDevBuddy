import React from "react";
import Navbar from "../components/Navbar";
import Question from "../components/Question";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import webgazer from "webgazer";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase_configs";
import { collection, addDoc } from "firebase/firestore";


function Exam() {
  const answer = useSelector((state) => state?.data?.answer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.data?.user);

  webgazer.saveDataAcrossSessions(true);
  webgazer.showPredictionPoints(true);
  webgazer.showVideo(true);
  try {
    webgazer.setVideoViewerSize(400, 300);
  } catch (error) {}
  webgazer
    .setGazeListener(function (data, elapsedTime) {
      if (data == null) {
        return;
      }
      const xPrediction = data.x;
      const yPrediction = data.y;
      // console.log(data);
    })
    .begin();

  const submitAnswer = async (e) => {
    e.preventDefault();
    const email = await currentUser?.user?.email;
    console.log(answer.answer);

    // Add userType to the database
    const userAnswerCollRef = collection(db, "userAnswers");
    await addDoc(userAnswerCollRef, {
      email: email,
      answer: answer.answer,
    })
      .then((e) => {
        console.log("UserType added to the database");
        // dispatch(userType("student"));
        navigate("/student/result");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Body>
        <Record>
          <Cam></Cam>
          <Warning>
            <Title2>Warning!</Title2>
            <Text2>Number of times looked away: 8</Text2>
            <Text2>Max limit: 10</Text2>
            <Button onClick={() => webgazer.clearData()}>Recalibrate</Button>
          </Warning>
          {/* A button to recalibrate the data for webgazer's regression model */}

          <Text3>Time Left - 09:59min</Text3>
        </Record>
        <Form typeof="submit">
          <Wrapper>
            <Container1>
              <Title>Exam Name</Title>
              <Text>About the Exam(Description)</Text>
              <Text>Time Duration(any)</Text>
            </Container1>
            <Containerb>
              <Question question="1" />
            </Containerb>
            <Containery>
              <Question question="2" />
            </Containery>
            <Containerb>
              <Question question="3" />
            </Containerb>
            <Containery>
              <Question question="4" />
            </Containery>

            <Submit type="submit" onClick={(e) => submitAnswer(e)}>
              Submit
            </Submit>
          </Wrapper>
        </Form>
      </Body>
    </>
  );
}

export default Exam;

const Body = styled.div`
  background-color: #f1f0e8;
  height: 100%;
  width: 100vw;
  display: flex;
  padding-bottom: 5%;
`;
const Record = styled.div`
  display: flex;
  background-color: #f1f0e8;
  width: 20vw;
  height: 90%;
  margin-top: 1%;
  margin-left: 3%;
  position: fixed;
`;
const Cam = styled.div`
  display: flex;
  background-color: #f1f0e8;
  width: 20vw;
  height: 30%;
  border: dotted red;
  margin-top: 2%;
  margin-left: -2px;

  position: fixed;
`;
const Warning = styled.div`
  background-color: white;
  border-radius: 20px 20px 20px 20px;
  width: 20vw;
  height: 30%;

  margin-top: 20%;
  margin-left: -2px;
  position: fixed;
  white-space: pre;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 1%;
`;
const Text = styled.div`
  font-size: 20px;
`;
const Text3 = styled.h1`
  font-size: 30px;
  margin-bottom: 4%;
  margin-top: 200%;
  text-align: center;
  color: black;
`;

const Title2 = styled.h1`
  font-size: 50px;
  margin-bottom: 4%;
  margin-top: 1%;
  text-align: center;
  color: #db3030;
`;
const Text2 = styled.div`
  font-size: 20px;
  line-height: 150%;
  color: #0e21a0;
  margin-bottom: 4%;
  margin-top: 6%;
  margin-left: 5%;
`;

const Submit = styled.button`
  margin-top: 2%;
  
  align-items: center;
  appearance: none;
  background-color: #0E21A0;
  background-size: calc(100% + 20px) calc(100% + 20px);
  border-radius: 100px;
  border-width: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-flex;
  font-family: CircularStd,sans-serif;
  font-size: 1rem;
  height: auto;
  justify-content: center;
  line-height: 1.5;
  padding: 10px 90px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color .2s,background-position .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  margin-left: -3.5%;
  font-size: 20px;
  margin-top: 3%;
}
`;
const Form = styled.form`
  margin-left: 20%;
`;
const Container1 = styled.div`
  width: 100%;

  border: solid 4px #feb442;
  float: right;
  border-radius: 30px 30px 30px 30px;

  padding-left: 2.5%;
  margin-top: 2%;
  padding-top: -15%;
  padding-bottom: 2%;
  background-color: white;
`;
const Containerb = styled.div`
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;

  float: right;
  border-radius: 30px 30px 30px 30px;
  padding-left: 2.5%;
  margin-top: 2%;
  border: solid 4px #0e21a0;
  background-color: white;
`;
const Containery = styled.div`
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;

  float: right;
  border-radius: 30px 30px 30px 30px;
  padding-left: 2.5%;
  margin-top: 2%;
  border: solid 4px #feb442;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 70%;
  height: 100%;

  float: right;
  border-radius: 50px 50px 50px 50px;
  margin-right: 2%;
  padding-left: 2%;
`;

const Button = styled.div`
  margin-top: 15%;
  color: black;
  cursor: pointer;
  width: 90%;
  font-size: 20px;
  padding: 20px 15px;
  font-weight: 700;
  letter-spacing: 3px;
  background-color: white;
  border: none;
  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
  border-radius: 50px 50px 50px 50px;
  margin-bottom: 5%;
  text-align: center;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;
