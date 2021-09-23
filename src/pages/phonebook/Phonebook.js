import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import Contact from "../../components/Contact/Contact";
import RegisterContacts from "../registerContacts/RegisterContacts";
import {
  PhonebookBg,
  ContactsBox,
  ContactsTitle,
  ContactList,
  NotesBox,
  NotesTitle,
  NotesText,
} from "./style";

const Phonebook = () => {
  const [contactList, setContactList] = useState([]);
  const [showNotes, setShowNotes] = useState("");
  function CreateContactList() {
    const contactRef = firebase.database().ref("Contact");
    contactRef.on("value", (snapshot) => {
      const contactVal = snapshot.val();
      const contactListAux = [];

      for (let id in contactVal) {
        contactListAux.push({ id, ...contactVal[id] });
      }

      setContactList(contactListAux);
    });
  }
  useEffect(() => {
    CreateContactList();
  }, []);
  return (
    <>
      <PhonebookBg>
        <ContactsBox>
          <ContactsTitle>Contatos</ContactsTitle>
          <ContactList>
            {contactList.map((contact, index) => {
              return (
                <Contact
                  key={index}
                  data={contact}
                  clicked={setShowNotes}
                ></Contact>
              );
            })}
          </ContactList>
          <RegisterContacts />
        </ContactsBox>
        <NotesBox>
          <NotesTitle>Anotações</NotesTitle>
          <NotesText>{showNotes}</NotesText>
        </NotesBox>
      </PhonebookBg>
    </>
  );
};

export default Phonebook;
