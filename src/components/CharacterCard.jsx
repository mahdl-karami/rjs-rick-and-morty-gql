//? style modules
import styles from "../styles/card.module.css";
const { flex, align, fade, bookmark, bookmarked } = styles;
//? icons
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
//? router
import { Link } from "react-router-dom";
//? hooks
import { useDispatch, useSelector } from "react-redux";
//? actions
import { add, remove } from "../app/features/bookmarkSlice";

const CharacterCard = ({ character }) => {
  //! props
  const { id, name, image, status, species, location, episode } = character;
  //! redux
  const { ids } = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();
  //! states
  const isBookmarked = ids.filter((value) => value == id);
  //! functions
  const bookmarkHandler = () => {
    if (isBookmarked?.length) {
      dispatch(remove(id));
    } else {
      dispatch(add(id));
    }
  };
  return (
    <>
      <span className={bookmark + ` ${isBookmarked.length ? bookmarked : ""}`} onClick={(ev) => bookmarkHandler()}>
        {isBookmarked?.length ? <FaBookmark /> : <FaRegBookmark />}
      </span>
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
          <Link to={`/locations/${location?.id}`}>{location.name}</Link>
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
