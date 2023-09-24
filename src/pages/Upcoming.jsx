import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MilitaryTechSharp from "@mui/icons-material/MilitaryTechSharp";
import BadgeSharpIcon from "@mui/icons-material/BadgeSharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import ListSharpIcon from "@mui/icons-material/ListSharp";
import HandshakeSharpIcon from "@mui/icons-material/HandshakeSharp";
import styled from "styled-components";
import loginBG from "../images/loginBG.png";

function Upcoming() {
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
  const navigate = useNavigate();

  return (
    <>
      <Body>
        <Title1>
          Upcoming Hackathons! <br />
        </Title1>
        <WrapContainer src={loginBG}>
          <Wrapper>
            <Title>
              Smart India Hackathon <br />
              (Internal)-JIIT NOIDA
            </Title>
            <Form>
              <Top>
                <Text>
                  Date: Setpember 23-25,2023
                  <br />
                </Text>

                <Text>
                  Location: Uttar Pradesh, India <br />
                </Text>
              </Top>
              <Button onClick={(e) => navigate("/student/exam")}>APPLY</Button>
            </Form>
          </Wrapper>
          <Wrapper>
            <Title>
              Smart India Hackathon <br />
              (Internal)-JIIT NOIDA
            </Title>

            <Form>
              <Top>
                <Text>
                  Date: Setpember 23-25,2023
                  <br />
                </Text>

                <Text>
                  Location: Uttar Pradesh, India <br />
                </Text>
              </Top>
              <Button onClick={(e) => navigate("/student/exam")}>APPLY</Button>
            </Form>
          </Wrapper>
          <Wrapper>
            <Title>
              Smart India Hackathon <br />
              (Internal)-JIIT NOIDA
            </Title>
            <Form>
              <Top>
                <Text>
                  Date: Setpember 23-25,2023
                  <br />
                </Text>

                <Text>
                  Location: Uttar Pradesh, India <br />
                </Text>
              </Top>
              <Button onClick={(e) => navigate("/student/exam")}>APPLY</Button>
            </Form>
          </Wrapper>
        </WrapContainer>
      </Body>
    </>
  );
}

export default Upcoming;

const Title1 = styled.h1`
  margin-top: 5%;
  margin-bottom: 10%;
  font-weight: 610px;
  font-size: 70px;
  letter-spacing: 2px;
  text-align: center;
`;

const Body = styled.div`
  background-color: #e2e9ef;

  padding-top: 1%;
`;
const WrapContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: -13%;
`;
const Wrapper = styled.div`
  background-color: #f9fefe;
  width: 25vw;
  padding: 20px;

  height: 60%;

  justify-content: center;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Title = styled.h1`
  margin-top: 5%;
  margin-bottom: 10%;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 2px;
  text-align: left;
  margin-right: 30%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
`;
const Input = styled.input`
  padding: 10px;
  margin: 10px 0px;
  height: 50px;
  width: 90%;
  border-radius: 50px 50px 50px 50px;
  border: 0px solid white;
  background-color: #f0f5fa;
  font-size: 20px;
  padding-left: 20px;
`;
const Button = styled.button`
  margin-top: 15%;
  color: white;
  cursor: pointer;
  width: 350px;
  font-size: 20px;
  padding: 10px 7px;
  font-weight: 700;
  letter-spacing: 3px;
  background-color: #feb442;
  border: none;
  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
  border-radius: 50px 50px 50px 50px;
  margin-bottom: 5%;
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
const Text = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 4;
`;
const Top = styled.div`
  font-size: 25px;
  letter-spacing: 1px;
  line-height: 1.6;
  text-align: left;
`;
