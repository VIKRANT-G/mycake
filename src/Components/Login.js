import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  userDetail = {};

  getemail = (event) => {
    console.log(event.target.value);
    this.userDetail.email = event.target.value;
  };
  getpassword = (event) => {
    console.log(event.target.value);
    this.userDetail.password = event.target.value;
  };

  Click = (event) => {
    event.preventDefault();
    // toast("hello", this.userDetail);
    axios({
      method: "post",
      url: "https://apibyashu.herokuapp.com/api/login",
      data: this.userDetail,
    }).then(
      (res) => {
        console.log("response", res);
      },
      (err) => {
        // toast("error",err);
      }
    );
  };

  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              onChange={this.getemail}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">PASSWORD</label>
            <input
              type="password"
              name="pswd"
              class="form-control"
              onChange={this.getpassword}
              id="exampleInputPassword1"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.Click}>
            Submit
          </button>
          <br></br>
          <br></br>
          <Link to="/forgot">
            <button type="submit" class="btn btn-primary">
              Forgot password?
            </button>
          </Link>
          <Link to="/Signup">
            <button
              type="submit"
              style={{ color: "black", backgroundColor: "brown" }}
              class="btn btn-primary"
            >
              Signup
            </button>
          </Link>{" "}
        </form>
      </div>
    );
  }
}

export default Login;
