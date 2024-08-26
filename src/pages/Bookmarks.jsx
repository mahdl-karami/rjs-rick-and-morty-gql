//? hooks
import { useQuery } from "@apollo/client";
//? apollo-gql
import { getCharactersById } from "../gql/queries/getCharactersById";
//? components
import CharacterCard from "../components/CharacterCard";
//? styles
import cardS from "../styles/card.module.css";

const Bookmarks = () => {
  //! get ids from localstorage
  let ids = JSON.parse(localStorage.getItem("ids"));
  //! apollo client
  if (ids?.length) {
    var { loading, error, data } = useQuery(getCharactersById(ids));
  }
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
