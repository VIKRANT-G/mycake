import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

class forgot extends Component {
  constructor() {
    super();
    this.state = {};
  }

  userDetail = {};

  getemail = (event) => {
    // console.log(event.target.value); // for checking
    this.userDetail.email = event.target.value;
  };

  Click = (event) => {
    event.preventDefault();
    console.log("hello", this.userDetail);
    axios({
      method: "post",
      url: "https://apibyashu.herokuapp.com/api/recoverpassword", // api p userdetail ko bhej rhe h
      data: this.userDetail,
    }).then(
      (res) => {
        console.log("response", res);
      },
      (err) => {
        console.log("error", err);
      }
    );
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <h3>FORGOT PAGE</h3>

            <div class="form-group">
              <label for="exampleInputEmail1">EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                onChange={this.getemail}
                aria-describedby="emailHelp"
              ></input>
            </div>

            <Link to="/login">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={this.Click}
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default forgot;
