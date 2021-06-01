import React from 'react';
import './Room.css'

class Room extends React.Component {
    state = {room: "/assets/rooms/1.png"}
    render() {
        return (
            <div className="Room">
                <img src={this.state.room} className="room-img" alt="rooms" />
            </div>
        );
    }
}

export default Room;
