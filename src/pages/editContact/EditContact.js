import React, { useState } from "react";
import ContactModal from "../../components/ContactModal/ContactModal";
import firebase from "../../firebase";
import {
  ModalClose,
  ModalTitle,
  ModalDataTitle,
  ModalDataTa,
  ModalData,
  ModalEditButton,
  ModalDeleteButton,
  ModalButtonBox,
} from "./style";
import { IoCloseSharp } from "react-icons/io5";

const EditContact = (props) => {
  const [name, setName] = useState(props.data.name);
  const [number, setNumber] = useState(props.data.number);
  const [email, setEmail] = useState(props.data.email);
  const [notes, setNotes] = useState(props.data.notes);
  function updateContact(contactId, e) {
    e.preventDefault();

    firebase.database().ref("Contact").child(contactId).update({
      name: name,
      number: number,
      email: email,
      notes: notes,
    });
  }
  function deleteContact(contactId) {
    firebase.database().ref("Contact").child(contactId).remove();
  }
  return (
    <>
      <ContactModal>
        <ModalClose onClick={() => props.closeClicked(false)}>
          <IoCloseSharp color="#ff7597" fontSize="1.5em" cursor="pointer" />
        </ModalClose>
        <ModalTitle>Dados do contato</ModalTitle>
        <ModalDataTitle>Nome:</ModalDataTitle>
        <ModalData value={name} onChange={(e) => setName(e.target.value)} />
        <ModalDataTitle>Telefone:</ModalDataTitle>
        <ModalData
          mask="(99) 9 9999-9999"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <ModalDataTitle>Email:</ModalDataTitle>
        <ModalData value={email} onChange={(e) => setEmail(e.target.value)} />
        <ModalDataTitle>Anotações:</ModalDataTitle>
        <ModalDataTa value={notes} onChange={(e) => setNotes(e.target.value)} />
        <ModalButtonBox>
          <ModalEditButton
            onClick={(e) => {
              updateContact(props.data.id, e);
              props.closeClicked(false);
            }}
          >
            Editar
          </ModalEditButton>
          <ModalDeleteButton
            onClick={(e) => {
              deleteContact(props.data.id);
              props.closeClicked(false);
            }}
          >
            Delete
          </ModalDeleteButton>
        </ModalButtonBox>
      </ContactModal>
    </>
  );
};

export default EditContact;
