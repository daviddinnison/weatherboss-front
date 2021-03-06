import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../../requires-login";
import Spinner from "../../unprotected/spinner";

import RenderedAlert from "./rendered-alert";

import { getAlert } from "../../../actions/forecast";

import "./styles/forecast-alert.css";

export class ForecastAlert extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAlert(this.props.name));
  }

  renderAlert() {
    if (this.props.loading) {
      return (
        <div className="loader">
          <Spinner/>
        </div>
      );
    } else {
      if (this.props.alert.length > 0) {
        const alerts = this.props.alert.map((item, index) => (
          <RenderedAlert text={item} key={index}/>
        ));
        return (
          <div className="alerts">
            <ul>{alerts}</ul>
          </div>
        );
      } else {
        return <div className="no-alerts">No weather alerts.</div>;
      }
    }
  }

  render() {
    return <div>{this.renderAlert()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    id: state.auth.currentUser.id,
    locations: state.protectedData.locations,
    alert: state.forecast.alert,
    loading: state.forecast.alert.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(ForecastAlert));
