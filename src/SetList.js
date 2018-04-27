import React, { Component } from "react";
import axios from "axios";
import { Card, Container } from "semantic-ui-react";
import LegoSet from "./LegoSet";
import { fetchSets } from "./api";

class SetList extends Component {
  state = {
    sets: []
  };

  componentDidMount() {
    fetchSets(1).then(response => {
      this.setState({
        sets: response.data.results
      });
    });
  }

  render() {
    const { sets } = this.state;

    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          {sets.map(set => <LegoSet {...set} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default SetList;
