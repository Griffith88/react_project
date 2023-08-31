import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John S.", salary: 800, increase: true, id: 1 },
        { name: "Gregor P.", salary: 3000, increase: false, id: 2 },
        { name: "Mickle J.", salary: 15000, increase: false, id: 3 },
      ],
    };
    this.maxId = Math.max(...this.state.data.map((item) => item.id)) + 1;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      console.log(id);
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const id = this.maxId++;
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      id: id,
    };
    this.setState(({ data }) => {
      const newData = [...data, newItem]
      return {        
        data: newData
      };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
