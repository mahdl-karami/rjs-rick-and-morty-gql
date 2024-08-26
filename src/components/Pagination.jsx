import { useState } from "react";

const Pagination = ({ info }) => {
  const { pages, next, prev } = info;
  const nextPage = next ? next : pages + 1;
  const [buttons, setButtons] = useState([nextPage - 1, nextPage, nextPage + 1, nextPage + 2]);
  return (
    <div>
      <button>Prev</button>
      {buttons.map((btn) => (btn <= pages - 2 ? <button>{btn}</button> : null))}
      {nextPage - 1 < 42 ? <button>{pages - 1}</button> : null}
      <button>{pages}</button>
      <button>Next</button>
    </div>
  );
};
7;
export default Pagination;
