import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import landing from "../images/landing.png";
import { animateScroll as scroll } from "react-scroll";

function Landing(props) {
  const navigate = useNavigate();

  const scrollToUpcoming = (e) => {
    e.preventDefault();
    scroll.scrollTo(4150);
  };
  const scrollToLearnMore = (e) => {
    e.preventDefault();
    scroll.scrollTo(1000);
  };

  function scrollToAboutUs(e) {
    e.preventDefault();
    scroll.scrollTo(1000);
  }
  return (
    <>
      <Container>
        <Wrapper>
          {props?.user ? (
            <>
              <Top>
                <Left>
                  <Title>
                    Show your <br /> Skills
                  </Title>
                  <Desc>Give these tests to qualify into hackathons.</Desc>
                </Left>
                <Right>
                  <Image>
                    <img
                      src={landing}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Image>
                </Right>
              </Top>
              <Bottom>
                <Bcenter>
                  <Button1 onClick={(e) => scrollToUpcoming(e)}>
                    Get Started
                  </Button1>
                  <Button2
                    onClick={(e) => {
                      scrollToLearnMore(e);
                    }}
                  >
                    Learn more
                  </Button2>
                </Bcenter>
              </Bottom>
            </>
          ) : (
            <>
              <Top>
                <Left>
                  <Title>
                    Turning Imagination <br /> into Ideas
                  </Title>
                  <Desc>
                    We excel in helping organisations assemble the strongest
                    technical teams,
                    <br /> while empowering candidates to refine their skills
                    and seize promising <br /> opportunities to unlock their
                    potential
                  </Desc>
                </Left>
                <Right>
                  <Image>
                    <img
                      src={landing}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Image>
                </Right>
              </Top>
              <Bottom>
                <Bcenter>
                  <Button1 onClick={(e) => navigate("/register")}>
                    Get Started
                  </Button1>
                  <Button2 onClick={(e) => scrollToAboutUs(e)}>
                    Learn more
                  </Button2>
                </Bcenter>
              </Bottom>
            </>
          )}
        </Wrapper>
      </Container>
    </>
  );
}

export default Landing;

const Container = styled.div`
  height: 850px;
  display: flex;
  justify-content: center;
  background-color: #f1f0e8;
`;
const Wrapper = styled.div`
  width: 70vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h2`
  margin-top: 10%;
  font-size: 80px;
  font-weight: 650;
  text-align: left;
  margin-left: -20%;
`;
const Desc = styled.p`
  margin-top: 20px;
  color: gray;
  font-size: 20px;
  word-spacing: 5px;
  margin-right: 15%;
  margin-left: -19%;
  text-align: left;
`;

const Top = styled.div`
  flex: 2;
  display: flex;
  margin: 3px;
  display: flex;
  align-items: left;
  justify-content: space-evenly;
`;
const Left = styled.div`
  width: 70%;
`;
const Right = styled.div`
  margin-top: 7%;
  width: 40%;
  margin-bottom: -12%;
  margin-right: -10%;
`;
const Bottom = styled.div`
  margin: 3px;
  align-items: flex-start;
  margin-bottom: 30%;
  padding: 50px;
  margin-left: -230px;
`;

const Input = styled.input`
  height: 30px;
  width: 40vw;
  border: 1px lightgray solid;
  outline: none;
  padding: 5px 18px;
  margin: 13px 0;
`;
const Bcenter = styled.div`
  width: 36vw;
  display: flex;

  justify-content: space-between;
  text-align: left;
  align-items: left;
  margin-left: 4%;
  margin-top: -7%;
`;
const Button1 = styled.button`
  appearance: none;
  backface-visibility: hidden;
  background-color: #0e21a0;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, 0.15) 0 4px 9px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 20px 70px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
  margin-right: 20px;
  text-align: center;
`;

const Image = styled.div`
margin-top: 25%;
 heigth:50%
  margin-bottom: 30%;
  `;

const Button2 = styled.button`
  appearance: none;
  backface-visibility: hidden;
  background-color: white;
  border-radius: 10px;
  border-width: thin;
  border-style: solid;
  box-shadow: rgba(39, 174, 96, 0.15) 0 4px 9px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 20px 70px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
`;
