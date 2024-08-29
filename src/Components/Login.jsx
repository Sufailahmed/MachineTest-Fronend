import React, { useContext, useState } from 'react'
import { Row, Col, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { loginAPI } from '../Seervices/allAPI';
import { isAuthTokenContext } from '../Context/ContextShare';


function Login() {
  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userdata, setuserdata] = useState({
    username: "",
    password: "",
    email:""
  })
  const handilelogin = async (e) => {
    e.preventDefault()
    const { password ,email} = userdata
    if (!password || !email) {
      alert("plese fill the form")
    } else {
      const result = await loginAPI(userdata)
      console.log(result);
      
      if (result.status === 200) {
        sessionStorage.setItem("existinguser", JSON.stringify(result.data.existingUser));
        sessionStorage.setItem("token", result.data.token)
        setIsAuthToken(true)
      
        setuserdata({
          username: "",
          email:"",

          password: ""
        })
        if(result.data.existingUser.username=='admin'){
          navigate('/dashboard')
          alert("admin logged success")
        }
        else{
        navigate('/dashboard')
        alert("User logged succefully")
        }
      }
      else {
        alert(result.response.data)
      }

    }

  }
  return (
    <div class="container-fluid" id='login'>
    <form class="mx-auto">
        <h4 class="text-center">Login</h4>
        <div class="mb-3 mt-5">
          <label for="exampleInputEmail1" class="form-label">User Name</label>
          <input   value={userdata.email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })}  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input  value={userdata.password} onChange={(e) => setuserdata({ ...userdata, password: e.target.value })} type="password" class="form-control" id="exampleInputPassword1"></input>
       
        </div>
      
        <button  onClick={handilelogin} type="submit" class="btn btn-primary mt-5">Login</button>
        <button   type="submit" class="btn btn-primary mt-5"><Link to='register'>Register</Link></button>
      </form>
    </div>



  )
}

export default Login