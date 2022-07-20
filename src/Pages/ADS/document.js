import React, { useState } from 'react';
import styles from './Document.module.css';
// import ReactSummernote from "react-summernote";
// import "react-summernote/dist/react-summernote.css"; // import styles
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



const document = () => {

    return (
      <>
      
<div id="output" className={styles.test}>

 <div className="summernote2">

 <Editor
            toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         wrapperStyle={{ width: '60vw',  height: 800, background:'white'}}
      />

 </div>
 </div>
 < div className={ styles.middlebar} >
    <br/>
<h6>Select a tool</h6>
<br/>
<nbsp/><nbsp/> 
<div class="dropdown mr-4">
     <button class="btn btn-light dropdown-toggle px-3 font-weight-bold" type="button" id="dropdownMenuButton1"
        data-bs-toggle="dropdown" aria-expanded="false">
        Content Improver
      </button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
<li><h6 style={{color:"gray"}}>Writing Assistance</h6></li>
<li></li>
        <li><a class="dropdown-item" href="#">Explain it to a 5th grader</a></li>
        <li><a class="dropdown-item" href="#">Sentence Expander</a></li>
        <li></li>
        <br/>
        <li><h6 style={{color:"gray"}}>CopyWriting Frameworks</h6></li>
        <li></li>
        <li><a class="dropdown-item" href="#">AIDA</a></li>
        <li><a class="dropdown-item" href="#">PAS</a></li>
        <li><a class="dropdown-item" href="#">BAB</a></li>
        <li></li>
        <li><h6 style={{color:"gray"}}>Business</h6></li>
        <li></li>
        <li><a class="dropdown-item" href="#">Perfect Headline</a></li>
        <li><a class="dropdown-item" href="#">Powerful Bullet point</a></li>
        <li><a class="dropdown-item" href="#">Features to Benefits</a></li>
        <li></li>
        <li><h6 style={{color:"gray"}}>Ideation</h6></li>
        <li></li>
        <li><a class="dropdown-item" href="#">Blog Post Topic Ideas</a></li>
        <li><a class="dropdown-item" href="#">Video Topic Ideas</a></li>
        <li></li>
        <li><h6 style={{color:"gray"}}>Ads</h6></li>
        <li></li>
        <li><a class="dropdown-item" href="#">Facebook Ads</a></li>
        <li><a class="dropdown-item" href="#">Google Ads</a></li>
        <li><a class="dropdown-item" href="#">Twitter Ads</a></li>
        <li><a class="dropdown-item" href="#">Linkedin Ads</a></li>
        <li><a class="dropdown-item" href="#">Pinterest Ads</a></li>


   

      </ul>

 </div>
 <br/>
 <br/><br/>
 <hr/>
 <h6> Content to Improve</h6>
 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4 " placeholder='We help businesses convert more website visitors into customers'></textarea>

 <br/><br/><br/><br/><br/><br/><br/><br/>
       <hr/><br/>
       <div class="container" id="display2">
    <button id="btn1" className="btn btn-primary" onClick={window['generate2']}>Generate More</button> <nbsp />
    <label for="myList1"></label>
    <select id = "myList1" > 
        <br/><br/><option value="1"> 3</option>  
        <option value="2">5 </option>  
        <option value="3"> 10 </option>  
         
        </select> 
       </div>
       </div>
 </>
    );
}

export default document;