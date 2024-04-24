const express = require('express');
const app = express();

const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
    { id:1, name: 'Sabana', email: 'Sabana@gmail.com' },
    { id:2, name: 'Sabnur', email: 'Sabnur@gmail.com' }
]

app.get('/', (req,res)=>{
    res.send('User server is running')
})
app.get('/users', (req, res)=>{
    res.send(users);
})
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length +1;
    users.push(newUser);
    res.send(users); 
})
app.listen(port, ()=>{
    console.log(`Server is running or Port: ${port}`)
})