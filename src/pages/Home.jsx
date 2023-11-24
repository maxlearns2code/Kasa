import Header from  "../layout/Header"
import Banner from  "../components/Banner"
import Card from  "../components/Card"
import Footer from  "../layout/Footer"

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <main>
                <Banner /> 
                <div className="Card-Container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Home