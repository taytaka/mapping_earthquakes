console.log("Working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add our 'graymap' tile layer to the map
streets.addTo(map);

// // Add a marker to the map for LA
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// // Make it a circle
// let circle = L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "lightyellow"
// }).addTo(map);

// Make it a circle marker
let circleMarker = L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);