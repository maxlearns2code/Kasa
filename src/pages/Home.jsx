import { useLoaderData } from 'react-router-dom'
import Banner from  "../components/Banner"
import HomeBanner from "../assets/Cliffs.png"
import Card from  "../components/Card"

import logements from "../datas/logements.json"

export async function loader() {
    const housing = logements
    return { housing }
  }

const Home = () => {
    const { housing } = useLoaderData();
    return (
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
    )
}
export default Home