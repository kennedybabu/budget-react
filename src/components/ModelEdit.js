import { Button, Modal } from "semantic-ui-react";


import React from 'react'
// import NewEntryForm from "./NewEntryForm";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals.actions";


function ModalEdit({isOpen, description, value, isExpense, setValue, setDescription, setIsExpense}) {
  const dispatch = useDispatch()


  return (
    <Modal open={isOpen}>
       <Modal.Header>Edit entry</Modal.Header> 
       <Modal.Content>
            <EntryForm description={description} value={value} isExpense={isExpense} setValue={setValue} setIsExpense={setIsExpense} setDescription={setDescription}/>
       </Modal.Content>
       <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => dispatch(closeEditModal())} primary>Ok</Button>
       </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit