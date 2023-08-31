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
        { name: "John S.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Gregor P.", salary: 3000, increase: true, rise: false, id: 2 },
        {
          name: "Mickle J.",
          salary: 15000,
          increase: false,
          rise: false,
          id: 3,
        },
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
      rise: false,
      id: id,
    };
    this.setState(({ data }) => {
      const newData = [...data, newItem];
      return {
        data: newData,
      };
    });
  };

  onToggleProp = (id, propName) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [propName]: !item[propName] };
        }
        return item;
      }),
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo
          allEmployees={data.length}
          allIncreased={data.filter((item) => item.increase).length}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
