import React, { useState } from 'react';

export default function Login() {
const[emaillog,setEmaillog]=useState("");
const[passWordlog,setPasswordlog]=useState("");

  return (
  <div>
<form>
    <div className='form-group'>
    <label>Email</label>
           <input type="Email" onChange={(e)=>setEmaillog(e.target.value)} className="form-control" placeholder="Enter your email"  ></input>
  </div>


  <div className='form-group'>
    <label>Password</label>
           <input type="password" onChange={(e)=>setPasswordlog(e.target.value)} className="form-control" placeholder="Enter your password "  ></input>
  </div>
</form>

  </div>
  )}
