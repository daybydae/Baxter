import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class SitterMap extends React.Component {
  componentDidMount() {

    const mapOptions = {
      center: { lat: 40.751383, lng: -73.983946 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
    
    this.MarkerManager.updateMarkers(this.props.sitters);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.sitters);
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>

      </div>
    );
  }
}

export default withRouter(SitterMap);
