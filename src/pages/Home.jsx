import React from 'react'

const Home = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./home.jpg" class="d-block w-100" height="550px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./r1.webp" class="d-block w-100" height="550px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./r2.webp" class="d-block w-100" height="550px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./r3.webp" class="d-block w-100" height="550px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./login.webp" class="d-block w-100" height="550px" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home