//? redux
import { useDispatch } from "react-redux";
import { showMeState } from "./app/features/charectersSlice";
//? apollo-gql
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./gql/queries/getCharacters";

const App = () => {
  //! redux test
  const dispatch = useDispatch();
  dispatch(showMeState());
  //! apollo test
  const { loading, error, data } = useQuery(GET_CHARACTERS(1));
  console.log({ loading, data, error });
  return <div>App</div>;
};

export default App;
