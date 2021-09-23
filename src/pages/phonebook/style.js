import styled from "styled-components";

export const PhonebookBg = styled.main`
  max-width: 100vw;
  height: 100vh;
  background-color: #121212;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactsBox = styled.div`
  margin-top: 5vh;
  height: 90vh;
  min-width: 50vw;
  margin: auto;
  border-right: 1px solid #aaa6a7;
  @media screen and (max-width: 1000px) {
    width: 80%;
    border: none;
  }
`;
export const ContactsTitle = styled.h1`
  color: #ff7597;
  font-size: 48px;
  font-weight: 300;
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 2.5vh;
  @media screen and (max-width: 1000px) {
    margin-top: 0;
    margin-bottom: 1vh;
  }
`;

export const ContactsInputBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
`;

export const ContactsInput = styled.input`
  border: none;
  color: #aaa6a7;
  background-color: #121212;
  width: 80%;
  padding: 5px 20px;
  border-bottom: 1px solid #aaa6a7;

  &:focus {
    outline: 0;
  }
`;

export const ContactList = styled.div`
  margin: auto;
  width: 80%;
  height: 470px;
  overflow: hidden;
  overflow-y: auto;
  margin-bottom: 30px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const NotesBox = styled.div`
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NotesTitle = styled.h1`
  color: #ff7597;
  font-size: 48px;
  font-weight: 300;
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;
export const NotesText = styled.p`
  background: #1d1d1d;
  color: #fff;
  width: 80%;
  min-height: 400px;
  padding: 30px;
  margin: auto;
  border-radius: 20px;
`;
