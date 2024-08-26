//? redux
import { useDispatch } from "react-redux";
import { showMeState } from "./app/features/bookmarkSlice";
//? apollo-gql
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./gql/queries/getCharacters";
import CharacterCard from "./components/CharacterCard";
//? style modules
import cardS from "./styles/card.module.css";
import Pagination from "./components/Pagination";
import { useState } from "react";

const App = () => {
  //! states
  const [page, setPage] = useState(1);
  //! redux test
  const dispatch = useDispatch();
  dispatch(showMeState());
  //! apollo test
  const { loading, error, data } = useQuery(GET_CHARACTERS(page));
  console.log({ loading, data, error });
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
