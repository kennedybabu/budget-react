import { Button, Modal } from "semantic-ui-react";


import React from 'react'
// import NewEntryForm from "./NewEntryForm";
import EntryForm from "./EntryForm";

function ModalEdit({isOpen, setIsOpen, description, value, isExpense, setDescription, setValue, setIsExpense}) {
  return (
    <Modal open={isOpen}>
       <Modal.Header>Edit entry</Modal.Header> 
       <Modal.Content>
            <EntryForm description={description} value={value} isExpense={isExpense} setValue={setValue} setIsExpense={setIsExpense} setDescription={setDescription}/>
       </Modal.Content>
       <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
       </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit