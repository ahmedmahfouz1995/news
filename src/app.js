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

const News=(adress,callback)=>{
  const Newsurl= `https://newsapi.org/v2/top-headlines?country=${adress}&apiKey=d97b50b2ad574e8eacdaa66f3a01b4c2` 
  request({url:Newsurl,json:true},(error,response)=>{
      if (error) {
          callback("error conecting to the website",undefined)
          
      } 
      else if(response.body.message) {
          callback(response.body.message,undefined)
      }
      else if (response.body.articles.length== 0 ){
          callback("please input a real search word ",undefined)
      }
      else {
        callback(undefined,response)
    }
  })
}
// home page route 
app.get('/', (req, res) => {
      
      if (req.query.search) {
        News(req.query.search,(error,News)=>{
          console.log(req.query.search)
          if(error){
              return error
          }
          let articles =News.body.articles
          res.render("index",{
            articles
          })
        })
        
      } else {
        News("us",(error,News)=>{
          if (error) {
            return error
          } else {
            let articles =News.body.articles
            res.render("index",{
              articles
            })
          }
        })
        
      }
  })












  app.get('*', (req, res) => {
    res.render("404",{
      img:"img/1_pq1NIL8rEvS2v7AbVFirjA.jpeg"
    })
  })
  app.listen(port, () => {
    console.log(`Your News Are Currentlly being displayed on  port ${port}`)
  })