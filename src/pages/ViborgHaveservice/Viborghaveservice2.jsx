import React, { useEffect } from 'react'
import Title from "../../components/Title";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

//Import eget hook - som laver request til API
import useGetData from "../../hooks/useGetData";


const Viborghaveservice2 = () => {

  //request-hook
  const { error, loading, data, getData } = useGetData()



  useEffect(() => {

    getData("http://localhost:5023/services/"
    )


  }, [])


  return (
    <div className='container-fluid Haveservice'>

      <Title headline="Vores ydelser" />
      <hr className='hr2 mx-auto'></hr>
      <p className='text-center mb-4'>Herunder en oversigt med alle vores services <br></br>
        Hvis du måtte have flere spørgsmål, er du velkommen til at kontakte os</p>

      {/*Error*/}
      {error && <Error />}

      {/*Loading*/}
      {loading && <Loader />}

      {/*Data*/}
      <div className="row row-cols-1 row-cols-md-4 g-2">

        {data && data.map((s) =>

          <div className="col" key={s._id}>
            <div>

              <div className='card-body text-center'>
                <img src={"http://localhost:5023/images/" + s.image} alt="Showcasing product" className='rounded-circle mb-4' />
                <h4>{s.title}</h4>
                <p>{s.content}</p>

              </div>


            </div>
          </div>
        )}
      </div>

    </div>


  )
}

export default Viborghaveservice2