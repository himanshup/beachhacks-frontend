import React, { Component } from "react";
import Geolocation from "react-geolocation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Geolocation
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) => (
            <div>
              <button onClick={getCurrentPosition}>Get Position</button>
              {error && <div>{error.message}</div>}
              <pre>
                latitude: {latitude}
                longitude: {longitude}
              </pre>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
