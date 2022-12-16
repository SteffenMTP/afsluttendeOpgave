import React, { useState } from 'react'
import Title from "../../components/Title";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

//Import eget hook - som laver request til API
import useGetData from "../../hooks/useGetData";

const Energidata = () => {

  //Request Hook
  const { error, loading, data, getData } = useGetData()

  //States
  const [area, setArea] = useState();                 //Sæt område
  // const [startDate, setStartDate] = useState()        //Sæt start-dato
  // const [endDate, setEndDate] = useState()            //Sæt end-dato
  

  //Søg - kald API
  const handleSubmit = (e) => {
    e.preventDefault(); //forhindrer reload af siden (skal undgås fordi det tømmer state)
    callAPI();

  }


  const callAPI = () => {
    // getData("https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start="+ startDate + "&end="+ endDate + "&filter=%7B%22PriceArea%22:[%22" + area + "%22]%7D&sort=HourDK%20ASC&timezone=dk")
    getData("https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=2022-12-12T00:00&end=2022-12-13T00:00&filter=%7B%22PriceArea%22:[%22" + area + "%22]%7D&sort=HourDK%20ASC&timezone=dk")
  }

  return (
    <div className='container'>

      <Title headline="Elspot - Elpriser" />

      {/* Error */}
      {error && <Error />}

      {/* Loading */}
      {loading && <Loader />}

      {/* Data */}

      <form onSubmit={handleSubmit}>

        {/* Vælg OMRAADE */}
        <div className="col-6 mb-3 mt-3 mx-auto" >
          <label className="mx-2 form-label" htmlFor="SelectArea">Område:</label>
          <select id="SelectArea" defaultValue="DEFAULT" onChange={e => setArea(e.target.value)} className="form-select">
            <option value="DEFAULT" disabled>Vælg område</option>
            <option>DK1</option>
            <option>DK2</option>
          </select>
        </div>

        {/* VÆLG DATO START */}
        {/* <div className='container flex'>
          <div className='col-6 mb-3 mt-3 mx-auto'>
            <input type="date" onChange={(e)=>setStartDate(new Date(e.target.value).toISOString().slice(0,16))}></input>
          </div>

          <div className='col-6 mb-3 mt-3 mx-auto'>
          <input type="date" onChange={(e)=>setEndDate(new Date(e.target.value).toISOString().slice(0,16))}></input>
          </div>

        </div> */}

        <div className="col-6 mb-3 mt-3 mx-auto">
          <button className="btn btn-primary">Søg</button>
        </div>

      </form>

      <div className="row row-cols-1 row-cols-md-4 g-2">

        {data && data.records.map((e, i) =>

          <div className='card' key={"Watt" + i}>

            <div className='card-body'>
              <p>{new Date(e.HourDK).toLocaleString("da-dk", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
              <p>Prisområde: {e.PriceArea}</p>
              <p>{(e.SpotPriceDKK / 1000).toFixed(2)} kr.- pr. kWh</p>
            </div>

          </div>
        )}
      </div>

    </div>


  )
}

export default Energidata