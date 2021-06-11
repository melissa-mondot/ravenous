import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "highest_rated",
  "Most Reviewed": "most_reviewed",
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionsValue = sortByOption;
      return <li key={sortByOptionsValue}>{sortByOption}</li>;
    });
  }
  render() {
    return <div></div>;
  }
}

export default SearchBar;
