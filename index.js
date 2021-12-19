const express = require('express')
const cors = require('cors');
const app = express();
const port =5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from nodemon , automatic restart');
});

const users =[

    {id:0 , name: 'Shabana' , email:'shabana@gmail.com'},
    {id:1 , name: 'Shabnur' , email:'Shabnur@gmail.com'},
    {id:2 , name: 'Srabonti' , email:'Srabonti@gmail.com'},
    {id:3 , name: 'Shuchorita' , email:'r@gmail.com'},
    {id:4 , name: 'Soniya' , email:'Soniya@gmail.com'},
    {id:5 , name: 'Susmita' , email:'shabSoniyaana@gmail.com'}

]

//search query
app.get('/users', (req, res) =>{
    // console.log(req.query.search);
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
})

//app.METHOD

app.post('/users' , (req , res) => {

    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('inside post')
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id' , (req, res) => {
   const id = req.params.id;
   const user = users[id]
   res.send(user);
    // console.log(req.params.id);
})

app.get('/fruits', (req, res) =>{
    res.send(['mango' , 'orange' , 'banana' , 'apple'])
})



app.get('/fruits/mangoes/fazli', (req, res) =>{
    res.send('yummy Yummy tok marka fazli');
})

app.listen(port, () =>{
    console.log('Listening to port' , port);
})