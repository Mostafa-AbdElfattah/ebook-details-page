import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/Routes";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Layout>{Routes}</Layout>
    </Router>
  );
};

export default App;
