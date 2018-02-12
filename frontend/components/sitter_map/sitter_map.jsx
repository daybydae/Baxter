import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class SitterMap extends React.Component {
  constructor(props) {
    super(props);

    this.updateBounds = this.updateBounds.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.751383, lng: -73.983946 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.map.addListener('idle', this.updateBounds);
  }

  updateBounds() {
    let latLngBounds = this.map.getBounds();

    let ne = latLngBounds.getNorthEast();
    let sw = latLngBounds.getSouthWest();

    this.props.updateFilter('bounds', {
      north: ne.lat(),
      east: ne.lng(),
      south: sw.lat(),
      west: sw.lng()
    });
  }

  componentWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.sitters);
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>

      </div>
    );
  }
}

export default withRouter(SitterMap);
