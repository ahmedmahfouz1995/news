// variables decleration 
const express = require('express')
const request = require("request")
const path = require("path")
const diractory = path.join(__dirname,'../puplic')
const viewsPath =path.join(__dirname,'../templates/views')
const partialPath =path.join(__dirname,'../templates/partials')
const app = express()
// setting environment
app.set('view engine','hbs');
app.use(express.static(diractory))
const hbs = require('hbs');
hbs.registerPartials(partialPath)
app.set("views",viewsPath)
// port setting
const port = process.env.PORT || 3000
// home page route 
app.get('/', (req, res) => {
    res.render("index")
  })












  app.get('*', (req, res) => {
    res.render("404",{
      img:"img/1_pq1NIL8rEvS2v7AbVFirjA.jpeg"
    })
  })
  app.listen(port, () => {
    console.log(`Your News Are Currentlly being displayed on  port ${port}`)
  })