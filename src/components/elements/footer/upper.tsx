import Contact from "./Contact"
import LogoFt from "./logo"
import Sitemap from "./sitemap"
import Support from "./support"

export default function bxFoot(){
    return(
        <>
            <div className="footer-top pt-40 pb-70">
            <div className="container">
                <div className="row">
                    <LogoFt />
                <Sitemap />                 
            <Support />
        <Contact />
                </div>
            </div> 
        </div> 
        </>
    )
}