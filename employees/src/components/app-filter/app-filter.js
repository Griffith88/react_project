import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: "btn btn-light",
      onRise: "btn btn-outline-light",
      salaryBig: "btn btn-outline-light",
    };
  }

  onToggleFilter = (e) => {
    const array_states = Object.keys(this.state);
    const { setFilter } = this.props;
    array_states.forEach((stateName) => {
      if (stateName === e.target.getAttribute("data-type")) {
        setFilter(stateName);
        this.setState(() => ({ [stateName]: "btn btn-light" }));
      } else {
        this.setState(() => ({ [stateName]: "btn btn-outline-light" }));
      }
    });
  };

  render() {
    const buttonsData = [
      { name: "all", label: "Все сотрудники", className: this.state.all },
      { name: "onRise", label: "На повышение", className: this.state.onRise },
      {
        name: "salaryBig",
        label: "З/П выше 1000$",
        className: this.state.salaryBig,
      },
    ];

    const buttons = buttonsData.map(({name,label,className}) => {
      return (
        <button
          data-type={name}
          className={className}
          type="button"
          onClick={this.onToggleFilter}
          key={name}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}

export default AppFilter;
