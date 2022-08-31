require('dotenv').config()
const axios = require('axios')
const request = require('request')
const ejs = require('ejs')
const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    const category = "happiness"
    getQuote(category, res)
    
})

app.post('/', (req, res)=>{
    const category = req.body.category
    getQuote(category, res)
    
})

function getQuote(category, res){
    request.get({
        url: "https://api.api-ninjas.com/v1/quotes?category="+category,
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": process.env.APIKEY
        }
    }, function(err, response, body){
        if(response.statusCode == 200){
            const quote = JSON.parse(body)
            // console.log(quote)

            res.render('index', {array: quote})
        }
    })
}

app.listen(3000,()=>{
    console.log('App connected and listening on port 3000')
})
