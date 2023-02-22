

export const HomeReviews = () =>{
return (
<div>
<>
  <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
    Continue Reading
  </button>
  <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
        Reviews
      </h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
    </div>
    <div className="offcanvas-body">
        <ul className="list-group">
            <div>
                <li className="list-group-item disabled" aria-disabled="true">
                    Cortina D'Ampezzo cares about its customers more than anything else!
                    Join us and post some reviews about your experience dining in with us!
                </li>
            </div>
            <div>
                <li className="list-group-item">
                    <img src={`../img/ppl.jpg`} alt="mdo" width={50} height={42} className="rounded-circle float-start"/>
                    <h6 className="off-title justify-content-start">Sam Jhonson</h6>
                    <p>First time coming to grab some italian food and I dare to say I've tried something that delicious before.</p>
                </li>
            </div>
            <div>
                <li className="list-group-item">
                    <img src={`../img/ppl-2.jpg`} alt="mdo" width={50} height={42} className="rounded-circle float-start"/>
                    <h6 className="off-title justify-content-start">Marie Monroe</h6>
                    <p>Definitely have to come back again! Couldn't say if I liked better the food or the service this is def 10/10</p>
                </li>
            </div>
            <div>
                <li className="list-group-item">
                    <img src={`../img/ppl-3.jpg`} alt="mdo" width={50} height={42} className="rounded-circle float-start"/>
                    <h6 className="off-title justify-content-start">Kyle Bekene</h6>
                    <p>Finally found an amazing spot that can make me have some flashbacks of my trip to Italy. Best italian food ever</p>
                </li>
            </div>
            <div>
                <li className="list-group-item">
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