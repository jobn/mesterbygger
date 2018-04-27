import React, { Component } from "react";
import axios from "axios";
import { Card, Container } from "semantic-ui-react";
import ThemeList from "./ThemeList";
import { fetchThemes } from "./api";

class App extends Component {
  state = {
    themes: []
  };

  componentDidMount() {
    fetchThemes().then(response => {
      this.setState({
        themes: response.data.results
      });
    });
  }

  render() {
    const { themes } = this.state;

    return (
      <Container>
        <ThemeList themes={themes} />
      </Container>
    );
  }
}

export default App;
