import React from "react";
import CarouselImg from "../components/CarouselImg";
import NavbarLP from "../components/NavbarLP";
import { CarouselData } from "../components/CarouselData";
import donate01 from "../images/DonatePict/donate01.png";
import donate02 from "../images/DonatePict/donate02.png";
import donate03 from "../images/DonatePict/donate03.png";
import donate04 from "../images/DonatePict/donate04.png";
import donate05 from "../images/DonatePict/donate05.png";
import donate06 from "../images/DonatePict/donate06.png";
import donate07 from "../images/DonatePict/donate07.png";
import donate08 from "../images/DonatePict/donate08.png";
import donate09 from "../images/DonatePict/donate09.png";
import Footer from "../components/Footer";
import { AiOutlineSearch } from "react-icons/ai";


const Event = () => {
  return (
    <div>
      <NavbarLP />
      <CarouselImg slides={CarouselData} />
      <div className="searchEvt mx-auto flex-wrap flex-lg-nowrap">
        <div
          className="searchBoxEvt row col-12 col-lg-4"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <p>Looking For</p>
          <input
            type="text"
            style={{ width: "90%" }}
            className="inputBox"
            placeholder="Playlist Festival"
          />
        </div>
        <div
          className="searchBoxEvt row col-12 col-lg-4"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <p>In</p>
          <input
            type="text"
            style={{ width: "90%" }}
            className="inputBox"
            placeholder="Bandung"
          />
        </div>
        <div
          className="searchBoxEvt row col-12 col-lg-4"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <p>When</p>
          <input
            type="text"
            style={{ width: "90%" }}
            className="inputBox"
            placeholder="Any Date"
          />
        </div>
        <button type="submit" className="m-3">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="upcomingEvents mx-auto">
        <div className="txtUpcoming flex-wrap flex-lg-nowrap mb-5 mx-xl-3 justify-content-xl-around">
          <p>UPCOMING EVENTS</p>
          <select>
            <option selected="Event Type">Event Type </option>
            <option value="Music">Music</option>
            <option value="Sport">Sport</option>
            <option value="Art">Art</option>
          </select>
          <select>
            <option selected="Weeldays">Weekdays</option>
            <option value="23 Agustus 2020">23 Agustus 2020</option>
            <option value="15 September 2020">15 September 2020</option>
          </select>
          <select>
            <option selected="Any Category">Any Category</option>
            <option value="Ifest">I</option>
            <option value="Ifest">IFEST</option>
          </select>
        </div>
      </div>

      <div class="card-group">
        <div class="card" style={{ margin: "20px 50px" }}>
          <img class="card-img-top" src={donate01} alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card" style={{ margin: "20px 50px" }}>
          <img class="card-img-top" src={donate02} alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card" style={{ margin: "20px 50px" }}>
          <img class="card-img-top" src={donate03} alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

      <div class="card-group">
        <div class="card" style={{ margin: "20px 50px" }}>
          <img class="card-img-top" src={donate04} alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card" style={{ margin: "20px 50px" }}>
          <img class="card-img-top" src={donate05} alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card" style={{ margin: "20px 50px" }}>
          <img class="card-img-top" src={donate06} alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <div class="card-group">
          <div class="card" style={{ margin: "20px 50px" }}>
            <img class="card-img-top" src={donate07} alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card" style={{ margin: "20px 50px" }}>
            <img class="card-img-top" src={donate08} alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card" style={{ margin: "20px 50px" }}>
            <img class="card-img-top" src={donate09} alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

        <button className="col-11 col-md-4 col-xl-3 btnLoadEvent mx-auto">Load More Event</button>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
