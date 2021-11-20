import React from 'react';





function About() {
    return (
        <div className="container-fluid bg-light text-center my-5" id="about"> 
            
           <h1 className="font-weight-light text-dark pt-3">
                <span className="text-primary" style={{ fontWeight:"bold"}}>About</span> me </h1>
        <div className="lead text-dark" >i can develope front and the back of an app </div>

<div className="container my-5">
      {/*   <!-- row 1 --> */}
        <div className="row  mx-5 ">
           {/*  <!-- What can i do? --> */}
           <div className="col-12 col-md-6 text-justify my-5">
                <h4 className="text-center">What can  i do?</h4>
               <p>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum ipsum eos deserunt est iste tenetur porro. Ducimus ut 
                    perferendis dolores exercitationem cumque, in totam obcaecati error, 
                    deserunt consequatur ab repudiandae!
                </p>
           </div>
          {/*   <!-- What am i doing currently? --> */}
             <div className="col-12 col-md-6 text-justify  my-5">
                <h4 className="text-center">What am i doing currently?</h4>
               <p>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum ipsum eos deserunt est iste tenetur porro. Ducimus ut 
                    perferendis dolores exercitationem cumque, in totam obcaecati error, 
                    deserunt consequatur ab repudiandae!
                </p>
           </div>
        </div>
       {/*  <!-- End row 1 --> */}

    {/*     <!-- row 2 --> */}
        <div  className="row  mx-5 ">
           {/*  <!-- What do i belive in? --> */}
            <div className="col-12 col-md-6 text-justify my-5">
                <h3 className="text-center">What do i belive in?</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sed ea 
                voluptatum necessitatibus recusandae ullam! Iusto delectus ex nesciunt perspiciatis!</p>
            </div>
         {/*    <!-- How i can help you? --> */}
             <div className="col-12 col-md-6 text-justify my-5 ">
                <h3 className="text-center">How i can help you?</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sed ea 
                voluptatum necessitatibus recusandae ullam! Iusto delectus ex nesciunt perspiciatis!</p>
            </div>
        </div>
        {/* <!-- End row 2 --> */}
    </div>
</div>
    );
}


export default About;