//? hooks
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
//? apollo-gql
import { getLocation } from "../gql/queries/getLocation";
//? components
import CharacterCard from "../components/CharacterCard";
//? styles
import cardS from "../styles/card.module.css";

const Locations = () => {
  const id = useParams()?.locId;
  //! apollo client
  const { loading, error, data } = useQuery(getLocation(id));
  return (
    <div>
      <h2 className="title">{data?.location?.name}</h2>
      {loading ? <p>loading</p> : null}
      {error ? <p>error</p> : null}
      {data ? (
        <>
          <div className="characters">
            {data.location.residents.map((character, index) => (
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

export default Locations;
