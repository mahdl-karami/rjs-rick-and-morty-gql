//? redux
import { useDispatch } from "react-redux";
import { showMeState } from "./app/features/bookmarkSlice";
//? apollo-gql
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./gql/queries/getCharacters";
import CharacterCard from "./components/CharacterCard";

const App = () => {
  //! redux test
  const dispatch = useDispatch();
  dispatch(showMeState());
  //! apollo test
  const { loading, error, data } = useQuery(GET_CHARACTERS(1));
  console.log({ loading, data, error });
  return (
    <div>
      <h3>All Characters</h3>
      {loading ? <p>loading</p> : null}
      {error ? <p>error</p> : null}
      {data ? (
        <>
          {data.characters.results.map((character, index) => (
            <div key={index}>
              <CharacterCard character={character} />
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default App;
