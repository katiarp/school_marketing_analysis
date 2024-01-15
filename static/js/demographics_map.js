
let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});



// Create a base layer that holds maps
let baseMaps = {
  "Day": day,
  "Satellite": satellite
};
// Create layers
let percent = new L.LayerGroup();
let children = new L.LayerGroup();

let overlays = {
  "Income greater than $200,000": percent,
  "Income $150,000 to $199,999": percent,
  "Income $125,000 to $149,999": percent,
  "Income $100,000 to $124,999": percent,
  "Children Ages": children,
};

// Creating a map object
var myMap = L.map("map", {
  center: [32.7157, -117.1611],
  zoom: 12,
  layers: [day]
});

// Control map that allows to change which layers are visible.
L.control.layers(baseMaps, overlays, {
  collapsed: true
}).addTo(myMap);


// Data
var link = "static/data/asc5_demographics_tract.geojson";


// purple orange green
function chooseColor(percent) {
  console.log('percent: ' + percent)
  if (percent >= 0 && percent < 30){
    return "#4ef1ff";
  }
  else if (percent >= 30 && percent < 40){
    return "#01ebff";
  }
  else if (percent >= 40 && percent < 50){
    return "#00d5e7";
  }
  else if (percent >= 50 && percent < 60){
    return "#00bece";
  }
  else if (percent >= 60 && percent < 70){
    return "#00a6b4";
  }
  else if (percent >= 70 && percent < 80){
    return "#008e9b";
  }
  else if (percent >= 80 && percent < 90){
    return "#007781";
  }
  else if (percent >90){
    return "#005f68";
  }
    else{
      return "#dad4c7"}


  // // switch (income) {
  // case income > 50:
  //   return "#800076";
  //   default:"#00cd10"
  // }
}


// Get our GeoJSON data using d3.json
d3.json(link).then(function(data){
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data,{
    onEachFeature: function(feature, layer){
      layer.bindPopup("<h3>Income greater than $200k: " + feature.properties.percentage_income_greater_than_200000 + "%</h3> <hr> <h4>Tract: " + feature.properties.name + "</h4>")

    },
   style: function(feature){
    return{
      color: "#000000",
      fillColor:chooseColor(feature.properties.percentage_income_greater_than_200000),
      fillOpacity: 0.75,
      weight: 1
    }
  }
}
    ).addTo(percent);
    percent.addTo(myMap);
});















// // Creating map object
// var myMap = L.map("myMap",{
//   center:[40.7,-74.0],
//   zoom: 20
// })
  
// // Add a tile layer
// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);

// // If data.beta.nyc is down comment out this link
// // var link = "http://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/" +
// //   "35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";


// // Use this link to get the geojson data.
// var link = "static/data/Census_Tracts_and_Zip_Codes_BLOCK_GROUPS.geojson";
// var mapStyle ={
//   color: "black",
//   fillcolor: "pink",
//   fillOpacity: 0.5

// }

// // Get our GeoJSON data using d3.json
// d3.json(link).then(function (data) {
//   console.log(data)
//   neighLayer = L.geoJson(data) // grouplayer 
//   style:mapStyle
//   neighLayer.addTo(myMap);
// })