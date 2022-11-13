const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors())

const port = process.env.PORT || 5000;

const catagoryData = require("./data/catagory.json");
const foodsData = require('./data/foods.json')

app.get('/catagory', (req, res)=>{
    res.send(catagoryData);
})

app.get('/foods-by-catagory/:id', (req, res)=>{
    const id = req.params.id
    const foodsByCatagory = foodsData.filter(food => food.cat_id == id)
    res.send(foodsByCatagory)
})

app.get('/food/:id', (req, res)=>{
    const id = req.params.id;
    const selectedFood = foodsData.find(food => food.id == id);
    res.send(selectedFood)
})

app.get('/', (req, res)=> {
    res.send("Node server is running!!")
})

app.listen(port, ()=>{
    console.log("Server is running!!!");
})