import { render } from "@testing-library/react";
import Carousel from "./Carousel";
import Cake from "./Cake";
import { Component } from "react";
import cakes from "./Data";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cakes: [], // blank cake
    };
  }

  componentDidMount() {
    let apiurl = "https://apibyashu.herokuapp.com/api/allcakes";
    axios({
      url: apiurl,
      method: "get",
    }).then(
      (response) => {
        console.log("response", response.data);
        this.setState({
          cakes: response.data.data, // data goes in cakes
        });
      },
      (error) => {
        console.log("error from all cakes api", error);
      }
    );
  }

  render() {
    //////An element describes what you want to see on the screen:///
    return (
      <div>
        <Carousel></Carousel>
        <div style={{ margin: "0" }} className="row">
          {this.state.cakes.map((each, index) => {
            return <Cake cakedata={each} />; // Cake tag hai cakedata ek variable banaya.
          })}
        </div>
      </div>
    );
  }
}

export default Home;
