import React, { useState } from 'react';
import styles from "./Headline.module.css";
import PowerMode from './PowerMode';
import ReWrite from './ReWrite';
import Templates from './Templates';

const Headline = () => {
   const [active, setActive] = useState("first");
  return (
    <div div className = {
      styles.headline
    } >
     <nav className="mb-4">
     
              < ul className='d-flex justify-content-between px-3 ' >
                <button className="btn btn-outline-secondary mt-4 px-3 py-2  " onClick={()=>setActive("first")} >Primary </button>
                <button  className = "btn btn-outline-secondary mt-4 px-3 py-2" onClick = { () => setActive("second")} > ReWrite</button>
                <button  className = "btn btn-outline-secondary mt-4 px-3 py-2" onClick = {() => setActive("third")} > PowerMode </button>
          {/* < li className = 'mt-4' > <NavLink className={({isActive}) => isActive ? 'text-white bg-primary p-2 rounded':'text-black' } to = "/twitterads/primary/tada" > Templates </NavLink></li >
          < li className = 'mt-4' > <NavLink className={({isActive}) => isActive ? 'text-white bg-primary p-2 rounded':'text-danger' }   to = "/twitterads" > Rewrite </NavLink></li >
          < li className = 'mt-4' > <NavLink className={({isActive}) => isActive ? 'text-white bg-primary p-2 rounded':'text-black' }  to = "/twitterads/headline" > PowerMode </NavLink></li >
          */}
          </ul>
         
        </nav>
          <div className="">
              {active=== "first" && <Templates />}
            {active=== "second" && <ReWrite />}
            {active=== "third" && <PowerMode />}
            
          </div>
        
    </div>
  );
};

export default Headline;