import React from 'react';

import {
  NavLink,
  Link,
  Outlet
} from "react-router-dom";
import styles from './TwitterAds.module.css';



const TwitterAds = () => {
 

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
         <div className="col-1">
        <div className={ styles.sidebar} > 


    <nav>
     
        < ul className = 'py-5' >
        < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-white  bg-primary p-2 rounded':'text-black' } to = "/twitterads/save" > Saved </NavLink></li >
          < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-white  bg-primary p-2 rounded':'text-black' }   to = "/twitterads/primary" > Primary Text</NavLink></li >
          < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-white  bg-primary p-2 rounded':'text-black' }  to = "/twitterads/headline" > Headline </NavLink></li >

       
        </ul>


      </nav>
    </div>
    <div className={styles.v1}></div>


      </div>
      <div className="col-4">
        <Outlet />
      </div>
      <div className="col-7">
         <div id="output" className={styles.test}  >
            <p id="content1"></p>
            <button id="list" className="btn  btn-primary" onclick="#">List</button> <nbsp/>
            <button id="whiteboard" className="btn  btn-secondary" onclick="#">Whiteboard</button> <br /><br/>

            <input name="mytext[]"  style={{width:"40vw" , height:"100px"}}/>
           <hr/> <input  name="mytext[]" style={{width:"40vw" , height:"100px"}}/>
            <hr/><input name="mytext[]" style={{width:"40vw" , height:"100px"}}/>

        </div>
      </div>
     </div>





    </>
  );
};

export default TwitterAds;
