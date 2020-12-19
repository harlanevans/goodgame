const express = require('express');
const path = require('path')
const pg = require('pg')
const fs = require('fs')

const app = express();
// const db = '';



app.use(express.urlencoded())
app.use(express.json())

app.use(express.static('client'))
// Routes

app.use('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, '../client/public/index.html'))
})

// global error handler
app.use((err, req, res, next) => {
    return res.status(500).send("Error in Server: ")
} )


app.listen(3000, () => console.log('LISTENING ON PORT 3000'))