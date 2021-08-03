# tanzaniageodata 🚀
Get access to regions, districts and wards of Tanzania Country in simple way 🚀🚀

[![NPM](https://nodei.co/npm/tanzaniageodata.png)](https://npmjs.org/package/tanzaniageodata)                  
 ![npm bundle size](https://img.shields.io/bundlephobia/min/tanzaniageodata?style=for-the-badge)


## Quick Start 
```bash

npm i tanzaniageodata

```
## How to Use ? 
```js
const tanzaniageodata = require("tanzaniageodata");
   
//get all regions
const regions = tanzaniageodata.regions(); // [ "Arusha", "Dar es Salaam", "Dodoma", "Geita",...]
   
//get all wards
const wards = tanzaniageodata.allWards(); // [ "Babayu", "Bahi", "Chali", "Chibelela",...]

//get all districts
const districts = tanzaniageodata.alldistrict(); // [ "Meru District", "Arusha City", "Arusha District", "Karatu District",...]

//get districts per region
// for instance Districts for Arusha Region
const districtPerRegion = tanzaniageodata.districtsPerRegion("Arusha Region"); // [ "Meru District", "Arusha City", "Arusha District", "Karatu District",...]

```


## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues) 

We are open for new ideas, improvements and innovations  🚀.
#### pull request are welcome


# How Can you support ? 
 Why not star ⭐ this repo ? It will surely motivate and push me to innovate for more community solutions.

# Let Be Friends

  1. [Twitter]
  2.  [Facebook]
  3.  [Linkedin]



  [Twitter]: https://twitter.com/kijacode
  [Facebook]: https://www.facebook.com/danford.kija
  [Linkedin]: https://www.linkedin.com/in/danford-kija-03b261112/?msgConversationId=6577261668651405312&msgOverlay=true
 
