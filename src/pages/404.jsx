import Header from  "../layout/Header"
import Footer from  "../layout/Footer"
import Error from  "../components/Error"

const Errorpage = () => {
    return (
        <>
            <Header />            
            <main>
                <Error />
            </main>
            <Footer />
        </>
    )
}
export default Errorpage