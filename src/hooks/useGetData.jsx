import { useState } from 'react';
import axios from 'axios';





const useGetData = () => {

    // States til håndtering af data, loading, error
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getData = (url, headers = null, params = null) => {

        setLoading(true)
        // setData() Hvis der ønskes at fx starship siden under loading tømmes fra data

        axios.get(url, { headers: headers, params: params })
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
    return {getData, error, loading, data}
}

export default useGetData