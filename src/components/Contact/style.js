import styled from "styled-components";

export const ContactBox = styled.button`
  display: flex;
  background-color: #1d1d1d;
  width: 90%;
  height: 120px;
  color: #aaa6a7;
  margin: auto;
  border-radius: 20px;
  align-items: center;
  margin-top: 30px;
  border: none;
  &:focus,
  &:hover {
    background-color: #03dac5;
    color: #121212;
  }
`;

export const ContactIcon = styled.div`
  display: flex;
  margin-left: 10px;
  background: lightblue;
  border-radius: 50%;
  min-width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: bold;
  color: #fff;
`;

export const ContactName = styled.h3`
  margin-left: 30px;
  font-size: 24px;
  font-weight: 300;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
