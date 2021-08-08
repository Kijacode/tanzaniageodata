const path = require('path');
const _ = require("lodash");
const jsonfile = require("jsonfile");
const _Regionfile = path.join(__dirname, "Countries/Tanzania/Regions.json");
const _Wardsfile = path.join(__dirname, "Countries/Tanzania/Wards.json");
const _Districtfile = path.join(__dirname, "Countries/Tanzania/Districts.json");



exports.regions = function () {
  try {
    const data = jsonfile.readFileSync(_Regionfile)
    let Regions = [];
    _.forEach(data["features"], (regionObject) => {
          Regions.push(regionObject["properties"]["region"]);
        });
    return Regions
  } catch(err) {
    console.error(err);
  }
},

exports.alldistrict = function () {
  try {
    const data = jsonfile.readFileSync(_Districtfile);
    let Districts = [];
    _.forEach(data["features"], (regionObject) => {
      Districts.push(regionObject["properties"]["District"]);
    });
    return Districts
  } catch(err) {
    console.error(err);
  }
};

exports.districtsPerRegion = function (regionName) {
  try {
    const data = jsonfile.readFileSync(_Districtfile);
    let DistrictsPerRegion = [];
    _.forEach(data["features"], (regionObject) => {
      if (regionObject["properties"]["region"] == regionName) {
        DistrictsPerRegion.push(regionObject["properties"]["District"]);
      }
    });
    return DistrictsPerRegion
  } catch(err) {
    console.error(err);
  }
};

exports.allWards = function () {
  try {
    const data = jsonfile.readFileSync(_Wardsfile);
  let wards = [];
  _.forEach(data["features"], (districtObject) => {
    wards.push(districtObject["properties"]["Ward"]);
  });
  return wards
  } catch(err) {
    console.error(err);
  }
};

exports.wardsPerDistrict = function(district) {
  try {
    const data = jsonfile.readFileSync(_Wardsfile);
    let wards = [];
    _.forEach(data["features"], (districtObj) => {
      if (districtObj.properties.District.toLowerCase().includes(district.toLowerCase())) {
        wards.push(districtObj["properties"]["Ward"]);
      }
    });
    return wards
  } catch(err) {
    console.log(err);
  }
}