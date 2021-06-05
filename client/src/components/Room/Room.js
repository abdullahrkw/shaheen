import React from 'react';
import Loader from "react-loader-spinner";
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
        let isLoading = this.props.isLoading;
        let roomStyle = {};
        if (isLoading) {
            roomStyle = {"opacity": 0.2};
        }
        return (
            <div onClick={this.props.makeTilesVisible} className="Room">
                <div className="loader">
                    <Loader visible={isLoading} type="Puff" color="#00BFFF" height={100} width={100}/>
                </div>
                <img style={roomStyle} src={this.state.room} className="room-img" alt="rooms" onLoad={this.props.stopRoomLoading}/>
            </div>
        );
    }
}

export default Room;
