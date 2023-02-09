import React from "react";
import Table1 from "./Table1";

function Form() {
  const userList = {
    id: "",
    name: "",
    password: "",
  };

  const [user, setUser] = React.useState(userList);
  const [values, setValues] = React.useState([]);
  const [editedUser, setEditObj] = React.useState({});
  const [Update, setUpdate] = React.useState(false);
  const [editindex, setEditIndex] = React.useState([]);

  const handleChangeEdit = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const addVal = (e) => {
    e.preventDefault();
    setValues([...values, user]);
    document.getElementById("myform").reset();
  };
  const editData = (index, values) => {
    setEditObj({
      eid: values[index].id,
      ename: values[index].name,
      epassword: values[index].password,
    });
    setUpdate(true);
    setEditIndex(index);
  };
  const deleteData = (index) => {
    var newArr = [...values];
    newArr.splice(index, 1);
    setValues(newArr);
  };
  const handleUpdate = (index, name) => {
    const temp = [...editData];
    temp.splice(index, 1, name);
    setValues(...temp);
  };

  return (
    <div>
      <form id="myform">
        <div class="mb-3" id="ID">
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
            defaultValue={editedUser.eid}
          />
        </div>
        <div class="mb-3" id="name">
          <label for="exampleInputEmail1" class="form-label">
            name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            onChange={handleChangeEdit}
            defaultValue={editedUser.ename}
          />
        </div>
        <div class="mb-3" id="Password">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleChangeEdit}
            defaultValue={editedUser.epassword}
          />
        </div>

        {!Update ? (
          <button type="submit" class="btn btn-primary" onClick={addVal}>
            Submit
          </button>
        ) : (
          <button type="submit" class="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
        )}
      </form>
      <Table1 values={values} handleEdit={editData} handleDelete={deleteData} />
    </div>
  );
}
export default Form;
