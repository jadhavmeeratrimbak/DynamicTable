import React, { useState } from "react"
function Posts(){
    const [user,setUser]=useState({
      email:"",password:"",
    })
    let name,value;
    const handleInputs=(e)=>{
      console.log(e)
    name =e.target.name;
     value=e.target.value;  
     setUser[{...user,[name]:value}]
    }
 return(
  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"
     value={user.email}
     onChange={handleInputs}
    aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
     value={user.password}
     onChange={handleInputs}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 )}
export default Posts