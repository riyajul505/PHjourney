import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name, email};
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <>
      
      <h1>Users management system</h1>
      <h2>Number of users: {users.length}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" id="" /><br />
        <label>Email</label>
        <input type="email" name="email" id="" />
        <input type="submit" value="Submit" />
      </form>
      
    </>
  )
}

export default App
