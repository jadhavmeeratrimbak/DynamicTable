import { useEffect } from "react";
import React from "react";
function UseEffect() {
  const[value,setValue]=React.useState('')
  // useEffect(() => {
  //   console.log("hiii");
  // });
  const data=[{
    id:1,
    name:"a",
    city:"pune",
  },
{
  id:2,
  name:"b",
  city:"mumbai"
}]
  //useeffect is mounting and value is change that state unmounting
    useEffect(() => {
    console.log("hiii");
  },[]);

  return <h1>hello!!</h1>;
}
export default UseEffect;
