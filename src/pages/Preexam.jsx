import React from "react";
import { useState } from "react";
import styled from "styled-components";
import preexam from "../images/preexam.png";

function Preexam() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const { isFetching, error } = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // const login = async (e) => {
  //   e.preventDefault();
  //   // dispatch(loginStart())
  //   try {
  //     const res = await publicRequest.post("/auth/login", {
  //       username,
  //       password,
  //     });
  //     console.log(res.data);
  //     dispatch(loginSuccess(res.data));
  //   } catch (error) {
  //     dispatch(loginFailure(error.response.data.message));
  //   }
  // };
  return (
    <>
      <WrapContainer>
        <Wrapper2>
          <Title2>Name Here</Title2>
          <Image src={preexam}></Image>
        </Wrapper2>
        <Wrapper>
          <Title>Select the Following for Exam</Title>
          <Form>
            <Select>
              <option value="" disabled selected>
                Level of Experience in Coding(Select){" "}
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
            <Select>
              <option value="" disabled selected>
                Language(Select){" "}
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
            <Select>
              <option value="" disabled selected>
                Role(Frontend/Backend/ any other)(Select){" "}
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>

            <Button onClick={(e) => login(e)}>SUBMIT</Button>
          </Form>
        </Wrapper>
      </WrapContainer>
    </>
  );
}

export default Preexam;

const Image = styled.div`
  width: 20vw;
  padding: 20px;

  height: 70%;
  background-image: url(${(props) => props?.src});
  background-size: fit;

  justify-content: center;
  border-radius: 5%;

  margin-left: 10%;
  margin-top: 10%;
`;
const WrapContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: #0e21a0;

  padding-top: 5%;
`;
const Wrapper2 = styled.div`
  width: 35vw;
  padding: 20px;

  height: 75%;

  justify-content: center;
  border-radius: 5%;
  margin-right: 10%;

  margin-left: 2%;
`;
const Wrapper = styled.div`
  background-color: white;
  width: 35vw;
  padding: 20px;

  height: 75%;

  justify-content: center;
  border-radius: 5%;
  margin-right: -40%;
  margin-right: 2%;
`;
const Title = styled.h1`
  margin-top: 6%;
  margin-bottom: 10%;
  font-weight: 630;
  font-size: 40px;
  letter-spacing: 1px;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
const Select = styled.select`
  padding: 10px;
  margin: 10px 0px;
  height: 50px;
  width: 90%;
  border-radius: 50px 50px 50px 50px;
  border: 0px solid white;
  background-color: #f0f5fa;
  font-size: 20px;
  padding-left: 20px;
  margin-bottom: 5%;
`;
const Button = styled.button`
  margin-top: 10%;
  color: white;
  cursor: pointer;
  width: 90%;
  font-size: 20px;
  padding: 20px 15px;
  font-weight: 700;
  letter-spacing: 3px;
  background-color: #feb442;
  border: none;
  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
  border-radius: 50px 50px 50px 50px;
  margin-top: 10%;
`;
const Links = styled.div`
  font-size: 15px;
  cursor: pointer;
  font-weight: 200;
  margin-top: 20px;
  white-space: pre-wrap;
  letter-spacing: 1px;
`;
const Error = styled.span`
  color: red;
  margin-top: 10px;
`;
const Extra = styled.div`
  margin-left: -1%;

  display: flex;
  justify-content: space-evenly;
`;
const Text = styled.a`
  font-size: 17px;
  letter-spacing: 1px;
`;
const Title2 = styled.h1`
  color: white;
  margin-left: 13%;
  font-size: 40px;
`;
