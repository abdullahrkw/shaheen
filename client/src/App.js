import Room from './components/Room/Room';
import Tiles from './components/Tiles/Tiles'
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {id: "1", path: "/assets/rooms/1.png"}
    }

    this.updateRoom = this.updateRoom.bind(this);
  }

  updateRoom(newTildId) {
    axios.post("/decor", {
      tileId: newTildId, 
      roomId: this.state.room.id,
      state: [],
      regionId: "1" //hardcoded for floor for now
    }).then(res => {
      console.log(res, " found");
      this.setState({
        room: {path: res.data.url, id: "1"}
      });
    });
  }

  render() {
    return (
      <div>
        <Room room={this.state.room.path}/>
        <Tiles updateRoom={this.updateRoom}/>
     </div>
    );
  }
}

export default App;
