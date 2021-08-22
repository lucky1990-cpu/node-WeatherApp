const { request } = require('express');
const express =  require('express');
const app = express();
const path = require('path');
const weather =  require('./utill/forcast');

 


//to make static folder for public

 const staticPath = path.join(__dirname,'../public');
 app.set('view engine','hbs');
 // Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, '../views'));
 app.use(express.static(staticPath));



// for dynamic page 


//  app.get('',(req, res)=>{
//      res.render('index',{
//          firstName:'Lucky',
//          lastName:'chauhan'
//      });

//  })

 app.get('/weather',(req,res)=>{
     console.log(req.query);
     if(!req.query.Search){
      return res.send('Sreach key is mandataroy field');
     }
     else{
        const url = 'http://api.weatherstack.com/current?access_key=d7f4a7fd36b8a21b2fb9d3fd6739ea51&query="'+req.query.Search+'"';
        weather.weatherLocation(url , (response)=>{
         res.send(response);
        })
     }
    

 })


console.log(__dirname);
console.log(__filename);

// app.get('',(req,res)=>{
//      res.send('Hello Web express page');
// })
// app.get('/about',(req,res)=>{
//     res.send('We are in about page');
// })
// app.get('/help',(req,res)=>{
//     res.send('<H1>Hello need help<H1>');
// })
// app.get('/Weather',(req,res)=>{
//     res.send([{
//         WeatherArea:'patna',
//         Weather:'Cloudy'
//     }]);
// })

app.get('*',(req,res)=>{
    res.send('<a href="/">page not found go to home page</a>');
})

app.listen(3000,()=>{
    console.log("3000 port is working");

})