import { useState } from 'react';
import axios from 'axios';



const usePutData = () => {

    // States til håndtering af data, loading, error
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    //payload er de data der skal patches/rettes
    const putData = (url, payload = null, headers = null, params = null) => {

        setLoading(true) //api'et "ringes op om lidt" så sæt loading til true
        // setData() Hvis der ønskes at fx starship siden under loading tømmes fra data

        axios.put(url, payload, { headers: headers, params: params })
            .then(res => { 
                console.log(res.data)
                setData(res.data)       //Success - der er data  put dem i state
                setError(false)         //... så ingen fejl
            })  //Hvis det er gået godt
            
            .catch(err => { 
                console.log("error")
                setError(true)          //ups fejl
                setData()               //... så tøm data der KAN være fejlagtige
            })
            
            .finally(() => {
                setLoading(false)       //Uanset om der er data eller fejl så - finally - stop loading
            })

    }

    //det der "udbydes" fra hooket her
    return {putData, error, loading, data}
}

export default usePutData