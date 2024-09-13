//? hooks
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
//? apollo-gql
import { getEpisodes } from "../gql/queries/getEpisodes";
//? components
import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";
//? styles
import cardS from "../styles/card.module.css";
//? redux
import { getLocalIds } from "../app/features/bookmarkSlice";
import { useDispatch, useSelector } from "react-redux";

const Episodes = () => {
  const id = useParams()?.epId;
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
  const { loading, error, data } = useQuery(getEpisodes(id));
  return (
    <div>
      <h2 className="title">Episode : {data?.episode?.name}</h2>
      {loading ? <Loading /> : null}
      {error ? <p>error</p> : null}
      {data ? (
        <>
          <div className="characters">
            {data.episode.characters.map((character, index) => (
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

export default Episodes;
