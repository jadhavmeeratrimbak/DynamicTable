import React from "react";
import "./Edit1";
function Table({ users, handleEdit,handleDelete }) {
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>fn</th>
            <th>ls</th>
            <th>e</th>
            <th>a</th>
            <th>b</th>
            <th>password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((x, index) => (
            <tr key={index}>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.Age}</td>
              <td>{x.Email}</td>
              <td>{x.Password}</td>
              <td>{x.birthDate}</td>
              <td>
                <button onClick={() => handleEdit(index, users)}>Edit</button>
                <button onClick={() => (index, users)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
