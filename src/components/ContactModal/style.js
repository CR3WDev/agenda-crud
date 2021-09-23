import styled from "styled-components";

export const ContactModalBg = styled.div`
  position: absolute;
  top: calc(50vh - 500px / 2);
  left: calc(50vw - 500px / 2);
  right: 0;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  background: #121212;
  z-index: 9999;

  @media screen and (max-width: 1000px) {
    width: 90%;
    height: 500px;
    left: calc(50vw - 90% / 2);
    z-index: 9999;
  }
`;
export const ContactModalEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(12, 12, 12, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 99;
`;
