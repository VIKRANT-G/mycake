import { useState, useEffect } from "react";
import Cake from "./Cake";

import queryString from "query-string";
import axios from "axios";

function Search(props) {
  var [cakeresult, setCakes] = useState([]);
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apibyashu.herokuapp.com/api/searchcakes?q=" + query.q;
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        // console.log("search api", response.data);
        setCakes(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [query.q]);

  return (
    <div>
      <div className="row">
        {cakeresult.map((each) => {
          return <Cake cakedata={each} />;
        })}
      </div>
    </div>
  );
}

export default Search;

/*const queryString = require('query-string');

console.log(location.search);
//=> '?foo=bar'

const parsed = queryString.parse(location.search);
console.log(parsed);
//=> {foo: 'bar'}

console.log(location.hash);
//=> '#token=bada55cafe'

const parsedHash = queryString.parse(location.hash);
console.log(parsedHash);
//=> {token: 'bada55cafe'}

parsed.foo = 'unicorn';
parsed.ilike = 'pizza';

const stringified = queryString.stringify(parsed);
//=> 'foo=unicorn&ilike=pizza'

location.search = stringified;
// note that `location.search` automatically prepends a question mark
console.log(location.search);
//=> '?foo=unicorn&ilike=pizza'*/
/*
In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component. The state can be initialized by props. For example, a parent component might include a child component by calling.*/
