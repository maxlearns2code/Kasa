import { useLoaderData, redirect } from 'react-router-dom';
import Slideshow from  "../components/Slideshow"
import Tags from  "../components/Tags"
import Rating from  "../components/Rating"
import Collapse from  "../components/Collapse"

import logements from "../datas/logements.json"


export async function loader({params}) {
    const currentHousing = logements.find(apartment => apartment.title.toLowerCase().split(' ').join('_')
    === params.id)
    // si l'id n'existe pas, on redirige vers la page 404
    if (!currentHousing) {
      redirect('/404')
    }else{
        // sinon on retourne le logement
        return { currentHousing };

    }
  }

const Housing = () => {
    const { currentHousing } = useLoaderData()
    return (
        <main>
            <div className="housing">
                <div className="housing_slider">
                    <Slideshow
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
                                rating={currentHousing.rating}
                            />
                        </section>  
                    </div>
                </div>
                <div className="housing_collapses">
                    <div className="housing_collapses--description">
                        <Collapse
                            title="Description" 
                            text={currentHousing.description}
                        />
                    </div>
                    <div className="housing_collapses--equipments">
                        <Collapse
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
    )
}
export default Housing