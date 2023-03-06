

export const HomeReviews = () =>{
return (
<div>
<>
  <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
    Learn More
  </button>
  <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div className="offcanvas-header bg-dark">
      <h5 className="offcanvas-title text-white" id="offcanvasWithBothOptionsLabel">
        Reviews
      </h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
    </div>
    <div className="offcanvas-body bg-dark">
            <div>
                <p className="list-group-item disabled bg-dark text-white" aria-disabled="true">
                    Cortina D'Ampezzo cares about its customers more than anything else!
                    Join us and post some reviews about your experience dining in with us!
                </p>
            </div>
            <ul className="list-group bg-dark">
            <div>
                <li className="list-group-item bg-dark text-white">
                    <img src={`https://firebasestorage.googleapis.com/v0/b/react-39530-maria.appspot.com/o/ppl.jpg?alt=media&token=9e3e77be-aa09-40f0-b349-076aea49d312`} alt="mdo" width={50} height={42} className="rounded-circle float-start"/>
                    <h6 className="off-title justify-content-start">Sam Jhonson</h6>
                    <p>First time coming to grab some italian food and I dare to say I've tried something that delicious before.</p>
                </li>
            </div>
            <div>
                <li className="list-group-item bg-dark text-white">
                    <img src={`https://firebasestorage.googleapis.com/v0/b/react-39530-maria.appspot.com/o/ppl-2.jpg?alt=media&token=8a8de268-34ae-4879-a9b4-8ad993c1dc32`} alt="mdo" width={50} height={42} className="rounded-circle float-start"/>
                    <h6 className="off-title justify-content-start">Marie Monroe</h6>
                    <p>Definitely have to come back again! Couldn't say if I liked better the food or the service this is def 10/10</p>
                </li>
            </div>
            <div>
                <li className="list-group-item bg-dark text-white">
                    <img src={`https://firebasestorage.googleapis.com/v0/b/react-39530-maria.appspot.com/o/ppl-3.jpg?alt=media&token=9c38ba9a-da0c-4c22-a9f7-58a8e102917a`} alt="mdo" width={50} height={42} className="rounded-circle float-start"/>
                    <h6 className="off-title justify-content-start">Kyle Bekene</h6>
                    <p>Finally found an amazing spot that can make me have some flashbacks of my trip to Italy. Best italian food ever</p>
                </li>
            </div>
            <div>
                <li className="list-group-item bg-dark text-white">
                    <h6 className="off-title justify-content-start">Add Yours</h6>
                    <span><button className="btn btn-secondary">+</button></span>
                </li>
            </div>
        </ul>
    </div>
  </div>
</>

</div>
)
}