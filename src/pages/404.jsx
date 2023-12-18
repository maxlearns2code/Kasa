import Header from  "../layout/Header"
import Error from  "../components/Error"
import Footer from  "../layout/Footer"

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