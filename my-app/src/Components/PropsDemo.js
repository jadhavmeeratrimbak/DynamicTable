import React from "react";
class ClassDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      values: [],
  
    };
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  addValue = (e) => {
    e.preventDefault();
    this.setState({ values: [...this.state.values, this.state.name] });
    document.getElementById("myform").reset();
  };
  
  render() {
    return (
      <div>
        <h1>state demo!!!</h1>
        <form id="myform">
          <input type="text" onChange={this.handleChange} name="id"></input>
          <button onClick={this.addValue}>add value</button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th> Id</th>
            </tr>
          </thead>
          <tbody>
            {this.state.values.map((x) => (
              <tr>
                <td>{x}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
    );
  }
}
export default ClassDemo;
