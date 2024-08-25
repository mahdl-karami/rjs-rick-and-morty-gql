import { useDispatch } from "react-redux";
import { showMeState } from "./app/features/charectersSlice";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./gql/queries/getCharacters";

const App = () => {
  const dispatch = useDispatch();
  dispatch(showMeState());
  const { loading, error, data } = useQuery(GET_CHARACTERS(1));
  console.log({ loading, data, error });
  return <div>App</div>;
};

export default App;
