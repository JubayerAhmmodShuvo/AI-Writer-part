import React from 'react';

import {
  NavLink,
  Link,
  Outlet
} from "react-router-dom";
import styles from './TwitterAds.module.css';

import{
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";

const TwitterAds = () => {
 

  return (
    <>
    <Navbar bg="light" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#"><h6 className={styles.linkText1}>Template  </h6> </Nav.Link>
    <Nav.Link href="#features"><h6 className={styles.linkText}>   Rewrite </h6> </Nav.Link>
      <Nav.Link href="#pricing"><h6 className={styles.linkText}>Power Mode </h6> </Nav.Link>
    </Nav>
    </Container>
  </Navbar>

      <div className="row">
         <div className="col-1">
        <div className={ styles.sidebar} > 


    <nav>
     
        < ul className = 'py-5' >
          < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-danger':'text-black' } to = "/twitterads/save" > Save </NavLink></li >
          < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-danger':'text-black' }   to = "/twitterads/primary" > Primary </NavLink></li >
          < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-danger':'text-black' }  to = "/twitterads/headline" > Headline </NavLink></li >
         
        </ul>

        <div id="output" className={styles.test}  >
            <p id="content1"></p>
            <input name="mytext[]"  style={{width:"40vw" , height:"100px"}}/>
           <hr/> <input  name="mytext[]" style={{width:"40vw" , height:"100px"}}/>
            <hr/><input name="mytext[]" style={{width:"40vw" , height:"100px"}}/>

        </div>
      </nav>
    </div>
    <div className={styles.v1}></div>


      </div>
      <div className="col-6">
        <Outlet />
      </div>
     </div>




    </>
  );
};

export default TwitterAds;
