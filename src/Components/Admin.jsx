import React, { useEffect, useState } from 'react'
import { getallUsersAPI } from '../Seervices/allAPI'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get('http://localhost:5000/users/getAllUsers') // Fetch data from your backend server
        .then(response => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-management">
    <h1>User Management</h1>
    <table>
      <thead>
        <tr>
          
        
          <th>Username</th>
          <th>Email</th>
          
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr>
          
          
            <td>{user.username}</td>
            <td>{user.email}</td>
          
          </tr>
        ))}
      </tbody>
    </table>
    <div class="d-grid gap-2 col-2 mx-auto">
      <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>
  <button class="btn btn-primary " type="button">Dashboard</button>
  </Link>
</div>  
  </div>
  )
}

export default Admin