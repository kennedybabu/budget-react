import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from "semantic-ui-react";
import "./App.css"
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <Container>
      <MainHeader title="Budget"/>

      <Statistic size='small'>
        <Statistic.Label>Your balance:</Statistic.Label>
        <Statistic.Value>2,500.53</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
                <Statistic size="tiny" color="green">
                  <Statistic.Label style={{textAlign:'left'}}>
                    Income:
                  </Statistic.Label>
                  <Statistic.Value>1,045.50</Statistic.Value>
                </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size="tiny" color="red">
                <Statistic.Label style={{textAlign:'left'}}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>700.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader type="h3" title="History"></MainHeader>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something else</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$100.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$20.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader type="h3" title='Add new transaction'></MainHeader>
      <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny thing' />
          <Form.Input width={4} label='Value' placeholder='100.00' icon='dollar' iconPosition='left'>

          </Form.Input>
        </Form.Group>
        <Button.Group style={{marginTop:20}}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary >Ok</Button>

        </Button.Group>
      </Form>

    </Container>
  );
}

export default App;
