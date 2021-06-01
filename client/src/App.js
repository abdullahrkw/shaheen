import Room from './components/Room/Room';
import Tiles from './components/Tiles/Tiles'
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        <Room />
        <Tiles />
     </div>
    );
  }
}

export default App;
