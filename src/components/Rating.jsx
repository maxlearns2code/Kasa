import StarColor from "../assets/Star-Color.svg"
import StarGrey from "../assets/Star-Grey.svg"

export default function Rating({ rating }) {
  const convertToStars = (num) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= num) {
        stars.push(<img className="star" key={i} src={StarColor} alt="star" />)
      } else {
        stars.push(<img className="star" key={i} src={StarGrey} alt="star" />)
      }
    }

    return stars;
  };

  return (
    <>
      {convertToStars(rating)}
    </>
    
  );
}