import React from 'react'
import reactDom from 'react-dom'
import NavbarLP from '../components/NavbarLP'
import layer2 from "../images/layer2.png"
import layer3 from "../images/layer3.png"
import booster from "../images/booster.png"
import kolega from "../images/kolega.png"
import music4 from "../images/music4.png"
import music5 from "../images/music5.png"
import music6 from "../images/music6.png"
import { AiOutlineClose } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import fotodiza from "../images/fotodiza.jpg"
import Footer from '../components/Footer'
import sycnfest from "../images/syncfest.png"

const ladingpage = () => {
    return (
        <div className="bodyLP">
            <NavbarLP/> 
                <div className="heroLP mx-auto">
                    <div className="boxHeading">
                        <div className="imagesHead mx-auto">
                            <img mx-auto src={sycnfest}/>
                        </div>
                        <div className="heading">
                            <p>#Bikin Nyata Ide Kreatif Yang Kalian Impikan</p>
                        </div>
                        {/* <div className="heading">
                            <p>Yang Kalian Impikan</p>
                        </div> */}
                        <div className="btnHead">
                            <button className="button1">BOOST CAMPAIGN </button>
                            <button className="button2">BIKIN CAMPAIGN </button>
                        </div>
                    </div>
                </div>
                <div className="layerLP mx-auto">
                    <div className="layerPict">
                        <img src={layer2}/>
                    </div>
                    <div className="layerTxt">
                        Kolektive adalah sebuah platform event organizer dan crowdfunding khusus untuk event. Galang dana bersama untuk mendukung event yang kalian harapkan.
                    </div> 
                </div>
                <div className="linePelangi mx-auto">
                    <div className="line4"></div>
                    <div className="line5"></div>
                    <div className="line6"></div>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div className="layer1LP mx -auto">
                    <div className="layer1Txt">
                        Ambil peran untuk memulai langkah kebaikan.
                    </div>
                    <div className="layer1Txt2">
                        Ayo wujudkan impian pemuda kreatif di Indonesia.
                    </div>
                    <button> Learn More </button>
                    <div className="layer1Pict">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="slide" data-slide-to="0" className="active"></li>
                                <li data-target="slide1" data-slide-to="1" className="active"></li>
                                <li data-target="#carouselExampleIndicators" className="active"></li>
                            </ol>
                        </div>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img classsName="d-block w-100" src={layer3} alt="First Slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img classsName="d-block w-100" src={layer2} alt="Second Slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="Next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="boxKolega mx-auto">
                    <div className="pictKolega">
                        <img src={kolega}/>
                        <p>408</p>
                        <h4>BOOSTER</h4>
                    </div>
                    <div className="pictKolega">
                        <img src={booster}/>
                        <p>7.947.000</p>
                        <h4>DANA YANG TERKUMPUL</h4>
                    </div>
                    <div className="pictKolega">
                        <img src={kolega}/>
                        <p>46</p>
                        <h4>KOLEGA YANG BERGABUNG</h4>
                    </div>
                </div>

                <h1>KOLEKTIVE NEWS</h1>
                <div className="linePelangi2">
                    <div className="line7"></div>
                    <div className="line8"></div>
                    <div className="line9"></div>
                </div>
                <div className="boxHP d-flex">
                    <div className="screenHP">
                        <div className="cameraHP mx-auto">
                            <div className="speaker"></div>
                            <div className="lensa"></div>
                        </div>
                        <div className="judulHP">
                            <a href="#" style={{fontSize:"30px",float:"left", margin:"70px 25px",color:"#000"}}><AiOutlineClose/></a>
                            <p mx-auto>Kalian Tau Ga ?</p>
                        </div>
                        <div className="imageHP mx-auto">
                            <img mx-auto src={music5}/>
                        </div>
                        <div className="topikHP">
                            <p mx-auto>ThanksInfopedia</p>
                            <a href="#"> <FiHeart/> </a>
                            <h5>News</h5>
                        </div>
                    </div>
                    
                    <div className="screenHP">
                        <div className="cameraHP mx-auto">
                            <div className="speaker"></div>
                            <div className="lensa"></div>
                        </div>
                        <div className="judulHP">
                            <a href="#" style={{fontSize:"30px",float:"left", margin:"70px 25px",color:"#000"}}><AiOutlineClose/></a>
                            <p mx-auto>Kalian Tau Ga ?</p>
                        </div>
                        <div className="imageHP mx-auto">
                            <img mx-auto src={music4}/>
                        </div>
                        <div className="topikHP">
                            <p mx-auto>ThanksInfopedia</p>
                            <a href="#"> <FiHeart/> </a>
                            <h5>News</h5>
                        </div>
                    </div>

                    <div className="screenHP">
                        <div className="cameraHP mx-auto">
                            <div className="speaker"></div>
                            <div className="lensa"></div>
                        </div>
                        <div className="judulHP">
                            <a href="#" style={{fontSize:"30px",float:"left", margin:"70px 25px",color:"#000"}}><AiOutlineClose/></a>
                            <p mx-auto>Kalian Tau Ga ?</p>
                        </div>
                        <div className="imageHP mx-auto">
                            <img mx-auto src={music6}/>
                        </div>
                        <div className="topikHP">
                            <p mx-auto>ThanksInfopedia</p>
                            <a href="#"> <FiHeart/> </a>
                            <h5>News</h5>
                        </div>
                    </div>
                </div>
                <div className="boxJudul1 mx-auto"></div>
                <div className="judul2 mx-auto">
                   <p> GIMANA SIH KOLEKTIVE?</p>
                </div>   
                <div className="boxJudul2 mx-auto"></div>
                
                <div className="layer2LP mx-auto">
                    <img mx-auto src={fotodiza}/>
                    <div className="textLayer2 mx-auto">
                        <p>“Kolektive ngebantu banget sih kalo kata gue, karna menurut gue, ini bukan cuma platform penggalangan doang. gue disini bisa ”</p>
                        <h3>Hadiza Cahya Firdaus</h3>
                        <h5>Kolega Event (IFEST)</h5>
                    </div>
                   
                </div>
            <Footer/>
        </div>
    )
}

export default ladingpage
