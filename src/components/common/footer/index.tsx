import Main from "@elementSeparator/footer/main";
import Script from "@elementSeparator/footer/script";
export default function Footer(){
    return(
        <>
         <footer className="footer-main">
            <div className="footer-shape">
               <img src="assets/images/footer-shape.png" alt="Shape"/>
            </div>
            <div className="footer-top">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="footer-box contact-list">
                           <div className="footer-title">
                              <h3 className="theme-title">Contact Us</h3>
                           </div>
                           <div className="footer-content">
                              <ul>
                                 <li>
                                    <span><i className="fas fa-map-marker-alt"></i> Spring Store London Oxford Street, 012 United Kingdom</span>
                                 </li>
                                 <li>
                                    <span><i className="fas fa-phone-alt"></i> +00 1234 456789</span>
                                 </li>
                                 <li>
                                    <span><i className="fas fa-envelope"></i> info@example.com</span>
                                 </li>
                                 <li>
                                    <span><i className="fas fa-fax"></i> 000 123 2294 089</span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="footer-box footer-feature">
                           <div className="footer-title">
                              <h3 className="theme-title">Feature Links</h3>
                           </div>
                           <div className="footer-content clearfix">
                              <ul>
                                 <li><a href="about.html"><i className="far fa-dot-circle"></i> About Us</a></li>
                                 <li><a href="courses.html"><i className="far fa-dot-circle"></i> Courses</a></li>
                                 
                                 <li><a href="scholarship.html"><i className="far fa-dot-circle"></i> Scholarship</a></li>
                                 <li><a href="contact.html"><i className="far fa-dot-circle"></i> Contact</a></li>
                              </ul>
                              <ul>
                                 
                                 <li><a href="teacher.html"><i className="far fa-dot-circle"></i> Teachers</a></li>
                                 <li><a href="pricing.html"><i className="far fa-dot-circle"></i> Pricing</a></li>
                                 <li><a href="blog.html"><i className="far fa-dot-circle"></i> Blog</a></li>
                                 <li><a href="event.html"><i className="far fa-dot-circle"></i> Events</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="footer-box support-box">
                           <div className="footer-title">
                              <h3 className="theme-title">Support</h3>
                           </div>
                           <div className="footer-content">
                              <ul>
                                 <li><a href="faq.html"><i className="far fa-dot-circle"></i> FAQ&lsquo;s</a></li>
                                 <li><a href="contact.html"><i className="far fa-dot-circle"></i> Support</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="footer-box download-app">
                           <div className="footer-title">
                              <h3 className="theme-title">Download Our App</h3>
                           </div>
                           <div className="footer-content">
                              <ul>
                                 <li><a href="#" ><img src="assets/images/play-store.png" alt=""/></a></li>
                                 <li><a href="#" ><img src="assets/images/app-store.png" alt=""/></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="footer-social">
                           <ul className="clearfix">
                              <li className="wow fadeInUp center" data-wow-delay="0.1s"><a className="facebook" href="#" ><i className="fab fa-facebook-f"></i> Facebook</a></li>
                              <li className="wow fadeInUp center" data-wow-delay="0.2s"><a className="twitter" href="#" ><i className="fab fa-twitter"></i> Twitter</a></li>
                              <li className="wow fadeInUp center" data-wow-delay="0.3s"><a className="linkedin" href="#" ><i className="fab fa-linkedin-in"></i> Linkedin</a></li>
                              <li className="wow fadeInUp center" data-wow-delay="0.4s"><a className="youtube" href="#" ><i className="fab fa-youtube"></i> Youtube</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-bottom text-center">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="footer-copyright">
                           <p>Copyright © 2020 <a href="home.html">E-learning</a>. All right reserved</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
        </>
    )
}