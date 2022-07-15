import React from 'react';
import styles from "./Save.module.css";

const Save = () => {
  return (
    <>
    <div className={ styles.save} >
      <div className="d-flex justify-content-around ">
      <h6   className="mt-5">Headlines()</h6>
      < a href = '#'
      target = "_blank"
      className = "mt-5 "  > Export All to CSV </a>
      </div>
    </div>
    </>
  );

};
export default Save;