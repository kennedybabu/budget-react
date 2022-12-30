import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
  return (
    <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance value='2,345.50' title='Income' color='green'/>
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance value='1,045.50' title='Expense' color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  )
}

export default DisplayBalances