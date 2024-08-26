import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { getCharactersById } from "../gql/queries/getCharactersById";
import CharacterCard from "../components/CharacterCard";
import cardS from "../styles/card.module.css";

const Bookmarks = () => {
  const { ids } = useSelector((state) => state.bookmarks);
  //! apollo client
  if (ids.length) {
    var { loading, error, data } = useQuery(getCharactersById(ids));
  }
  console.log(data);
  return (
    <div>
      <h2 className="title">Bookmarked Characters</h2>
      {loading ? <p>loading</p> : null}
      {error ? <p>error</p> : null}
      {data ? (
        <>
          <div className="characters">
            {data.charactersByIds.map((character, index) => (
              <div key={index} className={cardS.card}>
                <CharacterCard character={character} />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Bookmarks;
