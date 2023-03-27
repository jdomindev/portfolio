import '../styles/about.css'


function Carousel() {

  return (
        <div className="carousel-wrapper">
            <div className="carousel">
            <img className="img" id="slide-1" src="./profile.jpg" alt="Jose Dominguez"></img>
            <img className="img" id="slide-2" src="./profile.jpg" alt="Jose Dominguez"></img>
            <img className="img" id="slide-3" src="./profile.jpg" alt="Jose Dominguez"></img>
            </div>
            <div className="carousel-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
            </div>
        </div>
  )
}

export default Carousel