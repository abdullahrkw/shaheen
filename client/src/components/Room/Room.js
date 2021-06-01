import React from 'react';

import './Room.css'


function Room() {
    const rooms = ["/assets/rooms/1.png"]
    return (
        <div className="Room">
            <img src={rooms[0]} className="room-img" alt="rooms" />
        </div>
    );
}

export default Room;
