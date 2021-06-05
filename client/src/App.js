import Room from './components/Room/Room';
import Tiles from './components/Tiles/Tiles'
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {id: "1", path: "/assets/rooms/1.jpg"},
      tilesVisibility: false,
      isRoomLoading: false
    }

    this.updateRoom = this.updateRoom.bind(this);
    this.makeTilesVisible = this.makeTilesVisible.bind(this);
  }

  updateRoom(newTildId) {
    this.setState({isRoomLoading: true});
    axios.post("/decor", {
      tileId: newTildId, 
      roomId: this.state.room.id,
      state: [],
      regionId: "1" //hardcoded for floor for now
    }).then(res => {
      setTimeout(()=>{}, 2000)
      this.setState({
        room: {path: res.data.url, id: "1"},
        tilesVisibility: false,
        isRoomLoading: false
      });
    });
  }

  makeTilesVisible() {
    this.setState({tilesVisibility: true})
  }

  render() {
    return (
      <div>
        <Room makeTilesVisible={this.makeTilesVisible} isLoading={this.state.isRoomLoading} room={this.state.room.path}/>
        <Tiles visible={this.state.tilesVisibility} updateRoom={this.updateRoom}/>
     </div>
    );
  }
}

export default App;
