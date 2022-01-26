import React, { useState } from 'react';
import App from '../App';
import Login from './Login';
export default function Registration() {

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[phone,setPhone]=useState("");
const[flag,setFlag]=useState(false);
const[login,setLogin]=useState(true);


const onSubmit=(e)=>{
    e.preventDefault();
if(!name || !email || !password || !phone){

    setFlag(true);
} 
else{
    setFlag(false);
    localStorage.setItem("Email",JSON.stringify(email));
    localStorage.setItem("Password",JSON.stringify(password));

console.log("saved on local stoage");


}


}

const handler=()=>{
    
}
  return(
       <>
     

{login ?(
<form onSubmit={onSubmit}>
    <h1>Registration</h1>
    <div className='form-group'>
    <label>Name</label>
           <input type="text" onChange={(e)=>setName(e.target.value)}  className="form-control" placeholder="Enter full name"  ></input>
  </div>

  <div className='form-group'>
    <label>Email</label>
           <input type="Email" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter your email"  ></input>
  </div>


  <div className='form-group'>
    <label>Password</label>
           <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter your password "  ></input>
  </div>


  <div className='form-group'>
    <label>Phone no</label>
           <input type="phone" onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Enter phone no"  ></input>
  </div>
  <br></br> <br></br>

<button type='submit' className='btn btn-success'>Register </button>

<p onClick={handler}>Already Registration</p>
{flag && (
 <alert color="primary" varient="danger">Please fill every filed</alert>   
)}

</form>

):(
<Login/>
)}
  </>
  )
}
