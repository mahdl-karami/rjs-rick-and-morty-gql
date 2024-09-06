//? redux
import { useDispatch, useSelector } from "react-redux";
import { getLocalIds } from "./app/features/bookmarkSlice";
//? apollo-gql
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./gql/queries/getCharacters";
import CharacterCard from "./components/CharacterCard";
//? style modules
import cardS from "./styles/card.module.css";
//? components
import Pagination from "./components/Pagination";
//? hooks
import { useEffect, useState } from "react";

const App = () => {
  //! states
  const [page, setPage] = useState(1);
  //! redux
  const { ids } = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();
  //! localstorage
  useEffect(() => {
    if (!ids?.length) {
      dispatch(getLocalIds(JSON.parse(localStorage.getItem("ids"))));
    }
  }, []);
  //! apollo client
  const { loading, error, data } = useQuery(GET_CHARACTERS(page));
  return (
    <div>
      <h2 className="title">All Characters</h2>
      {loading ? <p>loading</p> : null}
      {error ? <p>error</p> : null}
      {data ? (
        <>
          <div className="characters">
            {data.characters.results.map((character, index) => (
              <div key={index} className={cardS.card}>
                <CharacterCard character={character} />
              </div>
            ))}
          </div>
          <Pagination info={data.characters.info} setPage={setPage} />
        </>
      ) : null}
    </div>
  );
};

export default App;
