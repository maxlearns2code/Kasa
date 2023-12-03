import Header from  "../layout/Header"
import Footer from  "../layout/Footer"
import Error from  "../components/Error"

const Errorpage = () => {
    return (
        <div className="404">
            <Header />            
            <main>
                <Error />
            </main>
            <Footer />
        </div>
    )
}
export default Errorpage