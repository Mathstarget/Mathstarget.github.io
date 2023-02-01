import Image from 'next/image'

import styles from '../page.module.css'
//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <section id="teachers-page" className="pt-90 pb-120 gray-bg">
        <div className="container">
           <div className="row">
               <div className="col-lg-3 col-sm-6">
                   <div className="single-teachers mt-30 text-center">
                        <div className="image">
                            <img src="images/teachers/t-1.jpg" alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="#"><h6>MarkMark Alen</h6></a>
                            <span>Vice Chancellor</span>
                        </div>
                    </div> 
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="single-teachers mt-30 text-center">
                        <div className="image">
                            <img src="images/teachers/t-2.jpg" alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-single.html"><h6>David card </h6></a>
                            <span>Pro Chancellor</span>
                        </div>
                    </div> 
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="single-teachers mt-30 text-center">
                        <div className="image">
                            <img src="images/teachers/t-3.jpg" alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-single.html"><h6>Rebeka Alig</h6></a>
                            <span>Pro Chancellor</span>
                        </div>
                    </div> 
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="single-teachers mt-30 text-center">
                        <div className="image">
                            <img src="images/teachers/t-4.jpg" alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-single.html"><h6>Hanna Bein</h6></a>
                            <span>Aerobics head</span>
                        </div>
                    </div> 
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="single-teachers mt-30 text-center">
                        <div className="image">
                            <img src="images/teachers/t-5.jpg" alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-single.html"><h6>David Card </h6></a>
                            <span>Pro Chancellor</span>
                        </div>
                    </div> 
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="single-teachers mt-30 text-center">
                        <div className="image">
                            <img src="images/teachers/t-6.jpg" alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-single.html"><h6>Mark Alen</h6></a>
                            <span>Vice Chancellor</span>
                        </div>
                    </div> 
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="single-teachers mt-30 text-center">
                        <div className="image">
                            <img src="images/teachers/t-7.jpg" alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-single.html"><h6>Rebeka alig</h6></a>
                            <span>Pro chancellor</span>
                        </div>
                    </div> 
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="single-teachers mt-30 text-center">
                        <div className="image">
                            <img src="images/teachers/t-8.jpg" alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-single.html"><h6>Hanna Bein</h6></a>
                            <span>Aerobics head</span>
                        </div>
                    </div> 
               </div>
           </div> 
            <div className="row">
                <div className="col-lg-12">
                    <nav className="courses-pagination mt-50">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a href="#" aria-label="Previous">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                            </li>
                            <li className="page-item"><a className="active" href="#">1</a></li>
                            <li className="page-item"><a href="#">2</a></li>
                            <li className="page-item"><a href="#">3</a></li>
                            <li className="page-item">
                                <a href="#" aria-label="Next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>  
                </div>
            </div>  
        </div> 
    </section>
   </>
  )
}
