import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import loginBG from "../images/loginBG.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebase_configs";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userType } from "../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const currentUser = useSelector((state) => state.data.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth(firebaseApp);
  const login = async (e) => {
    e.preventDefault();

    try {
      if (email === "") {
        setError("Email is required");
        setTimeout(() => {
          setError("");
        }, 2000);
      } else if (password === "") {
        setError("Password is required");
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            dispatch(
              loginUser({
                uid: user.uid,
                email: user.email,
                username: user.displayName,
                token: user.accessToken,
              })
            );
            dispatch(userType("student"));

            setError("User Sign In Succesful");
            setTimeout(() => {
              setError("");
            }, 2000);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            setTimeout(() => {
              setError("");
            }, 2000);
            // ..
          });
      }
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
    }
  };

  return (
    <>
      <WrapContainer src={loginBG}>
        <Wrapper>
          <Title>Log In</Title>
          <Form>
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Extra>
              <Links>
                <input type="checkbox" /> Remember password{" "}
              </Links>
              <Links>Forgot passoword?</Links>
            </Extra>
            <Button onClick={(e) => login(e)}>LOGIN</Button>

            {error && <Error>{error}</Error>}
            <Text>Don't have an account? </Text>
            <Links onClick={(e) => navigate("/register")}>SignUp</Links>
          </Form>
        </Wrapper>
      </WrapContainer>
    </>
  );
}

export default Login;

const WrapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props?.src});
  background-size: cover;
`;
const Wrapper = styled.div`
  background-color: white;
  width: 30vw;
  padding: 20px;

  height: 80%;

  justify-content: center;
  border-radius: 5%;
`;
const Title = styled.h1`
  margin-top: 10%;
  margin-bottom: 10%;
  font-weight: 600;
  font-size: 50px;
  letter-spacing: 2px;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
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
const Text = styled.p`
  font-size: 17px;
  letter-spacing: 1px;
`;
