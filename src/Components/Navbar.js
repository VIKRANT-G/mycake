import { Component } from "react";
import { Link } from "react-router-dom";
// import { POSITION } from "react-toastify/dist/utils";
import { cakes } from "./Data";
import Cart from "./Cart";

var cart =
  "https://media.istockphoto.com/vectors/shopping-cart-icon-vector-id1128229893?s=612x612";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchtext: undefined,
    };
  }
  searchtext;
  getsearchText = (event) => {
    //
    this.searchtext = event.target.value;
    this.setState({
      searchtext: this.searchtext,
    });
  };

  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light"
          style={{ POSITION: "sticky" }}
        >
          <Link to="/Home">
            <a class="navbar-brand" href="#">
              My CAkes
            </a>
          </Link>
          {/* <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              {/* <li class="nav-item active">
                <Link to="/Home">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>{" "}
                </Link>
              </li> */}
              {/* <li class="nav-item">
                <Link to="/Data">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </Link> */}
              {/* </li> */}
              <li class="nav-item dropdown">
                {/* <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a> */}
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item">
                {/* <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a> */}
              </li>
            </ul>
            <Link to="/Cart">
              <button class="Cart-btn">Cart</button>{" "}
            </Link>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                onChange={this.getsearchText}
                placeholder="Search"
                aria-label="Search"
              ></input>
              <Link to={`/Search?q=${this.searchtext}`}>
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </Link>
              <Link to="/Login">
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Login
                </button>
              </Link>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
