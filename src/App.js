import { useState } from "react";
import {  Container } from "semantic-ui-react";
import "./App.css"
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  const [entries, setEntries]= useState(initialEntries)

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result)
  }

  const addEntry = (description, value) => {
    const result = entries.concat({id: entries.length + 1, description, value})
    setEntries(result)
  }
  return (
    <Container>
      <MainHeader title="Budget"/>

      <DisplayBalance value='2,500.53' title='Your balance'  size="small"/>      

      <DisplayBalances />

      <MainHeader type="h3" title="History" />

      <EntryLines entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader type="h3" title='Add new transaction' />
      <NewEntryForm addEntry={addEntry}/>
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
