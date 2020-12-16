import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./App.css";


class App extends Component {

  constructor() {
    super();
    this.state = {
      a: [
        { id: 1, name: "demo_1", email: "demo_1@gmail.com" },
        { id: 2, name: "demo_2", email: "demo_2@gmail.com" },
        { id: 3, name: "demo_3", email: "demo_3@gmail.com" },
        { id: 4, name: "demo_4", email: "demo_4@gmail.com" },
        { id: 5, name: "demo_5", email: "demo_5@gmail.com" },
        { id: 6, name: "demo_6", email: "demo_6@gmail.com" },
        { id: 7, name: "demo_7", email: "demo_7@gmail.com" },
        { id: 8, name: "demo_8", email: "demo_8@gmail.com" },
        { id: 9, name: "demo_9", email: "demo_9@gmail.com" },
        { id: 10, name: "demo_10", email: "demo_10@gmail.com" }
      ],
    }

    render();
  }
  delItem = function (id) {

    console.log(id)

    this.setState({
      a: this.state.a.filter(item => item !== id)
    })
  }


  render() {
    return <div class="main">
    <div class="content">
      <table class="table" >
        <thead>
          <tr class="tableHead" >
            <th >Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.a.map((item) =>
            <tr key={item.id} class="tableData">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={this.delItem.bind(this, item)} class="delete">Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  }
}
export default App; 