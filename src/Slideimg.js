import React from 'react'
import krish from './assets/RadhaKrishn.jpg'
import i from './assets/gold.jpg'

const Slideimg = () => {
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={krish} class="d-block w-100" alt={krish}/>
    </div>
    <div class="carousel-item">
      <img src={i} class="d-block w-100" alt={krish}/>
    </div>
    <div class="carousel-item">
      <img src={krish} class="d-block w-100" alt={krish}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slideimg
