import React from "react";
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from "draft-js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from './Primary.module.css';




const WhiteBoard = () => {

  // constructor(props) {
  //   super(props);
  //   this.state = {
    
  //   };
  // }
  // render() {
  //   const wrapperStyle = {
  //       border: '1px solid #969696',
  //   }
  //   const editorStyle = {
  //       height:'10rem',
  //       padding:'1rem'
  //   }
  

  return (
    <>
      <div id="output" className={styles.test}>
        <div className="summernote2" >
           <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            wrapperStyle={{ width: "45vw", height: 800, background: "white" }}
            toolbarClassName="demo-toolbar"
          /> 

       
          {/* <React.Fragment>
                <Editor
                    wrapperStyle={wrapperStyle}
                    editorStyle={EditorStyle}                                                                         
                />
          </React.Fragment> */}
          
        </div>
      </div> 
      {/* <p>hi</p> */}
    </>
  );
        //}
        
};

export default WhiteBoard;
