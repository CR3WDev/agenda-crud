import styled from "styled-components";
import InputMask from "react-input-mask";

export const RegisterButton = styled.button`
  width: 100%;
  position: relative;
  text-align: right;
  right: 20px;
  font-size: 15px;
  background: none;
  border: none;
  color: #03dac5;
  &:hover {
    color: #ff7597;
  }
`;
export const ModalClose = styled.button`
  position: relative;
  left: calc(100% - 60px);
  width: 50px;
  height: 50px;
  border: none;
  background: none;
`;
export const ModalTitle = styled.h1`
  text-align: center;
  font-size: 2em;
  color: #ff7597;
  font-weight: 300;
`;
export const ModalForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  width: 70%;
  margin: auto;
`;
export const ModalInput = styled(InputMask)`
  border: none;
  background: none;
  border-bottom: 1px solid #aaa6a7;
  color: #aaa6a7;
  outline: none;
`;
export const ModalTextArea = styled.textarea`
  resize: none;
  border: none;
  background: none;
  border-bottom: 1px solid #aaa6a7;
  color: #aaa6a7;
  outline: none;
`;
export const ModalInputTitle = styled.h3`
  margin-top: 20px;
  font-size: 1em;
  color: #aaa6a7;
  font-weight: 300;
`;
export const ModalSubmit = styled.button`
  width: 100px;
  padding: 5px 20px;
  margin: 20px auto;
  border: 0;
  outline: none;
  background-color: #ff7597;
  color: #fff;
  border-radius: 20px;

  &:hover {
    background-color: #03dac5;
    color: #121212;
  }
`;
