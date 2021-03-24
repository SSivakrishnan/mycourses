import "./App.css";
import "./preview.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Coursepage from "./components/coursepage";
import Previewpage from "./components/previewpage";

function App() {
  //console.log("date....", new Date(1999, 9, 7, 0, 0, 0, 0));
  // const state1 = useSelector((state) => state);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Coursepage} />
        <Route path="/previewpage/" component={Previewpage} />
      </Router>
    </div>
  );
}

export default App;
