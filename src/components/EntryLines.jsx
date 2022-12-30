import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLine'


function EntryLines({entries, deleteEntry, setIsOpen, editEntry}) {
  return (
    <Container>
    
    {entries.map((entry) => (
        <EntryLine key={entry.id} editEntry={editEntry} {...entry} deleteEntry={deleteEntry} setIsOpen={setIsOpen} />
      ))}
    </Container>
  )
}

export default EntryLines