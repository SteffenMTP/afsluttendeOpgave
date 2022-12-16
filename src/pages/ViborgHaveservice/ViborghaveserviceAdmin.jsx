import React, { useEffect } from 'react'
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser'

//Import eget hook - som laver request til API
import useGetData from "../../hooks/useGetData";

// Ret data
import usePutData from '../../hooks/usePutData'

const ViborghaveserviceAdmin = () => {

  const navigate = useNavigate() //så brugeren kan redirectes retur til admin-siden efter rettelse

  //request-hook
  const { error, loading, data, getData } = useGetData()
  // PUT data (Når tekst er rettet og skal gemmes)
  const { error: errorPut, loading: loadingPut, data: dataPut, putData } = usePutData()

  // 1) Hent det produkt der skal rette (når component loader)
  useEffect(() => {

    // Tekst der skal rettes
    getData("http://localhost:5023/aboutus/")

  }, [])


  // 3) Lyt efter rettelser - og redirect til adminsiden når...
  useEffect(() => {

    //hvis der er data fra put-requestet = færdig med at rette
    if (dataPut) {
      navigate('/viborghaveservice1')
    }

  }, [dataPut])

  // 2) Send data til API
  const handleSubmit = (e) => {
    e.preventDefault()              //VIGTIG ved submit af form, da den forhindrer siden i at reloade siden

    let fd = new FormData(e.target)

    // Send til hook, som sender til API
    putData("http://localhost:5023/aboutus/admin", fd)

  }

  return (
    <div>

      <div>
        <h1>Viborg Haveservice - ADMIN</h1>
      </div>

      {/*Error*/}
      {(error || errorPut) && <Error />}

      {/*Loading*/}
      {(loading || loadingPut) && <Loader />}

      {/* Data */}

      {data &&

        <div className="row">
          <div className="col">

            <form onSubmit={handleSubmit}>

              {/* Title */}
              <div className='mb-3 mt-3'>
                <label className='form-label me-3'> Title:
                  <input defaultValue={parse(data.title)} type="text" name='title' required className='form-control' />
                </label>
              </div>




              {/* Content */}
              <div className='mb-3 mt-3'>
                <label className='form-label me-3'> Velkomst tekst:
                  <textarea defaultValue={parse(data.content)} name='content' required className='form-control' />
                </label>
              </div>

              <button type="submit" className='btn btn-primary'>Ret tekst</button>
            </form>

          </div>
        </div>

      }

    </div >
  )
}

export default ViborghaveserviceAdmin