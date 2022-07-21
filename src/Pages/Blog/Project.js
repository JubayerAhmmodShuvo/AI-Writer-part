import React from 'react';

const Project = () => {
  return (
    <div className="container">
      <div className="my-5">
         <h2 className="text-center mt-4" >New Project - Blog Post</h2>
      <p className="text-center">Go from a blank page to a brilliant blog post in minutes</p>
      </div>
     <div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header " id="panelsStayOpen-headingOne">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       Describe The Blog Post You Want To Create
      </button>
            </h2>
            <p className="ms-2" >This is the most important step in guiding Anyword. Better descriptions result in better, <br/> more
accurate copy variations. Your description should be at least 5 words.</p>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
       <textarea name="area" style={{height: '5vw', width: '100%'}} placeholder="A blog post how to start an online store" cols="30" rows="10"></textarea>
                <h5 className="mt-3" >Industry *</h5>
               <div class="form">
            <i class="fa fa-search"></i>
            <input type="text" class="form-control form-input text-black bg-light" placeholder="Search..."/>
       
                </div>
                     <div class="form-check form-switch mt-3">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
  <label class="form-check-label" for="flexSwitchCheckChecked">SEO Keywords (Optional) </label>
</div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Title
      </button>
    </h2>
            <div className = "d-flex justify-content-between mx-4" >
              <p>Generate engaging titles or write your own.</p>
              <button className="btn btn-outline-primary" >Generate More</button>
   </div>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
       <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
   10 Mind - Boggling Benefits of Sleeping Less
  </label>
                </div>
                <hr />
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label class="form-check-label" for="flexRadioDefault2">
    10 Ways to Achieve the Perfect Silence
  </label>
                </div>
                <hr />
                <a>Write Your Own Title Instead</a>
                 <input type="text" class="form-control" aria-label="Text input with radio button"/>
      </div>
    </div>
          </div>
          <hr />
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Outline
      </button>
            </h2>
            <div className = "d-flex justify-content-between mx-4" >
              <p>Generate an outline</p>
              <button className="btn btn-outline-primary" >Generate Again</button>
   </div>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
                <div className='d-flex mb-2 ' >
                  <p className="disabled mx-3 ">Section 1 </p>  <input type="text" className="w-75"/> 
    </div>
                <div  className = 'd-flex mb-2' >
                  <p className="disabled mx-3">Section 2 </p>  <input type="text" className="w-75"/> 
    </div>
                <div  className = 'd-flex mb-2' >
                  <p className="disabled mx-3">Section 3 </p>  <input type="text" className="w-75"/> 
    </div>
                <div className = 'd-flex mb-2' >
                  <p className="disabled mx-3">Section 4 </p>  <input type="text" className="w-75"/> 
    </div>
                <div className = 'd-flex mb-2' >
                  <p className="disabled mx-3">Section 5 </p>  <input type="text" className="w-75"/> 
    </div>
                <div className = 'd-flex mb-2' >
                  <p className="disabled mx-3">Section 6 </p>  <input type="text" className="w-75"/> 
    </div>
                <div className = 'd-flex mb-2' >
                  <p className="disabled mx-3">Section 7 </p>  <input type="text" className="w-75"/> 
    </div>
                <div className = 'd-flex mb-2' >
                  <p className="disabled mx-3">Section 8 </p>  <input type="text" className="w-75"/> 
    </div>
                <div div className = 'd-flex mb-2' >
                  <p className="disabled mx-3">Section 9 </p>  <input type="text" className="w-75"/> 
    </div>
                
              </div>
    </div>
  </div>
</div>
     </div>
      </div>

    
     
      
  );
};

export default Project;