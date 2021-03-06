import React, { Component } from "react";
import List from "./components/list";
import { Input, Form, Button, InputGroupAddon, InputGroup } from "reactstrap";

import "./App.css";

class App extends Component {
  state = {
    list: [],
    word: ""
  };
  render() {
    const addList = event => {
      event.preventDefault();
      this.setState({
        list: [...this.state.list, this.state.word],
        word: ""
      });
    };
    const onChange = event => {
      this.setState({ word: event.target.value });
    };
    const deleteItem = index => {
      this.setState({
        list: this.state.list.filter((list, listIndex) => {
          return listIndex !== index;
        })
      });
    };

    return (
      <div className="App">
        <div className="App-header">
          <h1> Knot TODO_LIST</h1>
        </div>
        <Form className=".col-6 .col-sm-4 submit" onSubmit={addList}>
          <InputGroup>
            <Input
              placeholder="Enter TODO"
              value={this.state.word}
              onChange={onChange}
            />
            <InputGroupAddon addonType="append">
              <Button color="danger">Submit</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
        <List todolist={this.state.list} delete={deleteItem} />
      </div>
    );
  }
}

export default App;
