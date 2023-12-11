import Header from  "../layout/Header"
import Slideshow from  "../components/Slideshow"
import Tags from  "../components/Tags"
import Collapse from  "../components/Collapse"
import Footer from  "../layout/Footer"
import logements from "../datas/logements.json"
import { useParams } from 'react-router-dom'

const Housing = () => {
    const { id } = useParams();
    const currentHousing = logements.find(apartment => apartment.id === id)
    return (
        <>
            <Header />            
            <main>
                <div className="housing">
                    <div className="housing_slider">
                        <Slideshow key={id} slides={currentHousing.pictures}/>
                    </div>
                    <div className="housing_content">
                        <div className="content_header">
                            <h1 className="content_header--title">{currentHousing.title}</h1>
                            <p className="content_header--location">{currentHousing.location}</p>
                        </div>
                        <div className="content_body">
                            <section className="content_body--namehost">{currentHousing.host.name}</section>
                            <img className="content_body--picturehost" src={currentHousing.host.picture} alt="nom du propriétaire"/>     
                        </div>
                    </div>
                    <div className="housing_tagsrating">
                        <div className="housing_tagsrating--tags">
                            {currentHousing.tags.map((el, index) => {
                                return <Tags key={index} data={el}/>
                            })}
                        </div>
                        <section className="housing_tagsrating--rating">{currentHousing.rating}</section>
                    </div>
                    <div className="housing_collapses">
                        <div className="housing_collapses--description">
                            
                        </div>
                        <div className="housing_collapses--equipements">
                            
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Housing