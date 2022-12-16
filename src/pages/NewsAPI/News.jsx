import React, { useState } from "react";
import Title from "../../components/Title";
import Error from "../../components/Error";
import Loader from "../../components/Loader"

//Import eget hook - som laver request til API
import useGetData from "../../hooks/useGetData";
import NewsCard from "../../components/NewsCard";

const News = () => {
    //Request Hook
    const { error, loading, data, getData } = useGetData();

    //States
    const [search, setSearch] = useState("");                   //Søgeord
    const [sortBy, setSortBy] = useState("");                 //Sortering
    const [language, setLanguage] = useState("");            //Sprog/land


    //Søg - kald API
    const handleSubmit = (e) => {
        e.preventDefault(); //forhindrer reload af siden (skal undgås fordi det tømmer state)
        callAPI();

    }

    //Gør det for bedre at kunne ændre URL én gang istedet for adskillige gange
    const callAPI = () => {
        getData("https://newsapi.org/v2/everything?q=" + search + "&language=" + language + "&sortBy=" + sortBy + "&apiKey=" + process.env.REACT_APP_NEWSAPIKEY)
    }


    return (
        <div className='News container'>

            <Title headline="News - search" />

            {error && <Error />}

            {loading && <Loader />}

            <div className="row mb-5">

                {/*SØGNING - SØGEORD */}
                <form onSubmit={handleSubmit}>
                    <div className="col-6 mb-3 mt-3 mx-auto">
                        <label className="mx-2 form-label" htmlFor="SearchWord">Søgeord: </label>
                        <input type="text" id="SearchWord" defaultValue={search} onInput={e => setSearch(e.target.value)} className="form-control" placeholder="Søg noget" />
                    </div>

                    {/*SORTERING - vælg sortering */}
                    <div className="col-6 mb-3 mt-3 mx-auto" >
                        <label className="mx-2 form-label" htmlFor="SelectSort">Sortér efter: </label>
                        <select id="SelectSort" defaultValue={sortBy} onChange={e => setSortBy(e.target.value)} className="form-select">
                            <option>Relevency</option>
                            <option>Popularity</option>
                            <option>PublishedAt</option>
                        </select>
                    </div>

                    {/*Country - Vælg et sprog/land*/}
                    <div className="col-6 mb-3 mt-3 mx-auto">
                        <label className="mx-2 form-label" htmlFor="languageList">Vælg evt. land du ønsker nyheder fra</label>
                        <input list="languageList" defaultValue={language} onInput={e => setLanguage(e.target.value)} className="form-control" />
                        <datalist id="languageList">
                            <option value="ar" />
                            <option value="de" />
                            <option value="en" />
                            <option value="es" />
                            <option value="fr" />
                            <option value="he" />
                            <option value="it" />
                            <option value="nl" />
                            <option value="no" />
                            <option value="pt" />
                            <option value="ru" />
                            <option value="sv" />
                            <option value="ud" />
                            <option value="zh" />
                        </datalist>

                    </div>
                    <div className="col-6 mb-3 mt-3 mx-auto">
                        <button className="btn btn-primary">Søg</button>
                    </div>

                </form>

            </div>


            <div className='mt-3'>

                <div>
                    {
                        //Tuneri expression:
                        //Hvis der er data og de har en length - vis antal match - og ellers "ingen match"
                        data?.articles.length ? <p>Antal Match: {data.totalResults}</p> : <p>Desværre ingen matches</p>

                    }
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-3">

                    {
                        data && data.articles.map((a, i) =>

                            <NewsCard newsEvent={a} key={"news" + i} />
                        )
                    }

                </div>

            </div>


        </div>
    )
}

export default News