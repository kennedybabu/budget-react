import { useEffect, useState } from "react";
import {  Container } from "semantic-ui-react";
import "./App.css"
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModelEdit";
import NewEntryForm from "./components/NewEntryForm";
import { useSelector } from "react-redux"

function App() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [entries, setEntries]= useState(initialEntries)
  const [isOpen, setIsOpen] = useState(false) 
  const [entryId, setEntryId] = useState(null)
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  const entriesRedux = useSelector(state => state.entries)

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
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

  const addEntry = () => {
    const result = entries.concat({id: entries.length + 1, description, value, isExpense})
    setEntries(result)
  }

  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  useEffect(() => {
    let totalIncome = 0
    let totalExpenses = 0
    entries.map(entry => {
      if(entry.isExpense) {
        return totalExpenses += Number(entry.value)
      } 
      return totalIncome += Number(entry.value)      
    })
    setTotal(totalIncome - totalExpenses)
    setExpenseTotal(totalExpenses)
    setIncomeTotal(totalIncome)
  }, [entries])
  return (
    <Container>
      <MainHeader title="Budget"/>

      <DisplayBalance value={total} title='Your balance'  size="small"/>      

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>

      <MainHeader type="h3" title="History" />

      <EntryLines entries={entriesRedux} editEntry={editEntry} deleteEntry={deleteEntry} setIsOpen={setIsOpen}/>

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
    value: 1000.00,
    isExpense:false
  },
  {
    id:2,
    description:"Water Bill",
    value: 20.00,
    isExpense:true
  },
  {
    id:3,
    description:"Rent",
    value: 300.00,
    isExpense:true
  },
  {
    id:4,
    description:"Power bill",
    value: 50.00,
    isExpense:true
  }
]
