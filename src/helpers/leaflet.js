import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

//Ikon (Blå "ballon") - indbygget i Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


// properties til ikonet
let myIcon = L.icon({
    iconUrl: icon,
    iconSize: [24,36],
    iconAnchor: [12,36],
    popupAnchor: [0, -40],
    shadowUrl: iconShadow
})


//globale variabler
let myMap, marker;

export const initMap = (coordinates) => {

    myMap = L.map("mapcontainer")

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);


    myMap.setView(coordinates, 13)
    marker = L.marker(coordinates, {icon: myIcon}).addTo(myMap)

}

//Vis nyt sted på kortet
export const changeMapView = (coordinates, PopupInfo) => {

    marker.setLatLng(coordinates).bindPopup(PopupInfo).openPopup()
    myMap.setView(coordinates, 13)

}

//Fjern kortet - kaldes når component forlades (clean-up-function)
export const removeMap = () => {

    if(myMap) {

        myMap.off();
        myMap = null;
        //myMap.remove()

    }

}

