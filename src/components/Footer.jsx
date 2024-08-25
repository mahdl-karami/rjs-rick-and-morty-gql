import { useQuery } from "@apollo/client";
import { GET_INFO } from "../gql/queries/getInfo";

const Footer = () => {
  const { loading, error, data } = useQuery(GET_INFO);

  console.log({ loading, error, data });
  if (loading) <h1>loading</h1>;
  if (error) <h1>{error}</h1>;
  if (data) {
    return (
      <footer>
        <div>
          <p>characters : {data.characters.info.count}</p>
          <p>locations : {data.locations.info.count}</p>
          <p>episodes : {data.episodes.info.count}</p>
        </div>
        <div>
          <span>github</span>
          <span>ig</span>
          <span>email</span>
        </div>
        <p>
          <span>icon </span>
          by
          <a href="#">Mahdi Karami</a>
          2024
        </p>
      </footer>
    );
  }
};

export default Footer;
