import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class Signup extends Component {
    constructor() {
        super()
        this.state = {
          
        }
    }

    userDetail = {}

    getemail = (event) =>{
        console.log(event.target.value);
       this.userDetail.email= event.target.value;
    } 

    getname =(event)=> {
        console.log(event.target.value);
       this.userDetail.name= event.target.value;
    }

    getpassword =(event)=> {
        console.log(event.target.value);
       this.userDetail.password= event.target.value;
    }
   
    
   
     
    register = (e) => {
        e.preventDefault()
        console.log(this.userDetail);
        axios({
            method:"post",
            url:"https://apibyashu.herokuapp.com/api/register",
            data:this.userDetail
        }).then((res)=>{
            console.log("response",res);
        },(err)=>{
            console.log("error",err);
        })
    }
     
    render() {
        return (
            <div>  
                 <div>
                <form >
                <h3 >Signup</h3>
            <div class="form-group">
            <label for="exampleInputEmail1">EMAIL ADDRESS</label>
            <input type="email"  name="email" class="form-control" onChange={this.getemail} id="exampleInputEmail1" aria-describedby="emailHelp"></input>   
            </div>

            <div class="form-group">
            <label for="exampleInputEmail1">NAME</label>
            <input type="text"  name="name" class="form-control"  onChange={this.getname}id="exampleInputEmail1" aria-describedby="emailHelp"></input>   
            </div>
                        
            <div class="form-group">
            <label for="exampleInputPassword1">PASSWORD</label>                        
            <input type="password" name="pswd" class="form-control"  onChange={this.getpassword} id="exampleInputPassword1"></input>
            </div>  
                  <button type="submit" class="btn btn-primary" onClick={this.register}>Submit</button>                   
                    
        </form> 

            </div>
      
            </div>
        )
    }
}

export default Signup;
