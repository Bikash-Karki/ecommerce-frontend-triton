

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://i0.wp.com/blog.elverys.ie/app/uploads/2018/06/NIKE-BANNERS-1920X696.jpg?resize=300%2C109&ssl=1" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://newsolez.com/wp-content/uploads/2018/02/banner_addidas_originals_promo_b7ad4407-7dd0-4ca9-8881-29d04bbda68a_1600x681-e1563918699775-760x300.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</>
  )
}

export default Carousel