import React, { useState } from 'react';
import styles from './Headline.module.css';
import HeadlinePowerMode from './HeadlinePowerMode';
import HeadlineRewrite from './HeadlineRewrite';
import HeadlineTemplate from './HeadlineTemplate';
import PowerMode from './PowerMode';
import ReWrite from './ReWrite';
import Templates from './Templates';

const Headline = () => {
  const [active,setActive]=useState("first");
  return (

    <div className = { styles.headline}>

<nav>

 < ul className='d-flex justify-content-between px-4 ' >
   <button className="btn btn-outline-primary mt-4 px-3 py-2 " onClick={()=>setActive("first")} >Template              </button>
   <button  className = "btn btn-outline-primary mt-4 px-3 py-2" onClick = { () => setActive("second")} > Rewrite</button>
   <button  className = "btn btn-outline-primary mt-4 px-3 py-2" onClick = {() => setActive("third")} > Power Mode </button>
{/* < li className = 'mt-4' > <NavLink className={({isActive}) => isActive ? 'text-white bg-primary p-2 rounded':'text-black' } to = "/twitterads/primary/tada" > Templates </NavLink></li >
< li className = 'mt-4' > <NavLink className={({isActive}) => isActive ? 'text-white bg-primary p-2 rounded':'text-danger' }   to = "/twitterads" > Rewrite </NavLink></li >
< li className = 'mt-4' > <NavLink className={({isActive}) => isActive ? 'text-white bg-primary p-2 rounded':'text-black' }  to = "/twitterads/headline" > PowerMode </NavLink></li >
*/}
</ul>

</nav>
<div className="">
              {active=== "first" && <HeadlineTemplate />}
            {active=== "second" && <HeadlineRewrite />}
            {active=== "third" && <HeadlinePowerMode />}

          </div>
          
               </div>
        
  );
};

export default Headline;