import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Common.css"

const Star = ({ stars, reviews }) => {
  const ratingStars = Array.from({ length: 5 }, (currEle, index) => {
    //index = #01234 
    let halfStar = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1
          ? <FaStar className="start_icon" />
          : stars >= halfStar
          ? <FaStarHalfAlt className="start_icon" />
          : <AiOutlineStar className="start_icon" />}
      </span>
    );
  });

  return (
<>
  <div className="start_icons_section">
    {ratingStars}
    <p>({reviews} customer reviews)</p>
 </div>
</>
);
};

export default Star;
