import { useState, useEffect } from "react"
import { HomeReviews } from "./HomeReviews"
import { useParams } from "react-router-dom"
import { HomeList } from "./HomeList"


export const Home = () =>{
  const [cover, setCover] = useState([])
  const {cardId} = useParams()

  useEffect(() =>{
    fetch('/json/meals.json')
    .then(response => response.json())
    .then(cover =>{
        const imgCover = cover.filter(cov => cov.cardId === parseInt(cardId))
        const coverList = HomeList({imgCover})
        setCover(coverList)
    })
}, [])



return (
<div>
<div className="cover-container d-flex flex-column" style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/react-39530-maria.appspot.com/o/bg-image.jpg?alt=media&token=84807ac1-7a15-44b7-b12e-b090d9fb89a9)', width:"100%", height:"100%"}}>
<div className="cover col-md-8">
  <h3 className="pb-4 mb-4 fst-italic border-bottom">Ristorante</h3>
  <article className="blog-post">
    <h2 className="blog-post-title mb-1">Cortina D'Ampezzo</h2>
    <p className="blog-post-meta text-dark">
      2015-2023
    </p>
  </article>
  <HomeReviews/>
</div>
</div>
</div>
)
}