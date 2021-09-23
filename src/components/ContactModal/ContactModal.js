import React from "react";
import { ContactModalBg, ContactModalEffect } from "./style";
const ContactModal = (props) => {
  return (
    <>
      <ContactModalEffect />
      <ContactModalBg>{props.children}</ContactModalBg>
    </>
  );
};

export default ContactModal;
