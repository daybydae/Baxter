import React from 'react';

class MarkerManager extends React.Component {
  constructor(map) {
    super(map);
    this.map = map;
    this.markers = {};

    this.createMarkerFromSitter = this.createMarkerFromSitter.bind(this);
  }

  updateMarkers(sitters) {

    sitters.forEach( (sitter) => {
      if (!this.markers[sitter.id]) {
        this.createMarkerFromSitter(sitter);
      }
    });
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
