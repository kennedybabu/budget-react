import React, {useState} from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({description, value, setIsExpense, setValue, isExpense, setDescription}) {
//     const [description, setDescription] = useState('')
//     const [value, setValue] = useState('')
//   const [isExpense, setIsExpense] = useState(true)
  return (
    <>   
        <Form.Group widths={3}>
            <Form.Input onChange={(e) => setDescription(e.target.value) } value={description} icon='tags' width={12} label='Description' placeholder='New shinny thing' />
            <Form.Input onChange={(e) => setValue(e.target.value)} value={value} width={4} label='Value' placeholder='100.00' icon='dollar' iconPosition='left' />
        </Form.Group>
        <Segment compact>
            <Checkbox onChange={() => setIsExpense(!isExpense)} label='is expense' toggle checked={isExpense}/>
        </Segment>
    </>
  )
}

export default EntryForm