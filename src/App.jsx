import { useDispatch } from "react-redux";
import { showMeState } from "./app/features/charectersSlice";

const App = () => {
  const dispatch = useDispatch();
  dispatch(showMeState());
  return <div>App</div>;
};

export default App;
