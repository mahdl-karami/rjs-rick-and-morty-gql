//? styles
import styles from "../styles/pagination.module.css";
const Pagination = ({ info }) => {
  //! states
  const { pages, next, prev } = info;
  const nextPage = next ? next : pages + 1;
  const buttons = [nextPage - 1, nextPage, nextPage + 1, nextPage + 2];
  return (
    <div className={styles.pagination}>
      <button className={!prev ? styles.disable : null}>Prev</button>
      {buttons.map((btn) => (btn <= pages - 2 ? <button>{btn}</button> : null))}
      {nextPage - 1 < 42 ? <button>{pages - 1}</button> : null}
      <button>{pages}</button>
      <button className={!next ? styles.disable : null}>Next</button>
    </div>
  );
};
7;
export default Pagination;
