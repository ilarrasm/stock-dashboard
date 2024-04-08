import { BrowserRouter } from "react-router-dom";
import Routing from "./components/routes/routing";
import DefaultLayout from "./components/organism/DefaultLayout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routing />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
