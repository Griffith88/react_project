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
        { name: "Mike J.", salary: 10000, increase: false, rise: false, id: 3 },
        { name: "Sam Mike", salary: 15000, increase: false, rise: false, id: 4 },
      ],
      term: "",
      filter: 'all',
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

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  onToggleFilter = (data, filter) => {
    switch(filter) {
      case 'salaryBig': 
        return data.filter(item => item.salary > 800)
      case 'onRise':
        return data.filter(item => item.rise)
      default:
        return data
    }
  }

  setFilter = (filter) => {
    this.setState(({filter}))
  }

  render() {
    const { data, term, filter } = this.state;
    let visibleData = this.searchEmployee(this.onToggleFilter(data, filter), term)
    return (
      <div className="app">
        <AppInfo
          allEmployees={data.length}
          allIncreased={data.filter((item) => item.increase).length}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter setFilter={this.setFilter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
