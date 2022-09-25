import "./Carousel.css";
function Carousel() {

    return (
        <>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">   

            <div class="carousel-item active">
                <img className="carousel-image" src="carousel_1.png" alt="First slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5 className="h5-1">Skincare</h5>
                    <p className="p-1">We create innovative expert-level skincare products that deliver transformative results and healthy, glowing skin.</p>
                </div>
            </div>

            <div class="carousel-item">
                <img src="carousel_2.png" alt="Second slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5 className="h5-2">Lipstick</h5>
                    <p className="p-2">Our lipstick products are clean, dermatologist-tested and thoughtfully formulated to minimize our environmental impact.</p>
                </div>
            </div>

            <div class="carousel-item">
                <img src="carousel_3.png" alt="Third slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5 className="h5-3">Eyeshadow</h5>
                    <p className="p-3">Our eyeshadows blend like a dream and deliver a smooth, never-greasy finish.</p>
                </div>
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
        </>
    )

}
    
export default Carousel
