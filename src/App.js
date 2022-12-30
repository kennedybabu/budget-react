import { useEffect, useState } from "react";
import {  Container } from "semantic-ui-react";
import "./App.css"
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModelEdit";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [entries, setEntries]= useState(initialEntries)
  const [isOpen, setIsOpen] = useState(false) 
  const [entryId, setEntryId] = useState(null)

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
    }
  },[isOpen])

  const editEntry = (id) => {
    if(id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }
  }
  

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result)
  }

  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({id: entries.length + 1, description, value, isExpense})
    setEntries(result)
  }
  return (
    <Container>
      <MainHeader title="Budget"/>

      <DisplayBalance value='2,500.53' title='Your balance'  size="small"/>      

      <DisplayBalances />

      <MainHeader type="h3" title="History" />

      <EntryLines entries={entries} editEntry={editEntry} deleteEntry={deleteEntry} setIsOpen={setIsOpen}/>

      <MainHeader type="h3" title='Add new transaction' />
      <NewEntryForm addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense}/>
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense}/>
    </Container>
  );
}

export default App;


var initialEntries = [
  {
    id:1,
    description:"Work income",
    value: "$1000.00",
    isExpense:false
  },
  {
    id:2,
    description:"Water Bill",
    value: "$20.00",
    isExpense:true
  },
  {
    id:3,
    description:"Rent",
    value: "$300.00",
    isExpense:true
  },
  {
    id:4,
    description:"Power bill",
    value: "$50.00",
    isExpense:true
  }
]
