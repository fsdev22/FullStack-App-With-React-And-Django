import CustomForm from "./Components/CustomForm";
import {MemoryRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import FinalPage from './Components/FinalPage'
function App() {
  return (
    <>
      <main>
        <Router initialEntries={["/home", "/finalpage"]}>
        <Switch>
          <Route path={"/"} exact>
            <Redirect to={"/home"} />
          </Route>
          <Route path={"/home"} >
            <CustomForm />
          </Route>
          <Route path={"/finalpage"} >
            <FinalPage/>
          </Route>
        </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
