import { Component } from "react";
import { Link } from "react-router-dom";

class Cake extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="card" style={{ width: "15rem", margin: "1rem" }}>
          <img
            style={{ height: "15em" }}
            src={this.props.cakedata.image}
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">{this.props.cakedata.name}</h5>
            <p class="card-text">Rs{this.props.cakedata.price}</p>
            <Link to="./Cart">
              <button class="cart-btn">Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cake;
