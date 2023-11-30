import Header from  "../layout/Header"
import Banner from  "../components/Banner"
import HomeBanner from "../assets/Cliffs.png"
import Card from  "../components/Card"
import Footer from  "../layout/Footer"
import logements from "../datas/logements.json"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="home">
            <Header />            
            <main>
            <Banner img={HomeBanner} text={"Chez vous, partout et ailleurs"} /> 
            <div className="card-container">
                {logements.map(el => {
                    return <Card data={el}/>
                })}
            </div>
            </main>
            <Footer />
        </div>
    )
}
export default Home