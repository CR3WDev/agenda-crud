import React, { useState } from "react";
import EditContact from "../../pages/editContact/EditContact";
import { ContactBox, ContactName, ContactIcon } from "./style";

const Contact = (props) => {
  const [openModal, setOpenModal] = useState(false);
  if (props.data.name !== undefined || "" || null) {
    var firstLetter = props.data.name;
    firstLetter = firstLetter[0].toUpperCase();
  }

  return (
    <>
      <ContactBox
        onMouseEnter={() => {
          props.clicked(props.data.notes);
        }}
        onClick={() => setOpenModal(true)}
      >
        <ContactIcon>{firstLetter}</ContactIcon>
        <ContactName>{props.data.name}</ContactName>
      </ContactBox>
      {openModal ? (
        <EditContact
          data={props.data}
          closeClicked={() => setOpenModal(false)}
        />
      ) : null}
    </>
  );
};

export default Contact;
