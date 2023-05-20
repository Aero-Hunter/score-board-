import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputContainer,
  Text,
  Title,
  Button,
  Input,
  Link,
} from "./LoginPage.styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebasebase.conf";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        navigate("/Home");
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        // const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setForm({ ...form, error: errorMessage });
      });
  };
  const handleUpdateForm = (a) => {
    setForm({ ...form, [a.target.name]: a.target.value });
  };
  return (
    <InputContainer>
      <Title>Login</Title>
      <Text>Email</Text>
      <Input
        type="email"
        size="large"
        name="email"
        onChange={handleUpdateForm}
        placeholder="Type your email"
      />
      <Text>Password</Text>
      <Input
        type="password"
        size="large"
        name="password"
        onChange={handleUpdateForm}
        placeholder="Type your password"
      />
      <Link onClick={() => navigate("/PasswordReset")}>Forgot passowrd?</Link>
      <Link onClick={() => navigate("/Register")}>
        Haven't created an account yet?
      </Link>
      <div>{form.error}</div>
      <Button onClick={handleLogin}>Login</Button>
    </InputContainer>
  );
};

export default LoginPage;
