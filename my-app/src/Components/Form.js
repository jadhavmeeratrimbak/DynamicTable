import React from "react";
import Table from "./Table";

function Form() {
  const userList = {
    id: "",
    name: "",

    password: "",
  };
  
  const [user, setUser] = React.useState(userList);
 
  const [values, setValues] = React.useState([]);
  const handleChangeEdit = (event) => {
    console.log(event.target);
    setUser({
      ...user,
      [event.target.id]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.password]: event.target.value,
    });
  };

  const addVal = (e) => {
    e.preventDefault();

    setValues([...values, user]);
  };
 

  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Id
          </label>
          <input
            type="id"
            class="form-control"
            id="exampleInputId"
            aria-describedby="IdHelp"
            name="id"
            onChange={handleChangeEdit}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            name
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            onChange={handleChangeEdit}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleChangeEdit}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={addVal}>
          Submit
        </button>
      </form>
      <Table
        values={values}
        // submitData={submitData}
        // handledelete={handleDeleteClick}
      />
    </div>
  );
}
export default Form;
