//? hooks
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
//? apollo-gql
import { getLocation } from "../gql/queries/getLocation";
//? components
import CharacterCard from "../components/CharacterCard";
//? styles
import cardS from "../styles/card.module.css";
//? redux
import { getLocalIds } from "../app/features/bookmarkSlice";
import { useDispatch, useSelector } from "react-redux";

const Locations = () => {
  const id = useParams()?.locId;
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
