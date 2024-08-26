//? icons
import { FaRegBookmark } from "react-icons/fa6";
//? styles
import styles from "../styles/layout.module.css";
//? router
import { Link } from "react-router-dom";
//? hooks
import { useSelector } from "react-redux";

const Header = () => {
  const { ids } = useSelector((state) => state.bookmarks);
  return (
    <header className={styles.header}>
      <span className={styles.bookmark}>
        <Link to="/bookmarks">
          <FaRegBookmark />
        </Link>
      </span>
      {ids?.length ? <span className={styles.count}>{ids.length}</span> : null}
      <h1>The Rick and Morty API</h1>
    </header>
  );
};

export default Header;
