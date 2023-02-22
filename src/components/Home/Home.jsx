import React from "react"
import { HomeReviews } from "./HomeReviews"

export const Home = () =>{
return (
<div>
  <div className="img-header mb-4 rounded text-bg-dark" style={{ backgroundImage: 'url(/img/main-cover.jpg)', height: 150}}>
    <div>
      <h1 className="cover-header display-4 fst-italic">
        Cortina D'Ampezzo
        <img src={`../img/logo.png`} style={{width: "10%", height: "12%"}} className="logo float-center"></img>
        <img src={`../img/bg-logo-sec.png`}></img>
      </h1>
    </div>
  </div>
  
  <div className="row mb-2">
  <div className="col-md-6">
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-primary">Career</strong>
        <h3 className="mb-0">"Always Thinking About You"</h3>
        <div className="mb-1 text-muted">-Chef Fabrizzio</div>
        <p className="card-text mb-auto">
          For over 20 years of career, I've been trying to always bring the Taste of Italy to all of my customers. 
          If you wanna know how Italy does taste, come and visit us!
        </p>
        <HomeReviews/>
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-success">Ristorante</strong>
        <h3 className="mb-0"></h3>
        <div className="mb-1 text-muted">2015-2023</div>
        <p className="mb-auto">
          More than 8 years in the market, Cortina D'Ampezzo has always come up with new ways to satisfy our customers and bring them the best experience.
          Beggining this dream in our home town and bringing it to the U.S!
        </p>
        <HomeReviews/>
      </div>
    </div>
  </div>
</div>
<div className="card-main d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
  <div className="bg-card me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={{borderRadius: "21px 21px 0 0"}}>
    <div className="my-3 py-3">
      <h2 className="display-5">"Family goes first"</h2>
      <p className="lead text-white">Food and Family come together.</p>
    </div>
    <div className="shadow-sm mx-auto"/>
      <img style={{ width: "80%", height: 300, borderRadius: "21px 21px 0 0" }} src={`../img/chef-Family.jpg`}></img>
    </div>
  <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={{borderRadius: "21px 21px 0 0"}}>
    <div className="my-3 p-3">
      <h2 className="display-5">"Home is everywhere"</h2>
      <p className="lead">Home is where it makes you feel like.</p>
    </div>
    <div className="shadow-sm mx-auto"/>
    <img style={{ width: "80%", height: 300, borderRadius: "21px 21px 0 0" }} src={`../img/hospitality.jpg`}></img>
  </div>
</div>

</div>
)
}