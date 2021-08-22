const request =  require('request');


const weatherLocation = (url,callback)=>{


    request(url,(error,response)=>{

        if(error){
            callback("Data not found",undefined);

        }
        else{
            const data = JSON.parse(response.body);
            const loc = data.location;
          
            callback(loc);
        }
       
   
    
     
    })
}

module.exports.weatherLocation= weatherLocation;


