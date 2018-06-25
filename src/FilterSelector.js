import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class FilterSelector extends Component {
  handleClick = (event, data) => {
    console.log("click", event, data);
    this.props.onFilterChange({ theme: data["data-theme-id"] });
  };

  render() {
    const { themes } = this.props;
    console.log("themes", themes);
    return <div />;
  }
}

export default FilterSelector;
