import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log("got position", pos);
        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
};
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      display: "inline-block",
      border: "1px solid black",
      backgroundColor: "lightblue"
    }}
  >
    {" "}
    <span style={{}}>{text}</span>
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.414,
      lng: -68.5867
    },
    zoom: 16
  };

  render() {
    let key = 0;
    let locations = [
      { lat: 44.414, lng: -68.5867, msg: "loc1" },
      { lat: 44.415, lng: -68.5867, msg: "loc2" }
    ];
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAEBRCMAydszvRzOrtAkhOZuSAqApW_xFQ"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {locations.map(loc => (
            <AnyReactComponent
              key={key++}
              lat={loc.lat}
              lng={loc.lng}
              text={loc.msg}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
