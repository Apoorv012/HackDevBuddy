import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAnswer } from "../features/answerSlice";

function Option(props) {
  const [checked, setChecked] = useState("");
  const answer = useSelector((state) => state.data.answer.answer);
  const dispatch = useDispatch();

  useEffect(() => {
    let newAnswer = answer.filter((ans) => ans.questionId !== props.id);
    // Add new entry to newAnswer
    newAnswer.push({
      questionId: props?.id,
      answerId: checked,
    });

    dispatch(setAnswer(newAnswer));
  }, [checked]);

  return (
    <>
      <Container>
        <Input
          type="radio"
          value={props?.options?.a}
          onChange={(e) => setChecked(e.target.value)}
          checked={checked === props?.options?.a}
        />
        <Label htmlFor={props?.options?.a}>{props?.options?.a}</Label> <br />
        <Input
          type="radio"
          value={props?.options?.b}
          onChange={(e) => setChecked(e.target.value)}
          checked={checked === props?.options?.b}
        />
        <Label htmlFor={props?.options?.b}>{props?.options?.b}</Label> <br />
        <Input
          type="radio"
          value={props?.options?.c}
          onChange={(e) => setChecked(e.target.value)}
          checked={checked === props?.options?.c}
        />
        <Label htmlFor={props?.options?.c}>{props?.options?.c}</Label> <br />
        <Input
          type="radio"
          value={props?.options?.d}
          onChange={(e) => setChecked(e.target.value)}
          checked={checked === props?.options?.d}
        />
        <Label htmlFor={props?.options?.d}>{props?.options?.d}</Label> <br />
      </Container>
    </>
  );
}

export default Option;

const Container = styled.div``;
const Input = styled.input``;
const Label = styled.label`
  line-height: 1.6;
  font-size: 25px;
  margin-left: 1%;
`;
