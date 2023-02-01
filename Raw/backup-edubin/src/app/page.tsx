
import { NextSeo } from 'next-seo';

export default function Home() {
  const slider1 = {
    backgroundImage: "url('images/slider/s-1.jpg')"
  }
  const slider2 = {
    backgroundImage: "url('images/slider/s-2.jpg')"
  }
  const slider3 = {
    backgroundImage: "url('images/slider/s-3.jpg')"
  }
  const bg1 = {
    backgroundImage: "url('images/bg-1.jpg')"
  }
  const bg2 = {
    backgroundImage: "url('images/bg-2.jpg')"
  }
  return (
    <>
       <NextSeo
    useAppDir={true}
        title="Manage SEO in NextJS with Next SEO"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
        canonical="www.example.com/next-seo-blog"
        openGraph={{
            type: 'article',
            article: {
                publishedTime: '2022-06-21T23:04:13Z',
                modifiedTime: '2022-01-21T18:04:43Z',
                authors: [
                    'https://www.example.com/authors/@firstnameA-lastnameA',
                    'https://www.example.com/authors/@firstnameB-lastnameB',
                ],
                tags: ['Tag A', 'Tag B', 'Tag C'],
            },
            url: 'www.example.com/next-seo-blog',
            site_name: 'Next Blog'
        }}
    />

<section id="slider-part" className="slider-active ">
        <div className="single-slider bg_cover pt-150" style={slider1} data-overlay="4">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-9">
                        <div className="slider-cont">
                            <h1 data-animation="fadeInLeft" data-delay="1s">Choose the right theme for education</h1>
                            <p data-animation="fadeInUp" data-delay="1.3s">Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt  Sed fringilla mauri amet nibh.</p>
                            <ul>
                                <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">Read More</a></li>
                                <li><a data-animation="fadeInUp" data-delay="1.9s" className="main-btn" href="#">Get Started</a></li>
                            </ul>
                        </div>
                    </div>
                </div> {/*<!-- row -->*/}
            </div> {/*<!-- container -->*/}
        </div> {/*<!-- single slider -->*/}
           
        <div className="single-slider bg_cover pt-150" style={slider3} data-overlay="4">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-9">
                        <div className="slider-cont">
                            <h1 data-animation="fadeInLeft" data-delay="1s">Choose the right theme for education</h1>
                            <p data-animation="fadeInUp" data-delay="1.3s">Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt  Sed fringilla mauri amet nibh.</p>
                            <ul>
                                <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">Read More</a></li>
                                <li><a data-animation="fadeInUp" data-delay="1.9s" className="main-btn" href="#">Get Started</a></li>
                            </ul>
                        </div>
                    </div>
                </div> {/*<!-- row -->*/}
            </div> {/*<!-- container -->*/}
        </div> {/*<!-- single slider -->*/}
        <div className="single-slider bg_cover pt-150" style={slider2} data-overlay="4">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-9">
                        <div className="slider-cont">
                            <h1 data-animation="fadeInLeft" data-delay="1s">Choose the right theme for education</h1>
                            <p data-animation="fadeInUp" data-delay="1.3s">Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt  Sed fringilla mauri amet nibh.</p>
                            <ul>
                                <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">Read More</a></li>
                                <li><a data-animation="fadeInUp" data-delay="1.9s" className="main-btn" href="#">Get Started</a></li>
                            </ul>
                        </div>
                    </div>
                </div> {/*<!-- row -->*/}
            </div> {/*<!-- container -->*/}
        </div> {/*<!-- single slider -->*/}
    </section>
    
    {/*<!--====== SLIDER PART ENDS ======-->*/}
   
    {/*<!--====== CATEGORY PART START ======-->*/}
    
    <section id="category-part">
        <div className="container">
            <div className="category pt-40 pb-80">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="category-text pt-40">
                            <h2>Best platform to learn everything</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
                        <div className="row category-slide mt-40">
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="single-category text-center color-1">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-1.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Language</span>
                                        </span>
                                    </span> {/*<!-- single category -->*/}
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="single-category text-center color-2">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-2.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Business</span>
                                        </span>
                                    </span> {/*<!-- single category -->*/}
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="single-category text-center color-3">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-3.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Literature</span>
                                        </span>
                                    </span> {/*<!-- single category -->*/}
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="single-category text-center color-1">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-1.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Language</span>
                                        </span>
                                    </span> {/*<!-- single category -->*/}
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="single-category text-center color-2">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-2.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Business</span>
                                        </span>
                                    </span> {/*<!-- single category -->*/}
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#">
                                    <span className="single-category text-center color-3">
                                        <span className="icon">
                                            <img src="images/all-icon/ctg-3.png" alt="Icon"/>
                                        </span>
                                        <span className="cont">
                                            <span>Literature</span>
                                        </span>
                                    </span> {/*<!-- single category -->*/}
                                </a>
                            </div>
                        </div> {/*<!-- category slide -->*/}
                    </div>
                </div> {/*<!-- row -->*/}
            </div> {/*<!-- category -->*/}
        </div> {/*<!-- container -->*/}
    </section>
    
    {/*<!--====== CATEGORY PART ENDS ======-->*/}
   
    {/*<!--====== ABOUT PART START ======-->*/}
    
    <section id="about-part" className="pt-65">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="section-title mt-50">
                        <h5>About us</h5>
                        <h2>Welcome to Edubin </h2>
                    </div> {/*<!-- section title -->*/}
                    <div className="about-cont">
                        <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris. <br /> <br /> auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris</p>
                        <a href="#" className="main-btn mt-55">Learn More</a>
                    </div>
                </div> {/*<!-- about cont -->*/}
                <div className="col-lg-6 offset-lg-1">
                    <div className="about-event mt-50">
                        <div className="event-title">
                            <h3>Upcoming events</h3>
                        </div> {/*<!-- event title -->*/}
                        <ul>
                            <li>
                                <div className="single-event">
                                    <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                    <a href="events-single.html"><h4>Campus clean workshop</h4></a>
                                    <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                    <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                </div>
                            </li>
                            <li>
                                <div className="single-event">
                                    <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                    <a href="events-single.html"><h4>Tech Summit</h4></a>
                                    <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                    <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                </div>
                            </li>
                            <li>
                                <div className="single-event">
                                    <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                    <a href="events-single.html"><h4>Environment conference</h4></a>
                                    <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                    <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                </div>
                            </li>
                        </ul> 
                    </div> {/*<!-- about event -->*/}
                </div>
            </div> {/*<!-- row -->*/}
        </div> {/*<!-- container -->*/}
        <div className="about-bg">
            <img src="images/about/bg-1.png" alt="About"/>
        </div>
    </section>
    
    {/*<!--====== ABOUT PART ENDS ======-->*/}
   
    {/*<!--====== APPLY PART START ======-->*/}
    
    <section id="apply-aprt" className="pb-120">
        <div className="container">
            <div className="apply">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="apply-cont apply-color-1">
                            <h3>Apply for fall 2019</h3>
                            <p>Gravida nibh vel velit auctor aliquetn sollicitudirem sem quibibendum auci elit cons equat ipsutis sem nibh id elituis sed odio sit amet nibh vulputate cursus equat ipsutis.</p>
                            <a href="#" className="main-btn">Apply Now</a>
                        </div> {/*<!-- apply cont -->*/}
                    </div>
                    <div className="col-lg-6">
                        <div className="apply-cont apply-color-2">
                            <h3>Apply for scholarship</h3>
                            <p>Gravida nibh vel velit auctor aliquetn sollicitudirem sem quibibendum auci elit cons equat ipsutis sem nibh id elituis sed odio sit amet nibh vulputate cursus equat ipsutis.</p>
                            <a href="#" className="main-btn">Apply Now</a>
                        </div> {/*<!-- apply cont -->*/}
                    </div> 
                </div>
            </div> {/*<!-- row -->*/}
        </div> {/*<!-- container -->*/}
    </section>
    
    {/*<!--====== APPLY PART ENDS ======-->*/}
   
    {/*<!--====== COURSE PART START ======-->*/}
    
    <section id="course-part" className="pt-115 pb-120 gray-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-45">
                        <h5>Our course</h5>
                        <h2>Featured courses </h2>
                    </div> {/*<!-- section title -->*/}
                </div>
            </div> {/*<!-- row -->*/}
            <div className="row course-slide mt-30">
                <div className="col-lg-4">
                    <div className="single-course">
                        <div className="thum">
                            <div className="image">
                                <img src="images/course/cu-1.jpg" alt="Course"/>
                            </div>
                            <div className="price">
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="cont">
                            <ul>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span>(20 Reviews)</span>
                            <a href="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></a>
                            <div className="course-teacher">
                                <div className="thum">
                                    <a href="#"><img src="images/course/teacher/t-1.jpg" alt="teacher"/></a>
                                </div>
                                <div className="name">
                                    <a href="#"><h6>Mark anthem</h6></a>
                                </div>
                                <div className="admin">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> {/*<!-- single course -->*/}
                </div>
                <div className="col-lg-4">
                    <div className="single-course">
                        <div className="thum">
                            <div className="image">
                                <img src="images/course/cu-2.jpg" alt="Course"/>
                            </div>
                            <div className="price">
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="cont">
                            <ul>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span>(20 Reviews)</span>
                            <a href="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></a>
                            <div className="course-teacher">
                                <div className="thum">
                                    <a href="#"><img src="images/course/teacher/t-2.jpg" alt="teacher"/></a>
                                </div>
                                <div className="name">
                                    <a href="#"><h6>Mark anthem</h6></a>
                                </div>
                                <div className="admin">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> {/*<!-- single course -->*/}
                </div>
                <div className="col-lg-4">
                    <div className="single-course">
                        <div className="thum">
                            <div className="image">
                                <img src="images/course/cu-3.jpg" alt="Course"/>
                            </div>
                            <div className="price">
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="cont">
                            <ul>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span>(20 Reviews)</span>
                            <a href="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></a>
                            <div className="course-teacher">
                                <div className="thum">
                                    <a href="#"><img src="images/course/teacher/t-3.jpg" alt="teacher"/></a>
                                </div>
                                <div className="name">
                                    <a href="#"><h6>Mark anthem</h6></a>
                                </div>
                                <div className="admin">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> {/*<!-- single course -->*/}
                </div>
                <div className="col-lg-4">
                    <div className="single-course">
                        <div className="thum">
                            <div className="image">
                                <img src="images/course/cu-4.jpg" alt="Course"/>
                            </div>
                            <div className="price">
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="cont">
                            <ul>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span>(20 Reviews)</span>
                            <a href="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></a>
                            <div className="course-teacher">
                                <div className="thum">
                                    <a href="#"><img src="images/course/teacher/t-4.jpg" alt="teacher"/></a>
                                </div>
                                <div className="name">
                                    <a href="#"><h6>Mark anthem</h6></a>
                                </div>
                                <div className="admin">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> {/*<!-- single course -->*/}
                </div>
                <div className="col-lg-4">
                    <div className="single-course">
                        <div className="thum">
                            <div className="image">
                                <img src="images/course/cu-5.jpg" alt="Course"/>
                            </div>
                            <div className="price">
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="cont">
                            <ul>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span>(20 Reviews)</span>
                            <a href="courses-single.html"><h4>Learn basic javascript from start for beginner</h4></a>
                            <div className="course-teacher">
                                <div className="thum">
                                    <a href="#"><img src="images/course/teacher/t-5.jpg" alt="teacher"/></a>
                                </div>
                                <div className="name">
                                    <a href="#"><h6>Mark anthem</h6></a>
                                </div>
                                <div className="admin">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                        <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> {/*<!-- single course -->*/}
                </div>
            </div> {/*<!-- course slide -->*/}
        </div> {/*<!-- container -->*/}
    </section>
    
    {/*<!--====== COURSE PART ENDS ======-->*/}
   
    {/*<!--====== VIDEO FEATURE PART START ======-->*/}
    
    <section id="video-feature" className="bg_cover pt-60 pb-110" style={bg1}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-last order-lg-first">
                    <div className="video text-lg-left text-center pt-50">
                        <a className="Video-popup" href="https://www.youtube.com/watch?v=bRRtdzJH1oE"><i className="fa fa-play"></i></a>
                    </div> {/*<!-- row -->*/}
                </div>
                <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
                    <div className="feature pt-50">
                        <div className="feature-title">
                            <h3>Our Facilities</h3>
                        </div>
                        <ul>
                            <li>
                                <div className="single-feature">
                                    <div className="icon">
                                        <img src="images/all-icon/f-1.png" alt="icon"/>
                                    </div>
                                    <div className="cont">
                                        <h4>Global Certificate</h4>
                                        <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                                    </div>
                                </div> {/*<!-- single feature -->*/}
                            </li>
                            <li>
                                <div className="single-feature">
                                    <div className="icon">
                                        <img src="images/all-icon/f-2.png" alt="icon"/>
                                    </div>
                                    <div className="cont">
                                        <h4>Alumni Support</h4>
                                        <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                                    </div>
                                </div> {/*<!-- single feature -->*/}
                            </li>
                            <li>
                                <div className="single-feature">
                                    <div className="icon">
                                        <img src="images/all-icon/f-3.png" alt="icon"/>
                                    </div>
                                    <div className="cont">
                                        <h4>Books & Library</h4>
                                        <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                                    </div>
                                </div> {/*<!-- single feature -->*/}
                            </li>
                        </ul>
                    </div> {/*<!-- feature -->*/}
                </div>
            </div> {/*<!-- row -->*/}
        </div> {/*<!-- container -->*/}
        <div className="feature-bg"></div> {/*<!-- feature bg -->*/}
    </section>
    
    {/*<!--====== VIDEO FEATURE PART ENDS ======-->*/}
   
    {/*<!--====== TEACHERS PART START ======-->*/}
    
    <section id="teachers-part" className="pt-70 pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="section-title mt-50">
                        <h5>Featured Teachers</h5>
                        <h2>Meet Our teachers</h2>
                    </div> {/*<!-- section title -->*/}
                    <div className="teachers-cont">
                        <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris. <br /> <br /> auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris</p>
                        <a href="#" className="main-btn mt-55">Career with us</a>
                    </div> {/*<!-- teachers cont -->*/}
                </div>
                <div className="col-lg-6 offset-lg-1">
                    <div className="teachers mt-20">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="single-teachers mt-30 text-center">
                                    <div className="image">
                                        <img src="images/teachers/t-1.jpg" alt="Teachers"/>
                                    </div>
                                    <div className="cont">
                                        <a href="teachers-single.html"><h6>Mark Alen</h6></a>
                                        <span>Vice Chancellor</span>
                                    </div>
                                </div> {/*<!-- single teachers -->*/}
                            </div>
                            <div className="col-sm-6">
                                <div className="single-teachers mt-30 text-center">
                                    <div className="image">
                                        <img src="images/teachers/t-2.jpg" alt="Teachers"/>
                                    </div>
                                    <div className="cont">
                                        <a href="teachers-single.html"><h6>David card</h6></a>
                                        <span>Pro Chancellor</span>
                                    </div>
                                </div> {/*<!-- single teachers -->*/}
                            </div>
                            <div className="col-sm-6">
                                <div className="single-teachers mt-30 text-center">
                                    <div className="image">
                                        <img src="images/teachers/t-3.jpg" alt="Teachers"/>
                                    </div>
                                    <div className="cont">
                                        <a href="teachers-single.html"><h6>Rebeka Alig</h6></a>
                                        <span>Pro Chancellor</span>
                                    </div>
                                </div> {/*<!-- single teachers -->*/}
                            </div>
                            <div className="col-sm-6">
                                <div className="single-teachers mt-30 text-center">
                                    <div className="image">
                                        <img src="images/teachers/t-4.jpg" alt="Teachers"/>
                                    </div>
                                    <div className="cont">
                                        <a href="teachers-single.html"><h6>Hanna Bein</h6></a>
                                        <span>Aerobics head</span>
                                    </div>
                                </div> {/*<!-- single teachers -->*/}
                            </div>
                        </div> {/*<!-- row -->*/}
                    </div> {/*<!-- teachers -->*/}
                </div>
            </div> {/*<!-- row -->*/}
        </div> {/*<!-- container -->*/}
    </section>
    
    {/*<!--====== TEACHERS PART ENDS ======-->*/}
   
    {/*<!--====== PUBLICATION PART START ======-->*/}
    
    <section id="publication-part" className="pt-115 pb-120 gray-bg">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-lg-6 col-md-8 col-sm-7">
                    <div className="section-title pb-60">
                        <h5>Publications</h5>
                        <h2>From Store </h2>
                    </div> {/*<!-- section title -->*/}
                </div>
                <div className="col-lg-6 col-md-4 col-sm-5">
                    <div className="products-btn text-right pb-60">
                        <a href="#" className="main-btn">All Products</a>
                    </div> {/*<!-- products btn -->*/}
                </div>
            </div> {/*<!-- row -->*/}
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-8">
                    <div className="single-publication mt-30 text-center">
                        <div className="image">
                            <img src="images/publication/p-1.jpg" alt="Publication"/>
                            <div className="add-cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content pt-10">
                            <h5 className="book-title"><a href="#">Stones The Road </a></h5>
                            <p className="writer-name"><span>By</span> Scott Trench</p>
                            <div className="price-btn d-flex align-items-center justify-content-between">
                                <div className="price pt-20">
                                    <span className="discount-price">$250</span>
                                    <span className="normal-price">$200</span>
                                </div>
                                <div className="button pt-10">
                                    <a href="#" className="main-btn"><i className="fa fa-cart-plus"></i> Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div> {/*<!-- single publication -->*/}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8">
                    <div className="single-publication mt-30 text-center">
                        <div className="image">
                            <img src="images/publication/p-2.jpg" alt="Publication"/>
                            <div className="add-cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content pt-10">
                            <h5 className="book-title"><a href="#">The Stranded </a></h5>
                            <p className="writer-name"><span>By</span> Scott Trench</p>
                            <div className="price-btn d-flex align-items-center justify-content-between">
                                <div className="price pt-20">
                                    <span className="discount-price">$250</span>
                                    <span className="normal-price">$200</span>
                                </div>
                                <div className="button pt-10">
                                    <a href="#" className="main-btn"><i className="fa fa-cart-plus"></i> Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div> {/*<!-- single publication -->*/}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8">
                    <div className="single-publication mt-30 text-center">
                        <div className="image">
                            <img src="images/publication/p-3.jpg" alt="Publication"/>
                            <div className="add-cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content pt-10">
                            <h5 className="book-title"><a href="#">The Sicario </a></h5>
                            <p className="writer-name"><span>By</span> Scott Trench</p>
                            <div className="price-btn d-flex align-items-center justify-content-between">
                                <div className="price pt-20">
                                    <span className="discount-price">$250</span>
                                    <span className="normal-price">$200</span>
                                </div>
                                <div className="button pt-10">
                                    <a href="#" className="main-btn"><i className="fa fa-cart-plus"></i> Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div> {/*<!-- single publication -->*/}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-8">
                    <div className="single-publication mt-30 text-center">
                        <div className="image">
                            <img src="images/publication/p-4.jpg" alt="Publication"/>
                            <div className="add-cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content pt-10">
                            <h5 className="book-title"><a href="#">There Were None </a></h5>
                            <p className="writer-name"><span>By</span> Scott Trench</p>
                            <div className="price-btn d-flex align-items-center justify-content-between">
                                <div className="price pt-20">
                                    <span className="discount-price">$250</span>
                                    <span className="normal-price">$200</span>
                                </div>
                                <div className="button pt-10">
                                    <a href="#" className="main-btn"><i className="fa fa-cart-plus"></i> Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div> {/*<!-- single publication -->*/}
                </div>
            </div> {/*<!-- row -->*/}
        </div> {/*<!-- container -->*/}
    </section>
    
    {/*<!--====== PUBLICATION PART ENDS ======-->*/}
   
    {/*<!--====== TEASTIMONIAL PART START ======-->*/}
    
    <section id="testimonial" className="bg_cover pt-115 pb-115" data-overlay="8" style={bg2}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-40">
                        <h5>Testimonial</h5>
                        <h2>What they say</h2>
                    </div> {/*<!-- section title -->*/}
                </div>
            </div> {/*<!-- row -->*/}
            <div className="row testimonial-slide mt-40">
                <div className="col-lg-6">
                    <div className="single-testimonial">
                        <div className="testimonial-thum">
                            <img src="images/testimonial/t-1.jpg" alt="Testimonial"/>
                            <div className="quote">
                                <i className="fa fa-quote-right"></i>
                            </div>
                        </div>
                        <div className="testimonial-cont">
                            <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                            <h6>Rubina Helen</h6>
                            <span>Bsc, Engineering</span>
                        </div>
                    </div> {/*<!-- single testimonial -->*/}
                </div>
                <div className="col-lg-6">
                    <div className="single-testimonial">
                        <div className="testimonial-thum">
                            <img src="images/testimonial/t-2.jpg" alt="Testimonial"/>
                            <div className="quote">
                                <i className="fa fa-quote-right"></i>
                            </div>
                        </div>
                        <div className="testimonial-cont">
                            <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                            <h6>Rubina Helen</h6>
                            <span>Bsc, Engineering</span>
                        </div>
                    </div> {/*<!-- single testimonial -->*/}
                </div>
                <div className="col-lg-6">
                    <div className="single-testimonial">
                        <div className="testimonial-thum">
                            <img src="images/testimonial/t-3.jpg" alt="Testimonial"/>
                            <div className="quote">
                                <i className="fa fa-quote-right"></i>
                            </div>
                        </div>
                        <div className="testimonial-cont">
                            <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                            <h6>Rubina Helen</h6>
                            <span>Bsc, Engineering</span>
                        </div>
                    </div> {/*<!-- single testimonial -->*/}
                </div>
            </div> {/*<!-- testimonial slide -->*/}
        </div> {/*<!-- container -->*/}
    </section>
    
    {/*<!--====== TEASTIMONIAL PART ENDS ======-->*/}
   
    {/*<!--====== NEWS PART START ======-->*/}
    
    <section id="news-part" className="pt-115 pb-110">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-50">
                        <h5>Latest News</h5>
                        <h2>From the news</h2>
                    </div> {/*<!-- section title -->*/}
                </div>
            </div> {/*<!-- row -->*/}
            <div className="row">
                <div className="col-lg-6">
                    <div className="single-news mt-30">
                        <div className="news-thum pb-25">
                            <img src="images/news/n-1.jpg" alt="News"/>
                        </div>
                        <div className="news-cont">
                            <ul>
                                <li><a href="#"><i className="fa fa-calendar"></i>2 December 2018 </a></li>
                                <li><a href="#"> <span>By</span> Adam linn</a></li>
                            </ul>
                            <a href="blog-single.html"><h3>Tips to grade high cgpa in university life</h3></a>
                            <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt .</p>
                        </div>
                    </div> {/*<!-- single news -->*/}
                </div>
                <div className="col-lg-6">
                    <div className="single-news news-list">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="news-thum mt-30">
                                    <img src="images/news/ns-1.jpg" alt="News"/>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-cont mt-30">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-calendar"></i>2 December 2018 </a></li>
                                        <li><a href="#"> <span>By</span> Adam linn</a></li>
                                    </ul>
                                    <a href="blog-single.html"><h3>Intellectual communication</h3></a>
                                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons  vel.</p>
                                </div>
                            </div>
                        </div> {/*<!-- row -->*/}
                    </div> {/*<!-- single news -->*/}
                    <div className="single-news news-list">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="news-thum mt-30">
                                    <img src="images/news/ns-2.jpg" alt="News"/>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-cont mt-30">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-calendar"></i>2 December 2018 </a></li>
                                        <li><a href="#"> <span>By</span> Adam linn</a></li>
                                    </ul>
                                    <a href="blog-single.html"><h3>Study makes you perfect</h3></a>
                                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons  vel.</p>
                                </div>
                            </div>
                        </div> {/*<!-- row -->*/}
                    </div> {/*<!-- single news -->*/}
                    <div className="single-news news-list">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="news-thum mt-30">
                                    <img src="images/news/ns-3.jpg" alt="News"/>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="news-cont mt-30">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-calendar"></i>2 December 2018 </a></li>
                                        <li><a href="#"> <span>By</span> Adam Linn</a></li>
                                    </ul>
                                    <a href="blog-single.html"><h3>Technology eduction is now....</h3></a>
                                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons  vel.</p>
                                </div>
                            </div>
                        </div> {/*<!-- row -->*/}
                    </div> {/*<!-- single news -->*/}
                </div>
            </div> {/*<!-- row -->*/}
        </div> {/*<!-- container -->*/}
    </section>
    
    {/*<!--====== NEWS PART ENDS ======-->*/}
   
    {/*<!--====== PATNAR LOGO PART START ======-->*/}
    
    <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
        <div className="container">
            <div className="row patnar-slide">
                <div className="col-lg-12">
                    <div className="single-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-1.png" alt="Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="single-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-2.png" alt="Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="single-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-3.png" alt="Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="single-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-4.png" alt="Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="single-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-2.png" alt="Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="single-patnar text-center mt-40">
                        <img src="images/patnar-logo/p-3.png" alt="Logo"/>
                    </div>
                </div>
            </div> {/*<!-- row -->*/}
        </div> {/*<!-- container -->*/}
    </div> 
    
    {/*<!--====== PATNAR LOGO PART ENDS ======-->*/}
</>
  )
}
