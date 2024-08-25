//? style modules
import styles from "../styles/card.module.css";
const { flex, align, fade, bookmark } = styles;
//? icons
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
//? router
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const bookmarked = false;
  const { id, name, image, status, species, location, episode } = character;
  return (
    <>
      <span className={bookmark + " " + bookmarked}>{bookmarked ? <FaBookmark /> : <FaRegBookmark />}</span>
      <img src={image} alt={name + " image"} />
      <div className={flex}>
        <span>
          <h2>{name}</h2>
          <p className={align}>
            <span className={status.toLowerCase()}>
              <FaCircle />
            </span>
            {status} - {species}
          </p>
        </span>
        <span>
          <p className={fade}>Last known location:</p>
          <Link to={`/`}>{location.name}</Link>
        </span>
        <span>
          <p className={fade}>First seen in:</p>
          <Link to={`/`}>{episode[0].name}</Link>
        </span>
      </div>
    </>
  );
};

export default CharacterCard;
