import React from "react";
import { connect } from "react-redux";
import Spinner from "../../unprotected/spinner";

import requiresLogin from "../../requires-login";

import { fetchLocations } from "../../../actions/forecast";
import { deleteLocation } from "../../../actions/users";

import "./styles/edit-locations.css";

export class EditLocations extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchLocations(this.props.id));
  }

  deleteItem(locationId) {
    this.props.dispatch(deleteLocation(this.props.id, locationId));
  }

  renderLocationsEdit() {
    if (this.props.loading) {
      return (<div className="edit-location-loader">
      <Spinner/>
    </div>);
    } else {
      const locationsData = this.props.locations.map((item, index) => (
        <li key={item._id}>
          <button
            onClick={() => {
              if (
                window.confirm(
                  `Are you sure you wish to delete ${
                    item.name
                  } from your list of saved locations?`
                )
              )
                this.deleteItem(item._id);
            }}
          >
            <span className="glyphicon glyphicon-trash" aria-hidden="true" />
          </button>
          <span className="edit-locations-location-name">{item.name}</span>
        </li>
      ));

      return (
        <div>
          <ul>{locationsData}</ul>
        </div>
      );
    }
  }

  render() {
    const noLocations = (
      <span className="edit-locations-none">No locations saved.</span>
    );
    return (
      <div className="edit-locations">
        {this.props.locations.length > 0 ? <h1>Edit locations</h1> : noLocations}
        {this.renderLocationsEdit()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.forecast.locations,
    id: state.auth.currentUser.id,
    loading: state.forecast.loading.fetchLocations
  };
};

export default requiresLogin()(connect(mapStateToProps)(EditLocations));
