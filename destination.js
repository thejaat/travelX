let places = document.querySelector(".places");
let placesJson = "places.json";

fetch(placesJson).then((Response) => Response.json())
.then((data) => {
    data.forEach((element) => {
      let place = document.createElement("div");
      place.innerHTML = `<div class="place ">
                        <div class="place-box1 p-4">
                            <img src="${element.img}" alt=""
                                style="height:21rem ;width: 100%;border-radius: 2rem;">

                            <div class="trip-card-location d-flex align-items-center justify-content-around mt-3">
                                <p class="fs-4 fw-bold text-center">${
                                  element.tripStartLocation
                                }</p>
                                <div class="trip-card-location-direction"><img src="./img/trip.svg" alt=""></div>
                                <p class="fs-4 fw-bold">${
                                  element.tripEndLocation
                                }</p>
                            </div>
                            <div class="place-icons d-flex align-items-center justify-content-between m-3 p-4"
                                style="background: rgb(226,237,244);border-radius: 2rem;">
                                <img src="./img/fligh.svg" alt="">
                                <img src="./img/meal.svg" alt="">
                                <img src="./img/stay.svg" alt="">
                                <img src="./img/car.svg" alt="">
                            </div>
                            <div class="trip-main-points ms-3 mt-3">
                                <ul>
                                    <li class="fs-4">${
                                      element.tripPoint1
                                    }</li>
                                    <li class="fs-4">${
                                      element.tripPoint2
                                    }</li>
                                    <li class="fs-4">${
                                      element.tripPoint3
                                    }</li>
                                </ul>
                            </div>
                        </div>

                        <div class="place-box2 d-flex align-items-center justify-content-between">
                            <div class="trip-departure ms-4">
                                <div class="next-depart text-success fs-4 fw-bold">Next Departing</div>
                                <div class="next-depart-date fs-5">${
                                  element.departureDate
                                }</div>
                            </div>
                            <div class="trip-price">
                                <img src="./img/trip-cardprice.svg" alt="">
                                <div class="trip-price-text">
                                    <p class="text-strike m-0"><del class="fs-5">₹${
                                      element.totalPrice
                                    }</del></p>
                                    <p class="fs-3 m-0 fw-bold">₹${
                                      element.offerPrice
                                    }</p>
                                    <p class="m-0 fs-5">per person</p>
                                </div>
                            </div>
                        </div>
                        <div class="offer">
                            <img src="./img/offer.svg" alt="">
                        </div>
                        <div class="offer-price">
                            <p class="fw-bold fs-4">${element.off} OFF</p>
                        </div>
                        <div class="duration ms-2 " style="background: rgb(28,89,129);">
                            <div class="duration-box d-flex align-items-center justify-content-center ps-3 pe-3">
                                <img src="./img/sun.svg" alt="" style="height: 2rem;">
                                <p class="fs-4 text-white ms-3"> ${
                                  element.duration
                                }</p>
                            </div>
                        </div>
                    </div>`;
                    places.appendChild(place)
    });
    // price filter
    // 1. less than 5000
    let lessThan5000 = document.querySelector('#lessthan5000')
    lessThan5000.addEventListener('click',()=>{
      places.innerHTML = "";
      let filterPlaces = data.filter(ele =>{
        return ele.offerPrice < 5000
      })
      filterPlaces.forEach((element)=>{
        
        let place = document.createElement("div");
      place.innerHTML = `<div class="place ">
                        <div class="place-box1 p-4">
                            <img src="${element.img}" alt=""
                                style="height:21rem ;width: 100%;border-radius: 2rem;">

                            <div class="trip-card-location d-flex align-items-center justify-content-around mt-3">
                                <p class="fs-4 fw-bold text-center">${
                                  element.tripStartLocation
                                }</p>
                                <div class="trip-card-location-direction"><img src="./img/trip.svg" alt=""></div>
                                <p class="fs-4 fw-bold">${
                                  element.tripEndLocation
                                }</p>
                            </div>
                            <div class="place-icons d-flex align-items-center justify-content-between m-3 p-4"
                                style="background: rgb(226,237,244);border-radius: 2rem;">
                                <img src="./img/fligh.svg" alt="">
                                <img src="./img/meal.svg" alt="">
                                <img src="./img/stay.svg" alt="">
                                <img src="./img/car.svg" alt="">
                            </div>
                            <div class="trip-main-points ms-3 mt-3">
                                <ul>
                                    <li class="fs-4">${
                                      element.tripPoint1
                                    }</li>
                                    <li class="fs-4">${
                                      element.tripPoint2
                                    }</li>
                                    <li class="fs-4">${
                                      element.tripPoint3
                                    }</li>
                                </ul>
                            </div>
                        </div>

                        <div class="place-box2 d-flex align-items-center justify-content-between">
                            <div class="trip-departure ms-4">
                                <div class="next-depart text-success fs-4 fw-bold">Next Departing</div>
                                <div class="next-depart-date fs-5">${
                                  element.departureDate
                                }</div>
                            </div>
                            <div class="trip-price">
                                <img src="./img/trip-cardprice.svg" alt="">
                                <div class="trip-price-text">
                                    <p class="text-strike m-0"><del class="fs-5">₹${
                                      element.totalPrice
                                    }</del></p>
                                    <p class="fs-3 m-0 fw-bold">₹${
                                      element.offerPrice
                                    }</p>
                                    <p class="m-0 fs-5">per person</p>
                                </div>
                            </div>
                        </div>
                        <div class="offer">
                            <img src="./img/offer.svg" alt="">
                        </div>
                        <div class="offer-price">
                            <p class="fw-bold fs-4">${element.off} OFF</p>
                        </div>
                        <div class="duration ms-2 " style="background: rgb(28,89,129);">
                            <div class="duration-box d-flex align-items-center justify-content-center ps-3 pe-3">
                                <img src="./img/sun.svg" alt="" style="height: 2rem;">
                                <p class="fs-4 text-white ms-3"> ${
                                  element.duration
                                }</p>
                            </div>
                        </div>
                    </div>`;
                    places.appendChild(place)
    
      })
    })
    let fiveToTen = document.querySelector('#fivetoten')
    fiveToTen.addEventListener('click',()=>{
      places.innerHTML = "";
      let filterPlaces = data.filter(ele =>{
        return ele.offerPrice < 10000
      })
      filterPlaces.forEach((element)=>{
        let place = document.createElement("div");
      place.innerHTML = `<div class="place ">
                        <div class="place-box1 p-4">
                            <img src="${element.img}" alt=""
                                style="height:21rem ;width: 100%;border-radius: 2rem;">

                            <div class="trip-card-location d-flex align-items-center justify-content-around mt-3">
                                <p class="fs-4 fw-bold text-center">${
                                  element.tripStartLocation
                                }</p>
                                <div class="trip-card-location-direction"><img src="./img/trip.svg" alt=""></div>
                                <p class="fs-4 fw-bold">${
                                  element.tripEndLocation
                                }</p>
                            </div>
                            <div class="place-icons d-flex align-items-center justify-content-between m-3 p-4"
                                style="background: rgb(226,237,244);border-radius: 2rem;">
                                <img src="./img/fligh.svg" alt="">
                                <img src="./img/meal.svg" alt="">
                                <img src="./img/stay.svg" alt="">
                                <img src="./img/car.svg" alt="">
                            </div>
                            <div class="trip-main-points ms-3 mt-3">
                                <ul>
                                    <li class="fs-4">${
                                      element.tripPoint1
                                    }</li>
                                    <li class="fs-4">${
                                      element.tripPoint2
                                    }</li>
                                    <li class="fs-4">${
                                      element.tripPoint3
                                    }</li>
                                </ul>
                            </div>
                        </div>

                        <div class="place-box2 d-flex align-items-center justify-content-between">
                            <div class="trip-departure ms-4">
                                <div class="next-depart text-success fs-4 fw-bold">Next Departing</div>
                                <div class="next-depart-date fs-5">${
                                  element.departureDate
                                }</div>
                            </div>
                            <div class="trip-price">
                                <img src="./img/trip-cardprice.svg" alt="">
                                <div class="trip-price-text">
                                    <p class="text-strike m-0"><del class="fs-5">₹${
                                      element.totalPrice
                                    }</del></p>
                                    <p class="fs-3 m-0 fw-bold">₹${
                                      element.offerPrice
                                    }</p>
                                    <p class="m-0 fs-5">per person</p>
                                </div>
                            </div>
                        </div>
                        <div class="offer">
                            <img src="./img/offer.svg" alt="">
                        </div>
                        <div class="offer-price">
                            <p class="fw-bold fs-4">${element.off} OFF</p>
                        </div>
                        <div class="duration ms-2 " style="background: rgb(28,89,129);">
                            <div class="duration-box d-flex align-items-center justify-content-center ps-3 pe-3">
                                <img src="./img/sun.svg" alt="" style="height: 2rem;">
                                <p class="fs-4 text-white ms-3"> ${
                                  element.duration
                                }</p>
                            </div>
                        </div>
                    </div>`;
                    places.appendChild(place)
    
      })
    })
    let morethanTen = document.querySelector('#morethanten')
    morethanTen.addEventListener('click',()=>{
      places.innerHTML = "";
      let filterPlaces = data.filter(ele =>{
        return ele.offerPrice > 10000
      })
      filterPlaces.forEach((element)=>{
        let place = document.createElement("div");
      place.innerHTML = `<div class="place ">
                        <div class="place-box1 p-4">
                            <img src="${element.img}" alt=""
                                style="height:21rem ;width: 100%;border-radius: 2rem;">

                            <div class="trip-card-location d-flex align-items-center justify-content-around mt-3">
                                <p class="fs-4 fw-bold text-center">${
                                  element.tripStartLocation
                                }</p>
                                <div class="trip-card-location-direction"><img src="./img/trip.svg" alt=""></div>
                                <p class="fs-4 fw-bold">${
                                  element.tripEndLocation
                                }</p>
                            </div>
                            <div class="place-icons d-flex align-items-center justify-content-between m-3 p-4"
                                style="background: rgb(226,237,244);border-radius: 2rem;">
                                <img src="./img/fligh.svg" alt="">
                                <img src="./img/meal.svg" alt="">
                                <img src="./img/stay.svg" alt="">
                                <img src="./img/car.svg" alt="">
                            </div>
                            <div class="trip-main-points ms-3 mt-3">
                                <ul>
                                    <li class="fs-4">${
                                      element.tripPoint1
                                    }</li>
                                    <li class="fs-4">${
                                      element.tripPoint2
                                    }</li>
                                    <li class="fs-4">${
                                      element.tripPoint3
                                    }</li>
                                </ul>
                            </div>
                        </div>

                        <div class="place-box2 d-flex align-items-center justify-content-between">
                            <div class="trip-departure ms-4">
                                <div class="next-depart text-success fs-4 fw-bold">Next Departing</div>
                                <div class="next-depart-date fs-5">${
                                  element.departureDate
                                }</div>
                            </div>
                            <div class="trip-price">
                                <img src="./img/trip-cardprice.svg" alt="">
                                <div class="trip-price-text">
                                    <p class="text-strike m-0"><del class="fs-5">₹${
                                      element.totalPrice
                                    }</del></p>
                                    <p class="fs-3 m-0 fw-bold">₹${
                                      element.offerPrice
                                    }</p>
                                    <p class="m-0 fs-5">per person</p>
                                </div>
                            </div>
                        </div>
                        <div class="offer">
                            <img src="./img/offer.svg" alt="">
                        </div>
                        <div class="offer-price">
                            <p class="fw-bold fs-4">${element.off} OFF</p>
                        </div>
                        <div class="duration ms-2 " style="background: rgb(28,89,129);">
                            <div class="duration-box d-flex align-items-center justify-content-center ps-3 pe-3">
                                <img src="./img/sun.svg" alt="" style="height: 2rem;">
                                <p class="fs-4 text-white ms-3"> ${
                                  element.duration
                                }</p>
                            </div>
                        </div>
                    </div>`;
                    places.appendChild(place)
    
      })
    })
    // sort price
    // ascending order
    let sortascending = document.querySelector('#ascendingPrice');
    sortascending.addEventListener('click',()=>{
      places.innerHTML = "";

      let ascendingItems = data.sort(function(a, b){return a.offerPrice-b.offerPrice});
      ascendingItems.forEach((element)=>{
        let place = document.createElement("div");
        place.innerHTML = `<div class="place ">
                          <div class="place-box1 p-4">
                              <img src="${element.img}" alt=""
                                  style="height:21rem ;width: 100%;border-radius: 2rem;">
  
                              <div class="trip-card-location d-flex align-items-center justify-content-around mt-3">
                                  <p class="fs-4 fw-bold text-center">${
                                    element.tripStartLocation
                                  }</p>
                                  <div class="trip-card-location-direction"><img src="./img/trip.svg" alt=""></div>
                                  <p class="fs-4 fw-bold">${
                                    element.tripEndLocation
                                  }</p>
                              </div>
                              <div class="place-icons d-flex align-items-center justify-content-between m-3 p-4"
                                  style="background: rgb(226,237,244);border-radius: 2rem;">
                                  <img src="./img/fligh.svg" alt="">
                                  <img src="./img/meal.svg" alt="">
                                  <img src="./img/stay.svg" alt="">
                                  <img src="./img/car.svg" alt="">
                              </div>
                              <div class="trip-main-points ms-3 mt-3">
                                  <ul>
                                      <li class="fs-4">${
                                        element.tripPoint1
                                      }</li>
                                      <li class="fs-4">${
                                        element.tripPoint2
                                      }</li>
                                      <li class="fs-4">${
                                        element.tripPoint3
                                      }</li>
                                  </ul>
                              </div>
                          </div>
  
                          <div class="place-box2 d-flex align-items-center justify-content-between">
                              <div class="trip-departure ms-4">
                                  <div class="next-depart text-success fs-4 fw-bold">Next Departing</div>
                                  <div class="next-depart-date fs-5">${
                                    element.departureDate
                                  }</div>
                              </div>
                              <div class="trip-price">
                                  <img src="./img/trip-cardprice.svg" alt="">
                                  <div class="trip-price-text">
                                      <p class="text-strike m-0"><del class="fs-5">₹${
                                        element.totalPrice
                                      }</del></p>
                                      <p class="fs-3 m-0 fw-bold">₹${
                                        element.offerPrice
                                      }</p>
                                      <p class="m-0 fs-5">per person</p>
                                  </div>
                              </div>
                          </div>
                          <div class="offer">
                              <img src="./img/offer.svg" alt="">
                          </div>
                          <div class="offer-price">
                              <p class="fw-bold fs-4">${element.off} OFF</p>
                          </div>
                          <div class="duration ms-2 " style="background: rgb(28,89,129);">
                              <div class="duration-box d-flex align-items-center justify-content-center ps-3 pe-3">
                                  <img src="./img/sun.svg" alt="" style="height: 2rem;">
                                  <p class="fs-4 text-white ms-3"> ${
                                    element.duration
                                  }</p>
                              </div>
                          </div>
                      </div>`;
                      places.appendChild(place)
      })
    })
    
    // descending order:
    let sortdescending = document.querySelector('#descendingPrice');
    sortdescending.addEventListener('click',()=>{
      places.innerHTML = "";
      let descendingItems = data.sort(function(a, b){return b.offerPrice-a.offerPrice});
      descendingItems.forEach((element)=>{
        let place = document.createElement("div");
        place.innerHTML = `<div class="place ">
                          <div class="place-box1 p-4">
                              <img src="${element.img}" alt=""
                                  style="height:21rem ;width: 100%;border-radius: 2rem;">
  
                              <div class="trip-card-location d-flex align-items-center justify-content-around mt-3">
                                  <p class="fs-4 fw-bold text-center">${
                                    element.tripStartLocation
                                  }</p>
                                  <div class="trip-card-location-direction"><img src="./img/trip.svg" alt=""></div>
                                  <p class="fs-4 fw-bold">${
                                    element.tripEndLocation
                                  }</p>
                              </div>
                              <div class="place-icons d-flex align-items-center justify-content-between m-3 p-4"
                                  style="background: rgb(226,237,244);border-radius: 2rem;">
                                  <img src="./img/fligh.svg" alt="">
                                  <img src="./img/meal.svg" alt="">
                                  <img src="./img/stay.svg" alt="">
                                  <img src="./img/car.svg" alt="">
                              </div>
                              <div class="trip-main-points ms-3 mt-3">
                                  <ul>
                                      <li class="fs-4">${
                                        element.tripPoint1
                                      }</li>
                                      <li class="fs-4">${
                                        element.tripPoint2
                                      }</li>
                                      <li class="fs-4">${
                                        element.tripPoint3
                                      }</li>
                                  </ul>
                              </div>
                          </div>
  
                          <div class="place-box2 d-flex align-items-center justify-content-between">
                              <div class="trip-departure ms-4">
                                  <div class="next-depart text-success fs-4 fw-bold">Next Departing</div>
                                  <div class="next-depart-date fs-5">${
                                    element.departureDate
                                  }</div>
                              </div>
                              <div class="trip-price">
                                  <img src="./img/trip-cardprice.svg" alt="">
                                  <div class="trip-price-text">
                                      <p class="text-strike m-0"><del class="fs-5">₹${
                                        element.totalPrice
                                      }</del></p>
                                      <p class="fs-3 m-0 fw-bold">₹${
                                        element.offerPrice
                                      }</p>
                                      <p class="m-0 fs-5">per person</p>
                                  </div>
                              </div>
                          </div>
                          <div class="offer">
                              <img src="./img/offer.svg" alt="">
                          </div>
                          <div class="offer-price">
                              <p class="fw-bold fs-4">${element.off} OFF</p>
                          </div>
                          <div class="duration ms-2 " style="background: rgb(28,89,129);">
                              <div class="duration-box d-flex align-items-center justify-content-center ps-3 pe-3">
                                  <img src="./img/sun.svg" alt="" style="height: 2rem;">
                                  <p class="fs-4 text-white ms-3"> ${
                                    element.duration
                                  }</p>
                              </div>
                          </div>
                      </div>`;
                      places.appendChild(place)
      })
    })
     
  });
