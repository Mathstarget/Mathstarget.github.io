import styles from "./wcu.module.css"
export default function WhyChooseUs(){
    return(
        <>
        <section className="why-choose-us-area page-paddings">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div className="section-title text-center">
                        <h2>Why Choose E-learning</h2>
                        <p>Look into yourself, know you’re ambitious and keep moving forward until you get something in return as your achievement.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                     <div className="why-chhose-us-box wow fadeInUp center" data-wow-delay="0.1s">
                        <div className="why-chhose-us-box-inner">
                           <div className="why-chhose-us-icon">
                              <i className="fas fa-book"></i>
                           </div>
                           <div className="why-chhose-us-content">
                              <h3 className="theme-title">Course Accessibility </h3>
                              <p className="theme-description">Select a suitable course from the vast area of other courses and access it anytime and from anywhere.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                     <div className="why-chhose-us-box wow fadeInUp center" data-wow-delay="0.2s">
                        <div className="why-chhose-us-box-inner">
                           <div className="why-chhose-us-icon wcua" style={styles.wcua}>
                              <i className="fas fa-graduation-cap"></i>
                           </div>
                           <div className="why-chhose-us-content">
                              <h3 className="theme-title">Scholarship</h3>
                              <p className="theme-description">To encourage talent, we give up to 100 % aid to those young learners who have the ability to do something.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                     <div className="why-chhose-us-box wow fadeInUp center" data-wow-delay="0.3s">
                        <div className="why-chhose-us-box-inner">
                           <div className="why-chhose-us-icon wcub" style={styles.wcub}>
                              <i className="fas fa-globe"></i>
                           </div>
                           <div className="why-chhose-us-content">
                              <h3 className="theme-title">Practical learning </h3>
                              <p className="theme-description">Interact yourself with the real-world while doing the real-world project and other things to master your skills.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                     <div className="why-chhose-us-box wow fadeInUp center" data-wow-delay="0.4s">
                        <div className="why-chhose-us-box-inner">
                           <div id="" className="why-chhose-us-icon wcuc" style={styles.wcuc}>
                              <i className="fas fa-user"></i>
                           </div>
                           <div className="why-chhose-us-content">
                              <h3 className="theme-title">Expert Instructions </h3>
                              <p className="theme-description">Hold the opportunity to learn from the industry’s expert and learn how to execute things like them.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                     <div className="why-chhose-us-box wow fadeInUp center" data-wow-delay="0.5s">
                        <div className="why-chhose-us-box-inner">
                           <div className="why-chhose-us-icon wcud" style={styles.wcud}>
                              <i className="fas fa-headphones-alt"></i>
                           </div>
                           <div className="why-chhose-us-content">
                              <h3 className="theme-title">Schedule learning</h3>
                              <p className="theme-description">Learn at whatever and whenever at your suitable time and place. Get a part-time study degree.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                     <div className="why-chhose-us-box wow fadeInUp center" data-wow-delay="0.6s">
                        <div className="why-chhose-us-box-inner">
                           <div className="why-chhose-us-icon wcue" style={styles.wcue}>
                              <i className="fas fa-child"></i>
                           </div>
                           <div className="why-chhose-us-content">
                              <h3 className="theme-title">Recorded sessions</h3>
                              <p className="theme-description">Missed the live className? Don’t worry about it, access to every session on the chosen course.</p>
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