import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Store, Consumer } from "./Store";
import SetFilter from "./SetFilter";

class App extends Component {
  render() {
    return (
      <Store>
        <Container>
          <Consumer>
            {value => <SetFilter sets={value.sets} themes={value.themes} />}
          </Consumer>
        </Container>
      </Store>
    );
  }
}

export default App;
