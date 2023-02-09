import React from "react";
import "./Edit";
function Table({ values, handleEdit, handleDelete, handleUpdate }) {
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {values.map((x, index) => (
            <tr key={index}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.password}</td>

              <td>
                <button onClick={() => handleEdit(index, values)}>Edit</button>
                <button onClick={() => handleDelete(index)}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
