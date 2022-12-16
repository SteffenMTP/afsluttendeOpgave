import React from 'react'

//data fns - til at formatere datoer til "nu"
import {formatDistanceToNow} from "date-fns"
//Hent dansk version
import {da} from "date-fns/locale"


const NewsCard = ( {newsEvent} ) => {
    return (
        <div className="col">

            <div className="card h-100">

                {   //Hvis der er billede vis det
                    newsEvent.urlToImage && <img src={newsEvent.urlToImage} alt={newsEvent.title} className="card-img-top" />
                }
                
                
                {   //Hvis ikke der er et billede - vis intet
                    // newsEvent.urlToImage ? <img src={newsEvent.urlToImage} alt={newsEvent.title} className="card-img-top" /> : null
                }  

                    
                {   //Vi giver et billede med hvis ikke de har et
                /* <img src={newsEvent.urlToImage ? newsEvent.urlToImage : "https://picsum.photos/200/300" } alt={newsEvent.title} className="card-img-top" />   */
                }

                <div className="card-body">

                    <div className="title">
                        <h4>{newsEvent.title}</h4>
                        <p>Article by: {newsEvent.author} </p>
                        <p><small className='text-muted'>{formatDistanceToNow(new Date(newsEvent.publishedAt), {locale: da, addSuffix: true} ) }</small></p>
                        <p><small className="text-muted">{new Date (newsEvent.publishedAt).toLocaleString("da-dk", {year: "numeric", month: "long", day:"numeric", hour:"2-digit", minute:"2-digit" }) }</small></p>
                    </div>

                    <div className="card-text">
                        <p>{newsEvent.description}</p>
                        <p><a href={newsEvent.url} target="_blank" rel="noreferrer">Læs Mere</a></p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default NewsCard