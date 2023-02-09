import React from "react";
import Table from "./Table";
// import "./newForm.css";

function Newform() {
  const userObj = {
    firstName: "",
    lastName: "",
    Age: "",
    Email: "",
    Password: "",
    birthDate: "",
  };

  const [user, setUser] = React.useState(userObj);
  const [users, setUsers] = React.useState([]);
  const [editedUser, setEditObj] = React.useState({});

  function handleChange(event) {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function submit(e) {
    e.preventDefault();
    setUsers([...users, user]);
    document.getElementById("myform").reset();
  }

  const editData = (index, users) => {
    setEditObj({
      efirstName: users[index].firstName,
      elastName: users[index].lastName,
      eAge: users[index].Age,
      eEmail: users[index].Email,
      ePassword: users[index].Password,
      ebirthDate: users[index].birthDate,
    });
  };

  const deleteData = (index) => {
    var newArr = [...users];
    newArr.splice(index, 1);
    setUsers(newArr);
  };

  return (
    <div className="container">
      <br />
      <h1>INPUT FORM USING PROPS</h1>
      <br />
      <br />
      <form id="myform">
        <div id="firstName">First Name</div>
        <input
          type="text"
          name="firstName"
          class="form-control"
          id="exampleInputId"
          aria-describedby="IdHelp"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.efirstName}
        ></input>
        <br />
        <br />

        <div id="lastName">Last Name</div>
        <input
          type="text"
          name="lastName"
          class="form-control"
          id="exampleInputId"
          aria-describedby="IdHelp"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.elastName}
        ></input>
        <br />
        <br />

        <div id="Age">User Age</div>
        <input
          type="number"
          name="Age"
          class="form-control"
          id="exampleInputId"
          aria-describedby="IdHelp"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.eAge}
        ></input>
        <br />
        <br />

        <div id="mail">User Email</div>
        <input
          type="email"
          name="Email"
          class="form-control"
          id="exampleInputId"
          aria-describedby="IdHelp"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.eEmail}
        ></input>
        <br />
        <br />

        <div id="password">User Password</div>
        <input
          type="password"
          name="Password"
          class="form-control"
          id="exampleInputId"
          aria-describedby="IdHelp"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.ePassword}
        ></input>
        <br />
        <br />

        <div>Birth Date</div>
        <input
          type="date"
          name="birthDate"
          class="form-control"
          id="exampleInputId"
          aria-describedby="IdHelp"
          onChange={handleChange}
          size="40"
          defaultValue={editedUser.ebirthDate}
        ></input>
      </form>
      <br />
      <button onClick={submit}>Submit</button>
      <br />
      <br />

      <Table users={users} handleEdit={editData} handleDelete={deleteData} />
      <br />
      <br />

      <br />
    </div>
  );
}

export default Newform;
