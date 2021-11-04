import React, { useState, useEffect } from "react";
import NavbarLP from "../components/NavbarLP";
import layer2 from "../images/layer2.png";
import layer3 from "../images/layer3.png";
import booster from "../images/booster.png";
import kolega from "../images/kolega.png";
import music4 from "../images/music4.png";
import { AiOutlineClose } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import LandingService from "../services/LandingService";

const Ladingpage = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    LandingService.get()
      .then((res) => {
        const allInfo = res.data.success[0];
        setInfo(allInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="body">
      <NavbarLP />
      <div className="borderBoxLP">
        <div className="heroLP mx-auto">
          <div className="boxHeading">
            <p className="heading">
              <span
                className="typed-words"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "center",
                }}
              >
                #Bikin Nyata Ide Kreatif <br /> Yang Kalian Impikan
              </span>
            </p>
          </div>
          <div style={{ position: "absolute", marginTop: "250px" }}>
            <button
              onClick={() => (window.location.href = "/event")}
              className="button1"
            >
              BOOST CAMPAIGN{" "}
            </button>
            <button
              onClick={() => (window.location.href = "/campaign")}
              className="button2"
            >
              BIKIN CAMPAIGN{" "}
            </button>
          </div>
        </div>
        <div className="layerLP mx-auto">
          <div className="layerPict">
            <img className="pict" src={layer2} />
          </div>
          <div className="layerTxt">
            Kolektive adalah sebuah platform event organizer dan crowdfunding
            khusus untuk event. Galang dana bersama untuk mendukung event yang
            kalian harapkan.
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
          <button onClick={() => (window.location.href = "/#")}>
            {" "}
            Learn More{" "}
          </button>
          <div className="layer1Pict">
            <img src={layer3} />
          </div>
        </div>
        <div className="boxKolega mx-auto">
          <div className="pictKolega">
            <img src={kolega} />
            <p>{info.booster}</p>
            <h4>BOOSTER</h4>
          </div>
          <div className="pictKolega">
            <img src={booster} />
            <p>{info.total}</p>
            <h4>DANA YANG TERKUMPUL</h4>
          </div>
          <div className="pictKolega">
            <img src={kolega} />
            <p>{info.kolega}</p>
            <h4>KOLEGA YANG BERGABUNG</h4>
          </div>
        </div>
        <div id="news">
          <h1>KOLEKTIVE NEWS</h1>
          <div className="linePelangi2">
            <div className="line7"></div>
            <div className="line8"></div>
            <div className="line9"></div>
          </div>
          <div className="screenHP">
            <div className="cameraHP mx-auto">
              <div className="speaker"></div>
              <div className="lensa"></div>
            </div>
            <div className="judulHP">
              <a
                href="#"
                style={{
                  fontSize: "30px",
                  float: "left",
                  margin: "35px 25px",
                  color: "#000",
                }}
              >
                <AiOutlineClose />
              </a>
              <p mx-auto>Kalian Tau Ga ?</p>
            </div>
            <div className="imageHP">
              <img src={music4} />
              <p mx-auto>ThanksInfopedia</p>
              <a href="#">
                {" "}
                <FiHeart />{" "}
              </a>
              <h5>News</h5>
            </div>
            {/* <div className="barMusic mx-auto">
                        </div> */}
          </div>
          {/* <div className="screenHP">
                        <div className="cameraHP mx-auto">
                            <div className="speaker"></div>
                            <div className="lensa"></div>
                            <img src={music2}/>
                        </div>
                    </div> */}
          {/* <div className="screenHP">
                        <div className="cameraHP mx-auto">
                            <div className="speaker"></div>
                            <div className="lensa"></div>
                            <img src={music3}/>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Ladingpage;
