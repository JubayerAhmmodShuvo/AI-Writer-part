import React, { useState } from "react";

import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./TwitterAds.module.css";

import Primary from "../Shared/Primary";
import Lists from "../Shared/Lists";
import WhiteBoard from "../Shared/WhiteBoard";

const FacebookAds = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  // const [show,setShow]=useState(true);
  // const List = () => {
  //   isHidden: true;
  // };

  return (
    <>
      {/* <Navbar bg="light" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#"><h6 className={styles.linkText1}>Template  </h6> </Nav.Link>
    <Nav.Link href="#features"><h6 className={styles.linkText}>   Rewrite </h6> </Nav.Link>
      <Nav.Link href="#pricing"><h6 className={styles.linkText}>Power Mode </h6> </Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}

      <div className="row">
        <div className="col-2">
          <div className={styles.sidebar}>
            <nav>
              <ul className="py-5">
                <li className="py-4">
                  {" "}
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-white  bg-primary p-2 rounded"
                        : "text-black"
                    }
                    to="/facebookads/save"
                  >
                    {" "}
                    Saved{" "}
                  </NavLink>
                </li>
                <li className="py-4">
                  {" "}
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-white  bg-primary p-2 rounded"
                        : "text-black"
                    }
                    to="/facebookads/primary"
                  >
                    {" "}
                    Primary Text
                  </NavLink>
                </li>
                <li className="py-4">
                  {" "}
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-white  bg-primary p-2 rounded"
                        : "text-black"
                    }
                    to="/facebookads/headline"
                  >
                    {" "}
                    Headline{" "}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.v1}></div>
        </div>
        <div className="col-4">
          <Outlet />
        </div>
        <div className="col-6">
          <ul className="d-flex   px-5 ">
            <button
              className="btn me-3 btn-outline-primary mt-4 px-4 py-2 float-right"
              onClick={() => setActive("second")}
            >
              {" "}
              List
            </button>
            <button
              id="whiteboard"
              className="btn btn-outline-primary mt-4 px-4 py-2 float-right"
              onClick={() => setActive("third")}
            >
              {" "}
              WhiteBoard{" "}
            </button>
            {/* < li className = 'mt-4' > <NavLink className={({isActive}) => isActive ? 'text-white bg-primary p-2 rounded':'text-black' } to = "/twitterads/primary/tada" > Templates </NavLink></li >
          < li className = 'mt-4' > <NavLink className={({isActive}) => isActive ? 'text-white bg-primary p-2 rounded':'text-danger' }   to = "/twitterads" > Rewrite </NavLink></li >
          < li className = 'mt-4' > <NavLink className={({isActive}) => isActive ? 'text-white bg-primary p-2 rounded':'text-black' }  to = "/twitterads/headline" > PowerMode </NavLink></li >
          */}
          </ul>
          <div className="">
            {active === "second" && <Lists />}
            {active === "third" && <WhiteBoard />}
          </div>
        </div>
      </div>
    </>
  );
};

export default FacebookAds;
