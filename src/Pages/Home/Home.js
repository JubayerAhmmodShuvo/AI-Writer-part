import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <div class="container mt-5 ">
  <h1 class="">Data Driven - Project</h1>
  <hr />
  <div class="d-flex mt-4 ">
    <div class="dropdown mr-4">
      <button class="btn btn-light dropdown-toggle py-3 font-weight-bold" type="button" id="dropdownMenuButton1"
        data-bs-toggle="dropdown" aria-expanded="false">
        All Projects
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">All Projects Type</a></li>
        <li><a class="dropdown-item" href="#">Facebook Ad</a></li>
        <li><a class="dropdown-item" href="#">Facebook Ad</a></li>
        <li><a class="dropdown-item" href="#">Facebook Ad</a></li>
        <li><a class="dropdown-item" href="#">Facebook Ad</a></li>

      </ul>
    </div>
    <div class="dropdown mx-4">
      <button class="btn btn-light dropdown-toggle py-3 font-weight-bold " type="button" id="dropdownMenuButton1"
        data-bs-toggle="dropdown" aria-expanded="false">
        Creation Person
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Created By Anyone</a></li>
        <li><a class="dropdown-item" href="#">Created By Me</a></li>

      </ul>
    </div>
    <div class="container ">

      <div class="row height  d-flex ">

        <div class="col-md-4">

          <div class="form">
            <i class="fa fa-search"></i>
            <input type="text" class="form-control form-input text-black bg-light" placeholder="Search..."/>
            <span class="left-pan"><i class="fa fa-microphone"></i></span>
          </div>

        </div>
              <div class="col">
                <Link to="/ads" class="btn btn-primary  py-3 " >Create New Project +</Link>
         
        </div>
      </div>

    </div>



  </div>

      </div>


 <div class="container">
  <p class='my-4'   >Project Created in Last 30 days</p>

  <div class="mb-4 ">
   <div class="card">
     <div class="card-header">
       Project Name
     </div>
     <div class="card-body">
      
        <div class="d-flex justify-content-between">
           <p>Facebook Ad- 1 Saved Variations- Last Modified Date</p>
           <button class = "btn btn-danger delete" > <i class = "fa fa-trash" > </i> </button>
        </div>
      
        
    
     </div>
   </div>
  </div>
 
 
  
 
 </div>




    </div>
  );
};

export default Home;