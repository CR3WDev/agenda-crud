import React, { useState } from "react";
import firebase from "../../firebase";
import ContactModal from "../../components/ContactModal/ContactModal";
import {
  RegisterButton,
  ModalTitle,
  ModalClose,
  ModalForm,
  ModalInput,
  ModalTextArea,
  ModalInputTitle,
  ModalSubmit,
} from "./style";
import { IoCloseSharp, IoAddCircleSharp } from "react-icons/io5";

const RegisterContacts = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  function clearContactForm() {
    setName("");
    setNumber("");
    setEmail("");
    setNotes("");
  }
  function createContact(e) {
    e.preventDefault();
    const contactRef = firebase.database().ref("Contact");
    const contact = {
      name,
      number,
      email,
      notes,
    };
    contactRef.push(contact);
    clearContactForm();
    setIsOpen(false);
  }
  return (
    <>
      <RegisterButton onClick={() => setIsOpen(true)}>
        <IoAddCircleSharp fontSize="3em" cursor="pointer" />
      </RegisterButton>
      {isOpen ? (
        <ContactModal>
          <ModalClose onClick={() => setIsOpen(false)}>
            <IoCloseSharp color="#ff7597" fontSize="1.5em" cursor="pointer" />
          </ModalClose>
          <ModalTitle>Crie um novo contato</ModalTitle>
          <ModalForm onSubmit={createContact}>
            <ModalInputTitle>Nome:</ModalInputTitle>
            <ModalInput
              type="text"
              placeholder="insira o nome"
              name="contactName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ModalInputTitle>Telefone:</ModalInputTitle>
            <ModalInput
              type="text"
              mask="(99) 9 9999-9999"
              placeholder="insira o número"
              name="contactNumber"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <ModalInputTitle>email:</ModalInputTitle>
            <ModalInput
              type="text"
              placeholder="insira o email"
              name="contactEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ModalInputTitle>Anotações:</ModalInputTitle>
            <ModalTextArea
              type="text"
              placeholder="insira as anotações"
              name="contactNotes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <ModalSubmit>Submit</ModalSubmit>
          </ModalForm>
        </ContactModal>
      ) : null}
    </>
  );
};

export default RegisterContacts;
