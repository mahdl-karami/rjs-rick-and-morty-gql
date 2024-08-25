//? icons
import { FaRegBookmark } from "react-icons/fa6";
//? styles
import styles from "../styles/layout.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.bookmark}> 
        <FaRegBookmark />
      </span>
      <h1>The Rick and Morty API</h1>
    </header>
  );
};

export default Header;
