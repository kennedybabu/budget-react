import React, { useState } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm({addEntry}) {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
const [isExpense, setIsExpense] = useState(true)

  return (
    <Form unstackable>
    <Form.Group>
      <Form.Input onChange={(e) => setDescription(e.target.value) } value={description} icon='tags' width={12} label='Description' placeholder='New shinny thing' />
      <Form.Input onChange={(e) => setValue(e.target.value)} value={value} width={4} label='Value' placeholder='100.00' icon='dollar' iconPosition='left' />
    </Form.Group>
    <Segment compact>
      <Checkbox onChange={() => setIsExpense(!isExpense)} label='is expense' toggle checked={isExpense}/>
    </Segment>
    <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense}/>
  </Form>
  )
}

export default NewEntryForm