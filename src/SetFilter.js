import React, { Component } from "react";
import FilterSelector from "./FilterSelector";
import LegoSet from "./LegoSet";
import { sortByName } from "./utils";

class SetFilter extends Component {
  state = {
    filter: {
      theme: null,
      themeChildren: []
    }
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { themeTree, sets } = this.props;
    const { filter } = this.state;

    console.log("filter", filter.theme);
    return (
      <div>
        <FilterSelector
          themes={themeTree}
          filter={filter}
          onFilterChange={this.handleFilterChange}
        />

        <div>
          {sets
            .filter(set => set.theme_id === filter.theme)
            .sort(sortByName)
            .map(set => <LegoSet {...set} key={set.set_num} />)}
        </div>
      </div>
    );
  }
}

export default SetFilter;
