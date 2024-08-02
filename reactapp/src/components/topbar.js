/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/topbar.css";
// import {Person} from "@mui/icons-material/Person"

import polog from "../images/polog.jpg"

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <nav className="navbar navbar-expand-md bg-primary navbar-dark rounded-2 justify-content-around flex-shrink-0">
        <div>
          <a className="navbar-brand text-white" href="#">
            <h2>Majaliwasocial</h2>
          </a>
        </div>
        <div className="d-flex">
          <form className="d-flex">
            <input
              className="form-control form-control-lg me-5 rounded-pill px-5 py-2"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="d-flex">
          <a className="nav-link text-white" href="#">
            HomePage
          </a>
          <a className="nav-link text-white" href="#">
            Timeline
          </a>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <div className="position-relative me-3">
              <i className="bi bi-person-fill text-white"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
              </span>
            </div>
            <div className="position-relative me-3">
              <i className="bi bi-chat-dots text-white"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
              </span>
            </div>
            <div className="position-relative">
              <i className="bi bi-bell text-white"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </div>
          </div>
        </div>
        <img src={polog} alt="polog" height="50px" className="rounded-5" />
      </nav>
    </div>
  );
}
