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
      <div className="row">
         <div className="col-1">
        <div className={ styles.sidebar} > 

    <nav>
     
        < ul className = 'py-5' >
          < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-white  bg-primary p-2 rounded':'text-black' } to = "/twitterads/save" > Save </NavLink></li >
          < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-white  bg-primary p-2 rounded':'text-black' }   to = "/twitterads/primary" > Primary </NavLink></li >
          < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-white  bg-primary p-2 rounded':'text-black' }  to = "/twitterads/headline" > Headline </NavLink></li >
         
        </ul>
      </nav>
     
    </div>
      </div>
        <div className="col-3">
           < Outlet />
          
       
        </div>
       
     </div>
    </>
  );
};

export default TwitterAds;