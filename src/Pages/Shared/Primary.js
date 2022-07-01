import React from 'react';
import styles from "./Headline.module.css";

const Primary = () => {
  return (
    <div class="container" id="display1">
            <p id="ele">Template Types:</p>
            <button id="ele1" className="btn btn-sm btn-primary" onclick="#">Default</button> <nbsp />
               <button id="ele2" className="btn btn-sm btn-secondary" onclick="#">Playful</button> <nbsp />
               <button id="ele3" className="btn btn-sm btn-secondary" onclick="#">Conversational</button> <nbsp />
               <button id="ele4" className="btn btn-sm btn-secondary" onclick="#">List</button> <nbsp />
           
               <br/><br/><p>Your Custom Templates</p>
               <button  id="ele5" className={styles.btn} style={{background:'white', border:'1px solid black'}}><a href="#modal2" data-toggle="modal" data-target="#modal2"><span>+</span> Add New</a></button>
               <br/><br/><br/><br/><br/><br/><br/><br/>
               <div style={{border: "1px solid black", width:'37vw'}}></div><br/>
               <div class="container" id="display2">
            <button id="btn1" className="btn btn-primary" onClick={window['generate']}>Generate More</button> <nbsp />
            <label for="myList"></label>
            <select id = "myList" > 
                <br/><br/><option value="1"> 3</option>  
                <option value="2">5 </option>  
                <option value="3"> 10 </option>  
                 
                </select> <nbsp />
            <button  style={{background:"white", border:"1px solid gray"}}><a href="#modal1" data-toggle="modal" data-target="#modal1">Brief</a></button>
               </div>
</div>
        
        
  );
};

export default Primary;
