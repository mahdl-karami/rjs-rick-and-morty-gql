//? apollo-gql
import { useQuery } from "@apollo/client";
import { GET_INFO } from "../gql/queries/getInfo";
//? icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaCode } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
//? style modules
import styles from "../styles/layout.module.css";
const { footer, flex, me, icons } = styles;

const Footer = () => {
  const { loading, error, data } = useQuery(GET_INFO);

  //! jsx
  return (
    <footer className={footer}>
      {/* //! loading */}
      {loading ? <p>loading</p> : null}
      {/* //! error */}
      {error ? <p>error</p> : null}
      {/* //! success */}
      {data ? (
        <div className={flex}>
          <p>characters : {data.characters.info.count}</p>
          <p>locations : {data.locations.info.count}</p>
          <p>episodes : {data.episodes.info.count}</p>
        </div>
      ) : null}
      <div className={flex + " " + icons}>
        <a href="https://github.com/mahdl-karami">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/mahdl.karami/">
          <FaInstagram />
        </a>
        <a href="mailto: mo.mahdi.ka@gmail.com">
          <MdOutlineAlternateEmail />
        </a>
      </div>
      <p className={me}>
        <FaCode />
        by
        <a href="#">Mahdi Karami</a>
        2024
      </p>
    </footer>
  );
};

export default Footer;
