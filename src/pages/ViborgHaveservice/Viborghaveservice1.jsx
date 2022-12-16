import React, { useEffect } from 'react'
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import parse from 'html-react-parser'

//Import eget hook - som laver request til API
import useGetData from "../../hooks/useGetData";

const Viborghaveservice1 = () => {

  //request-hook
  const { error, loading, data, getData } = useGetData()
  const { error: errorService, loading: loadingService, data: dataService, getData: getDataService } = useGetData()

  useEffect(() => {

    getData("http://localhost:5023/aboutus"
    )
    getDataService("http://localhost:5023/services?limit=2"
    )

  }, [])

  
  return (
    <div className='row container p-6 m-5'>

      <div className='col m-1'>
        <div>
          <h1>Velkommen til <span>Viborg Haveservice</span></h1>
          <hr className='hr1'></hr>
        </div>

        {/*Error*/}
        {(error || errorService) && <Error />}

        {/*Loading*/}
        {(loading || loadingService) && <Loader />}

        {/* Data */}
        {data &&

          <div className="col m-1">

            <div>
              {parse(data.content)}
            </div>

          </div>

        }

        <button className='btn btn-success'><a href="/viborghaveservice2" className='Button__SeYdelser'>SE ALLE YDELSER</a></button>

      </div>

      {dataService && dataService.map((p) =>

        <div className="col-3" key={p._id}>
          <div className='card-body'>
            <img src={"http://localhost:5023/images/" + p.image} alt="Showcasing service" className='mb-4' />
            <h4>{p.title}</h4>
            <p>{p.content}</p>

          </div>

        </div>
      )}

    </div >
  )
}

export default Viborghaveservice1