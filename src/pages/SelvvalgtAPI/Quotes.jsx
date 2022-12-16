import React from 'react'
import Title from "../../components/Title";
import Error from "../../components/Error";
import Loader from "../../components/Loader"

//Import eget hook - som laver request til API
import useGetData from "../../hooks/useGetData";

const Quotes = () => {

    //Request Hook
    const { error, loading, data, getData } = useGetData();

    const handleClick = () => {
        getData('https://quotes15.p.rapidapi.com/quotes/random/', {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPIKEY,
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        })
    }



    return (
        <div className='Quote container'>

            <Title headline="Get a quote" />

            {loading && <Loader />}

            {error && <Error />}

            {data && <div className='card'>

                <div className='card-body'>

                    <div className='card-title text-center'>

                        <h2 className='display-4'>
                            <p className='font-italic'>"{data.content}" - {data.originator.name}</p>
                        </h2>

                    </div>

                </div>

            </div>
            }
            <div className='mx-auto text-center'>
                <button onClick={handleClick} className="btn btn-success mt-5">Give me a quote!</button>
            </div>

        </div>
    )
}

export default Quotes