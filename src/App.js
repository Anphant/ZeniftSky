import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Generate from "./pages/Generate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/generate">
            <Generate />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
