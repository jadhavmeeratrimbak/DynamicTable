import React from "react";

class Employeelist extends React.Component {
  constructor() {
    super();
    this.state = {
      val: {},
      users: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      val: { ...this.state.val, [event.target.name]: event.target.value },
    });
  };

  addValue = (e) => {
    e.preventDefault();
    this.setState({ users: [...this.state.users, this.state.val] });

    document.getElementById("myform").reset();
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ users: res }));
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th> Id</th>
              <th>Name</th>
              <th>username</th>
              <th>email</th>
              <th>phone</th>
              <th>website</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <form>
          <lable>id</lable>
          <input
            type="text"
            name="id"
            className=" border border-black"
            onChange={this.handleChange}
          />
          <lable>name</lable>
          <input
            type="text"
            name="name"
            className=" border border-black"
            onChange={this.handleChange}
          />
          <lable>username</lable>
          <input
            type="text"
            name="username"
            className=" border border-black"
            onChange={this.handleChange}
          />
          <lable>Email</lable>
          <input
            type="text"
            name="email"
            className=" border border-black"
            onChange={this.handleChange}
          />
          <lable>Phone</lable>
          <input
            type="text"
            name="phone"
            className=" border border-black"
            onChange={this.handleChange}
          />
          <lable>Website</lable>
          <input
            type="text"
            name="website"
            className=" border border-black"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="bg-blue-900 text-white w-40 h-12"
            onClick={this.addValue}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Employeelist;
