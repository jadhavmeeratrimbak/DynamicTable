// Practice makes man perfect
import React from "react";
function CallbackEvent() {
  const [text, setText] = React.useState("");

  //   const handleChange = (event) => {
  //     setText(event.target.value);
  //   };

  const handleChange = (index) => {
    console.log("Selected index: " + index);
  };

  const userList = [
    {
      id: 1,
      name: "A",
      city: "Pune",
    },
    {
      id: 2,
      name: "B",
      city: "Mumbai",
    },
  ];

  return (
    <div>
      <h1>Callback Event Handling!!!</h1>
      <p>Text is: {text}</p>
      <CheckCallback userList={userList} handleEdit={handleChange} />
    </div>
  );
}

function CheckCallback({ userList, handleEdit }) {
  return (
    <div>
      {/* <input type="text" onChange={handleInputChange} /> */}
      <ul>
        {userList.map((user, index) => (
          <div key={index}>
            <li>{user.name + " | " + user.city}</li>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CallbackEvent;
