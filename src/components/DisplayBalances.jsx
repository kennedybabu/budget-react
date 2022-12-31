import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({expenseTotal, incomeTotal}) {
  return (
    <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance value={incomeTotal} title='Income' color='green'/>
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance value={expenseTotal} title='Expense' color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  )
}

export default DisplayBalances