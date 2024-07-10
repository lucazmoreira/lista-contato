import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../features/contacts/contactsSlice";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <div>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.phone}</div>
          </div>
          <Button onClick={() => dispatch(removeContact(contact.id))}>
            Remover
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
