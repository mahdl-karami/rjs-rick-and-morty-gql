//? icons
import { FaRegBookmark } from "react-icons/fa6";
//? styles
import styles from "../styles/layout.module.css";
//? router
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.bookmark}>
        <Link to='/bookmarks'>
          <FaRegBookmark />
        </Link>
      </span>
      <h1>The Rick and Morty API</h1>
    </header>
  );
};

export default Header;
