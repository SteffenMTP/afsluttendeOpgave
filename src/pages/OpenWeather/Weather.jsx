import React, { useEffect, useState } from 'react'
import Title from "../../components/Title";
import Error from "../../components/Error";
import Loader from "../../components/Loader"

//import map
import { initMap, changeMapView, removeMap } from '../../helpers/leaflet'

//Import eget hook - som laver request til API
import useGetData from "../../hooks/useGetData";


const Weather1 = () => {

    //request-hook
    const { error, loading, data, getData } = useGetData()
    //request-hook - DAWA
    const { error: errorDAWA, loading: loadingDAWA, data: dataDAWA, getData: getDataDAWA } = useGetData()

    //state til users ID
    const [zip, setZip] = useState("8000")

    useEffect(() => {

        // REACT_APP_OPENWEATHERAPIKEY7

        // Overvej regex - regular expression
        //process.env.REACT_APP_OPENWEATHERAPIKEY
        if (zip.length === 4 && !isNaN(zip)) {
            getData("https://api.openweathermap.org/data/2.5/forecast?units=metric&zip=" + zip + ",dk&appid=" + process.env.REACT_APP_OPENWEATHERAPIKEY)
        } else {
            //Søg i DAWA og send brugerens input med (state)
            getDataDAWA("https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip)
        }

    }, [zip])

    useEffect(() => {
        //Hvis der er data (og dermed koordinater til et valgt postnummer) flyt kort-view til postnr-koordinater
        
        // if (data) changeMapView([data.coord.lat, data.coord.lon], data.weather[0].description)

        if (data && dataDAWA) changeMapView([dataDAWA[0].postnummer.visueltcenter_y, dataDAWA[0].postnummer.visueltcenter_x])
    }, [data]) //lytter efter data fra OpenWeather (med koordinater!)

    //init map
    useEffect(() => {

        initMap([56, 10])

        return () => {
            removeMap() // Fjern kortet når component unmountes
        }
    }, [])


    return (
        <div className='Weather1 container'>

            <Title headline="Vejret - indtast postnummer" />

            {/* Error */}
            {(error || errorDAWA) && <Error />}

            {/* Loading */}
            {(loading || loadingDAWA) && <Loader />}



            <div className='row'>

                <div className='col-12 mb-5 text-center'>

                    <input list='adresseforslag' type="text" placeholder="Indtast et postnummer" autoComplete='off' onInput={e => setZip(e.target.value.substring(0, 4))} defaultValue={zip}></input>
                    <datalist id='adresseforslag'>
                        {
                            dataDAWA && dataDAWA.map(a => <option value={a.tekst} key={a.postnummer.nr} />)
                        }
                    </datalist>
                </div>


                {/* Kort */}
                <div id='mapcontainer' className='col-12 col-md-6 offset-md-3' style={{ width: "640px", height: "300px", backgroundColor: "silver" }}> {/*Husk at angive width og height ellers vil mappet ikke vises*/}
                    Kortet er på vej ...
                </div>



                <div className='row row-cols-1 row-cols-md-5 g-3'>
                    {
                        data && data.list.map((w, i) =>
                            <div className='card' key={"weather" + i}>
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h4>Vejret i {data.city.name}</h4>
                                    </div>
                                    <div className='card-body'>
                                        <p>{new Date (w.dt_txt).toLocaleString("da-dk", {year: "numeric", month: "long", day:"numeric", hour:"2-digit", minute:"2-digit" }) }</p>
                                        <p>Temperatur: {Math.round(w.main.temp)}&#8451;</p>
                                        <p>Solopgang: kl. {new Date (data.city.sunrise*1000).toLocaleString("da-dk", {hour:"2-digit", minute:"2-digit" }) }</p>
                                        <p>Solnedgang: {new Date (data.city.sunset*1000).toLocaleString("da-dk", {hour:"2-digit", minute:"2-digit" }) }</p>
                                        <p>Luftfugtighed: {w.main.humidity}%</p>
                                        <p>Lufttryk: {w.main.pressure} hPa</p>
                                        <p>Beskrivelse: {w.weather[0].description}</p>
                                        <img src={"http://openweathermap.org/img/wn/" + w.weather[0].icon + "@2x.png"} />
                                    </div>
                                </div>

                            </div>
                        )
                    }

                </div>
            </div>


        </div>
    )
}

export default Weather1