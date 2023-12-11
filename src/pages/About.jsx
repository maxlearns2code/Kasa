import Header from  "../layout/Header"
import Banner from  "../components/Banner"
import Collapse from  "../components/Collapse"
import Footer from  "../layout/Footer"
import AboutBanner from "../assets/Mountains.png"

const collapses = [
    {
        title: "Fiabilité",
        text: "Les annonces postées sur Kasa garantissent une fiabilité totale.\
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        title: "Respect",
        text: "La bienveillance fait partie des valeurs fondatrices de Kasa.\
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        text: "La bienveillance fait partie des valeurs fondatrices de Kasa.\
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Sécurité",
        text: "La sécurité est la priorité de Kasa.\
        Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.\
        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.\
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

const About = () => {
    return (
        <>
            <Header />            
            <main>
                <Banner img={AboutBanner} text={""} /> 
                <div className="collapse-container">
                    {collapses.map((el, index) => {
                        return <Collapse key={index} data={el}/>
                    })}
                </div>
            </main>
            <Footer />
        </>
    )
}
export default About