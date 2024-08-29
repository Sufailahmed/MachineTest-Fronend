import { Col, Input, Row,Form } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../Seervices/allAPI';

function Register() {
  const navigate=useNavigate()
  const [userdata, setuserdata] = useState({
    username: "",
    password: "",
    email:""
  })


  const handileRegister = async (e) => {
    e.preventDefault()
    console.log(userdata)
    const { username, password,email } = userdata
    if (!username ||  !password || !email) {
      alert("plese fill the form")
    }
    else {
      const result = await registerAPI(userdata)
      console.log(result)
      if (result.status === 200) {
        alert("user registered succesfully")
        setuserdata({
          username: "",
          password: "",
          email:""
        })
        navigate('/')
      }
      else {
        alert("error")
      }
    }

  }
  return (
    <div class="container-fluid">
    <form class="mx-auto">
        <h4 class="text-center">Login</h4>
        <div class="mb-3 mt-5">
          <label for="exampleInputEmail1" class="form-label">User Name</label>
          <input   value={userdata.username} onChange={(e) => setuserdata({ ...userdata, username: e.target.value })}  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div class="mb-3 mt-5">
          <label for="exampleInputEmail1" class="form-label">User Email</label>
          <input   value={userdata.email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })}  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input  value={userdata.password} onChange={(e) => setuserdata({ ...userdata, password: e.target.value })} type="password" class="form-control" id="exampleInputPassword1"></input>
       
        </div>
      
        <button  onClick={handileRegister} type="submit" class="btn btn-primary mt-5">Register</button>
        <button   type="submit" class="btn btn-primary mt-5"><Link to='/'>Login</Link></button>
      </form>
    </div>
  )
}

export default Register