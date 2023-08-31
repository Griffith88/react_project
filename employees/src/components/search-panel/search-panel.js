import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value,
      { onUpdateSearch } = this.props;
    this.setState({ term });
    onUpdateSearch(term)
  };

  render() {
    const { term } = this.state;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
