import React from 'react';
import styles from './Primary.module.css';

const PowerMode = () => {
  return (
    <div class="container" id="display1">
    <p >Example Sets:</p>

       <button  id="ele5" className={styles.btn} style={{background:'white', border:'1px solid black'}}><a href="#modal4" data-toggle="modal" data-target="#modal4"><span>+</span> Add New</a></button>
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       <hr/>
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


       <div class="container">
    <div class="row">
        <div class="col">
            <div class="modal" id="modal4">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2>Add New Example Set</h2>
                        </div>
                        <div class="modal-body">
                            <label>Name</label>
                              <input class="form-control" type="text"/>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                              </div>
                              <label>Example 1</label>
                              <input class="form-control" type="text"/>
                              <label>Example 2</label>
                              <input class="form-control" type="text"/>
                              <label>Example 3</label>
                              <input class="form-control" type="text"/>
                            
                        </div>
                        <div class="modal-footer">
                            <input class="btn btn-danger w-25" data-dismiss="modal" value="Cancel"/>
                            <input class="btn btn-primary"  type="submit" onclick="" value="Save" />
                            

                        </div>
                    </div>
                </div>
            </div>
    
         

        </div>
    </div>
</div>

       </div>
  );
};

export default PowerMode;