import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputContainer, Text, Input, Button } from "./ResetPassword.styles";
import { auth } from "../../firebasebase.conf";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPassword = () => {
  const [email, setEmail] = useState({});
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  const handleUpdateForm = (a) => {
    setEmail({ ...email, a });
  };
  return (
    <InputContainer>
      <Text>Enter your email</Text>
      <Input
        type="email"
        size="large"
        name="email"
        onChange={handleUpdateForm}
        placeholder="Type your email"
      ></Input>
      <Button onClick={() => sendPasswordResetEmail()}>Send reset link</Button>
    </InputContainer>
  );
};

export default ResetPassword;
