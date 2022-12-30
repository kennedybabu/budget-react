import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm({addEntry}) {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')


  return (
    <Form unstackable>
    <Form.Group>
      <Form.Input onChange={(e) => setDescription(e.target.value) } value={description} icon='tags' width={12} label='Description' placeholder='New shinny thing' />
      <Form.Input onChange={(e) => setValue(e.target.value)} value={value} width={4} label='Value' placeholder='100.00' icon='dollar' iconPosition='left' />
    </Form.Group>
    <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value}/>
  </Form>
  )
}

export default NewEntryForm