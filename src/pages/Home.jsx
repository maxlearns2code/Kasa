import { Outlet, Link, useLoaderData } from 'react-router-dom';
import Header from  "../layout/Header"
import Banner from  "../components/Banner"
import HomeBanner from "../assets/Cliffs.png"
import Card from  "../components/Card"
import Footer from  "../layout/Footer"
import logements from "../datas/logements.json"

export async function loader() {
    const housing = logements;
    return { housing };
  }

const Home = () => {
    const { housing } = useLoaderData();
    return (
        <>
            <Header />            
            <main>
                <Banner 
                    img={HomeBanner} 
                    text={"Chez vous, partout et ailleurs"} 
                /> 
                <div className="card-container">
                    {housing.map((el,id) => {
                        return <Card 
                            key={el.id} 
                            data={el} 
                            lazy={id<=6 ? 'eager' : 'lazy'}
                        />
                    })}
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Home