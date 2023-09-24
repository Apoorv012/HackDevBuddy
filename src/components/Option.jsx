import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAnswer } from "../features/answerSlice";

function Option(props) {
  const [checked, setChecked] = useState("");
  const answer = useSelector((state) => state.data.answer.answer);
  const dispatch = useDispatch();
  console.log(answer)

  useEffect(() => {
    let newAnswer = answer.filter((ans) => ans.questionId !== props.id)
    console.log("before", newAnswer);
    // Add new entry to newAnswer
    newAnswer.push({
      questionId: props?.id,
      answerId: checked,
    })

    console.log("after", newAnswer);
  
    dispatch(
      setAnswer(newAnswer)
    );
  }, [checked]);

  return (
    <>
      <Container>
        <Input
          type="radio"
          value="a"
          onChange={(e) => setChecked(e.target.value)}
          checked={checked === "a"}
        />
        <Label htmlFor="a">a</Label> <br />
        <Input
          type="radio"
          value="b"
          onChange={(e) => setChecked(e.target.value)}
          checked={checked === "b"}
        />
        <Label htmlFor="b">b</Label> <br />
        <Input
          type="radio"
          value="c"
          onChange={(e) => setChecked(e.target.value)}
          checked={checked === "c"}
        />
        <Label htmlFor="c">c</Label> <br />
        <Input
          type="radio"
          value="d"
          onChange={(e) => setChecked(e.target.value)}
          checked={checked === "d"}
        />
        <Label htmlFor="d">d</Label>
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
