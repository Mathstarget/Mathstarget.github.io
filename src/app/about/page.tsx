import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';
export default function Home() {
    const bgs = {
        backgroundImage: "url('images/page-banner-1.jpg')"
      }
  return (
    <>
    
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay="9" style={bgs}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-cont">
                        <h2>About Us</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">About Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div> 
        </div> 
    </section>
    <section id="about-page" className="pt-70 pb-110">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="section-title mt-50">
                        <h5>About us</h5>
                        <h2>Welcome to MathsTarget Academy </h2>
                    </div> 
                    <div className="about-cont">
                        <p>Maths Target Academy is a learning institution that provides education and training in a specific field or subject. It may offer courses, workshops, or programs designed to help students achieve their academic and career goals. Education academies aim to provide high-quality, practical and relevant education to students in order to help them succeed in their chosen career paths. <br /> <br /> The focus of an education academy is often on hands-on, applied learning, and the development of practical skills, in addition to theoretical knowledge. With the right education academy, students can gain the skills, knowledge and experience necessary to succeed in their chosen careers</p>
                    </div>
                </div> 
                <div className="col-lg-7">
                    <div className="about-image mt-50">
                        <img src="images/about/about-2.jpg" alt="About"/>
                    </div>  
                </div> 
            </div> 
            <div className="about-items pt-60">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="about-single-items mt-30">
                            <span>01</span>
                            <h4>Experienced and Dedicated Faculty</h4>
                            <p>We has a team of experienced and dedicated faculty who are experts in their fields and committed to providing students with high-quality, relevant education.</p>
                        </div> 
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="about-single-items mt-30">
                            <span>02</span>
                            <h4>Our Mission</h4>
                            <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit sollicitudirem quibibendum auci</p>
                        </div> 
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="about-single-items mt-30">
                            <span>03</span>
                            <h4>Our visions</h4>
                            <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit sollicitudirem quibibendum auci</p>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
           </section>
           </>
  )
}
