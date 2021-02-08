import NavBar from "./UI/NavBar"
import {BrowserRouter} from "react-router-dom";
import useRoutes from "./routes";

function App() {
    const routes = useRoutes(true)

  return (
    <div>
      <BrowserRouter>
          <NavBar />
          {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
