import React from 'react';
import styles from './../ADS/TwitterAds.module.css';


const Lists = () => {
  return (
    <div>
         <div id="output" className={styles.test}  >
            {/* {
              show? <div id="summernote" ></div> :null
//onClick={()=>setShow(!show)}
            } */}
            <p id="content1"></p>
            <div style={{paddingRight:'355px'}} id="tab">
            </div>
            <div id="content">
            <div id="summernote" >
              
            </div>
            </div>
             {/* <input id="one" name="mytext[]"  style={{width:"40vw" , height:"100px"}}/>
           <hr/> <input id="two" name="mytext[]" style={{width:"40vw" , height:"100px"}}/> 
            <hr/><input id="three" name="mytext[]" style={{width:"40vw" , height:"100px"}}/>   */}

        </div>
    </div>
  );
};

export default Lists;