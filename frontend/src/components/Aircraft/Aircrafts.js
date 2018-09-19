import axios from "axios";
import React, { Component } from "react";
import AircraftCard from "./AircraftCard";
import NavBar from "../NavBar";

import TopHeader from '../TopHeader';

// change dev to false if you want axios to get request from heroku server
// set dev to true if you want to work on local machine
let dev = true;
let URL = (dev
  ? "http://127.0.0.1:8000/api"
  : "https://flightloggercs10.herokuapp.com/api" );
URL = "http://127.0.0.1:8000/api"

class Aircrafts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      openModal: false,
      data: [
        {
          id: "",
          man_type: "",
          tail_number: "",
          license_type: ""
        }
      ]
    };
  }
  componentDidMount() {
    let axiosconfig = {
      headers: {
        Authorization: "Token 155aa0ef77bafed25f791161ff5345b02ee1da3b"
      }
    };
    axios
      .get(`${URL}/aircraft/`)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Aircrafts">
      <TopHeader breadcrumb={[ 'aircraft' ]} rightLinks={[ { name: '#', value: 'View Total Hours' } ]} />
        <NavBar />
        {this.state.data.map(plane => {
          let id = plane.id;
          return (
            <div>
              <AircraftCard
                key={id}
                data={plane}
                props={this.props}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Aircrafts;