import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container } from 'semantic-ui-react';
import LegoSet from './LegoSet';

import './App.css';

class App extends Component {
  state = {
      sets: []
  }

  componentDidMount() {
    axios.get(
      'https://rebrickable.com/api/v3/lego/sets/?theme_id=494',
      { headers: {"Authorization" : `key ${process.env.REACT_APP_REBRICKABLE_TOKEN}`} }
    ).then((response) => {
      this.setState({
        sets: response.data.results
      })
    })
  }

  render() {
    const { sets } = this.state

    return (
      <Container>
        <Card.Group itemsPerRow={4} >
          {sets.map(set => <LegoSet {...set} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
