const _ = require("lodash");
const jsonfile = require('jsonfile')
const file = "/home/danford/PROJECTS/package/TanzaniaGeoData/Countries/Tanzania/Regions.json"




exports.regions = function () {
jsonfile.readFile(file,(err,obj)=>{
let Regions = [];
  if(err){
      console.error(err);
  }
  _.forEach(obj['features'],(regionObject) =>{
Regions.push( regionObject['properties']['region'])  
  }) 
 console.dir(Regions);

});

}


exports.district = function (regionName) {
    jsonfile.readFile(file,(err,obj)=>{
    let Regions = [];
      if(err){
          console.error(err);
      }
    
      _.forEach(obj['features'],(regionObject) =>{
    Regions.push( regionObject['properties']['region'])  
      }) 
     console.dir(Regions);
    
    });
    
    }