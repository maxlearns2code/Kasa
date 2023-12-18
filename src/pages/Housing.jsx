import Header from  "../layout/Header"
import Slideshow from  "../components/Slideshow"
import Tags from  "../components/Tags"
import Rating from  "../components/Rating"
import Collapse from  "../components/Collapse"
import Footer from  "../layout/Footer"
import logements from "../datas/logements.json"
import { useParams } from 'react-router-dom'

const Housing = () => {
    const { id } = useParams();
    const currentHousing = logements.find(housing => housing.title.toLowerCase().split(' ').join('_') === id)
    return (
        <>
            <Header />            
            <main>
                <div className="housing">
                    <div className="housing_slider">
                        <Slideshow 
                            key={id} 
                            slides={currentHousing.pictures}
                        />
                    </div>
                    <div className="housing_content">
                        <div className="content_header">
                            <h1 className="content_header--title">
                                {currentHousing.title}
                            </h1>
                            <div className="content_header--location">
                                {currentHousing.location}
                            </div>
                            <div className="content_header--tags">
                                {currentHousing.tags.map((el, index) => {
                                    return <Tags 
                                        key={index} 
                                        data={el}
                                    />
                                })}
                            </div>
                        </div>
                        <div className="content_body">
                            <div className="content_body--host">
                                <section className="content_body--namehost">
                                    {currentHousing.host.name}
                                </section>
                                <img 
                                    className="content_body--picturehost" 
                                    src={currentHousing.host.picture} 
                                    alt="nom du propriétaire"
                                />
                            </div>
                            <section className="content_body--rating">
                                <Rating 
                                    key={id} 
                                    rating={currentHousing.rating}
                                />
                            </section>  
                        </div>
                    </div>
                    <div className="housing_collapses">
                        <div className="housing_collapses--description">
                            <Collapse 
                                key={id} 
                                title="Description" 
                                text={currentHousing.description}
                            />
                        </div>
                        <div className="housing_collapses--equipments">
                            <Collapse 
                                key={id} 
                                title="Equipements" 
                                text={currentHousing.equipments.map((el, index) => {
                                    return <Tags 
                                        key={index} 
                                        data={el}
                                    />
                                })}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Housing