import styled from "styled-components";
import InputMask from "react-input-mask";

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
export const ModalDataTitle = styled.h3`
  width: 70%;
  margin: auto;
  margin-top: 20px;
  font-size: 1em;
  color: #aaa6a7;
  font-weight: 300;
`;
export const ModalData = styled(InputMask)`
  margin-left: 15%;
  width: 70%;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #aaa6a7;
  color: #fff;
`;
export const ModalButtonBox = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: right;
`;
export const ModalEditButton = styled.button`
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
export const ModalDeleteButton = styled.button`
  width: 100px;
  padding: 5px 20px;
  margin: 20px auto;
  border: 0;
  outline: none;
  background-color: #ff7597;
  color: #fff;
  border-radius: 20px;

  &:hover {
    background-color: red;
    color: #fff;
  }
`;
export const ModalDataTa = styled.textarea`
  margin-left: 15%;
  width: 70%;
  resize: none;
  border: none;
  background: none;
  border-bottom: 1px solid #aaa6a7;
  color: #aaa6a7;
  outline: none;
`;
