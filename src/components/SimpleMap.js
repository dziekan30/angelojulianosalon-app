import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from 'react-bootstrap';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.87,
      lng: 87.62
    },
    zoom: 7
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <Container>
        <div style={{ height: '50vh', width: '50%' }}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={41.8781}
              lng={87.6298}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>

      </Container>
    );
  }
}

export default SimpleMap;