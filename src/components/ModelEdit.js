import { Button, Modal } from "semantic-ui-react";


import React from 'react'
import NewEntryForm from "./NewEntryForm";

function ModalEdit({isOpen, setIsOpen}) {
  return (
    <Modal open={isOpen}>
       <Modal.Header>Edit entry</Modal.Header> 
       <Modal.Content>
            <NewEntryForm />
            {/* <Modal.Description>Something here</Modal.Description> */}
       </Modal.Content>
       <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
       </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit