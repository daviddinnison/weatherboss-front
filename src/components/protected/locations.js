import React from "react";
import { connect } from "react-redux";
import Spinner from "../unprotected/spinner";

import requiresLogin from "../requires-login";
import RenderedLocation from "./forecast/rendered-location";
import ApiAttribution from "../unprotected/api-attribution";
import NewUser from "./new-user";

import { fetchLocations } from "../../actions/forecast";

import "./styles/locations.css";

export class Locations extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchLocations(this.props.id));
  }

  renderLocations() {
    if (this.props.loading) {
      return (
        <div className="location-loader">
          <Spinner />
        </div>
      );
    } else if (this.props.locations.length === 0) {
      return <NewUser />;
    } else {
      const locationsData = this.props.locations.map((item, index) => (
        <li key={item._id} className="single-location gradient">
          <RenderedLocation name={item.name} locationId={item._id} />
        </li>
      ));
      return (
        <div className="locations">
          <ul>{locationsData}</ul>
          <ApiAttribution />
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderLocations()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.currentUser.username,
    id: state.auth.currentUser.id,
    locations: state.forecast.locations,
    loading: state.forecast.loading.fetchLocations
  };
};

export default requiresLogin()(connect(mapStateToProps)(Locations));
