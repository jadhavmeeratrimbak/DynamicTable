import React from "react";

function StateAndProps() {
  const userObj = {
    firstName: "",
    lastName: "",
  };

  const [user, setUser] = React.useState(userObj);
  const [userList, setUserList] = React.useState([]);

  const handleChange = (event) => {
    console.log(event.target);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitData = () => {

     
    setUserList([...userList, user]);
    console.log(userList)
  };

  return (
    <div>
      <form>
      
        <input type="text" name="firstName" onChange={handleChange} />
        <input type="text" name="lastName" onChange={handleChange} />
        <button type="button" onClick={submitData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default StateAndProps;
