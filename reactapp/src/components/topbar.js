/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/topbar.css";
// import {Person} from "@mui/icons-material/Person"

import polog from "../images/polog.jpg"

export default function Topbar() {
  return (
    <div className="topbarContainer " id="cont">
      <div
        id="topbar"
        className=" navbar navbar-expand-md  bg-primary navbar-dark rounded-2 justify-content-around flex-shrink-0"
      >
        <div className="">
          <a className="nav text-white text-decoration-none" href="#">
            {" "}
            <h2>Majaliwasocial</h2>{" "}
          </a>
        </div>
        <div className="">
          <form class="">
            <input
              class="form-form-control-lg  me-5 rounded-5 px-5 py-2 "
              type="text"
              placeholder="Search"
            ></input>
          </form>
        </div>
        <div className="">
          <a className="text-white text-decoration-none p-2" href="#">
            HomePage
          </a>
          <a className="text-white text-decoration-none" href="#">
            Timeline
          </a>
        </div>
        <div className="">
            <div id="notification" className="d-flex  ">
                <div id="nail" className="d-flex ">
                    <i class="bi bi-person-fill"></i>
                    <span id="num">1</span>
                </div>
                <div id="nail" className="d-flex">
                    <i class="bi bi-chat-dots"></i>
                    <span id="num" class="num" className="topbarIconBadge">
                        2
                    </span>
                </div>
                <div id="nail" className="d-flex">
                    <i class="bi bi-bell"></i>
                    <span id="num" class="num" className="topbarIconBadge">
                        3
                    </span>
                </div>

            </div>
        </div>
        <img src={polog} alt="polog" height="50px" className="rounded-5" />

      </div>
    </div>
  );
}
