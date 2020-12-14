import React from 'react'

function HotelDetail () {

    return (
        <div>
            {/* Navbar */}
            <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#08A0FC'}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">InepInn</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item active">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                    
            {/* Carousel */}
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://cf.bstatic.com/images/hotel/max1024x768/107/107656497.jpg" class="d-block w-100" alt="..." style={{height: 500, width: "100%"}}/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://origin.pegipegi.com/jalan/images/pict1L/Y4/Y993154/X993154006.jpg" class="d-block w-100" alt="..." style={{height: 500, width: "100%"}}/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002262-1540x1024-FIT_AND_TRIM-8e6275bc722007a72588ccc2f6d7b978.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit" class="d-block w-100" alt="..." style={{height: 500, width: "100%"}}/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                    </div>
                </div>
            </div>
        
            {/* Description */}

            <div className="container mt-5 mb-3">
                <div className="row">
                    <h3 className="mb-5">Lumire Hotel And Convention Center</h3>
                    <div className="col-6">
                        <small style={{margin: 30, textAlign: "justify"}}>
                            Enjoy an exceptional stay in the Jakarta city center at Lumire Hotel and Convention Center. Boasting 343 contemporary rooms and suites in the heart of the bustling Senen financial and commercial district, our 4-star hotel offers a one-stop destination for business and holiday stays. From the hotel, it’s just a 10-minute drive to Government Offices, Business District, Chinatown and a short walk to the National Monument (Monas) and Mall.
                            In addition to room and suite accommodation, fully equipped to meet the needs of the modern corporate and leisure traveler. Featuring a Balinese-style indoor swimming pool, Fitness and Spa, private Executive Lounge, eleven sophisticated event venues and three distinctive dining and entertainment options.
                            On your next trip to Jakarta, Indonesia, experience gracious hospitality in a convenient central location. We look forward to welcoming you to Lumire Hotel and Convention Center Jakarta.
                        </small>
                    </div>
                    <div className="col-6" style={{margin: "auto"}}>
                        <h5>Adress</h5>
                        <small style={{margin: 30, textAlign: "justify"}}>
                            Jl. Senen Raya No.135, RW.2, Senen, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10410
                        </small>
                        <h5>Phone</h5>
                        <small>(021) 3442828</small>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {/* card component start*/}
                    <div class="col-lg-4 mt-3 mb-3">
                        <img
                            style={{borderRadius: "50%"}}
                            width="140" 
                            height="140" 
                            src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp" 
                            alt=""
                            className="mb-3"
                        >
                        </img>
                        <h2>Superior Room King </h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a class="btn text-light" style={{backgroundColor: '#08a0fc'}} href="#" role="button">View details »</a></p>
                    </div>
                    {/* component end */}
                    <div class="col-lg-4 mt-3 mb-3">
                        <img
                            style={{borderRadius: "50%"}}
                            width="140" 
                            height="140" 
                            src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp" 
                            alt=""
                            className="mb-3"
                        >
                        </img>
                        <h2>Superior Room Twin </h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a class="btn text-light" style={{backgroundColor: '#08a0fc'}}  href="#" role="button">View details »</a></p>
                    </div>
                    <div class="col-lg-4 mt-3 mb-3">
                        <img
                            style={{borderRadius: "50%"}}
                            width="140" 
                            height="140" 
                            src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp" 
                            alt=""
                            className="mb-3"
                        >
                        </img>
                        <h2>Duluxe King Room </h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a  class="btn text-light" style={{backgroundColor: '#08a0fc'}}  href="#" role="button">View details »</a></p>
                    </div>
                    <div class="col-lg-4 mt-3 mb-3">
                        <img
                            style={{borderRadius: "50%"}}
                            width="140" 
                            height="140" 
                            src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp" 
                            alt=""
                            className="mb-3"
                        >
                        </img>
                        <h2>Junior Suite</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a  class="btn text-light" style={{backgroundColor: '#08a0fc'}}  href="#" role="button">View details »</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDetail