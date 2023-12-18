import ArrowLeftSlideshow from "../assets/Arrow-Left.svg"
import ArrowRightSlideshow from "../assets/Arrow-Right.svg"
import { useState } from "react"

const SlideShow = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const maxSlides = slides.length-1

    const previousSlide = () => {
    setCurrentIndex(currentIndex - 1)
    if (currentIndex === 0) setCurrentIndex(maxSlides)
    }

    const nextSlide = () => {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex === maxSlides) setCurrentIndex(0)
    }   

    return (        
        <article className="slideshow">
            { slides.length > 1 && <button 
                className="slideshow_arrow slideshow_arrow--left" 
                onClick={previousSlide}
            >
                <img 
                    src={ArrowLeftSlideshow} 
                    alt="précédent" 
                />
            </button>}            
            <img 
                className="slideshow_image" 
                src={slides[currentIndex]} 
                alt={slides[currentIndex].title}
            />
            { slides.length > 1 && <button 
                className="slideshow_arrow slideshow_arrow--right" 
                onClick={nextSlide}
            >
                <img 
                    src={ArrowRightSlideshow} 
                    alt="suivant" 
                />
            </button>}            
            <p className="slideshow_imageCounter">
                {currentIndex + 1}/{slides.length}
            </p>
        </article>        
    )
}
export default SlideShow