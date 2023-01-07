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
  
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState()

  const {isOpen, id} = useSelector(state => state.modals)
  const entries = useSelector(state => state.entries)

  useEffect(() => {
      const index = entries.findIndex(entry => entry.id === id)
      setEntry(entries[index])
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOpen, id])  

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

  useEffect(() => {
    fetchInitialData()
  }, [])

  const fetchInitialData = async () => {
    const res = await fetch('http://localhost:3002/entries')
    const data = await res.json()
    console.log(data)
  }


  return (
    <Container>
      <MainHeader title="Budget"/>

      <DisplayBalance value={total} title='Your balance'  size="small"/>      

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>

      <MainHeader type="h3" title="History" />

      <EntryLines entries={entries} />

      <MainHeader type="h3" title='Add new transaction' />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;

