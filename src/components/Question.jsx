import React, { useState } from "react";
import styled from "styled-components";
import Option from "./Option";

function Question(props) {
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <Qno>Q-{props?.question}</Qno>
            <Qtext>{props?.text}</Qtext>
          </Top>
          <Bottom>
            <Option id={props?.question} options={props?.options} />
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
}

export default Question;

const Container = styled.div`
  height: 100%;
`;
const Wrapper = styled.div``;
const Top = styled.div`
  display: felx;
  font-size: 15px;
  margin-bottom: 3%;
`;
const Qno = styled.h1``;
const Qtext = styled.h1``;
const Bottom = styled.div``;
