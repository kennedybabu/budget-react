import {  Container, Grid, Icon, Segment } from "semantic-ui-react";
import "./App.css"
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  return (
    <Container>
      <MainHeader title="Budget"/>

      <DisplayBalance value='2,500.53' title='Your balance'  size="small"/>      

      <DisplayBalances />

      <MainHeader type="h3" title="History" />    

      <EntryLine  description="Income" value='$10.00'/>
      <EntryLine  description="Expense" value='$20.00' isExpense/>

      <MainHeader type="h3" title='Add new transaction' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
