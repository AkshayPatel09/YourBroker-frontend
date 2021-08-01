import logo from "./logo.svg";
import { Route, Switch, Link, Redirect, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Option from "./Components/Option/Option";
import Divider from "./Components/Divider/Divider";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      
      <Switch>
        <Route exact path="/signin" component={Form}></Route>
      </Switch>

      <Divider type="Orange white" />
      <Option title="For Rent" />
      <Divider type="White Orange" />
      <Option title="For Sale" />
      <Divider type="Orange white" />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
