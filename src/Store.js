import React, { Component } from "react";
import { fetchThemes, fetchAllSets } from "./api";
import { Provider, Consumer } from "./storeContext";

class Store extends Component {
  state = {
    themeList: [],
    sets: []
  };

  componentDidMount() {
    Promise.all([fetchThemes(), fetchAllSets()]).then(values => {
      const themeList = values[0].data.results;
      const sets = values[1].data.results;

      this.setState({ themeList, sets });
    });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Store, Consumer };
