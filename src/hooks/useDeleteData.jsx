import { useState } from 'react';
import axios from 'axios';


const useDeleteData = () => {

    // States til håndtering af data, loading, error
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    //headers og prams af hensyn til fx RapidAPI
    const deleteData = (url, headers = null, params = null) => {

        setLoading(true)
        // setData()        //her kan du tømme state med data, hvis de bør nustilles/fjernes inden hentning af nye data

        axios.delete(url, { headers: headers, params: params })
            .then(res => { 
                console.log(res.data)
                setData(res.data)
                setError(false)
            })  //Hvis det er gået godt
            
            .catch(err => { 
                console.log("error")
                setError(true)
                setData()
            })
            
            .finally(() => {
                setLoading(false)
            })

    }

    //det der "udbydes" fra hooket her
    return {deleteData, error, loading, data}
}

export default useDeleteData