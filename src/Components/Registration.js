import React from 'react';
import App from '../App';
export default function Registration() {
  return(
       <>

<form>
    <h1>Registration</h1>
    <div className='form-group'>
    <label>Name</label>
           <input type="text"  className="form-control" placeholder="Enter full name"  ></input>
  </div>

  <div className='form-group'>
    <label>Email</label>
           <input type="Email" className="form-control" placeholder="Enter your email"  ></input>
  </div>


  <div className='form-group'>
    <label>Password</label>
           <input type="password" className="form-control" placeholder="Enter your password "  ></input>
  </div>


  <div className='form-group'>
    <label>Phone no</label>
           <input type="phone" className="form-control" placeholder="Enter phone no"  ></input>
  </div>
  <br></br> <br></br>

<button type='button' className='btn btn-success'>Register</button>
</form>
  </>
  )
}
