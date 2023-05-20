import styled from "styled-components";
import { Button as BasicButton, Input as BasicInput } from "antd";

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 100px;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 15%;
  height: 40%;
  background-color: white;
`;
export const Background = styled.div`
  color: grey;
`;

export const Button = styled(BasicButton)`
  border-radius: 50px;
`;

export const Input = styled(BasicInput)``;

export const Text = styled.div`
  font-size: 15px;
  padding: 10px;
  text-align: left;
`;

export const Title = styled.div`
  font-size: 40px;
  padding: 30px;
  font-weight: 500;
`;

export const Link = styled.div`
  cursor: pointer;
  font-size: 10px;
  text-align: right;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
