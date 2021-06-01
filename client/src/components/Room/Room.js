import React from 'react';
import './Room.css'

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            room: this.props.room
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            room: props.room
        });
    }

    render() {
        return (
            <div className="Room">
                <img src={this.state.room} className="room-img" alt="rooms" />
            </div>
        );
    }
}

export default Room;
