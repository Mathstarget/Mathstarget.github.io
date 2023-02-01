import LinkHeader from "@elementSeparator/header/links";
import Search from "@elementSeparator/header/search";
export default function Header() {
    return (
<>
<header className="header-main">
            <div className="header-top">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="header-top-content">
                           <p>Online Education Courses Millions of people learning!</p>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="header-top-menu">
                           <ul>
                              <li><a href="#" ><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="#" ><i className="fab fa-twitter"></i></a></li>
                              <li><a href="#" ><i className="fab fa-linkedin-in"></i></a></li>
                              <li><a href="#" ><i className="fab fa-youtube"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="header-bottom">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-12">
                        <div className="header-logo">
                           <a href="home.html"><img src="assets/images/logo.png" alt="Logo"/></a>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-12">
                        <div className="header-contact">
                           <div className="header-widget-main clearfix">
                              <div className="header-widget clearfix">
                                 <div className="header-icon">
                                    <i className="fas fa-phone-alt"></i>
                                 </div>
                                 <div className="header-content">
                                    <h3>Call</h3>
                                    <h5>+123 4567 8910</h5>
                                 </div>
                              </div>
                              <div className="header-widget clearfix">
                                 <div className="header-icon">
                                    <i className="fas fa-envelope"></i>
                                 </div>
                                 <div className="header-content">
                                    <h3>Email</h3>
                                    <h5>info@example.com</h5>
                                 </div>
                              </div>
                              <div className="header-widget clearfix">
                                 <div className="header-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                 </div>
                                 <div className="header-content">
                                    <h3>Address</h3>
                                    <h5>24 Fifth st, Los Angeles, USA</h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="header-nav-area">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="header-nav-menu-box">
                           <div className="header-responsive-menu">
                              <i className="fas fa-bars"></i>
                           </div>
                           <div className="header-nav-menu-area">
                              <ul>
                                 <li><a className="active" href="home.html">Home</a></li>
                                 <li><a href="javascript:void(0)">Pages <i className="fas fa-angle-down"></i></a>
                                    <div className="theme-dropdown">
                                       <ul>
                                          <li><a href="about.html">About Us</a></li>
                                          <li><a href="faq.html">FAQ's</a></li>
                                          <li><a href="contact.html">Support</a></li>
                                          
                                          <li><a href="scholarship.html">Scholarship</a></li>
                                          
                                       </ul>
                                    </div>
                                 </li>
                                 <li><a href="courses.html">Courses</a></li>
                                 <li><a href="event.html">Events</a></li>
                                 <li><a href="teacher.html">Teachers</a></li>
                                 <li><a href="pricing.html">Pricing</a></li>
                                 <li><a href="blog.html">Blog</a></li>
                                 <li><a href="contact.html">Contact</a></li>
                              </ul>
                           </div>
                           <div className="header-request">
                              <a href="login.html" className="theme-btn">Login / Register</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header> </>
)
}