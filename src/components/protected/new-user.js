import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { Link } from "react-router-dom";

import "./styles/new-user.css";
import phone from "./images/phone.svg";

// import {
//     validateLocation,
//     clearValidateLocationError
//   } from "../../actions/users";

export class NewUser extends React.Component {
  // addPresetLocations(input) {
  //   let locations = [];
  //   switch (input) {
  //     case "usa":
  //       locations = ["New York, NY", "Washington, DC"];
  //       break;
  //     case "europe":
  //       locations = ["London, England", "Berlin, Germany"];
  //       break;
  //   }
  //   for (let i = 0; i < locations.length; i++) {
  //     this.props.dispatch(validateLocation(this.props.id, locations[i]));
  //   }
  // }

  render() {
    // if (this.props.locations.length !== 0) {
    //     return <Redirect to="/dashboard" />;
    //   }
    return (
      <div className="new-user container">
        <div className="row">
          <div className="col-sm-6">
            <p>
              Welcome to WeatherBoss, <span className="new-user-emphasis">{this.props.username}</span>! Add some locations
              to get started.
            </p>
            <Link to="/newlocation" className="new-user-add-location">
              Add locations
            </Link>
          </div>
          <div className="col-sm-6 new-user-img">
            <img src={phone} className="img-responsive" alt="cartoon cell phone with weather icons"/>
            <span className="attribution">
              {" "}
              Design Credits:{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.vecteezy.com">
                Vecteezy!
              </a>
            </span>
          </div>
          {/* <ul>
          <li onClick={() => this.addPresetLocations("usa")}>USA</li>
          <li onClick={() => this.addPresetLocations("europe")}>Europe</li>
        </ul> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.auth.currentUser.id,
    locations: state.forecast.locations,
    redirect: state.protectedData.redirect,
    username: state.auth.currentUser.username
  };
};

export default requiresLogin()(connect(mapStateToProps)(NewUser));
