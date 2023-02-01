export default function Slider(){
    return(
        <>
        
        <section className="slider-area">
            <div className="slider-shape">
               <img src="assets/images/slider-bottom-pattern.png"/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div className="slider-area-box">
                        <div className="slider-box wow bounceInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                           <h1>Start Learning and Embrace New Skills For Better Future </h1>
                           <p>With the help of E-Learning, create your own path and drive on your skills on your own to achieve what you seek.</p>
                           <div className="slider-btn">
                              <a href="courses.html" className="theme-btn">View All Courses</a>
                           </div>
                        </div>
                        <div className="slider-box">
                           <div className="slider-images wow bounceInRight" data-wow-duration="1.2s" data-wow-delay="1.2s">
                              <img src="assets/images/banner.png" alt="Slider banner"/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </>
    )
}