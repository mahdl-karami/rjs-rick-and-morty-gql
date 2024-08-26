//? styles
import styles from "../styles/pagination.module.css";

const Pagination = ({ info: { prev, next, pages }, setPage }) => {
  //! states
  const nextPage = next ? next : pages + 1;
  const activePage = nextPage - 1;
  const buttons = [activePage, nextPage, nextPage + 1, nextPage + 2];
  //! functions
  const clickHandler = (ev) => {
    const { nodeName, name, innerText } = ev.target;
    if (nodeName == "BUTTON") {
      if (!name) {
        setPage(innerText);
      }
      if (name) {
        if (name == "prev" && activePage > 1) {
          setPage((prevS) => +prevS - 1);
        }
        if (name == "next" && activePage < pages) {
          setPage((prevS) => +prevS + 1);
        }
      }
    }
  };
  return (
    <div className={styles.pagination} onClick={(ev) => clickHandler(ev)}>
      {/* //! prev */}
      <button name="prev" className={activePage == 1 ? styles.disable : null}>
        Prev
      </button>
      {/* //! 1 and 2 pages for comback */}
      {activePage >= 3 ? (
        <>
          <button>1</button>
          <button>2</button>
        </>
      ) : null}
      {/* //! dynamic nubmers */}
      {buttons.map((btn, index) => {
        if (btn < pages - 1) {
          return (
            <button className={activePage == btn ? styles.active : null} key={index}>
              {btn}
            </button>
          );
        }
      })}
      {/* //! two last page */}
      <button className={activePage == pages - 1 ? styles.active : null}>{pages - 1}</button>
      <button className={activePage == pages ? styles.active : null}>{pages}</button>
      {/* //! next */}
      <button name="next" className={activePage == pages ? styles.disable : null}>
        next
      </button>
    </div>
  );
};

export default Pagination;
