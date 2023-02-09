import React from "react";
function Stateex() {
  const [val, setVal] = React.useState([]);
  const [vals, setVals] = React.useState([]);
  const [values, setValues] = React.useState([]);
  const handleChange = (event) => {
    setVal(event.target.value);
  };
  const handleChange1 = (event) => {
    setVals(event.target.value);
  };
  const addVal = (e) => {
    e.preventDefault();
    setValues([...values, val, vals]);
    document.getElementById("myform").reset();
  };
  return (
    <div>
      <h1>state demo!!!</h1>
      <form id="myform">
        <input type="text" onChange={handleChange}></input>
        <input type="password" onChange={handleChange1}></input>
        <button onClick={addVal}>add value</button>
      </form>
      <table>
        <tr>
          <th>name</th>
          <th>password</th>
        </tr>
        <tbody>
          {values.map((x) => (
            <tr>
              <td>{x}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Stateex;
