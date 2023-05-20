import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputContainer,
  Text,
  Title,
  Button,
  Input,
  Link,
} from "./NewUserPage.styles";
import { auth } from "../../firebasebase.conf";
import { createUserWithEmailAndPassword } from "firebase/auth";

const NewUserPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleFormSubmit = () => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        navigate("/");
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
  console.log(form);
  return (
    <InputContainer>
      <Title>Register</Title>
      <Text>Email</Text>
      <Input
        name="email"
        onChange={handleUpdateForm}
        size="large"
        placeholder="Type your email"
      />
      <Text>Password</Text>
      <Input
        type="password"
        name="password"
        onChange={handleUpdateForm}
        size="large"
        placeholder="Type your password"
      />
      <Text>Name</Text>
      <Input
        name="name"
        onChange={handleUpdateForm}
        size="large"
        placeholder="Type your username"
      />
      <div>{form.error}</div>
      <Button onClick={handleFormSubmit}>Register</Button>
    </InputContainer>
  );
};

export default NewUserPage;
