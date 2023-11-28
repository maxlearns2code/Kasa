import Header from  "../layout/Header"
import Banner from  "../components/Banner"
import Footer from  "../layout/Footer"
import AboutBanner from "../assets/Mountains.png"

const About = () => {
    return (
        <div className="about">
            <Header />            
            <main>
            <Banner img={AboutBanner} text={""} />
            </main>
            <Footer />
        </div>
    )
}
export default About