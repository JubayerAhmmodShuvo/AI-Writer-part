import React from 'react';
import styles from './Primary.module.css';
const HeadlineTemplate = () => {
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
       <hr/><br/>
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
            <div class="modal" id="modal2">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3>Create Custom templates</h3>

                        </div>

                        <div class="modal-body">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                  <a class="nav-link active" aria-current="page" href="#pain" data-toggle="tab">Pain</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#benefit" aria-current="page" data-toggle="tab" >Benefit</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#feature" aria-current="page" data-toggle="tab" >Feature</a>
                                </li>
                                
                              </ul><br/>
                              <div class="tab-content" >

                                <div class="tab-pane active" id="pain">
                                    <label >Describe a customer pain point</label>
                              <input class="form-control" type="text"/>
                            <div class="form-group">
                                
                        <div class="modal-footer">
                            <input class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                            <input class="btn btn-primary"  type="submit" onclick="location.href='';" value="Create Template" />

                        </div>
                    </div>
                                </div>

                                <div class="tab-pane" id="benefit">
                                    <label>Describe a product/service benefit</label>
                                    <input class="form-control" type="text"/>
                                  <div class="form-group">
                                      
                              <div class="modal-footer">
                                  <input class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                  <input class="btn btn-primary"  type="submit" onclick="location.href='';" value="Create Template"/>
      
                                  
      
                              </div>
                          </div>
                        </div>

                          <div class="tab-pane" id="feature">
                            <label>Describe a product feature</label>
                            <input class="form-control" type="text"/>
                          <div class="form-group">
                              
                      <div class="modal-footer">
                          <input class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                          <input class="btn btn-primary"  type="submit" onclick="location.href='';" value="Create Template" />

                          

                      </div>
                  </div>
                </div>
                </div>
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

export default HeadlineTemplate;