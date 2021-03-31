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
   const regions = tanzaniageodata.regions();

   console.log(regions);
```

```bash
[ "Arusha",
  "Dar es Salaam",
  "Dodoma",
  "Geita",
  "Iringa",
  "Kagera",
  "Katavi",
  "Kigoma",
  "Kilimanjaro",
  "Lindi",
  "Manyara",
  "Mara",
  "Mbeya",
  "Morogoro",
  "Mtwara",
  "Mwanza",
  "Njombe",
  "Pemba Kaskazini",
  "Pemba Kusini",
  "Pwani",
  "Rukwa",
  "Ruvuma",
  "Shinyanga",
  "Simiyu",
  "Singida",
  "Songwe",
  "Tabora",
  "Tanga",
  "Unguja Kaskazini",
  "Unguja Mjini Magharibi",
  "Unguja Kusini" ]
```

```js
 //get all wards
   const wards = tanzaniageodata.allWards();

   console.log(wards);
```
```bash
   [ "Babayu",
  "Bahi",
  "Chali",
  "Chibelela",
  "Chikola",
  "Chipanga",
  "Ibihwa",
  "Ibugule",
  "Ilindi",
  "Kigwe",
  "Lamaiti",
  "Makanda",
  "Mpalanga",
  "Mpamantwa",
  "Msisi",
  "Mtitaa",
  "Mundemu",
  "Mwitikira",
  "Nondwa",
  "Zanka",
  "Buigiri",
  "Chiboli",
  "Chilonwa",
  "Chinugulu",
  "Dabalo",
  "Fufu",
  "Handali",
  "Haneti",
  "Huzi",
  "Idifu",
  "Igandu",
  "Ikowa",
  "Iringa Mvumi Zamani",
  "Itiso",
  "Loje",
  "Majeleko",
  "Makang'wa",
  "Manchali",
  "Manda",
  "Manzase",
  "Membe",
  "Mlowa Bwawani",
  "Mpwayungu",
  "Msamalo",
  "Msanga",
  "Muungano",
  "Mvumi Makulu",
  "Mvumi Mission",
  "Nghambaku",
  "Nhinhi",
  "Segala",
  "Zajilwa",
  "Chandama",
  "Chemba",
  "Churuku",
  "Dalai",
  "Farkwa",
  "Goima",
  "Gwandi",
  "Jangalo",
  "Kimaha",
  "Kwamtoro",
  "Lalta",
  "Makorongo",
  "Mondo",
  "Mpendo",
  "Mrijo",
  "Msaada",
  "Ovada",
  "Paranga",
  "Sanzawa",
  "Songoro",
  "Chahwa",
  "Chamwino",
  "Chang'ombe",
  "Chigongwe",
  "Chihanga",
  "Dodoma Makulu (Dom-Makulu)",
  "Hazina",
  "Hombolo",
  "Ipagala",
  "Ipala",
  "Iyumbu",
  "Kikombo",
  "Kikuyu Kaskazini ",
  "Kikuyu Kusini",
  "Kilimani",
  "Kiwanja cha Ndege",
  "Kizota",
  "Madukani",
  "Majengo",
  "Makole",
  "Makutupora",
  "Mbabala",
  "Mbalawala",
  "Miyuji",
  "Mkonze",
  "Mnadani",
  "Mpunguzi",
  "Msalato",
  ... 3544 more items ]
```
```js
 //get all districts
   const districts = tanzaniageodata.alldistrict();

   console.log(districts);
```
```bash
[ "Meru District",
  "Arusha City",
  "Arusha District",
  "Karatu District",
  "Longido District",
  "Monduli District",
  "Ngorongoro District",
  "Ilala Municipal",
  "Kinondoni Municipal",
  "Temeke Municipal",
  "Kigamboni Municipal",
  "Ubungo Municipal",
  "Bahi District",
  "Chamwino District",
  "Chemba District",
  "Dodoma Municipal",
  "Kondoa District",
  "Kongwa District",
  "Mpwapwa District",
  "Bukombe District",
  "Chato District",
  "Geita Town",
  "Mbogwe District",
  "Nyang'hwale District",
  "Iringa District",
  "Iringa Municipal",
  "Kilolo District",
  "Mafinga Town",
  "Mufindi District",
  "Biharamulo District",
  "Bukoba District",
  "Bukoba Municipal",
  "Karagwe District",
  "Kyerwa District",
  "Missenyi District",
  "Muleba District",
  "Ngara District",
  "Mlele District",
  "Mpanda District",
  "Mpanda Town",
  "Buhigwe District",
  "Kakonko District",
  "Kasulu District",
  "Kasulu Town",
  "Kibondo District",
  "Kigoma District",
  "Kigoma-Ujiji Municipal",
  "Uvinza District",
  "Hai District",
  "Moshi District",
  "Moshi Municipal",
  "Mwanga District",
  "Rombo District",
  "Same District",
  "Siha District",
  "Chake Chake District",
  "Mkoani District",
  "Kati District",
  "Kusini District",
  "Kilwa District",
  "Lindi District",
  "Lindi Municipal",
  "Liwale District",
  "Nachingwea District",
  "Ruangwa District",
  "Babati Town",
  "Babati District",
  "Hanang District",
  "Kiteto District",
  "Mbulu District",
  "Simanjiro District",
  "Bunda District",
  "Butiama District",
  "Musoma District",
  "Musoma Municipal",
  "Rorya District",
  "Serengeti District",
  "Tarime District",
  "Busokelo District",
  "Chunya District",
  "Kyela District",
  "Mbarali City",
  "Mbeya District",
  "Mbeya District",
  "Rungwe",
  "Magharibi District",
  "Mjini District",
  "Gairo District",
  "Kilombero District",
  "Kilosa District",
  "Morogoro District",
  "Morogoro Municipal",
  "Mvomero District",
  "Ulanga District",
  "Malinyi District",
  "Ifakara Township",
  "Masasi District",
  "Masasi Town",
  "Mtwara District",
  "Mtwara Municipal",
  ... 76 more items ]
```
```js
//get districts per region
// for instance Districts for Arusha Region
   const districtPerRegion = tanzaniageodata.districtsPerRegion("Arusha Region");

   console.log(districtPerRegion);
```
```bash
[ "Meru District",
  "Arusha City",
  "Arusha District",
  "Karatu District",
  "Longido District",
  "Monduli District",
  "Ngorongoro District" ]
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
 
