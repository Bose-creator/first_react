import React from 'react'

const Card = () => {
  return (
    <div className='d-flex justify-content-around'>
      <div class="card" style={{width: "18rem"}}>
  <img src="https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=800" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Click Me</a>
  </div>
</div>

<div class="card" style={{width: "18rem"}}>
  <img src="https://images.pexels.com/photos/3329488/pexels-photo-3329488.jpeg?auto=compress&cs=tinysrgb&w=1200" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Click Me</a>
  </div>
</div>

<div class="card" style={{width: "18rem"}}>
  <img src="https://images.pexels.com/photos/6650001/pexels-photo-6650001.jpeg?auto=compress&cs=tinysrgb&w=1200" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Click Me</a>
  </div>
</div>
    </div>
  )
}

export default Card
