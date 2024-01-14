

// Creating a map object
var myMap = L.map("map", {
  center: [32.7157, -117.1611],
  zoom: 11
});



// Adding a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// If data.beta.nyc is down comment out this link
var link = "static/data/demographics_geo_json.geojson";


// Use this link to get the geojson data.
// var link = "static/data/nyc.geojson";

// Get our GeoJSON data using d3.json
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
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