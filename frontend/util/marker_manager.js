import React from 'react';

class MarkerManager extends React.Component {
  constructor(map) {
    super(map);
    this.map = map;
    this.markers = {};

    this.createMarkerFromSitter = this.createMarkerFromSitter.bind(this);
  }

  updateMarkers(sitters) {

    const sittersObj = {};

    sitters.forEach( (sitter) => {
      sittersObj[sitter.id] = sitter;
    });

    sitters.forEach( (sitter) => {
      if (!this.markers[sitter.id]) {
        this.createMarkerFromSitter(sitter);
      }
    });

    Object.keys(this.markers)
      .filter(sitterId => !sittersObj[sitterId])
      .forEach((sitterId) => this.removeMarker(this.markers[sitterId]));

  }

  removeMarker(marker) {
    this.markers[marker.sitterId].setMap(null);
    delete this.markers[marker.sitterId];
  }

  createMarkerFromSitter(sitter) {
    const position = new google.maps.LatLng(sitter.lat, sitter.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      sitterId: sitter.id
    });
    this.markers[marker.sitterId] = marker;
  }
}

export default MarkerManager;
