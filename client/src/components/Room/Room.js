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
            roomStyle = { "opacity": 0.2 };
        }
        return (
            <div className="Room">
                <div className="loader">
                    <Loader visible={isLoading} type="Circles" color="#00BFFF" height={100} width={100} />
                </div>
                <svg viewBox="0 0 1800 1012"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <image href={this.state.room} height="100%" width="100%" opacity={isLoading?"0.2":"1"} onLoad={this.props.stopRoomLoading}/>
                    <polygon onClick={this.props.makeTilesVisible} points="0,1001 0,829 456,573 461,594 789,594 937,613 1089,619 1142,770 1329,775 1336,705 1800,1010 0,1010" fill="yellow" opacity="0" />
                </svg>

            </div>
        );
    }
}

export default Room;
