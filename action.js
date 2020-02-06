//Inital map
var map = L.map('mapid').setView([41.386954, 2.170001], 16);
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
var marker = [
    L.marker([41.386890, 2.1659152]).bindPopup("<h4>Restaurant Centfocs</h4><p>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona</p>").addTo(map),
    ];
var x="";
var marker2 = null;

//Actions with the map
    map.on('click', function(e) {

        if(marker2) map.removeLayer(marker2)
        var center = e.latlng;

        //Gets the location
        marker2 = L.marker(center).bindPopup("Mis coordenadas son:<br><b>Lat: "+e.latlng.lat+" Lng: "+e.latlng.lng+"</b>").addTo(map);
        marker2.openPopup();
        map.setView(center, 18);
        document.getElementById("inputs").style.display = "flex";
        
        //Save the location
        marker2.on('dblclick', function(e) {
            marker2 = L.marker(center).bindPopup("Mis coordenadas son:<br><b>Lat: "+e.latlng.lat+" Lng: "+e.latlng.lng+"</b>").addTo(map);
        });
    });

//Adds the description
function writting(){
    x = document.getElementById("description").value;
    marker2.setPopupContent(x);
}

//Reset values from the imput
function reset(){
    document.getElementById('description').value = '';
}


